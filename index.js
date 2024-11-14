exports.handler = async (event, context) => {
    console.log('Event:', JSON.stringify(event, null, 2));
    
    try {
      const response = {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Hello from Lambda!',
          timestamp: new Date().toISOString(),
          requestId: context.awsRequestId,
        }),
      };
  
      return response;
    } catch (error) {
      console.error('Error:', error);
      
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Internal server error',
          errorMessage: error.message,
        }),
      };
    }
  };