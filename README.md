# ✨ 개꾸미 프로젝트 – @kkumi-toyshop

프론트엔드 실전 연습 : 개꾸미 팀의 기능별 쇼핑몰 구축기

## 🎯 프로젝트 목표

수업과 병행하여 진행되는 프로젝트로서 배운 내용을 복습하고,  
실제 서비스에서 사용되는 기능 구현 방식과 로직 구조에 익숙해지는 것이 목표입니다.  
작은 기능부터 직접 설계하고 구현하며 실전 감각을 익히고자 합니다.

## 🧩 프로젝트 관리 방식

이 프로젝트는 "애자일 방법론" – FDD (Feature-Driven Development)를 지향합니다.

## 🤔 FDD 선정 이유

기능 단위로 개발을 진행하는 FDD는 현재 팀의 상황과 목적에 가장 잘 맞는 방법론이었습니다.  
우리 팀은 전체 로직을 처음부터 설계하기보다는, 할 수 있는 작은 기능부터 하나씩 구현하며 점진적으로 완성해 나가는 방식을 선택했습니다.  
프로젝트 기간은 총 6개월이며, 현재 2주차입니다.  
스프린트 단위를 1주로 설정하여, 남은 기간 동안 **1주 1기능**을 목표로 진행합니다.

## 🔁 주간 개발 & 코드리뷰 방식

1. 각 팀원은 매주 1개의 기능을 맡아 직접 구현합니다.
2. 해당 기능에 대해 팀원들에게 설명하고, 코드 리뷰를 주고받습니다.
3. 리뷰에서 나온 피드백을 바탕으로 기능을 보완하고 개선합니다.
4. 이를 통해 단순한 구현 능력뿐 아니라 문제 해결력과 팀 협업 능력도 함께 성장하는 것을 목표로 합니다.

## 👥 팀원 소개

| 이름   | GitHub ID 또는 이메일 |
| ------ | --------------------- |
| 권영호 | dy-08@naver.com       |
| 권희나 | kty9334@naver.com     |
| 이종호 | mlsanta527@gmail.com  |
| 최은조 | rei1626@naver.com     |

※ 현재 이메일만 기록되어 있지만, GitHub ID 확인 후 추후 업데이트할 수 있습니다.  
※ 커밋 기여자(contributor)로 정상 반영되려면,  
 `git config user.email` 값을 GitHub 계정의 이메일과 일치시켜 주세요.

## 📁 프로젝트 폴더 구조

```
kkumi-toyshop/
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md    ← 이 파일이 PR 템플릿
├── public/
│
├── src/
│   ├── assets/                    # 정적 자산 (이미지, 폰트 등)
│   │   ├── fonts/
│   │   │   ├── ttf/
│   │   │   └── woff/
│   │   ├── icons/
│   │   │   ├── favicon/
│   │   │   └── svg/
│   │   └── images/
│   │       ├── banner/
│   │       └── product/
│   ├── css/                       # 스타일시트
│   │   ├── reset.css
│   │   ├── common.css
│   │   ├── header.css
│   │   └── product.css
│   ├── js/                        # 기능별 JS 모듈
│   │   ├── main.js
│   │   ├── home.js
│   │   ├── product.js
│   │   ├── cart.js
│   │   └── header.js
│   └── utils/                     # 공통 유틸 함수
│       ├── api.js
│       ├── format.js
│       ├── storage.js
│       └── validator.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .eslint.config.mjs
├── .index.html                    # SPA 진입점 (단일 HTML 파일)
├── .package-lock.json
├── .package.json
├── README.md
✅ 순수 바닐라 자바스크립트로 구현하는 SPA(Single Page Application, 단일 페이지 어플리케이션) 구조입니다.
JS를 통해 페이지 전환 및 콘텐츠 렌더링이 이루어집니다.
```

## ⚙️ 프로젝트 초기 세팅 가이드

#### 📌 개발 환경

- **Node.js**: v18 이상
- **패키지 매니저**: npm
- **권장 에디터**: VSCode

#### ✅ 추천 VSCode 확장 프로그램

| 확장 프로그램 명          | 설명                          |
| ------------------------- | ----------------------------- |
| ESLint                    | 자바스크립트 문법 검사        |
| Prettier – Code formatter | 코드 자동 포맷팅              |
| Live Server               | 로컬 개발 서버(SPA 테스트 용) |

## 🎨 코드 포맷팅 규칙 (Prettier)

> `.prettierrc` 또는 VSCode 설정을 통해 아래 규칙을 적용합니다. (팀 전원이 같은 포맷 규칙을 쓰게 하기 위해)  
> `.editorconfig` 추가 (에디터 간 들여쓰기/줄바꿈 등 코드 스타일 통일)

#### 설정 예시 (`.prettierrc`)

```json
{
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "printWidth": 100
}
```

#### 포맷 기준 요약

- 탭 간격: 4칸
- 세미콜론: 항상 사용 (true)
- 따옴표: ' (single quote)
- trailing comma: es5 (배열/객체 마지막에 쉼표 O)
- printWidth: 100자 기준 자동 줄바꿈

#### 기타 설정

VSCode > Settings > Format on Save 옵션 활성화 권장  
.editorconfig 사용 시 IDE 간 코드 스타일 차이 최소화 가능

## 🎨 CSS 네이밍 규칙

BEM + prefix 방식으로 CSS 클래스명을 작성합니다.  
이는 네이밍 충돌을 방지하고, 각 모듈의 스타일을 명확히 하기 위함입니다.

#### ✅ 기본 규칙

각 페이지/모듈 별로 prefix를 사용합니다. (예: product, cart, header 등)
이후 BEM 방식 적용 → block\_\_element--modifier 형식 사용

예시:

```
<!-- 상품(product) 페이지 -->
<section class="product">
  <h2 class="product__title">데님팬츠 </h2>
  <button class="product__btn product__btn--add">담기</button>
</section>

<!-- 장바구니(cart) -->
<ul class="cart__list">
  <li class="cart__item cart__item--selected">...</li>
</ul>
```

#### ✅ 공통 유틸리티 클래스

반복 사용되는 여백, 정렬, 색상 등은 u- prefix로 작성

예시:

```
<div class="u-mt-20 u-text-center u-color-accent">텍스트</div>
```

❗ 네이밍 주의사항

- 클래스명은 영어 소문자 + 하이픈(-) 사용
- Element는 \_\_, Modifier는 --로 구분
- 의미 없는 축약어는 사용 금지 (예: .bx, .cnt ❌)
- 전역 클래스 최소화, 가능한 한 prefix로 모듈 구분

#### 📚 예시 prefix 목록 (선택)

```
모듈	Prefix 예시
상품 페이지	product
장바구니	cart
헤더	header
유틸리티	u-rt__item--selected">...</li>
</ul>
```

## 🔁 Git 브랜치 전략

#### 기본 브랜치

- master : 최종 배포 브랜치 (사용자에게 보여지는 안정화 된 코드)
- develop : 통합 개발 브랜치 (모든 기능이 병합되는 중간 단계)

#### 기타 브랜치

- feature : 기능 개발 시 사용 (팀원 당 하나의 feature 브랜치를 소유)
- hotfix : 마스터 브랜치에 올라간 기능에 버그 발생 시 긴급으로 수정

## 기능 개발 브랜치

#### 1. develop에서 분기하여 feature/\* 브랜치에서 작업

예시:

- feature/home
- feature/product
- feature/cart
- feature/header

개발 완료 후 Pull Request → develop 브랜치로 병합

#### 2. 핫픽스 브랜치

배포된 master에서 버그 발생 시 긴급 수정용  
브랜치 명: hotfix/버그명  
수정 후 master과 develop에 모두 병합하여 일관성 유지

## 📌 브랜치 흐름도

```
feature/* ─┐
           ├──▶ develop ─────┐
           │                 ▼
           │              (기능 통합 & 테스트)
           │                 │
           │                 ▼
           │              master ───▶ 배포
           │                          ▲
hotfix/* ─────────────────────────────┘
       (master에서 분기 → master & develop에 병합)
```

## 📝 커밋 컨벤션

Conventional Commits 1.0.0 형식을 기반으로 커밋 메시지를 작성합니다.  
커밋 메시지는 일관성 있는 기록과 변경 이력 관리를 위해 다음 규칙을 따릅니다.

#### 📌 커밋 타입 규칙

| 타입       | 설명                                              | 버전 영향 |
| ---------- | ------------------------------------------------- | --------- |
| `feat`     | 새로운 기능 추가                                  | Minor     |
| `fix`      | 버그 수정                                         | Patch     |
| `docs`     | 문서 수정                                         | 없음      |
| `style`    | 코드 스타일/포맷팅 변경 (기능 변화 없음)          | 없음      |
| `refactor` | 코드 리팩토링 (기능 변화 없음)                    | 없음      |
| `test`     | 테스트 코드 추가/수정                             | 없음      |
| `chore`    | 기타 자잘한 수정 (빌드 설정, 패키지 등)           | 없음      |
| `build`    | 빌드 시스템 또는 외부 의존성 수정                 | 없음      |
| `ci`       | CI 설정 관련 변경 (예: GitHub Actions, Travis 등) | 없음      |

## ✅ 커밋 메시지 작성 예시

- feat : 상품 리스트 필터 기능 추가
- fix : 장바구니 담기 오류 수정
- docs : README에 Git 브랜치 전략 추가
- style : 들여쓰기 수정 및 세미콜론 정리
- refactor : 상품 정렬 로직 함수 분리
- test : header 모듈 테스트 코드 작성
- chore : .gitignore에 .DS_Store 추가
- build : webpack 번들링 설정 변경
- ci : GitHub Actions 배포 스크립트 수정

## 협업 가이드

- PR(Pull Request)은 `.github/PULL_REQUEST_TEMPLATE.md` 템플릿에 따라 작성해주세요.
- PR 생성 시 작업 내용, 테스트 방법 등을 꼼꼼히 작성하고 팀원 리뷰를 받습니다.

#### 💡 참고 링크

공식 문서: [Conventional Commits 1.0.0 (ko)](https://www.conventionalcommits.org/ko/v1.0.0/)  
블로그 가이드: [커밋 메시지 작성 가이드라인 (by TedJunny)](https://tedjunny.tistory.com/entry/%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%84%B8%EC%A7%80-%EC%9E%91%EC%84%B1-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8-Conventional-Commits)
