import { Component, OnInit } from '@angular/core';
import { PowerSupplyService } from '../powersupply.service';
import { PowerSupply } from '../powersupply';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-powersupply',
  templateUrl: './update-powersupply.component.html',
  styleUrls: ['./update-powersupply.component.css']
})
export class UpdatePowerSupplyComponent implements OnInit {

  id: number = 0;
  powersupply: PowerSupply = new PowerSupply();
  constructor(private powersupplyService: PowerSupplyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.powersupplyService.getPowerSupplyById(this.id).subscribe(data => {
      this.powersupply = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.powersupplyService.updatePowerSupply(this.id, this.powersupply).subscribe( data =>{
      this.goToPowerSupplyList();
    }
    , error => console.log(error));
  }

  goToPowerSupplyList(){
    this.router.navigate(['/powersupplies']);
  }
}
