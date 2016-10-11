/**
 * Created by JayaKrishna on 10/11/2016.
 */
import { Component } from '@angular/core';
import { NotesCard } from '../ui';

@Component({
    selector: 'notes-container',
    directives: [
        NotesCard
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
            note creator here
          </div>
          <div class="notes col-xs-8">
            <div class="row between-xs">
              <notes-card [note]="note"></notes-card>
            </div>
          </div>
        </div>
    `
})

export class Notes {
    note = {title: 'new title', value: 'note here'};
}
