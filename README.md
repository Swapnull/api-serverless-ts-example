# Vercel Serverless API problem. 

When deploying to vercel serverless without nextjs, absolute paths and typescript don't work. 

## Steps
- Deploy to Vercel using CLI. 
    - Go to `${site}/api/random` and you will get an error.
- Run `vercel dev` locally. 
    - Go to `localhost:3000/api/random` and you will get the same error.
    - Console says "Cannot find module '~utils/randomNumber'"

### Prove it is something to do with Absolute Paths

- checkout `working` branch
- run `vercel dev`
    - Go to `localhost:300/api/random` and you will see it works.

The only thing that changed between the two branches is `~utils/randomNumber` to `'../utils/randomNumber'`

## Other Notes

In NextJS, to get absolute paths to work you have to add the following to a `next.config.js`.

```js
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
  target: "serverless"
};
```


