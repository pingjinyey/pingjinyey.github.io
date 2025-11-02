(function () {
  function initSlider(root) {
    const slides = Array.from(root.querySelectorAll(".hbxtw-slide"));
    if (!slides.length) return;

    const indicators = Array.from(root.querySelectorAll("[data-indicator]"));

    let idx = 0,
      timer = null;
    const COUNT = slides.length;
    const AUTO = root.dataset.autoPlay === "true";
    const INTERVAL = parseInt(root.dataset.interval || "5000", 10);

    // 让容器可聚焦，才能接收键盘事件
    if (!root.hasAttribute("tabindex")) root.setAttribute("tabindex", "0");

    function setActive(i, dir) {
      const cur = slides[idx];
      const nxt = slides[i];

      if (nxt) nxt.classList.remove("hidden");

      if (cur) {
        cur.classList.remove("translate-x-0", "opacity-100");
        cur.classList.add(
          dir === -1 ? "translate-x-full" : "-translate-x-full",
          "opacity-0"
        );
        cur.style.pointerEvents = "none";
        setTimeout(() => cur.classList.add("hidden"), 500);
      }

      if (nxt) {
        nxt.classList.remove(
          "translate-x-full",
          "-translate-x-full",
          "opacity-0"
        );
        nxt.classList.add("translate-x-0", "opacity-100");
        nxt.style.pointerEvents = "auto";
      }

      indicators.forEach(
        (b, k) => (b.dataset.active = k === i ? "true" : "false")
      );
      idx = i;
    }

    function go(i, dir = 0) {
      const t = (i + COUNT) % COUNT;
      if (t === idx) return;
      setActive(t, dir);
    }
    function next() {
      go(idx + 1, +1);
    }
    function prev() {
      go(idx - 1, -1);
    }

    // 初始化：第 0 张可见，其它 hidden
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
    indicators.forEach(
      (b, k) => (b.dataset.active = k === 0 ? "true" : "false")
    );

    // —— 点击：事件委托（按钮 & 指示点）——
    root.addEventListener("click", (e) => {
      const t = e.target;

      // ---- 早退：点击真实链接就让浏览器自己处理（不阻止默认）----
      const linkEl = t.closest?.("a[href]");
      if (linkEl) {
        // 如果你页面里有 data-next/data-prev 包裹了 <a>，下面的控件判断会命中并阻止默认。
        // 所以必须把“真实链接”早退放在最前面。
        return;
      }

      // 原有控件命中逻辑
      const hitNext = t.closest?.("[data-next]");
      const hitPrev = t.closest?.("[data-prev]");
      const hitInd = t.closest?.("[data-indicator]");

      if (hitNext) {
        e.preventDefault();
        next();
        return;
      }
      if (hitPrev) {
        e.preventDefault();
        prev();
        return;
      }
      if (hitInd) {
        e.preventDefault();
        const to = parseInt(hitInd.getAttribute("data-indicator"), 10);
        if (!Number.isNaN(to)) go(to, 0);
      }
    });

    // —— 键盘：左右箭头 ——（容器需可聚焦）
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });

    // —— 手势滑动（鼠标/触控统一 Pointer 事件）——
    // 只在非控件区域启用；点到按钮/指示点时完全不接管指针
    let startX = 0,
      tracking = false,
      moved = false;
    const SWIPE_THRESHOLD = 40;

    function isControl(el) {
      return !!el.closest?.("[data-prev], [data-next], [data-indicator]");
    }
    function isLink(el) {
      return !!el.closest?.('a[href], [role="link"]');
    }

    root.addEventListener("pointerdown", (e) => {
      // 点到控件或链接：完全不启用手势，不 capture
      if (isControl(e.target) || isLink(e.target)) {
        return;
      }
      tracking = true;
      moved = false;
      startX = e.clientX;
      // 只在“普通区域”才捕获指针，避免影响链接点击
      if (root.setPointerCapture) root.setPointerCapture(e.pointerId);
    });

    root.addEventListener(
      "pointermove",
      (e) => {
        if (!tracking) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 6) moved = true;
        // 不调用 preventDefault，避免影响 click 生成
      },
      { passive: true }
    );

    root.addEventListener("pointerup", (e) => {
      if (!tracking) return;
      const dx = e.clientX - startX;
      tracking = false;
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        dx < 0 ? next() : prev();
      }
      if (root.releasePointerCapture) root.releasePointerCapture(e.pointerId);
    });
    // —— 自动播放（悬停/聚焦暂停）——
    function tick() {
      next();
    }
    function start() {
      if (AUTO) {
        stop();
        timer = setInterval(tick, INTERVAL);
      }
    }
    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);

    // 启动
    start();
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
