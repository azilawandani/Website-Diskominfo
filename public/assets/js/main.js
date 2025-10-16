document.addEventListener('DOMContentLoaded', () => {

    // --- Script untuk Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Script untuk Profil Dropdown Toggle ---
    const profileDropdownButton = document.getElementById('profile-dropdown-button');
    const profileDropdownMenu = document.getElementById('profile-dropdown-menu');

    if (profileDropdownButton && profileDropdownMenu) {
        profileDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation();
            // Tutup dropdown lain jika terbuka
            if (galeriDropdownMenu && !galeriDropdownMenu.classList.contains('hidden')) {
                galeriDropdownMenu.classList.add('hidden');
            }
            profileDropdownMenu.classList.toggle('hidden');
        });
    }

    // --- Script untuk Galeri Dropdown Toggle (BARU) ---
    const galeriDropdownButton = document.getElementById('galeri-dropdown-button');
    const galeriDropdownMenu = document.getElementById('galeri-dropdown-menu');

    if (galeriDropdownButton && galeriDropdownMenu) {
        galeriDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation();
            // Tutup dropdown lain jika terbuka
            if (profileDropdownMenu && !profileDropdownMenu.classList.contains('hidden')) {
                profileDropdownMenu.classList.add('hidden');
            }
            galeriDropdownMenu.classList.toggle('hidden');
        });
    }

    // --- Menutup SEMUA dropdown jika user mengklik di luar area menu ---
    window.addEventListener('click', () => {
        if (profileDropdownMenu && !profileDropdownMenu.classList.contains('hidden')) {
            profileDropdownMenu.classList.add('hidden');
        }
        if (galeriDropdownMenu && !galeriDropdownMenu.classList.contains('hidden')) {
            galeriDropdownMenu.classList.add('hidden');
        }
    });

    // Menghentikan penutupan jika user mengklik di dalam menu dropdown itu sendiri
    if (profileDropdownMenu) {
        profileDropdownMenu.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
    if (galeriDropdownMenu) {
        galeriDropdownMenu.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
});
