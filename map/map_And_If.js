const meList = [

{id: 1, name: 'Teo', clan: 'Disolver', title: 'Baron', human: false},
{id: 2, name: 'Leo', clan: 'Nation', title: 'Baron', human: true},
{id: 3, name: 'Rick', clan: 'Over', title: 'Baron', human: true},
{id: 4, name: 'Gio', clan: 'GreenWind', title: 'Baron', human: false},

]

const mapeia = meList.map(item => {

if (item.id === 4 ) {
    
const test = `TEONOGUEIRA`
const clanType = item.clan = 'NightElf'
return `${item.name = test} ${item.clan = clanType} ${item.human = true}`

}

})

console.log(meList[3])


