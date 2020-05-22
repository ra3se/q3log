---
to: packages/<%=name%>/package.json
---
{
  "name": "@q3log/<%=name%>",
  "version": "0.0.0",
  "description": "<%=description%>",
  "author": "Samuel Tilly <28404+SamuelTilly@users.noreply.github.com>",
  "homepage": "",
  "license": "MIT",
  "main": "lib/index.js",
  "directories": {
    "lib": "lib",
    "bin": "bin"
  },
  "files": [
    "lib",
    "bin"
  ],
  "bin": {
    "q3log-<%=name%>": "bin/q3log-<%=name%>"
  },
  "scripts": {
    "check-types": "tsc",
    "build": "babel --root-mode upward --extensions '.ts' --ignore '**/*.spec.ts' src -d lib",
    "watch": "yarn run build --watch",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "yarn run lint -- --fix"
  },
  "devDependencies": {
    "@q3log/types": "^0.0.0"
  }
}
