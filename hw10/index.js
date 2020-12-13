let keysSounds = {
    p: 'piano',
    g: 'guitar',
    d: 'drum',
    c: 'conga_tap',
    b: 'cymbal',
    l: 'shake',
    h: 'synt_down',
    m: 'synt_up',
}

document.querySelector('.button-wrapper').addEventListener('click', function(el) {
    if (el.target.closest('button')) {
        let soundId = keysSounds[el.target.id]
        if (soundId) document.getElementById(soundId).play()

    }
})

document.onkeydown = function(el) {
    let soundId = keysSounds[el.key];
    if (soundId) document.getElementById(soundId).play()
}