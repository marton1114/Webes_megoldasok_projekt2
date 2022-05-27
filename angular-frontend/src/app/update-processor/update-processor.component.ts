import { Component, OnInit } from '@angular/core';
import { ProcessorService } from '../processor.service';
import { Processor } from '../processor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-processor',
  templateUrl: './update-processor.component.html',
  styleUrls: ['./update-processor.component.css']
})
export class UpdateProcessorComponent implements OnInit {

  id: number = 0;
  processor: Processor = new Processor();
  constructor(private processorService: ProcessorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.processorService.getProcessorById(this.id).subscribe(data => {
      this.processor = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.processorService.updateProcessor(this.id, this.processor).subscribe( data =>{
      this.goToProcessorList();
    }
    , error => console.log(error));
  }

  goToProcessorList(){
    this.router.navigate(['/processors']);
  }
}
