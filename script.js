function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  const buttons = document.querySelectorAll('nav button');

  pages.forEach(page => {
    page.classList.remove('active');
  });

  buttons.forEach(button => {
    button.classList.remove('active-btn');
  });

  document.getElementById(pageId).classList.add('active');

  event.target.classList.add('active-btn');
}