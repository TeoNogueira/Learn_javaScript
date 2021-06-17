const tvShows = [

    { name: 'Breaking Bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2015 },
    { name: 'True Detective', releaseYear: 2014 },
    { name: 'Hannibal', releaseYear: 2013 },
    { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
    { name: 'House M.D.', releaseYear: 2004 },
    { name: 'Watchmen', releaseYear: 2019 }

  ]


  const mapearArr = tvShows.map((item) => {


     if(item.releaseYear < 2017) {


        return [{name: item.name, releaseYear: item.releaseYear * 200}]
     }

     return item

  })



  console.log(mapearArr)

  console.log(tvShows)