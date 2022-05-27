import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-memory',
  templateUrl: './create-memory.component.html',
  styleUrls: ['./create-memory.component.css']
})
export class CreateMemoryComponent implements OnInit {

  memory: Memory = new Memory();
  constructor(private memoryService: MemoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMemory(){
    this.memoryService.createMemory(this.memory).subscribe( data =>{
      console.log(data);
      this.goToMemoryList();
    },
    error => console.log(error));
  }

  goToMemoryList(){
    this.router.navigate(['/memories']);
  }

  onSubmit(){
    console.log(this.memory);
    this.saveMemory();
  }
}
