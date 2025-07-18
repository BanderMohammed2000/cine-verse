<template>
  <section id="about">
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-lg-5 my-auto">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                About <span class="light-pink-color">Us</span>
              </h4>
              <p class="card-text mt-3">
                CineVerse is a simple and easy-to-use platform made for everyone
                who loves movies. Here, you can explore a wide variety of films
                including top-rated titles, the newest releases, and many other
                popular picks. Each movie comes with useful details like its
                rating, release year, short description, and more, all in one
                place. Our goal is to make it easier for you to find great
                movies to watch, whether you're in the mood for something
                trending or want to go back to a classic. We also have a
                dedicated news section where you can read about the latest
                updates from the movie world, including new releases, upcoming
                projects, and industry highlights. CineVerse is not just about
                listing movies, it’s about helping you enjoy and follow the
                world of cinema in a fun and organized way.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="row mt-5 mt-lg-0">
            <div class="col-12 mb-2">
              <div class="video-1 media">
                <h4>Bad <span class="light-pink-color">Boys 4</span></h4>
                <div class="play-icon">
                  <img src="/icons/play.png" alt="play-icon" />
                </div>
                <video
                  muted
                  loop
                  playsinline
                  poster="/images/movies/bad-boys-4-poster.jpg"
                  @click="playVideo"
                >
                  <source src="/videos/bad-boys-trailer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div class="col-md-6 mb-2 mb-md-0">
              <div class="video-2 media">
                <h4>Gladiator <span class="light-pink-color">2</span></h4>
                <div class="play-icon">
                  <img src="/icons/play.png" alt="play-icon" />
                </div>
                <video
                  muted
                  loop
                  playsinline
                  poster="/images/movies/gladiator-2-poster.jpg"
                  @click="playVideo"
                >
                  <source
                    src="/videos/gladiator2-trailer.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div class="col-md-6">
              <div class="video-3 media">
                <h4>Deadpool <span class="light-pink-color">3</span></h4>
                <div class="play-icon">
                  <img src="/icons/play.png" alt="play-icon" />
                </div>
                <video
                  muted
                  loop
                  playsinline
                  poster="/images/movies/deadpool-3-poster.jpg"
                  @click="playVideo"
                >
                  <source
                    src="/videos/deadpool3-trailer.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    playVideo(e) {
      const media = e.target.offsetParent;
      let isPlaying = !e.target.paused;
      if (!isPlaying) {
        media.children[0].style.display = "none";
        media.children[1].style.display = "none";
        e.target.play();
      } else {
        media.children[0].style.display = "";
        media.children[1].style.display = "";
        e.target.load();
      }
    },
  },
};
</script>

<style scoped>
section#about {
  background-color: #0f152b;
}
.card {
  border: 0;
  background-color: transparent;
  color: var(--secondary-color);
}
.card-body {
  /* padding-left: 0; */
  padding: 0;
}
.card-title {
  /* width: 390px; */
  /* font-weight: 500; */
}
.card-text {
  /* color: #6d6d6d; */
  /* width: 85%; */
  opacity: 0.7;
  font-size: 15px;
}
.media {
  position: relative;
}
.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
}
.media video {
  width: 100%;
  border-radius: 8px;
  /* max-height: 200px; */
  height: 200px;
  object-fit: cover;
  cursor: pointer;
}
.video-1 video {
  /* border: 1px solid var(--dark-teal); */
}
.media h4 {
  color: var(--secondary-color);
  margin: 0;
  position: absolute;
  font-weight: 700;
  scale: 1.3;
}
.video-2 video {
  width: 100%;
}

.video-2 h4,
.video-3 h4 {
  bottom: 30px;
  left: 55%;
  transform: translateX(-50%);
}

@media (min-width: 767.98px) {
  .video-1 h4 {
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    /* font-size: 30px; */
  }
  .video-2 h4,
  .video-3 h4 {
    font-size: 18px;
  }
}

@media (max-width: 767.98px) {
  .video-1 h4 {
    bottom: 30px;
    left: 55%;
    transform: translate(-50%, 0);
    /* font-size: calc(1.275rem + 0.3vw); */
  }
}

@media (max-width: 575.98px) {
  .video-1 h4,
  .video-2 h4,
  .video-3 h4 {
    font-size: 17px;
  }
}
</style>
