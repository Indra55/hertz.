const http = require('http');

const options = {
  hostname: 'localhost',
  port: process.env.PORT || 3000,
  path: '/health',
  method: 'GET',
  timeout: 3000,
};

const request = http.request(options, (res) => {
  let data = '';

  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Health response:', data); 
    process.exit(res.statusCode === 200 ? 0 : 1);
  });
});

request.on('error', (err) => {
  console.error('Health check failed:', err);
  process.exit(1);
});

request.end();
