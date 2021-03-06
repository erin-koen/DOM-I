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

// let navLinks = document.querySelectorAll('nav a');

let navLinks2 = document.getElementsByTagName('a');
console.log(navLinks2);



//Adding content from the siteContent object

for (let i = 0; i<navLinks2.length; i++){
  navLinks2[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

// navLinks[0].textContent = siteContent.nav["nav-item-1"];
// navLinks[1].textContent = siteContent.nav["nav-item-2"];
// navLinks[2].textContent = siteContent.nav["nav-item-3"];
// navLinks[3].textContent = siteContent.nav["nav-item-4"];
// navLinks[4].textContent = siteContent.nav["nav-item-5"];
// navLinks[5].textContent = siteContent.nav["nav-item-6"];

// console.log(navLinks);


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

const contactAddress = document.querySelectorAll('.contact p');
contactAddress[0].textContent = siteContent['contact']['address'];
contactAddress[1].textContent = siteContent['contact']['phone'];
contactAddress[2].textContent = siteContent['contact']['email'];

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];

// Link Launcher

navLinks = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
navLinks.prepend(createNewNode("Not Spam"));
navLinks.append(createNewNode("Not Spam Either"));

// -- Change the nav link menu to an array for access to forEach
const colorChange = Array.from(navLinks2);

colorChange.forEach(element =>{
  element.style.color = "green";
})
