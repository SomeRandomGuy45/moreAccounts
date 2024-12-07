
function init() {
    const htmlContent = `
        <div id="robloxCustomContent" style="position: fixed; top: 20px; left: 20px; z-index: 9999; background-color: rgba(255, 255, 255, 0.8); border: 1px solid #ccc; padding: 10px;">
        <h2>Injected HTML</h2>
        <p>This content was injected into the page because you're on Roblox.</p>
        <button id="customButton">Click me!</button>
        <div id="messageContainer" style="margin-top: 10px; font-size: 16px; color: green;"></div>
        </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    document.body.appendChild(div);

    const button = document.getElementById('customButton');
    button.addEventListener('click', function() {
        chrome.runtime.sendMessage({ action: 'buttonClicked', message: 'Button clicked on Roblox page' }, function(response) {
        console.log('Background response:', response.status);
        });
    });
}

init();  