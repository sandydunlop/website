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


// ========


// Helper function to safely get CSS variables
const getCSSVariable = (variable, fallback) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim() || fallback;
  }
  return fallback;
};

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'loose', // Allow clicks in the rendered diagram
  logLevel: 'error', // Only show errors, not warnings
  theme: 'forest', // Set the theme to forest
  themeVariables: {
    primaryColor: getCSSVariable('--primary', '#BB2528'),
    primaryTextColor: getCSSVariable('--primary-foreground', '#fff'),
    primaryBorderColor: getCSSVariable('--primary', '#7C0000'),
    lineColor: getCSSVariable('--accent', '#F8B229'),
    secondaryColor: getCSSVariable('--secondary', '#006100'),
    tertiaryColor: getCSSVariable('--background', '#fff'),
    edgeLabelBackground: getCSSVariable('--background', '#fff'),
    edgeLabelColor: getCSSVariable('--foreground', '#000')
  }
});
