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
  function openBuyForm(productName) {
  document.getElementById("buyFormModal").style.display = "flex";
  document.getElementById("product").value = productName;
}

function closeBuyForm() {
  document.getElementById("buyFormModal").style.display = "none";
}

function submitBuyRequest(event) {
  event.preventDefault();

  const product = document.getElementById("product").value;
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const mobile = document.getElementById("mobile").value;

  const data = {
    product,
    name,
    address,
    mobile
  };

  fetch("https://script.google.com/macros/s/AKfycbzk0igBPWgyNVlnBLTBE_PNtiX15EgAcZjQUS7rhryQohHSUIvDEPCyzb2zmcgzAi9Zjw/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(response => {
    alert("Your request was submitted successfully!");
    closeBuyForm();
    document.getElementById("buyForm").reset();
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  });
}

