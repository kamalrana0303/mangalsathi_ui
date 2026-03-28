import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

abstract class ErrorHandler{
  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(()=> error.error.message);
  }
}