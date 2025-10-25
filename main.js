// navigation
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("navMenu");
  const toggleBtn = document.querySelector(".mobile-menu-btn");
  const dropdownTriggers = document.querySelectorAll(".nav-item > .nav-link[aria-haspopup='true']");

  // Toggle mobile drawer
  toggleBtn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggleBtn.classList.toggle("is-open", open);
    toggleBtn.setAttribute("aria-expanded", open);
    // Close all mobile submenus when closing drawer
    if (!open) document.querySelectorAll(".nav-item.open").forEach(li => li.classList.remove("open"));
  });

  // Mobile dropdown toggles (tap to open)
  dropdownTriggers.forEach(link => {
    link.addEventListener("click", (e) => {
      // Only intercept on mobile (drawer visible)
      const isMobile = getComputedStyle(toggleBtn).display !== "none";
      if (!isMobile) return;

      e.preventDefault();
      const parent = link.closest(".nav-item");
      const expanded = parent.classList.toggle("open");
      link.setAttribute("aria-expanded", expanded);
      // Close siblings
      parent.parentElement.querySelectorAll(".nav-item.open").forEach(sib => {
        if (sib !== parent) sib.classList.remove("open");
      });
    });
  });
});



// video
document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".hero-video");
    video.muted = true; // Ensure muted
    video.play().catch(err => {
        console.warn("Autoplay blocked:", err);
    });
});



function toggleExpand(id) {
            const element = document.getElementById(id);
            const button = element.previousElementSibling;
            const icon = button.querySelector('svg');

            if (element.classList.contains('active')) {
                element.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                element.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Mobile menu toggle (basic implementation)
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
        const target = document.querySelector('.parent');


        document.addEventListener('DOMContentLoaded', () => {
        const parent = document.querySelector('.parent');
        if (!parent) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                parent.classList.add('is-visible');   // fade/slide in
            } else {
                parent.classList.remove('is-visible'); // fade/slide out again
            }
            });
        }, { threshold: 0.3 });

        observer.observe(parent);
        });


        document.addEventListener('DOMContentLoaded', () => {
        const section = document.querySelector('.contractors');
        if (!section) return;

        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('is-visible');   // play in
            } else {
                section.classList.remove('is-visible'); // reset so it can replay
            }
            });
        }, { threshold: 0.25 });

        io.observe(section);
        });


        document.addEventListener('DOMContentLoaded', () => {
      const companyGrid = document.querySelector('.company-grid');
      if (!companyGrid) return;

      // Fallback for browsers without IntersectionObserver
      if (!('IntersectionObserver' in window)) {
        companyGrid.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            companyGrid.classList.add('is-visible');
          } else {
            companyGrid.classList.remove('is-visible'); // Re-trigger on scroll back
          }
        });
      }, { threshold: 0.3 });

      observer.observe(companyGrid);
      });

       document.addEventListener('DOMContentLoaded', () => {
      const companyGrid = document.querySelector('.comfort-content');
      if (!companyGrid) return;

      // Fallback for browsers without IntersectionObserver
      if (!('IntersectionObserver' in window)) {
        companyGrid.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            companyGrid.classList.add('is-visible');
          } else {
            companyGrid.classList.remove('is-visible'); // Re-trigger on scroll back
          }
        });
      }, { threshold: 0.3 });

      observer.observe(companyGrid);
      });
