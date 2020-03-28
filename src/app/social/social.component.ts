import { Component, OnInit } from '@angular/core';
import { ServicesService } from './../services/services.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  public fetchSocial: any;
  constructor(private svcService: ServicesService) { }

  public getSocial() {
    this.svcService.getSocialising().subscribe(
      (alumni: any) => {
        this.fetchSocial = alumni;
        // return this.fetchSocial;
        console.log(this.fetchSocial.map((item: any) => { item = item.socialId; }));
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  ngOnInit(): void {
    this.getSocial();
  }

}
