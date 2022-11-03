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
    var EveDetails = document.getElementById("EveDetails");
    var EveStructure = document.getElementById("EveStructure");
    var EveRules = document.getElementById("EveRules");
    var EveImg = document.querySelectorAll(".inner");

    switch (id) {
        case "SF":
            EveName.innerHTML = "Street Forward";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/dance/street-forward.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>It is a Street style group dance competition.</li> <li>Team Size: Minimum 6 and Maximum 15</li> <li>Entry Fee: INR 600/- per team</li> <li>Styles: Any dance style like hip-hop, popping, tutting, krumping, breakdance, stepping, B-boying, contraptions, western freestyle, etc.</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<h4>Showcase round:</h4>" +"<ul> <li>All teams will perform in front of the judge.</li> <li>Time limit of each performance will be 4 - 7 minutes.</li> </ul>"+"<h4>Final Battle Round:</h4>" + "<ul> <li>The qualified teams from eliminations will face off in the battle round.</li> <li>On-spot tracks will be played by the judges.</li> <li>There are 3 sub rounds: ● Round 01: One participant from each crew will have to perform for 1 minute. ● Round 02: Two participants from each crew will have to perform for 1 minute 10 seconds. ● Round 03: Multiple members from each team will have to perform for 1 minute 30 seconds.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25.</li> <li>Only street dance forms are allowed.</li> <li>The music track should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li> <li>Participants may use more than one song in their performance.</li> <li>Props (except hazardous and dangerous materials) are allowed but will be based on the discretion of the organisers. A list of all the props should be given 7 days prior to the fest. Only the props mentioned in the list are allowed.</li> <li>Following all necessary safety measures is the responsibility of the participants.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> <li>Performance should be confined within the area (10-12 meters in diameter) i.e an open-air venue, with the audience on all sides.</li> </ul>";
            break;
            
        case "SD":
            EveName.innerHTML = "So-Duet";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/dance/so-duet.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>It is an open genre (except classical and folk) solo and duet competition.</li> <li>Team Size: Solo or Duet</li> <li>Registration Fee: Solo: INR 100/- | Duet: INR 200/-</li> <li>Styles permitted: All except Classical and Folk Dance</li> <li>Dates: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" +"<h2>Solo -</h2>" + "<h4>Eliminations:</h4>" +"<ul> <li>The contestants are required to present a 100 seconds dance performance in front of the judges.</li> <li>The participants who get selected, will move to the next round.</li> </ul>"+"<h4>Finals:</h4>" + "<ul> <li>Participants shortlisted for this round will perform in front of the judges.</li> <li>Participants can perform an extended version of their eliminations performance or a new one all together.</li> <li>Time Limit: 2 - 4 minutes including setup time</li> </ul>" + "<br/>" + "    <h2>Duet -</h2>" + "<h4>Eliminations:</h4>" + "<ul><li>The contestants are required to present a 100 seconds dance performance in front of the judges.</li><li>The participants who get selected, will move to the next round.</li> </ul>" + "<h4>Finals:</h4>" + "<ul> <li>Participants shortlisted have to perform an extended version of their eliminations performance or a new one all together.</li> <li>Time Limit: 2 - 4 minutes including setup time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25.</li> <li>Solo and Duets will be judged separately.</li> <li>Classical and Folk dances are not a part of this competition. (Please refer to the rules of the classical dance competition, Nrityangana).</li> <li>Vulgarity and obscenity at any point in the choreography are strictly not allowed.</li> <li>Props (except hazardous and dangerous materials) are allowed. List of all the props should be given 7 days prior to the fest. Only the props mentioned in the list are allowed.</li> <li>The music track for elimination and finals both should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li> <li>Points will be deducted for exceeding the time limit.</li> </ul>";
            break;

        case "SW":
            EveName.innerHTML = "Swa(g)Desi";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/dance/swagdesi.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: 5 - 15 members</li> <li>Registration Fee: 500/-</li> <li>Finals: 22nd - 24th December (specific date will be informed)</li> <li>Venue:COEP Technological University</li> <li>Styles permitted: All styles except Classical and Street dance forms</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<li>The competition will consist of a single round.</li> <li>Time Duration: 6 minutes, including setup time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> <li>Props (except hazardous and dangerous materials) are allowed but will be based on the discretion of the organisers. A list of all the props should be given 7 days prior to the fest. Only the props mentioned in the list are allowed.</li> <li>The music track should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li> <li>Participants may use more than one song in their performance.</li> </ul>";
            break;
        case "NG":
            EveName.innerHTML = "Nrityangana";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/dance/nrityangana.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Registration Fee: 100/-</li> <li>Date: 22nd - 24th December (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<h4>Eliminations:</h4>" +"<ul> <li>The contestants will be given 120 seconds to perform in front of the judges.</li> <li>The selected participants will move to the next round.</li> </ul>"+"<h4>Finals:</h4>" +"<ul> <li>Participants shortlisted have to perform an extended version of their eliminations performance or a new one all together.</li> <li>Time Limit: 3-5 minutes including setup time</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>All types of classical dances are allowed, however different dance forms will not be judged separately.</li> <li>Folk and semi-classical dances are not permitted.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> <li>Props (except hazardous and dangerous materials) are allowed. List of all the props should be given 7 days prior to the fest. Only the props mentioned in the list are allowed.</li> <li>The music track should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li></ul>";
            break;
        case "LL":
            EveName.innerHTML = "Limelight";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/drama/limelight.png')";
            }
            break;
        case "AS":
            EveName.innerHTML = "Artiskit";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/drama/artiskit.png')";
            }
            break;
        case "SS":
            EveName.innerHTML = "Suno Suno";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/drama/suno-suno.png')";
            }
            break;
        case "DD":
            EveName.innerHTML = "Doodly Doo";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/doodly-do.png')";
            }
            break;
        case "CK":
            EveName.innerHTML = "Cirकला";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/cirkala.png')";
            }
            break;
        case "GOS":
            EveName.innerHTML = "Game of Shades";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/game-of-shades.png')";
            }
            break;
        case "CS":
            EveName.innerHTML = "Color Splash";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/color-splash.png')";
            }
            break;
        case "GP":
            EveName.innerHTML = "Graphix";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/graphix.png')";
            }
            break;
        case "BO":
            EveName.innerHTML = "Box Office";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/camera/box-office.png')";
            }
            break;
        case "LA":
            EveName.innerHTML = "Lens Art";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/camera/lens-art.png')";
            }
            break;
        case "BOJ":
            EveName.innerHTML = "Battle of DJ's";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/battle-of-djs.png')";
            }
            break;
        case "SVN":
            EveName.innerHTML = "Saavani";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/saavani.png')";
            }
            break;
        case "ST":
            EveName.innerHTML = "Stay Tuned";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/stay-tuned.png')";
            }
            break;
        case "PN":
            EveName.innerHTML = "Poona-05";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/poona-05.png')";
            }
            break;
        case "HC":
            EveName.innerHTML = "High Current";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/high-current.png')";
            }
            break;
        case "AEB":
            EveName.innerHTML = "Andaaz-E-Bayaan";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/andaaz-e-bayaan.png')";
            }
            break;
        case "TT":
            EveName.innerHTML = "Tale Teller";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/tale-teller.png')";
            }
            break;
        case "KK":
            EveName.innerHTML = "ComiKing";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/comiking.png')";
            }
            break;
        case "VA":
            EveName.innerHTML = "Vers-atile";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/versatile.png')";
            }
            break;
        case "AD":
            EveName.innerHTML = "Anecdote";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/anecdote.png')";
            }
            break;
        default:
            EveName.innerHTML = "Register Now...";
            break;
    }
}