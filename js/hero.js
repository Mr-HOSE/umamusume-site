document.addEventListener('DOMContentLoaded', function() {
    // --- 1. 轮播图数据 (想添加新图片，只需修改这个数组即可) ---
    const slidesData = [
        { image: 'source/slide1.jpg', alt: '春季训练赛' },
        { image: 'source/twitter_ウマ娘プロジェクト公式アカウント(@uma_musu)_20260222-142712_2025578121165164554_photo.jpg', alt: '新角色登场' },
        { image: 'source/twitter_ウマ娘プロジェクト公式アカウント(@uma_musu)_20260224-063005_2026182828170584179_photo.jpg', alt: '学园祭即将开启' }
    ];

    // --- 2. 获取关键 DOM 元素 ---
    const slidesContainer = document.getElementById('heroSlides');
    const dotsContainer = document.getElementById('heroDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // --- 3. 状态变量 ---
    let currentIndex = 0;
    let autoTimer = null;
    const totalSlides = slidesData.length;
    
    // 占位图：在真实图片加载失败或不显示时使用
    const placeholder = '#';

    // --- 4. 首次渲染幻灯片和指示器 ---
    function renderSlides() {
        // 生成所有幻灯片的 HTML
        if (slidesContainer) {
            slidesContainer.innerHTML = slidesData.map(slide => `
                <div class="hero-slide">
                    <img src="${slide.image || placeholder}" alt="${slide.alt}">
                </div>
            `).join('');
        }
        
        // 生成底部小圆点
        if (dotsContainer) {
            dotsContainer.innerHTML = slidesData.map((_, index) => `
                <span class="hero-dot${index === 0 ? ' active' : ''}" data-index="${index}"></span>
            `).join('');
        }
    }

    // --- 5. 切换到指定索引的幻灯片 (通过移动整个横条) ---
    function goToSlide(index) {
        if (!slidesContainer) return;
        
        // 边界处理，实现循环
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        // 通过 CSS transform 移动横条，向左平移 currentIndex * 100%
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        // 更新指示器圆点状态
        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.hero-dot');
            dots.forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    }

    // --- 6. 切换下一张和上一张 ---
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // --- 7. 自动轮播控制 ---
    function startAutoPlay() {
        stopAutoPlay(); // 先清除已存在的定时器
        autoTimer = setInterval(nextSlide, 4000); // 每 4 秒切换一次
    }

    function stopAutoPlay() {
        if (autoTimer) {
            clearInterval(autoTimer);
            autoTimer = null;
        }
    }

    // --- 8. 事件监听绑定 ---
    // 左右按钮点击
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoPlay(); // 手动点击后重置自动播放计时器
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoPlay();
        });
    }

    // 指示器小圆点点击
    if (dotsContainer) {
        dotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('hero-dot')) {
                const targetIndex = parseInt(e.target.dataset.index, 10);
                if (!isNaN(targetIndex)) {
                    goToSlide(targetIndex);
                    startAutoPlay();
                }
            }
        });
    }

    // 用户鼠标悬停时停止自动播放，离开后恢复
    const heroContainer = document.getElementById('hero');
    if (heroContainer) {
        heroContainer.addEventListener('mouseenter', stopAutoPlay);
        heroContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // 页面失去焦点时停止自动播放，重新获得焦点时恢复
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });

    // --- 9. 页面初始化 ---
    renderSlides();
    startAutoPlay();
});