// Sayfanın tamamen yüklendiğinden emin ol
document.addEventListener('DOMContentLoaded', function() {

    // HTML'deki elemanları seçiyoruz
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    
    const submitBtn = document.getElementById('submitBtn');
    const usernameInput = document.getElementById('usernameInput');

    const youtubeBtn = document.getElementById('youtubeBtn');
    const googleBtn = document.getElementById('googleBtn');

    // "ONAYLA" butonuna tıklama olayını dinle
    submitBtn.addEventListener('click', function() {
        
        // İsim kutusunun boş olup olmadığını kontrol edebiliriz (isteğe bağlı)
        if (usernameInput.value.trim() === "") {
            alert("Lütfen bir isim girin!");
            return; // İşlemi durdur
        }

        // 1. Ekranı gizle
        screen1.classList.remove('active');
        
        // 2. Ekranı göster
        screen2.classList.add('active');
    });

    // YouTube butonuna tıklama olayı
    youtubeBtn.addEventListener('click', function() {
        // Yeni sekmede YouTube'u aç
        window.open('https://www.youtube.com', '_blank');
    });

    // Google butonuna tıklama olayı
    googleBtn.addEventListener('click', function() {
        // Yeni sekmede Google'ı aç
        window.open('https://www.google.com', '_blank');
    });

});
