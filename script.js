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

  const now = new Date();
  const orderDateTime = now.toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  });

  const message = `🛒 *Buy Request - Drona Electronics*%0A` +
                  `*Product:* ${product}%0A` +
                  `*Name:* ${name}%0A` +
                  `*Address:* ${address}%0A` +
                  `*Quantity:* ${quantity}%0A` +
                  `*Mobile:* ${mobile}%0A` +
                  `🗓️ *Order Time:* ${orderDateTime}`;

  const phoneNumber = "917903212288"; 
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");

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

  const now = new Date();
  const orderDateTime = now.toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  });

  const message = `🖼️ *Frame Customization Request*%0A` +
                  `*Name:* ${name}%0A` +
                  `*Address:* ${address}%0A` +
                  `*Mobile:* ${mobile}%0A` +
                  `🗓️ *Order Time:* ${orderDateTime}%0A` +
                  `⚠️ *Note:* Please upload audio and photo in HD, or PDF format only.`;

  const phoneNumber = "917903212288";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");

  closeFrameForm();
  document.getElementById("frameForm").reset();
}

function openBulkOrderForm() {
  document.getElementById("bulkOrderModal").style.display = "flex";
}

function closeBulkOrderForm() {
  document.getElementById("bulkOrderModal").style.display = "none";
}

function submitBulkOrder(event) {
  event.preventDefault();

  const name = document.getElementById("bulkName").value;
  const business = document.getElementById("bulkBusiness").value;
  const mobile = document.getElementById("bulkMobile").value;
  const address = document.getElementById("bulkAddress").value;
  const product = document.getElementById("bulkProduct").value;
  const quantity = document.getElementById("bulkQuantity").value;

  const now = new Date();
  const orderTime = now.toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  });

  const message = `📦 *Bulk Order Enquiry*%0A` +
                  `*Name:* ${name}%0A` +
                  `*Business / Shop:* ${business}%0A` +
                  `*Mobile:* ${mobile}%0A` +
                  `*Address:* ${address}%0A` +
                  `*Product:* ${product}%0A` +
                  `*Quantity:* ${quantity}%0A` +
                  `🕒 *Enquiry Time:* ${orderTime}`;

  const phoneNumber = "917903212288"; 
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");

  closeBulkOrderForm();
  document.getElementById("bulkOrderForm").reset();
}

let startX = 0;

function touchStart(e, element) {
  startX = e.touches[0].clientX;
}

function touchMove(e, element) {
  e.preventDefault();
}

function touchEnd(element) {
  const endX = event.changedTouches[0].clientX;
  const deltaX = endX - startX;

  const images = element.querySelectorAll('.slider-image');
  const dots = element.querySelectorAll('.dot');
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

  if (Math.abs(deltaX) > 30) {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active-dot');

    if (deltaX < 0) {
      currentIndex = (currentIndex + 1) % images.length;
    } else {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active-dot');
  }
}

