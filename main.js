"use strict";

const clothesList = document.querySelector(".clothes_list");

class Female {
  constructor(color, sort, size) {
    this.color = color;
    this.sort = sort;
    this.size = size;
  }
  create() {
    const newList = document.createElement("li");
    const item = `<img src="./imgs/${this.color}_${this.sort}.png" alt="" /><span>femail, ${this.size} size</span>`;
    newList.innerHTML = item;
    clothesList.appendChild(newList);
  }
}

const female1 = new Female("pink", "t", "large");
const female2 = new Female("blue", "s", "small");
female1.create();
female2.create();

function uploadList(item) {
  const newList = document.createElement("li");

  newList.appendChild(item);
  clothesList.appendChild(newList);
}
