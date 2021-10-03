
import { loadHome } from "./homepage"
function helloMenu(){
    document.querySelector('#content').textContent = ""
    //loads the home page
    loadHome()
    //remove the homepage image
    document.querySelector('.image').src = ""
    //change sub title
    document.querySelector('.title').textContent = "Hello menu"
    //factory function to create menu items
    function createMenuItems (title,image,description,price){
        const container = document.createElement('div')
        container.classList.add('flex')
        const img = document.createElement('img')
        img.setAttribute('src',image)
        img.classList.add('foodimg')

        const foodTitle = document.createElement('h3')
        foodTitle.textContent = title
        foodTitle.classList.add('foodtitle')

        const foodDescription = document.createElement('p')
        foodDescription.textContent = description
        foodDescription.classList.add('fooddescription')

        const foodPrice = document.createElement('p')
        foodPrice.textContent = price
        foodPrice.classList.add('foodprice')

        //append container to content
        document.querySelector('#content').appendChild(container)
        //append title to container
        container.appendChild(foodTitle)
        //append image to title
        foodTitle.appendChild(img)
        //append description to title
        foodTitle.appendChild(foodDescription)
        //append price to description
        foodDescription.appendChild(foodPrice)
    }
    createMenuItems("Telephone","../images/telephone.png","A yummy telephone", "$7.39")
    createMenuItems("Bacon","../images/bacon.png","Some good bacon bro", "$14.49")
}
export default helloMenu