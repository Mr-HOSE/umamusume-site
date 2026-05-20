// js/schedule.js
document.addEventListener('DOMContentLoaded', function() {
    const timelineContainer = document.getElementById('eventTimeline');
    if (!timelineContainer) return;

    const schedules = [
        { date: '05月10日', title: '春季URA预选赛', desc: '各年级马娘于第一跑道进行资格角逐。' },
        { date: '06月01日', title: '特雷森学园祭', desc: '向公众开放，包含模拟店、女仆咖啡厅与特别Live。' },
        { date: '07月15日', title: '夏季合宿', desc: '全体队伍前往海边集训设施进行特训。' }
    ];

    timelineContainer.innerHTML = schedules.map(item => `
    <div class="event-row">
        <div class="event-date-box">
            <span class="month">${item.date.split('月')[0]}月</span>
            <span class="day">${item.date.split('月')[1]}</span>
        </div>
        <div class="event-detail">
            <div class="event-header">
                <span class="event-status">预定中</span>
                <h3>${item.title}</h3>
            </div>
            <p>${item.desc}</p>
        </div>
    </div>
`).join('');

function onScroll() {
    // ... 原有逻辑 ...

    // 检查哪些 section 应该显示
    const reveals = document.querySelectorAll('.section-reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

});