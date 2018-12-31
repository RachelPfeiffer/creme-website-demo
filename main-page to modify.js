// Goal for tonight: break this code into smaller functions, divided among view
// and controller. The functions have to work :)

// const hamburgur = document.querySelector('.fa-bars');
// const navMenu = document.querySelector('nav');
// const blackHead = document.querySelector('.black-header');
// const magnifyer = document.querySelector('.header-search-trending');
// const searchWindow = document.querySelector('#search-box');
// const exit = document.querySelector('.fa-times');
// const body = document.querySelector('body');
// const userInput = document.querySelector('#user-input');
// let resultsDisplay = document.querySelector('#results-display');
const Model = {
  searchResults : new Set(),
  recipes : fetch('data/recipes.json').then(function (response) {
    console.log(response.json());
  })

}
// Controller
const Controller = {
  splitIntoWords : function (array) {
    return wordsOfIngredient = array.split(" ");
  },

  searchForText : function (string, searchText) {
    if (string.indexOf(searchText) != -1) {
      return string;
    };
  },

  searchInput : function (input, searchText) {
    for (recipe of Model.recipes) {
      for (value of Object.values(recipe)) {
        if(typeof value === "object") {
          value = splitIntoWords(value);
        };
        const results = searchForText(value);
        Model.searchResults.add(results);
      }
    } // TODO: model.recipes
  }
}

const View = {

}
function findInput(textToSearchFor, infoToSearchThrough) {
// View

  // for each recipe object: if the value is a string - find me index of toSearch, if true, tell me the value.
  // if it's an array, split into strings, then find me index of toSearch, if true tell me the value of the original array.
  for (recipe of infoToSearchThrough) {
    for (value of Object.values(recipe)) {
      //for the ingredients list - split into words and check for searched value
      if (typeof value === "object") {
        for(ingredient of value) {
          // FUNCTION SPLIT INTO WORDS
        }
      };
      (typeof value === "string") {

          results.add(recipe);
        };
      }
}
}
return results;
}
//open the searchbox when you click the magnifying glass

  // let toSearch = userInput.value;
// let  infoToSearchThrough = stuff.recipes;
magnifyer.addEventListener('click', function () {
  searchWindow.classList.add('in');
});

//close the searchbox when you click the x
exit.addEventListener('click', function () {
  searchWindow.classList.remove('in');
});

let results = 2;
//change the innertext of the search results to reflect number of results
const resultOutput = document.querySelector('#results-display');
function updateResultOutput() {
  if (results===0) {
    resultOutput.innerHTML = '<a href="features">Featured</a>'
  } else {
    resultOutput.innerHTML = `${results} results returned for that search`;
  }
};
updateResultOutput();


//when hamburgur is clicked, add in class to nav menu

hamburgur.addEventListener('click', function () {
  navMenu.classList.toggle('in');
  blackHead.classList.toggle('out');
})


//log out the name of each recipe - let's replace this with
//all our filling functions.
function fillMainPage(stuff) {
  //create Recipe Section with recipes
  const recipeSection = document.createElement('div');
  recipeSection.classList = 'recipe-section main-page';
  body.appendChild(recipeSection);
  const mainRecipesToShow = stuff.slice(0,3);
  for (recipe of mainRecipesToShow) {
    const recipeTile = document.createElement('a');
    recipeTile.href = './recipe.html?id='+recipe.id;
    recipeTile.classList = "recipe-tile";
    recipeTile.innerHTML = '<div class="image-box"><img class="recipe-image" src="img/' + recipe.id + '.jpg" alt="' + recipe.name + '"></div><div class="recipe-genre">'+recipe.genre+'</div><div class="recipe-name">'+recipe.name+'</div>';
    const linkToRecipe = document.createElement('a');
    linkToRecipe.innerHTML = 'View Recipe';
    recipeSection.appendChild(recipeTile);
  }
  //create the Trending box
  const trendingSection = document.createElement('div');
  trendingSection.classList = 'trending-section main-page';
  trendingSection.innerText = 'Trending';
  const trendingSectionRecipes = document.createElement('div');
  trendingSectionRecipes.classList = 'trending-recipes main-page';
  trendingSection.appendChild(trendingSectionRecipes);
  body.appendChild(trendingSection);
  for (recipe of stuff.recipes) {
    if(recipe.trending) {
      const trendingRecipe = document.createElement('a');
      trendingRecipe.href = './recipe.html?id='+recipe.id;
      trendingRecipe.className = "trending-recipe";
      trendingRecipe.innerHTML = '<img class="recipe-image" src="img/' + recipe.id + '.jpg"><div class="trending-recipe-name">' +recipe.name + '</div>';
      trendingSectionRecipes.appendChild(trendingRecipe);
      urlForRestaurant(trendingRecipe);
    };
  }

  const randomSection = document.createElement('div');
  randomSection.classList = "one-more-random-recipe";
  body.appendChild(randomSection);
  randomSection.style.backgroundImage = 'url("img/'+stuff.recipes[6].id+'.jpg")';
  randomSection.style.height = "200px";
  randomSection.innerHTML = '<span>'+stuff.recipes[6].genre+'</span><h1>'+stuff.recipes[6].name+'</h1><span>Crunchy Midday Snack</span>';

let searchInput = document.querySelector('#search-input');
const searchFunction = searchInput.addEventListener('keydown', function () {
  const searchInBox = findInput(searchInput.value, stuff.recipes);
  for (result of searchInBox) {
    createResult(result);
  }
});

const createResult = function (x) {
  newResult = document.createElement('div');
  newResult.className = 'result';
  newResult.innerHTML = '<a class="result" href ="./recipe.html?id='+x.id+'"><img class="result-pic" src="img/'+x.id+'.jpg"><div class="result-name"><h3>'+ x.name + '</h3></div></a>';
  resultsDisplay.appendChild(newResult);
}
// end fillMainPage function
}

const trending = ['6', '7', '8', '9', '10'];

//generate url for each restaurant
function urlForRestaurant(restaurant) {
  console.log ('./restaurant.html?id='+ restaurant.innerText);


}


//get tooltips to follow mouse
(function tooltip() {
//Get Tooltips to follow the mouse
var tooltip = document.querySelectorAll('.tooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
  for (var i=tooltip.length; i--;) {
      tooltip[i].style.left = (e.pageX-20) + 'px';
      tooltip[i].style.top = (e.pageY+30) + 'px';
  }
}
})()