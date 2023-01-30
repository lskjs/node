// const config = require('./config.js');
const { buildDir } = require('./config');
const fs = require('fs');
const { execSync } = require('child_process');

const isRelease = process.argv.includes('--release');

fs.readdirSync(buildDir).forEach((dirname) => {
  const chunks = dirname.split('_');
  let group;
  let name;
  let version;
  if (chunks.length === 3) {
    [group, name, version] = chunks;
  } else if (chunks.length === 2) {
    [name, version] = chunks;
  } else {
    throw new Error('Invalid dirname');
  }
  const imageName = group
    ? `${group}/${name}:${version}`
    : `${name}:${version}`;

  const exec = (a) => {
    // eslint-disable-next-line no-console
    // console.log('>>>', a);
    console.log(a);
    if (isRelease) execSync(a);
  };
  exec(`docker build -t ${imageName} ${buildDir}/${dirname}`);
  exec(`docker push ${imageName}`);
});
