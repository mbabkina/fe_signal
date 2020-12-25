const keysSounds = {
    KeyP: 'piano',
    KeyG: 'guitar',
    KeyD: 'drum',
    KeyC: 'conga_tap',
    KeyB: 'cymbal',
    KeyL: 'shake',
    KeyH: 'synt_down',
    KeyM: 'synt_up',
}

const soundsList = Object.values(keysSounds)
const stopAudio = () => soundsList.forEach((sound) => document.getElementById(sound).pause())

document.querySelector('.button-wrapper').addEventListener('click', function(el) {

    if (el.target.closest('button')) {
        let soundId = keysSounds[el.target.id]
        stopAudio()
        document.getElementById(soundId).currentTime = 0
        if (soundId) document.getElementById(soundId).play()

    }
})

document.addEventListener('keydown', function(event) {
    let soundId = keysSounds[event.code]
    stopAudio()
    document.getElementById(soundId).currentTime = 0
    if (soundId) document.getElementById(soundId).play()
})