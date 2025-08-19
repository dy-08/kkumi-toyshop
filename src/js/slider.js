export function renderSlider() {
    const app = document.getElementById('app');
    app.innerHTML = `<section id="slideShow">
        <ul class="slides">
            <li><img src="./src/assets/images/slider/flower.jpg" alt="flower"></li>
            <li><img src="./src/assets/images/slider/fox.jpg" alt="fox"></li>
            <li><img src="./src/assets/images/slider/lightning.jpg" alt="lightning"></li>
            <li><img src="./src/assets/images/slider/moon.jpg" alt="moon"></li>
            <li><img src="./src/assets/images/slider/nature.jpg" alt="nature"></li>
            <li><img src="./src/assets/images/slider/building.jpg" alt="building"></li>
            <li><img src="./src/assets/images/slider/harvestmoon.jpg" alt="harvestmoon"></li>
            <li><img src="./src/assets/images/slider/tower.jpg" alt="tower"></li>
            <li><img src="./src/assets/images/slider/flower.jpg" alt="flower"></li>
            <li><img src="./src/assets/images/slider/fox.jpg" alt="fox"></li>
            
        </ul>
        <p class="controller">
            <span class="prev">&lang;</span>
            <span class="next">&rang;</span>
        </p>
    </section>
    `;
        const slides = document.querySelector(".slides");
        const slide__img = document.querySelectorAll(".slides li");
        let currentIdx = 0;
        const slideCount = slide__img.length;
        const prev = document.querySelector(".prev");
        const next = document.querySelector(".next");
        const slide__width = 480;
        const slide__margin = 100;
        
        slides.style.width = (slide__width + slide__margin) * slideCount + "px";
        function move__slide(num) {
            slides.style.left = -num * 480 +"px";
            currentIdx = num;
        }

        prev.addEventListener("click", function(){
            if(currentIdx >= 3) move__slide(currentIdx -3);
            else move__slide(0);
        });

        next.addEventListener("click", function(){
            if(currentIdx !== slideCount - 4) move__slide(currentIdx +3);
            else move__slide(slideCount - 3);
        });

        setInterval(()=>{
            let nextIdx = (currentIdx +3 ) % slideCount;
            move__slide(nextIdx);
        }, 3000);
}


