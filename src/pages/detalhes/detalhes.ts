import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoasProvider } from '../../providers/pessoas/pessoas';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers: [PessoasProvider]
})
export class DetalhesPage {

  //para jogar na tela crio um atributo
  public email: string;
  public pessoa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pessoasProvider: PessoasProvider) {
      this.email = navParams.get("email");
      this.pessoa = this.pessoasProvider.loadByEmail(this.email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
