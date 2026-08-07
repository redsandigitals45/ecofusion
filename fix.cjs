const fs = require('fs');
const path = require('path');

let aviation = null;
const dir = 'public/assets/img';
for (let file of fs.readdirSync(dir)) {
  if (file.includes('Aviation Courses')) aviation = file;
}
if (aviation) {
  try {
     fs.renameSync(`public/assets/img/${aviation}`, 'public/assets/img/aviation-courses.jpg');
     console.log('Renamed aviation');
  } catch (e) {}
}

const file = 'src/pages/Home.jsx';
let content = fs.readFileSync(file, 'utf8');

// The file might now have partial original paths, let's just forcefully replace the weird ones
content = content.replace(/['"]\/assets\/img\/A big thanks[^'"]+['"]/g, "'/assets/img/hospitality-team.jpg'");
content = content.replace(/['"]\/assets\/img\/Aviation Courses[^'"]+['"]/g, "'/assets/img/aviation-courses.jpg'");

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Home.jsx');
