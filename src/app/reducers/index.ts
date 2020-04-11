import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { CountState, countReducer, countNode } from './count/count.reducer';

export interface State {
  [countNode]: CountState
}

export const reducers: ActionReducerMap<State> = {
  [countNode]: countReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
