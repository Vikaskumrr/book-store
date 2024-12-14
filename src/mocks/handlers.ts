import msw from 'msw'; 

export const handlers = [
  (msw as any).rest.get('https://your-book-api.com/books', (req:any, res:any, ctx:any) => { 
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Mocked Book', author: 'Mock Author', price: 19.99 },
        // ... more mocked data
      ])
    );  }),
  // ... other handlers
];