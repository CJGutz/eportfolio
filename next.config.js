const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */
module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withVideos];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...defaultConfig,
    ...nextConfig,
  });
};
