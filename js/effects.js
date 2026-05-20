// 在 common.js 或新建 effects.js 中添加
function createPetals() {
    const section = document.querySelector('.intro');
    for (let i = 0; i < 5; i++) {
        const petal = document.createElement('span');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 5 + 's';
        section.appendChild(petal);
        setTimeout(() => petal.remove(), 10000);
    }
}
setInterval(createPetals, 2000);