---
to: packages/<%=name%>/package.json
---
{
  "name": "@q3log/<%=name%>",
  "version": "0.0.0",
  "engines": {
    "node": ">=12.0.0"
  },
  "description": "<%=description%>",
  "author": "Samuel Tilly <28404+SamuelTilly@users.noreply.github.com>",
  "homepage": "https://github.com/ra3se/q3log",
  "repository": {
    "type": "git",
    "url": "https://github.com/ra3se/q3log.git"
  },
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
    "build": "babel --root-mode upward --extensions '.ts' --ignore '**/*.spec.ts' src -d lib"
  },
  "devDependencies": {
    "@q3log/types": "^0.0.0"
  }
}
