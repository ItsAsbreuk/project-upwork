# Usage

It is supposed that node.js and npm are installed on the system.



## Pre-setup

### Step 1: Make sure eslint, mocha and istanbul are installed globaly:

```js
npm i -g mocha
npm i -g istanbul
npm i -g eslint
```

### Step 2: manually install the package `@ezhome` (inside the root of the project):
```js
mkdir node_modules
```

```js
cp /some_dir/@ezhome node_modules
```
Where `some_dir` is the location where a valid folder of `@ezhome` resides.

### Step 3: install all dependencies (inside the root of the project):
```js
npm i
```

# Webapplication ezhome.io

The web-application has its source-code inside the `src`-folder, subdivided by versions.
The development takes places at the highest number, always ending with `-rc.x`

The production-versions are built with `webpack` and reside in the folder: `public_server`. This is the folder where
the application should be run. During production, this folder should be copied to a remote server.


## Inspecting deployment-version:

### Step 1: changing code

Change the code inside the folder src/0.0.1-rc.0

### step 2: run the deployment server (from the root-folder)
```
gulp devserver
```

### step 3: view the app in the browser
```
http://localhost:9000
```


## Making deployed version available for production

### Step 1: run the tests
```
gulp test
```
The tests should be defined inside the folder `/src/version/tests`, `gulp test` always runs the tests
of the highest development-version

### Step 2: run the selenium-tests
Be asure you have the develop-server running in another task:

#### task 1:
```
gulp devserver
```

#### task 2:
```
npm run selenium
```

The tests should be defined inside the folder `/src/version/selenium-tests`
**Note** that `npm run selenium` does not yet automaticly take the current version!
The version that is tested, should be set inside the file `nightwatch.json`.

### step 3: Bump the version of the web-application (from the root-folder), by one of these 3 commands:
```
gulp bumppatch
gulp bumpminor
gulp bumpmajor
```

### step 4: Copy the new version to the server:
You should copy the folder `public_server/versions/x.x.x` (latest) and the file `public_server/package.json`.
The file `public_server/package.json` has the updated version, which will be used when restarting the server.

### step 4: restart the server


## API-documentation

The API is available inside the folder `/api` --> open `index.html` in the browser.

### Re-generate the API-docs

In the root-folder of this module:

```
yuidoc ./src/0.0.1-rc.0 -q -c ./yuidoc.json
```
**Note** that `yuidoc` does not automaticly take the current version!
Be sure the version matches. In the future the will be a `gulp`-command that
automaticly generates the latest version.