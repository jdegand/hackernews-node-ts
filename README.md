# Node Typescript Helix Tutorial 

This is the completed result from this tutorial [How To GraphQL](https://www.howtographql.com/typescript-helix/0-introduction/).

## Table of contents

- [Overview](#overview)
    - [Built with](#built-with)
- [How To Use](#how-to-use)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Overview

### Built with

- GraphQL
- GraphQL-Helix
- Prisma

## How to Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jdegand/hackernews-node-ts

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

### What I learned

- For the minimal amount of typescript used here, typescript required a lot of packages.  
- GraphiQL had been a holding pattern and seems like the community is trying to revive the project. 
- Graphql-Helix abstracts away a ton of steps - parse, validation, variable parsing and context building   

### Useful Resources

- [NPM](https://www.npmjs.com/package/graphql-import-node) - had issue with graphql-import-node needed to register it.  Tutorial neglected to mention it but later file had the import.  
- [Prisma Blog](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e) - outdated ?
- [Medium](https://medium.com/@krishnaregmi/how-to-write-comments-in-a-graphql-schema-to-enhance-auto-generated-documentation-c0047125ea24) - comments in schema file
- [Stack Overflow](https://stackoverflow.com/questions/69274503/property-does-not-exist-when-i-want-to-use-model-added-in-prisma-schema) - have to restart vscode after changing schema.prisma 
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) - Server sent events
