# pinst-lite (DEPRECATED)

> This was a fork of [pinst](https://github.com/typicode/pinst) package with a smaller dependency graph which was achieved by using alternative depepndencies.
>
> In the meantime, [pinst](https://github.com/typicode/pinst) reduced its dependency count to 1 and is now the preferred package to use.

<!--
> `pinst-lite` lets you have `postinstall` hook that runs only in dev 🍺

This can be useful if you want to automatically run commands just after `npm install`, but don't want your package users to be affected.

Alternatively, you can also use it the other way around and prevent `postinstall` hook to run in dev.

## Usage

```sh
$ npm install pinst-lite --save-dev
```

```js
// package.json
{
  "scripts": {
    "postinstall": "...",
    // Add pinst to npm publish hooks
    "prepublishOnly": "pinst --disable",
    "postpublish": "pinst --enable"
  }
}
```

```sh
$ npm publish
```

_On `prepublishOnly`, `postinstall` will be renamed to `_postinstall` (disabled)_

_On `postpublish`, it will be renamed back to `postinstall` (enabled)_

## CLI

`pinst-lite accepts the following flags

```
--enable, -e   Enable postinstall hook
--disable, -d  Disable postinstall hook
--silent, -s
```

## Try it

You can test that everything works, without actually publishing your package, by manually running the following commands

```sh
npm run prepublishOnly # Check package.json
npm run postpublish    # Check package.json
```

## Tips

By inverting commands, you can also use `pinst-lite` to enable `postinstall` for your users only and not yourself.

`pinst-lite` also supports `install` alias.

-->

## License

MIT - [Nikita Karamov](https://github.com/NickKaramoff)  
MIT - [Typicode :cactus:](https://github.com/typicode)
