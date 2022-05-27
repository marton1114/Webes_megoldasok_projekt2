import { Component, OnInit } from '@angular/core';
import { Processor } from '../processor'
import { ProcessorService } from '../processor.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-processor-list',
  templateUrl: './processor-list.component.html',
  styleUrls: ['./processor-list.component.css']
})
export class ProcessorListComponent implements OnInit {

  processors: Processor[];

  constructor(private processorService: ProcessorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProcessors();
  }

  private getProcessors(){
    this.processorService.getProcessorsList().subscribe(data => {
      this.processors = data;
    });
  }

  processorDetails(id: number){
    this.router.navigate(['processor-details', id]);
  }

  updateProcessor(id: number){
    this.router.navigate(['update-processor', id]);
  }

  deleteProcessor(id: number){
    this.processorService.deleteProcessor(id).subscribe( data => {
      console.log(data);
      this.getProcessors();
    })
  }
}
