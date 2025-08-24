export function renderHeader() {
    const section = document.createElement('section');
    section.id = 'header';

    section.innerHTML = `
      <nav>
        <div class="header__navBox">
          <div class="header__leftBox">
            <span class="material-symbols-outlined menu">menu</span>
            <button>MUSINSA</button>
            <button>BEAUTY</button>
            <button>PLAYER</button>
            <button>OUTLET</button>
            <button>BOUTIQOE</button>
            <button>SHOES</button>
            <button>KIDS</button>
            <button>(S)SNAP</button>
          </div>
          <div class="header__rightBox">
            <button>오프라인스토어</button>
            <button>
              <span class="material-symbols-outlined">search</span><span>검색</span>
            </button>
            <button>
            <span class="material-symbols-outlined">favorite</span><span>좋아요</span>
            </button>
            <button>
            <span class="material-symbols-outlined">person</span><span>마이</span>
            </button>
            <button>
            <span class="material-symbols-outlined">shopping_bag</span><span>장바구니</span>
            </button>
            <button>로그인 / 회원가입</button>
          </div>
        </div>
      </nav>
`;
    const app = document.getElementById('app');
    app.appendChild(section);
}
