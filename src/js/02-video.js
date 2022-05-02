import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedPlayerTime = +localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds)
}, 1000));

player.setCurrentTime(savedPlayerTime).then(function() {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});