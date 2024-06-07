import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css']
})
export class BreadCrumbsComponent implements OnInit, OnDestroy {

  public title: string = '';
  public tituloSubs$: Subscription

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe((data: ActivationEnd) => {
      this.title = data.snapshot.data['title'];
      document.title = 'AdminPro-'+this.title;
    });;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }

  getArgumentosRuta(){
    return this.router.events
      .pipe(
        filter((event: any) => {
          if (
            event instanceof ActivationEnd &&
            event.snapshot.firstChild === null &&
            event.snapshot.data != null
          ) {
            return event.snapshot.data['title'];
          }
        })
      )

  }

}
