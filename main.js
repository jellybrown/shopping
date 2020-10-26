"use strict";

const clothesList = document.querySelector(".clothes_list");
const filterList = document.querySelector(".filter_list");
const btn = document.querySelectorAll("button");

class Female {
  constructor(color, sort, size) {
    this.color = color;
    this.sort = sort;
    this.size = size;
  }
  create() {
    const newList = document.createElement("li");
    const item = `<img src="./imgs/${this.color}_${this.sort}.png" alt="" /><span>female, ${this.size} size</span>`;
    newList.setAttribute("data-color", `${this.color}`);
    newList.setAttribute("data-sort", `${this.sort}`);
    newList.innerHTML = item;
    clothesList.appendChild(newList);
  }
}

class Male {
  constructor(color, sort, size) {
    this.color = color;
    this.sort = sort;
    this.size = size;
  }
  create() {
    const newList = document.createElement("li");
    const item = `<img src="./imgs/${this.color}_${this.sort}.png" alt="" /><span>male, ${this.size} size</span>`;
    newList.setAttribute("data-color", `${this.color}`);
    newList.setAttribute("data-sort", `${this.sort}`);
    newList.innerHTML = item;
    clothesList.appendChild(newList);
  }
}

const females = [
  new Female("pink", "t", "large"),
  new Female("pink", "p", "small"),
  new Female("pink", "s", "large"),
  new Female("blue", "s", "small"),
  new Female("blue", "p", "large"),
  new Female("blue", "t", "small"),
  new Female("yellow", "s", "small"),
  new Female("yellow", "p", "large"),
  new Female("yellow", "t", "small"),
  new Female("yellow", "t", "small"),
  new Female("yellow", "t", "small"),
  new Female("yellow", "t", "small"),
  new Female("yellow", "t", "small"),
  new Female("yellow", "t", "small"),
];

const males = [
  new Male("pink", "t", "large"),
  new Male("pink", "p", "small"),
  new Male("pink", "s", "large"),
  new Male("blue", "s", "small"),
  new Male("blue", "p", "large"),
  new Male("blue", "t", "large"),
  new Male("pink", "t", "small"),
  new Male("blue", "t", "small"),
  new Male("yellow", "s", "small"),
  new Male("yellow", "p", "large"),
  new Male("yellow", "t", "small"),
];

// blue, yellow, pink   t,s,p   large, small

females.forEach((female) => {
  female.create();
});

for (let male of males) {
  male.create();
}

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    filterEvent(e);
  });
});

function filterEvent(e) {
  //클릭한 버튼의 데이터를 가져와서 찾기
  const clickThis = e.target.parentNode;
  const data = clickThis.getAttribute("data-set");

  const result1 = females.filter(
    (female) => data == female.color || data == female.sort
  );
  const result2 = males.filter(
    (male) => data == male.color || data == male.sort
  );

  clothesList.innerHTML = ``;

  result1.forEach((one) => {
    const newList = document.createElement("li");
    const item = `<img src="./imgs/${one.color}_${one.sort}.png" alt="" /><span>female, ${one.size} size</span>`;
    newList.setAttribute("data-color", `${one.color}`);
    newList.setAttribute("data-sort", `${one.sort}`);
    newList.innerHTML = item;
    clothesList.append(newList);
  });

  result2.forEach((one) => {
    const newList = document.createElement("li");
    const item = `<img src="./imgs/${one.color}_${one.sort}.png" alt="" /><span>male, ${one.size} size</span>`;
    newList.setAttribute("data-color", `${one.color}`);
    newList.setAttribute("data-sort", `${one.sort}`);
    newList.innerHTML = item;
    clothesList.append(newList);
  });
}
