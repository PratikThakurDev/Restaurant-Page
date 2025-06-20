import menuBg from "./asset/menu.png" ;
 
function loadMenu(){
    const render = RenderMenu();
    render.Background()
    render.Heading()
    render.Dishes('Masala Dosa','Crispy South Indian crepe stuffed with spicy potato filling.');
    render.Dishes('Chicken Biryani','Fragrant basmati rice layered with marinated chicken and whole spices.');
    render.Dishes('Paneer Butter Masala','Creamy tomato gravy with tender paneeer cubes, spiced to perfection.');
    render.Dishes('Seekh Kebab','Grilled minced meat skewers, smoky and juicy with herbs.')

}

const RenderMenu = () =>{
    const content = document.querySelector("#content") ;

    const Background = ()=>{
        content.style.backgroundImage = `url(${menuBg})` ;
        content.style.backgroundRepeat = 'no-repeat';
        content.style.backgroundSize = 'contain';
        content.style.backgroundPosition = 'center ';
        content.style.height = '1000px';   
    }

    const Heading = () => {
        const heading = document.createElement('h1');
        heading.textContent = 'Our Menu';
        content.append(heading);
    }

    const Dishes = (dishName,dishDesc) =>{
        const dishSection = document.createElement("div");
        const dishCard = document.createElement("div");
        dishSection.classList.add('dishSection');
        dishCard.classList.add('dishCard');
        const pDishName = document.createElement("h3");
        const pDishDesc = document.createElement("p");
        pDishName.textContent = `${dishName}`;
        pDishDesc.textContent = `${dishDesc}`;
        dishCard.append(pDishName);
        dishCard.append(pDishDesc);
        dishSection.append(dishCard);
        content.append(dishSection);
    }

    return{Background, Heading, Dishes}
}

export default loadMenu ;