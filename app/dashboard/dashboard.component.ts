import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(public renderer: Renderer2, @Inject(DOCUMENT) private document: Document,private route: Router,private userservice: UserserviceService) { }

  async ngOnInit() {
   
    await this.loadJsFile('assets/js/vendor.min.js');
    await this.loadJsFile('assets/js/dashboard-1.init.js');
    await this.loadJsFile('assets/js/app.min.js');
   
  }

  async loadJsFile(url: any) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    this.renderer.appendChild(this.document.body, script);
    return Promise.resolve(true);
  }
  logout() {
    this.userservice.logout(true);
  }
  

}
