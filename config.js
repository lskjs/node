module.exports = {
  buildDir: 'dockerfiles',
  images: [
    {
      name: 'lskjs/dind',
      template: require('./templates/dind'),
      props: [{ version: 'latest' }],
    },
    {
      name: 'lskjs/rsync',
      template: require('./templates/rsync'),
      props: [{ version: '3.16.0' }, { version: 'latest' }],
    },
    {
      name: 'lskjs/node',
      template: require('./templates/node'),
      props: [
        // '15.8.0',
        // '17.4.0',
        { version: '18.10.0' },
        { version: '18.10.0-alpine' },
        { version: '19.3.0' },
        { version: '19.3.0-alpine' },
        { version: '19.5.0' },
        { version: '19.5.0-alpine' },
        { version: 'latest' },
        // 'latest-alpine',
      ],
    },
    {
      name: 'lskjs/node',
      template: require('./templates/puppeteer-node'),
      props: [
        {
          version: '18.10.0-puppeteer',
          from: `lskjs/node:18.10.0`,
        },
        {
          version: '19.3.0-puppeteer',
          from: `lskjs/node:19.3.0`,
        },
        {
          version: '19.5.0-puppeteer',
          from: `lskjs/node:19.5.0`,
        },
      ],
    },
    // {
    //   name: 'lskjs/puppeteer-nodejs',
    //   template: require('./templates/puppeteer-node'),
    //   props: [
    //     // '15.8.0', '17.4.0',
    //     { version: '18.10.0' },
    //     { version: '19.5.0' },
    //     { version: 'latest' },
    //   ],
    // },
    // {
    //   name: 'lskjs/puppeteer-node',
    //   template: require('./templates/puppeteer-node'),
    //   props: [
    //     // '15.8.0', '17.4.0',
    //     { version: '18.10.0' },
    //     { version: '19.3.0' },
    //     { version: '19.5.0' },
    //     { version: 'latest' },
    //   ],
    // },
  ],
};
