import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  args = [
    {
        publicKey: "0xc0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0de",
        rfc: "AAIE826262T55",
        lastName: "AROCAS PASADAS",
        name: "ESTEFANIA"
    },
    {
        publicKey: "0xc0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0de",
        rfc: "AAIE826262T55",
        lastName: "AROCAS PASADAS",
        name: "ESTEFANIA"
    },
    {
        publicKey: "0xc0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0dec0de",
        rfc: "AAIE826262T55",
        lastName: "AROCAS PASADAS",
        name: "ESTEFANIA"
    }
];

  constructor() { }

  getData(value) {
    let results = [];
    for(let i =0; i <= this.args.length; i++){
      if(value === this.args[i].rfc){
        console.log(this.args[i].rfc);
        results.push(this.args[i]);
      }
    }
    return results;
  }
}
