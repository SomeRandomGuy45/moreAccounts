// Define the HTML content that you want to inject into the existing <ul>
const newMenuItems = `<li><a id="buttonCoolness" class="rbx-menu-item account-switch-menu-more-item" href="#">Switch Accounts++</a></li>`;
const insertDIV = `
    <div id="robloxCustomContent" style="position: fixed; top: 20px; left: 20px; z-index: 9999; background-color: rgba(255, 255, 255, 0.8); border: 1px solid #ccc; padding: 10px;">
        <h2>Injected HTML</h2>
        <p>This content was injected into the page because you're on Roblox.</p>
        <button id="customButton___">Click me!</button>
        <div id="messageContainer" style="margin-top: 10px; font-size: 16px; color: green;"></div>
    </div>
`

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function doButtonClick() {
    const button = document.getElementById("buttonCoolness");
    let newDiv = undefined;
    button.addEventListener('click', function(event) {
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
    while (true)
    {
        if (document.getElementById("settings-popover-menu") == undefined) {
            break;
        }
        await delay(1000);
    }
    return
}

async function init() {
    let menu = document.getElementById('settings-popover-menu');

    if (menu == undefined) {
        while (true) {
            menu = document.getElementById('settings-popover-menu');
            if (menu) break;
            console.log("Waiting for the menu to load...");
            await delay(1000);  // Wait for 1 second before checking again. If the menu is not found, it will keep waiting. 1000 milliseconds = 1 second. 1000 milliseconds * 5 = 5 seconds. 1000 milliseconds * 10 = 10 seconds. This will continue until the menu is found. 10 seconds is a reasonable time for the menu to load on most pages. If
    
        }
    }
    menu.innerHTML += newMenuItems;
    await doButtonClick();
    init();
}

// Initialize the function to inject content when the page loads
init();