<h1 align="center">Halo Theme Fuwari NanNan</h1>

<div align="center">

基于 [halo-theme-fuwari](https://github.com/jiewenhuang/halo-theme-fuwari) 二次修改的 [Halo 2.x](https://github.com/halo-dev/halo) 博客主题

移植自 Astro 同名主题 [Fuwari](https://github.com/saicaca/fuwari)

</div>

<p align="center">
  <a href="https://halo.run" target="_blank">
    <img src="https://img.shields.io/badge/dynamic/yaml?label=Halo&query=%24.spec.requires&url=https://raw.githubusercontent.com/AloneNanNan/halo-theme-fuwari-NanNan/master/theme.yaml&color=113,195,71" alt="Halo"/>
  </a>
  <a href="https://github.com/AloneNanNan/halo-theme-fuwari-NanNan/releases" target="_blank">
    <img src="https://img.shields.io/github/v/release/AloneNanNan/halo-theme-fuwari-NanNan" alt="Release"/>
  </a>
  <a href="https://github.com/AloneNanNan/halo-theme-fuwari-NanNan/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/AloneNanNan/halo-theme-fuwari-NanNan" alt="MIT License"/>
  </a>
</p>

---

## 预览

**[楠枝小笺](https://www.nannax.top)**

![首页预览](./screenshot/home.png)

> 本主题基于原版 [halo-theme-fuwari](https://github.com/jiewenhuang/halo-theme-fuwari) 二次开发，在此感谢原作者开源。本主题可与原版共存使用，配置互不冲突，可随时在后台切换体验。本主题使用AI辅助开发。

---

## 二改新增

自行前往[Releases](https://github.com/AloneNanNan/halo-theme-fuwari-NanNan/releases)查看更新日志或下载安装体验

---

## 📦 安装

### 手动上传

1. 前往 [Releases](https://github.com/AloneNanNan/halo-theme-fuwari-NanNan/releases) 下载最新版本的主题包
2. 进入 Halo 后台 → 主题 → 安装，上传主题包即可

---

## 🔌 插件支持

| 插件         | 链接                                                     | 说明             |
| ------------ | -------------------------------------------------------- | ---------------- |
| 搜索插件     | [应用市场](https://www.halo.run/store/apps/app-DlacW)    | 文章搜索功能     |
| 评论插件     | [应用市场](https://www.halo.run/store/apps/app-YXyaD)    | 文章评论系统     |
| 瞬间插件     | [应用市场](https://www.halo.run/store/apps/app-SnwWD)    | 瞬间/说说功能    |
| 图库插件     | [应用市场](https://www.halo.run/store/apps/app-BmQJW)    | 图库展示         |
| 链接管理插件 | [应用市场](https://www.halo.run/store/apps/app-hfbQg)    | 友情链接管理     |
| 自助提交友链 | [应用市场](https://www.halo.run/store/apps/app-glejqzwk) | 访客自助提交友链 |
| 朋友圈       | [应用市场](https://www.halo.run/store/apps/app-yISsV)    | 友链博客文章聚合 |
| 装备管理     | [应用市场](https://www.halo.run/store/apps/app-ytygyqml) | 装备展示         |

---

## 🎨 功能特性

- [x] 卡片化设计
- [x] 响应式布局
- [x] 深色模式
- [x] 文章目录
- [x] 代码高亮 / 语言显示 / 复制（插件）
- [x] 文章搜索（插件）
- [x] 评论系统（插件）
- [x] 友情链接
- [x] 图库展示
- [x] 瞬间/说说
- [x] i18n 国际化
- [x] 自定义主题色
- [x] 页面过渡动画 (Swup)
- [x] 子菜单支持
- [x] 多种小组件
- [x] 自助提交友链（插件）
- [x] 菜单栏模糊效果
- [x] Banner 波浪效果
- [x] 三栏布局
- [x] 页脚自定义
- [x] 登录认证界面适配
- [x] 卡片3D倾斜效果

---

## 📁 项目结构

```
halo-theme-fuwari-NanNan/
├── i18n/                        # 国际化翻译文件
│   ├── default.properties       # 默认语言
│   ├── zh_CN.properties         # 简体中文
│   └── zh_TW.properties         # 繁体中文
├── public/
│   └── assets/                  # 静态资源（JS 脚本、图片等）
├── src/
│   ├── components/              # Astro / Svelte 组件
│   │   ├── *.astro              # 静态组件（Header、Footer、PostCard 等）
│   │   └── *.svelte             # 交互组件（Search、LightDarkSwitch 等）
│   ├── constants/               # 常量定义（主题参数、图标等）
│   ├── layouts/                 # 页面布局
│   │   ├── Layout.astro         # 根布局
│   │   └── MainGridLayout.astro # 主网格布局
│   ├── pages/                   # 页面模板（首页、文章、归档等）
│   ├── styles/                  # 全局样式
│   ├── types/                   # TypeScript 类型定义
│   └── utils/                   # 工具函数
├── astro.config.mjs             # Astro 构建配置
├── settings.yaml                # Halo 主题设置定义
├── theme.yaml                   # Halo 主题元信息
└── package.json                 # 项目依赖与脚本
```

---

## 📁 项目结构

```
halo-theme-fuwari-NanNan/
├── i18n/                        # 国际化翻译文件
│   ├── default.properties       # 默认语言
│   ├── zh_CN.properties         # 简体中文
│   └── zh_TW.properties         # 繁体中文
├── public/
│   └── assets/                  # 静态资源（JS 脚本、图片等）
├── src/
│   ├── components/              # Astro / Svelte 组件
│   │   ├── *.astro              # 静态组件（Header、Footer、PostCard 等）
│   │   └── *.svelte             # 交互组件（Search、LightDarkSwitch 等）
│   ├── constants/               # 常量定义（主题参数、图标等）
│   ├── layouts/                 # 页面布局
│   │   ├── Layout.astro         # 根布局
│   │   └── MainGridLayout.astro # 主网格布局
│   ├── pages/                   # 页面模板（首页、文章、归档等）
│   ├── styles/                  # 全局样式
│   ├── types/                   # TypeScript 类型定义
│   └── utils/                   # 工具函数
├── astro.config.mjs             # Astro 构建配置
├── settings.yaml                # Halo 主题设置定义
├── theme.yaml                   # Halo 主题元信息
└── package.json                 # 项目依赖与脚本
```

---

## 🛠️ 开发

> 需要 Node.js >= 22.12.0 和 pnpm

```bash
# 克隆项目
git clone https://github.com/AloneNanNan/halo-theme-fuwari-NanNan.git
cd halo-theme-fuwari-NanNan

# 安装依赖
pnpm install

# 开发模式（监听文件变更自动重建）
pnpm dev

# 构建主题
pnpm build

# 构建并打包为主题安装包
pnpm build:pkg

# 代码格式化
pnpm format
```

---

## 🙏 致谢

- [Halo](https://halo.run) — 优秀的 Java 博客系统
- [Fuwari](https://github.com/saicaca/fuwari) — 原始 Astro 主题
- [halo-theme-fuwari](https://github.com/jiewenhuang/halo-theme-fuwari) — 原版 Halo 移植主题
- [Halo Sig](https://github.com/halo-sigs) — Halo 社区插件

---

## 📄 许可证

[MIT License](./LICENSE)
