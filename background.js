browser.tabs.onActivated.addListener(activeInfo => {
    browser.tabs.query({}, tabs => {
      tabs.forEach(tab => {
        if (tab.id !== activeInfo.tabId) {
          browser.tabs.sendMessage(tab.id, { action: "pauseVideo" });
        }
      });
    });
  });
  
