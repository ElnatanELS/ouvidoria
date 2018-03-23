import { HomePage } from './../home/home';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registerCredentials = { email: '', password: '' };

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage 1');
  }

  pushCadastra(){
    this.nav.push(CadastroPage)
  }

  public login() {


    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot(HomePage);
      } else {
        this.showError("Acesso Negado!");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showError(text) {
    
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
