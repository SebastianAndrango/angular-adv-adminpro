import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription

  constructor() {
    // this.retornaObs().pipe(retry())
    // .subscribe({
    //   next: (valor) => console.log('subs: ', valor),
    //   error: (err) => console.info('error: ', err),
    //   complete: () => console.info('complete obs')
    // })

    this.intervalSubs = this.retornaIntervalo().subscribe();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo() {
    const insterval$ = interval(100).pipe(
      take(10),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 == 0 ? true : false)),
    );
    return insterval$;
  }

  retornaObs(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i == 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
    return obs$;
  }
}
