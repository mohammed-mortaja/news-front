let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.getElementById('mainVideoElement');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        document.querySelectorAll('.date').forEach(dateElement => {
            dateElement.style.display = 'block';
        });
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            mainVideo.setAttribute('autoplay', true);
            mainVideo.setAttribute('controls', true);
            document.querySelector('.play-vid').style.display = 'none'; // Hide play-vid
            let dateElement = video.querySelector('.date');
            if (dateElement) {
                dateElement.style.display = 'none';
            }
        }
    };
});



mainVideo.onclick = () => {
    if (mainVideo.paused) {
        const firstVideo = listVideo[1];
        firstVideo.classList.add('active');
        mainVideo.setAttribute('autoplay', true);
        mainVideo.setAttribute('controls', true);
        mainVideo.muted = false;

        document.querySelector('.play-vid').style.display = 'none'; // Hide play-vid
    }  else {
        mainVideo.removeAttribute('autoplay');
        mainVideo.removeAttribute('controls');
       
    }
};   


