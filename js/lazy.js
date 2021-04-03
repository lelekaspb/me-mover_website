// lazy load the background video

const lazyVideo = document.querySelector("video#video-bg");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-50px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((video) => {
    console.log(video.target.children);
    if (video.isIntersecting) {
      for (const source in video.target.children) {
        const videoSource = video.target.children[source];
        if (
          typeof videoSource.tagName === "string" &&
          videoSource.tagName === "SOURCE"
        ) {
          videoSource.src = videoSource.dataset.src;
        }
      }
      video.target.load();
      observer.unobserve(video.target);
    }
  });
}, options);

observer.observe(lazyVideo);
