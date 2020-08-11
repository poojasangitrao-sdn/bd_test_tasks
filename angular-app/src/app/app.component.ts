import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor(private service: AppServiceService) {

  }

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.service.getdata().subscribe((response) => {
      console.log('Resopnse from API is', response);
    }, (error) => {
        console.log('Error', error);
    })
  }
}
