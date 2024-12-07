function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let menu = undefined;

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log('Received message:', message);
  if (message.action === 'startWorker.robloxBtn') {
      while (true) {
          await delay(1000)
          menu = document.getElementById('settings-popover-menu');
          if (menu == undefined) {
              break;
          }
      }
      
      // Once the loop ends, send a response back to the sender
      sendResponse({ message: 'KILL' });
  }
  
  // Return true to keep the message channel open for asynchronous response
  return true;
});