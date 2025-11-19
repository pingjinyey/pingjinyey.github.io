(function () {
  function initSlider(root) {
    const slides = Array.from(root.querySelectorAll(".hbxtw-slide"));
    if (!slides.length) return;

    const indicators = Array.from(
      root.querySelectorAll("[data-indicator]")
    );
    const counterEl = root.querySelector("[data-counter]");

    let index = 0;
    let timer = null;

    const COUNT = slides.length;
    const AUTO = root.dataset.autoPlay === "true";
    const INTERVAL = parseInt(root.dataset.interval || "5000", 10);

    if (!root.hasAttribute("tabindex")) root.setAttribute("tabindex", "0");

    function updateCounter(i) {
      if (counterEl) {
        counterEl.textContent = String(i + 1);
      }
    }

    function setActive(newIndex, direction) {
      const current = slides[index];
      const next = slides[newIndex];

      if (next) next.classList.remove("hidden");

      if (current && current !== next) {
        current.classList.remove("translate-x-0", "opacity-100");
        current.classList.add(
          direction === -1 ? "translate-x-full" : "-translate-x-full",
          "opacity-0"
        );
        current.style.pointerEvents = "none";
        window.setTimeout(() => current.classList.add("hidden"), 500);
      }

      if (next) {
        next.classList.remove(
          "translate-x-full",
          "-translate-x-full",
          "opacity-0"
        );
        next.classList.add("translate-x-0", "opacity-100");
        next.style.pointerEvents = "auto";
      }

      indicators.forEach((btn, i) => {
        btn.dataset.active = i === newIndex ? "true" : "false";
      });

      updateCounter(newIndex);
      index = newIndex;
    }

    function goTo(newIndex, direction) {
      const target = (newIndex + COUNT) % COUNT;
      if (target === index) return;
      setActive(target, direction);
    }

    function next() {
      goTo(index + 1, +1);
    }

    function prev() {
      goTo(index - 1, -1);
    }

    function startAuto() {
      if (!AUTO) return;
      stopAuto();
      timer = window.setInterval(next, INTERVAL);
    }

    function stopAuto() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    // ---- 初始化 ----
    slides.forEach((el, i) => {
      if (i === 0) {
        el.classList.remove(
          "translate-x-full",
          "-translate-x-full",
          "opacity-0",
          "hidden"
        );
        el.classList.add("translate-x-0", "opacity-100");
        el.style.pointerEvents = "auto";
      } else {
        el.classList.remove(
          "translate-x-0",
          "-translate-x-full",
          "opacity-100"
        );
        el.classList.add("translate-x-full", "opacity-0", "hidden");
        el.style.pointerEvents = "none";
      }
    });
    indicators.forEach((btn, i) => {
      btn.dataset.active = i === 0 ? "true" : "false";
    });
    updateCounter(0);

    // ---- 事件 ----
    // 点击箭头 & 分页条
    root.addEventListener("click", (event) => {
      const target = event.target;

      const arrowNext = target.closest?.("[data-next]");
      const arrowPrev = target.closest?.("[data-prev]");
      const indicator = target.closest?.("[data-indicator]");

      if (arrowNext) {
        event.preventDefault();
        next();
        startAuto();
        return;
      }
      if (arrowPrev) {
        event.preventDefault();
        prev();
        startAuto();
        return;
      }
      if (indicator) {
        event.preventDefault();
        const to = parseInt(indicator.getAttribute("data-indicator") || "0", 10);
        if (!Number.isNaN(to)) {
          goTo(to, 0);
          startAuto();
        }
      }
    });

    // 键盘左右键
    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        next();
        startAuto();
      } else if (event.key === "ArrowLeft") {
        prev();
        startAuto();
      }
    });

    // 滑动切换
    let startX = 0;
    let tracking = false;
    const SWIPE_THRESHOLD = 40;

    function isControl(el) {
      return !!el.closest?.("[data-prev], [data-next], [data-indicator]");
    }
    function isLink(el) {
      return !!el.closest?.("a[href], [role='link']");
    }

    root.addEventListener("pointerdown", (event) => {
      if (isControl(event.target) || isLink(event.target)) {
        return;
      }
      tracking = true;
      startX = event.clientX;
      if (root.setPointerCapture) {
        root.setPointerCapture(event.pointerId);
      }
    });

    root.addEventListener("pointerup", (event) => {
      if (!tracking) return;
      tracking = false;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0) {
          next();
        } else {
          prev();
        }
        startAuto();
      }
      if (root.releasePointerCapture) {
        root.releasePointerCapture(event.pointerId);
      }
    });

    // 自动播放：不会因为点击图片而停下
    startAuto();

    // 可选：销毁时清理
    root.addEventListener("hbxtw:destroy", () => {
      stopAuto();
    });
  }

  function initAll() {
    document.querySelectorAll("[data-hbx-slider]").forEach(initSlider);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();