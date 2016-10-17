/**
 * Created by JayaKrishna on 10/16/2016.
 */
import { Component, Output, EventEmitter } from '@angular/core';

import { ColorPicker } from './color-picker';

@Component({
    selector: 'note-creator',
    directives: [ ColorPicker ],
    styles: [`
        .note-creator {
          padding: 20px;
          background-color: white;
          border-radius: 3px;
        }
        .title {
          font-weight: bold;
          color: rgba(0,0,0,0.8);
        }
    `],
    template: `
        <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
          <pre>{{newNote | json}}</pre>
          <form class="row" (submit)="createNewNote()">
            <input
              type="text"
              [(ngModel)]="newNote.title"
              name="newNoteTitle"
              placeholder="Title"
              class="col-xs-10 title"
              *ngIf="fullForm"
            >
            <input
              type="text"
              [(ngModel)]="newNote.value"
              name="newNoteValue"
              placeholder="Take a note..."
              class="col-xs-10"
              (focus)="toggle(true)"
            >
            <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
                <color-picker [colors]="colors" (select)="onColorSelect($event)"></color-picker>
              <button
                type="submit"
                class="btn-light"
               >
                Done
              </button>
            </div>
          </form>
        </div>
    `
})

export class NoteCreator{
    colors: Array<string> = ['red', 'green', 'yellow', 'pink', 'blue', 'navy'];
    @Output() createNote = new EventEmitter();
    newNote = {
        title: '',
        value: '',
        color: 'white'
    };
    fullForm: boolean = false;

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
    }

    toggle(value: boolean) {
        this.fullForm = value;
    }

    createNewNote() {
        console.log('submitted');
        const {title, value, color} = this.newNote;
        if (title && value && color) {
            this.createNote.next({title, value, color});
            this.reset();
        }
    }

    onColorSelect(color: string) {
        this.newNote.color = color;
    }
};
