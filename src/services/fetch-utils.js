
export async function getMonsters(searchFilter) {

  const rawResponse = await fetch(`http://localhost:8888/.netlify/functions/cat-endpoint`);
  const data = await rawResponse.json();
  
  return data.results;
}

