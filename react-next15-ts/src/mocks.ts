import { http, HttpResponse } from 'msw';

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  http.post<{},{ username: string; password: string }>(
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

// @see https://github.com/mswjs/msw/issues/1877#issuecomment-1857507825
export const workerSetup = async () => {
  if (typeof window !== 'undefined') {
    const { setupWorker } = await import('msw/browser')
    return setupWorker(...handlers)
  }
};
export const serverSetup = async () => {
  if (typeof window === 'undefined') {
    const { setupServer } = await import('msw/node')
    return setupServer(...handlers)
  }
};
