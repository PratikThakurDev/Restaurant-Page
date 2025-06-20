import homeBg from "./asset/home.png" ;

function loadHome() {
    const render = RenderHome();
    render.Background()
    render.Heading()
    render.Intro()
}

const RenderHome = () =>{
    const content = document.querySelector("#content") ;
    const container = document.createElement("div");
    container.classList.add("home-content");
    content.innerHTML='';
    
    const Background = ()=>{
        content.style.backgroundImage = `url(${homeBg})` ;
        content.style.backgroundRepeat = 'no-repeat';
        content.style.backgroundSize = 'cover';
        content.style.backgroundPosition = 'center ';
        content.style.height = '1000px';   
    }

    const Heading = () => {
        const heading = document.createElement('h1');
        heading.textContent = 'Welcome to Spice Trail';
        container.append(heading);
    }

    const Intro = () => {
        const subHead = document.createElement("p");
        const address = document.createElement("p");
        const timing = document.createElement("p");
        subHead.textContent = "Where bold Indian flavors meet warm hospitality.";
        address.textContent = "Bawana Street, Delhi";
        timing.textContent = "Open: 11 AM - 11PM";
        container.append(subHead,address,timing);
        content.append(container);

    }

    return {Background, Heading, Intro}
}

export default loadHome;