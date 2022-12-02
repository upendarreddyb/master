import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.css']
})
export class UserprofilesComponent implements OnInit {

  user_id: any;
  userprofiles: any;
  gender:any;
  constructor( private userservice: UserserviceService) { }

  ngOnInit(): void {
     this.getusers();
  }
  async getusers() {
    try {
    
      let data = {
        "useremail": localStorage.getItem("useremail"),
        "gender": localStorage.getItem("gender"),
      }
     await this.userservice.getProfiles(data).subscribe(res => {
        console.log("profils", res);
        this.userprofiles = res;
        console.log("this.userprofiles",this.userprofiles);
      });
    }
    catch (e) {
      console.log('error500', e);
    }

  }

}
