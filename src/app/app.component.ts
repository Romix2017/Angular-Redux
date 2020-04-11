import { Component } from '@angular/core';
import { CountState } from './reducers/count/count.reducer';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';
import { selectCount, selectUpdatedAt } from './reducers/count/count.selectors';
import { CountIncreaseAction, CountDecreaseAction, CountClearAction } from './reducers/count/count.actions';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));
  public disableDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));

  constructor(private store$: Store<CountState>) { }
  increase() {
    this.store$.dispatch(new CountIncreaseAction())
  }
  decrease() {
    this.store$.dispatch(new CountDecreaseAction())
  }
  clear() {
    this.store$.dispatch(new CountClearAction())
  }
}
