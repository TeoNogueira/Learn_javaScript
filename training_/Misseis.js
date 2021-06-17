const tomahawk = {

    missileInventory: 15,
    missileIn: 0
}


tomahawk.addMissile = (missileQuantity) => {
  
if(tomahawk.missileIn === tomahawk.missileInventory) {
 
return 'Inventory is Full!'

}

if(tomahawk.missileIn + missileQuantity > tomahawk.missileInventory) {
    
    const forbiddenMissileIn = tomahawk.missileInventory - tomahawk.missileIn
    const fitPluralOrSingular = forbiddenMissileIn === 1 ? 'Cabe' : 'Cabem'
    const fitPluralOrSingularMissil = forbiddenMissileIn === 1 ? 'míssil' : 'mísseis'

    return `${fitPluralOrSingular} ${forbiddenMissileIn} ${fitPluralOrSingularMissil} no inventário`


}

    tomahawk.missileIn += missileQuantity
    const missilesIn = tomahawk.missileIn
    const existIn = tomahawk.missileIn === 1 ? 'Existe' : 'Existem'
    return `${existIn} ${missilesIn} mísseis`
    
}


console.log(tomahawk.addMissile(14))
console.log(tomahawk.addMissile(12))

console.log(tomahawk)

