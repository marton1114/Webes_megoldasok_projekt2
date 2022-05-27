import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateProcessorComponent } from './create-processor/create-processor.component';
import { CreateMotherboardComponent } from './create-motherboard/create-motherboard.component';
import { CreateMemoryComponent } from './create-memory/create-memory.component';
import { CreatePowersupplyComponent } from './create-powersupply/create-powersupply.component';
import { CreateHarddrivediskComponent } from './create-harddrivedisk/create-harddrivedisk.component';
import { CreateConfigComponent } from './create-config/create-config.component';
import { UpdateHarddrivediskComponent } from './update-harddrivedisk/update-harddrivedisk.component';
import { UpdateMemoryComponent } from './update-memory/update-memory.component';
import { UpdateMotherboardComponent } from './update-motherboard/update-motherboard.component';
import { UpdatePowersupplyComponent } from './update-powersupply/update-powersupply.component';
import { UpdateProcessorComponent } from './update-processor/update-processor.component';
import { ProcessorDetailsComponent } from './processor-details/processor-details.component';
import { PowersupplyDetailsComponent } from './powersupply-details/powersupply-details.component';
import { MotherboardDetailsComponent } from './motherboard-details/motherboard-details.component';
import { MemoryDetailsComponent } from './memory-details/memory-details.component';
import { HarddrivediskDetailsComponent } from './harddrivedisk-details/harddrivedisk-details.component';
import { ConfigDetailsComponent } from './config-details/config-details.component';
import { ProcessorListComponent } from './processor-list/processor-list.component';
import { PowersupplyListComponent } from './powersupply-list/powersupply-list.component';
import { MotherboardListComponent } from './motherboard-list/motherboard-list.component';
import { MemoryListComponent } from './memory-list/memory-list.component';
import { HarddrivediskListComponent } from './harddrivedisk-list/harddrivedisk-list.component';
import { ConfigListComponent } from './config-list/config-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProcessorComponent,
    CreateMotherboardComponent,
    CreateMemoryComponent,
    CreatePowersupplyComponent,
    CreateHarddrivediskComponent,
    CreateConfigComponent,
    UpdateHarddrivediskComponent,
    UpdateMemoryComponent,
    UpdateMotherboardComponent,
    UpdatePowersupplyComponent,
    UpdateProcessorComponent,
    ProcessorDetailsComponent,
    PowersupplyDetailsComponent,
    MotherboardDetailsComponent,
    MemoryDetailsComponent,
    HarddrivediskDetailsComponent,
    ConfigDetailsComponent,
    ProcessorListComponent,
    PowersupplyListComponent,
    MotherboardListComponent,
    MemoryListComponent,
    HarddrivediskListComponent,
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
