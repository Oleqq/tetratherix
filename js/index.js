document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper for the application partners slider
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
            640: { slidesPerView: 2.5, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 60 },
        },
    });

    // Initialize Swiper for the model slider
    new Swiper(".model-slider__slider", {
        slidesPerView: 2.1,
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
            0: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.1, spaceBetween: 30 },
        },
    });

    // Initialize Swiper for the model partners slider
    new Swiper(".model-partners__slider", {
        slidesPerView: 2.1,
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
            0: { slidesPerView: 1.25 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.1, spaceBetween: 20 },
            1024: { slidesPerView: 2.1, spaceBetween: 30 },
        },
    });

    // Initialize Swiper for the model others slider
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
            },
        },
    });

    // Initialize Swiper only for mobile devices
    function initSwiper() {
        const swiperWrapper = document.querySelector(".about-info__wrapper");

        // If Swiper is not initialized and screen width is <= 768px, initialize it
        if (window.innerWidth <= 768 && !swiperWrapper.classList.contains("swiper-initialized")) {
            new Swiper(swiperWrapper, {
                slidesPerView: 1.25,
                spaceBetween: 20,
                pagination: { clickable: true },
            });
            swiperWrapper.classList.add("swiper-initialized");
        } else if (window.innerWidth > 768 && swiperWrapper.classList.contains("swiper-initialized")) {
            // If screen width > 768px, remove the Swiper initialization
            swiperWrapper.classList.remove("swiper-initialized");
        }
    }

    // Initialize Swiper and listen for resize event
    initSwiper();
    window.addEventListener("resize", initSwiper);

    // Initialize about slider with caption update on slide change
    const captions = document.querySelectorAll(".about-slider__slider-caption");

    new Swiper(".about-slider__slider", {
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
            0: { slidesPerView: .75 },
            567: { slidesPerView: .75 },
            768: { slidesPerView: 1 },
            2550: { slidesPerView: 1 },
        },
    });

    // Update caption function
    function updateCaption(index) {
        captions.forEach((caption, i) => {
            caption.classList.toggle("active", i === index);
        });
    }

    // Initialize the team slider with tabs functionality
    const swiperTabElement = document.querySelector(".team-slider-about__tabs");

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

    // Handle tab switching for team members
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

    // Handle bio visibility
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach((member) => {
        member.addEventListener("click", function() {
            const bioId = member.getAttribute("data-target");
            const bio = document.querySelector(bioId);

            // Close all bios except the current one
            const allBios = document.querySelectorAll(".team-member__bio");
            allBios.forEach((otherBio) => {
                if (otherBio !== bio) {
                    otherBio.classList.add("hidden");
                }
            });

            // Toggle the current bio visibility
            bio.classList.toggle("hidden");
        });
    });
});

// Scroll event to manage navigation visibility
document.addEventListener("scroll", function () {
    const nav = document.querySelector("nav.hero-nav");
    if (window.scrollY > 100) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

// Burger menu functionality for mobile screens
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header__burger");
    const header = document.querySelector(".header");
    const mainMenu = document.querySelector(".header__list");
    const submenu = document.querySelector(".submenu");
    const submenuItems = document.querySelectorAll(".has-submenu > a");
    const backButtons = document.querySelectorAll(".submenu .back-button");

    burger.addEventListener("click", function () {
        header.classList.toggle("header--open");
        burger.classList.toggle("active");

        // Toggle body scroll
        if (header.classList.contains("header--open")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    });

    submenuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            mainMenu.style.display = "none"; // Hide main menu
            submenu.classList.add("submenu--open"); // Show submenu
            document.body.classList.add("no-scroll"); // Disable scroll
        });
    });

    backButtons.forEach(button => {
        button.addEventListener("click", function () {
            mainMenu.style.display = "block"; // Show main menu
            submenu.classList.remove("submenu--open"); // Hide submenu
            document.body.classList.remove("no-scroll"); // Enable scroll
        });
    });
});

// Sticky header functionality (hide on scroll down, show on scroll up)
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("header");
    let lastScrollY = window.scrollY;
    const scrollThreshold = 100;

    window.addEventListener("scroll", function () {
        if (window.scrollY < scrollThreshold) {
            nav.classList.remove("hidden");
            return;
        }

        if (window.scrollY > lastScrollY) {
            nav.classList.add("hidden"); // Hide header on scroll down
        } else {
            nav.classList.remove("hidden"); // Show header on scroll up
        }

        lastScrollY = window.scrollY;
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Функция для плавного увеличения числа
    function animateNumber(element, start, end, duration) {
        let startTime = null;

        function updateNumber(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const currentNumber = Math.min(start + (end - start) * (progress / duration), end);
            element.textContent = formatNumber(currentNumber); // Обновляем текст на экране

            if (progress < duration) {
                requestAnimationFrame(updateNumber); // Продолжаем анимацию
            } else {
                element.textContent = formatNumber(end); // Устанавливаем конечное значение
            }
        }

        requestAnimationFrame(updateNumber);
    }

    // Функция для форматирования числа с запятыми
    function formatNumber(num) {
        return num.toLocaleString(); // Это добавит запятые
    }

    // Функция, которая будет запускать анимацию при появлении элемента на экране
    function onElementVisible(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent.trim(); // Получаем текст и убираем пробелы

                // Проверяем, является ли содержимое числом
                if (!isNaN(text.replace(/,/g, '')) && text !== "") {
                    let start = 0; // Начальное значение
                    let end = parseInt(text.replace(/,/g, '')); // Конечное значение из текста, без запятых
                    let duration = 2000; // Длительность анимации в миллисекундах (2 секунды)

                    animateNumber(element, start, end, duration); // Запускаем анимацию для числа
                }

                // После анимации отсоединяем наблюдатель
                observer.unobserve(element);
            }
        });
    }

    // Создаем новый Intersection Observer
    const observer = new IntersectionObserver(onElementVisible, {
        threshold: 0.5 // Элемент считается видимым, когда он больше чем на 50% появляется на экране
    });

    // Находим все элементы с числами и начинаем за ними следить
    const statsCells = document.querySelectorAll('.img-stats__num');

    statsCells.forEach(cell => {
        observer.observe(cell); // Начинаем наблюдать за каждым элементом
    });
});

















// ~~~ ANIMATIONS ~~~
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is visible:', entry.target);
                entry.target.classList.add('animated');
            } else {
                console.log('Element is no longer visible:', entry.target);
                entry.target.classList.remove('animated');
            }
        });
    }, {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.01 
    });

    const sections = document.querySelectorAll('section');
    console.log('Sections found:', sections);  // Логирование выбранных элементов

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Проверяем, что элемент появился на экране
            if (entry.isIntersecting) {
                console.log('Element is visible:', entry.target);
                // Добавляем класс .animated для анимации
                entry.target.classList.add('animated');
            } else {
                console.log('Element is no longer visible:', entry.target);
                // Убираем класс .animated, если элемент исчезает
                entry.target.classList.remove('animated');
            }
        });
    }, {
        root: null, // root будет viewport
        rootMargin: '0px',
        threshold: 0.01 // 1% элемента должен быть виден
    });

    // Выбираем все текстовые элементы, кроме ссылок
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    console.log('Text elements found:', textElements);  // Логирование найденных элементов

    // Наблюдаем за каждым элементом
    textElements.forEach(element => {
        observer.observe(element);
    });
});




document.addEventListener("DOMContentLoaded", () => {
    // Получаем все элементы с классом .accordion-tab
    const accordionTabs = document.querySelectorAll('.accordion-tab');

    // Проходим по всем аккордеонам и добавляем обработчики кликов
    accordionTabs.forEach(tab => {
        const title = tab.querySelector('.accordion-tab__title');
        const content = tab.querySelector('.accordion-tab__content');
        const icon = tab.querySelector('.icon');

        // Скрытие контента всех аккордеонов
        content.style.display = 'none'; 

        title.addEventListener('click', () => {
            const isClosed = tab.classList.contains('closed');
            
            // Закрываем все аккордеоны
            accordionTabs.forEach(otherTab => {
                if (otherTab !== tab) {
                    otherTab.classList.add('closed');
                    otherTab.classList.remove('opened');
                    otherTab.querySelector('.accordion-tab__content').style.display = 'none';
                    otherTab.querySelector('.icon').style.transform = 'rotate(0deg)';
                }
            });

            if (isClosed) {
                // Открываем текущий аккордеон
                tab.classList.remove('closed');
                tab.classList.add('opened');
                content.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            } else {
                // Закрываем текущий аккордеон
                tab.classList.add('closed');
                tab.classList.remove('opened');
                content.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.investors-slider__tab');
    const contentSections = document.querySelectorAll('.investors__video, .investors__docs');

    // Function to remove the 'active' class from all tabs and hide all content
    function resetTabs() {
        tabs.forEach(tab => tab.classList.remove('active'));
        contentSections.forEach(content => content.classList.add('hidden'));
    }

    // Event listener for tab clicks
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            resetTabs();

            // Activate the clicked tab
            tab.classList.add('active');

            // Show the corresponding content
            if (index === 0) {
                document.querySelector('.investors__video.content-1').classList.remove('hidden');
            } else if (index === 1) {
                document.querySelector('.investors__docs.content-2').classList.remove('hidden');
            } else if (index === 2) {
                document.querySelector('.investors__docs.content-3').classList.remove('hidden');
            } else if (index === 3) {
                document.querySelector('.investors__docs.content-4').classList.remove('hidden');
            }
        });
    });

    // Accordion toggle functionality
    const accordionTabs = document.querySelectorAll('.accordion-tab');

    accordionTabs.forEach(tab => {
        const title = tab.querySelector('.accordion-tab__title');
        title.addEventListener('click', function () {
            tab.classList.toggle('opened');
            tab.classList.toggle('closed');
        });
    });
});


const swiperTabElement = document.querySelector(".investors-slider");

    if (window.innerWidth >= 467) {
        const swiper = new Swiper(swiperTabElement, {
            slidesPerView: 3.2,
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
                1280: { slidesPerView: 3.2 },
                1440: { slidesPerView: 3.2 },
                2560: { slidesPerView: 3.2 },
            },
        });
    }