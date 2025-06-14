function buyNow() {
    alert("Redirecting to checkout...");
    // window.location.href = "checkout.html";
  }
  
  function learnMore() {
    alert("Scroll to learn more about the product.");
    window.scrollTo({
      top: document.querySelector(".features").offsetTop,
      behavior: 'smooth'
    });
  }
  
  let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  