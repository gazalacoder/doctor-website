<<<<<<< HEAD
// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});


// =============================
// Navbar Shadow on Scroll
// =============================

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 3px 10px rgba(0,0,0,.08)";

    }

});


// =============================
// Gallery Hover Animation
// =============================

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

    img.addEventListener("mouseover",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseout",()=>{

        img.style.transform="scale(1)";

    });

});

=======
// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});


// =============================
// Navbar Shadow on Scroll
// =============================

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 3px 10px rgba(0,0,0,.08)";

    }

});


// =============================
// Gallery Hover Animation
// =============================

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

    img.addEventListener("mouseover",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseout",()=>{

        img.style.transform="scale(1)";

    });

});

>>>>>>> 18b9917fca6fe0d876f4d8a76b52e5212e29fc28
