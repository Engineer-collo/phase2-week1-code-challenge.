### SIMLE E-COMMERCE CART APP.
### Introduction.
This project is to make a simple E-commerce cart application. upon complection our customers are set to enjoy the following on ther user interface.
    *See a list of available products with their names, prices, and an "Add to Cart" button.
    *Add a product to the cart, increasing its quantity if it’s already in the cart.
    *View a list of all items in the cart, including their names, prices, quantities, and the total price.
    *Remove a product from the cart or adjust its quantity




### ENVIRONMENT SET UP.
For setting up the environment run the following commants on the terminal
  ( npm create vite@latest my-react-app -- --template react )  - to creat a react app.
  ( cd my-react-app ) - navigate to the react app.
  ( npm install ) - to install project dependencies.
  ( npm run dev ) -to run the project to the server.





  ### LINKING GIT REPOSITORY WITH REACT APP LOCAL REPOSITORY.
  -run ( git init ) on your terminal to initialize the react app repository.
  -Go to Github create a new repository, on the visibility set it to private, then copy the github url and paste it on the terminal.
  -tHen add the changes ( git add . )
  -commit the changes ( git commit -m 'first commit' )
  -check the remote repositor's branch ( git brancg )
  -push your changes to remote repository ( git push origin main/master )

  You will be prompted to enter your username and password.
  -username: add your Github account username.
  -password: enter your generated "Personal Access Token" (PAT) 
   



   ### SETTING UP COMPONENTS.
   Start setting up the Header componemt e.g 
   
   function Header() {
    return(

    )
   }

export the component to be accessed globally by other components e.g

   function Header() {
    return(

    )
   }

   export default Header;




   ### IMPORTING THE HEADER COMPONENT IN THE (App.JS) COMPONENT.
   In the App.js component import the Header component that is now available globally,then return it in the jsx file as a child component using the closing tag e.g

    function App() {
       return(
       <Header/>
        )
   }




   ### GET THE DATA THAT WILL BE USED.
   -Take the data provided in the code challenge and store it in a variable in the App.js component right above the return. e.g

   function App() {

     const data = [
            { id: 1, name: "T-Shirt", price: 20 },
            { id: 2, name: "Jeans", price: 40 },
            { id: 3, name: "Sneakers", price: 60 },
            { id: 4, name: "Hat", price: 15 },
            { id: 5, name: "Socks", price: 5 },
           ];

            return(
           <Header/>
       )
   }

   -then take the data and pass it to the Header component as a prop e.g


   function App() {

     const data = [
            { id: 1, name: "T-Shirt", price: 20 },
            { id: 2, name: "Jeans", price: 40 },
            { id: 3, name: "Sneakers", price: 60 },
            { id: 4, name: "Hat", price: 15 },
            { id: 5, name: "Socks", price: 5 },
           ];

            return(
           <Header data={data}/>
       )
   }



   ### ACCESSING THE DATA IN THE (Header.js) COMPONENT.
   -In the parantheses of the Header component destructure the prop object that is passed in by the parent App.js to make it available fo use within the Header component. e.g

    function Header({ data }) {

    }




### INITIALIZING THE STATE THAT WILL ENABLE US ALTER THE LIST ARRAY
Import ( useState ) from react, then after importing it initialize it to hold the data shared as a prop, it will hold the data in the items variable. e.g

    import React, { useState } from "react"

function Header() {
    const [items setItems] = useState()
    return(
  <h1> </h1>
    )
}



### DISPLAYING THE DATA DESTRUCTURED TO THE USER INTERFACE.
-In the jsx part map through the data that is now in state and dispay it on the browser's user interface.
-to the same jsx file add a button to each button so that when the user decides to add it to the cart he/she can just click the button and then item gets added on the cart. e.g

        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button id="addCartBtn" onClick={() => addItemToCart(item)}>
              Add to cart
            </button>
  


### INITIALIZE THE STATE THAT WILL ENABLE US ALTER THE STATE OF THE CART
Import ( useState ) from react, then after importing it initialize it to hold the data shared as a prop, it will hold the data in the items variable. 
- place the state value to be an empty array e.g

    import React, { useState } from "react"

function Header() {
    const [cart setCart] = useState([])
    return(
  <h1> </h1>
    )
}



### SET UP A FUNCTION TO HANDLE THE ADD TO CART BUTTON.
-set up the function that will handle the carts state when the button is clicked, it will call the setCart function which will the alter the state of the cart, the function is set such that when the item being clicked is already on the cart its quantity is recorded and the summation of all the products is also recorded, so that the user is notified what he/she is expected to pay e.g

function addItemToCart() {

}




### SET UP A FUNCTION TO HANDLE THE REMOVE FROM CART BUTTON.
-Set up a function that will remove the item from the cart when the remove button is fired. e.g

function RemoveItemFromCart() {

}




### SYLING OF THE CART APP.
Select all the ids and elements and style then in the App.css.


### PUSHING THE CONTENT TO GITHUB.
Run the following commands to push your work to Github.
  - add the changes ( git add . )
  -commit the changes ( git commit -m 'first commit' )
  -check the remote repositor's branch ( git branch )
  -push your changes to remote repository ( git push origin main/master )
