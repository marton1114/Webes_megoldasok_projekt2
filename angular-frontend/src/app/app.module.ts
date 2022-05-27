import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateProcessorComponent } from './create-processor/create-processor.component';
import { CreateMotherboardComponent } from './create-motherboard/create-motherboard.component';
import { CreateMemoryComponent } from './create-memory/create-memory.component';
import { CreatePowerSupplyComponent } from './create-powersupply/create-powersupply.component';
import { CreateHardDriveDiskComponent } from './create-harddrivedisk/create-harddrivedisk.component';
import { CreateConfigComponent } from './create-config/create-config.component';
import { UpdateHardDriveDiskComponent } from './update-harddrivedisk/update-harddrivedisk.component';
import { UpdateMemoryComponent } from './update-memory/update-memory.component';
import { UpdateMotherboardComponent } from './update-motherboard/update-motherboard.component';
import { UpdatePowerSupplyComponent } from './update-powersupply/update-powersupply.component';
import { UpdateProcessorComponent } from './update-processor/update-processor.component';
import { ProcessorDetailsComponent } from './processor-details/processor-details.component';
import { PowerSupplyDetailsComponent } from './powersupply-details/powersupply-details.component';
import { MotherboardDetailsComponent } from './motherboard-details/motherboard-details.component';
import { MemoryDetailsComponent } from './memory-details/memory-details.component';
import { HardDriveDiskDetailsComponent } from './harddrivedisk-details/harddrivedisk-details.component';
import { ConfigDetailsComponent } from './config-details/config-details.component';
import { ProcessorListComponent } from './processor-list/processor-list.component';
import { PowerSupplyListComponent } from './powersupply-list/powersupply-list.component';
import { MotherboardListComponent } from './motherboard-list/motherboard-list.component';
import { MemoryListComponent } from './memory-list/memory-list.component';
import { HardDriveDiskListComponent } from './harddrivedisk-list/harddrivedisk-list.component';
import { ConfigListComponent } from './config-list/config-list.component';

@NgModule({
  declarations: [
    AppComponent,

    CreateProcessorComponent,
    UpdateProcessorComponent,
    ProcessorDetailsComponent,
    ProcessorListComponent,

    CreateMotherboardComponent,
    UpdateMotherboardComponent,
    MotherboardDetailsComponent,
    MotherboardListComponent,

    CreateMemoryComponent,
    UpdateMemoryComponent,
    MemoryDetailsComponent,
    MemoryListComponent,

    CreatePowerSupplyComponent,
    UpdatePowerSupplyComponent,
    PowerSupplyDetailsComponent,
    PowerSupplyListComponent,

    CreateHardDriveDiskComponent,
    UpdateHardDriveDiskComponent,
    HardDriveDiskDetailsComponent,
    HardDriveDiskListComponent,

    CreateConfigComponent,
    ConfigDetailsComponent,
    ConfigListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
