import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {

 async login(username: string, password: string): Promise<{ message: string, status: number}> {

    const response = await fetch('/auth', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()
    
    switch (response.status) {
      case 200:
        return { message: data.message, status: response.status }
      case 401:
        return { message: 'Bad username or password', status: 401 }
      default:
        return { message: `error during the auth, status code: ${response.status}`, status: response.status }
    }
  }
}
