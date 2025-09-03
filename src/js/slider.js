export function renderSlider() {
    const section = document.createElement('section');
    section.id = 'slide';

    section.innerHTML = `
        <ul class="slides">
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
        
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>

            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
            <li><div class="slider__text">MainText<br>innertext<br><span>brand</span></div></li>
        </ul>
        <p class="controller">
            <span class="material-symbols-outlined next">chevron_right</span>
            <span class="material-symbols-outlined prev">chevron_left</span>
        </p>
    `;
    const app = document.getElementById('app');
    app.appendChild(section);

    const slides = document.querySelector('.slides');
    const slide__img = document.querySelectorAll('.slides li');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slide__width = 480;
    const slideCount = slide__img.length;
    let currentIdx = 3;
    let is__animation = false;

    slides.style.width = (slide__width) * slideCount + 'px';

    slides.style.transition = "none";
    slides.style.left = -(slide__width * currentIdx) + 'px';

    function move__slide(num) {
        if (is__animation) return;
        is__animation = true;
        slides.style.transition = "0.5s";
        slides.style.left = -(slide__width * num) + 'px';
        currentIdx = num;
    }

    slides.addEventListener('transitionend', () => {
        is__animation = false;

        if (currentIdx >= slideCount - 3) {
            slides.style.transition = "none";
            currentIdx = 3;
            slides.style.left = -(slide__width * currentIdx) + 'px';
        } else if (currentIdx < 3) {
            slides.style.transition = "none";
            currentIdx = slideCount - 6;
            slides.style.left = -(slide__width * currentIdx) + 'px';
        }
    });

    prev.addEventListener('click', () => {
        move__slide(currentIdx - 3);
    });

    next.addEventListener('click', () => {
        move__slide(currentIdx + 3);
    });

    setInterval(() => {
        move__slide(currentIdx + 3);
    }, 3000);
}
