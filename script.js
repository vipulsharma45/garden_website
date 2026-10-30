const images = document.querySelectorAll(
    ".owner-card img, .gallery-item img"
);

const modal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        fullImage.src = this.src;
        fullImage.alt = this.alt;
    });
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});