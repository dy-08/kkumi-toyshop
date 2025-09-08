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

    let slideItem = document.querySelectorAll('.detail__slide__box li'); // 큰 이미지

    let slideCount = document.querySelector('.detail__slide__count'); // 이미지 카운트
    let imgTotal = slideItem.length;
    let index = 1;
    slideCount.textContent = `${index} / ${imgTotal}`;

    //     let detail__slide__box = document.querySelector('.detail__slide__box');
    //     let detail__slide__item = document.querySelectorAll('.detail__slide__box li');
    //     let detail__slide__item__img = document.querySelectorAll('.detail__slide__box li img');
    //     let detail__slide__count = document.querySelector('.detail__slide__count');
    //     let count = 1;
    //     detail__slide__count.innerHTML = `${count} / ${detail__slide__item.length}`;
    //     let smallImg__box = document.querySelector('.detail__smallImg__box');
    //     smallImg__box.style.width = detail__slide__item.length * 100 + '%';

    //     detail__slide__item.forEach((item) => {
    //         let smallImg__item = document.createElement('li');
    //         let smallImg__btn = document.createElement('button');

    //         let img = item.querySelector('img').cloneNode(true);
    //         smallImg__btn.appendChild(img);

    //         smallImg__item.appendChild(smallImg__btn);
    //         smallImg__box.appendChild(smallImg__item);
    //     });

    //     let btns = document.querySelectorAll('.detail__smallImg__box button');
    //     btns.forEach((btn, idx) => {
    //         btn.classList.toggle('on', idx === 0);

    //         btn.addEventListener('click', () => {
    //             btns.forEach((b) => b.classList.remove('on'));
    //             btn.classList.add('on');
    //         });
    //     });
    // }

    // fetch('/data/outer.json')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         renderDetail(data[0]); // 첫 번째 아이템을 렌더링
    //     })
    //     .catch((error) => console.error('Error:', error));
}
