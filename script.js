
    function startDownload() {
      const progressBar = document.getElementById("progress-bar");
      let progress = 0;

      const intervalId = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) {
          clearInterval(intervalId);
        } else {
          progressBar.style.width = `${progress}%`;
        }
      }, 500);
    }
 