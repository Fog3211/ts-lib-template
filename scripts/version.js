const prompts = require('prompts');
const semver = require('semver');
const fs = require('fs');
const path = require('path');

const SEMVER_INCREMENTS = [
  'patch',
  'minor',
  'major',
  'prepatch',
  'preminor',
  'premajor',
  'prerelease',
];

const packagePath = path.resolve(__dirname, '../package.json');

const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

const init = async () => {
  const result = await prompts([
    {
      type: 'select',
      name: 'version',
      message: 'Select semver increment version',
      choices: SEMVER_INCREMENTS.map((inc) => {
        const newVersion = semver.inc(pkg.version, inc);
        return {
          title: `${inc} 	${newVersion}`,
          value: newVersion,
        };
      }),
    },
  ]);

  pkg.version = result.version;

  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
};

init().catch((e) => {
  console.error(e);
});
