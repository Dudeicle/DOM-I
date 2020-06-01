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
    "h1": "DOM Is Awesome",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])


// BELOW HERE IS THE "nav"


let servicesLink = document.getElementsByTagName('a')[0]
servicesLink.textContent = siteContent.nav["nav-item-1"]
console.log(servicesLink);
let productLink = document.getElementsByTagName('a')[1]
productLink.textContent = siteContent.nav["nav-item-2"]
console.log(productLink);
let visionLink = document.getElementsByTagName('a')[2]
visionLink.textContent = siteContent.nav["nav-item-3"]
console.log(visionLink);
let featuresLink = document.getElementsByTagName('a')[3]
featuresLink.textContent = siteContent.nav["nav-item-4"]
console.log(featuresLink);
let aboutLink = document.getElementsByTagName('a')[4]
aboutLink.textContent = siteContent.nav["nav-item-5"]
console.log(aboutLink);
let contactLink = document.getElementsByTagName('a')[5]
contactLink.textContent = siteContent.nav["nav-item-6"]
console.log(contactLink);

const allAs = document.querySelectorAll('a')
allAs.forEach(header => {
  header.style.color = 'green'
})

let logoImg = document.querySelector('#logo-img')
console.log(logoImg)
logoImg.src = siteContent.nav["img-src"]


// BELOW HERE IS THE "cta"


let ctaH1 = document.querySelector('h1')
console.log(ctaH1);
ctaH1.innerHTML = `DOM <br/> IS <br/> AWESOME` 

let ctaButton = document.querySelector('button')
console.log(ctaButton);
ctaButton.textContent = siteContent.cta["button"]

let ctaImg = document.querySelector('#cta-img')
console.log(ctaImg);
ctaImg.src = siteContent.cta["img-src"]


// BELOW HERE IS THE "main content"


let featuresH4 = document.getElementsByTagName('h4')[0]
console.log(featuresH4);
featuresH4.textContent = siteContent["main-content"]["features-h4"]
let featureP = document.getElementsByTagName('p')[0]
console.log(featureP);
featureP.textContent = siteContent["main-content"]["features-content"]

let aboutH4 = document.getElementsByTagName('h4')[1]
console.log(aboutH4);
aboutH4.textContent = siteContent["main-content"]["about-h4"]
let aboutP = document.getElementsByTagName('p')[1]
console.log(aboutP);
aboutP.textContent = siteContent["main-content"]["about-content"]


let mainImg = document.querySelector('#middle-img')
console.log(mainImg);
mainImg.src = siteContent["main-content"]["middle-img-src"]


let servicesH4 = document.getElementsByTagName('h4')[2]
console.log(servicesH4);
servicesH4.textContent = siteContent["main-content"]["services-h4"]
let servicesP = document.getElementsByTagName('p')[2]
console.log(servicesP);
servicesP.textContent = siteContent["main-content"]["services-content"]

let productH4 = document.getElementsByTagName('h4')[3]
console.log(productH4);
productH4.textContent = siteContent["main-content"]["product-h4"]
let productP = document.getElementsByTagName('p')[3]
console.log(productP);
productP.textContent = siteContent["main-content"]["product-content"]

let visionH4 = document.getElementsByTagName('h4')[4]
console.log(visionH4);
visionH4.textContent = siteContent["main-content"]["vision-h4"]
let visionP = document.getElementsByTagName('p')[4]
console.log(visionP);
visionP.textContent = siteContent["main-content"]["vision-content"]


// BELOW HERE IS THE "contact"


let contactH4 =  document.getElementsByTagName('h4')[5]
console.log(contactH4);
contactH4.textContent = siteContent.contact["contact-h4"]
let contactAddress = document.getElementsByTagName('p')[5]
console.log(contactAddress);
contactAddress.innerHTML = `123 Way 456 Street <br/> Somewhere, USA`
let contactPhone =  document.getElementsByTagName('p')[6]
console.log(contactPhone);
contactPhone.textContent =  siteContent.contact["phone"]
let contactEmail = document.getElementsByTagName('p')[7]
console.log(contactEmail);
contactEmail.textContent = siteContent.contact["email"]


// BELOW HERE IS THE "footer"


let footerP = document.getElementsByTagName('p')[8]
console.log(footerP);
footerP.textContent = siteContent.footer["copyright"]


// BELOW HERE IS "add content to the Nav"


const newNavItem = document.querySelector('nav')

const newFirst = document.createElement('a')
newFirst.textContent = "New First"

const newSecond = document.createElement('a')
newSecond.textContent = "New Second"


newNavItem.appendChild(newFirst)
newNavItem.prepend(newSecond)