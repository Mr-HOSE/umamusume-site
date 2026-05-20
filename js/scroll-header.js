document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const utilityBar = document.querySelector('.utility-bar');
    const hero = document.getElementById('hero');

    if (!header) return;

    // 获取工具条的高度（用于判断滚动阈值）
    const utilityHeight = utilityBar ? utilityBar.offsetHeight : 28;

    function onScroll() {
        const scrollY = window.scrollY || window.pageYOffset;

        // 当滚动超过工具条高度，把导航栏吸顶，并改变背景
        if (scrollY > utilityHeight) {
            header.classList.add('sticky-top');
        } else {
            header.classList.remove('sticky-top');
        }

        // 如果你仍需要基于轮播图高度切换背景（可选，如果还想区分轮播区域）
        // 可以保留之前的逻辑，但这里背景已经被 .sticky-top 覆盖了，所以保留无妨
        // 如果你的背景切换完全与滚动距离相关，现在的逻辑已经足够了。
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // 初始检查
});