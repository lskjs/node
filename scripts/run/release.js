#!/usr/bin/env node
const { run } = require('@lskjs/cli-utils');
const { execSync } = require('child_process');
const { mapSeries } = require('fishbird');
const { buildDir } = require('../../config');
const fs = require('fs');

async function main({ args }) {
  const isRelease = args.includes('--release');
  const cmds = fs
    .readdirSync(buildDir)
    .map((dirname) => {
      const chunks = dirname.split('_');
      let group;
      let name;
      let version;
      if (chunks.length === 3) {
        [group, name, version] = chunks;
      } else if (chunks.length === 2) {
        [name, version] = chunks;
      } else {
        // throw new Error('Invalid dirname');
      }
      const imageName = group ? `${group}/${name}:${version}` : `${name}:${version}`;
      return [`docker build -t ${imageName} ${buildDir}/${dirname}`, `docker push ${imageName}`];
    })
    .flat();

  if (isRelease) {
    await mapSeries(cmds, (cmd) => execSync(cmd));
  } else {
    cmds.push('echo FINISH');
    fs.writeFileSync('./dockerfiles/release.sh', cmds.join(' && \\\n'));
  }
}

module.exports = run(main);
