# NODEJS API MOCK

Simple application used to mock APIs

## How to Use

- Clone this repo
- Create a file named `routes.js` (Use the example file `routes.json.example`)
- Start project using `yarn/npm start` or `node server.js`;

## Roadmap

- [x] Read endpoints from file (`routes.json`);
- [x] Check if `routes.json` file exists;
- [ ] Validate `routes.json` data;
- [x] Expose all created routes (localhost:<port>/routes);
- [x] Support most used Http methods (Get, Post, Put, Patch, Delete);
- [ ] Test all supported Http methods;
- [ ] Implement other Http methods;
- [x] Create endpoints that will return Http Response Body, Headers and Delay;
- [ ] Simulate authentication;
- [ ] Create tests (Jest?!);
