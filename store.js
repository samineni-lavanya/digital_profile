/**** page upload ready for js to start****/

if (document.readyState == 'loading') { 

 document.addEventListener('DOMContentLoaded', ready)
 ready() 
} 
 else { 
  ready() 
} 


/******remove item from cart function
function ready is for when the html is finished loading then it initiates the action in the function****/

function ready() { 
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++){ 
var button = removeCartItemButtons[i]  
button.addEventListener('click', removeCartItem) 
}

/***** this var is for the quantity amount of items custmer wants to add ****/    

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')      
  for (var i = 0; i < quantityInputs.length; i++) {     
  var input = quantityInputs[i] 
  input.addEventListener('change', quantityChanged)
  
/******* the 'quantityChanged' Is a function corrisponding or 'hyperlinks'to this event listner,   *******/  

  }
  
  
/****** end for loop******/

/******** this var hyperlinks to add to cart function*******/     

  var addToCartButtons = document.getElementsByClassName('shop-item-button') 
  for(var i = 0; i < addToCartButtons.length; i++) { 
  var button = addToCartButtons[i]
  button.addEventListener('click', addToCartClicked) 
  }// end forloop

/*******this is the event listner that add items to the cart when the end user clicks on the add to cart*******/         

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked) 
}


/*******this is the final alert function which sends the thank you for purchas alert*******/
    
function purchaseClicked() { alert('Check all the fields to proceed ');   
window.location.href = "file:///C:/xampp/htdocs/ORGANIC%20MART/checkout%20.html";     
     var cartItems = document.getElementsByClassName('cart-items')[0] 
     while (cartItems.hasChildNodes()) { cartItems.removeChild(cartItems.firstChild) 
     }
     
      
/******* end alert this while loop removes all the cart itmes 1 by 1 till there are no more cart items left. removes the first child

/****the updateCartTotal , is a hyperlink to itself name function which up dates cart total upon the increment or decrement cart items******/ 
     

     updateCartTotal() 
}


/***** event listners add on's begin

// functions for established html begins 


// remove cart items function the global variables are at the beggining of the code*****/
    
function removeCartItem(event) { 
 var buttonClicked = event.target    
 buttonClicked.parentElement.parentElement.remove() 
 updateCartTotal() 
}
/****** quantity add or remove amounts
// NaN means not a number
// note the update cart total at the end of the code, which is after the code block function fineshess the computation

// event happens somewhere within the program******/
      
function quantityChanged(event) {         
  var input = event.target          
  if (isNaN(input.value) || input.value <= 0) { input.value = 1 } updateCartTotal() 
}


/*******when user clicks on the add to cart button fucntion  this places the item in a row adding to the items in the cart
// the below function is hyperlinked to the html class, *******/



function addToCartClicked(event) { 
 var button = event.target
 var shopItem = button.parentElement.parentElement 
 var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText 
 
/******** this get items by class name is the html dom manipulation, gets the first item of the array which is 0  ******/  
 
 var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
 var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src 
 
/*******this adds the picture to the cart row and retrieves or queries the pictures from the source code aka .src *******/   
    // this is a chain command   
    addItemToCart(title, price, imageSrc)
     updateCartTotal() 
} 

/******* Add Item to cart this adds the items to the cart array*******/
    
function addItemToCart(title, price, imageSrc) { 
 var cartRow = document.createElement('div') 
 cartRow.classList.add('cart-row') 
 var cartItems = document.getElementsByClassName('cart-items')[0] 
 var cartItemNames = cartItems.getElementsByClassName('cart-item-title') 
 for (var i = 0; i < cartItemNames.length; i++){ 
 if (cartItemNames[i].innerText == title) { 
 alert('This item is already added to the cart')
return 

/****** this return allows to exit the function without interfering wiht the rest of the process durration of the client selection items and completing the purchas  ****/          

}


/*** end for var items loop which checks if item is already added to the cart******/

}

/****** cartRowContents remove button, price, quantity. Note back tick at the start of div. this is the  and html , css variable for the cart row  */
// this is a html div inside of javascript hence javascript dom manipulation, however this div is really a variable for the elments that are being selected to be add to the cart row*****/

var cartRowContents =
 ` <div class="cart-item cart-column">
   <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
   <span class="cart-item-title">${title}</span> 
   </div>        
   <span class="cart-price cart-column">${price}</span>        
   <div class="cart-quantity cart-column">
   <input class="cart-quantity-input" type="number" value="1" min="1">               
   <button class="btn btn-danger" type="button">REMOVE</button>            
   </div>`
                                              
cartRow.innerHTML = cartRowContents 
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0]
  .addEventListener('click', removeCartItem) 
  cartRow.getElementsByClassName('cart-quantity-input')[0]
  .addEventListener('change', quantityChanged) 
} 

/****** end cartRowContents varabial, idk how to spell variable


Cart Row Total Code *****/                 

function updateCartTotal() {
     var cartItemContainer = document.getElementsByClassName('cart-items')[0] 
     var cartRows = cartItemContainer
     .getElementsByClassName('cart-row')
     var total = 0 
     for(var i = 0; i < cartRows.length; i++) {
     var cartRow = cartRows[i] 
     var priceElement = cartRow.getElementsByClassName('cart-price')[0] 
     var quantityElement = cartRow
     .getElementsByClassName('cart-quantity-input')[0] 
     var price = parseFloat(priceElement.innerText.replace('₹', '')) 
     
/******* the 'parseFloat' transforms the string to an integer,  *******/       
     
     var quantity = quantityElement.value 
     total = total + (price * quantity) 
     }
/******this rounds the integer amount to two decimels *******/                         
 
 total = Math.round(total * 100) / 100 
        document.getElementsByClassName('cart-total-price')[0].innerText = '₹' + total 
}
