const { handler } = require('./index');

describe('Lambda Handler', () => {
  it('should return hello world message', async () => {
    const event = {};
    const context = { awsRequestId: '123' };
    
    const response = await handler(event, context);
    
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toHaveProperty('message', 'Hello from Lambda!');
  });
});