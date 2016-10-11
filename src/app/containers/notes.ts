/**
 * Created by JayaKrishna on 10/11/2016.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
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
              note card here
            </div>
          </div>
        </div>
    `
})

export class Notes{}
