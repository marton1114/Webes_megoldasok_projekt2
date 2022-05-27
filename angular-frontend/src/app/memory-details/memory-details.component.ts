import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { ActivatedRoute } from '@angular/router';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-memory-details',
  templateUrl: './memory-details.component.html',
  styleUrls: ['./memory-details.component.css']
})
export class MemoryDetailsComponent implements OnInit {

  id: number = 0;
  memory: Memory = new Memory();
  constructor(private route: ActivatedRoute, private memoryService: MemoryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.memory = new Memory();
    this.memoryService.getMemoryById(this.id).subscribe( data => {
      this.memory = data;
    });
  }
}
