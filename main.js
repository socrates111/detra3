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
