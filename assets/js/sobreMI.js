window.addEventListener('scroll',function(){
    let animacion = this.document.getElementById('element');
    let pocision= animacion.getBoundingClientRect().top;
    console.log(pocision);
    let tamañoP=window.innerHeight;
    if(pocision<tamañoP){
        animacion.style.animation="deslizado 1s "
    }
})
window.addEventListener('scroll',function(){
    let animacion = this.document.getElementById('id_skill');
    let pocision= animacion.getBoundingClientRect().top;
    console.log(pocision);
    let tamañoP=window.innerHeight;
    if(pocision<tamañoP){
        animacion.style.animation="SkillMovible 8s infinite alternate-reverse"
    }
})


