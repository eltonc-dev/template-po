import { addDecorator, addParameters } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs } from "@storybook/addon-knobs";
import { setCompodocJson } from "@storybook/addon-docs/dist/frameworks/angular";

import '../libs/ui/src/assets/main.scss';
// import docJson from '../documentation';

addDecorator(withNotes());
addDecorator(withKnobs());

// setCompodocJson(docJson);

addParameters({
  options: {
    showRoots: true,
  },
});
