import createMDX from '@next/mdx';

const withMDX = createMDX({});
const isStaticExport = process.env.STATIC_EXPORT === 'true';

export default withMDX({
  output: isStaticExport ? 'export' : undefined,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  trailingSlash: true,
  experimental: { globalNotFound: true },
  poweredByHeader: false,
  ...(isStaticExport
    ? {}
    : {
        async redirects() {
          return [
            {
              source: '/projects',
              destination: '/experience',
              permanent: true,
            },
            {
              source: '/projects/:slug*',
              destination: '/experience/:slug*',
              permanent: true,
            },
            {
              source: '/en/projects',
              destination: '/en/experience',
              permanent: true,
            },
            {
              source: '/en/projects/:slug*',
              destination: '/en/experience/:slug*',
              permanent: true,
            },
          ];
        },
      }),
});
