chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'buttonClicked') {
      console.log('Message from content script:', message.message);
      sendResponse({ status: 'Updated cookie' });
  }
});