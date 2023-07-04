window.addEventListener("DOMContentLoaded", function(){  

    // Animations
    const animations = document.getElementsByClassName("animation");

    const TL = gsap.timeline({paused: true});

    TL.staggerFrom(animations, 2, {top: -100, opacity: 0, ease: "power2.out"}, 0.6)

    TL.play();




    // Gestion des boutons next et preview
    let preview = document.getElementById("preview");
    let next = document.getElementById("next");

    let function1 = this.document.getElementById("function1");
    let function2 = this.document.getElementById("function2");
    let function3 = this.document.getElementById("function3");

    preview.addEventListener("click", function(){
        if(function1.className==="show"){
            function1.classList.remove("show");
            function1.classList.add("hidden");
            function3.classList.remove("hidden");
            function3.classList.add("show");
            return;
        }
        if(function2.className==="show"){
            function2.classList.remove("show");
            function2.classList.add("hidden");
            function1.classList.remove("hidden");
            function1.classList.add("show");
            return;
        }
        if(function3.className==="show"){
            function3.classList.remove("show");
            function3.classList.add("hidden");
            function2.classList.remove("hidden");
            function2.classList.add("show");
            return;
        }
    });

    next.addEventListener("click", function(){
        if(function1.className==="show"){
            function1.classList.remove("show");
            function1.classList.add("hidden");
            function2.classList.remove("hidden");
            function2.classList.add("show");
            return;
        }
        if(function2.className==="show"){
            function2.classList.remove("show");
            function2.classList.add("hidden");
            function3.classList.remove("hidden");
            function3.classList.add("show");
            return;
        }
        if(function3.className==="show"){
            function3.classList.remove("show");
            function3.classList.add("hidden");
            function1.classList.remove("hidden");
            function1.classList.add("show");
            return;
        }
    });


})