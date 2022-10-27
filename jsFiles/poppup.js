function togglePopup(id) {
    var blur = document.getElementById('blur1');
    blur.classList.toggle('active');
    var blur = document.getElementById('blur2');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')



    var EveName = document.getElementById("EveName")


    switch (id) {
        case "SF":
            EveName.innerHTML = "Street Forward";
            break;

        case "SD":
            EveName.innerHTML = "So-Duet";
            break;

        case "SW":
            EveName.innerHTML = "Swa(g)Desi";
            break;
        case "NG":
            EveName.innerHTML = "Nrityangana";
            break;
        case "LL":
            EveName.innerHTML = "Limelight";
            break;
        case "AS":
            EveName.innerHTML = "Artiskit";
            break;
        case "SS":
            EveName.innerHTML = "Suno Suno";
            break;
        default:
            EveName.innerHTML = "Event Name";
            break;
    }
}