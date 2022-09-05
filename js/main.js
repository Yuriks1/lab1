//change nav style on scroll

window.addEventListener('scroll', () => {
        document.querySelector('nav')
            .classList.toggle('window-scrolled', window.scrollY > 0)
    }
)

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}
openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}

closeNavBtn.addEventListener('click', closeNav);


//SwiperJS
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 5,
        }
    }
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 5,
        }
    }
});


async function getUser() {
    let url = './data/user.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUser() {
    let users = await getUser();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.profileURL}"  alt="mypicture">
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                            <div ${user.profession}">${user.profession}</a></div>
                            <div ${user.description}">${user.description}</a></div>


                            

                        </div>`;

        html += htmlSegment;
    });

    let profile = document.querySelector('.profile');
    profile.innerHTML = html;
}

renderUser();


function showAlert() {

    const age = document.getElementById('n1').value;

        const isl = document.getElementById('t1').value;
        const email = document.getElementById('t2').value;
        const msg = document.getElementById('t3').value;

    if (age.length === 0 || isl.length ===0||email.length===0 ||msg.length===0 ) {
        alert('Please enter value');}

    else {
        window.alert(" Age : " + age + "  Favorite island : " + isl + "  email : " + email +
            "  Message :" + msg);

    }
}








