import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Callbacks } from 'jquery';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  page_index = 1;
  btnContinue() {
    this.page_index += 1;
    // $('.left-gradient').css("height", "65vh");
    // $('.introduction-container').css("height", "69%");
    $('.content').css({ height: `calc(100% - ${155}px)` });
    if (this.page_index == 1) {
      // movind to page 2
      $("#page-2").css("display", 'block');
      $("#page-1").slideUp(function () {
        $("#page-1").css("display", 'none');
      });
    }
    else if (this.page_index == 2) {
      // moving to page 3
      $("#page-3").css("display", 'block');
      $("#page-2").slideUp(function () {
        $("#page-2").css("display", 'none');
      });
    }
    else if (this.page_index == 3) {
      // moving to page 4
      $("#page-4").css("display", 'block');
      $("#page-3").slideUp(function () {
        $("#page-3").css("display", 'none');
      });
    }
    else if (this.page_index == 4) {
      // moving to page 5
      $("#page-5").css("display", 'block');
      $("#page-4").slideUp(function () {
        $("#page-4").css("display", 'none');
      });
    }
    else if (this.page_index == 5) {
      // moving to page 6
      $("#page-6").css("display", 'block');
      $("#page-5").slideUp(function () {
        $("#page-5").css("display", 'none');
      });
    }
    else if (this.page_index == 6) {
      // moving to page 7
      $("#page-7").css("display", 'block');
      $("#page-6").slideUp(function () {
        $("#page-6").css("display", 'none');
      });
    } else if (this.page_index == 7) {
      // moving to page 8
      $("#page-8").css("display", 'block');
      $("#page-7").slideUp(function () {
        $("#page-7").css("display", 'none');
      });
    }
    else if (this.page_index == 8) {
      // moving to page 9
      $("#page-9").css("display", 'block');
      $("#page-8").slideUp(function () {
        $("#page-8").css("display", 'none');
      });
    }
    else if (this.page_index == 9) {
      // moving to page 10
      $("#page-10").css("display", 'block');
      $("#page-9").slideUp(function () {
        $("#page-9").css("display", 'none');
      });
    }
    else if (this.page_index == 10) {
      // moving to page 11
      $("#page-11").css("display", 'block');
      $("#page-10").slideUp(function () {
        $("#page-10").css("display", 'none');
      });
    }
    else if (this.page_index == 11) {
      // moving to page 12
      $("#page-12").css("display", 'block');
      $("#page-11").slideUp(function () {
        $("#page-11").css("display", 'none');
      });
    }
    else if (this.page_index == 12) {
      // moving to page 13
      $("#page-13").css("display", 'block');
      $("#page-12").slideUp(function () {
        $("#page-12").css("display", 'none');
      });
    }
    else if (this.page_index == 12) {
      // moving to page 14
      $("#page-14").css("display", 'block');
      $("#page-13").slideUp(function () {
        $("#page-13").css("display", 'none');
      });
    }
    else {

    }
  }
  btnPrevious() {
    if (this.page_index == 1) {
      // move to page 1
      // $('.left-gradient').css("height", "78vh");
      // $('.introduction-container').css("height", "77%");
      $('.content').css({ height: `calc(100% - ${55}px)` });
      $("#page-2").css("display", 'none');
      $("#page-1").slideDown(function () {
        $("#page-1").css("display", 'block');
      });
    }
    else if (this.page_index == 2) {
      // move to page 2
      $("#page-3").css("display", 'none');
      $("#page-2").slideDown(function () {
        $("#page-2").css("display", 'block');
      });
    } else if (this.page_index == 3) {
      // move to page 3
      $("#page-4").css("display", 'none');
      $("#page-3").slideDown(function () {
        $("#page-3").css("display", 'block');
      });
    }
    else if (this.page_index == 4) {
      // move to page 4
      $("#page-5").css("display", 'none');
      $("#page-4").slideDown(function () {
        $("#page-4").css("display", 'block');
      });
    }
    else if (this.page_index == 5) {
      // move to page 5
      $("#page-6").css("display", 'none');
      $("#page-5").slideDown(function () {
        $("#page-5").css("display", 'block');
      });
    }
    else if (this.page_index == 6) {
      // move to page 6
      $("#page-7").css("display", 'none');
      $("#page-6").slideDown(function () {
        $("#page-6").css("display", 'block');
      });
    }
    else if (this.page_index == 7) {
      // move to page 7
      $("#page-8").css("display", 'none');
      $("#page-7").slideDown(function () {
        $("#page-7").css("display", 'block');
      });
    }
    else if (this.page_index == 8) {
      // move to page 6
      $("#page-9").css("display", 'none');
      $("#page-8").slideDown(function () {
        $("#page-8").css("display", 'block');
      });
    }
    else if (this.page_index == 9) {
      // move to page 6
      $("#page-10").css("display", 'none');
      $("#page-9").slideDown(function () {
        $("#page-9").css("display", 'block');
      });
    }
    this.page_index -= 1;
  }

  gotoConsolationAppointment() {
    console.log("hello");
    this.router.navigate(['/welcome/consulation-appointment']);
  }


  goToNext(){
    this.router.navigate(['welcome/introduction/terms']);
  }
}
