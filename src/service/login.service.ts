import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Mock login method
  login(email: string, password: string): Observable<any> {
    // Mock user data (you can customize this)
    const mockUser = {
      email: 'test@example.com',
      password: 'password123'
    };

    // Simulate an API call with a delay
    return of(mockUser.email !== email && mockUser.password !== password)
      .pipe(
        delay(1000) // Simulate a delay for the API call
      );
  }

  // Mock method to simulate Google login
  loginWithGoogle(): Observable<any> {
    // Simulate successful Google login
    const mockGoogleUser = {
      email: 'googleuser@example.com',
      name: 'Google User'
    };

    // Simulate an API call with a delay
    return of(mockGoogleUser)
      .pipe(
        delay(1000) // Simulate a delay for the API call
      );
  }

  // Mock method to simulate password recovery
  recoverPassword(email: string): Observable<boolean> {
    // Simulate password recovery logic
    const isRecoverable = email === 'test@example.com'; // Example condition

    // Simulate an API call with a delay
    return of(isRecoverable)
      .pipe(
        delay(1000) // Simulate a delay for the API call
      );
  }

  constructor() { }
}
