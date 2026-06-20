/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fonts.gstatic.com","myypelzqjunsrpytkiee.supabase.co","nankousai-3d-map.vercel.app"],
     // ここでフォント取得を許可
  },
  async headers() {
  return [
    {
      source: "/fonts/(.*)", //  正しいワイルドカード表記
      headers: [
        { key: "Access-Control-Allow-Origin", value: "*" },
      ],
    },
    
  ];
},


};

export default nextConfig;