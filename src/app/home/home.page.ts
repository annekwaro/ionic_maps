import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  map?: L.Map;
  constructor() {}

  ionViewWillEnter() {
    this.map = L.map('mapId').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    L.marker(
      [41.4040129, 2.1749179],

      {
        icon: L.icon({
          iconUrl:
            'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        }),
      }
    )

      .addTo(this.map)

      .bindPopup('A pretty place in barcelone')

      .openPopup();
  }

  ngOnInit(): void {}
}
