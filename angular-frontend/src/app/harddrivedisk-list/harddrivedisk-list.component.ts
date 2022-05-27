import { Component, OnInit } from '@angular/core';
import { HardDriveDisk } from '../harddrivedisk'
import { HardDriveDiskService } from '../harddrivedisk.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-harddrivedisk-list',
  templateUrl: './harddrivedisk-list.component.html',
  styleUrls: ['./harddrivedisk-list.component.css']
})
export class HardDriveDiskListComponent implements OnInit {

  harddrivedisks: HardDriveDisk[] = [];

  constructor(private harddrivediskService: HardDriveDiskService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHardDriveDisks();
  }

  private getHardDriveDisks(){
    this.harddrivediskService.getHardDriveDisksList().subscribe(data => {
      this.harddrivedisks = data;
    });
  }

  harddrivediskDetails(id: number){
    this.router.navigate(['harddrivedisk-details', id]);
  }

  updateHardDriveDisk(id: number){
    this.router.navigate(['update-harddrivedisk', id]);
  }

  deleteHardDriveDisk(id: number){
    this.harddrivediskService.deleteHardDriveDisk(id).subscribe( data => {
      console.log(data);
      this.getHardDriveDisks();
    })
  }
}
