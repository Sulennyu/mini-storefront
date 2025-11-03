'use client';

export default function ProductCard({product, onAdd}) {
    const {name,price,stock,category} = product;

    return (
        <div className= "product-card">
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            <p>{stock > 0 ? `In stock: ${stock}` : 'Out of Stock'}</p>
            <button disabled= {stock <= 0} onClick= {() => onAdd(product)}> {stock <= 0 ? 'Sold Out' : 'Add to Cart'}</button>
        </div>
    );
}