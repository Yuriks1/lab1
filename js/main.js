//change nav style on scroll

window.addEventListener('scroll',()=>
    {
        document.querySelector('nav')
            .classList.toggle('window-scrolled', window.scrollY>0)
    }

)

//SwiperJS

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{

        599:{
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023:{
            slidesPerView: 3,
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

