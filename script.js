document.addEventListener('DOMContentLoaded', function() {
    const tautanNavigasi = document.querySelectorAll('.nav-link');
    const bagianHalaman = document.querySelectorAll('.page-section');
    const tombolMenuHP = document.querySelector('.mobile-menu-toggle');
    const wadahTautanNavigasi = document.querySelector('.nav-links');
    
    
    if (tombolMenuHP) {
        tombolMenuHP.addEventListener('click', function() {
            wadahTautanNavigasi.classList.toggle('active');
            const ikon = this.querySelector('i');
            if (wadahTautanNavigasi.classList.contains('active')) {
                ikon.classList.remove('fa-bars');
                ikon.classList.add('fa-times');
            } else {
                ikon.classList.remove('fa-times');
                ikon.classList.add('fa-bars');
            }
        });
    }
    
   
    function tampilkanHalaman(idHalaman) {
        
        const halamanAktif = document.querySelector('.page-section.active');
        
        if (halamanAktif && halamanAktif.id !== idHalaman) {
            halamanAktif.style.opacity = '0';
            halamanAktif.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                
                bagianHalaman.forEach(bagian => {
                    bagian.classList.remove('active');
                    bagian.style.opacity = '0';
                    bagian.style.transform = 'translateY(20px)';
                });
                
                tautanNavigasi.forEach(link => {
                    link.classList.remove('active');
                });
                
                const halamanDipilih = document.getElementById(idHalaman);
                if (halamanDipilih) {
                    halamanDipilih.classList.add('active');
                    
                    setTimeout(() => {
                        halamanDipilih.style.opacity = '1';
                        halamanDipilih.style.transform = 'translateY(0)';
                    }, 50);
                }
                
                const tautanAktif = document.querySelector(`[data-page="${idHalaman}"]`);
                if (tautanAktif) {
                    tautanAktif.classList.add('active');
                }
            }, 300);
        } else {

            bagianHalaman.forEach(bagian => {
                bagian.classList.remove('active');
                bagian.style.opacity = '0';
                bagian.style.transform = 'translateY(20px)';
            });
            
            tautanNavigasi.forEach(link => {
                link.classList.remove('active');
            });
            
            const halamanDipilih = document.getElementById(idHalaman);
            if (halamanDipilih) {
                halamanDipilih.classList.add('active');
                setTimeout(() => {
                    halamanDipilih.style.opacity = '1';
                    halamanDipilih.style.transform = 'translateY(0)';
                }, 50);
            }
            
            const tautanAktif = document.querySelector(`[data-page="${idHalaman}"]`);
            if (tautanAktif) {
                tautanAktif.classList.add('active');
            }
        }
    }
    
    tautanNavigasi.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const idHalaman = this.getAttribute('data-page');
            tampilkanHalaman(idHalaman);
        });
    });
    
    document.querySelectorAll('.btn').forEach(tombol => {
        tombol.addEventListener('click', function() {
            const ikon = this.querySelector('i');
            
            if (ikon.classList.contains('fa-download')) {
                const tautan = document.createElement('a');
                tautan.href = '#';
                tautan.download = 'Rama_Wijaksono_CV.pdf';
                tautan.click();
            } else if (ikon.classList.contains('fa-envelope')) {
                tampilkanHalaman('contact');
            } else if (ikon.classList.contains('fa-user')) {
                tampilkanHalaman('profile');
            }
        });
    });
    
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('click', function() {
            const ikon = this.querySelector('i');
            const teks = this.querySelector('span').textContent;
            
            if (ikon.classList.contains('fa-envelope')) {
            } else if (ikon.classList.contains('fa-whatsapp')) {
                window.open('https://wa.me/628123456789', '_blank');
            } else if (ikon.classList.contains('fa-instagram')) {
                window.open('https://instagram.com/ramq_08_', '_blank');
            } else if (ikon.classList.contains('fa-linkedin')) {
                window.open('https://linkedin.com/in/rama-wijaksono-sutarto', '_blank');
            }
        });
    });
  
    const opsiPengamat = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const pengamat = new IntersectionObserver((entri) => {
        entri.forEach(item => {
            if (item.isIntersecting) {
                item.target.style.opacity = '1';
                item.target.style.transform = 'translateY(0)';
            }
        });
    }, opsiPengamat);
    
    bagianHalaman.forEach(bagian => {
        bagian.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    const halamanAwal = document.querySelector('.page-section.active');
    if (halamanAwal) {
        setTimeout(() => {
            halamanAwal.style.opacity = '1';
            halamanAwal.style.transform = 'translateY(0)';
        }, 100);
    }

});
