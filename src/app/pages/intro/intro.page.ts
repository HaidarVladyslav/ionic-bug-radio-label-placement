import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import Swiper from 'swiper';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntroPage implements OnInit, AfterViewInit {
  protected readonly swiper = viewChild<ElementRef<SwiperContainer>>('swiper');
  protected readonly currency = 'usd';

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.swiper()!.nativeElement.swiper);
  }

  next() {
    this.swiper()!.nativeElement.swiper.slideNext();
  }
}
