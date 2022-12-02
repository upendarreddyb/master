import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private userservice: UserserviceService, private fb: FormBuilder,private router: Router) { }
  form: any;
  regform: any;
  error = "";
  submitted = false;
  regsubmitted = false;
  Sucessmessage = "";
  async ngOnInit() {
    await this.loadJsFile('assets/js/vendor.min.js');
    await this.loadJsFile('assets/js/dashboard-1.init.js');
    await this.loadJsFile('assets/js/app.min.js');
    this.form = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'acceptTerm': [true, Validators.required],
    });
    this.regform = this.fb.group({
      'username': ['',  [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9]+')]],
      'profile_for': ['',Validators.required],
      'email': ['', Validators.required],
      'mobileno': ['', [Validators.required, Validators.pattern('[6-9][0-9]{9}')]],
      //'gender': [true, Validators.requiredTrue],
      'password': ['', Validators.required],
      'dob': ['', Validators.required],
      'caste': ['', Validators.required],
      'religin': ['', Validators.required],

    });
  }

  async loadJsFile(url: any) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    this.renderer.appendChild(this.document.body, script);
    return Promise.resolve(true);
  }
  login(): void {
    this.error = "";
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    try {
      console.log('user data', this.form.value)
      this.userservice.UserLogin(this.form.value).subscribe(res => {
        console.log("uers from login", res);
        if (res['result'] == "success") {
          this.Sucessmessage = res['message'];
          this.form.reset();
          localStorage.setItem("useremail",res.message[0].user_id);
          localStorage.setItem("gender",res.message[0].gender);
          this.router.navigate(['/dashboard'], { replaceUrl: true }).then(() => {
          });
        }
      },
        error => {

        })
    }
    catch (e) {
      console.log('error500', e);
    }
  }


  register(): void {

    if (this.regform.invalid) {
      this.regsubmitted = true;
      alert("errr");
      return;
    }
    try {
      console.log('user data', this.regform.value)
      this.userservice.register(this.regform.value).subscribe(res => {
        console.log("res--->", res);
      },
        (err) => {
          console.log("err", err);
        });
    } catch (e) {
      console.log('error500', e);
    }
  }

  get f() {
    return this.form.controls;
  }
  get r() {
    return this.regform.controls;
  }

}
