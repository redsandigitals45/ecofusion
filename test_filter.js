const jobs = [
    { id: 1, badge: 'AE', title: 'Cabin Crew — Emirates', category: 'Aviation', salary: 'AED 8,500/mo - Tax-Free', location: 'UAE', type: 'Full-Time', exp: 'Exp: 1+ yr', tags: ['Dubai', 'Airlines'] },
    { id: 2, badge: 'US', title: 'Cruise Ship Guest Associate', category: 'Cruise', salary: '$3,200/mo + Tips', location: 'USA', type: 'Contract', exp: 'Exp: 0-1 yr', tags: ['Miami', 'Royal Caribbean'] },
    { id: 3, badge: 'MY', title: 'Airport Security Officer', category: 'Security', salary: 'MYR 4,800/mo', location: 'Malaysia', type: 'Full-Time', exp: 'Exp: 1-3 yr', tags: ['Kuala Lumpur', 'Terminal Security'] },
    { id: 4, badge: 'EG', title: 'Marine Deck Cadet', category: 'Merchant Navy', salary: 'EGP 24,000/mo', location: 'Egypt', type: 'Contract', exp: 'Exp: Entry Level', tags: ['Suez Canal', 'Cargo Fleets'] },
    { id: 5, badge: 'SG', title: 'Marine Deck Officer', category: 'Merchant Navy', salary: 'SGD 5,500/mo', location: 'Singapore', type: 'Contract', exp: 'Exp: 2+ yr', tags: ['Singapore', 'Container Fleet'] },
    { id: 6, badge: 'AE', title: 'VIP Close Protection Officer', category: 'Security', salary: 'AED 12,000/mo', location: 'UAE', type: 'Full-Time', exp: 'Exp: 3+ yr', tags: ['Dubai', 'Corporate Security'] }
];

let activeCategory = 'Cruise';
let activeLocation = 'All';

let res1 = jobs.filter(job => 
    (activeCategory === 'All' || job.category === activeCategory) && 
    (activeLocation === 'All' || job.location === activeLocation)
);
console.log("Cruise + All ->", res1.length);

activeCategory = 'All';
activeLocation = 'Singapore';
let res2 = jobs.filter(job => 
    (activeCategory === 'All' || job.category === activeCategory) && 
    (activeLocation === 'All' || job.location === activeLocation)
);
console.log("All + Singapore ->", res2.length);
