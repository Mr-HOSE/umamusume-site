# umamusume-site

> 一款以《赛马娘 Pretty Derby》为背景的学园主题静态网站，展示特雷森学园的校史、设施、活动、人物等信息，并包含多项交互式组件。

声明：本项目由AI辅助完成，本人学艺不精。

## 📖 项目简介

本项目是前端设计课程的大作业，基于 HTML5 / CSS3 / 原生 JavaScript 构建，模拟“中央特雷森学园”官网。网站包含校园介绍、人才师资、新闻活动、入学指南等核心板块，并融入轮播图、BGM 播放器、悬浮吉祥物、二十一点小游戏等趣味功能，力求在视觉与交互上呈现青春、活力与赛马娘作品的世界观。

## 🛠️ 技术栈

- **前端**：HTML5, CSS3, 原生 JavaScript (ES6)
- **布局**：Flexbox / Grid，无第三方 UI 库
- **多媒体**：原生 Audio API 控制背景音乐
- **兼容性**：现代浏览器（Chrome, Edge, Firefox），部分效果需本地服务器或 live server 运行（因 Audio 自动播放策略限制，首次播放需用户点击）。

## 📁 目录结构

```
project/
├── index.html                 # 首页
├── pages/                     # 所有子页面
│   ├── admission.html
│   ├── faculty/               # 师资子页面
│   │   ├── teachers.html
│   │   ├── trainers.html
│   │   └── students.html
│   ├── intro/                 # 学园介绍子页面
│   │   ├── intro.html
│   │   ├── history.html
│   │   ├── compus.html
│   │   ├── president.html
│   │   └── motto.html
│   ├── news/                  # 新闻活动子页面
│   │   ├── news.html
│   │   ├── notifications.html
│   │   ├── announcements.html
│   │   └── reports.html
│   ├── utility-links/         # 快捷入口页面
│   │   ├── Student.html
│   │   ├── Staff.html
│   │   ├── Guest.html
│   │   ├── Recruitment.html
│   │   ├── Library.html
│   │   └── Gymnasium.html
│   ├── 21.html                # 黑杰克小游戏
│   └── building.html          # 建设中占位页
├── css/                       # 全局样式及各模块独立样式
│   ├── common.css
│   ├── navbar.css
│   ├── hero.css
│   ├── side.css
│   ├── footer.css
│   ├── schedule.css
│   ├── admission.css
│   ├── faculty.css
│   ├── intro.css
│   ├── news.css
│   ├── link-student.css
│   ├── visitors.css
│   └── Gym.css
├── js/                        # JavaScript 功能模块
│   ├── mascot.js              # 吉祥物 + BGM 控制
│   ├── navbar.js              # 导航菜单 + 搜索框
│   ├── hero.js                # 轮播图逻辑
│   ├── news.js                # 新闻动态渲染（可扩展）
│   ├── scroll-header.js       # 滚动吸顶效果
│   ├── schedule.js            # 活动日程渲染
│   ├── teams.js               # 队伍卡片交互
│   └── effects.js             # 其他视觉效果（花瓣等）
├── source/                    # 图片、音频等静态资源
│   ├── schoolbadge.jpg/png
│   ├── rice1.png / rice2.png  # 吉祥物素材
│   ├── maertiao.mp3           # BGM 文件
│   └── ... 其他配图
└── README.md                  # 项目说明文档
```

## 📝 备注与注意事项

- 本项目为课程作业，未接入后端数据库，所有新闻、活动、人物数据均为前端静态模拟。
- 部分图片资源文件名较长，已保留原始命名，不影响显示；若需替换图片，请保持相同文件名或修改 HTML/CSS 中的路径。
- 页面 “建设中” (`building.html`) 可作为占位模板，替换图片或内容即可。
- 若需要修改轮播图内容，可编辑 `js/hero.js` 中的 `slidesData` 数组。

## 📄 许可

本项目仅供学习交流使用，素材版权归原著作权人所有，请勿商用。
