import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "../constants/constants";

// ========== 顶层配置 ==========
export interface ThemeConfig {
  base: Base;
  style: Style;
  sidebar: Sidebar;
  profile: Profile;
  post: Post;
  footer: Footer;
  links: Links;
  external_link: ExternalLink;
  development: Development;
}

// ========== 基础设置 ==========
export interface Base {
  themeColor: ThemeColor;
  banner: Banner;
  menu: string;
}

export interface ThemeColor {
  hue: number;
  fixed: boolean;
}

export interface Banner {
  enable: boolean;
  src: string;
  position: string;
  wave?: boolean;
  credit: Credit;
}

export interface Credit {
  enable: boolean;
  text: string;
  url: string;
}

// ========== 样式 ==========
export interface Style {
  color_scheme: string;
  enable_change_color_scheme: boolean;
  navbar_blur?: boolean;
}

// ========== 侧边栏 ==========
export interface Sidebar {
  layoutMode: string;
  widgets: Widget[];
  rightWidgets?: Widget[];
}

export interface Widget {
  value: string;
  html?: string;
  title?: string;
  server?: string;
  type?: string;
  id?: string;
  play_mode?: string;
  volume?: number;
  api?: string;
  site_start_date?: string;
  tencent_key?: string;
  default_city?: string;
}

// ========== 个人设置 ==========
export interface Profile {
  name: string;
  bio: string;
  avatar: string;
  enable_profile: boolean;
  url: string;
  social_media: SocialMedum[];
}

export interface SocialMedum {
  social_icon?: { value?: string };
  icon?: string;
  url: string;
  text?: string;
  url_type?: string;
  name?: string;
  custom_icon?: string;
}

// ========== 文章 ==========
export interface Post {
  license: License;
  contentDisplay: ContentDisplay;
  toc: Toc;
  enable_like?: boolean;
  summary?: PostSummary;
}

export interface License {
  enable: boolean;
  name: string;
  url: string;
}

export interface ContentDisplay {
  content_size: string;
  content_theme: string;
}

export interface Toc {
  enable_toc: boolean;
  toc_depth: number;
}

export interface PostSummary {
  enable_summary: boolean;
  summary_title: string;
}

// ========== 页脚 ==========
export interface Footer {
  beian: Beian;
  displayLinks: FooterDisplayLinks;
  custom_links?: FooterCustomLink[];
}

export interface Beian {
  gongan_link: string;
  icp_link: string;
  gongan_text: string;
  icp_text: string;
}

export interface FooterDisplayLinks {
  enable_privacy: boolean;
  privacy_url: string;
  enable_rss: boolean;
  enable_sitemap: boolean;
}

export interface FooterCustomLink {
  name: string;
  url: string;
}

// ========== 友链设置 ==========
export interface Links {
  features: LinksFeatures;
  ownerInfo: LinksOwnerInfo;
  req: LinksReq;
  dcl: LinksDcl;
}

export interface LinksFeatures {
  enable_comment: boolean;
  enable_apply_btn: boolean;
  enable_random_visit: boolean;
  random_visit_groups: string;
}

export interface LinksOwnerInfo {
  enable_owner_info: boolean;
  expand_owner_info: boolean;
  owner_avatar: string;
  owner_name: string;
  owner_description: string;
  owner_url: string;
  owner_rss: string;
}

export interface LinksReq {
  enable_requirements: boolean;
  requirements: string;
}

export interface LinksDcl {
  enable_disclaimer: boolean;
  disclaimer: string;
}

// ========== 外链跳转 ==========
export interface ExternalLink {
  redirectConfig?: {
    enable_redirect?: boolean;
    redirect_delay?: number;
    avatar?: string;
  };
  open_new_window?: boolean;
  whitelist?: string;
}

// ========== 开发设置 ==========
export interface Development {
  enabled: boolean;
}

// ========== 旧版兼容别名（模板中可能仍使用旧路径） ==========
/** @deprecated 使用 Post.toc 替代 */
export type TOC = Toc;
/** @deprecated 使用 Post.license 替代 */
export type PostLicense = License;

export type LIGHT_DARK_MODE =
  | typeof LIGHT_MODE
  | typeof DARK_MODE
  | typeof AUTO_MODE;
