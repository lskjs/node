module.exports = () =>
  `
FROM docker:dind

RUN apk add --update bash gettext

CMD ["bash"]
`.trimStart();
