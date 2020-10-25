const config = {
  env: {
    development: {
      presets: [
        [
          'next/babel',
          {
            'styled-jsx': { vendorPrefixes: false },
            'preset-env': { targets: 'last 1 Chrome version' },
          },
        ],
      ],
      plugins: [
        ['babel-plugin-styled-components', { displayName: true, fileName: true }],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-transform-react-jsx', { pragmaFrag: 'React.Fragment' }],
      ],
    },
    production: {
      presets: [
        [
          'next/babel',
          {
            'styled-jsx': { vendorPrefixes: false },
            'preset-env': { targets: '> 0.5%, Chrome 38' },
          },
        ],
      ],
      plugins: [
        ['babel-plugin-styled-components', { displayName: false, fileName: false }],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-transform-react-jsx', { pragmaFrag: 'React.Fragment' }],
      ],
    },
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: '12', chrome: '74' } }],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        'dynamic-import-node',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
      ],
    },
  },
}

module.exports = config
