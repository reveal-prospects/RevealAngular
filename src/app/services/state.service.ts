import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public revealServer: string = 'http://localhost:5082';
}
