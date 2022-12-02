import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  ApiURL = "http://localhost/adivasipellipandiri/Api/";
  constructor(private _http: HttpClient, private route: Router) { }

  UserLogin(logform:any):Observable<any>{
    console.log("facll",logform);
    return this._http.post(`${this.ApiURL}/userLogin`,logform)
  }
  register(regform:any){
    console.log("regform",regform);
    return this._http.post(`${this.ApiURL}/userreg`,regform)
  }
  getProfiles(data:any){
    console.log("userid",data);
    return this._http.post(`${this.ApiURL}/getProgiles`,data)
  }
  logout(redirect = true) {
   /*  localStorage.removeItem('mst_a');
    localStorage.removeItem('mst_b');
    localStorage.removeItem('mst_tx');

    localStorage.removeItem('mst_g');
    localStorage.removeItem('mst_is');
 */
    if (redirect) {
      this.route.navigate(['/home'], { replaceUrl: true }).then(res => {
        window.location.reload();
      });
    }
  }
}
