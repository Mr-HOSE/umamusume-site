document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.team-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // 1. 如果点击的是已经展开的，可以考虑不操作或收回
            if (card.classList.contains('active')) {
                card.classList.remove('active');
                return;
            }

            // 2. 排他性处理：移除其他所有卡片的 active 类
            cards.forEach(c => c.classList.remove('active'));

            // 3. 为当前点击的卡片添加 active
            card.classList.add('active');
        });
    });
});