import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            "@components": path.resolve(__dirname, "./src/components"),
          },
        },
      },
    },
  },
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
