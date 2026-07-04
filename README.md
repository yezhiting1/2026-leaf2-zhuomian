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

## ✨ 二改新增功能

基于原版 [halo-theme-fuwari](https://github.com/jiewenhuang/halo-theme-fuwari) 进行二次开发，由于更改项目较多，下方举例介绍。

### 1. 增加三栏布局样式

- 可自由选择选择页面的布局模式：两栏（仅左侧边栏）或三栏（左侧 + 右侧边栏）
- 响应式设计，适配多设备端
- 适配各个页面的显示效果

### 2. 增加多种小部件

- **一言**
  - 集成 [Hitokoto](https://hitokoto.cn/) API 随机一言
  - 支持点击刷新换一句
- **天气**
  - 使用[腾讯位置服务](https://lbs.qq.com/)WebService API，请前往官网免费注册使用
  - 可自动获取访客位置信息并展示天气、风向等数据
- **站点统计**
  - 展示文章、分类、标签、总字数、最后活动、运行天数等数据
  - 文章、分类、标签支持点击跳转其页面
- **热门文章**
  - 按浏览次数从高到底排列，显示前5篇文章
  - 每篇文章显示：排名（前3名高亮）、标题、浏览次数
- **目录**
  - 仅在三栏样式下文章页面显示目录小部件，二栏样式目录为原版样式
  - 文章页面右侧边栏显示，其它页面自动隐藏

### 3. 适配多款Halo插件

- **自助提交友链**
  - 支持访客自助提交友链申请
  - 可配置显示/隐藏
  - 需安装 [自助提交友链](https://www.halo.run/store/apps/app-glejqzwk) 插件
- **朋友圈**
  - 展示友情链接博客的文章
  - 需安装 [朋友圈](https://www.halo.run/store/apps/app-yISsV) 插件
- **装备管理**
  - 展示装备信息
  - 需安装 [装备管理](https://www.halo.run/store/apps/app-ytygyqml) 插件

### 4. 增加友链页面折叠面板

- **我的博客信息**：展示博主基本信息，支持一键复制（博客名称、描述、头像、网址、RSS）
- **友链须知**：展示申请友链的要求说明，可自定义/隐藏
- **免责声明**：展示站点免责声明，可自定义/隐藏
- **自助提交友链**：访客自助提交友链申请

### 5. 适配 Halo 子菜单

- 导航栏支持Halo子菜单的展示
- 适配多设备端交互

### 6. 页脚增强

- 隐私政策入口
- 页脚超链接可自定义
- 页脚链接可配置显示/隐藏

### 7. 登录认证界面

- 添加适配主题UI的登录认证页面
- 可自定义选择原生样式或适配样式

### 8. 文章点赞

- 文章末尾点赞交互功能

### 9. 外链跳转

- 添加外链跳转模态框，适配主题UI
- 支持在配置跳转白名单、自动跳转时间

### 10. UI 改进

- 导航栏模糊效果
- Banner 底部波浪效果

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
- [x] 一言组件
- [x] 友链折叠面板
- [x] 导航栏模糊效果
- [x] Banner 波浪效果
- [x] 页脚隐私政策入口
- [x] 页脚自定义链接
- [x] 登录认证界面适配
- [x] 文章点赞

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
