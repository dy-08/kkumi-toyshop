export function renderDetail() {
    const section = document.createElement('section');
    section.id = 'detail';
    section.innerHTML = `
    <div class="detail__inner">
            <div class="detail__left__wrap">
                <div class="detail__smallImg__slide">
                    <button type="button" onclick="smallPrevBtn()" class="prevBtn"></button>
                    <ul class="detail__smallImg__box"></ul>
                    <button type="button" onclick="smallNextBtn()" class="nextBtn"></button>
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
                    <div class="detail__slide__btnWrap">
                        <div class="detail__slide__count"></div>
                        <button type="button" id="scaleBtn">
                            <img src="src/assets/images/detail/scale.svg" alt="">
                        </button>
                        <button class="scale_closeBtn">
                            <img src="src/assets/images/detail/ico_scale_close.svg" alt="">
                        </button>
                    </div>
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
                <div class="detail__selectBox">
                    <div class="detail__selectInnerBox">
                        <div class="detail__productInfo">
                            <div class="detail__productBrandInfo">
                                <div>
                                    <div class="detail__icons detail__brandLogo">
                                        <img alt"브랜드 로고이미지"></img>
                                    </div>
                                    <div class="detail__brandName"></div>
                                    <!-- json에 badge data 추가해야 됨 (badge) ✨-->
                                    <div class="badge"></div>
                                </div>
                                <div>
                                    <button>
                                        <span class="detail__icons detail__iconBrandFavorite"></span>
                                        <span class="detail__brandFavoriteTotal">17만</span>
                                    </button> 
                                </div>
                            </div>
                            <div class="detail__productLocation">
                                <span>아우터 &gt; <span class="detail__productCategory"></span></span>
                            </div>
                            <div class="detail__productName"></div>
                            <div class="badges"></div>
                            <!-- json에 badge data 추가해야 됨 (colors) ✨-->
                            <div class="detail__colorsdisplay">
                            </div>
                            <div>
                                <span class="detail__originPrice"></span>
                            </div>
                            <div>
                                <span class="detail__discount"></span><span class="detail__discountPrice"></span>
                            </div>
                        </div>
                        <div class="detail__productForm">
                            <ul class="detail__productForm__colors"><span id='detail__colors__firstSpan'></span><span class="detail__productForm__colorsTitle">컬러</span></ul>
                            <ul class="detail__productForm__sizes">사이즈</ul>
                            <div class="detail__product__display--selected">
                                <div class="detail__product__displayInner">
                                    <div class="u-text-14 detail__seletedProduct__display">
                                        colorsdisplay+colorEG추가+size
                                    </div>
                                    <div class="detail__icons detail__iconClose"></div>
                                </div>
                                <div class="detail__product__displayInner">
                                    <div>
                                        <div class="detail__product__quantityWrap">
                                            <button class="detail__icons detail__iconMinus" disabled></button>
                                            <input type="number" class="detail__product__quantity u-text-13" value="1" disabled/>
                                            <button class="detail__icons detail__iconPlus"></button>
                                        </div>
                                        <div>
                                            <span class="u-text-11 u-color-8a">최대 3개</span>
                                        </div>
                                    </div>
                                    <span class="detail__discountPrice u-text-14"></span>
                                </div>
                            </div>
                            <div class="detail__btns">
                                <div>
                                    <button>
                                        <div class="detail__icons detail__iconFavorite"></div>
                                        <div>3천</div>
                                    </button>
                                </div>
                                <button>장바구니</button>
                                <button>구매하기</button>
                            </div>
                        </div>
                        <div class="detail__productDeliveryInfo">
                            <div>
                                무신사 회원은 전 품목 무료배송<br>
                                <span>&#40;일부 상품 및 도서 산간 지역 제외&#41;</span>
                            </div>
                            <div>
                                09&#46;09 &#40;화&#41; 도착 예정 · 도착 확률 99&#37;<span class="detail__icons detail__iconInformation"></span><br>
                                결제 3일 이내 출고 · CJ대한통운
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
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

    function itemMatch() {
        smallItem.forEach((i) => {
            i.classList.remove('on');
        });
        smallItem[index - 1].classList.add('on');
    }
    smallItem.forEach((item, idx) => {
        item.addEventListener('click', () => {
            smallItem.forEach((i) => {
                i.classList.remove('on');
            });
            item.classList.add('on');
            slideBox.style.transform = `translateX(-${step * (idx + 1)}px)`;
            index = idx + 1;
            updateCount(index);
        });
    });

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

    function updateCount() {
        let showIndex = index;
        if (index == 0) showIndex = imgTotal - 2;
        else if (index == imgTotal - 1) showIndex = 1;
        slideCount.textContent = `${showIndex} / ${imgTotal - 2}`;
    }
    // 카운트 초기 표시
    updateCount();

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
    };

    window.prevBtn = function () {
        prev();
    };

    slideBox.addEventListener('transitionend', () => {
        // 마지막 복제 슬라이드
        if (index === imgTotal - 1) {
            updateCount();
            slideBox.style.transition = 'none';
            index = 1;
            slideBox.style.transform = `translateX(-${step * index}px)`;
            slideBox.offsetWidth;
            itemMatch();
            slideBox.style.transition = 'transform 0.3s ease';
        }

        // 첫 번째 복제 슬라이드
        if (index === 0) {
            updateCount();
            slideBox.style.transition = 'none';
            index = imgTotal - 2;
            slideBox.style.transform = `translateX(-${step * index}px)`;
            slideBox.offsetWidth;
            itemMatch();
            slideBox.style.transition = 'transform 0.3s ease';
        }
    });

    // 슬라이드 크게보기 버튼
    let scaleBtn = document.getElementById('scaleBtn');
    scaleBtn.addEventListener('click', () => {
        document.querySelector('.detail__img__slide').classList.add('scale');
        document.querySelector('body').classList.add('scale');
    });

    // 로컬스토리지에서 아이템데이터 받아와서 할당
    const data = localStorage.getItem('item');
    const item = JSON.parse(data);
    const brandLogo = document.querySelector('.detail__brandLogo img');
    brandLogo.src = item.logoSrc;
    const brandName = document.querySelector('.detail__brandName');
    brandName.textContent = item.brandName;
    const category = document.querySelector('.detail__productCategory');
    category.textContent = `${item.category} (${item.brandName})`;
    const productName = document.querySelector('.detail__productName');
    productName.textContent = item.itemName;
    const colorsdisplay = document.querySelector('.detail__colorsdisplay');
    item.colors.forEach((item) => {
        const span = document.createElement('span');
        span.style.backgroundColor = item;
        colorsdisplay.appendChild(span);
    });
    const originPrice = document.querySelector('.detail__originPrice');
    originPrice.textContent = item.originPrice;
    const discountRate = document.querySelector('.detail__discount');
    discountRate.textContent = `${item.discount}%`;
    const discountPrice = document.querySelectorAll('.detail__discountPrice');
    discountPrice.forEach((content) => {
        content.textContent = `${item.discountPrice}원`;
    });

    const formColor = document.querySelector('.detail__productForm__colors');
    const formSize = document.querySelector('.detail__productForm__sizes');
    const oldSpan = document.querySelector('.detail__productForm__colorsTitle');

    // 셀렉폼 렌더링
    // 컬러
    formColor.addEventListener('click', () => {
        formColor.innerHTML = '';
        formColor.classList.toggle('selected');
        formColor.classList.toggle('radius');
        formSize.classList.toggle('removed');

        oldSpan.className = 'detail__productForm__colorsTitle';
        oldSpan.textContent = '컬러';
        formColor.appendChild(oldSpan);

        // li 추가
        item.colors.forEach((color, idx) => {
            const span = document.createElement('span');
            span.className = 'detail__productColor';
            span.style.backgroundColor = color;
            const li = document.createElement('li');
            li.textContent = item.colorsKR[idx];
            li.appendChild(span);
            formColor.appendChild(li);
        });
        // 컬러
        const colors = formColor.querySelectorAll('li');
        colors.forEach((color, index) =>
            color.addEventListener('click', () => {
                console.log(index);
                console.log('2:', item.colors[index]);
                console.log(item.colorsEG[index].toUpperCase());
                console.log(formColor.firstChild);
                console.log(oldSpan);

                const span = document.createElement('span');
                span.className = 'detail__productForm__colorsTitle';
                span.style.paddingLeft = '26px';
                span.style.transform = 'translateY(-1px)';
                span.textContent = item.colorsEG[index].toUpperCase();
                formColor.replaceChild(span, oldSpan);

                // formColor.textContent = item.colorsEG[index].toUpperCase();
                // console.log(colorsTitle);
                // firstSpan.style.backgroundColor = `${item.colors[index]}`;
            })
        );
    });
    // 사이즈
    formSize.addEventListener('click', () => {
        formSize.classList.toggle('radius');
        formSize.classList.toggle('selected');
        formSize.innerHTML = '';
        formSize.textContent = '사이즈';
        item.size.forEach((size) => {
            const li = document.createElement('li');
            li.textContent = size;
            formSize.appendChild(li);
        });
    });
}
