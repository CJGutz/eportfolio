const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'no',
  },
};

/** @type {import('next').NextConfig} */
module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withVideos];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...defaultConfig,
    ...nextConfig,
  });
};
