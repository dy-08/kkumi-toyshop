export function renderHeader() {
    const section = document.createElement('section');
    section.id = 'header';
    section.innerHTML = `
      <nav>
        <div class="header__navBox">
          <div class="header__leftBox">
            <button class="header__menu"></button>
            <span class="header__vertical"></span>
            <button>MUSINSA</button>
            <button>BEAUTY</button>
            <button>PLAYER</button>
            <button>OUTLET</button>
            <button>BOUTIQOE</button>
            <button>SHOES</button>
            <button>KIDS</button>
            <button>UESD</button>
            <span class='header__vertical'></span>
            <button class="header__snap"><span class="header__icons icon__chars"></span>SNAP</button>
          </div>
          <div class="header__rightBox">
            <button>오프라인스토어</button>
            <span class='header__vertical'></span>
            <button>
              <span class="header__icons icon__search"></span><span>검색</span>
            </button>
            <button>
            <span class="header__icons icon__like"></span><span>좋아요</span>
            </button>
            <button>
            <span class="header__icons icon__mypage"></span><span>마이</span>
            </button>
            <button>
            <span class="header__icons icon__cart"></span><span>장바구니</span>
            </button>
            <button class="signinAndUp">로그인 / 회원가입</button>
          </div>
        </div>
      </nav>
`;
    const app = document.getElementById('app');
    app.appendChild(section);
}
