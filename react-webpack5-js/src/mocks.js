import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser';

export const handlers = [
  http.post(
    '/auth',
    async ({ request }) => {
      const req = await request.json()
      const { username, password } = req
      if (username === 'testuser' && password === 'testpassword') {
        return HttpResponse.json({ message: 'Authenticated' }, { status: 200 })
      } else {
        return HttpResponse.json({ message: 'Bad username or password' }, { status: 401 })
      }
    }
  ),
];

export const worker = setupWorker(...handlers);