function pauseAllVideos() {
    let videos = document.getElementsByTagName("video");
    for (let video of videos) {
      if (!video.paused) {
        video.pause();
      }
    }
  }
  
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "pauseVideo") {
      pauseAllVideos();
    }
  });
  