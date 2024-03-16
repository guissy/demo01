export default {
  enableClientSidePolyfills: true,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-antd-fixes': {
      prefixes: ['MuiButton-', 'ant-'],
    },
  },
}
