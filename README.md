# Ikhtisar

Repo ini dibuat pada 21-Maret-2023 dengan info sbb:

```sh
$ cd ~/projects/MyGithub/explore-remix
$ pnpm create remix@latest
```
```text
? Where would you like to create your app? ./explore-remix
? What type of app do you want to create? Just the basics
? Where do you want to deploy? Choose Remix App Server if you're unsure; it's easy to change deployment
targets. Remix App Server
? TypeScript or JavaScript? TypeScript
? Do you want me to run `pnpm install`? No
💿 That's it! `cd` into "/Users/ridho/projects/MyGithub/my-remix-app" and check the README for development and deploy instructions!
```
```sh
cd explore-remix
git init
git add .
git commit -m "Bismillah."
pnpm update

```
```text
dependencies:
+ @remix-run/node 1.14.3
+ @remix-run/react 1.14.3
+ @remix-run/serve 1.14.3
+ isbot 3.6.7
+ react 18.2.0
+ react-dom 18.2.0

devDependencies:
+ @remix-run/dev 1.14.3
+ @remix-run/eslint-config 1.14.3
+ @types/react 18.0.28
+ @types/react-dom 18.0.11
+ eslint 8.36.0
+ typescript 4.9.5 (5.0.2 is available)
```


# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
