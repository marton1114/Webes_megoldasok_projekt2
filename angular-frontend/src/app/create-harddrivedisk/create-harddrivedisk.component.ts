import { Component, OnInit } from '@angular/core';
import { HardDriveDisk } from '../harddrivedisk';
import { HardDriveDiskService } from '../harddrivedisk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-harddrivedisk',
  templateUrl: './create-harddrivedisk.component.html',
  styleUrls: ['./create-harddrivedisk.component.css']
})
export class CreateHardDriveDiskComponent implements OnInit {

  harddrivedisk: HardDriveDisk = new HardDriveDisk();
  constructor(private harddrivediskService: HardDriveDiskService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveHardDriveDisk(){
    this.harddrivediskService.createHardDriveDisk(this.harddrivedisk).subscribe( data =>{
      console.log(data);
      this.goToHardDriveDiskList();
    },
    error => console.log(error));
  }

  goToHardDriveDiskList(){
    this.router.navigate(['/harddrivedisks']);
  }

  onSubmit(){
    console.log(this.harddrivedisk);
    this.saveHardDriveDisk();
  }
}
