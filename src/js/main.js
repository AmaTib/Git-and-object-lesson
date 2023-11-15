import "./../scss/style.scss";

class Soda {
  namn;
  smak;
  bild;

  constructor(namn, smak, bild) {
    this.namn = namn;
    this.smak = smak;
    this.bild = bild;
  }
}

const soda = new Soda(
  "Fanta",
  "Apelsin",
  "https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_660,w_660/v1685365422/cloud/281589/Fanta%20Orange.jpg"
);
const soda2 = new Soda(
  "Cola",
  "Oklart",
  "https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_660,w_660/v1624970163/229919/Coca-Cola%20.jpg"
);
const soda3 = new Soda("Sprite", "Citron / Lime", "13");

const sodaList = [soda, soda2];

const div1 = document.createElement("div");
div1.id = "sodaContainer";

const div2 = document.createElement("div");
div2.id = "Fanta";

for (let i = 0; i < sodaList.length; i++) {
  const oneSoda = sodaList[i];

  const imgTag = document.createElement("img");
  const nameTag = document.createElement("h2");
  const tasteTag = document.createElement("p");

  imgTag.src = sodaList[i].bild;
  nameTag.innerHTML = sodaList[i].namn;
  tasteTag.innerHTML = "Smak: " + sodaList[i].smak;

  div2.appendChild(imgTag);
  div2.appendChild(nameTag);
  div2.appendChild(tasteTag);
  div1.appendChild(div2);

  console.log(oneSoda);
}

document.body.appendChild(div1);
