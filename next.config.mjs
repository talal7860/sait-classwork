/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['components', 'app', 'contexts', 'hooks', 'pages', 'utils'], // Only run ESLint on the 'src' and 'app' directories during production builds (next build)
  },
};

export default nextConfig;
