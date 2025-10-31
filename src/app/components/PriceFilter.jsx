'use client';

export default function PriceFilter({ value, onChange}) {
    return (
        <label>
            Max Price:
            <input type="number" value={value} onChange= {event => onChange(event.target.value)} />
        </label>
    );
}