const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src'])

// Pushing content from the siteContent object to the HTML



const newNav = document.createElement('a');
const newNavTxt = document.createTextNode('Free Money Click Here');
newNav.appendChild(newNavTxt);
document.querySelector('nav').appendChild(newNav);

const spam = document.createElement('a');
const spamTxt = document.createTextNode('Not Spam');
spam.appendChild(spamTxt);
document.querySelector('nav').prepend(spam);
console.log(spam);

// Creating an array of the nav links and iterating through it to change font color to green
const navLinks = Array.from(document.getElementsByTagName('a'));
navLinks.forEach(element => {
  element.style.color ='green';
});

navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];



// Selecting the CTA img and assigning it some value from the siteContent object
const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'] )

//Selecting the CTA h1 and assigning it content from siteContent using innerHTML to account for the <br> i added. 
const ctaH1 = document.querySelector('.cta h1');
ctaH1.innerHTML = siteContent.cta['h1'];
console.log(ctaH1);

//Selecting the first button in the HTML and assigning it some text. Makes me wonder about specificity syntax - can I copy CSS specificity? i.e. '.cta button' ? Answer - yes, tried it out below.
const getStartedBtn = document.querySelector('button');
getStartedBtn.textContent = getStartedBtn.textContent = siteContent.cta["button"];

//Selecting main content h4s and pushing out content from siteContent object
const mainH4 = document.querySelectorAll('.main-content h4');
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainH4[1].textContent = siteContent['main-content']['about-h4'];
mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainH4[4].textContent = siteContent['main-content']['vision-h4'];


//selecting middle image and pushing content from the siteContent object
const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//selecting p content and pushing content from siteContent object
const mainP = document.querySelectorAll('.main-content p');
mainP[0].textContent = siteContent['main-content']['features-content'];
mainP[1].textContent = siteContent['main-content']['about-content'];
mainP[2].textContent = siteContent['main-content']['services-content'];
mainP[3].textContent = siteContent['main-content']['product-content'];
mainP[4].textContent = siteContent['main-content']['vision-content'];

//selecting contact elements and pushing content from siteContent object
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelectorAll('.contact p');
contactAddress[0].textContent = siteContent['contact']['address'];
contactAddress[1].textContent = siteContent['contact']['phone'];
contactAddress[2].textContent = siteContent['contact']['email'];

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];