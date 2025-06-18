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

// === Carousel Logic ===
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

// Auto-slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

// === Lightbox ===
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = imgElement.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// === Buy Form ===
function openBuyForm(productName) {
  document.getElementById("product").value = productName;
  document.getElementById("buyFormModal").style.display = "flex";
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
  const quantity = document.getElementById("quantity") ? document.getElementById("quantity").value : 1;

   // 🕒 Get current date & time
  const now = new Date();
  const orderDateTime = now.toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  });

   // 📩 Compose WhatsApp message
  const message = `🛒 *Buy Request - Drona Electronics*%0A` +
                  `*Product:* ${product}%0A` +
                  `*Name:* ${name}%0A` +
                  `*Address:* ${address}%0A` +
                  `*Quantity:* ${quantity}%0A` +
                  `*Mobile:* ${mobile}%0A` +
                  `🗓️ *Order Time:* ${orderDateTime}`;

  const phoneNumber = "917903212288"; // ✅ your WhatsApp number
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  // Optional: Close form & reset
  closeBuyForm();
  document.getElementById("buyForm").reset();
}

function openFrameForm() {
  document.getElementById("frameFormModal").style.display = "flex";
}

function closeFrameForm() {
  document.getElementById("frameFormModal").style.display = "none";
}

function submitFrameRequest(event) {
  event.preventDefault();

  const name = document.getElementById("frameName").value;
  const address = document.getElementById("frameAddress").value;
  const mobile = document.getElementById("frameMobile").value;

  // 🕒 Get current date & time
  const now = new Date();
  const orderDateTime = now.toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  });


 // 📩 Compose WhatsApp message
  const message = `🖼️ *Frame Customization Request*%0A` +
                  `*Name:* ${name}%0A` +
                  `*Address:* ${address}%0A` +
                  `*Mobile:* ${mobile}%0A` +
                  `🗓️ *Order Time:* ${orderDateTime}%0A` +
                  `⚠️ *Note:* Please upload audio & photo in HD, and PDF format only.`;

  const phoneNumber = "917903212288";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  closeFrameForm();
  document.getElementById("frameForm").reset();
}
