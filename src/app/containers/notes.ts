/**
 * Created by JayaKrishna on 10/11/2016.
 */
import { Component } from '@angular/core';
import { NotesCard } from '../ui';
import { NoteCreator } from '../ui';

@Component({
    selector: 'notes-container',
    directives: [
        NotesCard,
        NoteCreator
    ],
    styles: [`
        .notes {
          padding-top: 50px;
        }
        .creator {
          margin-bottom: 40px;
        }
    `],
    template: `
        <div class="row center-xs notes">
          <div class="col-xs-6 creator">
            <note-creator (createNote)="onCreateNewNote($event)"></note-creator>
          </div>
          <div class="notes col-xs-8">
            <div class="row between-xs">
                <notes-card
                    class="col-xs-4"
                    [note]="note"
                    (checked)="onNoteChecked($event, i)"
                    *ngFor="let note of notes; let i = index"
                >
                </notes-card>
            </div>
          </div>
        </div>
    `
})

export class Notes {
    notes = [
        {title: 'new title', value: 'note here', color: 'seagreen'},
        {title: 'new title', value: 'note here', color: 'pink'},
        {title: 'new title', value: 'note here', color: 'red'}
    ];

    onNoteChecked(note, index) {
        console.log(note);
        this.notes.splice(index, 1);
    }

    onCreateNewNote(note) {
        this.notes.push(note);
    }
}
