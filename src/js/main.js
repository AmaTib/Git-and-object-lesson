import './../scss/style.scss'

class Mobile {
  brand;
  model;
  year;
  img;
  
  constructor(brand, model, year, img){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.img= img;

  }
}

const samsungUrl = "https://images.ctfassets.net/iidtcybzv1rq/4JMKoFb9bGv1Y7hov0tnzm/7039fe922faac679f204c60b9aa9cf8d/Samsung-Galaxy-S23-Ultra-BlackIQ---front.png?fm=jpg&fl=progressive&h=330&q=80";
const iphoneXUrl = "https://images.ctfassets.net/iidtcybzv1rq/4IrjqxBE6xOUkcESDz4sW4/5980ef1d0e3502510e23585273894dcb/iPhone-15-Pro-Bla.png?fm=jpg&fl=progressive&h=330&q=80";
const iphone13Url = "https://images.ctfassets.net/iidtcybzv1rq/2ohEy4RiyfhGEyVDujMOkf/0e78d30c3e149a46749972a188bc43bc/iPhone_13_Midnight.png?fm=jpg&fl=progressive&h=330&q=80";

const moble1 = new Mobile("Iphone", "Iphone x", 2022 , iphoneXUrl);
const moble2 = new Mobile("Samsung", "Galaxy S23 Ultra", 2020, samsungUrl);
const moble3 = new Mobile("Iphone", "Iphone 13", 2021, iphone13Url);

const mobiles = [moble1, moble2, moble3]

const mobileContainer = document.getElementById("mobileContainer");
mobileContainer.className = "mobileContainer";


for (let i = 0; i < mobiles.length; i++) {
  //const elemnt = mobiles[i];
  const mobile = document.createElement("div");
  const mobileImg = document.createElement("img");
  const title = document.createElement("h2");
  const mobileModel = document.createElement("h2");
  const mobileYear = document.createElement("h2");

  mobile.className = "mobile";
  
  mobileImg.src = mobiles[i].img;
  title.innerHTML = "Märke :"  + mobiles[i].brand;
  mobileModel.innerHTML = "modell: " +mobiles[i].model;
  mobileYear.innerHTML = "År: " + mobiles[i].year;


  mobileContainer.appendChild(mobile);
  mobile.appendChild(mobileImg);
  mobile.appendChild(title);
  mobile.appendChild(mobileModel);
  mobile.appendChild(mobileYear);
}


