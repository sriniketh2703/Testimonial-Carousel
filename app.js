"use strict";

// TODO: References

const imageRef = document.querySelector("img");

const nameRef = document.querySelector(".name");
const designationRef = document.querySelector(".designation");
const descriptionRef = document.querySelector(".description");

const btnBefore = document.querySelector(".btn-before");
const btnAfter = document.querySelector(".btn-after");

const arrOfObjects = [
  {
    image: "./Images/image-1.jpg",
    names: "Jenna Ortega",
    designation: "DESIGNER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem eget ipsum eleifend auctor ac egestas elit.",
  },
  {
    image: "./Images/image-2.jpg",
    names: "Yusif Pathan",
    designation: "DATA SCIENTIST",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    image: "./Images/image-3.jpg",
    names: "Matt Jackson",
    designation: "CHARTED ACCOUNTANT",
    description:
      "Lorem ipsum dolor sit amet,  Sed a lorem eget ipsum eleifend auctor ac egestas elit. consectetur adipiscing elit. Ipsum dolor sit amet.",
  },
  {
    image: "./Images/image-4.jpg",
    names: "",
    designation: "CHARTED ACCOUNTANT",
    description: "Lorem ipsum dolor sit amet sit amet.",
  },
];

let i = 0;

function assigningValues() {
  nameRef.textContent = arrOfObjects[i].names;
  imageRef.src = arrOfObjects[i].image;
  designationRef.textContent = arrOfObjects[i].designation;
  descriptionRef.textContent = arrOfObjects[i].description;
}
btnBefore.addEventListener("click", () => {
  i--;
  if (i >= 0) {
    assigningValues();
  }
});

btnAfter.addEventListener("click", () => {
  ++i;
  if (i <= 3) {
    assigningValues();
  }
});
