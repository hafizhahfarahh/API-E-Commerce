# API-E-Commerce
Tugas Membuat API Sederhana

# API Produk Sederhana
API REST sederhana menggunakan Node.js & Express untuk manajemen data produk (e-commerce).

## Instalasi
1. Clone repo atau ekstrak file zip project ke komputer/laptop.
2. Jalankan dari root folder:
   npm install

## Menjalankan Server
node index.js
(Server berjalan di http://localhost:3000)

## Endpoint

### GET /products
Ambil semua produk.
- Method: GET
- Contoh: 
  GET http://localhost:3000/products

### POST /products
Tambah produk baru.
- Method: POST
- Body (JSON):
  {
    "name": "Dompet",
    "price": 95000
  }

### PUT /products/:id
Update produk sesuai id.
- Method: PUT
- Body (JSON):
  {
    "name": "Sepatu",
    "price": 300000
  }

### DELETE /products/:id
Hapus produk sesuai id.
- Method: DELETE

## Contoh Respons
{
  "id": 1,
  "name": "Sepatu",
  "price": 250000
}
