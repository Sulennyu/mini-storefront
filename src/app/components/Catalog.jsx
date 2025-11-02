'use client';

import {useEffect, useState} from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({price:'', category: ''});
    const [cart, setcart] = useState([]);
    const [status, setStatus] = useState('loading');

    const updateFilter = (key,value) => setFilters(prev => ({...prev, [key]: value }));
// Loading products
    useEffect(() => {
        async function load() {
            try {
                const res = await fetch ('/api/products');
                const data = await res.json();
                setProducts(data);
                setStatus(data.length ? 'ready' : 'empty');
            } catch {
                setStatus ('error');
            }
        }
        load();
    }, []);
    
// filtering products

    const filteredProducts = products.filter (p => 
    (!filters.category || p.category === filters.category) &&
    (!filters.price || p.price <= Number(filters.price))

    );
// Interval Stock Updates 

    useEffect(() => {
        const interval = setInterval (() => {
            setProducts(prev => 
                prev.map (p => ({...p, stock: p.stock < p.initialStock ? p.stock +1 : p.stock,
                }))
            );
        }, 2000);
        return () =>clearInterval(interval);
    }, []);

    const addToCart = (product) => {
        if (product.stock <= 0) return;
        setcart(prev=> [...prev,product]);
        setProducts (p => p.id === product.id ? {...p, stock: p.stock-1} :p )
    };
    const clearCart = () => setcart([]);

    return (
        <div> 
            <h1> Mini Storefront</h1>
            <CategoryFilter value={filters.category} onChange={v => updateFilter('category',v)} />
            <PriceFilter value={filters.price} onChange= {v => updateFilter('price', v)} />
            <CartSummary cart={cart} onClear={clearCart} />
            <StatusMessage status={status} />
            {status === 'ready' && (<ProductList products={filteredProducts} onAdd={addToCart} />)}
        </div>
    );
}
