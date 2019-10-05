import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  showAlert: boolean =false
  message: string = "Ha ocurrido un error de conexion";

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private _loginService: LoginService,
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

  async signIng(user:string,password:string){
    await this._loginService.signIn(user,password).then(
      response => {
        if(response.code){
          this.showAlert = true;
          this.message = response.message;
        }else{
          console.log('inicio sesion')
        }
      }
    )
  } 

  async onSubmit(){
    console.log('clicked')
    const user = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    console.log(this.loginForm);
    await this.loginForm.valid ?
      await this.signIng(user,password) : console.log("ha ocurrido un error")
  }
}
