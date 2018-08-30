import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  title = "Form";
  thought : NgForm;
  
  constructor() { }

  ngOnInit() {
  }

  addMyThought(thought: string){

  }
}
