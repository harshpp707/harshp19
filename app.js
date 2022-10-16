const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})


function wildfire(){
    window.open("https://github.com/harshpp707/wildfire-prediction", "_blank")
}

function qr_code(){
    window.open("https://github.com/CMPUT301W22T23/QR-Code-Game", "_blank")
}

function linkedin(){
    window.open("https://www.linkedin.com/in/harsh-patel-528804202/", "_blank")
}

function portfolio(){
    window.open("https://github.com/harshpp707/harshpp707", "_blank")
}

function movie_recommender(){
    window.open("https://github.com/harshpp707/MovieRecommender", "_blank")
}
