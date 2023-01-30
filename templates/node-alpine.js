module.exports = ({ from }) =>
  `
FROM ${from}

RUN \\
    apk add --no-cache which curl && \\
    npm i -g pnpm@7 && \\
    pnpm config set store-dir .pnpm-store
`.trimStart();
