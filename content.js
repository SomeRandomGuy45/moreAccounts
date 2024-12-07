// Define the HTML content that you want to inject into the existing <ul>
const newMenuItems = `<a id="buttonCoolness" class="rbx-menu-item account-switch-menu-more-item" href="#">Switch Accounts++</a>`;
const insertDIV = `
    <div id="robloxCustomContent" style="position: fixed; top: 20px; left: 20px; z-index: 9999; background-color: rgba(255, 255, 255, 0.8); border: 1px solid #ccc; padding: 10px;">
        <h2>Injected HTML</h2>
        <p>This content was injected into the page because you're on Roblox.</p>
        <button id="customButton___">Click me!</button>
        <div id="messageContainer" style="margin-top: 10px; font-size: 16px; color: green;"></div>
    </div>
`;
let liSettings

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function init() {
    document.getElementById('settings-icon').addEventListener('click', async function() {
        setTimeout(function() {
            liSettings = document.createElement('li');
            liSettings.innerHTML += newMenuItems;
            document.getElementById('settings-popover').style.left = parseFloat(document.getElementById('settings-popover').style.left) - 17 + 'px';
            document.getElementById('settings-popover').getElementsByClassName('arrow')[0].style.left = "55.8%"
            document.getElementById('settings-popover-menu').insertBefore(liSettings, document.getElementById('settings-popover-menu').childNodes[0]);
            let newDiv = undefined;
            liSettings.addEventListener('click', function(event) {
                newDiv = document.createElement('div');
                newDiv.innerHTML = insertDIV;
                document.body.appendChild(newDiv); 
                const customButton = document.getElementById("customButton___");
                customButton.addEventListener('click', function(event) {
                    const messageContainer = document.getElementById("messageContainer");
                    messageContainer.innerHTML = "Button Clicked!";
                    event.preventDefault();
                    document.body.removeChild(newDiv);
                });
            });
        }, 10);
    });
}

// Initialize the function to inject content when the page loads
init();