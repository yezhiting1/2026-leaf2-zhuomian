(function () {
  // ===== 折叠面板交互（平滑展开/收起动画）=====
  function initCollapse() {
    document.querySelectorAll(".collapse-content").forEach(function (c) {
      if (c.dataset.transitionBound) return;
      c.dataset.transitionBound = "true";
      c.style.transition = "max-height 0.35s ease";
      c.addEventListener("transitionend", function (e) {
        if (e.propertyName === "max-height") {
          if (c.classList.contains("open")) {
            c.style.overflow = "visible";
            c.style.maxHeight = "";
          }
        }
      });
    });

    var headers = document.querySelectorAll("[data-collapse-target]");
    headers.forEach(function (header) {
      if (header.dataset.collapseBound) return;
      header.dataset.collapseBound = "true";

      header.addEventListener("click", function () {
        var targetId = header.getAttribute("data-collapse-target");
        var content = document.getElementById(targetId);
        var icon = header.querySelector(".collapse-icon");
        if (!content) return;

        var isOpen = content.classList.contains("open");

        document
          .querySelectorAll(".collapse-content.open")
          .forEach(function (c) {
            if (c !== content) {
              closePanel(c);
              var otherIcon = (
                c.parentElement || c.closest(".collapse-item")
              ).querySelector(".collapse-icon");
              if (otherIcon) otherIcon.classList.remove("is-expanded");
            }
          });

        if (!isOpen) {
          openPanel(content, icon);
        } else {
          closePanel(content, icon);
        }
      });
    });

    function openPanel(content, icon) {
      content.style.overflow = "hidden";
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
      if (icon) icon.classList.add("is-expanded");
    }

    function closePanel(content, icon) {
      var currentHeight = content.scrollHeight;
      content.style.overflow = "hidden";
      // 若 scrollHeight 为 0（元素 display:none 或不可见），无过渡直接关闭
      if (currentHeight <= 0) {
        content.style.maxHeight = "0px";
        content.classList.remove("open");
        if (icon) icon.classList.remove("is-expanded");
        return;
      }
      content.style.maxHeight = currentHeight + "px";
      content.offsetHeight;
      content.style.maxHeight = "0px";
      content.classList.remove("open");
      if (icon) icon.classList.remove("is-expanded");
    }

    document.querySelectorAll(".collapse-content.open").forEach(function (c) {
      c.style.maxHeight = c.scrollHeight + "px";
      c.style.overflow = "visible";
    });
    document
      .querySelectorAll(".collapse-content:not(.open)")
      .forEach(function (c) {
        c.style.maxHeight = "0px";
        c.style.overflow = "hidden";
      });
  }

  // ===== 复制功能 =====
  function initCopy() {
    var buttons = document.querySelectorAll(".copy-btn");
    buttons.forEach(function (btn) {
      if (btn.dataset.copyBound) return;
      btn.dataset.copyBound = "true";

      btn.addEventListener("click", function () {
        var text = btn.getAttribute("data-copy-text");
        if (!text) {
          var container = btn.closest(".flex");
          if (container) {
            var link = container.querySelector("a");
            if (link) {
              text = link.href || link.textContent;
            }
          }
        }

        if (text) {
          text = text.trim();
          var textSpan = btn.querySelector("span:last-child");
          var iconSpan = btn.querySelector(
            ".icon-\\[material-symbols--content-copy-outline-rounded\\]",
          );
          var originalText = textSpan ? textSpan.textContent : "";
          var originalClasses = iconSpan ? iconSpan.className : "";

          if (textSpan) textSpan.textContent = "已复制";
          if (iconSpan)
            iconSpan.className =
              "icon-[material-symbols--check-rounded] text-sm";
          btn.disabled = true;
          btn.classList.add("text-(--primary)");

          navigator.clipboard
            .writeText(text)
            .then(function () {
              setTimeout(function () {
                if (textSpan) textSpan.textContent = originalText;
                if (iconSpan) iconSpan.className = originalClasses;
                btn.disabled = false;
                btn.classList.remove("text-(--primary)");
              }, 2000);
            })
            .catch(function () {
              console.warn("[Copy] Clipboard write failed");
              setTimeout(function () {
                if (textSpan) textSpan.textContent = originalText;
                if (iconSpan) iconSpan.className = originalClasses;
                btn.disabled = false;
                btn.classList.remove("text-(--primary)");
              }, 2000);
            });
        }
      });
    });
  }

  // ===== 随机访问友链 =====
  function initRandomVisit() {
    var btn = document.getElementById("random-visit-btn");
    if (!btn || btn.dataset.randomBound) return;
    btn.dataset.randomBound = "true";

    btn.addEventListener("click", function () {
      var allowedGroups = btn.getAttribute("data-random-groups") || "";
      var groupFilter = allowedGroups
        ? allowedGroups
            .split(/[\n,]/)
            .map(function (g) {
              return g.trim();
            })
            .filter(Boolean)
        : [];

      var links = [];
      document
        .querySelectorAll(".btn-card[data-link-group]")
        .forEach(function (card) {
          var groupName = card.getAttribute("data-link-group") || "";
          if (groupFilter.length > 0 && groupFilter.indexOf(groupName) === -1) {
            return;
          }
          var url = card.getAttribute("href");
          if (url) {
            links.push(url);
          }
        });

      if (links.length === 0) {
        alert("暂无可随机访问的友链");
        return;
      }

      var randomIndex = Math.floor(Math.random() * links.length);
      var randomUrl = links[randomIndex];

      var a = document.createElement("a");
      a.href = randomUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  // ===== 渲染友链须知和免责申明列表 =====
  function renderRequirementsList() {
    var lists = document.querySelectorAll(
      ".requirements-list, .disclaimer-list",
    );
    lists.forEach(function (list) {
      if (list.dataset.rendered) return;
      list.dataset.rendered = "true";
      var text = list.getAttribute("data-text");
      if (text) {
        var lines = text.split("\n");
        lines.forEach(function (line) {
          if (line.trim()) {
            var li = document.createElement("li");
            li.textContent = line.trim();
            list.appendChild(li);
          }
        });
      }
    });
  }

  // ===== 朋友圈：从文章链接提取博客主页 =====
  function initFriendAuthors() {
    document.querySelectorAll(".friend-author").forEach(function (a) {
      if (a.dataset.friendBound) return;
      a.dataset.friendBound = "true";
      var postLink = a.getAttribute("data-site");
      if (!postLink) return;
      try {
        var u = new URL(postLink);
        a.href = u.origin + "/";
      } catch (e) {
        a.href = postLink;
      }
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
  }

  // ===== 初始化所有功能 =====
  function initAll() {
    // renderRequirementsList 必须在 initCollapse 之前执行，
    // 确保 UL 内容已填充，否则 collapse 的 maxHeight 计算会基于空内容
    renderRequirementsList();
    initFriendAuthors();
    initCollapse();
    initCopy();
    initRandomVisit();
  }

  // ===== DOMContentLoaded 处理 =====
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }

  // ===== Swup 页面切换后重新初始化 =====
  document.addEventListener("swup:contentReplaced", function () {
    document.querySelectorAll("[data-collapse-bound]").forEach(function (el) {
      el.dataset.collapseBound = "";
    });
    document.querySelectorAll("[data-copy-bound]").forEach(function (el) {
      el.dataset.copyBound = "";
    });
    document.querySelectorAll("[data-friend-bound]").forEach(function (el) {
      el.dataset.friendBound = "";
    });
    document.querySelectorAll("[data-tilt-bound]").forEach(function (el) {
      el.dataset.tiltBound = "";
    });
    document.querySelectorAll("[data-upvote-bound]").forEach(function (el) {
      el.dataset.upvoteBound = "";
    });
    document.querySelectorAll("[data-rendered]").forEach(function (el) {
      el.dataset.rendered = "";
    });
    var randomBtn = document.getElementById("random-visit-btn");
    if (randomBtn) randomBtn.dataset.randomBound = "";
    initAll();
    // 使用 requestAnimationFrame 确保 DOM 布局完成后再绑定 tilt
    requestAnimationFrame(function () {
      requestAnimationFrame(initTilt);
    });
    initUpvote();
  });

  // ===== 卡片3D倾斜 =====
  var MAX_TILT = 12;
  function initTilt() {
    document.querySelectorAll(".card-tilt").forEach(function (card) {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "true";
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var rx = (y / rect.height - 0.5) * -MAX_TILT;
        var ry = (x / rect.width - 0.5) * MAX_TILT;
        card.style.transform =
          "perspective(800px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
      });
    });
  }
  initTilt();

  // ===== 瞬间点赞 =====
  function initUpvote() {
    document.querySelectorAll(".moment-upvote-btn").forEach(function (btn) {
      if (btn.dataset.upvoteBound) return;
      btn.dataset.upvoteBound = "true";
      var name = btn.getAttribute("data-moment");
      var key = "fuwari-upvote-moment-" + name;
      if (localStorage.getItem(key) === "1") {
        btn.classList.add("text-(--primary)");
        btn.style.pointerEvents = "none";
      }
      btn.addEventListener("click", function () {
        if (localStorage.getItem(key) === "1") return;
        localStorage.setItem(key, "1");
        btn.classList.add("text-(--primary)");
        btn.style.pointerEvents = "none";
        var countEl = btn.querySelector(".moment-upvote-count");
        if (countEl)
          countEl.textContent = parseInt(countEl.textContent || "0", 10) + 1;
        fetch("/apis/api.halo.run/v1alpha1/trackers/upvote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            group: "moment.halo.run",
            plural: "moments",
            name: name,
          }),
        }).catch(function () {});
      });
    });
  }
  initUpvote();
})();

// ===== 波浪viewBox动画 =====
(function wavAnim() {
  // 页面上没有波浪 SVG 则跳过
  if (!document.getElementById("wave-svg-1")) return;

  var speeds = [18, 12, 8];
  var running = true;

  function setWaveViewBox() {
    var t = performance.now() / 1000;
    for (var i = 1; i <= 3; i++) {
      var svg = document.getElementById("wave-svg-" + i);
      if (!svg) continue;
      svg.setAttribute(
        "viewBox",
        ((t / speeds[i - 1]) % 1) * 2880 + " 0 1440 200",
      );
    }
  }

  function step() {
    setWaveViewBox();
    if (running) requestAnimationFrame(step);
  }

  function resume() {
    if (running) return;
    running = true;
    requestAnimationFrame(step);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      running = false;
    } else {
      resume();
    }
  });

  requestAnimationFrame(step);
  document.addEventListener("swup:contentReplaced", setWaveViewBox);
})();
