import { Component, OnInit } from '@angular/core';
import { PowerSupply } from '../powersupply';
import { PowerSupplyService } from '../powersupply.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-powersupply',
  templateUrl: './create-powersupply.component.html',
  styleUrls: ['./create-powersupply.component.css']
})
export class CreatePowerSupplyComponent implements OnInit {

  powersupply: PowerSupply = new PowerSupply();
  constructor(private powersupplyService: PowerSupplyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePowerSupply(){
    this.powersupplyService.createPowerSupply(this.powersupply).subscribe( data =>{
      console.log(data);
      this.goToPowerSupplyList();
    },
    error => console.log(error));
  }

  goToPowerSupplyList(){
    this.router.navigate(['/powersupplies']);
  }

  onSubmit(){
    console.log(this.powersupply);
    this.savePowerSupply();
  }
}
