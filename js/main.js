// 검색 영역(.search) 클릭 시 input에 강제 포커스 및 제어
// 검색 영역 div와 input 찾기
const searchEl = document.querySelector('.search');  
// const searchInputEl = document.querySelector('.search input'); 
// 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input')

//  검색 영역을 클릭하면 input 요소를 포커스 하도록 실행
searchEl.addEventListener('click',function () { // 이벤트 핸들러
  searchInputEl.focus(); // 요소에 포커스 강제 적용
});

// input 요소에 포커스 되면 placeholder 추가
// 힌트: setAttribute()
searchInputEl.addEventListener('focus', function() {
  searchInputEl.setAttribute('placeholder', '통합검색');
  searchEl.classList.add('focused');
});


// input 요소에 포커스가 해제(blur)되면 placeholder 초기와
// 힌트: setAttribute()
searchInputEl.addEventListener('blur', function() {
  searchInputEl.removeAttribute('placeholder');
  searchEl.classList.remove('focused');
});

// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// 페이지의 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  if (scrollY >= 500) { 
    // badgeEl.style.visibility = 'hidden';
    // badgeEl.style.opacity = 0;

    // gsap.to(요소, 지속시간, 옵션: {}) 메소드: CSS 속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0, 
      display: 'none' //라이브러리에 정해진 옵션
    })
  } else {
    // badgeEl.style.visibility = 'visible';
    // badgeEl.style.opacity = 1;
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block' //라이브러리에 정해진 옵션
    })
  };
  // Quiz:
  // 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고,
  // 페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소 보이기
  // stlye.backgroundColor = 'red';
})

// 순차적으로 visual 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index+1) * 0.7 // 0.7s, 1.4s, 2.1s, 2.8s
  });
});

// 공지사항 수직 슬라이드 기능
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(요소, 옵션: {};
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달 (API 페이지 참고)
new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: true, // 자동 재생 여부
});