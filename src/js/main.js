import { renderHeader } from './header.js';
import { renderHome } from './home.js';
import { renderProduct } from './product.js';
import { renderCart } from './cart.js';

const app = document.getElementById('app');
const header = document.querySelector('header');

// 초기 페이지 렌더링
renderHeader();

// 페이지 전환 함수 (전역 등록)
window.renderPage = function (page) {
    switch (page) {
        case 'home':
            renderHome();
            break;
        case 'product':
            renderProduct();
            break;
        case 'cart':
            renderCart();
            break;
        default:
            app.innerHTML = `<p>documentPage not found</p>`;
    }
};

// 최초 페이지 로드
renderPage('home');
