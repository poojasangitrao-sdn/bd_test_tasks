import { Component, OnInit } from '@angular/core';
import { Complaint } from '../models/complaints.model';
 
@Component({
  selector: 'app-compaint-list',
  templateUrl: './compaint-list.component.html',
  styleUrls: ['./compaint-list.component.css']
})
export class CompaintListComponent implements OnInit {
	complaints: Complaint[]=[
		{
			id:1,
			subject:'Mark',
			query:'Reading data in angular',
			responsible_person:'Debuji'
		},

		{
			id:1,
			subject:'Mark2',
			query:'Reading data in angular',
			responsible_person:'Bittu'
		},
	];	


  constructor() { }

  ngOnInit(): void {
  }

}
