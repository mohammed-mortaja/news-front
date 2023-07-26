var  controls = [
  'play-large',
  'play',
  'progress',
  'current-time',
  'mute',
  'volume',
  'captions',
  // 'download', // زر التحميل
  'settings',
  'pip',
  'airplay',
  'fullscreen'
];

const player1 = new Plyr('#player1', {
  controls,
  title: 'Example Title',
  quality: {
      default: 576,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
  }
});


let listVideo = document.querySelectorAll('.video-list .vid');
// const mainVideo = document.querySelector('.main-video');

listVideo.forEach(video => {
  video.onclick = () => {
      listVideo.forEach(vid => vid.classList.remove('active'));
      video.classList.add('active');
      document.querySelectorAll('.date').forEach(dateElement => {
          dateElement.style.display = 'block';
      });
      if (video.classList.contains('active')) {
          let dateElement = video.querySelector('.date');
          if (dateElement) {
              dateElement.style.display = 'none';
          }
      }
      const videoSrc = video.getAttribute('data-src');
      if (videoSrc) {
          player1.source = {
              type: 'video',
              sources: [
                  {
                      src: videoSrc,
                      provider: 'youtube', 
                  },
              ],
          };
      }
  };
});

function createPlayer(playerId) {
  const player = new Plyr(playerId, {
      title: 'Example Title',
      controls: [], // Disable all controls
      settings: [],
      fullscreen: false,
      quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
      }
  });

  player.muted = true;
  return player;
}

const videoList = document.querySelectorAll('.video-list .vid');
videoList.forEach((video, index) => {
  const playerId = `#player${index + 2}`;
  window['player' + (index + 2)] = createPlayer(playerId);
});