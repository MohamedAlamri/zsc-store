let shopItemsData = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "wuefbncxbsn",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-3.jpg",
    },
    {
      id: "thyfhcbcv",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
  ];


  let basket = [];



  let productsContainer = document.querySelector(".products .container");

let showProducts = () => {
    return (
        productsContainer.innerHTML = shopItemsData.map((x) => {

            let {id, name, img, desc, price} = x

            return`
            <div class="product" id=product-id-${id}>
            <img src=${img} alt="">
            <div class="info">
                <h3 class="name">${name}</h3>
                <p class="desc">${desc}</p>
                <div class="price-quantity">
                    <h3 class="price">$ ${price}</h3>
                    <div class="quantity-c">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <span class="quantity" id=${id}>0</span>
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
            `
        }).join("")
    )
}

showProducts()


let increment = (id) => {
  
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1
    })
  }else {
    search.item += 1;
  }
  update(selectedItem.id)
}




let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  
  if (search.item === 0) return;

  else {
    search.item -= 1;
  }
  update(selectedItem.id)
}

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerText = search.item;

  calculatio()
}

let calculatio = () => {

  let count = document.querySelector(".count");
  count.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y)
}