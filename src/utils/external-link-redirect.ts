// 外链跳转提示（模态框方案）
let extLinkInited = false;
let cachedConfig: ExtLinkConfig | null | undefined;

interface ExtLinkConfig {
  redirectConfig?: {
    enable_redirect?: boolean;
    redirect_delay?: number;
    avatar?: string;
  };
  open_new_window?: boolean;
  whitelist?: string;
}

function getConfig(): ExtLinkConfig | null {
  if (cachedConfig !== undefined) return cachedConfig;
  try {
    const el = document.getElementById("theme-config");
    if (!el?.textContent) return (cachedConfig = null);
    cachedConfig = JSON.parse(el.textContent).external_link || null;
    return cachedConfig;
  } catch {
    return (cachedConfig = null);
  }
}

function isWhitelisted(hostname: string, list?: string): boolean {
  if (!list || !hostname) return false;
  return list.split("\n").some((line) => {
    const p = line.trim();
    if (!p) return false;
    if (p === hostname) return true;
    if (p.startsWith("*.")) {
      const d = p.slice(2);
      return hostname === d || hostname.endsWith("." + d);
    }
    return false;
  });
}

function createModal(targetUrl: string) {
  const existing = document.getElementById("ext-link-modal");
  if (existing) existing.remove();

  const config = getConfig();
  const delay = config?.redirectConfig?.redirect_delay ?? 5;
  const openNew = config?.open_new_window ?? false;
  const avatarUrl = config?.redirectConfig?.avatar || "";
  const displayUrl =
    targetUrl.length > 70 ? targetUrl.slice(0, 70) + "..." : targetUrl;

  const avatarHTML = avatarUrl
    ? `<img src="${avatarUrl}" alt="" />`
    : `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

  const modal = document.createElement("div");
  modal.id = "ext-link-modal";
  modal.innerHTML = `
    <div id="ext-link-backdrop"></div>
    <div id="ext-link-card">
      <div class="ext-avatar">${avatarHTML}</div>
      <div class="ext-title">即将离开本站</div>
      <div class="ext-desc">您即将访问外部链接，请注意保护个人隐私和信息安全。</div>
      <div class="ext-url-box">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        <span class="ext-url-text">${displayUrl}</span>
        <button class="ext-copy" id="ext-copy-btn" title="复制" data-copy-text="${targetUrl}">
          <span class="icon-[material-symbols--content-copy-outline-rounded]" style="font-size:13px;line-height:1"></span>
          <span>复制</span>
        </button>
      </div>
      <div class="ext-progress-bar" id="ext-progress-bar" style="display:none">
        <div class="ext-progress-fill" id="ext-progress-fill"></div>
      </div>
      <div class="ext-btns">
        <button class="ext-btn-back" id="ext-btn-back">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>返回
        </button>
        <button class="ext-btn-go" id="ext-btn-go">
          继续访问<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
      <div class="ext-countdown" id="ext-countdown" style="display:none">5 秒后自动跳转</div>
    </div>
  `;
  document.body.appendChild(modal);

  let dismissed = false;

  function goToTarget() {
    if (dismissed) return;
    dismissed = true;
    clearTimer();
    if (openNew) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = targetUrl;
    }
    modal.remove();
    document.body.style.overflow = "";
  }

  function closeModal() {
    if (dismissed) return;
    dismissed = true;
    clearTimer();
    document.body.style.overflow = "";
    const card = document.getElementById("ext-link-card");
    const backdrop = document.getElementById("ext-link-backdrop");
    if (card) {
      card.style.transition = "opacity .15s ease, transform .15s ease";
      card.style.opacity = "0";
      card.style.transform = "translateY(8px) scale(.98)";
    }
    if (backdrop) {
      backdrop.style.transition = "opacity .15s ease";
      backdrop.style.opacity = "0";
    }
    setTimeout(() => {
      modal.remove();
    }, 150);
  }

  // Copy button
  document
    .getElementById("ext-copy-btn")
    ?.addEventListener("click", function () {
      const text = this.getAttribute("data-copy-text");
      if (!text) return;
      const icon = this.querySelector("span:first-child");
      const label = this.querySelector("span:last-child");
      if (icon) icon.className = "icon-[material-symbols--check-rounded]";
      if (label) {
        label.style.cssText = "";
        label.textContent = "已复制";
      }
      this.style.color = "var(--primary)";
      this.disabled = true;
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setTimeout(() => {
            if (icon)
              icon.className =
                "icon-[material-symbols--content-copy-outline-rounded]";
            if (label) label.textContent = "复制";
            this.style.color = "";
            this.disabled = false;
          }, 2000);
        })
        .catch(() => {
          console.warn("[ExternalLink] Clipboard write failed");
          setTimeout(() => {
            if (icon)
              icon.className =
                "icon-[material-symbols--content-copy-outline-rounded]";
            if (label) label.textContent = "复制";
            this.style.color = "";
            this.disabled = false;
          }, 2000);
        });
    });

  // Back button
  document
    .getElementById("ext-btn-back")
    ?.addEventListener("click", closeModal);

  // Continue button
  document.getElementById("ext-btn-go")?.addEventListener("click", (e) => {
    e.preventDefault();
    goToTarget();
  });

  // Backdrop click
  document
    .getElementById("ext-link-backdrop")
    ?.addEventListener("click", closeModal);

  document.body.style.overflow = "hidden";

  // Countdown
  let timer: ReturnType<typeof setInterval> | null = null;
  function clearTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  if (delay > 0) {
    let remaining = delay;
    const totalDelay = delay;
    const countdownEl = document.getElementById("ext-countdown");
    const progressBar = document.getElementById("ext-progress-bar");
    const progressFill = document.getElementById("ext-progress-fill");
    if (countdownEl) countdownEl.style.display = "block";
    if (progressBar) progressBar.style.display = "block";
    if (countdownEl) countdownEl.textContent = remaining + " 秒后自动跳转";
    if (progressFill) progressFill.style.width = "100%";
    timer = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        goToTarget();
      } else {
        if (countdownEl) countdownEl.textContent = remaining + " 秒后自动跳转";
        if (progressFill) {
          progressFill.style.width = (remaining / totalDelay) * 100 + "%";
        }
      }
    }, 1000);
  }
}

export function initExternalLinkRedirect() {
  if (extLinkInited) return;
  extLinkInited = true;

  document.addEventListener(
    "click",
    (e) => {
      const config = getConfig();
      if (!config?.redirectConfig?.enable_redirect) return;

      const path = e.composedPath();
      const anchor = path.find(
        (el) => el instanceof HTMLElement && el.tagName === "A",
      ) as HTMLAnchorElement | undefined;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      const s = href.substring(0, 11).toLowerCase();
      if (
        s === "javascript:" ||
        s === "mailto:" ||
        href.charAt(0) === "#" ||
        s === "tel:"
      )
        return;

      let hostname: string | undefined;
      try {
        const a = document.createElement("a");
        a.href = href;
        hostname = a.hostname;
      } catch {
        return;
      }
      if (!hostname || hostname === window.location.hostname) return;
      if (isWhitelisted(hostname, config.whitelist)) return;

      e.preventDefault();
      e.stopPropagation();
      createModal(href);
    },
    true,
  );
}
