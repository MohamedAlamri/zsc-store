
  let basket = JSON.parse(localStorage.getItem("Data")) || [];



  let productsContainer = document.querySelector(".products .container");

let showProducts = () => {
    return (
        productsContainer.innerHTML = shopItemsData.map((x) => {

            let {id, name, img, desc, price} = x

            let search = basket.find((y) => y.id === id);

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
                        <span class="quantity" id=${id}>
                          ${search === undefined ? 0 : search.item}
                        
                        </span>
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
  update(selectedItem.id);
  localStorage.setItem("Data", JSON.stringify(basket));
}




let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;

  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("Data", JSON.stringify(basket));
}

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerText = search.item;
  calculatio()
}

let calculatio = () => {

  let count = document.querySelector(".count");
  count.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y);
}


calculatio()
