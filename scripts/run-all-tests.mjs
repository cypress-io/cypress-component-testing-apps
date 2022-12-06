import { getDirectories, runCmd } from './util.mjs';

const directories = await getDirectories();
installLatestCypress(directories);

async function runAllCypressTests(directories) {
  let dir = directories.shift();
  console.log(dir);
  while (dir) {
    try {
      const cleanCommand = 'rm -rf ./' + dir + '/node_modules';
      await runCmd(cleanCommand);
      const command = 'npm --prefix ./' + dir + ' install cypress@latest';
      const res = await runCmd(command);
      console.log(res);
    } catch (ex) {
      console.error(ex);
    }

    dir = directories.shift();
  }
}
