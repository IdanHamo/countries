const userInput = document.getElementById("inp");
const button = document.getElementById("btn");
const result = document.getElementById("contries");
const filterBtn = document.getElementById("new");
const filterInput = document.getElementById("showAllInp");
const showAllBtn = document.getElementById("showAll");
const showAllDiv = document.getElementById("showAllDiv");
const showAllOfTheResults = document.getElementById("showAllResult");
const getCountries = JSON.parse(localStorage.getItem("contries"));
const contriesArr = [...getCountries];
contriesArr.sort();
getCountries.sort();
//points
// const pointContainer = document.getElementById("points");
// let getPoints = JSON.parse(localStorage.getItem("points"));
// let points = Number(...getPoints);

// with Point

showAllBtn.addEventListener("click", () => {
  showAllDiv.innerHTML = contriesArr.join(", ");
});

userInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const storeArr = JSON.parse(localStorage.getItem("contries"));
    let found = storeArr.find((country) => country === userInput.value);

    if (found) {
      renderResult("not again");
      userInput.value = "";
      //points += 0;
      //  showPoints(points);
    } else {
      contriesArr.push(userInput.value.toLowerCase());
      console.log(contriesArr);
      localStorage.setItem("contries", JSON.stringify(contriesArr));
      renderResult(userInput.value);
      userInput.value = "";
      // points += 3;
      //  localStorage.setItem("points", JSON.stringify(points));
      //showPoints(points);
    }
  }
});

//without Point
button.addEventListener("click", () => {
  const storeArr = JSON.parse(localStorage.getItem("contries"));
  let found = storeArr.find((country) => country === userInput.value);

  if (found) {
    renderResult("not again");
    userInput.value = "";
  } else {
    contriesArr.push(userInput.value);
    console.log(contriesArr);
    localStorage.setItem("contries", JSON.stringify(contriesArr));
    renderResult(userInput.value);
    userInput.value = "";
  }
});

filterInput.addEventListener("input", () => {
  const found = contriesArr.filter((country) =>
    country.includes(filterInput.value)
  );

  if (!found) {
    console.log("not exist");
  } else if (filterInput.length > 1) {
    showAllOfTheResults.innerHTML = "";
  }
  return renderToHTML(found);
});

function renderResult(userValue) {
  result.innerHTML = ` <div class="input-result">${userValue}</div>`;
}

function renderToHTML(country) {
  showAllOfTheResults.innerHTML = "";
  for (const find of country) {
    showAllOfTheResults.innerHTML += `<li>${find}</li>`;
  }
}

function showPoints(points) {
  pointContainer.innerHTML = `<div class="point-container">${points}</div>`;
}
