import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    baseUrl = `${environment.webApi}`;
    private isLoading = new BehaviorSubject<boolean>(true);
    headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private httpClient: HttpClient) { }

    setIsLoading(isLoading: any) {
        this.isLoading.next(isLoading);
    }

    getIsLoading(): Observable<any> {
        return this.isLoading.asObservable();
    }

    get<T>(methodName: string, params: any): Observable<any> {
        return this.httpClient.get<T>(`${this.baseUrl}/${methodName}`,
            { params, headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true })
            .pipe(tap(() => {
                this.setIsLoading(false);
            }));
    }

    post<T>(methodName: string, body: any): Observable<T> {
        return this.httpClient.post<T>(`${this.baseUrl}/${methodName}`, body,
            { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true })
            .pipe(tap(() => {
                this.setIsLoading(false);
            }));
    }

}
