const fs = require('fs');

const planeSVG18 = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-2.2 3.3c-.2.3 0 .7.3.9l5.5 2.5-3.2 3.2-2.8-.9c-.3-.1-.7 0-.9.2l-1.6 1.6c-.3.3-.3.7 0 .9l4 2 2 4c.2.3.6.3.9 0l1.6-1.6c.2-.2.3-.6.2-.9l-.9-2.8 3.2-3.2 2.5 5.5c.2.3.6.5.9.3l3.3-2.2c.3-.2.5-.6.5-1.1z"/></svg>'

const shipSVG18 = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.4 13.9 22 17H2l2.6-3.1"/><path d="M14.9 13.9 14 8c-.2-1.5-1.5-2.7-3.1-2.7h-2.1c-.8 0-1.6.4-2.1 1.1L3.9 13.9"/><path d="M8 8V5a3 3 0 1 1 6 0v3"/></svg>'

const planeSVG28 = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-2.2 3.3c-.2.3 0 .7.3.9l5.5 2.5-3.2 3.2-2.8-.9c-.3-.1-.7 0-.9.2l-1.6 1.6c-.3.3-.3.7 0 .9l4 2 2 4c.2.3.6.3.9 0l1.6-1.6c.2-.2.3-.6.2-.9l-.9-2.8 3.2-3.2 2.5 5.5c.2.3.6.5.9.3l3.3-2.2c.3-.2.5-.6.5-1.1z"/></svg>'

const shipSVG28 = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.4 13.9 22 17H2l2.6-3.1"/><path d="M14.9 13.9 14 8c-.2-1.5-1.5-2.7-3.1-2.7h-2.1c-.8 0-1.6.4-2.1 1.1L3.9 13.9"/><path d="M8 8V5a3 3 0 1 1 6 0v3"/></svg>'

const planeSVG1em = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-2.2 3.3c-.2.3 0 .7.3.9l5.5 2.5-3.2 3.2-2.8-.9c-.3-.1-.7 0-.9.2l-1.6 1.6c-.3.3-.3.7 0 .9l4 2 2 4c.2.3.6.3.9 0l1.6-1.6c.2-.2.3-.6.2-.9l-.9-2.8 3.2-3.2 2.5 5.5c.2.3.6.5.9.3l3.3-2.2c.3-.2.5-.6.5-1.1z"/></svg>'

const shipSVG1em = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.4 13.9 22 17H2l2.6-3.1"/><path d="M14.9 13.9 14 8c-.2-1.5-1.5-2.7-3.1-2.7h-2.1c-.8 0-1.6.4-2.1 1.1L3.9 13.9"/><path d="M8 8V5a3 3 0 1 1 6 0v3"/></svg>'

const wrongPlaneRegex = /<svg\s[^>]*><path\s+d="M2\s+16l20-8-8\s+20-3-9-9-3Z"\s*\/?><\/svg>/g;
const wrongShipRegex = /<svg\s[^>]*><path\s+d="M22\s+10v6M2\s+10l10-5\s+10\s+5-10\s+5-10-5Z"\s*\/><path\s+d="M6\s+12v5c0\s+1\.7\s+2\.7\s+3\s+6\s+3s6-1\.3\s+6-3v-5"\s*\/?><\/svg>/g;

let careers = fs.readFileSync("src/pages/Careers.jsx", 'utf8');
careers = careers.replace(wrongPlaneRegex, planeSVG18);
careers = careers.replace(wrongShipRegex, shipSVG18);
fs.writeFileSync("src/pages/Careers.jsx", careers);

let reviews = fs.readFileSync("src/pages/Reviews.jsx", 'utf8');
reviews = reviews.replace(wrongPlaneRegex, (match) => {
    if (match.includes("28")) return planeSVG28;
    return planeSVG1em;
});
reviews = reviews.replace(wrongShipRegex, (match) => {
    if (match.includes("28")) return shipSVG28;
    return shipSVG1em;
});

// Also fix background image in Reviews
reviews = reviews.replace("url(/assets/img/urban-skyline-modern-buildings.jpg)", "url(/assets/img/herosection/night-cruise.jpg)");

fs.writeFileSync("src/pages/Reviews.jsx", reviews);

console.log("Replacement successful.");
