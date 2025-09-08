export function renderDetail() {
    const section = document.createElement('section');
    section.id = 'detail';
    section.innerHTML = `
       
`;

    const app = document.getElementById('app');
    app.appendChild(section);

    let slideBox = document.querySelector('.detail__slide__box'); // 큰 이미지 박스
    let smallImgBox = document.querySelector('.detail__smallImg__box'); // 작은 이미지 박스
    let imgSrc = document.querySelectorAll('.detail__slide__box img');
    imgSrc.forEach((item) => {
        let src = item.src;
        let li = document.createElement('li');
        let btn = document.createElement('button');
        li.appendChild(btn);
        btn.innerHTML = `<img src="${src}">`;
        smallImgBox.appendChild(li);
    });

    let smallItem = smallImgBox.querySelectorAll('li');
    smallItem[0].classList.add('on');

    function itemMatch(){
        smallItem.forEach((i) => {
            i.classList.remove('on')
        });
        smallItem[index-1].classList.add('on');
    }
    smallItem.forEach((item) => {
        item.addEventListener('click', () => {
        smallItem.forEach((i) => {
            i.classList.remove('on')
        });
            item.classList.add('on');
        });
    })

    let slideItem = document.querySelectorAll('.detail__slide__box li'); // 슬라이드 li
    let slideCount = document.querySelector('.detail__slide__count');
    let imgTotal = slideItem.length;

    const firstClone = slideItem[0].cloneNode(true);
    const lastClone = slideItem[imgTotal - 1].cloneNode(true);
    slideBox.appendChild(firstClone); // 맨 뒤에 첫 번째 복제
    slideBox.insertBefore(lastClone, slideItem[0]); // 맨 앞에 마지막 복제

    slideItem = document.querySelectorAll('.detail__slide__box li');
    imgTotal = slideItem.length;

    let index = 1;
    let step = slideItem[0].offsetWidth;

    // 초기 위치
    slideBox.style.transition = 'transform 0.3s ease';
    slideBox.style.transform = `translateX(-${step * index}px)`;

    // 카운트 초기 표시
    updateCount();

    function updateCount() {
        let showIndex = index;
        if (index === 0) showIndex = imgTotal - 2;
        else if (index === imgTotal - 1) showIndex = 1;
        slideCount.textContent = `${showIndex} / ${imgTotal - 2}`;
    }

    function next() {
        index++;
        slideBox.style.transition = 'transform 0.3s ease';
        slideBox.style.transform = `translateX(-${step * index}px)`;
        itemMatch();
        updateCount();
    }

    function prev() {
        index--;
        slideBox.style.transition = 'transform 0.3s ease';
        slideBox.style.transform = `translateX(-${step * index}px)`;
        itemMatch();
        updateCount();
    }

    window.nextBtn = function () {
        next();
    }

    window.prevBtn = function () {
        prev();
    }

    slideBox.addEventListener('transitionend', () => {
        // 마지막 복제 슬라이드
        if (index === imgTotal - 1) {
            slideBox.style.transition = 'none';
            index = 1;
            slideBox.style.transform = `translateX(-${step * index}px)`;
            slideBox.offsetWidth;
            itemMatch();
            slideBox.style.transition = 'transform 0.3s ease';
        }

        // 첫 번째 복제 슬라이드
        if (index === 0) {
            slideBox.style.transition = 'none';
            index = imgTotal - 2;
            slideBox.style.transform = `translateX(-${step * index}px)`;
            slideBox.offsetWidth;
            itemMatch();
            slideBox.style.transition = 'transform 0.3s ease';
        }
    });
}
