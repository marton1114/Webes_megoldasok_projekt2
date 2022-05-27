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

  id: number
  powersupply: PowerSupply
  constructor(private route: ActivatedRoute, private processorService: PowerSupplyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.powersupply = new PowerSupply();
    this.powersupplyService.getPowerSupplyById(this.id).subscribe( data => {
      this.powersupply = data;
    });
  }
}
