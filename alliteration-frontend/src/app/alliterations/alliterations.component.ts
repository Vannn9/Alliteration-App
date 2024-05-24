// import { Component, OnInit } from '@angular/core';
// import { AlliterationsService } from '../alliteration.service';

// @Component({
//   selector: 'app-alliterations',
//   standalone: true,
//   templateUrl: './alliterations.component.html',
//   styleUrls: ['./alliterations.component.css']
// })
// export class AlliterationsComponent implements OnInit {
//   currentId: number = 1;
//   alliteration: string = '';

//   constructor(private alliterationsService: AlliterationsService) {}

//   ngOnInit(): void {
//     this.getAlliteration(this.currentId);
//   }

//   getAlliteration(id: number): void {
//     this.alliterationsService.getAlliterationById(id).subscribe((data) => {
//       this.alliteration = data.text;
//     }, error => {
//       console.error('Error fetching alliteration:', error);
//       this.alliteration = 'Error fetching alliteration.';
//     });
//   }

//   nextAlliteration(): void {
//     this.currentId++;
//     this.getAlliteration(this.currentId);
//   }

//   previousAlliteration(): void {
//     if (this.currentId > 1) {
//       this.currentId--;
//     } else {
//       this.currentId = 100; // Assuming 100 is the last ID
//     }
//     this.getAlliteration(this.currentId);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { AlliterationsService } from '../alliteration.service';

@Component({
  selector: 'app-alliterations',
  standalone: true,
  templateUrl: './alliterations.component.html',
  styleUrls: ['./alliterations.component.css']
})
export class AlliterationsComponent implements OnInit {
  currentId: number = 1;
  alliteration: string = '';

  constructor(private alliterationsService: AlliterationsService) {}

  ngOnInit(): void {
    this.getRandomAlliteration();
  }

  getRandomAlliteration(): void {
    this.alliterationsService.getRandomAlliteration().subscribe((data) => {
      this.alliteration = data.text;
      // Extract the ID from the response if needed
      // this.currentId = data.id;
    }, error => {
      console.error('Error fetching random alliteration:', error);
      this.alliteration = 'Error fetching alliteration.';
    });
  }

  nextAlliteration(): void {
    this.currentId = this.alliterationsService.getNextAlliterationId(this.currentId);
    this.getAlliteration(this.currentId);
  }

  previousAlliteration(): void {
    this.currentId = this.alliterationsService.getPreviousAlliterationId(this.currentId);
    this.getAlliteration(this.currentId);
  }

  getAlliteration(id: number): void {
    this.alliterationsService.getAlliterationById(id).subscribe((data) => {
      this.alliteration = data.text;
    }, error => {
      console.error('Error fetching alliteration:', error);
      this.alliteration = 'Error fetching alliteration.';
    });
  }
}
