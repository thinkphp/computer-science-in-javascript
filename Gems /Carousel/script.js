document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

  const carousel = document.querySelector('.carousel-items');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentPosition = 0;
        const imageWidth = 110; // Image width (100px) + margin (10px)
        const visibleImages = 4; // Show 4 images at a time
        const totalImages = document.querySelectorAll('.carousel-items img').length;
        const maxPosition = -(totalImages - visibleImages) * imageWidth;

        function updateCarousel() {
            carousel.style.transform = `translateX(${currentPosition}px)`;
            prevBtn.disabled = currentPosition === 0;
            nextBtn.disabled = currentPosition <= maxPosition;
        }

        nextBtn.addEventListener('click', () => {
            if (currentPosition > maxPosition) {
                currentPosition -= imageWidth;
                if (currentPosition < maxPosition) {
                    currentPosition = maxPosition;
                }
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentPosition < 0) {
                currentPosition += imageWidth;
                if (currentPosition > 0) {
                    currentPosition = 0;
                }
                updateCarousel();
            }
        });

        // Initial update
        updateCarousel();
});
