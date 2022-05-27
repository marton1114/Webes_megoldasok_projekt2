import { Component, OnInit } from '@angular/core';
import { HardDriveDisk } from '../harddrivedisk';
import { ActivatedRoute } from '@angular/router';
import { HardDriveDiskService } from '../harddrivedisk.service';

@Component({
  selector: 'app-harddrivedisk-details',
  templateUrl: './harddrivedisk-details.component.html',
  styleUrls: ['./harddrivedisk-details.component.css']
})
export class HardDriveDiskDetailsComponent implements OnInit {

  id: number
  harddrivedisk: HardDriveDisk
  constructor(private route: ActivatedRoute, private harddrivediskService: HardDriveDiskService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.harddrivedisk = new HardDriveDisk();
    this.harddrivediskService.getHardDriveDiskById(this.id).subscribe( data => {
      this.harddrivedisk = data;
    });
  }
}
