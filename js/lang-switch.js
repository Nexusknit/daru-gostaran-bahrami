/**
 * ذخیره و اعمال زبان انتخابی کاربر با localStorage
 * اگر URL فارسی (-fa.html) باشد، lang = 'fa' ذخیره می‌شود و برعکس
 */
document.querySelectorAll('#lang-switch a').forEach(anchor => {
  anchor.addEventListener('click', evt => {
    const isFa = anchor.getAttribute('href').includes('-fa');
    localStorage.setItem('lang', isFa ? 'fa' : 'en');
  });
});

// بارگزاری اولیه: اگر مسیر و lang ذخیره‌شده ناهماهنگ بود، ریدایرکت کن
(function () {
  const saved = localStorage.getItem('lang');
  if (!saved) return;

  const isFaPage = location.pathname.includes('-fa.html');
  if (saved === 'fa' && !isFaPage) {
    location.href = location.pathname.replace('.html', '-fa.html');
  }
  if (saved === 'en' && isFaPage) {
    location.href = location.pathname.replace('-fa.html', '.html');
  }
})();