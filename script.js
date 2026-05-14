const app = document.getElementById("app");

let yesScale = 1;
let teaseIndex = 0;

const teaseTexts = [
  "Noooo 😅",
  "Why nigga 🥺",
  "We’d be a twin 💕",
  "Are you serious?? 💔",
  "That’s kinda mean bitch 😭",
  "Okay now you are pissing me😒"
];

function hearts(type,count=8){
  for(let i=0;i<count;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.innerText= type==="yes" ? "💗" : "💔";
    h.style.left=Math.random()*90+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
}

/* ---------- HOME ---------- */

function home(){
  app.innerHTML=`
  <div class="container">
    <h2>Fatima..😭A little gift from my hands to yours</h2>
    <p class="sub">Care for a look??</p>
    <div class="gif-box">
      <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eGxjbDAwcGZpdjhzeGhqZW52dGdmenBqcmdrZnR4b3d1MnJpZGhvayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/f82EqBTeCEgcU/giphy.gif" alt="cute gif">
    </div>
    <div class="buttons">
      <button class="yes" onclick="goodGirl()">YES</button>
      <button class="no" onclick="howDare()">NO</button>
    </div>
  </div>`;
}

/* ---------- GOOD GIRL ---------- */

function goodGirl(){
  hearts("yes",10);
  app.innerHTML=`
  <div class="container">
    <h2>That's my goodgirl 😆💕</h2>
    <div class="gif-box">
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzF5bmN3cmFxeGw1bjVzd2c2dGdicHFsNm9mbWs1bW16cWN0Zmg5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif" alt="good girl gif">
    </div>
    <div class="next-square" onclick="valentine()">NEXT</div>
  </div>`;
}

/* ---------- VALENTINE ---------- */

function valentine(){
  yesScale=1;
  teaseIndex=0;
  app.innerHTML=`
  <div class="container">
    <h2>I want to grow old with you and look back on a lifetime of us. Will you be my person?😣🩵🖤</h2>
    <p class="sub">Our late-night talks are filled with promises I intend to spend a lifetime keeping
    </p>
    <div class="gif-box">
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm13cDNjdjVxNzFhMzg1Nnp3YWUyMXptZzRzeTVicWJ3OTVhanE5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rwIhv4q1hNerNOQS3l/giphy.gif" alt="forever valentine gif">
    </div>
    <div class="buttons">
      <button class="yes" id="yesBtn" onclick="truck()">Yes, forever 💘</button>
      <button class="no" id="noBtn">Noooo 😅</button>
    </div>
  </div>`;

  const yes=document.getElementById("yesBtn");
  const no=document.getElementById("noBtn");

  function grow(){
    yesScale+=0.12;
    yes.style.transform=`scale(${yesScale})`;
    no.innerText=teaseTexts[++teaseIndex % teaseTexts.length];
    hearts("yes",2);
    if(yesScale>1.8){ no.style.display="none"; }
  }

  no.addEventListener("touchstart",grow);
  no.addEventListener("mouseenter",grow);
}

/* ---------- HOW DARE ---------- */

function howDare(){
  hearts("no",10);
  app.innerHTML=`
  <div class="container">
    <h2 style="color:#b71c1c">HOW DARE YOU! RETRY IT</h2>
    <div class="gif-box">
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Q3eXE5NW5hMHRlMnMwNGZxNW90OW5hZTE3dGh3ODdmYzd1NXk2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTzh3zw4mj1XpjjiIb/giphy.gif" alt="how dare gif">
    </div>
    <button class="small-btn" onclick="home()">TRY AGAIN</button>
  </div>`;
}

/* ---------- TRUCK ---------- */

function truck(){
  hearts("yes",12);
  
  app.innerHTML=`
  <div class="container">
    <h2>Just a little something special, for someone special💝</h2>
    <div class="gif-box">
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJ5amk2MHFubDNhaGRmNGFjN3ptem1wdGo0Nm90dDc3czB4eWFnMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IglOWGsDF1sbQ2ROeK/giphy.gif" alt="truck of gifts gif">
    </div>
    <button class="small-btn" onclick="gifts()">NEXT</button>
  </div>`;
}

/* ---------- GIFTS PAGE ---------- */

function gifts(){
  app.innerHTML=`
  <div class="container scrollable">
    <h2>A bouquet fades..so I grew you a garden instead🥰</h2>

    <div class="gifts-vertical">

      <div class="gift" onclick="gift1()">
        <div class="gift-gif">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGExNjgyMHVuaXBoc2xoazl3ZmdodGdyaDNyYmp6d3pyaDIxejl2eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qFmdpUKAFZ6rMobzzu/giphy.gif" alt="gift 1 gif">
        </div>
        <div class="gift-title">Gift 1✨💍</div>
      </div>


      <div class="gift" onclick="gift2()">
        <div class="gift-gif">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemp4b2NiangwdmcxcHZuMDU1Znd0Y3FjNDJmazg3amw5M213emhvcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vayfi2tm5eVrO/giphy.gif" alt="gift 2 gif">
        </div>
        <div class="gift-title">Gift 2🌷🌹</div>
      </div>


      <div class="gift" onclick="gift3()">
        <div class="gift-gif">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJ5amk2MHFubDNhaGRmNGFjN3ptem1wdGo0Nm90dDc3czB4eWFnMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/02JqfIpASt0GlKQ4Zi/giphy.gif" alt="gift 3 gif">
        </div>
        <div class="gift-title">Gift 3😝</div>
      </div>


      <div class="gift" onclick="gift4()">
        <div class="gift-gif">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJjdTBvMWVzNDE2dzBvbmJxM2lpbG0wMWNzdDkxNmRhdTFxNGljcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ed8DSUeYGBq4E/giphy.gif" alt="gift 4">
        </div>
        <div class="gift-title">Gift 4👉🏻👈🏻</div>
      </div>

    </div>

    <button class="small-btn return-fixed" onclick="truck()">
      Return
    </button>
  </div>`;
}


/* ---------- GIFT 1 ---------- */

function gift1(){
  hearts("yes",10);
  app.innerHTML=`
  <div class="container">
    <h2>Words from my soul(*/ω＼*)</h2>
    <p class="sub">
      I know you’re confused rn, and honestly I think your heart and mind are fighting each other 😭 But I want you to know         something genuinely… I’m not here to hurt you, I swear. I like talking to you, I like understanding you, even your             weird moods bwhahahaha and overthinking moments. And yeah i wanna be in a relationship with you.. date to marry               ofc.. And yeah… I LOVE YOU ITS NOT MESUREABLE...MWAHHHHHHHH💖
    </p>
    <button class="small-btn" onclick="gifts()">Return</button>
  </div>`;
}

/* ---------- GIFT 2 ---------- */

function gift2(){
  hearts("yes",10);
  app.innerHTML=`
  <div class="container">
    <h2>Garden for you 💐</h2>
    <div class="gif-box">
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQwZDhtdHN5YXlicTBhcHA2ejI2cTAyNGcycGY4MTluaHd4d2ZyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aSYON5u8MGpjs4Llrw/giphy.gif" alt="bouquet for you gif">
    </div>
    <p class="bouquet-text">
      They say 'A rose by any other name would smell as sweet' but no flower could ever match the sweetness of you. If I were there...I’d give you a dozen roses and a kiss..and that would be enough...But from here..a dozen felt like a drop in the ocean..I’ve let my love grow into something much bigger a whole garden where every color of rose blooms at once..just for you...Every time I remember our calls and the promises I’ve made..another bud opens...It’s a garden that doesn’t wither with the seasons...Consider this my 'forever' gift until I can be there to hand deliver those roses you love..I’m showing up for you every day..tending to this garden until we can walk through it together..
    </p>

    <button class="small-btn" onclick="gifts()">Return</button>
  </div>`;
}

/* ---------- GIFT 3 ---------- */
function gift3(){
  hearts("yes",10);
  app.innerHTML=`
  <div class="container">
    <h2>I’M YOUR GIFT (^///^)</h2>

    <div class="gif-box">
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWgyeWJhc3dscnN4aGJmYjVmaXZscWpmcnkzd3ZrNXdkN3Vxejk0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wrBURfbZmqqXu/giphy.gif">
    </div>

    <p class="gift-text">
      This might feel a bit vast, but the gift I’m giving you is one that never runs out. It’s not an object that fades.. it’s my time.. my growth.. and every heartbeat of my care...It’s the promise that when things get hard.. I’ll be there..and when things are beautiful..I’ll be there too..I don't have a box big enough to hold the love I carry for you.. nor a ribbon strong enough to tie down my feelings...So instead..I’m giving you my word and my life,  commitment to keep choosing you..every single day..without fail
     </p>
    <button class="small-btn" onclick="gifts()">Return</button>
  </div>`;
}


/* ---------- GIFT 4 ---------- */

function gift4(){
  hearts("yes",10);
  app.innerHTML=`
  <div class="container">
    <h2>Us in Every Universe 😙💫</h2>

    <div class="slides" id="slides">
      <div class="slide">
         <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDM3bzlmcHA5bjMwZ3p5ajZ6MDFjNDg1MnBrcHQ0Z2lobDRnZjlwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4FOettCbTXpUj6uASx/giphy.gif" alt="us marvel 1">
      </div>
      <div class="slide">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHY2cmkzaHpmeGYzZ2E2bDdnczYyeG16MzNlamYzbWtlaXd1bGRtYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DhByPdqgBSPUms4NIW/giphy.gif" alt="us marvel 2">
      </div>
      <div class="slide">
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHB4cXdtMzEybHlyODUyMmZpczR0ZHY0cnNwamxhN2c2eW5iM2l4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vlnuSbL956RKjGYMEQ/giphy.gif" alt="us marvel 3">
      </div>
      <div class="slide">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWJpcnU0bGs4ejl1emFkZnRjem00MndiM3ltNmUyM3B0a2RobWQzcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mmPgxbuPiwCQg/giphy.gif" alt="us marvel 4">
      </div>
    </div>


    <div class="dots" id="dots"></div>

    <button class="small-btn" onclick="gifts()">Return</button>
  </div>`;

  setTimeout(initSlider, 50);
}


/* ---------- FINAL ---------- */

home();
function initSlider(){
  const slides = document.getElementById("slides");
  const slider = document.getElementById("slider");
  const dotsWrap = document.getElementById("dots");

  const total = slides.children.length;
  let index = 0;
  let startX = 0;
  let endX = 0;

  // Create dots
  dotsWrap.innerHTML = "";
  for(let i=0;i<total;i++){
    const dot = document.createElement("span");
    if(i===0) dot.classList.add("active");
    dotsWrap.appendChild(dot);
  }
  const dots = dotsWrap.children;

  function update(){
    slides.style.transform = `translateX(-${index * 100}%)`;
    [...dots].forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  slider.addEventListener("touchstart", e=>{
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e=>{
    endX = e.changedTouches[0].clientX;

    if(startX - endX > 50 && index < total-1) index++;
    if(endX - startX > 50 && index > 0) index--;

    update();
  });

  update();
}
