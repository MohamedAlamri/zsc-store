let basket = JSON.parse(localStorage.getItem("Data")) || [];
let container = document.querySelector(".cart .container")
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
            <img src=${search.img} >
            <h3>${search.name}</h3>
            <h4>$ ${search.price}</h4>
          `
        )
          
      })
    )
}else {
  return(
    container.innerHTML = `
      <h2>The cart is empty</h2>
      
      `
  )
}


}
calculatio()
gemeratCartItems()
