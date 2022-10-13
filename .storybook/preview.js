import "../src/styles/globals.css";
import * as NextImage from "next/image";
import { setupWorker, rest } from "msw";

// mock service worker
if (typeof global.process === "undefined") {
  const worker = setupWorker(
    rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
      return res(ctx.json({ name: "John Doe" }));
    })
  );
  worker.start();
}

// next/image is not supported in Storybook
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
// default params for storybook
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
