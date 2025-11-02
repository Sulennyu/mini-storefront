'use client';

export default function CategoryFilter ({value, onChange}) {
    const categories = ['','Electronics','Furniture','Clothing'];

    return (
        <label>
            Category: 
            <select value={value} onChange={event => (event.target.value)}>
                {categories.map( c => (
                    <option key={c} value={c}>{c || 'All'}</option>
                ))}
            </select>
        </label>
    );
}