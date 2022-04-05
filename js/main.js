
//ハンバーガメニュー
const target = document.getElementById("header__hamburger");
target.addEventListener("click", () => {
  target.classList.toggle("open");
  const nav = document.getElementById("header__drawerMenu");
  nav.classList.toggle('in');
});  

