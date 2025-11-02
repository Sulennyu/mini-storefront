'use client'

export default function CartSummary ({cart, decrement, reset}) {
    const items = Object.values(cart);
    const totalItems = items.reduce((sum, item) => sum + item.quantiity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2> Shopping Cart</h2>
            {items.map( item => (
                <div key={item.id}>
                    {item.name} x {item.quantity} (${item.price * item.quantity})
                    <button onClick= {() => decrement(item.id)}></button>
                    </div>

            ))}
            <p> Total Items: {totalItems} | Total Price: ${totalPrice}</p>
            <button onClick={reset}> Reset Cart</button>

        </div>
    )


}