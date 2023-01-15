import { Component, OnInit } from '@angular/core';
import { Candidate } from "../match-candidate/candidate";

@Component({
  selector: 'app-match-made',
  templateUrl: './match-made.component.html',
  styleUrls: ['./match-made.component.css']
})
export class MatchMadeComponent implements OnInit{

  candidate: Candidate;

  ngOnInit() {
    this.candidate = history.state;
  }
}
