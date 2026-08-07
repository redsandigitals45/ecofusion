const fs = require('fs');
const glob = require('glob');
const path = require('path');

const replacements = {
    'hero-cruise.jpg': 'urban-skyline-modern-buildings.jpg',
    'hero-aviation.jpg': 'Aviation Courses After 12th (2026 Guide) ‚úàÔ∏è Careers, Fees & Opportunities in Kannur.jpg',
    'hero-hospitality.jpg': 'A big thanks to all and know that I\\\'m proud to work with you!!!ÌæÇÌ∏äÌæâ #fourseasons #hotel #hongkong #caprice #restaurant #kitchen #thankyou #somuch #amazing #birthdaycake #yummy #proud #best #pastry #team #hk #merc.jpg',
    'logo.png': 'testing-logo.png'
};

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content;
            for (const [oldName, newName] of Object.entries(replacements)) {
                newContent = newContent.split(oldName).join(newName);
            }
            if (newContent !== content) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir('src');
