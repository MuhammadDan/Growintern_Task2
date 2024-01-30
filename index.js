let movies = [
  {
    name: "Berlin",
    description:
      "Back to his golden age before the events of Money Heist, Berlin and a masterful gang gather in Paris to plan one of his most ambitious robberies ever.",
    image: "./images/slider1.png",
  },
  {
    name: "Drishyam 2",
    description:
      "A Drug Deal Goes Wrong Between Two Peddlers Where One Named David Accidentally Shoots Other While Trying To Escape He Notices Vijay Salgaonkar Coming Out Of Under Construction Police Station After Hiding Something.Seven Years Later Vijay Lives Happily With His Family, Along With His Cable Business He Also Owns A Cinema Hall And Plans To Produce His Own Film.IG Tarun Alhawat Colleague Of Meera Is Posted Sometime Back In Goa And Tries To Re Investigate Sam's Case By Getting Suspended Officer Gaitonde Back On Duty.Tarun And Meera Lay A Trap On Vijay And His Family But Very Much Far Away From Getting Any Clue.",
    image: "./images/slider2.png",
  },
  {
    name: "The Witcher",
    description:
      "Geralt embraces his destiny as he protects Ciri from the forces battling for control of the Continent ? and from the mysterious power she possesses.",
    image: "./images/slider3.png",
  },
  {
    name: "Ghosted",
    description:
      "Salt-of-the-earth Cole Falls Head Over Heels For Enigmatic Sadie -- But Then Makes The Shocking Discovery That She's A Secret Agent. Before They Can Decide On A Second Date, Cole And Sadie Are Swept Away On An International Adventure To Save The World.",
    image: "./images/slider4.png",
  },
  {
    name: "Dunki",
    description:
      "Four Friends From A Village In Punjab Share A Common Dream: To Go To England. Their Problem Is That They Have Neither The Visa Nor The Ticket. A Soldier Promises To Take Them To The Land Of Their Dreams. Dunki Is A Hilarious And Heartwarming Saga Of A Perilous Journey, Borders, Friendships, Nostalgia For Home, And Love That Towers Above It All.",
    image: "./images/slider5.png",
  },
];

let carousel = document.querySelector(".carousel");
let slides = [];

let slideindex = 0; // track the current slide

const createSlide = () => {
  if (slideindex >= movies.length) {
    slideindex = 0;
  }

  let sliderdiv = document.createElement("div");
  sliderdiv.classList.add("slider");

  let imgdiv = document.createElement("div");
  imgdiv.classList.add("slider_image");

  let contentdiv = document.createElement("div");
  contentdiv.classList.add("slide_content");

  let h1tag = document.createElement("h1");
  h1tag.classList.add("movie_title");
  h1tag.textContent = movies[slideindex].name;

  let ptag = document.createElement("p");
  ptag.classList.add("movie_description");
  ptag.textContent = movies[slideindex].description;

  imgdiv.style.backgroundImage = `url('${movies[slideindex].image}')`;

  contentdiv.appendChild(h1tag);
  contentdiv.appendChild(ptag);

  sliderdiv.appendChild(contentdiv);
  sliderdiv.appendChild(imgdiv);
  // console.log(sliderdiv);
  carousel.appendChild(sliderdiv);

  // push into new array
  slides.push(sliderdiv);

  if (slides.length > 1) {
    slides[0].style.marginLeft = `calc(-${100 * (slides.length - 1)}% - ${
      30 * (slides.length - 1)
    }px)`;
  }

  slideindex++;
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// vedio cards
const vediocards = [...document.querySelectorAll(".vediocard")];

vediocards.forEach((items) => {
  items.addEventListener("mouseover", () => {
    let vedio = items.children[1];
    vedio.play();
  });
  items.addEventListener("mouseleave", () => {
    let vedio = items.children[1];
    vedio.pause();
  });
});

// card sliders
let cardcontainer = [...document.querySelectorAll(".card_container")];
let prebtn = [...document.querySelectorAll(".startbtn")];
let nxtbtn = [...document.querySelectorAll(".nextbtn")];

cardcontainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerwidth = containerDimension.width;

  nxtbtn[i].addEventListener("click", () => {
    item.scrollLeft += containerwidth - 200;
  });

  prebtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerwidth + 200;
  });
});
