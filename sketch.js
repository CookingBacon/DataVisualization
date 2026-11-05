
let data = {};
let categorySelect;
let yearSelect;

function setup() {
  createCanvas(1200, 400);

  // Interactive category dropdown
  createP("Select data category:");

  categorySelect = createSelect();
  categorySelect.option("Total Crashes", "crashes");
  categorySelect.option("Fatalities", "fatalities");
  categorySelect.option("Drunk Driving", "drunk_driver_crashes");

  // Load data outside other functions
  // California
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=California&year=2017",
  gotCalifornia2017);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=California&year=2019",
  gotCalifornia2019);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=California&year=2021",
  gotCalifornia2021);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=California&year=2023",
  gotCalifornia2023);

// Texas
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Texas&year=2017",
  gotTexas2017);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Texas&year=2019",
  gotTexas2019);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Texas&year=2021",
  gotTexas2021);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Texas&year=2023",
  gotTexas2023);

  //Florida
  loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Florida&year=2017",
  gotFlorida2017);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Florida&year=2019",
  gotFlorida2019);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Florida&year=2021",
  gotFlorida2021);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Florida&year=2023",
  gotFlorida2023);
  
  //New York
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=New%20York&year=2017",
  gotNewYork2017);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=New%20York&year=2019",
  gotNewYork2019);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=New%20York&year=2021",
  gotNewYork2021);
loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=New%20York&year=2023",
  gotNewYork2023);

  //Hawaii
  loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Hawaii&year=2017",
  gotHawaii2017);
  loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Hawaii&year=2019",
  gotHawaii2019);
  loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Hawaii&year=2021",
  gotHawaii2021);
  loadJSON(
  "https://farsapi.com/v1/statistics/summary?state=Hawaii&year=2023",
  gotHawaii2023);

createP("Select year:");
yearSelect = createSelect();
yearSelect.option("2017");
yearSelect.option("2019");
yearSelect.option("2021");
yearSelect.option("2023");
yearSelect.selected("2023");
}

function gotCalifornia2017(result) {
  data["California2017"] = result;}
function gotCalifornia2019(result) {
  data["California2019"] = result;}
function gotCalifornia2021(result) {
  data["California2021"] = result;}
function gotCalifornia2023(result) {
  data["California2023"] = result;}

function gotTexas2017(result) {
  data["Texas2017"] = result;}
function gotTexas2019(result) {
  data["Texas2019"] = result;}
function gotTexas2021(result) {
  data["Texas2021"] = result;}
function gotTexas2023(result) {
  data["Texas2023"] = result;}

function gotFlorida2017(result) {
  data["Florida2017"] = result;}
function gotFlorida2019(result) {
  data["Florida2019"] = result;}
function gotFlorida2021(result) {
  data["Florida2021"] = result;}
function gotFlorida2023(result) {
  data["Florida2023"] = result;}

function gotNewYork2017(result) {
  data["NewYork2017"] = result;}
function gotNewYork2019(result) {
  data["NewYork2019"] = result;}
function gotNewYork2021(result) {
  data["NewYork2021"] = result;}
function gotNewYork2023(result) {
  data["NewYork2023"] = result;}

function gotHawaii2017(result) {
  data["Hawaii2017"] = result;}
function gotHawaii2019(result) {
  data["Hawaii2019"] = result;}
function gotHawaii2021(result) {
  data["Hawaii2021"] = result;}
function gotHawaii2023(result) {
  data["Hawaii2023"] = result;}


function draw() {
  background(30);

  let category = categorySelect.value();
  let year = yearSelect.value();
  let titles = {
    crashes: "Total Crashes",
    fatalities: "Fatalities",
    drunk_driver_crashes: "Drunk Driving"
  };  
  
  let californiaData = data["California" + year];
  let texasData = data["Texas" + year];
  let floridaData = data["Florida" + year];
  let newyorkData = data["NewYork" + year];
  let hawaiiData = data["Hawaii" + year];

  //Make sure data is loaded
  if (!californiaData || !texasData || !floridaData || !newyorkData || !hawaiiData) {
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("Loading data...", 600, 200);
    return;
  }

  fill(255);
  textAlign(CENTER);
  textSize(20);
  text(titles[category] + " in " + year, 600, 35);

  let california = Number(californiaData.totals[category]);
  let texas = Number(texasData.totals[category]);
  let florida = Number(floridaData.totals[category]);
  let newyork = Number(newyorkData.totals[category]);
  let hawaii = Number(hawaiiData.totals[category]);
  let maxValue = max(california, texas, florida, newyork, hawaii, 1);

  // Size of the chart and bars
  let chartBottom = 320;
  let chartHeight = 230;
  let barWidth = 100;

  let californiaHeight = (california / maxValue) * chartHeight;
  fill(70, 160, 230);
  rect(150, chartBottom - californiaHeight, barWidth, californiaHeight);

  let texasHeight = (texas / maxValue) * chartHeight;
  fill(230, 130, 70);
  rect(350, chartBottom - texasHeight, barWidth, texasHeight);

  let floridaHeight = (florida / maxValue) * chartHeight;
  fill(230, 190, 70);
  rect(550, chartBottom - floridaHeight, barWidth, floridaHeight);

  let newyorkHeight = (newyork / maxValue) * chartHeight;
  fill(160, 110, 210);
  rect(750, chartBottom - newyorkHeight, barWidth, newyorkHeight);

  let hawaiiHeight = (hawaii / maxValue) * chartHeight;
  fill(60, 190, 170);
  rect(950, chartBottom - hawaiiHeight, barWidth, hawaiiHeight);

  // State Data and Values
  fill(255);
  textSize(14);
  text(california.toLocaleString(), 200, chartBottom - californiaHeight - 10);
  text(texas.toLocaleString(), 400, chartBottom - texasHeight - 10);
  text(florida.toLocaleString(), 600, chartBottom - floridaHeight - 10);
  text(newyork.toLocaleString(), 800, chartBottom - newyorkHeight - 10);
  text(hawaii.toLocaleString(), 1000, chartBottom - hawaiiHeight - 10);
  text("California", 200, chartBottom + 20);
  text("Texas", 400, chartBottom + 20);
  text("Florida", 600, chartBottom + 20);
  text("New York", 800, chartBottom + 20);
  text("Hawaii", 1000, chartBottom + 20);
}
