import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../main-pages/shared/header/header.component';
import { FooterComponent } from '../main-pages/shared/footer/footer.component';
import { NgIf } from '@angular/common';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-privarcy-policy',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './privarcy-policy.component.html',
  styleUrl: './privarcy-policy.component.scss',
  host: {
    class: 'page',
  },
})
export class PrivarcyPolicyComponent implements OnDestroy {
  constructor(public sharedService: SharedService) {}
  ngOnDestroy() {
    this.sharedService.impressum.set(true);
  }
}
