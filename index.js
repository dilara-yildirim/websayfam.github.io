document.addEventListener("DOMContentLoaded", function() {
    // Profil fotoğrafını seçelim
    const profileImage = document.getElementById("profilResmi");

    // Yeni profil fotoğraflarını tanımlayalım
    const newImages = [
        "new_image1.jpg",
        "new_image2.jpg"
        // Diğer fotoğrafları buraya ekleyin
    ];

    let currentIndex = 0; // Başlangıç indeksi

    // Profil fotoğrafını değiştirmek için butona tıklama olayını dinleyelim
    const changeImageBtn = document.getElementById("changeImageBtn");
    changeImageBtn.addEventListener("click", function() {
        // İndeksi artır ve yeni profil fotoğrafını göster
        currentIndex = (currentIndex + 1) % newImages.length;
        // Profil fotoğrafının src'sini güncelle
        profileImage.src = newImages[currentIndex];
    });

    // Diğer fotoğrafları butona basınca göstermek için
    const images = document.querySelectorAll('.image-container img');
    const galleryChangeImageBtn = document.getElementById("galleryChangeImageBtn");
    let galleryCurrentIndex = 0;

    galleryChangeImageBtn.addEventListener("click", function() {
        // Mevcut fotoğrafı gizle
        images[galleryCurrentIndex].style.display = "none";
        // İndeksi güncelle
        galleryCurrentIndex = (galleryCurrentIndex + 1) % images.length;
        // Yeni fotoğrafı göster
        images[galleryCurrentIndex].style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById("profilResmi");

    // Profil fotoğrafını büyütme fonksiyonu
    function enlargeImage() {
        profileImage.style.transform = "scale(2.3)"; // 1.5 kat büyüt
    }

    // Profil fotoğrafına tıklandığında büyütme fonksiyonunu çağır
    profileImage.addEventListener("click", enlargeImage);
});
document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById("profilResmi");

    profileImage.addEventListener("click", function() {
        profileImage.classList.toggle("enlarged");
    });
});
/* JavaScript */
document.getElementById('profilResmi').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightboxImg').src = this.src;
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});
