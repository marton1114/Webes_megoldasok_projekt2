import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../motherboard';
import { MotherboardService } from '../motherboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-motherboard',
  templateUrl: './create-motherboard.component.html',
  styleUrls: ['./create-motherboard.component.css']
})
export class CreateMotherboardComponent implements OnInit {

  motherboard: Motherboard = new Motherboard();
  constructor(private motherboardService: MotherboardService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMotherboard(){
    this.motherboardService.createMotherboard(this.motherboard).subscribe( data =>{
      console.log(data);
      this.goToMotherboardList();
    },
    error => console.log(error));
  }

  goToMotherboardList(){
    this.router.navigate(['/motherboards']);
  }

  onSubmit(){
    console.log(this.motherboard);
    this.saveMotherboard();
  }
}
