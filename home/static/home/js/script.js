let menuicon = document.querySelector(".nav-menu-logo");
let categories = document.querySelector(".categories");
    menuicon.addEventListener('click', function () {
        categories.classList.toggle('active');
        menuicon.classList.toggle('active');
    });

$(window).resize(function () {
    if ($(window).width() > 1200) {
        if (categories.classList.contains('active')) {
            categories.classList.remove('active');
            menuicon.classList.remove('active');
        }
    }
});


let slideIndex = 1;
//tutoring
if (document.URL.includes("tutoring")) {

    var textarea = document.querySelector(".contact-us-textarea");
    textarea.addEventListener('input', function () {
        if (textarea === null || textarea.value.trim() === '') {
            textarea.classList.remove("active");
        } else {
            textarea.classList.add("active");
        }
    });

    window.addEventListener('scroll', function () {
        let codecornerContent = document.getElementsByClassName('tutoring-content-container');
        codecornerContent[0].classList.toggle('slide-in', isScrolledIntoView(codecornerContent[0], 50));
        codecornerContent[1].classList.toggle('slide-in', isScrolledIntoView(codecornerContent[1], 50));
    });
}

//technology
if (document.URL.includes("technology")) {
    var textarea = document.querySelector(".contact-us-textarea");
    textarea.addEventListener('input', function () {
        if (textarea === null || textarea.value.trim() === '') {
            textarea.classList.remove("active");
        } else {
            textarea.classList.add("active");
        }
    });

    window.addEventListener('scroll', function () {
        let technologyContent = document.getElementsByClassName('technology-content-container');
        technologyContent[0].classList.toggle('slide-in', isScrolledIntoView(technologyContent[0], 50));
        technologyContent[1].classList.toggle('slide-in', isScrolledIntoView(technologyContent[1], 50));
    });
}

//fundraising
if (document.URL.includes("fundraising")) {
    window.addEventListener('scroll', function () {
        let fundraisingContent = document.getElementsByClassName('fundraising-content-container');
        fundraisingContent[0].classList.toggle('slide-in', isScrolledIntoView(fundraisingContent[0], 50));
    });
}

//curriculum
if (document.URL.includes("curriculum")) {
    var textarea = document.querySelector(".contact-us-textarea");
    textarea.addEventListener('input', function () {
        if (textarea === null || textarea.value.trim() === '') {
            textarea.classList.remove("active");
        } else {
            textarea.classList.add("active");
        }
    });

    //java curriculum
    let windowWidth = window.innerWidth;
    let curriculumJavaOuter = document.querySelector(".curriculum-java-outer");
    let curriculumJavaContainer = document.querySelector(".curriculum-java-container");
    let curriculumJavahorLength = curriculumJavaContainer.scrollWidth;
    let javaDistFromTop = curriculumJavaOuter.offsetTop;
    let javaScrollDistance = javaDistFromTop + curriculumJavahorLength - windowWidth + 100;

    curriculumJavaOuter.style.height = (curriculumJavahorLength + 150)+ "px";

    //scratch curriculum
    let curriculumScratchOuter = document.querySelector(".curriculum-scratch-outer");
    let curriculumScratchContainer = document.querySelector(".curriculum-scratch-container");
    let scratchDistFromTop = curriculumScratchOuter.offsetTop;
    let scratchScrollDistance = scratchDistFromTop + curriculumJavahorLength - windowWidth + 100;

    curriculumScratchOuter.style.height = (curriculumJavahorLength + 150) + "px";
    curriculumScratchContainer.style.transform = "translateX(-" + (scratchScrollDistance);

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset;

        if (scrollTop >= javaDistFromTop && scrollTop <= javaScrollDistance) {
            curriculumJavaContainer.style.transform = "translateX(-" + (scrollTop - javaDistFromTop) + "px)";
            curriculumJavaContainer.style.overflow = "visible";
            curriculumJavaContainer.style.transition = "0.05s";
        }

        if (scrollTop >= scratchDistFromTop && scrollTop <= scratchScrollDistance) {
            curriculumScratchContainer.style.transform = "translateX(" + (scrollTop - scratchDistFromTop) + "px)";
            curriculumScratchContainer.style.overflow = "visible";
            curriculumScratchContainer.style.transition = "0.05s";
        }
    });
}

//faq
if (document.URL.includes("faqs")) {
    let faqItems = document.getElementsByClassName("faq-button");

    window.addEventListener('scroll', function () {
        for (i = 0; i < faqItems.length; i++) {
            if (isScrolledIntoView(faqItems[i], 100)) {
                faqItems[i].style.opacity = 1;
            } else {
                faqItems[i].style.opacity = 0;
            }
        }
    });

    for (i = 0; i < faqItems.length; i++) {
        faqItems[i].addEventListener('click', function () {
            const currentFaqItem = document.getElementsByClassName("faq-button active");
            if (currentFaqItem[0] !== undefined && currentFaqItem[0] !== this) {
                currentFaqItem[0].nextElementSibling.style.maxHeight = 0;
                currentFaqItem[0].nextElementSibling.style.opacity = 0;
                currentFaqItem[0].classList.toggle('active');
            }


            const faqBody = this.nextElementSibling;
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                faqBody.style.maxHeight = faqBody.scrollHeight + "px";
                faqBody.style.opacity = 1;
            } else {
                faqBody.style.maxHeight = 0;
                faqBody.style.opacity = 0;
            }
        });
    }
}

//nav bar scroll;
let header = document.querySelector('.header');
window.addEventListener('scroll', function () {
    let title = document.querySelector('.title');
    let navbar = document.querySelector('.bar');
    navbar.classList.toggle('active', window.pageYOffset >= $(title).offset().top - 100);
});

//contact
if (document.URL.includes("contact")) {
    var textarea = document.querySelector(".contact-us-textarea");
    textarea.addEventListener('input', function () {
        if (textarea === null || textarea.value.trim() === '') {
            textarea.classList.remove("active");
        } else {
            textarea.classList.add("active");
        }
    });
}

//home
if (document.location.pathname === "/") {
    var textarea = document.querySelector(".contact-us-textarea");
    textarea.addEventListener('input', function () {
        if (textarea === null || textarea.value.trim() === '') {
            textarea.classList.remove("active");
        } else {
            textarea.classList.add("active");
        }
    });

    window.addEventListener('scroll', function () {
        let homeAboutContent = document.querySelector('.home-content-container');
        homeAboutContent.classList.toggle('slide-in', isScrolledIntoView(homeAboutContent, 50));

        let chooseUsNumber = document.getElementsByClassName('choose-us-number');
        chooseUsNumber[0].classList.toggle('slide-in', isScrolledIntoView(chooseUsNumber[0], 30));
        chooseUsNumber[1].classList.toggle('slide-in', isScrolledIntoView(chooseUsNumber[1], 30));

        let chooseUsItems = document.getElementsByClassName('choose-us-item');
        let num = 0.5;
        for (i = 0; i < chooseUsItems.length; i++) {
            if (isScrolledIntoView(chooseUsItems[i], 30)) {
                chooseUsItems[i].classList.add('show');
                chooseUsItems[i].style.transition = "opacity 1s ease-out " + num + "s, transform 0.3s ease-out 0s";
            }
            num += 0.5;
        }

        let projectsItems = document.getElementsByClassName("projects-item-outer");
        for (i = 0; i < projectsItems.length; i++) {
            if (isScrolledIntoView(projectsItems[i], 30)) {
                projectsItems[i].classList.add('show');
                if ($(window).width() > 1000) {
                    projectsItems[i].classList.add('slide-in');
                }
            }
        }
    });
}

//madrid
if (document.URL.includes("madrid")) {

    window.addEventListener('scroll', function () {
        let homeAboutContent = document.querySelector('.home-content-container');
        homeAboutContent.classList.toggle('slide-in', isScrolledIntoView(homeAboutContent, 50));
    });
}

//about us
if (document.URL.includes("about")) {
    window.addEventListener('scroll', function () {
        let aboutContent = document.querySelector('.about-text-container');
        aboutContent.classList.toggle('slide-in', isScrolledIntoView(aboutContent, 50));

        let goalItems = document.getElementsByClassName('goals-container-item');
        let num = 0.5;
        for (i = 0; i < goalItems.length; i++) {
            if (isScrolledIntoView(goalItems[i], 30)) {
                goalItems[i].classList.add('show');
                goalItems[i].style.transition = "opacity 1s ease-out " + num + "s";
            }
            num += 0.5;
        }

        let missionContent = document.querySelector('.about-us-content-inner');
        missionContent.classList.toggle('slide-in', isScrolledIntoView(missionContent, 50));
    });
}

//scroll general func
function isScrolledIntoView(elem, offset)
{
    var docViewTop = window.pageYOffset + 70;
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top + offset;
    var elemBottom = elemTop + $(elem).height() - offset;
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
}

function validateForm() {
    if(grecaptcha.getResponse()){
        return true;
    }else{
        alert("Please prove that you're not a robot!");
        return false;
    }
}

let slide = 0
var clickDisabled = false;
// Next/previous controls
function plusSlide() {
    if (clickDisabled)
         return;
    let slides = document.getElementsByClassName("tutoring-slide");
    
    slides[slide].style.transition = "transform 0.9s cubic-bezier(1, 0.1, 1, 0.1) 0.1s";
    if(slide < slides.length-1){
        slide++;
        transform_length = -slide * 100;
        for(var i = 0; i < slides.length; i++){
            if(i != slide-1){
               slides[slide].style.transition = "transform 0.85s ease-in 0.05s";
            }
            slides[i].style.transform = "translateX(" + transform_length + "vw)";
        }
    }
    clickDisabled = true;
    setTimeout(function(){clickDisabled = false;}, 1000);
    
}

function minusSlide(){
    if (clickDisabled)
         return;
    let slides = document.getElementsByClassName("tutoring-slide");
    slides[slide].style.transition = "transform 0.9s cubic-bezier(1, 0.1, 1, 0.1) 0.1s";
    slides[slide].style.zIndex = "-1";
    if(slide > 0){
        slide--;
        transform_length = -slide * 100;
        for(var i = 0; i < slides.length; i++){
            if(i != slide+1){
               slides[slide].style.zIndex = "0";
               slides[slide].style.transition = "transform 0.85s ease-in 0.05s";
            }
            slides[i].style.transform = "translateX(" + transform_length + "vw)";
        }
    }
    clickDisabled = true;
    setTimeout(function(){clickDisabled = false;}, 950);
}