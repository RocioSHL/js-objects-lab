const aCar = {
    owner : "Joe Bloggs",
    previous_owners: [
        "Pat Smith - 1 Main Street",
        "Sheila Dwyer - 2 High Street"
      ],
    type :{make : 'Toyota',model:'Corolla', cc:1.8} ,
    registration : {year:'201',countycode:'WD',number:'1058'}
  };

     aCar.mileage = 1000
    aCar.color = {

    exterior : 'red',
    interior : {texture:'leather',shade:'black'}

  }
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log(aCar.registration.year + '-' + aCar.registration.countycode +'-'+ aCar.registration.number)
console.log("its a " + aCar.color.exterior +aCar.mileage +"mileage" + aCar.color.interior.shade +"interior")
console.log('First owner : ' + aCar.previous_owners[0] )


  