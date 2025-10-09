$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
});


(function () {
    const slider = document.getElementById('myRange');
    const label = document.getElementById('thumbValue');

    function updateLabelPosition() {
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const val = parseFloat(slider.value);
        const percent = (val - min) / (max - min) * 100;

        // set text
        label.textContent = val;

        // position: use percent and let Tailwind's -translate-x-1/2 center the label
        label.style.left = percent + '%';
    }

    // update while dragging
    slider.addEventListener('input', updateLabelPosition);

    // keep label correct on page load and resize
    window.addEventListener('resize', updateLabelPosition);
    updateLabelPosition();

    // optional: show label only while dragging (uncomment if you want)
    // slider.addEventListener('pointerdown', () => label.classList.remove('hidden'));
    // slider.addEventListener('pointerup', () => label.classList.add('hidden'));
})();