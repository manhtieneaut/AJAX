//  lấy dữ liệu bằng axios get


const getItems = async (num) => {

  //lấy dữ liệu
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);

  const Item = response.data;
  
  const name = Item.meals[num].strMeal
  const image = Item.meals[num].strMealThumb

  show(name,image);

}

function show(name,image){
  //tạo thẻ li
  const li =  document.createElement('li');
  const markup = `
  <img src="${image}" alt=""><p>${name}</p>
  `
  li.innerHTML = markup;

  //thêm vào danh sách
  const ul = document.querySelector('ul');
  ul.appendChild(li);
}





// hàm main

const main = async () => {

  getItems(0);
  getItems(1);
  getItems(2);
  getItems(3);
  getItems(4);
  getItems(5);
  getItems(6);
  getItems(7);
  

};


main();

/*/tạo thẻ li
  const li = document.createElement('li');

  const markup = 
  `
  <img class="city-icon" src=${name} alt="none">
  <p>${image}</p>
  `;

  li.innerHTML = markup;


  //tạo thẻ ul
  const lists = document.querySelector('ul');
  lists.appendChild(li); */