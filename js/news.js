document.addEventListener('DOMContentLoaded', function() {
    const newsGrid = document.getElementById('newsGrid');

    // 直接用 fetch 读取本地 JSON（需要本地服务器环境，否者直接用下面的数组）
    // 如果你只是双击打开 HTML，则用下面直接定义数组的方式，因为 fetch 本地文件受跨域限制
    const newsData = [
        { id: 1, title: "春季训练赛即将开启", date: "2026-04-28", summary: "...", image: "https://via.placeholder.com/300x200?text=新闻1" },
        { id: 2, title: "新角色「里见光钻」登场", date: "2026-04-25", summary: "...", image: "https://via.placeholder.com/300x200?text=新闻2" },
        { id: 3, title: "学园祭志愿者招募", date: "2026-04-20", summary: "...", image: "https://via.placeholder.com/300x200?text=新闻3" }
    ];

    // 在 news.js 中更新 renderNews 函数生成的 HTML
function renderNews(newsList) {
    newsGrid.innerHTML = newsList.map(news => `
        <article class="news-card anime-card">
            <div class="card-tag">NEW EVENT</div>
            <div class="news-image-wrap">
                <img src="${news.image}" alt="${news.title}">
            </div>
            <div class="news-content">
                <time>${news.date}</time>
                <h3>${news.title}</h3>
                <p>${news.summary}</p>
                <div class="card-footer">
                    <span>#特雷森日常</span>
                    <button class="btn-sm">详情 →</button>
                </div>
            </div>
        </article>
    `).join('');
}

    renderNews(newsData);
});