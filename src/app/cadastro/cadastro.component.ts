import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario: Usuario = {};

  constructor(
    private afAuth: AngularFireAuth,
    //private afStore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async cadastrar (){
    //if(this.usuario.senha != this.usuario.confsenha) {
     // return console.error("as senhas não são iguais!");
   // }

    try {
      const nvUsuario = await this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha);
      console.log();
      //Isso aqui é um "filtro" pra os dados que vão pro banco
      //const nvUsuarioObject = Object.assign({}, this.usuario);

      //delete.nvUsuarioObject.senha;
      //delete.nvUsuarioObject.confsenha;

    //await this.afStore.collection('Usuários').doc(nvUsuario.user.uid).set(nvUsuarioObject);

    } catch (error) {
      console.dir(error);
    }
  }

}