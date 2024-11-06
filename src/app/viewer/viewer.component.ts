import { Component, OnDestroy, OnInit } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { DashboardNames } from '../models/reveal-server/dashboard-names';
import { StateService } from '../services/state.service';
import { RevealServerService } from '../services/reveal-server.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public selectedDashboard: string = 'Healthcare';
  public revealServerDashboardNames: DashboardNames[] = [];

  constructor(
    private revealServerService: RevealServerService,
    protected stateService: StateService,
  ) {
    RevealSdkSettings.serverUrl = 'stateService.revealServer';
  }

  ngOnInit() {
    this.revealServerService.getDashboardNamesList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.revealServerDashboardNames = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public singleSelectComboSelectionChanging(event: ISimpleComboSelectionChangingEventArgs) {
    this.selectedDashboard = event.newValue as string;
  }
}
