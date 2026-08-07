const fs = require('fs');
const dir = 'public/assets/img';
const files = fs.readdirSync(dir);

let hospitality = null;
let aviation = null;

for (let file of files) {
  if (file.includes('A big thanks')) hospitality = file;
  if (file.includes('Aviation Courses')) aviation = file;
}

if (hospitality) {
  try {
     fs.renameSync(`public/assets/img/${hospitality}`, 'public/assets/img/hospitality-team.jpg');
     console.log('Renamed hospitality');
  } catch (e) { console.error('could not rename hospitality', e); }
}

if (aviation) {
  try {
     fs.renameSync(`public/assets/img/${aviation}`, 'public/assets/img/aviation-courses.jpg');
     console.log('Renamed aviation');
  } catch (e) { console.error('could not rename aviation', e); }
}

// Now replace in source
const jsReplace = `
const fs = require('fs');
const glob = require('glob');
const path = require('path');
function processDir(d) {
    const fn = fs.readdirSync(d);
    for (const f of fn) {
        const fullPath = path.join(d, f);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content;
            if (hospitality) {
              newContent = newContent.split(hospitality).join('hospitality-team.jpg');
            }
            if (aviation) {
              newContent = newContent.split(aviation).join('aviation-courses.jpg');
            }
            if (newContent !== content) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated ' + fullPath);
            }
        }
    }
}
processDir('src');
`;
eval(jsReplace);
