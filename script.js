// Daftar gambar yang akan ditampilkan
const images = ["asset/img/img1.JPG" , "asset/img/img2.JPG" , "asset/img/img3.JPG"];
let currentImageIndex = 0;

function changeImage() {
    const imageElement = document.getElementById("dynamicImage");

    // Menyembunyikan gambar lama
    imageElement.style.opacity = 0;

    // Menunggu beberapa saat agar gambar lama hilang sebelum mengganti gambar
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];

        // Menampilkan gambar baru dengan transisi
        imageElement.style.opacity = 1;
    }, 1000); // Durasi untuk transisi gambar
}

// Ganti gambar setiap 5 detik
setInterval(changeImage, 5000);

// Teks yang akan ditampilkan
const message = "Semoga hari ini membawa kebahagiaan dan cinta yang lebih besar lagi! Aku sangat bersyukur bisa bersama kamu. Happy Birthday, Sayang! 💖";

// Menambahkan teks secara bertahap (typing effect)
let i = 0;
const typingTextElement = document.getElementById("typingText");
const nextButton = document.getElementById("nextButton");

function typeMessage() {
    if (i < message.length) {
        typingTextElement.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeMessage, 100); // Interval 100ms antar karakter
    } else {
        // Setelah teks selesai, tampilkan tombol
        nextButton.style.display = "inline-block";
    }
}

// Mulai mengetik pesan setelah halaman dimuat
window.onload = typeMessage;