module.exports = {
  buildDir: 'dockerfiles',
  images: [
    {
      name: 'lskjs/dind',
      template: require('./templates/dind'),
      versions: ['latest'],
    },
    {
      name: 'lskjs/rsync',
      template: require('./templates/rsync'),
      versions: ['3.16.0', 'latest'],
    },
    {
      name: 'lskjs/node',
      template: require('./templates/node'),
      versions: [
        // '15.8.0',
        // '17.4.0',
        '18.10.0',
        '18.10.0-alpine',
        '19.3.0',
        '19.3.0-alpine',
        'latest',
        // 'latest-alpine',
      ],
    },
    {
      name: 'lskjs/puppeteer-nodejs',
      template: require('./templates/puppeteer-nodejs'),
      versions: [
        // '15.8.0', '17.4.0',
        '18.10.0',
        '19.3.0',
        'latest',
      ],
    },
  ],
};
