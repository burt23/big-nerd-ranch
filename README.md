# Big Nerd Ranch Hiring Exercise

This exercise is a Node/Express API with endpoints for creating and retreving users from a PostgreSQL database.

## Getting Started

After cloning down the repo and installing the necessary dependencies you can run the project locally on port 8080

```bash
npm clone <REPO_URL>
cd express-app
npm install  // installs dependencies -> generates node_modules folder
npm run dev  // invokes nodemon in watch mode for development
```

## ENV Variables

By default the app will attempt to connect to a deployed Postgres instance provided by Heroku. However local DB instances are also supported via two environment variables DEV_MODE, and DATABASE_URL.

If you'd like to run the db locally then export DEV_MODE=true and modify the DATABASE_URL to point to your local db.
example

```bash
export DEV_MODE=true
export DATABASE_URL=pg://<user>:<pass>@<host>:<port>/<db>?ssl=true
```

## SSL Issues

If you are encountering SSL issues in connecting to the Heroku DB, an additional environment variable may be required to access the datastore. This is a work around for a self-signed certificate generated by the pg module.

```bash
export NODE_TLS_REJECT_UNAUTHORIZED=0
```
