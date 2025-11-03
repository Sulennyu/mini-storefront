'use client';

export default function PriceFilter({ value, onChange}) {
    return (
        <label>
            Max Price:
            <input id= "price-change" type="number" value={value} onChange= {event => onChange(event.target.value)} />
        </label>
    );
}