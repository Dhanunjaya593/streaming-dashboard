const https = require('https');

const url = 'https://api.themoviedb.org/3/movie/1062722?api_key=56731bef912a184dc5e7a53b70e43810';

https.get(url, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on('data', d => process.stdout.write(d));
}).on('error', (e) => {
  console.error('❌ HTTPS error:', e);
});