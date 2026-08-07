# -*- coding: utf-8 -*-
import os
import glob

replacements = {
    'hero-cruise.jpg': 'urban-skyline-modern-buildings.jpg',
    'hero-aviation.jpg': 'Aviation Courses After 12th (2026 Guide) ‚úàÔ∏è Careers, Fees & Opportunities in Kannur.jpg',
    'hero-hospitality.jpg': 'A big thanks to all and know that I\'m proud to work with you!!!ÌæÇÌ∏äÌæâ #fourseasons #hotel #hongkong #caprice #restaurant #kitchen #thankyou #somuch #amazing #birthdaycake #yummy #proud #best #pastry #team #hk #merc.jpg',
    'logo.png': 'testing-logo.png'
}

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js', '.css', '.html')):
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception as e:
                continue

            new_content = content
            for old, new in replacements.items():
                new_content = new_content.replace(old, new)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {path}")
