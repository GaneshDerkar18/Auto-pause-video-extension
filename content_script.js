function pauseAllVideos() {
  let videos = document.getElementsByTagName("video");
  for (let video of videos) {
    if (!video.paused) {
      video.pause();
    }
  }
}

function playAllVideos() {
  let videos = document.getElementsByTagName("video");
  for (let video of videos) {
    if (video.paused) {
      video.play();
    }
  }
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "pauseVideo") {
    pauseAllVideos();
  }
  if (message.action === "playVideo") {
    playAllVideos();
  }
});
