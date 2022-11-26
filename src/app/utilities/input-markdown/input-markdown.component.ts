import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import {  } from 'stream';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }
  @Output()
  changeMarkdown = new EventEmitter<string>();
  @Input()
  markdownContent: string | undefined;
  ngOnInit(): void {
  }

}
