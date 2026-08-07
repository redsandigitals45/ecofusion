const fs = require('fs');

const file = 'src/pages/Home.jsx';
let content = fs.readFileSync(file, 'utf8');

// Strip the garbled trails
content = content.replace(/['"]\/assets\/img\/hospitality-team\.jpg['"]m proud to work with you!!![^"']+['"]/g, "'/assets/img/hospitality-team.jpg'");

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Home.jsx');
