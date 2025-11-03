'use client';

import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [status, setStatus] = useState('loading');
  // Fetch products
  useEffect(() => {
      fetch('/api/products')
      .then(res => res.json())
      .then (data => { setProducts(data); setStatus(data.length === 0 ? 'empty' : '');
      })
      .catch (error => {console.error(error); setStatus('error');
      });
  }, []);

  useEffect(() => {
     const interval = setInterval (() => {
       setProducts(prev => prev.map (p => ({...p, stock: p.stock < p.initialStock ? p.stock +1 : p.stock,   
        }))
       );
     }, 2000);
        return () =>clearInterval(interval);
    }, []);

  // Add to cart
  const addCart = product => {
    if (product.stock <= 0) return;
    setCart(prev => {
      const adding = prev.find(item => item.id === product.id);
      if (adding) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Reducing stock
    setProducts(prev =>
      prev.map(p => p.id === product.id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p)
    );
  };
  // Decrement cart items
  const handleDecrement = id => {
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter(item => item.quantity > 0)
    );
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, stock: p.stock + 1 } : p))
    );
  };
  // Reset cart
  const handleReset = () => {
    setCart([]);
    setProducts(prev => 
        prev.map(p => {
            const handled = cart.find(c => c.id === p.id);
            return handled ? {...p, stock: p.stock + handled.quantity } : p;
        })
    );
  };
  // Filter products
  const filteredProducts = products.filter(p => 
    (!category || p.category === category) &&
    (!maxPrice || p.price <= Number(maxPrice))
  );
  return (
    <div className="catalog">
      <h1>Mini Storefront</h1>
      <div className="catalog-header">
        <CategoryFilter value={category} onChange={setCategory} />
        <PriceFilter value={maxPrice} onChange={setMaxPrice} />
      </div>
         <CartSummary cart={cart} decrement={handleDecrement} reset={handleReset} />
         {status ? ( <StatusMessage status={status} /> ) : (
         <ProductList products={filteredProducts} onAdd={addCart} />
      )}
    </div>
  );
}