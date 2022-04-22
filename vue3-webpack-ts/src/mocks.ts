import { rest, setupWorker } from 'msw';

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

export const worker = setupWorker(...handlers);
