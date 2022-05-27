import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessorListComponent } from './processor-list/processor-list.component';
import { CreateProcessorComponent } from './create-processor/create-processor.component';
import { UpdateProcessorComponent } from './update-processor/update-processor.component';
import { ProcessorDetailsComponent } from './processor-details/processor-details.component';

import { PowerSupplyListComponent } from './powersupply-list/powersupply-list.component';
import { CreatePowerSupplyComponent } from './create-powersupply/create-powersupply.component';
import { UpdatePowerSupplyComponent } from './update-powersupply/update-powersupply.component';
import { PowerSupplyDetailsComponent } from './powersupply-details/powersupply-details.component';

import { MotherboardListComponent } from './motherboard-list/motherboard-list.component';
import { CreateMotherboardComponent } from './create-motherboard/create-motherboard.component';
import { UpdateMotherboardComponent } from './update-motherboard/update-motherboard.component';
import { MotherboardDetailsComponent } from './motherboard-details/motherboard-details.component';

import { MemoryListComponent } from './memory-list/memory-list.component';
import { CreateMemoryComponent } from './create-memory/create-memory.component';
import { UpdateMemoryComponent } from './update-memory/update-memory.component';
import { MemoryDetailsComponent } from './memory-details/memory-details.component';

import { HardDriveDiskListComponent } from './harddrivedisk-list/harddrivedisk-list.component';
import { CreateHardDriveDiskComponent } from './create-harddrivedisk/create-harddrivedisk.component';
import { UpdateHardDriveDiskComponent } from './update-harddrivedisk/update-harddrivedisk.component';
import { HardDriveDiskDetailsComponent } from './harddrivedisk-details/harddrivedisk-details.component';


import { ConfigListComponent } from './config-list/config-list.component';
import { CreateConfigComponent } from './create-config/create-config.component';
import { ConfigDetailsComponent } from './config-details/config-details.component';

const routes: Routes = [
  {path: 'processors', component: ProcessorListComponent},
  {path: 'create-processor', component: CreateProcessorComponent},
  {path: '', redirectTo: 'processors', pathMatch: 'full'},
  {path: 'update-processor/:id', component: UpdateProcessorComponent},
  {path: 'processor-details/:id', component: ProcessorDetailsComponent}

  {path: 'powersupplies', component: PowerSupplyListComponent},
  {path: 'create-powersupply', component: CreatePowerSupplyComponent},
  {path: '', redirectTo: 'powersupplies', pathMatch: 'full'},
  {path: 'update-powersupply/:id', component: UpdatePowerSupplyComponent},
  {path: 'powersupply-details/:id', component: PowerSupplyDetailsComponent}

  {path: 'motherboards', component: MotherboardListComponent},
  {path: 'create-motherboard', component: CreateMotherboardComponent},
  {path: '', redirectTo: 'motherboards', pathMatch: 'full'},
  {path: 'update-motherboard/:id', component: UpdateMotherboardComponent},
  {path: 'motherboard-details/:id', component: MotherboardDetailsComponent}

  {path: 'memories', component: MemoryListComponent},
  {path: 'create-memory', component: CreateMemoryComponent},
  {path: '', redirectTo: 'memories', pathMatch: 'full'},
  {path: 'update-memory/:id', component: UpdateMemoryComponent},
  {path: 'memory-details/:id', component: MemoryDetailsComponent}

  {path: 'harddrivedisks', component: HardDriveDiskListComponent},
  {path: 'create-harddrivedisk', component: CreateHardDriveDiskComponent},
  {path: '', redirectTo: 'harddrivedisks', pathMatch: 'full'},
  {path: 'update-harddrivedisk/:id', component: UpdateHardDriveDiskComponent},
  {path: 'harddrivedisk-details/:id', component: HardDriveDiskDetailsComponent}


  {path: 'configs', component: ConfigListComponent},
  {path: 'create-config', component: CreateConfigComponent},
  {path: '', redirectTo: 'configs', pathMatch: 'full'},
  {path: 'config-details/:id', component: ConfigDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
