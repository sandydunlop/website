// Function to handle theme changes
function handleThemeChange(isLightMode) {
    var element = null;
    var h1Element = document.querySelector("h1");
    if (h1Element != null && h1Element.innerText == 'Markista') {
        element = h1Element;
    }else{
        element = document.getElementById('h1');
    }
    if (element != null) {
        var imgElement = document.createElement("img");
        if (isLightMode) {
            imgElement.src = "/markista/assets/markista-dark.png";
        } else {
            imgElement.src = "/markista/assets/markista-light.png";
        }
        imgElement.id='h1';
        imgElement.alt = "Markista";
        imgElement.style.width = "25%";
        element.parentNode.replaceChild(imgElement, element);
    }
}

// Function to check the current mode
function checkCurrentMode() {
    const isLightMode = document.body.dataset.mdColorMedia.includes('light');
    handleThemeChange(isLightMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.md-header__option');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            setTimeout(checkCurrentMode, 100);
        });
    }
});

checkCurrentMode();
