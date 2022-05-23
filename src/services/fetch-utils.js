
export async function getMonsters(searchFilter) {

  const rawResponse = await fetch(`/.netlify/functions/monsters?pokemon=${searchFilter}`);
  const data = await rawResponse.json();
  
  return data.data.results;
}

