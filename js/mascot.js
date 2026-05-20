document.addEventListener('DOMContentLoaded', () => {
    // 实例化 BGM
    const bgm = new Audio('/source/maertiao.mp3');
    bgm.loop = true;
    bgm.volume = 0.5;

    const mascotPanel = document.getElementById('sideMascotPanel');
    const bgmPlayBtn = document.getElementById('bgmPlayBtn');
    const bgmVolume = document.getElementById('bgmVolume');
    const mascotBubble = document.getElementById('mascotBubble');
    const mascotImg = document.getElementById('mascotImg');

    const originalSrc = '/source/rice1.png';
    const hoverSrc = '/source/rice2.png';

    const defaultMsg = "兄长大人，今天也要加油哦！";
    const playingMsg = "♪ 正在播放：马儿蹦跳传说 ♪";

    // 设置初始音量滑块
    if (bgmVolume) {
        bgmVolume.value = bgm.volume;
    }

    // 播放/暂停控制
    function toggleBgm() {
        if (!bgmPlayBtn) return;
        if (bgm.paused) {
            bgm.play().then(() => {
                bgmPlayBtn.innerHTML = '<span class="btn-icon">⏸</span>';
                mascotPanel.classList.add('is-playing');
                mascotBubble.textContent = playingMsg;
            }).catch(err => {
                console.log("浏览器限制了自动播放，需要用户点击：", err);
                alert("请手动点击播放按钮激活 BGM ♪");
            });
        } else {
            bgm.pause();
            bgmPlayBtn.innerHTML = '<span class="btn-icon">▶</span>';
            mascotPanel.classList.remove('is-playing');
            mascotBubble.textContent = defaultMsg;
        }
    }

    // 绑定播放按钮
    if (bgmPlayBtn) {
        bgmPlayBtn.addEventListener('click', toggleBgm);
    }

    // 吉祥物区域交互
    if (mascotImg) {
        // 点击吉祥物也能控制 BGM
        mascotImg.addEventListener('click', toggleBgm);

        // 鼠标悬停切换图片
        mascotImg.addEventListener('mouseenter', () => {
            mascotImg.src = hoverSrc;
        });
        mascotImg.addEventListener('mouseleave', () => {
            mascotImg.src = originalSrc;
        });
    }

    // 音量调节
    if (bgmVolume) {
        bgmVolume.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            bgm.volume = vol;

            const volIcon = mascotPanel.querySelector('.vol-icon');
            if (volIcon) {
                if (vol === 0) {
                    volIcon.textContent = '❌';
                } else if (vol < 0.5) {
                    volIcon.textContent = '低';
                } else {
                    volIcon.textContent = '高';
                }
            }
        });
    }

    // 回到顶部按钮
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});