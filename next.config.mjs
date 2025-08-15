import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    devIndicators: false,

    env: {
      API_DOMAIN: "https://theme.168dev.com",
      SITE_NAME: "DollarsWinTips"
    },
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: "attachment",
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      minimumCacheTTL: 60,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
      formats: ["image/webp"],
   
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };


export default withNextIntl(nextConfig);
