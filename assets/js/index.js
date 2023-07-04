window.addEventListener("DOMContentLoaded", function(){  

    // Animations
    const animation1 = document.getElementById("animation1");
    const animation2 = document.getElementById("animation2");

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(animation1, 1, {top: -100, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(animation2, 1, {top: 100, opacity: 0, ease: "power2.out"}, 0.3)

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

    // Menu Burger
    let burgerBtn = this.document.getElementById("span");
    let menu = this.document.getElementById("burger-menu")
    burgerBtn.addEventListener("click", function(){
        menu.classList.toggle("hidden");
        menu.classList.toggle("show");
    });
    this.document.addEventListener("click", function(e){
        if(menu.className === "show"){
            console.log("hello");
            if(!menu.contains(e.target) && !burgerBtn.contains(e.target)){
            menu.classList.remove("show");
            menu.classList.add("hidden");
            }
        }
    })

})