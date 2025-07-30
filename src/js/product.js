export function renderProduct() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <section class="product">
      <h2 class="product__title">상품 목록</h2>
      <ul class="product__list">
        <li class="product__item">상품 1</li>
        <li class="product__item">상품 2</li>
        <li class="product__item">상품 3</li>
      </ul>
    </section>
  `;
}
