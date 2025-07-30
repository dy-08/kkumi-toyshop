export function renderHeader() {
    const header = document.querySelector('header');
    header.innerHTML = `
      <nav>
        <ul class="header__lists">
          <li id="header__home">홈</li>
          <li id="header__product">상품목록</li>
          <li id="header__cart">장바구니</li>
        </ul>
      </nav>`;

    // 이벤트 등록
    document
        .getElementById('header__home')
        .addEventListener('click', () => window.renderPage('home'));
    document
        .getElementById('header__product')
        .addEventListener('click', () => window.renderPage('product'));
    document
        .getElementById('header__cart')
        .addEventListener('click', () => window.renderPage('cart'));
}
