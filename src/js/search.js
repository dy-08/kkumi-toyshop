export function renderSearch() {
    const section = document.createElement('section');
    section.className = 'search';

    section.innerHTML = `
        <div id="search">
            <div class="search__wrap">
                <div class="search__inner">
                    <div class="search__title__wrap">
                        <p>꾸미몰</p>
                        <div class="search__alarm__box">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20"
                                    fill="none" class="size-7" data-mds="IcBoldAlarm">
                                    <path
                                        d="M13 14C13 15.6569 11.6569 17 10 17C8.34315 17 7 15.6569 7 14M5 8C5 5.23858 7.23858 3 10 3C12.7614 3 15 5.23858 15 8V11.8C15 12.3511 15.6222 12.8998 16.2458 13.3115C16.517 13.4904 16.3927 14 16.0678 14H3.93217C3.60727 14 3.48302 13.4904 3.75417 13.3115C4.37778 12.8998 5 12.3511 5 11.8V8Z"
                                        stroke-width="1.4" stroke="#FFFFFF" data-mds="IcBoldAlarm"
                                        vector-effect="non-scaling-stroke"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="search__input__box">
                        <button type="text" class="search__input--btn" onclick="searchInput()">
                            <span class="search__keyweord">최저가 도전, 차액 적립금 보상까지</span>
                            <span class="material-symbols-outlined">search</span>
                        </button>
                        <div class="search__popup_wrap">
                            <div class="search__popup__inner">
                                <div class="search__pop__inputBox">
                                    <div class="inner">
                                        <input type="text" title="검색어 입력" placeholder="검색어를 입력하세요">
                                        <button type="button">
                                            <span class="material-symbols-outlined">search</span>
                                        </button>
                                    </div>
                                    <button type="button" class="search__pop--close" onclick="searchPopClose()">
                                        <span class="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                                <div class="search__keyword_wrap">
                                    <div class="keyword__box">
                                        <div class="keyword__tit">
                                            <p>최근 검색어</p>
                                            <button type="button" id="keyword__all--Delete">모두삭제</button>
                                        </div>
                                        <ul class="keyword__recent__list">
                                            <li>
                                                <button type="button" class="keyword__recent">후드집업</button>
                                                <button type="button" class="keyword__recent--Delete">
                                                    <span class="material-symbols-outlined">close</span>
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="keyword__recent">후드집업</button>
                                                <button type="button" class="keyword__recent--Delete">
                                                    <span class="material-symbols-outlined">close</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="keyword__box">
                                        <div class="keyword__tit">
                                            <p>인기 검색어</p>
                                            <p class="search__keyword__time">08.11 22:00, 기준</p>
                                        </div>
                                        <ul class="keyword__current__list">
                                            <li class="type_popular">
                                                <a href="#none">뉴발란스</a>
                                            </li>
                                            <li class="type_popular type_rising">
                                                <a href="#none">반팔</a>
                                            </li>
                                            <li class="type_popular type_degrade">
                                                <a href="#none">아디다스</a>
                                            </li>
                                            <li class="type_popular">
                                                <a href="#none">크록스</a>
                                            </li>
                                            <li class="type_popular">
                                                <a href="#none">후드집업</a>
                                            </li>
                                            <li class="type_popular type_rising">
                                                <a href="#none">모자</a>
                                            </li>
                                            <li class="type_popular">
                                                <a href="#none">나이키</a>
                                            </li>
                                            <li class="type_popular type_degrade">
                                                <a href="#none">백팩</a>
                                            </li>
                                            <li class="type_popular type_rising">
                                                <a href="#none">버뮤다팬츠</a>
                                            </li>
                                            <li class="type_popular type_degrade">
                                                <a href="#none">가방</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="keyword__box">
                                        <div class="keyword__tit">
                                            <p>급상승 검색어</p>
                                            <p class="search__keyword__time">08.11 22:00, 기준</p>
                                        </div>
                                        <ul class="keyword__current__list">
                                            <li>
                                                <a href="#none">운동복</a>
                                            </li>
                                            <li>
                                                <a href="#none">언더아머</a>
                                            </li>
                                            <li>
                                                <a href="#none">양말</a>
                                            </li>
                                            <li>
                                                <a href="#none">구두</a>
                                            </li>
                                            <li>
                                                <a href="#none">반팔</a>
                                            </li>
                                            <li>
                                                <a href="#none">커플티</a>
                                            </li>
                                            <li>
                                                <a href="#none">마하그리드</a>
                                            </li>
                                            <li>
                                                <a href="#none">스트라이프 팬츠</a>
                                            </li>
                                            <li>
                                                <a href="#none">백팩</a>
                                            </li>
                                            <li>
                                                <a href="#none">파라슈트 팬츠</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="mainTab">
        <ul>
            <li class="mainTab__current">
                <a href="#none">콘텐츠</a>
            </li>
            <li>
                <a href="#none">추천</a>
            </li>
            <li>
                <a href="#none">랭킹</a>
            </li>
            <li>
                <a href="#none">세일</a>
            </li>
            <li>
                <a href="#none">브랜드</a>
            </li>
            <li>
                <a href="#none">발매</a>
            </li>
        </ul>
  `;
    const app = document.getElementById('app');
    app.appendChild(section);

    // 검색창 클릭 시 검색팝업 open
    let searchPopUp = document.querySelector('.search__popup_wrap');
    let bodyFix = document.querySelector('body');
    window.searchInput = function () {
        searchPopUp.style.display = 'block';
        bodyFix.classList.add('fixed');
    };
    window.searchPopClose = function () {
        searchPopUp.style.display = 'none';
        bodyFix.classList.remove('fixed');
    };

    // 최근 검색어 삭제
    let delBtn = document.querySelectorAll('.keyword__recent--Delete');
    let delList = document.querySelector('.keyword__recent__list');
    delBtn.forEach(function (item) {
        item.addEventListener('click', () => {
            item.closest('li').remove();
            if (delList.childElementCount == 0) {
                // li 개수가 없을 경우, 최근 검색어 창 삭제
                document.querySelector('.keyword__box').remove();
            }
        });
    });

    // 최근 검색어 모두삭제
    let allDelBtn = document.getElementById('keyword__all--Delete');
    allDelBtn.addEventListener('click', () => {
        document.querySelector('.keyword__box').remove();
    });

    // 날짜계산
    let today = new Date();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let todayWrap = document.querySelectorAll('.search__keyword__time');

    //시간계산
    let hours = today.getHours();
    let minutes = today.getMinutes();

    todayWrap.forEach((time) => {
        if (month < 10) {
            time.innerText = `0${month}.${date} ${hours}:${minutes}, 기준`;
        } else {
            time.innerText = `${month}.${date}  ${hours}:${minutes}, 기준`;
        }
    });

    // 메인탭 상단 고정
    let mainTabOffsetTop;

    window.addEventListener('DOMContentLoaded', () => {
        let mainTab = document.querySelector('.mainTab');
        mainTabOffsetTop = mainTab.offsetTop;

        scrollTab(); // 초기 실행
        window.addEventListener('scroll', scrollTab);
    });
    function scrollTab() {
        let mainTab = document.querySelector('.mainTab');
        let windowS = window.scrollY;
        if (windowS >= mainTabOffsetTop) {
            mainTab.classList.add('fixed');
        } else {
            mainTab.classList.remove('fixed');
        }
    }
}
