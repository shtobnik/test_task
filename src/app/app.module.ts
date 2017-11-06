import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { CommentsList } from "../app/comments-list/comments-list.component";
import { DataService } from '../app/data.service';

import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CommentsList
    ],
    bootstrap: [AppComponent],
    providers: [DataService]
})
export class AppModule {
}