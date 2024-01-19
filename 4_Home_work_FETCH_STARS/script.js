
// делаем запрос и получаем данные
let url = "https://dummyjson.com/products"

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

// пишем функцию render , где создаем карточки для каждого продукта 
const div_container = document.querySelector(".container")

function render () {
data.forEach(el => {
    
      const elem_card = document.createElement("div")
      const elem_img = document.createElement("img")
      const elem_title = document.createElement("p")
      const elem_price =  document.createElement("p")

});     

}

  