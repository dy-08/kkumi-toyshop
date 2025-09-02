import { renderHeader } from './header.js';
import { renderSearch } from './search.js';
import { renderSlider } from './slider.js';
import { renderRecommend } from './recommend.js';

const app = document.getElementById('app');

// 페이지 별 기능 그룹화
function home() {
    renderHeader();
    renderSearch();
    renderSlider();
    renderRecommend();
}
function detail() {
    renderHeader();
    renderSearch();
}
function login() {
    renderHeader();
    renderSearch();
}
// 해시값에 따른 페이지 렌더링 함수
function renderPage(page) {
    app.innerHTML = '';

    switch (page) {
        case 'home':
            home();
            break;
        case 'detail':
            detail();
            break;
        case 'login':
            login();
            break;
        default:
            app.innerHTML = `<p>page not found</p>`;
    }
}

// 해시 변경 이벤트 처리기
function handleHashRoute() {
    const page = location.hash.replace('#/', '') || 'home';
    renderPage(page);
}

// 이벤트 리스너 등록
window.addEventListener('hashchange', handleHashRoute);
window.addEventListener('DOMContentLoaded', handleHashRoute);
