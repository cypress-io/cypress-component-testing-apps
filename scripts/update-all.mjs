import { getDirectories, runCmd } from './util.mjs';

const directories = await getDirectories();
installLatestCypress(directories);

async function installLatestCypress(directories) {
  let dir = directories.shift();
  console.log(dir);
  while (dir) {
    try {
      const cleanCommand = 'rm -rf ./' + dir + '/node_modules';
      await runCmd(cleanCommand);
      const command =
        'npm --prefix ./' + dir + ' install cypress@latest --legacy-peer-deps';
      await runCmd(command);

    } catch (ex) {
      console.error(ex);
      return;
    }
    dir = directories.shift();
  }
}
