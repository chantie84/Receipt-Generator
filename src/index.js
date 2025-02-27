function displayRecipe(response) {
  new Typewriter("#pistachio-recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "e1e10606109dc39aa96a4o5b4facfd3t";
  let prompt = `User instructions: Generate a pistachio recipe ${instructionsInput.value}`;
  let context =
    "You are a excellent expert in baking or cooking with pistachio and love to write short recipes. Your mission is to generate a 10 lines pistachio recipe in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions.The title of the recipe, ingredients and instructions is in italic. Sign the recipe with 'SheCodes AI' insight a <strong> element at the end of the recipe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#pistachio-recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">🥰 Generating a pistachio recipe about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
