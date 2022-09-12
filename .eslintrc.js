module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  plugins: ['module-resolver'],
  parserOptions: {
    project: './jsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'module-resolver/use-alias': 2,
  },
};
