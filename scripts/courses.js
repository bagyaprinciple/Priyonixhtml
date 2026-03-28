(function () {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-icon-path');
    let isOpen = false;

    if (btn && menu) {
        btn.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                menu.classList.add('opacity-100', 'pointer-events-auto');
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                menu.classList.add('opacity-0', 'pointer-events-none');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                document.body.style.overflow = '';
            }
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                isOpen = false;
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                menu.classList.add('opacity-0', 'pointer-events-none');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                document.body.style.overflow = '';
            });
        });
    }
})();

// listing vars here so they're in the global scope
var cards, nCards, cover, openContent, openContentText, pageIsOpen = false,
    openContentImage, closeContent, windowWidth, windowHeight, currentCard;

let itCourses = [
    {
        title: 'Full Stack Development',
        image: './imgs/fullstack.jpg',
        eligibility: "Basic programming knowledge preferred",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Advanced HTML5, CSS3, JavaScript ES6+",
                    "Responsive UI Systems & Modern Layouts",
                    "API Consumption & Dynamic UI Rendering"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "React / Angular (Component Architecture)",
                    "Backend Development (Node.js / PHP - MVC Architecture)",
                    "Authentication Systems (JWT, Sessions)",
                    "RESTful API Development"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Scalable Application Architecture",
                    "Database Optimization (MySQL Advanced Queries)",
                    "Real-time Applications (Sockets)",
                    "Performance Optimization"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Microservices Architecture",
                    "DevOps Basics (CI/CD Pipelines)",
                    "Cloud Deployment (AWS / Hosting Platforms)",
                    "Capstone Industry Project"
                ]
            }
        ]
    },
    {
        title: 'Web Development',
        image: './imgs/webdevelopment.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Semantic HTML, Advanced CSS Animations",
                    "Responsive Design Systems",
                    "Cross - browser Compatibility"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "JavaScript DOM Mastery",
                    "UI Optimization Techniques",
                    "Bootstrap & Modern UI Frameworks"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Advanced Frontend Workflows",
                    "Performance Tuning",
                    "SEO Technical Implementation"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Enterprise Web Application Development",
                    "Hosting, Security & Scalability",
                    "Portfolio-grade Live Projects"
                ]
            }
        ]
    },
    {
        title: 'App Development',
        image: './imgs/app-development.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Mobile UI/UX Architecture",
                    "Native App Components",
                    "API Integration"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Android Development (Kotlin / Java – Advanced Concepts)",
                    "Firebase Integration",
                    "Push Notifications"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Scalable Mobile App Architecture",
                    "Performance Optimization",
                    "App Security"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Production-level App Deployment",
                    "Play Store Optimization",
                    "Real-time Industry App Project"
                ]
            }
        ]
    },
    {
        title: 'Machine Learning',
        image: './imgs/machinelearning.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Advanced Python for ML",
                    "Data Preprocessing Pipelines",
                    "Model Evaluation Techniques"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Supervised & Unsupervised Models",
                    "Feature Engineering",
                    "Model Optimization"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Ensemble Learning",
                    "Model Deployment",
                    "Real-world ML Pipelines"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "End-to-End ML Systems",
                    "AI Integration in Applications",
                    "Capstone Industry Project"
                ]
            }
        ]
    },
    {
        title: 'Artificial Intelligence (AI)',
        image: './imgs/ai.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Neural Network Architecture",
                    "Deep Learning Foundations"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "CNN, RNN Models",
                    "NLP Systems"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Computer Vision Systems",
                    "AI Model Optimization"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "AI Product Development",
                    "Deployment & Scaling AI Systems"
                ]
            }
        ]
    },
    {
        title: 'Cyber Security',
        image: './imgs/cyber.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Network Security Architecture",
                    "Threat Analysis"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Ethical Hacking Techniques",
                    "Vulnerability Assessment"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Penetration Testing",
                    "Security Automation"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Enterprise Security Systems",
                    "Incident Response & Risk Management"
                ]
            }
        ]
    },
    {
        title: 'Data Science',
        image: './imgs/dataanalysis.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Data Cleaning & Transformation",
                    "Exploratory Data Analysis"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Advanced Visualization (Power BI / Tableau)",
                    "Statistical Modeling"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Predictive Analytics",
                    "Big Data Handling"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "End-to-End Data Pipelines",
                    "Business Intelligence Systems"
                ]
            }
        ]
    },
    {
        title: 'UI/UX Design',
        image: './imgs/uiux.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Design Systems & UX Strategy",
                    "Figma – Advanced Prototyping & Components"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Interaction Design",
                    "User Journey Mapping"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Usability Testing & Optimization",
                    "Product Design Case Studies"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "End-to-End Product Design",
                    "Portfolio & Real Client Projects"
                ]
            }
        ]
    },
    {
        title: 'Graphic Design',
        image: './imgs/graphic.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Visual Design Systems",
                    "Branding Fundamentals"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Advanced Photoshop & Illustrator",
                    "Marketing Creatives"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Brand Identity Systems",
                    "Creative Campaign Design"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Complete Brand Development",
                    "Portfolio & Client Projects"
                ]
            }
        ]
    },
    {
        title: 'Digital Marketing',
        image: './imgs/digitalmarketing.jpg',
        eligibility: "",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "SEO Strategy & Keyword Planning",
                    "Social Media Campaigns"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Paid Ads (Google, Meta)",
                    "Funnel Optimization"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Performance Marketing",
                    "Analytics & Conversion Tracking"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Full Digital Growth Strategy",
                    "Live Campaign Management"
                ]
            }
        ]
    }
]
let nonItCourses = [
    {
        title: 'Banking & Finance',
        image: './imgs/financial.jpg',
        eligibility: "Commerce / Any Degree",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Advanced Banking Operations & Digital Banking Systems",
                    "Financial Instruments & Market Structure",
                    "Core Banking Software Exposure"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Credit Analysis & Loan Processing Systems",
                    "Risk Assessment Techniques",
                    "Investment Planning & Portfolio Basics"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Financial Risk Management",
                    "Regulatory Compliance (RBI Guidelines, Auditing)",
                    "Wealth Management Strategies"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Corporate Banking & Financial Systems",
                    "Financial Decision-Making Models",
                    "Real-time Case Studies & Industry Projects"
                ]
            }
        ]
    },
    {
        title: 'Financial Management',
        image: './imgs/webdevelopment.jpg',
        eligibility: "Commerce / Management background preferred",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Financial Planning & Budgeting Systems",
                    "Cost Control Techniques",
                    "Financial Statement Interpretation"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Capital Budgeting & Investment Decisions",
                    "Cash Flow Management",
                    "Financial Modeling (Excel-based)"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Corporate Finance Strategies",
                    "Risk & Return Analysis",
                    "Mergers & Acquisitions (Overview)"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Strategic Financial Management",
                    "Business Valuation Techniques",
                    "Real-world Financial Case Studies"
                ]
            }
        ]
    },
    {
        title: ' Logistics & Supply Chain Management',
        image: './imgs/logistics.jpg',
        eligibility: "Any Degree",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Supply Chain Network Design",
                    "Inventory Optimization Techniques",
                    "Logistics Planning Systems"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Warehouse Operations & Automation",
                    "Transportation Management Systems",
                    "Procurement Strategies"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Global Supply Chain Management",
                    "Demand Forecasting & Planning",
                    "ERP Systems (SAP Basics Exposure)"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "End-to-End Supply Chain Strategy",
                    "Operations Optimization",
                    "Industry Case Studies & Live Projects"
                ]
            }
        ]
    },
    {
        title: 'Oil, Power & Gas',
        image: './imgs/oil.jpg',
        eligibility: "Engineering / Science background preferred",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Energy Sector Structure & Operations",
                    "Oil & Gas Exploration Basics",
                    "Power Generation Systems"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Refining Processes & Distribution",
                    "Industrial Safety Standards",
                    "Environmental Compliance"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Energy Management Systems",
                    "Risk & Safety Analysis",
                    "Power Plant Operations"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Integrated Energy Sector Management",
                    "Industry Regulations & Policies",
                    "Real-time Industrial Case Studies"
                ]
            }
        ]
    },
    {
        title: 'Marketing & Sales',
        image: './imgs/marketing.jpg',
        eligibility: "Any Degree",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Marketing Strategy Development",
                    "Consumer Behavior Analysis",
                    "Branding Fundamentals"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Sales Funnel Optimization",
                    "CRM Tools & Customer Lifecycle Management",
                    "Negotiation Techniques"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Performance Marketing Strategies",
                    "Market Research & Competitive Analysis",
                    "Revenue Growth Models"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "End-to-End Marketing Strategy Execution",
                    "Business Growth & Scaling Techniques",
                    "Live Campaign Projects"
                ]
            }
        ]
    },
    {
        title: 'Business Analytics',
        image: './imgs/businessanalysis.jpeg',
        eligibility: "Analytical mindset preferred",
        progression: [
            {
                title: "3 Months - Advanced",
                highlights: [
                    "Advanced Excel & Data Handling",
                    "Data Visualization Techniques",
                    "Business Data Interpretation"
                ]
            },
            {
                title: "6 Months - More Advanced",
                highlights: [
                    "Power BI / Tableau Dashboards",
                    "KPI Tracking Systems",
                    "Reporting Automation"
                ]
            },
            {
                title: "8 Months - Expert",
                highlights: [
                    "Predictive Analytics",
                    "Data-driven Decision Models",
                    "Business Forecasting"
                ]
            },
            {
                title: "1 Year - Diploma (Mastery)",
                highlights: [
                    "Strategic Business Intelligence Systems",
                    "End-to-End Analytics Projects",
                    "Industry Case Studies"
                ]
            }
        ]
    },
]
let selected = 'it';

function createCard(courses) {
    let content = ``;
    content += `<li class="stack stack-1 ">
                    <ul class="cards-down">`;
    content += selected === 'it' ? createCardContent([courses[0], courses[1], courses[2], courses[3]]) : createCardContent([courses[0], courses[1]])
    content += `</ul></li>`;

    content += `<li class="stack stack-2 ">
                    <ul class="cards-down">`;
    content += selected === 'it' ? createCardContent([courses[4], courses[5], courses[6]]) : createCardContent([courses[2], courses[3]])
    content += `</ul></li>`;

    content += `<li class="stack stack-3 ">
                    <ul class="cards-down">`;
    content += selected === 'it' ? createCardContent([courses[7], courses[8], courses[9]]) : createCardContent([courses[4], courses[5]])
    content += `</ul></li>`;
    return content;
}

function createCardContent(courses) {
    let content = '';
    courses.forEach((course, i) => {
        content += ` <li class="card card-` + (i + 1) + `">
                            <div
                                class="glass-panel w-[400px] h-[500px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group flex flex-col justify-between shrink-0 hover:border-violet-500/50 transition-colors duration-300">

                                <div class="w-full h-[250px] bg-white/5">
                                    <img style='height:250px;width:100%' src="`+ course.image + `" />
                                </div>
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                </div>
                                <div class="relative z-10 flex flex-col h-full justify-between p-8 ">
                                    <div>
                                        <h2 class="text-2xl font-bold mb-3">`+ course.title + `</h2>
                                        <div class="flex flex-wrap gap-2">`;
        course.progression.forEach(p => {
            content += `<span
                                                class="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-300 border border-white/10">`+ p.title + `</span>`;
        });
        content += `</div>
                                    </div>
                                    <div class="magnetic-wrap self-start mt-6">
                                        <button data-magnetic
                                            class="explorebutton glow-button px-5 py-2 rounded-full text-xs font-bold transition-transform flex items-center gap-2 bg-white text-black">
                                            Konw More <span class="opacity-50">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>`
    })
    return content;
}

function selectOption(option) {
    var elmt = document.getElementById('card-stacks');
    elmt.classList.remove(selected);
    elmt.classList.add(option);
    if (option !== selected) {
        selected = option;
        if (elmt && elmt !== null) {
            if (selected === 'it') {
                elmt.style.height = '2100px';
            }
            else {
                elmt.style.height = '1050px'
            }
            document.getElementById('loader').style.display = 'none';
            setTimeout(() => {
                elmt.classList.remove('transition');
            }, 200);
        }
        setTimeout(() => {
            document.getElementById('card-stacks').innerHTML = '';
            document.getElementById('loader').style.display = 'block';
            courseContent();
        }, 500);
    }
}

function courseContent() {
    let content = '';
    var elmt = document.getElementsByClassName('card-stacks');
    if (elmt && elmt !== null) {
        if (selected === 'it') {
            content = createCard(itCourses);
        } else {
            content = createCard(nonItCourses);
        }
        document.getElementById('card-stacks').innerHTML = content;
        Array.from(elmt).forEach(e => {
            e.style.display = 'block';
            document.getElementById('loader').style.display = 'none';

            document.getElementById('radios').style.display = 'block';
            setTimeout(() => {
                e.classList.add('transition');
            }, 200);
        });
    }


    // initiate the process
    init();
}

setTimeout(() => {

    document.getElementById('radios').style.display = 'none';
    courseContent()
}, 1000);



function init() {
    resize();
    selectElements();
    attachListeners();
}

// select all the elements in the DOM that are going to be used
function selectElements() {
    cards = document.getElementsByClassName('card'),
        nCards = cards.length,
        cover = document.getElementById('cover'),
        openContent = document.getElementById('open-content'),
        openContentText = document.getElementById('open-content-text'),
        openContentImage = document.getElementById('open-content-image')
    closeContent = document.getElementById('close-content');
}

/* Attaching three event listeners here:
  - a click event listener for each card
  - a click event listener to the close button
  - a resize event listener on the window
*/
function attachListeners() {
    for (var i = 0; i < nCards; i++) {
        attachListenerToCard(i);
    }
    closeContent.addEventListener('click', onCloseClick);
    window.addEventListener('resize', resize);
}

function attachListenerToCard(i) {
    cards[i].addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('overflow-hidden');
        var card = getCardElement(e.target);
        onCardClick(card, i);
    })
}

/* When a card is clicked */
function onCardClick(card, i) {
    currentCard = card;
    currentCard.className += ' clicked';
    const course = selected === 'it' ? itCourses[i] : nonItCourses[i];

    let content = '<h1 class="text-4xl md:text-5xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">' + course.title + '</h1>';
    content += `<p class="mb-6 text-gray-400 text-sm tracking-widest uppercase font-bold border-b border-white/10 pb-4">Curriculum Progression</p>`;
    content += `<div class="space-y-4 flex-1">`;
    course.progression.forEach(p => {
        content += `
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors backdrop-blur-md">
                <h5 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span class="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-[10px] shadow-lg shadow-purple-500/20">&#10003;</span>
                    `+ p.title + `
                </h5>
                <ul class="space-y-3 ml-2 border-l-2 border-white/10 pl-6 text-gray-400 font-medium">
        `;
        p.highlights.forEach(h => {
            content += `<li class="relative leading-relaxed"><span class="absolute -left-[29px] top-2 w-2 h-2 rounded-full border-2 border-[#0f0f0f] bg-gray-500"></span>` + h + `</li>`;
        })
        content += `</ul></div>`;
    })
    content += `</div>`;
    
    if (course.eligibility !== '') {
        content += `<div class="mt-8 p-5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl flex items-start gap-4">
            <div class="p-2 bg-purple-500/20 rounded-lg shrink-0 text-xl">🎓</div>
            <div>
                <b class="block text-purple-300 mb-1 text-sm tracking-wider uppercase">Eligibility</b>
                <p class="text-gray-300 font-medium">` + course.eligibility + `</p>
            </div>
        </div>`;
    }

    openContentText.innerHTML = content;
    openContentImage.src = course.image;

    // Show modal directly
    openContent.classList.add('open');
    pageIsOpen = true;
}

/* When the close is clicked */
function onCloseClick(e) {
    if(e) e.preventDefault();
    document.body.classList.remove('overflow-hidden');
    openContent.classList.remove('open');
    if (currentCard) {
        currentCard.className = currentCard.className.replace(' clicked', '');
    }
    pageIsOpen = false;
}

// this function searches up the DOM tree until it reaches the card element that has been clicked
function getCardElement(el) {
    if (el.className.indexOf('card ') > -1) return el;
    else return getCardElement(el.parentElement);
}

// resize function - no longer needs to manipulate cover
function resize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
}