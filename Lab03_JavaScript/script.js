const sounds = {
    'a': 'sounds/kick.wav',
    's': 'sounds/boom.wav',
    'd': 'sounds/clap.wav',
    'f': 'sounds/tom.wav',
    'g': 'sounds/hihat.wav',
    'h': 'sounds/openhat.wav',
    'j': 'sounds/ride.wav',
    'k': 'sounds/snare.wav'
};

let recordings = [[], [], [], []];
let isRecording = false;
let currentChannel = -1;

document.addEventListener('keydown', event => {
    const sound = sounds[event.key];
    if (sound) {
        playSound(sound);
        if (isRecording) {
            recordings[currentChannel].push({
                sound,
                time: Date.now()
            });
        }
    }
});

const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
};

const startRecording = (channel) => {
    isRecording = true;
    currentChannel = channel;
    recordings[channel] = [];
    console.log(`Started recording on channel ${channel + 1}`);
};

const stopRecording = () => {
    isRecording = false;
    currentChannel = -1;
    console.log('Stopped recording');
};

const playChannel = (channel) => {
    if (!recordings[channel].length) return;
    const startTime = recordings[channel][0].time;
    recordings[channel].forEach(note => {
        const delay = note.time - startTime;
        setTimeout(() => playSound(note.sound), delay);
    });
};

const playAll = () => {
    recordings.forEach(channel => {
        if (!channel.length) return;
        const startTime = channel[0].time;
        channel.forEach(note => {
            const delay = note.time - startTime;
            setTimeout(() => playSound(note.sound), delay);
        });
    });
};

document.querySelectorAll('.record-channel').forEach(button => {
    button.addEventListener('click', () => startRecording(button.dataset.channel));
});

document.querySelector('.stop-recording').addEventListener('click', stopRecording);

document.querySelectorAll('.play-channel').forEach(button => {
    button.addEventListener('click', () => playChannel(button.dataset.channel));
});

document.querySelector('.play-all').addEventListener('click', playAll);