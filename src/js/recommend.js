export function renderRecommend() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <section id="recommend">
            <div class="recommend__wrap">
                <div class="recommend__contents">
                    <!-- . -->
                    <div class="recommend__fitness">
                        <p>
                            스포츠 종목 아이템 추천<br />
                            피트니스
                        </p>
                    </div>

                    <!-- view items -->
                    <div class="recommend__itemsWrap">
                        <div class="recommend__itemsInner">
                            <!-- add Items -->
                        </div>
                    </div>

                    <!-- Web to anotherWeb -->
                    <div class="recommend__btnWrap">
                        <span class="recommend__p"><span></span></span>
                        <span>무신사 플레이어에서 더보기</span>
                    </div>

                    <!-- slide btns -->
                    <!-- arrows: 40x40(20x20) -->
                    <span class="recommend__btn--pre"
                        ><img   
                            src="./src/assets/icons/svg/recommend/arrow_back_ios_20dp_000000_FILL0_wght200_GRAD0_opsz20.svg"
                            alt="이전화살표 아이콘"
                    /></span>
                    <span class="recommend__btn--next"
                        ><img
                            src="./src/assets/icons/svg/recommend/arrow_forward_ios_20dp_000000_FILL0_wght200_GRAD0_opsz20.svg"
                            alt="다음화살표 아이콘"
                    /></span>
                </div>
            </div>
        </section>
    `;

    function addItem(obj) {
        const itemBox = document.querySelector('.recommend__itemsInner');
        const div = document.createElement('div');
        div.className = 'recommend__items';
        const div10 = document.createElement('div');
        div10.className = 'recommend__itemTop';
        div10.style.backgroundImage = `url(${obj.imageSrc})`;
        const span = document.createElement('span');
        span.className = 'recommend__iconFavorite';
        div10.appendChild(span);
        const div20 = document.createElement('div');
        div20.className = 'recommend__itemBottom';
        const div21 = document.createElement('div');
        div21.className = 'recommend__brand';
        const p1 = document.createElement('p');
        p1.innerText = obj.brandName;
        div21.appendChild(p1);
        const div22 = document.createElement('div');
        div22.className = 'recommend__name';
        const p2 = document.createElement('p');
        p2.innerText = obj.itemName;
        div22.appendChild(p2);
        const div23 = document.createElement('div');
        div23.className = 'recommend__price';
        if (!obj.discountPrice) {
            const p3 = document.createElement('p');
            p3.className = 'recommend__discountedPrice';
            p3.innerText = `${obj.originPrice}원`;
            div23.appendChild(p3);
        } else {
            const p3 = document.createElement('p');
            p3.className = 'recommend__discount';
            p3.innerText = `${obj.discount}%`;
            const p4 = document.createElement('p');
            p4.className = 'recommend__discountedPrice';
            p4.innerText = `${obj.discountPrice}원`;
            div23.appendChild(p3);
            div23.appendChild(p4);
        }
        div20.appendChild(div21);
        div20.appendChild(div22);
        div20.appendChild(div23);
        div.appendChild(div10);
        div.appendChild(div20);
        itemBox.appendChild(div);
    }

    // 아이템 추가
    fetch('./public/data/recommend.json')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                addItem(item);
            });
        });

    // 마우스 슬라이드
    const contentsWidth = document.querySelector('.recommend__contents').offsetWidth - 30;
    const itemWrap = document.querySelector('.recommend__itemsWrap');

    let startX = 0;
    let currentTranslateX = 0;
    let nextTranslateX;
    let isDown = false;

    const wrapWidth = itemWrap.offsetWidth;
    const maxTranslateX = wrapWidth - contentsWidth;

    const btnNext = document.querySelector('.recommend__btn--next');
    const btnPre = document.querySelector('.recommend__btn--pre');
    const moveByOneThird = 260 * 4;

    itemWrap.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
    });
    document.addEventListener('mouseup', () => {
        isDown = false;
        itemWrap.style.transition = '0.5s';
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const dx = e.pageX - startX;
        currentTranslateX += dx;
        startX = e.pageX;
        btnPre.style.opacity = 1;
        btnNext.style.opacity = 1;

        if (currentTranslateX > 0) {
            currentTranslateX = 0;
            btnPre.style.opacity = 0;
        }
        if (currentTranslateX < -maxTranslateX) {
            currentTranslateX = -maxTranslateX;
            btnNext.style.opacity = 0;
        }
        itemWrap.style.transform = `translateX(${currentTranslateX}px)`;
    });

    // 슬라이드 버튼 기능
    btnNext.addEventListener('click', () => {
        btnPre.style.opacity = 1;
        nextTranslateX = currentTranslateX - moveByOneThird;
        if (nextTranslateX <= -maxTranslateX) {
            currentTranslateX = -maxTranslateX;
            btnNext.style.opacity = 0;
        } else {
            currentTranslateX = nextTranslateX;
        }
        itemWrap.style.transition = '0.3s';
        itemWrap.style.transform = `translateX(${currentTranslateX}px)`;
    });
    btnPre.addEventListener('click', () => {
        btnNext.style.opacity = 1;
        nextTranslateX = currentTranslateX + moveByOneThird;
        if (nextTranslateX >= 0) {
            currentTranslateX = 0;
            btnPre.style.opacity = 0;
        } else {
            currentTranslateX = nextTranslateX;
        }
        itemWrap.style.transition = '0.3s';
        itemWrap.style.transform = `translateX(${currentTranslateX}px)`;
    });
}
