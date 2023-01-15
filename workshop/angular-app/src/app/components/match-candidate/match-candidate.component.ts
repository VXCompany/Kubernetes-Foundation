import {Component, OnInit} from '@angular/core';
import {MatchService} from './match.service';
import {Candidate} from './candidate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-match-candidate',
  templateUrl: './match-candidate.component.html',
  styleUrls: ['./match-candidate.component.css']
})
export class MatchCandidateComponent implements OnInit {

  candidate: Candidate;

  constructor(private matchService: MatchService, private router: Router) {
  }

  ngOnInit() {
    this.getNext();
  }

  getNext() {
    this.matchService.getNext().subscribe((response) => {
      this.candidate = response;
    });
  }

  clear() {
    this.getNext();
  }

  favorite() {
    this.router.navigate(['/matchmade'], {state: this.candidate});
  }
}
