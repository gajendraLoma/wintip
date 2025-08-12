import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
     env: {
      API_DOMAIN: "https://theme.168dev.com",
      SITE_NAME: "DollarsWinTips"
    },
};

export default withNextIntl(config);
