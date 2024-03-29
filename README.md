# [wmel.us](https://wmel.us)

> Personal website for William Lamason.

## Technologies Used

- [html5-boilerplate](https://github.com/h5bp/html5-boilerplate/)
- [tailwindcss](https://tailwindcss.com/)
- [cssnano](https://cssnano.co/)
- [tabler icons](https://github.com/tabler/tabler-icons)
- [hero patterns](https://www.heropatterns.com/)
- [css gradients](https://css-tricks.com/gradient-borders-in-css/)
- [tailwind plain html starter](https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/)

## Development

Disable purging in ```tailwind.config.js``` if adding new tailwindcss classes:

```js
purge: {
  enabled: false,
  ...
}
```

Build ```styles.css``` and run a development server:

```npm run dev```

## Building for Deployment

Enable purging in ```tailwind.config.js``` if disabled during development:

```js
purge: {
  enabled: true,
  ...
}
```

Build purged and minified ```styles.css```:

```npm run build```

## Deployment

```git subtree push --prefix dist origin gh-pages```

Learned this trick from [here](https://gist.github.com/cobyism/4730490). More about git subtree [here](https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202).

Messed up your git history and having trouble pushing to the subtree? Send it with:

```git push origin `git subtree split --prefix dist main`:gh-pages --force```

For more info, see [this link](https://stackoverflow.com/questions/13756055/why-cant-i-push-this-up-to-date-git-subtree).
