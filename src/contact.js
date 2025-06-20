import contactBg from "./asset/contact.png" ;

function loadContact(){
    const render = RenderContact();
    render.Background();
    render.Heading();
    render.Info();
}

const RenderContact = ()=>{
    const content = document.querySelector("#content") ;
    const container = document.createElement("div");
    container.classList.add("contact-card");
    content.innerHTML='';

    const Background = ()=>{
        content.style.backgroundImage = `url(${contactBg})` ;
        content.style.backgroundRepeat = 'no-repeat';
        content.style.backgroundSize = 'cover';
        content.style.backgroundPosition = 'center ';
        content.style.height = '1000px';   
    }

    const Heading = () => {
        const heading = document.createElement('h1');
        heading.textContent = 'Contact Us';
        container.append(heading);
    }

    const Info = ()=>{
        const phone = document.createElement("p");
        const email = document.createElement("p");
        const address = document.createElement("p");
        const hours = document.createElement("p");
        phone.textContent = 'Phone: +91 98765 4320';
        email.textContent = 'contact@spicetrail.in';
        address.textContent = 'Bawana Street, Delhi - 110039';
        hours.textContent = 'Open daily - 11:00 AM to 11:00 PM';
        container.append(phone,email,address,hours);
        content.append(container);
    }

    return {Background, Heading, Info}
}

export default loadContact;