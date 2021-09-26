const Reporter = require('@parcel/plugin').Reporter;
const { exec } = require("child_process");

module.exports = new Reporter ({
  async report ({event}) {
    if (event.type === 'buildSuccess' &&  process.env.npm_lifecycle_event !== "start") {
    
      exec("node -r dotenv/config createHTML-build.js", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    


      let bundles = event.bundleGraph.getBundles();
      process.stdout.write(`✨ Built ${bundles.length} bundles in ${event.buildTime}ms!\n`);
    }
  }
});