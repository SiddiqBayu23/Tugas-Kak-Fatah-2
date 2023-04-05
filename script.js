// Section 2 - Introduction to DOM
// Contoh 1: Mengubah warna background elemen HTML
const elem = document.getElementById('header');
elem.style.backgroundColor = 'blue';

// Contoh 2: Menambahkan elemen baru ke dalam halaman HTML
const newElem = document.createElement('p');
newElem.innerHTML = 'Contoh elemen baru';
document.body.appendChild(newElem);

// Contoh 3: Menangkap event pada tombol dan mengubah isi teks
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  const elem = document.getElementById('header');
  elem.innerHTML = 'Hello, world!';
});

// Section 3 - Selecting Elements
// Contoh 1: Memilih semua elemen dengan tag 'p'
const elems = document.getElementsByTagName('p');
for (let i = 0; i < elems.length; i++) {
elems[i].style.color = 'red';
}

// Contoh 2: Memilih elemen dengan kelas 'intro'
const elem = document.getElementsByClassName('intro')[0];
elem.style.fontWeight = 'bold';

// Contoh 3: Memilih elemen berdasarkan query selector
const elem = document.querySelector('#header .title');
elem.style.fontSize = '24px';

// Section 4 - Manipulating Elements
// Contoh 1: Mengubah isi teks dari elemen HTML
const elem = document.getElementById('header');
elem.innerHTML = 'Hello, world!';

// Contoh 2: Mengubah atribut 'src' pada elemen gambar
const img = document.getElementById('img1');
img.setAttribute('src', 'image2.jpg');

// Section 5 - Creating and Removing Elements
// Contoh 1: Membuat elemen baru dan menambahkannya ke dalam halaman HTML
const newElem = document.createElement('div');
newElem.innerHTML = '<p>Contoh elemen baru</p>';
document.body.appendChild(newElem);

// Contoh 2: Menghapus elemen tertentu dari halaman HTML
const elem = document.getElementById('header');
elem.parentNode.removeChild(elem);

// Section 6 - Traversing the DOM
// Contoh 1: Menelusuri elemen parent
const elem = document.getElementById('header');
const parent = elem.parentNode;
parent.style.backgroundColor = 'green';

// Contoh 2: Menelusuri elemen sibling
const elem = document.getElementById('header');
const sibling = elem.nextElementSibling;
sibling.style.color = 'blue';

//Section 7 - Events://
// Contoh 1: Menangkap event pada tombol dan mengubah isi teks
const button = document.getElementById('btn');
btn.addEventListener('click', function() {
const elem = document.getElementById('header');
elem.innerHTML = 'Hello, world!';
});

// Contoh 2: Menangkap event pada form dan menampilkan hasil
const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
e.preventDefault();
const input = document.getElementById('input');
const result = document.getElementById('result');
result.innerHTML = input.value;
});