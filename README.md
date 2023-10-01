# product App
The Product App was developed using Angular version 15.0.5 by using a cli command (NG ADD MATERIAL)
The App displays a list of products using Api, allows users to view product details, and manage a shopping cart.

**COMMANDS USED**
NG ADD MATERIAL for Angular Material.
NG G C <NAME> for creating components.
NG G S SERVICE/<NAME> for creating Services.
NG SERVE --O for deploying application in localhost.

**SERVICE**
The services are used to separate app data and functions that can be used by multiple components in Product app.
A service must be made injectable in the constructor as private. 
Services that are injectable and used by a component become dependencies of that component.

**LIST OF PRODUCTS**
Products Component was created to displays a list of products using cli command(NG GENERATE COMPONENT PRODUCTS)
Using API call, list of products is displayed in products component.
product listing displays the product title,price,Image,Add to cart Button.

**DETAILS OF THE PRODUCTS**
DetailsProduct Component was created to displays a list of products using cli command(NG GENERATE COMPONENT DETAILSPRODUCT)
Using API call, Details of the particular Product is displayed in Detailsproduct component using the product ID which was sent as a 
ParaMap using ActivatedRoute.
Details Product page consists of Title,price,Descriptionn,Image,Category,Rating,Reviews count,Add to cart Button.

**CART**
Cart Component was created to displays a cart List using cli command(NG GENERATE COMPONENT CART)
Cart component consists of Image,Title,Price,Total price of the particular product,Increment and Decrement of the Quantity.
The user can able to increment and decrement the quantity of the product inside cart page.
The Delete button is present to delete the product from the cart list.
The Empty cart button is to clear the cart list to empty.
The Shop More button is to shop more items and it will navigate the user to the product page.
The CheckOut Button is to checkout our purchased products and navigate to the address details page.

**ADDRESS**
Address Component was created to take the address of the User to deliver the products using cli command(NG GENERATE COMPONENT ADDRESS).
It consists of DoorNo,Street,city,state,zipcode.
The user should fill those valid details to deliver the items.

**PAYMENT**
Payment Component was created to fill payment details using cli command(NG GENERATE COMPONENT PAYMENT).
It consists of two options only (Card or UPI).
The user needs to fill either the card or upi details for payment.
The place order button is to Place the order of the purchased items

**ORDER SUCCESSFULL**
Order Placed Component was created to fill payment details using cli command(NG GENERATE COMPONENT ORDERPLACED).
It consists of a order successful message and the user can also place another order by clicking shop more button.
