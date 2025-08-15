import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
    eactStrictMode: false,
    devIndicators: false,

     env: {
      API_DOMAIN: "https://theme.168dev.com",
      BACKEND_IMAGE_BASE_URL:"https://theme.168dev.com/wp-content",
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


export default withNextIntl(config);
