const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        { owner:"Pat Smith", adress:" 1 Main Street"},
        {owner:"Sheila Dwyer",  adress:"2 High Street"}
      ],
    type :{make : 'Toyota',model:'Corolla', cc:1.8} ,
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
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
console.log('First owner : ' + aCar.previous_owners[0].owner+"  "+aCar.previous_owners[0].adress  )
for (let i = 0 ; i < aCar.features.length ; i += 1) {
  console.log(aCar.features[i]) ;
} 
for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
  console.log(aCar.previous_owners[i].owner+"  "+aCar.previous_owners[i].adress ) ;
} 


  