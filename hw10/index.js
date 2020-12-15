let keysSounds = {
    KeyP: 'piano',
    KeyG: 'guitar',
    KeyD: 'drum',
    KeyC: 'conga_tap',
    KeyB: 'cymbal',
    KeyL: 'shake',
    KeyH: 'synt_down',
    KeyM: 'synt_up',
}

document.querySelector('.button-wrapper').addEventListener('click', function(el) {
    if (el.target.closest('button')) {
        let soundId = keysSounds[el.target.id]
        if (soundId) document.getElementById(soundId).play()

    }
})

document.addEventListener('keydown', function(event) {
    let soundId = keysSounds[event.code];
    if (soundId) document.getElementById(soundId).play()
})