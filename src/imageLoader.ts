// ローカル開発環境の判定
const isDevMode = process.env.NODE_ENV === "development";

// クライアントのドメイン
const clientDomain = process.env.NEXT_PUBLIC_CLIENT_DOMAIN ?? "";

// ドメインを整形
const shapeDomain = (domain: string): string => {
  const prefix = domain.startsWith("http") ? "" : "https://";
  const suffix = domain.endsWith("/") ? domain.slice(0, -1) : domain;
  return `${prefix}${suffix}`;
};

// 相対URLを絶対URLに変換
const convertToAbsoluteUrl = (src: string): string => {
  const isAbsoluteUrl = src.startsWith("http");
  return isAbsoluteUrl ? src : `${shapeDomain(clientDomain)}${src}`;
};

// 画像のローダー関数（Next.js Image用）
const toolpodsLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string => {
  return isDevMode
    ? src
    : `https://cdn.toolpods.io/?url=${encodeURIComponent(
        convertToAbsoluteUrl(src)
      )}&w=${width}&q=${quality ?? 75}`;
};

export default toolpodsLoader;