'use client'

export default function CartSummary ({cart, decrement, reset}) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity,0);

    return (
        <div>
            <h3> Shopping Cart</h3>
            {cart.map( item => (
                <div key={item.id}>
                    {item.name} x {item.quantity} (${(item.price * item.quantity)})
                    <button onClick= {() => decrement(item.id)}>-</button>
                    </div>

            ))}
            <p> Total Items: {totalItems} | Total Price: ${totalPrice}</p>
            <button onClick={reset}> Reset Cart</button>

        </div>
    )


}