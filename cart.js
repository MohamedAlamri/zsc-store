let basket = JSON.parse(localStorage.getItem("Data")) || [];
let container = document.querySelector(".cart-page .container")
let cart = document.querySelector(".product-cart")




let calculatio = () => {

    let count = document.querySelector(".count");
    count.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  }
  
  
  
let gemeratCartItems = () => {

  
  
  if (basket.length !== 0) {
    return(
      cart.innerHTML = basket.map((y) => {

        let {id, item} = y

        let search = shopItemsData.find((x) => x.id === id)

        return (
          cart.innerHTML = `
            <div class="cart-item" >
                <img src=${search.img} >
                <div class="info" >
                  <div class="name-price">
                      <h3 class="name-product">${search.name}</h3>
                      <h4 class="price-product">$ ${search.price}</h4>
                      <i onclick="removeItem(${id})" class="fa-solid fa-xmark"></i>
                  </div>
                    <div class="quantity-c">
                      <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                      <span class="quantity" id=${id}>${item}</span>
                      <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                    <h3>$ ${item * search.price}</h3>
                </div>
            </div>
          `
        )
          
      })
    )
}else {
  return(
    container.innerHTML = `
    <div class="empty" >
        <h2>cart is empty</h2>
        <button>
          <a href="index.html" >Back To Home</a>
        </button>
      </div>
      `
  )
}


}
calculatio()
gemeratCartItems()




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
  gemeratCartItems();
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
  gemeratCartItems();
  localStorage.setItem("Data", JSON.stringify(basket));
}

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerText = search.item;
  calculatio()
}


let removeItem = (id) => {
  let selectedItem = id

  basket = basket.filter((x) => x.id !== selectedItem.id);
  localStorage.setItem("Data", JSON.stringify(basket));
  gemeratCartItems();

}
