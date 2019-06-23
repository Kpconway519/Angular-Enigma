import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { PlugboardComponent } from './plugboard/plugboard.component';
import { AllRotorsComponent } from './all-rotors/all-rotors.component';
import { EnigmaCoreComponent } from './enigma-core/enigma-core.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    PlugboardComponent,
    AllRotorsComponent,
    EnigmaCoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
