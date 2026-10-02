const notes = document.getElementById("notes");
const pfp = document.getElementById("pfp");
const cont = document.getElementById("container");
const bck_btn = document.getElementById("bck_btn");
const cover = document.getElementById("cover");
const cover1 = document.getElementById("cover1");

document.body.addEventListener("click", function () {
    const audio = document.getElementById("bg-music");
    audio.play();
});

bck_btn.addEventListener("click", () => {
    bck_btn.style.display = "none";
    cover.classList.remove("note");
    cover1.classList.remove("pfp");
    cont.style.display = "flex";
});

notes.addEventListener("click", () => {
    cover.classList.add("note");
    cover1.classList.remove("pfp");
    cont.style.display = "none";
    bck_btn.style.display = "block";
});

pfp.addEventListener("click", () => {
    cover1.classList.add("pfp");
    cover.classList.remove("note");
    cont.style.display = "none";
    bck_btn.style.display = "block";
});


var not1 = `Happy Boyfriend’s Day to Manu ❤️🥹. Kharch sangaycha zhala tr tu mazhya life madhla ek asa person ahes jyachya presence mule mazhya life la ek veglach meaning aala ahe. Tu mazhya sobat ahes, mazhya chotya chotya goshti notice kartos, mazhya mood cha vichar kartos ani mala kahi zala ki saglyat aadhi tu care kartos, he sagla mazya sathi khup special ahe. Kadhikadhi mala words ch kami padtat tula sangayla ki tu mazhyasathi exactly kiti important ahes. Tu fakt maza boyfriend nahiyes Manu, tu maza comfort person ahes, maza favourite person ahes ani asa person ahes jyachya sobat mi without any hesitation swatahsarkhi rahu shakte. ❤️`;
var not2 = `Tujhi saglyat jast ji gosht mala avadte na ti mhanje tu mazhya sathi jevdha caring ahes te. Mi happy asel tr tu happy hoto, mi upset asel tr tu mala samjun ghyaycha try kartos, mi kahi bolle nahi tari kahi tari wrong ahe he tu notice kartos. Kadhikadhi mi unnecessary chidte, tuzya vr ragavte, tuzha khup jast traas dete 😂😭 pan tarihi tu mala samjun ghyaycha try kartos. Ani honestly Manu, he mazya sathi khup motha thing ahe. Tujhya sobat astana mala ek veglach comfort feel hoto, jasa kahi kahi hi zala tari ek person ahe jo mazhya side la ahe. Tujha ha care, tuzha patience ani tuzha prem mi kadhi hi take for granted nahi karnar. 🥹❤️`;
var not3 = `Aplya relationship madhle sagle moments mazhya sathi khup special ahet. Aplya calls, random conversations, stupid jokes, ekmekanna chidavna, choti choti bhandana ani nantar parat ekmekanshi bolayla lagna 😂❤️ he sagla mala khup precious vatata. Aplyat sagla perfect nasel, kahi vela aplyat misunderstandings hotil, arguments hotil, pan still mala aplyabaddal ek gosht khup avadte ki apan ekmekanna samjun ghyaycha try karto. Mala perfect relationship nahi pahije Manu, mala fakt asa relationship pahije jithe apan ekmekansobat genuine rahu, ekmekanna support karu ani together khup sundar memories create karu. Ani ho, mi tula kiti hi irritate kela tari ek gosht lakshat thev—mi tula titkach jast love pan karte. 😭❤️`;
var not4 = `So today, on Boyfriend’s Day, I just want to say THANK YOU Manu. ❤️ Thank you mazhya life madhe alyabaddal, mala itka prem dilyabaddal, mazhya stupid moods handle kelyabaddal, mazhya chotya chotya goshtinchi care kelyabaddal ani saglyat important mhanje mala "me" asnyachi space dilyabaddal. Mala ajun khup memories tuzya sobat create karaychya ahet, ajun khup hasaychay, ajun khup bhandaychay, ekmekanna irritate karaychay ani parat parat ekmekanna choose karaychay. 🥹❤️ Tu mazhya life madhla ek khup beautiful part ahes Manu, ani tu mazhyasathi kiti special ahes he mi words madhe kadhi completely explain nahi karu shaknar. Happy Boyfriend’s Day Manu ❤️ I love you sooo muchhh. 🫶🏻❤️.`;



var notess = [not1, not2, not3, not4];
const note = document.getElementById("note");
note.innerText = notess[0];


const per = document.getElementById("per");
const nex = document.getElementById("next");

nex.addEventListener("click", () => {
    if (note.innerText == notess[0]) {
        note.innerText = notess[1];
    } else if (note.innerText == notess[1]) {
        note.innerText = notess[2];
    } else if (note.innerText == notess[2]) {
        note.innerText = notess[3];
    } else if (note.innerText == notess[3]) {
        note.innerText = notess[0];
    } else {
        return;
    }
});

per.addEventListener("click", () => {
    if (note.innerText == notess[0]) {
        note.innerText = notess[3];
    } else if (note.innerText == notess[3]) {
        note.innerText = notess[2];
    } else if (note.innerText == notess[2]) {
        note.innerText = notess[1];
    } else if (note.innerText == notess[1]) {
        note.innerText = notess[0];
    } else {
        return;
    }
});

var imgs = document.getElementsByClassName("pth");
let flag = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = () => {
        imgs[i].style.transition = "transform 0.25s ease";
        if (flag == 0) {

            for (let j = 0; j < imgs.length; j++) {
                if (j != i) {
                    imgs[j].style.filter = "blur(10px)";
                }
            }

            imgs[i].style.zIndex = "50";
            imgs[i].style.transform = "scale(1.5)";
            imgs[i].style.position = "absolute";
            imgs[i].style.top = "50%";
            imgs[i].style.left = "40%";

            flag = 1;
        }
        else {

            for (let j = 0; j < imgs.length; j++) {
                imgs[j].style.filter = "none";
            }

            imgs[i].style.transform = "scale(1)";
            flag = 0;
            imgs[i].style.position = "relative";
            imgs[i].style.top = "";
            imgs[i].style.left = "";
            imgs[i].style.zIndex = "0";
        }
    }
}
