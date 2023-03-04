const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + screenLeft };

    }

    setTimeout(() => {
        animOnScroll();
    }, 400);
}



//find elements
let showPrevBtn = document.getElementById('show_prev_btn');
let showNextBtn = document.getElementById('show_next_btn');
let slideImages = document.querySelectorAll('.slider_img_src');

// subscribe to events

showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
let imagesUrls = [];
imagesUrls.push('Images/Rectangle1089.png');
imagesUrls.push('Images/img2.png');
imagesUrls.push('Images/img3.png');
imagesUrls.push('Images/img4.png');

changeSlides();

function onShowNextBtnClick() {
    let slide = imagesUrls.shift();
    imagesUrls.push(slide);
    changeSlides();
}

function onShowPrevBtnClick() {
    let slide = imagesUrls.pop(0);
    imagesUrls.unshift(slide);
    changeSlides();
}


function changeSlides() {
    let i = 0;
    for (slide of slideImages) {
        slide.src = imagesUrls[i];
        i++;
    }
}



//-----------------------------------------//
let checkBox = document.getElementById('checkbox_menu');
let menu = document.getElementById('menu');

checkBox.addEventListener('change', function() {
    if (this.checked) {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    } else {
        menu.style.display = 'none';
    }
});