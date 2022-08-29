# aureka.ai programming test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This uses an internal template developed by myself that is not published to npm. This includes Chakra UI and other utilities. 

## Usage

### Chakra UI

This project uses Chakra UI to build the UI. This allows for a speedy development and using their extensive theme we can still make the application feel unique.

It also includes out of the box versioning and changelog generation, commit linter and code linting.

## Getting Started

Firstly, install the dependencies.

```bash
npm i
# or 
yarn install 
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Overview

### api

The API layer is responsible for invoking the axios HTTP client and handling the API requests from the application.

### cache

The cache layer is responsible for caching the auth status of the end user.

### components

Re-usable components get declared here to be imported within the component layer or `pages` layer.

### dto

This is the data transfer object layer and a space to declare our TypeScript types and define our schema based validation.

The schema `joi` library is used to validate the data transfer object and is shared between the front-end and the back-end.

### pages

The pages layer is responsible for rendering the pages of the application + the API routes from Next.js

### styles

The styles layer is responsible for defining the styles of the application using Chakra UI, we extend their default theme.

### utilities

The utilities layer is responsible for defining the utilities of the application, like environment variables, constants, etc.
