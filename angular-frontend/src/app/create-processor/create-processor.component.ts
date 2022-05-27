import { Component, OnInit } from '@angular/core';
import { Processor } from '../processor';
import { ProcessorService } from '../processor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-processor',
  templateUrl: './create-processor.component.html',
  styleUrls: ['./create-processor.component.css']
})
export class CreateProcessorComponent implements OnInit {

  processor: Processor = new Processor();
  constructor(private processorService: ProcessorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProcessor(){
    this.processorService.createProcessor(this.processor).subscribe( data =>{
      console.log(data);
      this.goToProcessorList();
    },
    error => console.log(error));
  }

  goToProcessorList(){
    this.router.navigate(['/processors']);
  }

  onSubmit(){
    console.log(this.processor);
    this.saveProcessor();
  }
}
