import createMDX from '@next/mdx';
const withMDX = createMDX({});
export default withMDX({
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  trailingSlash: true,
  experimental: { globalNotFound: true },
  poweredByHeader: false,
});
