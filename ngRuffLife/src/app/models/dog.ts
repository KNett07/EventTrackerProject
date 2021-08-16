export class Dog {
  id: number;
  name: string;
  favToy: string;
  favTreat: string;
  favPlace: string;
  vices: string;


  constructor(
    id: number = 0,
    name: string='',
    favToy: string = '',
  favTreat: string = '',
  favPlace: string = '',
  vices: string = ''

  ){
    this.id = id;
    this.name = name;
    this.favToy = favToy ;
    this.favTreat = favTreat ;
    this.favPlace = favPlace ;
    this.vices= vices ;

  }



}
