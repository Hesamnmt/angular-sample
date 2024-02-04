import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { ICreateUser, ILoginRegister, IUserData, IUserInfo } from '../interfaces/users.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators'
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { NotificationsService } from '../notifications.service';
import { LoginService } from '../login.service';
import { StylesService } from '../styles.service';
import { map, filter, shareReplay, take, takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-users',
  templateUrl:  './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @ViewChild('loginFormRef') loginFormRef!: ElementRef;


  showCreateForm = false;
  myForm !: FormGroup;
  loginForm !: FormGroup;
  registerForm !: FormGroup;
  users: IUserInfo[] = [];

  constructor(private fb: FormBuilder ,private userService: UserService , private notif: NotificationsService,
              private loginRegister :LoginService , private notife : NotificationsService, 
              private stylesService: StylesService) {}



  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', [Validators.required]],
    })
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    })
    
    console.log("ng on it")
    this.userService.getUsers(2).pipe(
      tap(i => console.log(i))
    ).subscribe((res:any)=>{
      this.users=res.data
      console.log(this.users)
    }
    );
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    if (this.showCreateForm && this.loginFormRef) {
      setTimeout(() => { // Use setTimeout to ensure the view is updated before scrolling
        this.loginFormRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
    }
  }

  onSubmitForCreateUser(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      const { name, job } = this.myForm.value;
      const body: ICreateUser = { name, job };
      this.userService.createUser(body).subscribe(
        (response) => {
          this.notif.showNotification('Creating User Was Successfull')
          console.log(response);
        },
        (error) => {
          console.error('Registration Failed:', error);
        }
      );
    }
    
  }

  onSubmitForLogin(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      const body: ILoginRegister = { email, password };
      this.loginRegister.login(body).subscribe(
        
        (response:any) => {
          this.notife.showNotification('Logging is Successfully!');
          localStorage.setItem('token', response['token']);
          console.log("local storage",localStorage.getItem('token'));
          console.log("response: ",response);
          
        },
        (error) => {
          this.notife.showNotification('Logging is Unsuccessfully!', error)
        }
      );
    }
  }

  onSubmitForRegister(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const { email, password } = this.registerForm.value;
      const body: ILoginRegister = { email, password };
      this.loginRegister.register(body).subscribe(
        (response) => {
          localStorage.setItem('token', JSON.stringify({ token: response}));
          console.log(localStorage)
          this.notife.showNotification('Registeration is Successfully!');
          console.log(response);
        },
        (error) => {
          this.notife.showNotification('Registeration is Unsuccessfully!', error)
        }
      );
    }
  }

  getColor(color: string): string {
    return this.stylesService.getColorClass(color);
  }
}

