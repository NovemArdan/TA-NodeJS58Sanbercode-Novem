
# TA-NodeJS58Sanbercode-Novem

  

Proyek ini adalah RESTful API yang dikembangkan dengan Node.js, Express, dan MongoDB. API ini menangani operasi CRUD untuk produk dan kategori, mengelola order, dan mengirim invoice melalui email.  

**Fitur**
 - Operasi CRUD untuk produk dan kategori. 
 - Pembuatan order dengan pengiriman invoice via email. 
 - Dukungan pagination untuk daftar produk. 
 - Kemampuan upload file untuk gambar produk.

**Penggunaan**
**Memulai Server**
Mulai aplikasi dengan menjalankan:
npm run dev
Server akan berjalan di http://localhost:3000.

**Mengakses Aplikasi**
Anda dapat mengakses API di http://localhost:3000/api.

**Menggunakan Postman**
**Membuat Kategori**
URL: /api/categories
Metode: POST
```sh
{
"name": "Elektronik"
}
```

**Membuat Produk**
URL: /api/products
Metode: POST
```sh
{
"name": "Laptop",
"description": "Laptop berkinerja tinggi.",
"price": 1500,
"qty": 100,
"category": "<category_id>",
"images": ["image1.jpg", "image2.jpg"]
}
```

**Memasang Order**
URL: /api/orders
Metode: POST
```sh
{
"userId": "<user_id>",
"customerEmail": "customer@example.com",
"customerName": "John Doe",
"orderItems": [
{
"productId": "<product_id>",
"price": 1500,
"quantity": 2
}
]
}
```
