import { Component, OnInit } from '@angular/core';
import { HardDriveDiskService } from '../harddrivedisk.service';
import { HardDriveDisk } from '../harddrivedisk';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-harddrivedisk',
  templateUrl: './update-harddrivedisk.component.html',
  styleUrls: ['./update-harddrivedisk.component.css']
})
export class UpdateHardDriveDiskComponent implements OnInit {

  id: number;
  harddrivedisk: HardDriveDisk = new HardDriveDisk();
  constructor(private harddrivediskService: HardDriveDiskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.harddrivediskService.getHardDriveDiskById(this.id).subscribe(data => {
      this.harddrivedisk = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.harddrivediskService.updateHardDriveDisk(this.id, this.harddrivedisk).subscribe( data =>{
      this.goToHardDriveDiskList();
    }
    , error => console.log(error));
  }

  goToHardDriveDiskList(){
    this.router.navigate(['/harddrivedisks']);
  }
}
