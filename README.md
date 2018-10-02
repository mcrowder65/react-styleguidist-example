### React Styleguidist Example

Docs: https://mcrowder65.github.io/react-styleguidist-example

How to create a documentation website like this with react-styleguidist

```bash
create-react-app my-styleguidist-example && cd my-styleguidist-example
npm install --save-dev react-styleguidist@7.3.8 webpack@3.8.1
```

Add these scripts to package.json,
```json
"styleguide": "styleguidist server",
"styleguide:build": "styleguidist build && rm -rf docs && mv styleguide docs"
```

Move all of your components into a `components` folder.

The structure I follow is
```
components/
components/component-name/
components/component-name/index.js
components/component-name/README.md
```

and in the README.md you can literally use the `ComponentName` and it will render in the docs.


Then, run `npm run styleguide:build` and you should have a `docs/index.html` file.

Look this up in finder and display it in a browser, and you should have rendered documentation.

Now you have a docs folder, now let's get your github pages to render the documentation.

Go to your github page, then go to Settings in the top right, scroll down to Github Pages, and choose `master branch/docs folder` and click save.

Now, whatever index.html you render in your docs folder will be hosted at the url specified.


