import homeBg from "./asset/home.png" ;

function loadHome() {
    const render = RenderHome();
    render.Background()
}

const RenderHome = () =>{
    const content = document.querySelector("#content") ;
    
    const Background = ()=>{
        content.style.backgroundImage = `url(${homeBg})` ;
        content.style.backgroundRepeat = 'no-repeat';
        content.style.backgroundSize = 'contain';
        content.style.backgroundPosition = 'center ';
        content.style.height = '2000px';   
    }

    return {Background}
}

export default loadHome;