import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.css']
})
export class CreateConfigComponent implements OnInit {

  config: Config = new Config();
  constructor(private configService: ConfigService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveConfig(){
    this.configService.createConfig(this.config).subscribe( data =>{
      console.log(data);
      this.goToConfigList();
    },
    error => console.log(error));
  }

  goToConfigList(){
    this.router.navigate(['/configs']);
  }

  onSubmit(){
    console.log(this.config);
    this.saveConfig();
  }
}
