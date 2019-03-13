# Remote Component Starter Kit [![pipeline status](https://gitlabdev.paciolan.info/development/library/javascript/remote-component-starterkit/badges/master/pipeline.svg)](https://gitlabdev.paciolan.info/development/library/javascript/remote-component-starterkit/commits/master) [![coverage report](https://gitlabdev.paciolan.info/development/library/javascript/remote-component-starterkit/badges/master/coverage.svg)](https://gitlabdev.paciolan.info/development/library/javascript/remote-component-starterkit/commits/master)

Remote Components give you the power to dynamically load React Components at run time.

# Getting Started

```bash
# clone the remote component starter kit
git clone git@gitlabdev.paciolan.info:development/library/javascript/remote-component-starterkit.git my-component
cd my-component

# remove origin
git remote remove origin

# install dependencies
npm ci
```

# Algorithms

Remote Components are designed to be dynamically loaded and injected into an app during run time. The Remote Component should be self contained with all of it's dependencies bundled with webpack. Any dependencies that will be shared by the app, should be marked as `external` in the `webpack.config.js`.

The component needs to be the `default` export.

# Building

Your bundle will be output into the `dist` folder.

```bash
npm run build
```

# Debugging

Start Webpack Dev Server

```bash
npm run start
```

# Commiting

You should have commitizen installed globally.

```bash
npm install -g git-cz
```

Commits can be added using the cli.

```bash
# stage all changes
git add .

# run commitizen
npm run cm
```

# Contributors

Joel Thoms (jthoms@paciolan.com)

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](www.flaticon.com)
