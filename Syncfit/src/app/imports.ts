import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SliderModule,
    ProgressBarModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SliderModule,
    ProgressBarModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
  ]
})
export class ImportsModule { }
