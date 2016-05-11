# express-webpack-react-sass (2016-05-11)
Boilerplate for managing Sass in a React/Webpack set up.  This is a useful starting point if you just want to make some HTML pages using React and want to keep your CSS organized.  The production compiles CSS into a separate file to avoid JS overhead of rendering the CSS.

Inspirations:
* David Khourshid's article [Styling React Components In Sass](http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/)
* Christian Alfon's [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)
* The Sass: [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)

## Install and Running
`git clone https://github.com/thirdreplicator/express-webpack-react-sass.git`

## Development:
1. cd express-webpack-react-sass
2. npm install
3. npm start
4. navigate to http://localhost:3000 in your browser of choice.

## Production:
1. cd express-webpack-react-sass
2. npm run build
3. NODE_ENV=production PORT=8080 npm run start
4. navigate to http://localhost:8080/index.html in your browser of choice.

### React by default
The project runs with React by default and hot replacement of changes to the modules. Currently it is on 0.14.8.

### CSS Modules
Scope your css by placing all css for a component in .name-of-your-component and adding the className attribute to your React component.

###Note:
Using node v4.4.3.  Other versions of node haven't been checked.

