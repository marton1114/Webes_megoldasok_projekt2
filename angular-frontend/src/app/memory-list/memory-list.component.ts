import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory'
import { MemoryService } from '../memory.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-memory-list',
  templateUrl: './memory-list.component.html',
  styleUrls: ['./memory-list.component.css']
})
export class MemoryListComponent implements OnInit {

  memories: Memory[] = [];

  constructor(private memoryService: MemoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMemories();
  }

  private getMemories(){
    this.memoryService.getMemoriesList().subscribe(data => {
      this.memories = data;
    });
  }

  memoryDetails(id: number){
    this.router.navigate(['memory-details', id]);
  }

  updateMemory(id: number){
    this.router.navigate(['update-memory', id]);
  }

  deleteMemory(id: number){
    this.memoryService.deleteMemory(id).subscribe( data => {
      console.log(data);
      this.getMemories();
    })
  }
}
