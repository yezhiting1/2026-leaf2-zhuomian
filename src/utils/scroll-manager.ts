// 滚动 & 窗口调整处理（back-to-top、TOC、导航栏）
import {
  BANNER_HEIGHT,
  BANNER_HEIGHT_HOME,
  MAIN_PANEL_OVERLAPS_BANNER_HEIGHT,
  calcBannerHeightExtend,
} from "../constants/constants";

const bannerEnabled = Boolean(document.getElementById("banner-wrapper"));

const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "");

function syncHomeClass(pathname = window.location.pathname) {
  let normalizedPath = pathname.replace(/\/+$/, "") || "/";
  if (basePath && normalizedPath.startsWith(basePath)) {
    normalizedPath =
      normalizedPath.slice(basePath.length).replace(/\/+$/, "") || "/";
  }
  if (normalizedPath.endsWith("/index.html")) {
    normalizedPath = normalizedPath.slice(0, -"/index.html".length) || "/";
  }
  const isHome = normalizedPath === "/" || normalizedPath === "/index";
  document.body.classList.toggle("lg:is-home", isHome);
  const wave = document.getElementById("wave-container");
  if (wave) {
    const ext = getComputedStyle(document.documentElement)
      .getPropertyValue("--banner-height-extend")
      .trim();
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    const offset = isHome && isLargeScreen ? ext : "0px";
    const value = "translateY(calc(-100% + 1px + " + offset + "))";
    wave.style.transform = value;
    wave.style.webkitTransform = value;
  }
}

function scrollFunction() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  const toc = document.getElementById("toc-wrapper");
  const navbar = document.getElementById("navbar-wrapper");
  const currentBannerHeight =
    document.body.classList.contains("lg:is-home") && window.innerWidth >= 1024
      ? BANNER_HEIGHT_HOME
      : BANNER_HEIGHT;
  const bannerHeightPx = window.innerHeight * (currentBannerHeight / 100);
  const tocRevealHeightPx = window.innerHeight * (BANNER_HEIGHT / 100);

  if (backToTopBtn) {
    backToTopBtn.classList.toggle(
      "hide",
      document.body.scrollTop <= bannerHeightPx &&
        document.documentElement.scrollTop <= bannerHeightPx,
    );
  }

  if (bannerEnabled && toc) {
    toc.classList.toggle(
      "toc-hide",
      document.body.scrollTop <= tocRevealHeightPx &&
        document.documentElement.scrollTop <= tocRevealHeightPx,
    );
  }

  if (window.innerWidth < 768) return;
  if (!bannerEnabled || !navbar) return;
  const threshold =
    bannerHeightPx - 72 - MAIN_PANEL_OVERLAPS_BANNER_HEIGHT * 16 - 16;
  navbar.classList.toggle(
    "navbar-hidden",
    document.body.scrollTop >= threshold ||
      document.documentElement.scrollTop >= threshold,
  );
}

let scrollTicking = false;
window.addEventListener("scroll", function () {
  if (!scrollTicking) {
    requestAnimationFrame(function () {
      scrollFunction();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
});

window.addEventListener("resize", () => {
  const offset = calcBannerHeightExtend(window.innerHeight);
  document.documentElement.style.setProperty(
    "--banner-height-extend",
    `${offset}px`,
  );
  syncHomeClass();
});

export { scrollFunction, syncHomeClass };
