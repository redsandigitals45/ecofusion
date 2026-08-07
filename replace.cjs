const fs = require('fs');
const path = require('path');

const cssReplace = `
.visa-badge {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  background: #ecfdf5;
  color: #047857;
  border: 1px solid #a7f3d0;
  padding: 4px 10px;
  border-radius: 100px;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
`;

const hospitalityImage = "A big thanks to all and know that I'm proud to work with you!!!ÌæÇÌ∏äÌæâ #fourseasons #hotel #hongkong #caprice #restaurant #kitchen #thankyou #somuch #amazing #birthdaycake #yummy #proud #best #pastry #team #hk #merc.jpg";
const cruiseImage = "urban-skyline-modern-buildings.jpg";
const aviationImage = "Aviation Courses After 12th (2026 Guide) ‚úàÔ∏è Careers, Fees & Opportunities in Kannur.jpg";
const testingLogo = "testing-logo.png";

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content;
            
            // Reapply CSS change for visa-badge if it's style.css
            if (fullPath.endsWith('style.css')) {
                newContent = newContent.replace(/\.visa-badge\s*\{[\s\S]*?gap:\s*4px;\s*\}/, cssReplace.trim());
            }

            // Image replacements
            // Cruise
            newContent = newContent.split('/assets/img/hero-cruise.jpg').join(`/assets/img/${cruiseImage}`);
            
            // Aviation
            newContent = newContent.split('/assets/img/hero-aviation.jpg').join(`/assets/img/${aviationImage}`);
            
            // Logo
            newContent = newContent.split('/assets/img/logo.png').join(`/assets/img/${testingLogo}`);
            newContent = newContent.split('assets/img/logo.png').join(`assets/img/${testingLogo}`);

            // Hospitality (very careful about quotes in JS array vs JSX)
            // JSX double quotes: src="/assets/img/hero-hospitality.jpg"
            newContent = newContent.split('"/assets/img/hero-hospitality.jpg"').join(`"/assets/img/${hospitalityImage}"`);
            // JS single quotes array: '/assets/img/hero-hospitality.jpg'
            newContent = newContent.split("'/assets/img/hero-hospitality.jpg'").join(`"/assets/img/${hospitalityImage}"`); // Switch to using double quotes in JS array so ' doesn't break it

            if (newContent !== content) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir('src');
