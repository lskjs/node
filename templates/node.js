const apk = ({ version } = {}) =>
  version.includes('alpine')
    ? 'apk add --no-cache'
    : 'apt-get install --no-install-recommends -y';

module.exports = ({ version }) =>
  `
FROM node:${version}

RUN \\
    ${apk({ version })} curl && \\
    npm i -g pnpm@7 && \\
    pnpm config set store-dir .pnpm-store
`.trimStart();
