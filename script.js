const app = document.getElementById("app");

let yesScale = 1;
let teaseIndex = 0;

const teaseTexts = [
  "Noooo 😅",
  "Why babe 🥺",
  "We’d be a good combo 💕",
  "Are you serious?? 💔",
  "That’s kinda mean 😭",
  "Okay now you are pissing me😒"
];

function hearts(type, count = 20){
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
    <h2>Oi radha! i made something for you</h2>
    <p class="sub">you wanna see??</p>
    <div class="gif-box">
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmVmcXViYW12bWxha2kyMmI1MmNwZW1xcTFwMng5bGVicTliMXBrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10Vrg2NcFDoe2Y/giphy.gif">
    </div>
    <div class="buttons">
      <button class="yes" onclick="goodGirl()">YES</button>
      <button class="no" onclick="howDare()">NO</button>
    </div>
  </div>`;
}

/* ---------- GOOD GIRL ---------- */

function goodGirl(){
  hearts("yes",20);
  app.innerHTML=`
  <div class="container">
    <h2>That's my goodgirl 😆💕</h2>
    <div class="gif-box">
      <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZDBkcGxlbnlwbngzMHJzcjJlaXQ5OGpubjd5bGp0OXVrOXl5c2wxcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/od5H3PmEG5EVq/giphy.gif">
    </div>
    <div class="next-square" onclick="valentine()">NEXT</div>
  </div>`;
}

/* ---------- VALENTINE ---------- */

function valentine(){
  yesScale = 1;
  teaseIndex = 0;

  app.innerHTML = `
  <div class="container">
    <h2>Will you be my forever Valentine?😣🩵💚</h2>
    <p class="sub">
      i promise many things😭 refer dm that's all ture tho😭🙏🏻
    </p>
    <div class="gif-box">
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDRwZGJ0NGt5eTM5eXZ3Y3h0eDZjaTMxeDJpeng5czV6ZHh4eHUydCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JSxzmyV7AqeABDQKed/giphy.gif">
    </div>
    <div class="buttons">
      <button class="yes" id="yesBtn">Yes, forever 💘</button>
      <button class="no" id="noBtn">Noooo 😅</button>
    </div>
  </div>`;

  const yes = document.getElementById("yesBtn");
  const no  = document.getElementById("noBtn");

  yes.addEventListener("click", truck);

  function growYes(){
    yesScale = Math.min(yesScale + 0.12, 1.9);
    yes.style.transform = `scale(${yesScale})`;

    teaseIndex++;
    no.innerText = teaseTexts[teaseIndex % teaseTexts.length];

    hearts("yes",2);

    if(yesScale >= 1.9){
      no.style.display="none";
      yes.style.margin="auto";
    }
  }

  no.addEventListener("click", growYes);
  no.addEventListener("touchstart", growYes);
}


/* ---------- HOW DARE ---------- */

function howDare(){
  hearts("no",20);
  app.innerHTML=`
  <div class="container">
    <h2 style="color:#b71c1c">HOW DARE YOU!</h2>
    <div class="gif-box">
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemNudzE1YWp0dXczYnV6dXhzM2pvMGpjZ3o0c282MzZxczIzMzlzNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UsckMQeJIxpva08C9g/giphy.gif">
    </div>
    <button class="small-btn" onclick="home()">TRY AGAIN</button>
  </div>`;
}

/* ---------- TRUCK ---------- */

ffunction truck(){
  hearts("yes",20);
  app.innerHTML=`
  <div class="container">
    <h2>HAVING SOMETHING SPEICAL FOR YOU💝</h2>
    <div class="gif-box">
      <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3anBqZHc3eGY3ZG9iaDQ1aGhxd3RodTF2YzQ3NTNsNmptZTkzbG1ibiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1wmOyZYoGzz003R03Y/giphy.gif">
    </div>
    <button class="small-btn" onclick="gifts()">NEXT</button>
  </div>`;
}

/* ---------- GIFTS PAGE ---------- */

function gifts(){
  app.innerHTML=`
  <div class="dialog">
    <h2>Gifts for you my love🥰</h2>

    <!-- SCROLLABLE CONTENT -->
    <div class="dialog-content">

      <div class="gift" onclick="gift1()">
        <div class="gift-gif">
          <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eW9yYjdpM3J0MGZzNmVrYmx4bGd4ZHo5cmp4amVsOHB0cGptcjUyNCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/c7G6drkobIQXRJwX5v/giphy.gif" alt="gift 1 gif">
        </div>
        <div class="gift-title">Gift 1✨💍</div>
      </div>


      <div class="gift" onclick="gift2()">
        <div class="gift-gif">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzUzYWZjeWNlN2Z1ZXNoNzF2amhjNGk4dGJsOW5yemFlaHdtbTM5MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YhFzQw0j4lPNu/giphy.gif" alt="gift 2 gif">
        </div>
        <div class="gift-title">Gift 2🌷🌹</div>
      </div>


      <div class="gift" onclick="gift3()">
        <div class="gift-gif">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTI1ZmY4ZGlmaGdxa2w2YnQ1N2JkNmYzaTZ3czdycDNyaHVyZzFnYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iB6I46FbLRqsLliGpI/giphy.gif" alt="gift 3 gif">
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

    <button class="small-btn" onclick="truck()">Return</button>
  </div>`;
}


/* ---------- GIFT 1 ---------- */

function gift1(){
  hearts("yes",20);
  app.innerHTML=`
  <div class="container">
    <h2>Words from my soul(*/ω＼*)</h2>
    <p class="sub">
      Nānu ninnannu prītisuttēne you could ever imagine, i don't wanna lie that my life was bad before you come into my life kinda things, my life was good and you made it better. My day starts and ends with you ☆*: .｡. o(≧▽≦)o .｡.:*☆. I am lucky that i found you in my life among 8.3 billion people. Ik you recieved things which you doesn't deserve any of it, but I wanna give the things and care which you deserve, and don't say about your problem baggage, lemme carry it till the end no matter what. We talked about this manytimes in dm, so yeah wtv helps me sleep at night..blehhhhhh╰(*°▽°*)╯💖
    </p>
    <button class="small-btn" onclick="gifts()">Return</button>
  </div>`;
}

/* ---------- GIFT 2 ---------- */

function gift2(){
  hearts("yes",20);
  app.innerHTML=`
  <div class="container">
    <h2>Garden for you 💐</h2>
    <div class="gif-box">
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQwZDhtdHN5YXlicTBhcHA2ejI2cTAyNGcycGY4MTluaHd4d2ZyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aSYON5u8MGpjs4Llrw/giphy.gif" alt="bouquet for you gif">
    </div>
    <p class="bouquet-text">
      Honestly, if I were there with you irl i would have probably just smiled and gifted a bouquet, not saying much cuz some things don't need big words🥰. But since I'm not there rn I had to do it differently. One bouquet didn't feel enough anyway so I just kept planting more flowers in my head until it grew into something way bigger. So yeah instead of a bouquet, I'm giving you a whole garden now 😆💐 as you like roses, dw i will buy lilies when we meet.
    </p>

    <button class="small-btn" onclick="gifts()">Return</button>
  </div>`;
}

/* ---------- GIFT 3 ---------- */
function gift3(){
  hearts("yes",20);
  app.innerHTML=`
  <div class="container">
    <h2>I’M YOUR GIFT (^///^)</h2>

    <div class="gif-box">
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWgyeWJhc3dscnN4aGJmYjVmaXZscWpmcnkzd3ZrNXdkN3Vxejk0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wrBURfbZmqqXu/giphy.gif">
    </div>

    <p class="gift-text">
      i know it might sound a little silly,<br>
      but I’m the gift I wanna give you.<br>
      not something you can unwrap,<br>
      not something you can hold in your hands.<br>
      It’s my time,<br>
      my care,<br>
      my effort,etc etc etcccc<br>
      and all the love I carry inside me.<br>
      I can’t wrap myself in paper,<br>
      or tie a ribbon around my heart,<br>
      or place a bow on my feelings.<br>
      But I can promise you this, I’ll be there, I’ll keep showing up for you every single day.
     </p>
    <button class="small-btn" onclick="gifts()">Return</button>
  </div>`;
}


/* ---------- GIFT 4 ---------- */

function gift4(){
  hearts("yes",20);
  app.innerHTML=`
  <div class="container">
    <h2>Us in Every Universe 😙💫</h2>

    <!-- HORIZONTAL SWIPE BOX -->
    <div class="marvel-swipe">
      <div class="marvel-slide">
         <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDM3bzlmcHA5bjMwZ3p5ajZ6MDFjNDg1MnBrcHQ0Z2lobDRnZjlwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4FOettCbTXpUj6uASx/giphy.gif" alt="us marvel 1">
      </div>
      <div class="marvel-slide">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHY2cmkzaHpmeGYzZ2E2bDdnczYyeG16MzNlamYzbWtlaXd1bGRtYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DhByPdqgBSPUms4NIW/giphy.gif" alt="us marvel 2">
      </div>
      <div class="marvel-slide">
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHB4cXdtMzEybHlyODUyMmZpczR0ZHY0cnNwamxhN2c2eW5iM2l4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vlnuSbL956RKjGYMEQ/giphy.gif" alt="us marvel 3">
      </div>
      <div class="marvel-slide">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWJpcnU0bGs4ejl1emFkZnRjem00MndiM3ltNmUyM3B0a2RobWQzcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mmPgxbuPiwCQg/giphy.gif" alt="us marvel 4">
      </div>
    </div>


    <p class="sub">← swipe left / right →</p>

    <button class="small-btn" onclick="gifts()">Return</button>
  </div>`;
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
const app = document.getElementById("app");

app.innerHTML = `
  <div style="
    color:black;
    background:white;
    padding:20px;
    font-size:20px;
  ">
    TEST PAGE LOADED ✅
  </div>
`;
