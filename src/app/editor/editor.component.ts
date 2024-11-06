import { Component } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  public selectedDashboard1: string = 'Healthcare';

  constructor(
    protected stateService: StateService,
  ) {
    RevealSdkSettings.serverUrl = 'stateService.revealServer';
  }
}
