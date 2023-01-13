// const config = require('./config.js');
const { buildDir } = require('./config');
const fs = require('fs');
// const { execSync } = require('child_process');

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
  const execSync = (a) => console.log(a);
  execSync(`docker build -t ${imageName} ${buildDir}/${dirname}`);
  execSync(`docker push ${imageName}`);
});
