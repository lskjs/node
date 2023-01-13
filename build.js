const { images, buildDir } = require('./config');
const fs = require('fs');
const { execSync } = require('child_process');

execSync(`rm -rf ${buildDir}`);

images.forEach(({ name, versions, template }) => {
  versions.forEach((version) => {
    const dockerfile = template({ version });
    const dirname = `${buildDir}/${name.replace('/', '_')}_${version}`;
    execSync(`mkdir -p ${dirname}`);
    fs.writeFileSync(`${dirname}/Dockerfile`, dockerfile);
  });
});
