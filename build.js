const { images, buildDir } = require('./config');
const fs = require('fs');
const { execSync } = require('child_process');

execSync(`rm -rf ${buildDir}`);

images.forEach(({ name, template, props: variants }) => {
  variants.forEach((props) => {
    const dockerfile = template(props);
    const dirname = `${buildDir}/${name.replace('/', '_')}_${props.version}`;
    execSync(`mkdir -p ${dirname}`);
    fs.writeFileSync(`${dirname}/Dockerfile`, dockerfile);
  });
});
