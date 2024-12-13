import msw from 'msw'; 

export const handlers = [
  (msw as any).rest.get('/api/books', (req:any, res:any, ctx:any) => { 
    // ... your mock handler logic 
  }),
  // ... other handlers
];