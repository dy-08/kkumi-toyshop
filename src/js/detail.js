export function renderDetail() {
    const section = document.createElement('section');
    section.id = 'detail';

    section.innerHTML = `
<div id="detail">
        <div class="detail__inner">
            <div class="detail__left__wrap">
                <div class="detail__smallImg__slide">
                    <ul class="detail__smallImg__box"></ul>
                </div>
                <div class="detail__img__slide">
                    <ul class="detail__slide__box">
                        <li>
                            <img src="src/assets/images/detail/detail_img01.webp" alt="">
                        </li>
                        <li>
                            <img src="src/assets/images/detail/detail_img02.webp" alt="">
                        </li>
                        <li>
                            <img src="src/assets/images/detail/detail_img03.webp" alt="">
                        </li>
                        <li>
                            <img src="src/assets/images/detail/detail_img04.webp" alt="">
                        </li>
                        <li>
                            <img src="src/assets/images/detail/detail_img05.webp" alt="">
                        </li>
                        <li>
                            <img src="src/assets/images/detail/detail_img06.webp" alt="">
                        </li>
                    </ul>
                    <div class="detail__slide__control">
                        <button type="button" onclick="prevBtn()" class="prevBtn"></button>
                        <button type="button" onclick="nextBtn()" class="nextBtn"></button>
                    </div>
                    <div class="detail__slide__count"></div>
                </div>

                <div class="detail__info__wrap">
                    <div class="detail__info__tab">
                        <ul>
                            <li>
                                <a href="#" class="on">정보</a>
                            </li>
                            <li>
                                <a href="#">문의</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="detail__right__wrap">
                <div class="detail__payment__info">
                    내용
                </div>
            </div>
        </div>
    </div>
`;

let detail__slide__box = document.querySelector('.detail__slide__box');
      let detail__slide__item = document.querySelectorAll('.detail__slide__box li');
      let detail__slide__item__img = document.querySelectorAll('.detail__slide__box li img');
      let detail__slide__count = document.querySelector('.detail__slide__count');
      let count = 1;
      detail__slide__count.innerHTML = `${count} / ${detail__slide__item.length}`
      let smallImg__box = document.querySelector('.detail__smallImg__box');
      smallImg__box.style.width = detail__slide__item.length * 100 + '%';


      detail__slide__item.forEach((item) => {
        let smallImg__item = document.createElement('li');
        let smallImg__btn = document.createElement('button');

        let img = item.querySelector('img').cloneNode(true);
        smallImg__btn.appendChild(img);

        smallImg__item.appendChild(smallImg__btn);
        smallImg__box.appendChild(smallImg__item);
      });

      let btns = document.querySelectorAll('.detail__smallImg__box button');
      btns.forEach((btn, idx) => {
        btn.classList.toggle('on', idx === 0);

        btn.addEventListener('click', () => {
          btns.forEach((b) => b.classList.remove('on'));
          btn.classList.add('on');
        });
  });
}
