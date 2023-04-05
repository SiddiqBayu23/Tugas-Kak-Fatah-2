
# TUGAS KAK FATAH 02
TUGAS JAVA DOOM

Section 2 - Introduction to DOM:
Pada section ini, pembaca akan diperkenalkan dengan DOM (Document Object Model) dan bagaimana cara mengakses dan memanipulasi elemen-elemen HTML melalui DOM.

Contoh:

    Mengakses elemen HTML menggunakan DOM dan merubah warnanya dengan JavaScript.
    Use case: Untuk memudahkan identifikasi elemen tertentu pada halaman web, atau untuk membuat efek visual pada elemen tertentu.

    Menambahkan elemen baru ke dalam halaman HTML menggunakan DOM.
    Use case: Untuk menambahkan informasi atau konten baru ke dalam halaman web secara dinamis.

    Menangkap event yang terjadi pada elemen HTML menggunakan DOM dan meresponsnya dengan JavaScript.
    Use case: Untuk membuat interaksi pada halaman web, seperti mengklik tombol atau memasukkan data pada form.

Section 3 - Selecting Elements:
Pada section ini, pembaca akan belajar cara memilih elemen-elemen HTML menggunakan DOM.

Contoh:

    Menggunakan metode getElementById() untuk memilih elemen berdasarkan ID.
    Use case: Untuk memilih elemen tertentu yang memiliki ID unik pada halaman web.

    Menggunakan metode getElementsByTagName() untuk memilih elemen berdasarkan tag HTML-nya.
    Use case: Untuk memilih semua elemen dengan tag tertentu pada halaman web, seperti memilih semua elemen <p> atau semua elemen <img>.

    Menggunakan metode getElementsByClassName() untuk memilih elemen berdasarkan kelasnya.
    Use case: Untuk memilih semua elemen yang memiliki kelas tertentu pada halaman web.

Section 4 - Manipulating Elements:
Pada section ini, pembaca akan belajar cara memanipulasi elemen-elemen HTML menggunakan DOM, seperti merubah isi teks, atribut, atau style dari elemen.

Contoh:

    Mengubah isi teks dari elemen HTML menggunakan metode innerHTML.
    Use case: Untuk mengupdate konten halaman web secara dinamis, seperti menampilkan informasi terbaru atau menampilkan pesan error.

    Mengubah atribut dari elemen HTML menggunakan metode setAttribute().
    Use case: Untuk mengubah sifat tertentu dari elemen, seperti mengubah sumber gambar atau mengubah nilai dari atribut input.

    Mengubah style dari elemen HTML menggunakan metode style.
    Use case: Untuk membuat efek visual pada halaman web, seperti mengubah warna atau ukuran teks.

Section 5 - Creating and Removing Elements:
Pada section ini, pembaca akan belajar cara membuat dan menghapus elemen HTML menggunakan DOM.

Contoh:

    Membuat elemen baru menggunakan metode createElement() dan menambahkannya ke dalam halaman web menggunakan metode appendChild().
    Use case: Untuk menambahkan informasi atau konten baru ke dalam halaman web secara dinamis.

    Menghapus elemen menggunakan metode removeChild().
    Use case: Untuk menghapus elemen tertentu pada halaman

Section 6 - Manipulating Element's Styles: berisi metode untuk mengambil atau mengatur style inline dari elemen, mengambil ukuran elemen, dan mengubah class CSS dari elemen seperti style property, getComputedStyle(), className property, dan classList property.

contoh1:
    Pada baris pertama, program menggunakan method getElementById() untuk mencari elemen dengan id gambar. Kemudian hasil pencarian disimpan dalam variabel elemenGambar.Kemudian pada baris kedua, program menggunakan method getAttribute() untuk mendapatkan nilai atribut src dari elemen gambar yang ditemukan pada baris pertama. Nilai dari atribut src ini kemudian disimpan dalam variabel nilaiSrc.Pada baris ketiga, program mencetak nilai dari variabel nilaiSrc ke konsol menggunakan method console.log(). Hal ini berguna untuk memastikan bahwa nilai atribut src berhasil didapatkan dengan benar dan sesuai dengan yang diharapkan.

Contoh 2:   
    Langkah pertama adalah dengan menggunakan metode document.getElementById("title") untuk mengambil elemen dengan id "title". Kemudian, window.getComputedStyle() digunakan untuk mendapatkan objek CSSStyleDeclaration yang berisi semua properti CSS yang diterapkan pada elemen tersebut.
    Terakhir, getPropertyValue("color") digunakan untuk mendapatkan nilai warna yang diterapkan pada properti "color" pada objek CSSStyleDeclaration. Hasilnya kemudian dicetak pada konsol dengan console.log(titleColor).

Section 7 - Working with Events: berisi informasi tentang event JavaScript, cara menangani event, event yang terkait dengan halaman, event mouse, keyboard, scroll, focus, dan event custom.

contoh1:
    Use case 1: Ketika tombol "Escape" pada keyboard ditekan, modal yang memiliki kelas "modal" akan dihilangkan. Program tersebut menggunakan event listener untuk "keydown" pada window. Ketika event terjadi, program mengecek apakah key yang ditekan adalah "Escape". Jika ya, maka program akan menghilangkan kelas "show" dari elemen modal.
    Use case 2: Ketika tombol "Enter" pada keyboard ditekan dalam sebuah form, form akan di-submit. Program tersebut menggunakan event listener untuk "keydown" pada elemen form. Ketika event terjadi, program mengecek apakah key yang ditekan adalah "Enter". Jika ya, maka program akan mencegah submit form dan meng-submit form secara manual dengan menggunakan metode "submit()" pada elemen form tersebut.

section 8 Scripting Web Forms: berisi informasi tentang manipulasi elemen dalam bentuk web seperti form submit, radio button, checkbox, select box, add/remove options, dan handling change event.

pada kasus ini saya masih belum mengerti dan saya tidak bisa mengasi uses case nya 




 
