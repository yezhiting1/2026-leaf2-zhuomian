// 文章协议区 URL 同步（支持 Swup 页面切换）
(function () {
  window.__fuwariSyncCurrentPostUrl = function () {
    var currentUrl = window.location.href;
    try {
      currentUrl = decodeURIComponent(currentUrl);
    } catch (e) {}
    document
      .querySelectorAll("[data-current-post-url]")
      .forEach(function (link) {
        link.setAttribute("href", currentUrl);
        link.textContent = currentUrl;
      });
  };

  window.__fuwariSyncCurrentPostUrl();
  if (!window.__fuwariSyncCurrentPostUrlBound) {
    window.__fuwariSyncCurrentPostUrlBound = true;
    document.addEventListener("astro:page-load", function () {
      window.__fuwariSyncCurrentPostUrl && window.__fuwariSyncCurrentPostUrl();
    });
    document.addEventListener("swup:contentReplaced", function () {
      window.__fuwariSyncCurrentPostUrl && window.__fuwariSyncCurrentPostUrl();
    });
  }
})();
