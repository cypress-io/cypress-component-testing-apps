import { readdir } from 'fs/promises';
import { exec } from 'child_process';

export async function getDirectories() {
  const directories = (await readdir('./', { withFileTypes: true }))
    .filter((dir) => {
      // console.log(dir)
      return (
        dir.isDirectory() &&
        dir.name !== '.git' &&
        dir.name !== '.vscode' &&
        dir.name !== 'scripts'
      );
    })
    .map((dir) => dir.name);
  return directories;
}

export async function runCmd(command) {
  console.log(`Running ${command}`);
  return new Promise((res, rej) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log();
        rej(`error: ${error.message}`);
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
      res();
    });
  });
}
