let products = {
    data:[{ productname:"cold coffee",
        category : "Freshness",
        price:120,
        Image : "Assets/coffee.jpg",
    },
    {
        productname:"Tea",
        category : "Freshness",
        price:40,
        Image : "Assets/chai.jpg",
    },
    {
        productname:"Masala Chai",
        category : "Freshness",
        price:60,
        Image : "Assets/masala chai.jpg",
    },
    {
        productname:"hot coffee",
        category : "Freshness",
        price:120,
        Image : "Assets/coffee.jpg",
    },
    {
        productname:"French Fries",
        category : "Delicious",
        price:70,
        Image : "Assets/french-fries.png",
    },
    {
        productname:"Samosa",
        category : "Delicious",
        price:50,
        Image : "Assets/samosa.png",
    },
    {
        productname:"Noodles",
        category : "Delicious",
        price:70,
        Image : "Assets/noodles.png",
    },
    {
        productname:"Sandwich",
        category : "Delicious",
        price:70,
        Image : "Assets/sandwich.png",
    },
    {
        productname:"Burger",
        category : "Delicious",
        price:50,
        Image : "Assets/Burger.png",
    },
    {
        productname:"Orange-juice",
        category : "Juice",
        price:70,
        Image : "Assets/orange.png",
    },{
        productname:"Cultural Food",
        category : "Feelings",
        price:70,
        Image : "Assets/cutural food.jpg",
    
    }]
}






for(let i of products.data){
    //create card
    let card = document.createElement('div');
    // card should have category and should stay hidden initially
    card.classList.add("card", i.category ,"hide");
let imgContainer = document.createElement('div');
imgContainer.classList.add('image-container');

    // image tag
    let image = document.createElement('img');
    image.setAttribute('src', i.Image);
    imgContainer.appendChild(image);
    let add = document.createElement("button");
    add.classList = "added";
    add.innerText = "Remove";
    add.style.padding = '2px'
    add.style.backgroundColor = "#6759ff";
   add.style.borderRadius = '5px';
    imgContainer.appendChild(add)
    
    card.appendChild(imgContainer);
    document.getElementById('products').appendChild(card);




    let container = document.createElement("div");
container.classList.add("container");
// creating product name
let name = document.createElement("h5");
name.classList.add('product-name');
name.innerText = i.productname.toUpperCase();
container.appendChild(name);
card.appendChild(container);


let price = document.createElement("h6");
price.innerText="Rs. " + i.price;

container.appendChild(price);



}










//parameter passed from button (Parameter same as category)

let buttons = document.querySelectorAll('.button-value');
let newbutton = [...buttons]


function filterProduct(value){
    let prevbuttons = document.querySelectorAll(".button-value");

  
    prevbuttons.forEach((element)=>{
        if(value == element.innerText){
      function color(){
        element.style.backgroundColor = "#6759ff";
        element.style.color =  "white";
      }
      color();

        }else{
        element.style.backgroundColor = "";
        element.style.backgroundColor ="";
        element.style.color = "#6759ff";
        
        }
    })
   



    let elements = document.querySelectorAll(".card");

    //loop through all cards
    elements.forEach((element)=>{
        if(value === "All"){
          
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
       

            }
            else {
                // hide otherelements
                element.classList.add("hide");
              
            }
        }
    });
};

// SEARCH
 document.getElementById("search").addEventListener("click",()=>{
    let searchInput = document.getElementById
    ('search-input').value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);
    // loop through all elements
    elements.forEach((element,index)=>{
        //check if text includes search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");

        }else{
            // hide others
            cards[index].classList.add("hide");
        }
    })


})

const cartCountElement = document.querySelector('.addtocart');
let cartItemCount = 0; // Initialize cart count

// Example: When an item is selected (e.g., button click)



const addToCartButton = document.querySelectorAll('.card');

addToCartButton.forEach((ele)=>{
    ele.addEventListener('click', () => {
        // Increment cart count
        cartItemCount++;
        ele.style.backgroundColor = "rgb(244, 214, 181)";
 
        
       
       
        // Update cart count display
        cartCountElement.innerText = cartItemCount;
        
        
        
    });
    
    
    
    

   

    
})



// display all products first time
window.onload = ()=>{
    filterProduct("All");
};











