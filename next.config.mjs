import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
      API_DOMAIN: "https://theme.168dev.com",
      SITE_NAME: "DollarsWinTips"
    },
};

export default withNextIntl(nextConfig);
