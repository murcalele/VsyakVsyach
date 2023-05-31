// Функция для перехода на товары
function goToGoodPage(value) {
    window.location.href = "goodspages/" + value;
}

//Переход к вк
function redirectToVk() {
    window.open('https://vk.com/purpleppassion', '_blank');
}

//Переход к тг
function redirectToTg() {
    window.open('https://t.me/murcall', '_blank');
}

// Функция для перехода на страницу с инфораие
function goToMainPage() {
    window.location.href = "index.html";
}

//Переход по рекламе
function redirectToAviasales() {
    window.open('https://www.aviasales.ru', '_blank');
}

//Переход по рекламе
function redirectToDom() {
    window.open('https://www.cian.ru/kupit-dom/', '_blank');
}
//Переход по рекламе
function redirectToWildberries() {
    window.open('https://www.wildberries.ru/', '_blank');
}

//Переход по рекламе
function redirectToOzon() {
    window.open('https://www.ozon.ru/', '_blank');
}

function redirectToAuto() {
    window.open('https://www.auto.ru/', '_blank');
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scrollTopButton").classList.add("show");
    } else {
        document.getElementById("scrollTopButton").classList.remove("show");
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}

function submitForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var questionInput = document.getElementById('question');

    // Выводим значения в консоль
    console.log('Имя:', nameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Вопрос:', questionInput.value);

    // Очистка полей формы
    nameInput.value = '';
    emailInput.value = '';
    questionInput.value = '';
}

// Получаем модальное окно и элементы изображений
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Получаем коллекцию изображений
var images = document.querySelectorAll('img[id^="myImg"]');

// Привязываем обработчик клика к каждому изображению
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Получаем элемент для закрытия модального окна
var closeBtn = document.getElementsByClassName("close")[0];

// Привязываем обработчик клика к элементу закрытия модального окна
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Привязываем обработчик клика к модальному окну для закрытия его при клике вне изображения
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

const showSlides = {
    slideIndex: 0,
    slides: document.getElementsByClassName('slides'),
    changeSlide() {
        let i = 0;
        for (i; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }
        this.slides[this.slideIndex-1].style.display = 'block';
    },
    nextSlide() {
        this.slideIndex++;
        if (this.slideIndex > this.slides.length) {this.slideIndex = 1};
        this.changeSlide();
    },
    prevSlide() {
        this.slideIndex--;
        if (this.slideIndex < 1) {this.slideIndex = this.slides.length};
        this.changeSlide();
    },
    showTheFirst() {
        let i = 1;
        for (i; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }
        this.slideIndex++;
    }
}
showSlides.showTheFirst();