// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
    }
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
    });
});


// ================= CART =================

let cartCount = 0;

const cartNumber = document.querySelector(".cart-btn span");
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartNumber.textContent = cartCount;

        // Button animation
        button.style.transform = "scale(1.2)";

        setTimeout(() => {
            button.style.transform = "";
        }, 200);

    });

});


// ================= CART BUTTON =================

const cartBtn = document.querySelector(".cart-btn");

cartBtn.addEventListener("click", () => {

    if (cartCount === 0) {
        alert("Your cart is empty 🥛");
    } else {
        alert(
            `You have ${cartCount} ${cartCount === 1 ? "item" : "items"} in your cart 🛒`
        );
    }

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".product-card, .feature-card, .about-content, .about-image"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// ================= BUTTON HOVER EFFECT =================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .add-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transition = "0.3s ease";
    });

});


// ================= PAGE LOAD =================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});