import { Component, OnInit } from '@angular/core';
import { Powersupply } from '../powersupply';
import { ActivatedRoute } from '@angular/router';
import { PowersupplyService } from '../powersupply.service';

@Component({
  selector: 'app-powersupply-details',
  templateUrl: './powersupply-details.component.html',
  styleUrls: ['./powersupply-details.component.css']
})
export class PowersupplyDetailsComponent implements OnInit {

  id: number
  powersupply: Powersupply
  constructor(private route: ActivatedRoute, private processorService: PowersupplyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.powersupply = new Powersupply();
    this.powersupplyService.getPowersupplyById(this.id).subscribe( data => {
      this.powersupply = data;
    });
  }
}
