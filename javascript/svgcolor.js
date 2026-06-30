// Function to handle theme changes
function handleThemeChange2(isLightMode) {
    // var element = null;
    // var h1Element = document.querySelector("h1");
    // if (h1Element != null && h1Element.innerText == 'Markista') {
    //     element = h1Element;
    // }else{
    //     element = document.getElementById('h1');
    // }
    // if (element != null) {
    //     var imgElement = document.createElement("img");
    //     if (isLightMode) {
    //         imgElement.src = "/markista/assets/markista-dark.png";
    //     } else {
    //         imgElement.src = "/markista/assets/markista-light.png";
    //     }
    //     imgElement.id='h1';
    //     imgElement.alt = "Markista";
    //     imgElement.style.width = "25%";
    //     element.parentNode.replaceChild(imgElement, element);
    // }
    if (isLightMode) {
        svg_light_mode();
    } else {
        svg_dark_mode();
    }
}

// Function to check the current mode
function checkCurrentMode2() {
    const isLightMode = document.body.dataset.mdColorMedia.includes('light');
    handleThemeChange2(isLightMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.md-header__option');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            setTimeout(checkCurrentMode2, 100);
        });
    }
});

checkCurrentMode2();


function svg_light_mode() {
    console.log("svg_light_mode");
}

function svg_dark_mode() {
    console.log("svg_dark_mode");
    const elements = document.querySelectorAll('path');
    for (let i = 0; i < elements.length; i++) {
        // Do something with each element
        console.log(elements[i].textContent);
        elements[i].stroke = "#ff0000";
    }
}


// ========
