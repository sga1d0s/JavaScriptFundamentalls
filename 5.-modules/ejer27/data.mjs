async function getIngredients() {
  const url = ('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json');

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json

  } catch (error) {
    console.error(error.message);
  }

  
}

async function getPlayer() {
  const url = ('https://gist.githubusercontent.com/oscar1771/3f27e083e980d9d8357294c2d7387fc0/raw/0296abf13d206454d18f88d8283c114be8d96d2e/joseph.json');
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json

  } catch (error) {
    console.error(error.message);
  }
}

export { getIngredients, getPlayer }