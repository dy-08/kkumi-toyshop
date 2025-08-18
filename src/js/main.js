import { renderHeader } from './header.js';
import { renderHome } from './home.js';
import { renderProduct } from './product.js';
import { renderCart } from './cart.js';
import { renderRecommend } from './recommend.js';

const app = document.getElementById('app');
const header = document.querySelector('header');

// 초기 페이지 렌더링

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
        case 'recommend':
            renderRecommend();
            break;
        default:
            app.innerHTML = `<p>documentPage not found</p>`;
    }
};

// 최초 페이지 로드
renderPage('recommend');
