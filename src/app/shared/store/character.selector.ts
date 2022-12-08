import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../../app.reducer";


export const characterListSelector = createSelector(
  createFeatureSelector<AppState>('characters'),
  (state: AppState) => state.characters
);

