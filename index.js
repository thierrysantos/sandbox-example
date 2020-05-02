const axios = require('axios');

(async function main() {
  const response = await axios.get(
    'https://api.github.com/users/thierrysantos'
  );
  console.log(JSON.stringify(response.data, null, 2));
})();
