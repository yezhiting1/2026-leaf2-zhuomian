// 波浪 viewBox 动画
(function () {
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
