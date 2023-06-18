# Leo Demo App
## What:

This is a small demo web app using `NextJS`, `GraphQL`, `Zustand`, `Chakra UI`, `TypeScript` and `GitHub OAuth`.

### It features
- Responsiveness (mobile, tablet and desktop).
- Secured pages (NextAuth and NextJS Middleware).
- GraphQL API call.
- pnpm. [Why pnpm over npm?](https://refine.dev/blog/pnpm-vs-npm-and-yarn/#disk-space-efficiency)
- Strong linting rules for high quality code standards. [See rules here](/.eslintrc.js)

## How:
In order to run this web app you need to have NodeJS and pnpm in your environment.
### Prerequisites:
- NodeJS 18.x
- pnpm 8.x

### Setup:
```bash
npm i -g pnpm
pnpm i --frozen-lockfile
```

### Run:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using the app

The app has 3 pages: Home, Dashboard and Profile.

Once you hand on the home page, you have to login (the app will take you to GitHub for authentication).

You will then be prompted with a modal asking for your name and job title, which can be seen on the Profile page.

After logging in, you are redirected to the Dashboard page where you can see country details based on the country code typed in the search field.
