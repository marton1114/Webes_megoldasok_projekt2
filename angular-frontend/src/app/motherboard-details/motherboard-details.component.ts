import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../motherboard';
import { ActivatedRoute } from '@angular/router';
import { MotherboardService } from '../motherboard.service';

@Component({
  selector: 'app-motherboard-details',
  templateUrl: './motherboard-details.component.html',
  styleUrls: ['./motherboard-details.component.css']
})
export class MotherboardDetailsComponent implements OnInit {

  id: number
  motherboard: Motherboard
  constructor(private route: ActivatedRoute, private motherboardService: MotherboardService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.motherboard = new Motherboard();
    this.motherboardService.getMotherboardById(this.id).subscribe( data => {
      this.motherboard = data;
    });
  }
}
