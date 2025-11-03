'use client';

export default function CategoryFilter ({value, onChange}) {
    const categories = ['','Electronics','Furniture','Clothing'];

    return (
        <label id= "category-filter">
            Category: 
            <select id= "select-category" value={value} onChange={event => onChange(event.target.value)}>
                {categories.map( c => (
                    <option key={c} value={c}>{c || 'All'}</option>
                ))}
            </select>
        </label>
    );
}