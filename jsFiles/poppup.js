function togglePopup(id) {
    var blur = document.getElementById('blur1');
    blur.classList.toggle('active');
    var blur = document.getElementById('blur2');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
    var scrollbtn = document.getElementById('scrollbtn');
    scrollbtn.classList.toggle('active')
    var bodyScroll = document.querySelector("body");
    bodyScroll.classList.toggle('popupActive')


    var EveName = document.getElementById("EveName");
    var EveImg = document.querySelectorAll(".inner");

    switch (id) {
        case "SF":
            EveName.innerHTML = "Street Forward";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/dance/street-forward.png')";
            }
            break;

        case "SD":
            EveName.innerHTML = "So-Duet";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/dance/so-duet.png')";
            }
            break;

        case "SW":
            EveName.innerHTML = "Swa(g)Desi";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/dance/swagdesi.png')";
            }
            break;
        case "NG":
            EveName.innerHTML = "Nrityangana";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/dance/nrityangana.png')";
            }
            break;
        case "LL":
            EveName.innerHTML = "Limelight";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/drama/limelight.png')";
            }
            break;
        case "AS":
            EveName.innerHTML = "Artiskit";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/drama/artiskit.png')";
            }
            break;
        case "SS":
            EveName.innerHTML = "Suno Suno";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/drama/suno-suno.png')";
            }
            break;
        case "DD":
            EveName.innerHTML = "Doodly Doo";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/anc/doodly-do.png')";
            }
            break;
        case "CK":
            EveName.innerHTML = "Cirकला";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/anc/cirkala.png')";
            }
            break;
        case "GOS":
            EveName.innerHTML = "Game of Shades";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/anc/game-of-shades.png')";
            }
            break;
        case "CS":
            EveName.innerHTML = "Color Splash";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/anc/color-splash.png')";
            }
            break;
        case "GP":
            EveName.innerHTML = "Graphix";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/anc/graphix.png')";
            }
            break;
        case "BO":
            EveName.innerHTML = "Box Office";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/camera/box-office.png')";
            }
            break;
        case "LA":
            EveName.innerHTML = "Lens Art";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/camera/lens-art.png')";
            }
            break;
        case "BOJ":
            EveName.innerHTML = "Battle of DJ's";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/music/battle-of-djs.png')";
            }
            break;
        case "SVN":
            EveName.innerHTML = "Saavani";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/music/saavani.png')";
            }
            break;
        case "ST":
            EveName.innerHTML = "Stay Tuned";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/music/stay-tuned.png')";
            }
            break;
        case "PN":
            EveName.innerHTML = "Poona-05";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/music/poona-05.png')";
            }
            break;
        case "HC":
            EveName.innerHTML = "High Current";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/music/high-current.png')";
            }
            break;
        case "AEB":
            EveName.innerHTML = "Andaaz-E-Bayaan";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/shoutout/andaaz-e-bayaan.png')";
            }
            break;
        case "TT":
            EveName.innerHTML = "Tale Teller";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/shoutout/tale-teller.png')";
            }
            break;
        case "KK":
            EveName.innerHTML = "ComiKing";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/shoutout/comiking.png')";
            }
            break;
        case "VA":
            EveName.innerHTML = "Vers-atile";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/shoutout/versatile.png')";
            }
            break;
        case "AD":
            EveName.innerHTML = "Anecdote";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('./images/shoutout/anecdote.png')";
            }
            break;
        default:
            EveName.innerHTML = "Event Name";
            break;
    }
}