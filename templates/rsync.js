module.exports = ({ version }) =>
  `
FROM alpine:${version}

RUN apk add --no-cache \\
  openssh-client \\
  rsync \\
  ca-certificates \\
  bash

`.trimStart();
