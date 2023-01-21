
// khai báo , lấy dữ liệu
const api = 'https://pokeapi.co/api/v2/pokemon';

const getItems = async (url, id) => {

  //lấy dữ liệu
  const response = await axios.get(`${url}/` + id);

  const Item = response.data;

  //tạo thẻ li
  const pokemon = document.createElement('li');
  pokemon.id = Item.id;
  pokemon.appendChild(document.createTextNode(Item.id + ". " + Item.name));
  pokemon.onclick = async event => await detail(event,Item);

  //tạo thẻ ul
  const lists = document.querySelector('ul');
  lists.appendChild(pokemon);
}

function detail(event,Item){
  //Lấy dữ liệu
  let name = Item.name;
  let types = Item.types;
  let sprite = Item.sprites.front_default; 
  //Tạo thẻ
  const  detail = document.createElement('div');
  detail.classList.add("detail");
  const markup = 
  `
  <img class="city-icon" src=${sprite} alt="none">
  <p>${types[0].type.name}</p>
  `;
  detail.innerHTML = markup;


  //hiện thông tin
  const addDetail = document.querySelector('.left');
  addDetail.replaceChild(detail, addDetail.children[0]);
  
}





// hàm main

const main = async () => {

  getItems(api, 1);
  getItems(api, 2);
  getItems(api, 3);
  getItems(api, 4);
  getItems(api, 5);
  getItems(api, 6);
  getItems(api, 7);
  getItems(api, 8);
  getItems(api, 9);

};


main();