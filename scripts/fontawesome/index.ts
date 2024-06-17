import fs from 'fs/promises'

const filename = 'duotone';

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/g, (match) => match.replace(/-/, '').toUpperCase());
}

async function process(filename) {
  const faSolid = JSON.parse(
    await fs.readFile(
      new URL('./solid.json', import.meta.url), 'utf-8')
  );
  let content = `import type { IconDefinition } from "../type"\n\n`
                + `const PREFIX = 'fas'\n\n`;
  for (const iconName in faSolid) {
    if (Object.hasOwnProperty.call(faSolid, iconName)) {
      const camelCaseName = toPascalCase(iconName);
      const iconValue = faSolid[iconName];
      content += `export const fas${camelCaseName}: IconDefinition = {\n`;
      content += `  prefix: PREFIX,\n`;
      content += `  iconName: '${iconName}',\n`;
      content += `  icon: ${JSON.stringify(iconValue)}\n`;
      content += `}\n\n`;
    }
  }
  return content;
}

const result = await process(filename);
const dest = new URL(`../../src/components/block/fontawesome/svgs/${filename}.ts`, import.meta.url);

fs.writeFile(dest, result, 'utf8')
  .then(() => {
    console.info('fontawesome source data transferred successfully ~')
  })
  .catch(err => {
    console.info('fontawesome source data transferred failed ~')
    console.error(err);
  });
