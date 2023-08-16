// Задание 1
const url = 'https://jsonplaceholder.typicode.com/users'
const wrapElement = document.querySelector('.wrapper')


const getData4 = async (someUrl) => {
    const res = await fetch(someUrl)
    const data = await res.json()
    return data
}

try {
    const users = await getData4(url)
    console.log(users);
    users.forEach((element, index) => {
        wrapElement.insertAdjacentHTML(
            'beforeend',
            `
            <div class="box" id = "${index}">name: ${element.name} <br>  city: ${element.address.city} <br> 
            <button>delete</button></div>
            
            `
        )
        localStorage.setItem(`${index}`, JSON.stringify(element.name))

    });
    const btns = document.querySelectorAll('button')
    console.log(btns);
    btns.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            const delBox = document.getElementById(index)
            delBox.remove()
            localStorage.removeItem(index)
        }) 
    })
} catch (error) {
    console.error("ЧТО-ТО ПОШЛО НЕ ТАК (asi) " + error)
}