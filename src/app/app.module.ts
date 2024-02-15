import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { InterceptorService } from '../core/interceptors/interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' })
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
