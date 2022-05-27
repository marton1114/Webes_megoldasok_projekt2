import { Component, OnInit } from '@angular/core';
import { Config } from '../config'
import { ConfigService } from '../config.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.css']
})
export class ConfigListComponent implements OnInit {

  configs: Config[] = [];

  constructor(private configService: ConfigService,
    private router: Router) { }

  ngOnInit(): void {
    this.getConfigs();
  }

  private getConfigs(){
    this.configService.getConfigsList().subscribe(data => {
      this.configs = data;
    });
  }

  configDetails(id: number){
    this.router.navigate(['config-details', id]);
  }

  updateConfig(id: number){
    this.router.navigate(['update-config', id]);
  }

  deleteConfig(id: number){
    this.configService.deleteConfig(id).subscribe( data => {
      console.log(data);
      this.getConfigs();
    })
  }
}
