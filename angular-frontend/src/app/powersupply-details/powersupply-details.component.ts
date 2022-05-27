import { Component, OnInit } from '@angular/core';
import { PowerSupply } from '../powersupply';
import { ActivatedRoute } from '@angular/router';
import { PowerSupplyService } from '../powersupply.service';

@Component({
  selector: 'app-powersupply-details',
  templateUrl: './powersupply-details.component.html',
  styleUrls: ['./powersupply-details.component.css']
})
export class PowerSupplyDetailsComponent implements OnInit {

  id: number = 0;
  powersupply: PowerSupply = new PowerSupply();
  constructor(private route: ActivatedRoute, private powerSupplyService: PowerSupplyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.powersupply = new PowerSupply();
    this.powerSupplyService.getPowerSupplyById(this.id).subscribe( data => {
      this.powersupply = data;
    });
  }
}
