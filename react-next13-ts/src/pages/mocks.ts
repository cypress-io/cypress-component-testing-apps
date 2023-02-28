import { rest, setupWorker } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  rest.post<{ username: string; password: string }>(
    '/auth',
    (req, res, ctx) => {
      const { username, password } = req.body;
      if (username === 'testuser' && password === 'testpassword') {
        return res(ctx.status(200), ctx.json({ message: 'Authenticated' }));
      } else {
        return res(
          ctx.status(401),
          ctx.json({ message: 'Bad username or password' })
        );
      }
    }
  ),
];

export const workerSetup = () => setupWorker(...handlers);
export const serverSetup = () => setupServer(...handlers);
