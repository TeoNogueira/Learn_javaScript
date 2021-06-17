const inventory = {

   bagSpaces: 15,
   bagIn: 0  

}
    
   inventory.addItems = (itemsQuantity) => {
  
  

   if(inventory.bagIn === inventory.bagSpaces) {

      return 'Inventory is Full'
   }


   if(inventory.bagIn + itemsQuantity > inventory.bagSpaces) {
      
      const forbiddenBagIn = inventory.bagSpaces - inventory.bagIn 
      const singularOrPluralFits = inventory.bagIn === 1 ? `It fit's` : 'Fit'
      return `${singularOrPluralFits} ${forbiddenBagIn} in the inventory`

   }


   
   inventory.bagIn += itemsQuantity 
   const receivedSocket = inventory.bagIn
   const singularOrPluralItems = inventory.bagIn === 1 ? 'item' : 'items'
   
   return `Received ${receivedSocket} ${singularOrPluralItems}`

}


console.log(inventory.addItems(13))

console.log(inventory)

