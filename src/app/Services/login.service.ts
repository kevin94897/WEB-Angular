import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _serviceController: AngularFireAuth
  ) { }

  public async signIn(email: string, password: string) {
    let data: any = {};
    await this._serviceController.auth.signInWithEmailAndPassword(email, password).then(
      response => {
        return data = response;
      }
    ).catch(
      error => {
        return data = { code: error.code, message: this.getFriendlyErrorMessage(error.code) };
      }
    );
    return data;
  }

  private getFriendlyErrorMessage(errorCode: string): string {
    const messages: { [key: string]: string } = {
      'auth/user-not-found': 'No existe una cuenta con este correo electrónico.',
      'auth/wrong-password': 'Contraseña incorrecta.',
      'auth/invalid-email': 'El correo electrónico no es válido.',
      'auth/user-disabled': 'Esta cuenta ha sido deshabilitada.',
      'auth/too-many-requests': 'Demasiados intentos fallidos. Intente más tarde.',
    };
    return messages[errorCode] || 'Ha ocurrido un error de autenticación.';
  }
}
