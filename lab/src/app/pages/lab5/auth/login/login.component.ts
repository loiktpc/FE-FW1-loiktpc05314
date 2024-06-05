import { Router } from '@angular/router';
import { AuthService } from './../../../../@core/service/api/auth.service';
import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule , Validators  } from '@angular/forms';
import { log } from 'console';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule , NgIf , HttpClientModule  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  loginFrom!: FormGroup;
  constructor(private AuthService :AuthService , private router : Router){
    
  }

  ngOnInit(): void {
    this.loginFrom = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      psw: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  onSubmit(): void {
    //  cách 1
    if(this.loginFrom.valid){
        this.AuthService.Login(this.loginFrom.value).pipe().subscribe({
          next: this.handleLoginSuccess.bind(this),
          error: this.handleLoginFailed.bind(this),
        })
    }
    //  cách 2 
    // if(this.loginFrom.valid){
    //   this.AuthService.Login2(this.loginFrom.value)
    // }
    // //  cách 3 
    // if(this.loginFrom.valid){
    //   this.AuthService.login3(this.loginFrom.value).subscribe((res)=>{
    //     console.log('check result 3:', res);
    //   });
    // }
  }

  protected handleLoginSuccess(res: any) {
    this.router.navigate(['/lab6unit']).then();
    console.log('check result 1:', res);
    // thành công thì chuyển trang 
  }

  protected handleLoginFailed() { }
  
 
}
