import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../motherboard'
import { MotherboardService } from '../motherboard.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-motherboard-list',
  templateUrl: './motherboard-list.component.html',
  styleUrls: ['./motherboard-list.component.css']
})
export class MotherboardListComponent implements OnInit {

  motherboards: Motherboard[] = [];

  constructor(private motherboardService: MotherboardService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMotherboards();
  }

  private getMotherboards(){
    this.motherboardService.getMotherboardsList().subscribe(data => {
      this.motherboards = data;
    });
  }

  motherboardDetails(id: number){
    this.router.navigate(['motherboard-details', id]);
  }

  updateMotherboard(id: number){
    this.router.navigate(['update-motherboard', id]);
  }

  deleteMotherboard(id: number){
    this.motherboardService.deleteMotherboard(id).subscribe( data => {
      console.log(data);
      this.getMotherboards();
    })
  }
}
