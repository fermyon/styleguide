# Styleguide

## A visual reference manual for [Fermyon](https://fermyon.com) related materials.

The styleguide exists as an npm [package](https://www.npmjs.com/package/fermyon-styleguide), so it can be easily imported into other projects and applied as a baseline branded CSS layer.

The styleguide also contains a `/docs` page (visible [here](https://fermyon-styleguide.netlify.app/) as a website), which contains our brand guidelines, logos and design resources.

```
npm install -D fermyon-styleguide
```

### Importing & Using in Other Projects

Adding the styleguide to your project:

```
npm install -D fermyon-styleguide
```

Importing it into your CSS/SCSS assets:

Once NPM adds the package, the core `.scss` file can be imported into your project stylesheet as a dependancy.

```
@import "../../node_modules/fermyon-styleguide/scss/fermyon";
```

You can see examples of the styleguide being imported into other projects [here](https://github.com/fermyon/fermyon.com/blob/main/static/sass/styles.scss#L16) (fermyon.com site) and [here](https://github.com/fermyon/spin/blob/main/docs/static/sass/styles.scss#L16) (Spin docs).




### Working on Styleguide