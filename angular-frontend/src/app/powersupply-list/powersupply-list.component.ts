import { Component, OnInit } from '@angular/core';
import { PowerSupply } from '../powersupply'
import { PowerSupplyService } from '../powersupply.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-powersupply-list',
  templateUrl: './powersupply-list.component.html',
  styleUrls: ['./powersupply-list.component.css']
})
export class PowerSupplyListComponent implements OnInit {

  powersupplies: PowerSupply[];

  constructor(private powersupplyService: PowerSupplyService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPowerSupplies();
  }

  private getPowerSupplies(){
    this.powersupplyService.getPowerSuppliesList().subscribe(data => {
      this.powersupplies = data;
    });
  }

  powersupplyDetails(id: number){
    this.router.navigate(['powersupply-details', id]);
  }

  updatePowerSupply(id: number){
    this.router.navigate(['update-powersupply', id]);
  }

  deletePowerSupply(id: number){
    this.powersupplyService.deletePowerSupply(id).subscribe( data => {
      console.log(data);
      this.getPowerSupplies();
    })
  }
}
