const { namespace } = require('../package.json');
const nodeshift = require('nodeshift');

// Deploy an Application
nodeshift.deploy({
  namespace: {
    name: namespace
  },
  deploy: {
    port: 8080
  },
  expose: true,
}).then((response) => {
    console.log(response);
    console.log('Application Deployed')
}).catch((err) => {
    console.log(err);
});
