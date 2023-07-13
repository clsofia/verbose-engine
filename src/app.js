/* eslint-disable */

import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A lonely", "A slow", "A two headed", " A angry"];

  let subject = ["comedian", "merchant", "jogger", "pinecode"];

  let action = ["kicked my", " threw my", "yelled my", "burned my"];

  let possession = ["computer", "sandwish", "car", "coffee"];

  let where = [
    "in my house",
    "on the street",
    "in the toilet",
    "at the office"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let possIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actIndex] +
    " " +
    possession[possIndex] +
    " " +
    where[whereIndex]
  );
};
