
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { countActionsType, CountUpdatedAction } from './reducers/count/count.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) { }

  @Effect()
  updatedAt$() {
    return this.actions$.pipe(
      ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
      map(() => {
        return new CountUpdatedAction({
          updatedAt: Date.now()
        })
      })
    )
  }
}
