// Pause other videos when a tab is activated
browser.tabs.onActivated.addListener(activeInfo => {
  browser.tabs.query({}, tabs => {
    tabs.forEach(tab => {
      if (tab.id === activeInfo.tabId) {
        // Send message to play video on the active tab
        browser.tabs.sendMessage(tab.id, { action: "playVideo" });
      } else {
        // Send message to pause videos on all other tabs
        browser.tabs.sendMessage(tab.id, { action: "pauseVideo" });
      }
    });
  });
});
