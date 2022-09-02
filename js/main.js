//change nav style on scroll

window.addEventListener('scroll',()=>
    {
        document.querySelector('nav')
            .classList.toggle('window-scrolled', window.scrollY>0)
    }

)

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () =>{
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}
openNavBtn.addEventListener('click',openNav);

const closeNav = () =>{
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}

closeNavBtn.addEventListener('click',closeNav);




//SwiperJS

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{

        599:{
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1023:{
            slidesPerView: 2,
            spaceBetween: 60,
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






