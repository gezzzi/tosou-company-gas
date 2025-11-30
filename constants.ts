import { NavLink, ServiceItem, WorkExample } from './types';

export const COMPANY_NAME = "株式会社 匠塗装";
export const CATCHPHRASE = "時を超えて、住まいを守る。";

export const NAV_LINKS: NavLink[] = [
  { label: "ホーム", href: "#home" },
  { label: "私たちの想い", href: "#about" },
  { label: "サービス内容", href: "#services" },
  { label: "施工事例", href: "#works" },
  { label: "お問い合わせ", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'exterior',
    title: '外壁塗装',
    description: '美観だけでなく、建物を雨風や紫外線から守るための高品質な外壁塗装を提供します。シリコン、フッ素、無機塗料など、建物の状態に合わせた最適なプランをご提案します。',
    image: 'https://picsum.photos/id/122/800/600',
  },
  {
    id: 'roof',
    title: '屋根塗装・補修',
    description: '普段目に見えない屋根こそ、定期的なメンテナンスが必要です。遮熱塗料による省エネ効果や、雨漏りを未然に防ぐための補修工事を行います。',
    image: 'https://picsum.photos/id/164/800/600',
  },
  {
    id: 'waterproof',
    title: '防水工事',
    description: 'ベランダやバルコニー、屋上の防水層を改修します。ウレタン防水やFRP防水など、施工箇所に適した工法で水の侵入を完全にシャットアウトします。',
    image: 'https://picsum.photos/id/195/800/600',
  },
];

export const WORKS: WorkExample[] = [
  {
    id: 'w1',
    title: 'S様邸 外壁塗装工事',
    category: '外壁塗装',
    image: 'https://picsum.photos/id/20/600/400',
    description: '築15年の戸建て住宅。シックなネイビーに塗り替え、耐久性を高めました。',
  },
  {
    id: 'w2',
    title: 'K様邸 屋根葺き替え',
    category: '屋根工事',
    image: 'https://picsum.photos/id/28/600/400',
    description: '劣化したスレート屋根を軽量な金属屋根に葺き替え、耐震性も向上。',
  },
  {
    id: 'w3',
    title: 'Mマンション 防水工事',
    category: '防水工事',
    image: 'https://picsum.photos/id/56/600/400',
    description: '屋上のウレタン防水工事を実施。10年保証付きの安心施工です。',
  },
];