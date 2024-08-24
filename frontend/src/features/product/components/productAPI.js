export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8040/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  console.log("Filter", filter);

  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  // console.log(queryString);
  let finalString = "http://localhost:8040/products?" + queryString;
  console.log(finalString);

  return new Promise(async (resolve) => {
    const response = await fetch(finalString);
    const data = await response.json();
    resolve({ data });
  });
}
