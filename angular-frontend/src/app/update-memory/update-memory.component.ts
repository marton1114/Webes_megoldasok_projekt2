import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../memory.service';
import { Memory } from '../memory';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-memory',
  templateUrl: './update-memory.component.html',
  styleUrls: ['./update-memory.component.css']
})
export class UpdateMemoryComponent implements OnInit {

  id: number = 0;
  memory: Memory = new Memory();
  constructor(private memoryService: MemoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.memoryService.getMemoryById(this.id).subscribe(data => {
      this.memory = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.memoryService.updateMemory(this.id, this.memory).subscribe( data =>{
      this.goToMemoryList();
    }
    , error => console.log(error));
  }

  goToMemoryList(){
    this.router.navigate(['/memories']);
  }
}
