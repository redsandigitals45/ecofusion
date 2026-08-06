const fs = require('fs');
const file = 'e:/redsan/ecofusion/src/assets/css/style.css';
let css = fs.readFileSync(file, 'utf8');

css = css.replace(/.journey-card-modern:hover \{[^}]+\}/g, `.journey-card-modern:hover {
    border-color: var(--maroon, #5c0f38) !important;
    box-shadow: 0 16px 40px rgba(92, 15, 56, 0.1);
    transform: translateY(-4px);
}`);

css = css.replace(/.journey-card-modern:hover \.j-icon-box \{[^}]+\}/g, `.journey-card-modern:hover .j-icon-box {
    background: var(--maroon, #5c0f38);
    color: #fff;
    transform: rotate(-10deg) scale(1.05);
    box-shadow: -4px 12px 24px rgba(92, 15, 56, 0.3);
}`);

// Add stroke change for SVG icon inside SVG
if (!css.includes('.journey-card-modern:hover .j-icon-box svg')) {
    css += `\n.journey-card-modern:hover .j-icon-box svg { stroke: #fff !important; fill: none; }`;
}

css = css.replace(/.journey-card-modern::after \{[^}]+\}/g, `.journey-card-modern::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--maroon, #5c0f38);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 10;
}`);

fs.writeFileSync(file, css);
