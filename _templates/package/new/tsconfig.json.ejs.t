---
to: packages/<%=name%>/tsconfig.json
---
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib",
    "rootDirs": ["../*/src"]
  }
}

