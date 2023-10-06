

const users = [
    {
        name: "Robert",
        salary: 5000,
        id: 1,
        image: "https://picsum.photos/200?"
    },
    {
        name: "Miriam",
        salary: 5100,
        id: 2,
        image: "https://picsum.photos/200?"
    },
    {
        name: "Susie",
        salary: 4500,
        id: 3,
        image: "https://picsum.photos/200?"
    },
    {
        name: "Nelli",
        salary: 4600,
        id: 4,
        image: "https://picsum.photos/200?"
    },
    {
        name: "Anne",
        salary: 5200,
        id: 5,
        image: "https://picsum.photos/200?"
    },
    {
        name: "Alex",
        salary: 5400,
        id: 6,
        image: "https://picsum.photos/200?"
    },
    {
        name: "Bob",
        salary: 4300,
        id: 7,
        image: "https://picsum.photos/200?"
    },
    {
        name: "Jon",
        salary: 7200,
        id: 8,
        image: "https://picsum.photos/200?"
    },
]

// Находим div root 
const div_root = document.querySelector("#root")
// Создаем cards container (div)
const cards_container = document.createElement("div")
// Даем ему класс
cards_container.classList.add("cards_container")
// Добоваляем в root
div_root.append(cards_container)

// Пишем функцию 
users.forEach(el => {
    // создаем элементы и карточку -----------------------
    const elem_card = document.createElement("div")
    elem_card.classList.add("elem_card") // Даем ему класс
    //----------------------------------
    const user_name = document.createElement("p")
    const user_salary = document.createElement("p")
    const user_id = document.createElement("p")
    const user_img = document.createElement("img")

    // Заполняем элементы 
    user_name.innerText = `Name: ${el.name}`
    user_salary.innerText = `Salary: ${el.salary}`
    user_id.innerText = `User number ${el.id}`
    user_img.src = el.image
    

    // Добовляем элементы в карточку и контейнер
    elem_card.append(user_img,user_name,user_salary,user_id)
    cards_container.append(elem_card)

    // Контейнер для праграфов
    const users_date = document.createElement("div")
    users_date.classList.add("users_date") // Добавили класс
    //Добавляем элементы
    users_date.append(user_name,user_salary,user_id)
    elem_card.append(users_date)

})

// ---------------------------------------------------------
// создаем форму 

const user_form = document.createElement("form")

// Создаем интпуты и кнопку

const name_input = document.createElement("input")
const salary_input = document.createElement("input")
const img_card = document.createElement("img")
const id_input = document.createElement("input")
// кнопка добавления 
const add_btn = document.createElement("button")
add_btn.innerText = "Add card"

// кнопка удаления 
const del_btn = document.createElement("button")
del_btn.innerText = "Delete card"

// создаем атрибуты 
name_input.type = "text"
name_input.placeholder = "Name"
name_input.name = "name"

salary_input.type = "text"
salary_input.placeholder = "Salary"
salary_input.name = "salary"

id_input.type = "text"
id_input.placeholder = "ID"
id_input.name = "id"


// Добавляем элементы в форму 

user_form.append(name_input)
user_form.append(document.createElement("br"))
user_form.append(document.createElement("br"))

user_form.append(salary_input)
user_form.append(document.createElement("br"))
user_form.append(document.createElement("br"))

user_form.append(add_btn)
user_form.append(document.createElement("br"))
user_form.append(document.createElement("br"))

user_form.append(del_btn)
user_form.append(document.createElement("br"))
user_form.append(document.createElement("br"))

// добавить форму в div root 
div_root.append(user_form)
// ------------------------------------------------------
// ДОБАВЛЯЕМ КАРТОЧКУ ПО КЛИКУ ..........................

// вешаем событие для добваления карточки 
add_btn.addEventListener("click", (event) => {
    event.preventDefault(); // отключили поведение браузера 
   // создем переменные и собираем инфу которую ввел пользователь
    const name = name_input.value
    const salary = salary_input.value
    const id = Date.now();
    const image = `https://picsum.photos/200?id=${id}`;
// проверяем заполнение полей
    if (!name || !salary) {
        alert("Введите имя и зарплату")
        return
    }

// создаем новую карту 
    const new_user = {
        name: name,
        salary: salary,
        id: id,
        image: image
}
// добавляем карту в массив 

users.push(new_user);

// создаем новую карточку как div element 
const new_card = newCard(new_user)
       //const new_card = document.createElement("div")
       //new_card.append(new_user)
// добавляем в контейнер 
cards_container.append(new_card)

// очищаем поля для следующего ввода

name_input.value = "";
salary_input.value = "";

});

// пишем функцию для доюбавления карточки 

function newCard (userInfo) {

    // создаем элементы как и для первой карточки 
    const new_elem_card = document.createElement("div")
    new_elem_card.classList.add("new_elem_card")

    const new_user_name = document.createElement("p")
    const new_user_salary = document.createElement("p")
    const new_user_id = document.createElement("p")
    const new_user_img = document.createElement("img")

    // заполняем элементы 

    new_user_name.innerText = ` Name: ${userInfo.name}`
    new_user_salary.innerText = `Salary: ${userInfo.salary}`
    new_user_id.innerText = `User number ${userInfo.id}`
    new_user_img.src = userInfo.image;


    // создаем отдельный div container что бы проще было стилизовать потом с картинокой 
    const user_data_container = document.createElement("div")
    user_data_container.classList.add("user_data_container")
    // добавляем параграфы
    user_data_container.append(new_user_name,new_user_salary,new_user_id)
    // добавляем в карточку 
    new_elem_card.append(new_user_img,user_data_container)

    return new_elem_card
}

// Удаление карточки по двойному клику ..........................

cards_container.addEventListener("dblclick", (event) => {
    const card = event.target.closest(".elem_card")
// проверяем нашли ли мы карточку и если да,выполняем удаление 
    if (card) {
        card.remove()
    }
})
// closest() - позволяет найти ближайший элемент с соответствующим значением 

// Сначала создала кнопку удаления а потом поняла что нужно сделать по другому,
// теперь не могу удалить поэтому сделаю eventPreventDefault()

del_btn.addEventListener("click" , (event) => {
    event.preventDefault()
})