import { Injectable } from '@angular/core';
import {ServerConstant} from '../constants/server-constant';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {Post} from '../model/post';
import {PasswordChange} from '../model/password-change';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
    constant: ServerConstant = new ServerConstant();
    public host: string = this.constant.host;
    public token: string;
    public loggInUsername: string|null;
    public redirectUrl: string;
    private googleMapsAPIKey = 'Your Google Maps API key';
    private googleMapsAPIUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    private jwtHelper = new JwtHelperService();
  constructor( private http: HttpClient) { }

    login(user: User): Observable <HttpErrorResponse | HttpResponse<any>>{

      return this.http.post<HttpErrorResponse | HttpResponse<any>>('${this.host}/user/login', user, { observe: 'response' });
    }
    register(user: User): Observable<User| HttpErrorResponse>{
      return this.http.post<User>('${this.host}/user/register', user);
    }
    resetPassword(email: string){

      return this.http.get('${this.host}/user/resetPassword/${email}', {responseType: 'text'});
    }

    logOut(): void {
      this.token = null;
      localStorage.removeItem('token');
    }
    saveToken(token: string): void {
        this.token = token;
        localStorage.setItem('token', token);
    }

    loadToken(): void {
        this.token = localStorage.getItem('token');
    }

    getToken(): string {
        return this.token;
    }
    isLoggedIn(): boolean {
        this.loadToken();
        if (this.token != null && this.token !== '') {
            if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
                if (!this.jwtHelper.isTokenExpired(this.token)) {
                    this.loggInUsername = this.jwtHelper.decodeToken(this.token).sub;
                    return true;
                }
            }
        } else {
            this.logOut();
            return false;
        }
    }

    getUserInformation(username: string): Observable<User> {
        return this.http.get<User>(`${this.host}/user/${username}`);
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.host}/post/list`);
    }

    searchUsers(username: string): Observable<User[]> {
        return this.http.get<User[]>(`${this.host}/user/findByUsername/${username}`);
    }

    getLocation(latitude: string, longitude: string): Observable<any> {
        return this.http.get<any>(`${this.googleMapsAPIUrl}` + `${latitude},${longitude}&key=${
            this.googleMapsAPIKey}`);
    }

    updateUser(updateUser: User): Observable<User> {
        return this.http.post<User>(`${this.host}/user/update`, updateUser);
    }

    changePassword(changePassword: PasswordChange) {
        return this.http.post(`${this.host}/user/changePassword`, changePassword, {responseType: 'text'});
    }

    uploadeUserProfilePicture(profilePicture: File) {
        const fd = new FormData();
        fd.append('image', profilePicture);
        return this.http
            .post(`${this.host}/user/photo/upload`, fd, { responseType: 'text'})
            .subscribe(
                (response: any) => {
                    console.log(response);
                    console.log('User profile picture was uploaded. ' + response);
                },
                error => {
                    console.log(error);
                }
            );
    }
}
