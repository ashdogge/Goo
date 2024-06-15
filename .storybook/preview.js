import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs", "autodocs"]
};

export default preview;
