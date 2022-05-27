import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config-details',
  templateUrl: './config-details.component.html',
  styleUrls: ['./config-details.component.css']
})
export class ConfigDetailsComponent implements OnInit {

  id: number
  config: Config
  constructor(private route: ActivatedRoute, private configService: ConfigService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.config = new Config();
    this.configService.getConfigById(this.id).subscribe( data => {
      this.config = data;
    });
  }
}
