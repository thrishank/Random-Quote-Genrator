const dark = document.getElementById("dark");
const quotetextelement = document.getElementById("quote-text");
const quoteauthor = document.getElementById("quote-author");
const updatebutton = document.getElementById("update-button");
const quotecategory = document.getElementById("quote-category");
const savebutton = document.getElementsByClassName("save");
const cat1 = document.getElementsByClassName("box");
const btn = document.getElementsByTagName("button");
const input = document.getElementsByTagName("input");
dark.addEventListener("click", function () {
  var element = document.body;
  if (element.style.backgroundColor === "white") {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  } else {
    element.style.backgroundColor = "white";
    element.style.color = "black";
  }
});

let url = "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "63dacee26amshe3a05c6bc191c28p19ada1jsn60014b5b356d",
    "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  },
};

cat1[0].addEventListener("click", function () {
  url = "https://famous-quotes4.p.rapidapi.com/random?category=sports&count=1";
  updatequote();
});
cat1[3].addEventListener("click", function () {
  url = "https://famous-quotes4.p.rapidapi.com/random?category=dating&count=1";
  updatequote();
});
btn[0].addEventListener("click", function () {
  url = "https://famous-quotes4.p.rapidapi.com/random?category=sports&count=10";
  numupdatequote();
});
async function fetchRandomquote() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error");
  }
}
async function updatequote() {
  const quotedata = await fetchRandomquote();
  if (quotedata) {
    quotetextelement.innerHTML = quotedata[0].text;
    quoteauthor.textContent = "- " + quotedata[0].author;
    quotecategory.innerHTML = quotedata[0].category + " Quote";
  }
}
updatebutton.addEventListener("click", updatequote);
async function numupdatequote() {
  const quotedata = await fetchRandomquote();
  if (quotedata) {
    for (let i = 0; i < quotedata.length; i++) {
      var divElement = document.createElement("div");
      divElement.className = "result";
      var quoteTextelement = document.createElement("p");
      quoteTextelement.className = "quote";
      quoteTextelement.id = "quote-text";
      var quoteCategory = document.createElement("p");
      quoteCategory.className = "category";
      quoteCategory.id = "quote-category";
      var quoteAuthorElement = document.createElement("p");
      quoteAuthorElement.className = "author";
      quoteAuthorElement.id = "quote-author";
      divElement.appendChild(quoteTextelement);
      divElement.appendChild(quoteAuthorElement);
      divElement.appendChild(quoteCategory);
      document.body.appendChild(divElement);
      quoteTextelement.innerHTML = quotedata[i].text;
      quoteCategory.innerHTML = quotedata[i].category + " Quote";
      quoteAuthorElement.innerHTML = quotedata[i].author + " Author";
    }
  }
}
/* declare a async function name(){} 
1. try - to fetch the data
   1. store the response in a varaible using const response = await fetch(url,options)
   2. once we got the ouptput we need to store the output in a json form so
   3. const data = await response.json() return the data
   4. finally incasae of an error catch(error) log error
*/
