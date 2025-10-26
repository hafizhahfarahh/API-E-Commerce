const express = require('express');
const app = express();
const port = 3000;

// Middleware agar API bisa menerima request bertipe JSON
app.use(express.json());

// Data dummy produk
let products = [
    { id: 1, name: "Sepatu", price: 250000 },
    { id: 2, name: "Tas", price: 150000 }
];

// Endpoint GET untuk mengambil semua produk
app.get('/products', (req, res) => {
    res.json(products);
});

// Endpoint POST untuk menambah produk baru
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Endpoint PUT untuk mengedit produk
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: "Produk tidak ditemukan!" });
    }
    product.name = req.body.name;
    product.price = req.body.price;
    res.json(product);
});

// Endpoint DELETE untuk menghapus produk
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(p => p.id !== id);
    res.json({ message: "Produk sudah dihapus" });
});

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Products API!');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
