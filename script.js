const sfx = [document.createElement("audio"), document.createElement("audio"), document.createElement("audio"), document.createElement("audio"), document.createElement("audio"), document.createElement("audio")];
const lps = [document.createElement("audio"), document.createElement("audio"), document.createElement("audio"),document.createElement("audio"), document.createElement("audio"), document.createElement("audio")];

var cur_lps = undefined;

function playSFX(sfxId) {
    sfx[sfxId].src = `audio/sound${sfxId}.mp3`;
    sfx[sfxId].play();
    return console.log(sfxId);
};

function cancSFX() {
    for (let sfx_i in sfx) {
        sfx[sfx_i].pause();
        sfx[sfx_i].load()
    }
}

function selectLPS(loopId) {
    lps[loopId].loop = "true";
    try {
        clearCB();
    } catch (error) {
        
    }
    cur_lps = loopId;
    // console.log(loopId);
    return document.getElementsByClassName("loopBtn")[loopId].style.borderColor = "var(--thrd)", document.getElementsByClassName("loopBtn")[loopId].style.color = "var(--thrd)";
};

function ctrlSound(ctrlId) {
    if (ctrlId == 0) { //Start
        lps[cur_lps].src = `audio/loop${cur_lps}.mp3`;
        lps[cur_lps].play()
    }
    else {
        lps[cur_lps].pause();
        lps[cur_lps].load();
        clearCB();
        cur_lps = null;
    }
};

//Utilities
function clearCB() {
var cBtns = document.getElementsByClassName("loopBtn");
    for (let cBtn in cBtns) {
        cBtns[cBtn].style.borderColor = "var(--scnd)";
        cBtns[cBtn].style.color = "var(--scnd)";
    }
};