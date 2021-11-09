class MobileNavbar{ // classe é um conceito abstrato de um objeto
    constructor(mobileMenu, navList, navLinks){ //vou definir as propriedades dessa classe construtora
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    } 

    animatedLinks() {// forEach fala com cada link individualmente
        this.navLinks.forEach((link, index)=>{
            link.style.animation
            ? (link.style.animation = "") // "Existe animation no estilo de link?" Caso exista, esse operador vai rodar e retirar o estilo. Isso é o que esse opreador ternário pergunta 
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    //Logo abaixou estou criando um método que adiciona um evento de click no botão do menu 
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    
    // criei um método para iniciar essa função SE o "mobileMenu" existir no documento.
    init(){ 
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();
