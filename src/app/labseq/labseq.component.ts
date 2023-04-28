import { Component, OnInit } from '@angular/core';
import { LabseqService } from './services/labseq.service';
import { Labseq } from './interfaces/Labseq';

@Component({
  selector: 'app-labseq',
  templateUrl: './labseq.component.html',
  styleUrls: ['./labseq.component.css']
})
export class LabseqComponent implements OnInit {
  index = 0;
  result?: number;

  constructor(private labseqService: LabseqService) { }

  ngOnInit(): void {
  }

  calculateLabseq(): void {
    this.labseqService.getLabseqValue(this.index).subscribe((labseq: Labseq) => {
      this.result = labseq.value;
    });
  }
}
