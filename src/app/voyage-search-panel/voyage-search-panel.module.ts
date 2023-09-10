import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoyageSearchPanelComponent } from './voyage-search-panel.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [VoyageSearchPanelComponent],
  exports: [VoyageSearchPanelComponent, MatSelectModule],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class VoyageSearchPanelModule {}
