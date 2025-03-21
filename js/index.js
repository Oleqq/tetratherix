document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".application-partners__slider", {
        slidesPerView: 2.5,
        spaceBetween: 80,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
        },
    });
});


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".model-slider__slider", {
        slidesPerView: 2.5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
});


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".model-partners__slider", {
        slidesPerView: 2.5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.25,
            },
            640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
        },
    });
});



document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".model-others__slider", {
        slidesPerView: 1,
        autoplay: {
            delay: 13000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".model-others-card__nav--button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".model-others__slider-pagination",
            clickable: true,
            type: "bullets",
        },
        on: {
            init: function () {
                document.querySelector(".total-slides").textContent = this.slides.length;
                document.querySelector(".current-slide").textContent = this.realIndex + 1;
            },
            slideChange: function () {
                document.querySelector(".current-slide").textContent = this.realIndex + 1;
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    function initSwiper() {
        if (window.innerWidth <= 768 && !document.querySelector(".swiper-initialized")) {
            new Swiper(".about-info__wrapper", {
                slidesPerView: 1.25,
                spaceBetween: 20,
                pagination: {
                    // el: ".swiper-pagination",
                    clickable: true,
                },
            });

            document.querySelector(".about-info__wrapper").classList.add("swiper-initialized");
        } else if (window.innerWidth > 768 && document.querySelector(".swiper-initialized")) {
            location.reload(); 
        }
    }

    initSwiper();
    window.addEventListener("resize", initSwiper);
});


document.addEventListener("DOMContentLoaded", function () {
    const captions = document.querySelectorAll(".about-slider__slider-caption");

    const swiper = new Swiper(".about-slider__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
       
        on: {
            init: function () {
                updateCaption(this.realIndex);
            },
            slideChange: function () {
                updateCaption(this.realIndex);
            },
        },

        breakpoints: {
            0: {
                slidesPerView: .75,
            },
            567: {
                slidesPerView: .75,
            },
            768: {
                slidesPerView: 1,
            },
            2550: {
                slidesPerView: 1,
            },
        },
    });

    function updateCaption(index) {
        captions.forEach((caption, i) => {
            caption.classList.toggle("active", i === index);
        });
    }
});








document.addEventListener("DOMContentLoaded", function () {
    const swiperTabElement = document.querySelector(".team-slider-about__tabs");

    // Проверка ширины экрана
    if (window.innerWidth >= 467) { 
        const swiper = new Swiper(swiperTabElement, {
            slidesPerView: 3.5,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1.5 },
                567: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                991: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3.5 },
                1440: { slidesPerView: 3.5 },
                2560: { slidesPerView: 3.5 },
            },
        });
    }

    // Инициализация всех Swiper'ов, который работает всегда
    const tabs = document.querySelectorAll(".team-slider-about__tab");
    const sliders = document.querySelectorAll(".team-slider-about__swiper");

    const swiperInstances = {};

    sliders.forEach((swiperEl) => {
        const swiperId = swiperEl.id;
        swiperInstances[swiperId] = new Swiper(swiperEl, {
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                0: { slidesPerView: 1.5 },
                567: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });

        if (swiperId !== "team-1") {
            swiperEl.classList.add("hidden");
        }
    });

    // Логика переключения вкладок
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-target");
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            sliders.forEach((slider) => {
                if (slider.id === target) {
                    slider.classList.remove("hidden");
                    swiperInstances[target].update();
                } else {
                    slider.classList.add("hidden");
                }
            });
        });
    });

    // Логика для показа и скрытия био, с условием, что открыто только одно био
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach((member) => {
        member.addEventListener("click", function() {
            const bioId = member.getAttribute("data-target");
            const bio = document.querySelector(bioId);

            // Закрытие всех биографий, если они открыты
            const allBios = document.querySelectorAll(".team-member__bio");
            allBios.forEach((otherBio) => {
                if (otherBio !== bio) {
                    otherBio.classList.add("hidden");
                }
            });

            // Переключение видимости текущего био
            if (bio.classList.contains("hidden")) {
                bio.classList.remove("hidden");
            } else {
                bio.classList.add("hidden");
            }
        });
    });
});






document.addEventListener("scroll", function () {
    const nav = document.querySelector("nav.hero-nav");
    if (window.scrollY > 100) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header__burger");
    const header = document.querySelector(".header");
    const mainMenu = document.querySelector(".header__list");
    const submenu = document.querySelector(".submenu");
    const submenuItems = document.querySelectorAll(".has-submenu > a");
    const backButtons = document.querySelectorAll(".submenu .back-button");

    // Бургер-меню
    burger.addEventListener("click", function () {
        header.classList.toggle("header--open");
        burger.classList.toggle("active");

        // Добавляем/удаляем класс и отключаем/включаем скролл на body
        if (header.classList.contains("header--open")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    });

    // Открытие подменю
    submenuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            mainMenu.style.display = "none"; // Скрыть основное меню
            submenu.classList.add("submenu--open"); // Показать подменю

            // Добавляем класс для отключения скролла
            document.body.classList.add("no-scroll");
        });
    });

    // Кнопка "Назад" в подменю
    backButtons.forEach(button => {
        button.addEventListener("click", function () {
            mainMenu.style.display = "block"; // Показать основное меню
            submenu.classList.remove("submenu--open"); // Скрыть подменю

            // Убираем класс для включения скролла
            document.body.classList.remove("no-scroll");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("header");
    let lastScrollY = window.scrollY;
    const scrollThreshold = 100; // Минимальная прокрутка перед активацией эффекта

    window.addEventListener("scroll", function () {
        if (window.scrollY < scrollThreshold) {
            nav.classList.remove("hidden"); // Показываем меню, если прокрутка меньше 100px
            return;
        }

        if (window.scrollY > lastScrollY) {
            // Скроллим вниз — скрываем меню
            nav.classList.add("hidden");
        } else {
            // Скроллим вверх — показываем меню
            nav.classList.remove("hidden");
        }
        
        lastScrollY = window.scrollY;
    });
});
