import { Component, OnInit } from '@angular/core';
import { MotherboardService } from '../motherboard.service';
import { Motherboard } from '../motherboard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-motherboard',
  templateUrl: './update-motherboard.component.html',
  styleUrls: ['./update-motherboard.component.css']
})
export class UpdateMotherboardComponent implements OnInit {

  id: number = 0;
  motherboard: Motherboard = new Motherboard();
  constructor(private motherboardService: MotherboardService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.motherboardService.getMotherboardById(this.id).subscribe(data => {
      this.motherboard = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.motherboardService.updateMotherboard(this.id, this.motherboard).subscribe( data =>{
      this.goToMotherboardList();
    }
    , error => console.log(error));
  }

  goToMotherboardList(){
    this.router.navigate(['/motherboards']);
  }
}
