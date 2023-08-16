let progress = document.getElementById('progress')
let audio = document.getElementById('song')

let ctrIcon = document.getElementById('ctrIcon')
let timeStart = document.querySelector('.start-time')
let timeStop = document.querySelector('.end-time')
let title = document.querySelector('.title-sound')
let dialog = document.querySelector('.dialog-window')
let dialog1 = document.querySelector('.dialog-window1')
let currentMusic = 0
let audio1 = document.querySelector('.audio')
let audio2 = document.querySelector('.audio1')
let my_img = document.querySelector('.my-img')
let count_audio = document.getElementById('count')



function start_fire_audio(){
    dialog.showModal()
    audio1.play()
    audio.pause()
    
}
function start_fire_audio1(){
    dialog1.showModal()
    audio2.play()
    audio.pause()
    my_img.classList.remove('root')
    
}
function close_fire_audio(){
    dialog.close()
    dialog1.close()
    audio1.pause()
    audio2.pause()
    my_img.classList.remove('root')
}

window.addEventListener('load', () => {
    loadFile(currentMusic)
    let a = songs.length
    count_audio.innerText = `Кількість пісень:  ${a}`
})

loadFile = (i) => {
    let sound = songs[i]
    progress.value = 0
    song.src = `audio/${sound.name}`
    currentMusic = i;
    title.innerText = sound.name;
    
    setTimeout(() => {
        progress.max = audio.duration;
        timeStop.innerHTML = formatTime(audio.duration);
    }, 1000);


}
function play() {
    audio.play()
    timeStop.innerText = formatTime(audio.duration)
    my_img.classList.add('root')
    
}

function pause() {
    audio.pause()
    my_img.classList.remove('root')
}
setInterval(() => {  
    
    if (song.currentTime == song.duration) {
        timeStart.innerText = '00:00'
        forward_sound()
        return;
    }
    
    progress.value = audio.currentTime;
    timeStart.innerText = formatTime(audio.currentTime);

}, 500);

function forward_sound() {
    if (currentMusic < songs.length - 1) {
        currentMusic++;
        loadFile(currentMusic)
        play()
    }
    else {
        currentMusic = 0
    }

}
function prevous_sound() {
    if (currentMusic > 0)
        currentMusic--;
        loadFile(currentMusic)
        play()
}

function formatTime(time) {
    let min = Math.floor(time / 60);
    min = min < 10 ? "0" + min : min;
    let sec = Math.floor(time) % 60;
    sec = sec < 10 ? "0" + sec : sec;
    return `${min}:${sec}`;
}
function select_fire(){
    document.location.href = 'fire.html'
}
// ###################################################
window.onload = function () {
    var firework = JS_FIREWORKS.Fireworks({
        id : 'fireworks-canvas',
        hue : 120,
        particleCount : 50,
        delay : 0,
        minDelay : 20,
        maxDelay : 40,
        boundaries : {
            top: 50,
            bottom: 240,
            left: 50,
            right: 590
        },
        fireworkSpeed : 5,
        fireworkAcceleration : 1.05,
        particleFriction : .95,
        particleGravity : 1.2
    });
    firework.start();
};
  
