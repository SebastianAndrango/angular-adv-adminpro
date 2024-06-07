import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject)=>{
    //   if (false) {
    //     resolve('hola mundo')
    //   } else {
    //     reject('Algo salio mal')
    //   }
    // });

    // promesa.then((mensaje)=>{
    //   console.log(mensaje)
    // })
    // .catch((err)=>{
    //   console.log('error en mi promesa'+ err);

    // })

    // console.log('fin del init')
    this.getUsuarios().then(usuario =>{
      console.log(usuario);

    })
  }

  getUsuarios(){
    const promesa = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(body => console.log(body.data));
    })

    return promesa

  }

}
