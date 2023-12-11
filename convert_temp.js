"use strict";
const $ = (selector) => document.querySelector(selector);

/*********************
 *  helper functions  *
 **********************/
const calculateCelsius = (temp) => ((temp - 32) * 5) / 9;
const calculateFahrenheit = (temp) => (temp * 9) / 5 + 32;

// function to toggle the display between C and F
const toggleDisplay = (label1Text, label2Text) => {
  $("#degree_label_1").textContent = label1Text;
  $("#degree_label_2").textContent = label2Text;
  $("#degrees_computed").value = "";
  $("#degrees_entered").value = "";
  $("#message").textContent = "";
};

/****************************
 *  event handler functions  *
 *****************************/

// function to convert the temperature
const convertTemp = () => {
  const degreesEntered = $("#degrees_entered").value;

  if (isNaN(degreesEntered) || degreesEntered === "") {
    $("#message").textContent = "You must enter a valid number for degrees.";
    $("#degrees_computed").value = "";
    return;
  }

  const convertedTemp = $("#to_celsius").checked ? calculateCelsius(degreesEntered) : calculateFahrenheit(degreesEntered);
  $("#degrees_computed").value = convertedTemp.toFixed(0);
  $("#message").textContent = "";
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
  // add event handlers
  $("#convert").addEventListener("click", convertTemp);
  $("#to_celsius").addEventListener("click", toCelsius);
  $("#to_fahrenheit").addEventListener("click", toFahrenheit);

  // move focus
  $("#degrees_entered").focus();
});
