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
    stopAudio()

    if (el.target.closest('button')) {
        let soundId = keysSounds[el.target.id]
        if (soundId) document.getElementById(soundId).play()

    }
})

document.addEventListener('keydown', function(event) {
    stopAudio()
    let soundId = keysSounds[event.code]
    if (soundId) document.getElementById(soundId).play()
})