import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, catchError, tap, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    this.spinner.show();

    return next.handle(request).pipe(
      tap(() => {
        request
        switch (request.method) {
          case 'PUT':
            Swal.fire('', 'Se ha actualizado con exito !', 'success');
            break;
          case 'POST':
            Swal.fire('', 'Se ha guardado con exito !', 'success');
            break;
          case 'DELETE':
            Swal.fire('', 'Se ha eliminado con exito !', 'success');
            break;

          default:
            break;
        }
        this.spinner.hide();
      },
        catchError((err: HttpErrorResponse) => {
          Swal.fire('Error !', 'Ha ocurrido un error', 'error');
          this.spinner.hide();
          return throwError(() => err);
        })
      )
    );
  }
}
