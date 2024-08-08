
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
**Register User**
URL: /api/register
Metode: POST
```sh
{
  "name": "testuser",
  "password": "password123"
}
```

**Login User**
URL: /api/login
Metode: POST
```sh
{
  "name": "testuser",
  "password": "password123"
}
```

**Login User**
URL: /api/login
Metode: POST
```sh
{
  "name": "testuser",
  "password": "password123"
}
```

**Membuat Kategori**
URL: /api/categories
Metode: POST
```sh
{
"name": "Elektronik"
}
```

**Melihat Kategori**
URL: /api/categories
Metode: GET

**Melihat Kategori**
URL: /api/products
Metode: GET

**Membuat Produk**
URL: /api/products
Metode: POST
```sh
{
  "name": "Kompor",
  "price": 1200,
  "category": "66b45ad84766633687d4e977",
  "description": "High-performance stove.",
  "images": ["https://upload.wikimedia.org/wikipedia/commons/d/d6/Gas_stove_%281%29.jpg", "https://img.freepik.com/free-vector/kitchen-appliance-gas-cooking-surface-cooktop_134830-659.jpg"],
  "qty": 50
}
```

**Melihat Produk**
URL: /api/products?page=1&limit=5
Metode: GET

**Memasang Order**
URL: /api/orders
Metode: POST
```sh
{
  "userId": "66b44fc54766633687d4e971",
  "orderItems": [
    {
      "productId": "66b45b854766633687d4e97a",
      "price": 1200,
      "quantity": 1
    }
  ],
  "customerEmail": "irontmp+7kx58@gmail.com",
  "customerName": "Budi"
}
```
