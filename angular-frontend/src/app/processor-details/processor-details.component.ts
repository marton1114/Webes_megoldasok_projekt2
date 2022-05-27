import { Component, OnInit } from '@angular/core';
import { Processor } from '../processor';
import { ActivatedRoute } from '@angular/router';
import { ProcessorService } from '../processor.service';

@Component({
  selector: 'app-processor-details',
  templateUrl: './processor-details.component.html',
  styleUrls: ['./processor-details.component.css']
})
export class ProcessorDetailsComponent implements OnInit {

  id: number
  processor: Processor
  constructor(private route: ActivatedRoute, private processorService: ProcessorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.processor = new Processor();
    this.processorService.getProcessorById(this.id).subscribe( data => {
      this.processor = data;
    });
  }
}
