import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventsService } from 'src/app/services/events.service';
import { MyEvent } from 'src/app/models/event';
import { Title } from '@angular/platform-browser';
import { myApp } from 'src/app/exports';
import { Store } from '@ngrx/store';
import { saveEvents } from 'src/app/store/actions';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  public app: string = myApp.url;
  public myEvents: MyEvent[];
  public singleEvent: MyEvent;
  public mainImgUrl: string;
  public imgUrls: string[] = [];
  public allUrls: string[] = [];

  @ViewChild('wrapper', { static: false }) modal: ElementRef;
  @ViewChild('img01', { static: false }) modalImg: ElementRef;
  @ViewChild('hiddenInput', { static: false }) hiddenInput: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService,
    private title: Title, private store: Store<any>) { }

  ngOnInit() {

    const eventName = this.activatedRoute.snapshot.params.event;
    this.title.setTitle(eventName + " | Forte Gallery");
    window.scrollTo(0, 0);

    // Get from redux
    let boolean = false;
    this.store.select('events').subscribe(ev => {
      // if doesnt exists on store take from server
      if (ev === undefined) {
        boolean = true;
        this.eventsService.getAllEvents().subscribe(events => {
          this.getEvent(events, eventName);
          this.store.dispatch(saveEvents({ events }));
        })
      }
      // if exists on store
      if (boolean === false) {
        this.getEvent(ev, eventName);
      }
    });
  }

  private getEvent(events, eventName): void {
    this.myEvents = events;
    this.myEvents.map(event => {
      if (event.eventName === eventName) this.singleEvent = event;
    })

    this.mainImgUrl = myApp.url + "/assets/events/" + this.singleEvent.fileName;
    this.allUrls.push(this.mainImgUrl);

    this.singleEvent.eventImages.map(obj => {
      this.imgUrls.push(myApp.url + "/assets/events/" + obj.fileName);
      this.allUrls.push(myApp.url + "/assets/events/" + obj.fileName);
    });
  }

  public nextImg(): void {

    let currentUrl = this.modalImg.nativeElement.src;
    let indexOf: number;
    indexOf = this.allUrls.indexOf(currentUrl);

    if (indexOf < this.allUrls.length - 1) {
      let newUrl = this.allUrls[indexOf + 1];
      this.modalImg.nativeElement.src = newUrl;
    }
    else this.modalImg.nativeElement.src = this.allUrls[0];

  }


  public previousImg(): void {

    let currentUrl = this.modalImg.nativeElement.src;
    let indexOf: number;
    indexOf = this.allUrls.indexOf(currentUrl);
    if (indexOf > 0) {
      let newUrl = this.allUrls[indexOf - 1];
      this.modalImg.nativeElement.src = newUrl;
    }
    else this.modalImg.nativeElement.src = this.allUrls[this.allUrls.length - 1];
  }

  public closePopup() {
    this.modal.nativeElement.style.display = "none";
  }

  public popup(e): void {
    this.modal.nativeElement.style.display = "block";
    this.modalImg.nativeElement.src = e.target.src;
    this.hiddenInput.nativeElement.focus();
  }

}