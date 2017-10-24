module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'require-jsdoc': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  env: {
    browser: true,
    node: true
  }
};
