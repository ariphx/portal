// Nunggu sampai halaman sepenuhnya dimuat
window.addEventListener('load', function() {
    setTimeout(function() {
        // Sembunyiin loading screen setelah 1,5 detik
        document.getElementById('loading').classList.add('hidden');
    }, 1500); // Tunda 1,5 detik
});
