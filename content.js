// Define the HTML content that you want to inject into the existing <ul>
const newMenuItems = `<a id="buttonCoolness" class="rbx-menu-item account-switch-menu-more-item" href="#">Switch Accounts++</a>`;
const insertDIV = `
<div role="dialog">
  <div class="fade modal-backdrop in"></div>
  <div role="dialog" tabindex="-1" class="fade account-switcher-modal in modal" style="display: block;">
    <div class="modal-sm modal-dialog">
      <div class="modal-content" role="document">
        <div class="account-switcher-header modal-header">
          <button id="closeMeBro" type="button" class="close" title="close">
            <span class="icon-close"></span>
          </button>
          <h4 class="modal-title">Switch Accounts</h4>
        </div>
        <div class="modal-body">
          <div class="section-content modal-section">
            <ul class="account-switcher-list ">
              
              <li class="account-selection-list-item">
                <div class="account-selection" role="button" tabindex="0">
                  <div class="account-switcher-icon-add">
                    <span class="icon-plus"></span>
                  </div>
                  <div class="account-selection-name-container">
                    <p id="addButtonBro" class="account-selection-add-account">Add Account</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
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
                const customButton = document.getElementById("closeMeBro");
                customButton.addEventListener('click', function(event) {
                    event.preventDefault();
                    document.body.removeChild(newDiv);
                });
                const addButton = document.getElementById("addButtonBro");
                addButton.addEventListener('click', function(event) {
                    event.preventDefault();
                    window.location.href = "https://www.roblox.com/login"
                });
            });
        }, 10);
    });
}

// Initialize the function to inject content when the page loads
init();