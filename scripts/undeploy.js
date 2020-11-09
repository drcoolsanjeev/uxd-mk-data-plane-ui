const { namespace } = require('../package.json');
const nodeshift = require('nodeshift');

// Deploy an Application
nodeshift.undeploy({
  namespace: {
    name: namespace
  },
}).then((response) => {
    console.log(response);
    console.log('Application unDeployed')
}).catch((err) => {
    console.log(err);
});
