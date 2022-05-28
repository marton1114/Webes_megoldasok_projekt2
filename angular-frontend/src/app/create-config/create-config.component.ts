import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

import { Processor } from '../processor'
import { ProcessorService } from '../processor.service'

import { PowerSupply } from '../powersupply'
import { PowerSupplyService } from '../powersupply.service'

import { Motherboard } from '../motherboard'
import { MotherboardService } from '../motherboard.service'

import { Memory } from '../memory'
import { MemoryService } from '../memory.service'

import { HardDriveDisk } from '../harddrivedisk'
import { HardDriveDiskService } from '../harddrivedisk.service'

@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.css']
})

export class CreateConfigComponent implements OnInit {

  processors: Processor[] = [];
  powersupplies: PowerSupply[] = [];
  motherboards: Motherboard[] = [];
  memories: Memory[] = [];
  harddrivedisks: HardDriveDisk[] = [];

  config: Config = new Config();

  constructor(private processorService: ProcessorService,
    private powerSupplyService: PowerSupplyService,
    private motherboardService: MotherboardService,
    private memoryService: MemoryService,
    private hardDriveDiskService: HardDriveDiskService,
    private configService: ConfigService,
    private router: Router) { }

    ngOnInit(): void {
      this.getProcessors();
      this.getPowerSupplies();
      this.getMotherboards();
      this.getMemories();
      this.getHardDriveDisks();
    }

    private getProcessors(){
      this.processorService.getProcessorsList().subscribe(data => {
        this.processors = data;
      });
    }

    private getPowerSupplies(){
      this.powerSupplyService.getPowerSuppliesList().subscribe(data => {
        this.powersupplies = data;
      });
    }

    private getMotherboards(){
      this.motherboardService.getMotherboardsList().subscribe(data => {
        this.motherboards = data;
      });
    }

    private getMemories(){
      this.memoryService.getMemoriesList().subscribe(data => {
        this.memories = data;
      });
    }

    private getHardDriveDisks(){
      this.hardDriveDiskService.getHardDriveDisksList().subscribe(data => {
        this.harddrivedisks = data;
      });
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
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let pid = +(document.getElementById("processorselector") as HTMLInputElement).value.split(",", 2)[0].split(" ", 2)[1];
    let pwid = +(document.getElementById("powersupplyselector") as HTMLInputElement).value.split(",", 2)[0].split(" ", 2)[1];
    let mbid = +(document.getElementById("motherboardselector") as HTMLInputElement).value.split(",", 2)[0].split(" ", 2)[1];
    let mid = +(document.getElementById("memoryselector") as HTMLInputElement).value.split(",", 2)[0].split(" ", 2)[1];
    let hddid = +(document.getElementById("harddrivediskselector") as HTMLInputElement).value.split(",", 2)[0].split(" ", 2)[1];
    let price: number = +(document.getElementById("processorselector") as HTMLInputElement).value.split("Ár: ")[1] +
    +(document.getElementById("powersupplyselector") as HTMLInputElement).value.split("Ár: ")[1] +
    +(document.getElementById("motherboardselector") as HTMLInputElement).value.split("Ár: ")[1] +
    +(document.getElementById("memoryselector") as HTMLInputElement).value.split("Ár: ")[1] +
    +(document.getElementById("harddrivediskselector") as HTMLInputElement).value.split("Ár: ")[1];

    this.config.name = name;
    this.config.processor = this.processors.filter(p => p.id == pid)[0];
    this.config.powerSupply = this.powersupplies.filter(pw => pw.id == pwid)[0];
    this.config.motherboard = this.motherboards.filter(mb => mb.id == mbid)[0];
    this.config.memory = this.memories.filter(m => m.id == mid)[0];
    this.config.hardDriveDisk = this.harddrivedisks.filter(hdd => hdd.id == hddid)[0];
    this.config.price = price;

    console.log(this.config);
    this.saveConfig();
  }
}
