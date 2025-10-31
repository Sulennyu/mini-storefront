export async function GET () {
    const products= [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 6 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 7 },
    { id: 'p3', name: 'Jeans', price: 75, category: 'Clothing', stock: 4 },
    { id: 'p4', name: 'Airpods', price: 200, category: 'Electronics', stock: 5 },
    { id: 'p5', name: 'Couch', price: 800, category: 'Furniture', stock: 6 },
    { id: 'p6', name: 'Shirt', price: 50, category: 'Clothing', stock: 3 },
    { id: 'p7', name: 'Phone', price: 900, category: 'Electronics', stock: 5 },
    { id: 'p8', name: 'Desk', price: 400, category: 'Furniture', stock: 4 },
    { id: 'p9', name: 'Dress', price: 110, category: 'Clothing', stock: 8 },
    { id: 'p10', name: 'Charger', price: 25, category: 'Electronics', stock: 3 },
    { id: 'p11', name: 'Bookshelf', price: 500, category: 'Furniture', stock: 3 },
    { id: 'p12', name: 'Sweatpants', price: 100, category: 'Clothing', stock: 4 }
    ];
    return Response.json(products);
}