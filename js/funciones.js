import {
    secciones,
    OcupacionBox,
    OcupacionParrafo,
    ServiceArticle6,
    ServiceArticle5,
    ServiceArticle4,
    ServiceArticle3,
    ServiceArticle2,
    ServiceArticle1,
    PortfolioArticle2,
    PortfolioArticle1,
    PortfolioArticle3,
    PortfolioArticle4,
    PortfolioArticle5,
    PortfolioArticle6,
    PortfolioArticle9,
    PortfolioArticle8,
    PortfolioArticle7,
    PortfolioArticleImg1,
    PortfolioArticleImg3,
    PortfolioArticleImg4,
    PortfolioArticleImg5,
    PortfolioArticleImg6,
    PortfolioArticleImg7,
    PortfolioArticleImg8,
    PortfolioArticleImg9,
    PortfolioArticleImg2,
    TestimonialsSelectorArticle2,
    TestimonialsSelectorArticle1,
    testimonials__boxTestimonioGeneral,
    MyWork,
    FSArticlePortfolio1,
    FSArticlePortfolio2,
    FSArticlePortfolio3,
    FSArticlePortfolio4,
    FSArticlePortfolio5,
    FSArticlePortfolio6,
    FSArticlePortfolio7,
    FSArticlePortfolio8,
    FSArticlePortfolio9,
    SArticlePortfolio1,
    SArticlePortfolio2,
    SArticlePortfolio3,
    SArticlePortfolio4,
    SArticlePortfolio5,
    SArticlePortfolio6,
    SArticlePortfolio7,
    SArticlePortfolio8,
    SArticlePortfolio9,
    myWorkClose,
    body,
    BtnReadMore1,
    BtnReadMore2,
    BtnReadMore3,
    readMore,
    readMoreClose,
    footerSeccion,
    contactSeccion,
    blogSeccion,
    inicioSeccion,
    aboutSeccion,
    resumeSeccion,
    servicesSeccion,
    portfolioSeccion,
    testimonialsSeccion,
    seccionesScroll
} from "./variables.js";

//----------------/Secciones/-------------------//
inicioSeccion.addEventListener('scrollend', () => { console.log('hola') });
aboutSeccion.addEventListener('scrollend', () => { console.log('hola') });
resumeSeccion.addEventListener('scrollend', () => { console.log('hola') });
servicesSeccion.addEventListener('scrollend', () => { console.log('hola') });
portfolioSeccion.addEventListener('scrollend', () => { console.log('hola') });
testimonialsSeccion.addEventListener('scrollend', () => { console.log('hola') });
blogSeccion.addEventListener('scrollend', () => { console.log('hola') });
contactSeccion.addEventListener('scrollend', () => { console.log('hola') });
footerSeccion.addEventListener('scrollend', () => { console.log('hola') });

modificarTamañoSeccion();
window.addEventListener('resize', () => modificarTamañoSeccion());

ServiceArticle1.addEventListener('mouseover', () => { ServiceArticle1.classList.add('activo'); });
ServiceArticle2.addEventListener('mouseover', () => { ServiceArticle2.classList.add('activo'); });
ServiceArticle3.addEventListener('mouseover', () => { ServiceArticle3.classList.add('activo'); });
ServiceArticle4.addEventListener('mouseover', () => { ServiceArticle4.classList.add('activo'); });
ServiceArticle5.addEventListener('mouseover', () => { ServiceArticle5.classList.add('activo'); });
ServiceArticle6.addEventListener('mouseover', () => { ServiceArticle6.classList.add('activo'); });

ServiceArticle1.addEventListener('mouseout', () => { ServiceArticle1.classList.remove('activo'); });
ServiceArticle2.addEventListener('mouseout', () => { ServiceArticle2.classList.remove('activo'); });
ServiceArticle3.addEventListener('mouseout', () => { ServiceArticle3.classList.remove('activo'); });
ServiceArticle4.addEventListener('mouseout', () => { ServiceArticle4.classList.remove('activo'); });
ServiceArticle5.addEventListener('mouseout', () => { ServiceArticle5.classList.remove('activo'); });
ServiceArticle6.addEventListener('mouseout', () => { ServiceArticle6.classList.remove('activo'); });

//----------------/Portfolio/-------------------//
PortfolioArticle1.addEventListener('mouseover', () => {
    PortfolioArticle1.classList.add('activo');
    PortfolioArticleImg1.classList.add('activo');
});

PortfolioArticle2.addEventListener('mouseover', () => {
    PortfolioArticle2.classList.add('activo');
    PortfolioArticleImg2.classList.add('activo');
});
PortfolioArticle3.addEventListener('mouseover', () => {
    PortfolioArticle3.classList.add('activo');
    PortfolioArticleImg3.classList.add('activo');
});
PortfolioArticle4.addEventListener('mouseover', () => {
    PortfolioArticle4.classList.add('activo');
    PortfolioArticleImg4.classList.add('activo');
});
PortfolioArticle5.addEventListener('mouseover', () => {
    PortfolioArticle5.classList.add('activo');
    PortfolioArticleImg5.classList.add('activo');
});
PortfolioArticle6.addEventListener('mouseover', () => {
    PortfolioArticle6.classList.add('activo');
    PortfolioArticleImg6.classList.add('activo');
});
PortfolioArticle7.addEventListener('mouseover', () => {
    PortfolioArticle7.classList.add('activo');
    PortfolioArticleImg7.classList.add('activo');
});
PortfolioArticle8.addEventListener('mouseover', () => {
    PortfolioArticle8.classList.add('activo');
    PortfolioArticleImg8.classList.add('activo');
});
PortfolioArticle9.addEventListener('mouseover', () => {
    PortfolioArticle9.classList.add('activo');
    PortfolioArticleImg9.classList.add('activo');
});

PortfolioArticle1.addEventListener('mouseout', () => {
    PortfolioArticle1.classList.remove('activo');
    PortfolioArticleImg1.classList.remove('activo');
});
PortfolioArticle2.addEventListener('mouseout', () => {
    PortfolioArticle2.classList.remove('activo');
    PortfolioArticleImg2.classList.remove('activo');
});
PortfolioArticle3.addEventListener('mouseout', () => {
    PortfolioArticle3.classList.remove('activo');
    PortfolioArticleImg3.classList.remove('activo');
});
PortfolioArticle4.addEventListener('mouseout', () => {
    PortfolioArticle4.classList.remove('activo');
    PortfolioArticleImg4.classList.remove('activo');
});
PortfolioArticle5.addEventListener('mouseout', () => {
    PortfolioArticle5.classList.remove('activo');
    PortfolioArticleImg5.classList.remove('activo');
});
PortfolioArticle6.addEventListener('mouseout', () => {
    PortfolioArticle6.classList.remove('activo');
    PortfolioArticleImg6.classList.remove('activo');
});
PortfolioArticle7.addEventListener('mouseout', () => {
    PortfolioArticle7.classList.remove('activo');
    PortfolioArticleImg7.classList.remove('activo');
});
PortfolioArticle8.addEventListener('mouseout', () => {
    PortfolioArticle8.classList.remove('activo');
    PortfolioArticleImg8.classList.remove('activo');
});
PortfolioArticle9.addEventListener('mouseout', () => {
    PortfolioArticle9.classList.remove('activo');
    PortfolioArticleImg9.classList.remove('activo');
});

FSArticlePortfolio1.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});
FSArticlePortfolio2.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});
FSArticlePortfolio3.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});
FSArticlePortfolio4.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});
FSArticlePortfolio5.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});
FSArticlePortfolio6.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});
FSArticlePortfolio7.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});
FSArticlePortfolio8.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});
FSArticlePortfolio9.addEventListener('click', () => {
    MyWork.classList.add('activo');
    body.classList.remove('activo');
});

myWorkClose.addEventListener('click', () => {
    MyWork.classList.remove('activo');
    body.classList.add('activo');
});

SArticlePortfolio1.addEventListener('click', () => {
    MyWork.classList.add('activo')
});
SArticlePortfolio2.addEventListener('click', () => { });
SArticlePortfolio3.addEventListener('click', () => { });
SArticlePortfolio4.addEventListener('click', () => { });
SArticlePortfolio5.addEventListener('click', () => { });
SArticlePortfolio6.addEventListener('click', () => { });
SArticlePortfolio7.addEventListener('click', () => { });
SArticlePortfolio8.addEventListener('click', () => { });
SArticlePortfolio9.addEventListener('click', () => { });

//----------------/Blog/-------------------//

function DesScroll() {
    secciones.forEach(sec => {
        sec.classList.remove('activo');
    });
}
ActScroll();

function ActScroll() {
    secciones.forEach(sec => {
        sec.classList.add('activo');
    });
}

BtnReadMore1.addEventListener('click', () => {
    readMore.classList.add('activo');
    DesScroll();
});
BtnReadMore2.addEventListener('click', () => {
    readMore.classList.add('activo');
    DesScroll();
});
BtnReadMore3.addEventListener('click', () => {
    readMore.classList.add('activo');
    DesScroll();
});

readMoreClose.addEventListener('click', () => {
    readMore.classList.remove('activo');
    ActScroll();
});

//----------------/Testimonial/-------------------//
TestimonialsSelectorArticle1.addEventListener('click', () => { cambiarTestimonial('article1') });
TestimonialsSelectorArticle2.addEventListener('click', () => { cambiarTestimonial('article2') });



function modificarTamañoSeccion() {
    var tamañoPantalla = window.innerHeight;
    inicioSeccion.style.minHeight = tamañoPantalla + "px";
    inicioSeccion.style.maxHeight = tamañoPantalla + "px";
}


export function animacionOcupacion() {
    OcupacionBox.classList.remove('part2');
    OcupacionBox.classList.add('part1');
    setTimeout(() => {
        OcupacionBox.classList.remove('part1');
        OcupacionBox.classList.add('part2');
        setTimeout(() => {
            OcupacionParrafo.textContent = "Web design"
        }, 1100);
        setTimeout(() => {
            setTimeout(() => {
                OcupacionParrafo.textContent = "Web developer"
                setTimeout(() => {
                    OcupacionBox.classList.remove('part2');
                    OcupacionBox.classList.add('part1');
                    setTimeout(() => {
                        animacionOcupacion();
                    }, 2000);
                }, 900);
            }, 1000);
        }, 2000);
    }, 2000);
}


function cambiarTestimonial(article) {
    if (article === 'article1') {
        TestimonialsSelectorArticle1.classList.add('activo');
        TestimonialsSelectorArticle2.classList.remove('activo');
        testimonials__boxTestimonioGeneral.classList.add('right0');
        testimonials__boxTestimonioGeneral.classList.remove('right100');
    }
    else if (article === 'article2') {
        TestimonialsSelectorArticle1.classList.remove('activo');
        TestimonialsSelectorArticle2.classList.add('activo');
        testimonials__boxTestimonioGeneral.classList.remove('right0');
        testimonials__boxTestimonioGeneral.classList.add('right100');
    }
}