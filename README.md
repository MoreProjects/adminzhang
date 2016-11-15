## React Starter Kit — "isomorphic" web app boilerplate

> [React Starter Kit](https://www.reactstarterkit.com) is an opinionated
> boilerplate for web development built on top of Facebook's
> [React](https://facebook.github.io/react/) library,
> [Node.js](https://nodejs.org/) / [Express](http://expressjs.com/) server
> and [Flux](http://facebook.github.io/flux/) architecture. Containing
> modern web development tools such as [Webpack](http://webpack.github.io/),
> [Babel](http://babeljs.io/) and [BrowserSync](http://www.browsersync.io/).
> Helping you to stay productive following the best practices. A solid starting
> point for both professionals and newcomers to the industry.

See [demo](http://demo.reactstarterkit.com) &nbsp;|&nbsp;
[docs](https://github.com/kriasoft/react-starter-kit/tree/master/docs) &nbsp;|&nbsp;
[bugs & feature requests](https://waffle.io/kriasoft/react-starter-kit) &nbsp;|&nbsp;
join [#react-starter-kit](https://gitter.im/kriasoft/react-starter-kit) chatroom to stay up to date &nbsp;|&nbsp;
visit our sponsors:

### Getting Started

  * Follow the [getting started guide](./docs/getting-started.md) to download and run the project
  * Check the [code recipes](./docs/recipes) used in this boilerplate, or share yours

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /api/                   # REST API / Relay endpoints
|   │   ├── /ApiConfig                      # API配置，前缀等
|   │   ├── /ApiService                     # 所有的HTTP请求配置
|   │   ├── /HttpClient                     # 基于superagent的模块
│   ├── /components/            # React components
|   ├── ├── /LecturerApp/                   # 废弃模块
|   ├── ├── /LecturerContainer/             # 废弃模块
|   │   ├── /LecturerArticlesApp            # 文章管理模块
|   │   ├── /LecturerArticlesContainer      # 文章管理模块
|   │   ├── /LecturerArticlesContent        # 文章管理模块
|   │   ├── /LecturerClassroomApp           # 房间管理模块
|   │   ├── /LecturerClassroomContainer     # 房间管理模块
|   │   ├── /LecturerClassroomContent       # 房间管理模块
|   │   ├── /LecturerCommonHeader           # 通用模块 -- Header
|   │   ├── /LecturerClassroomApp           # 房间管理模块
|   │   ├── /LecturerClassroomContainer     # 房间管理模块
|   │   ├── /LecturerClassroomContent       # 房间管理模块
|   │   ├── /LecturerCourseApp              # 课程管理模块
|   │   ├── /LecturerCourseContainer        # 课程管理模块
|   │   ├── /LecturerCourseContent          # 课程管理模块
|   │   ├── /LecturerFollowerApp            # 徒弟管理模块
|   │   ├── /LecturerFollowerContainer      # 徒弟管理模块
|   │   ├── /LecturerFollowerContent        # 徒弟管理模块
|   │   ├── /LecturerHighlightApp           # 集锦管理模块
|   │   ├── /LecturerHighlightContainer     # 集锦管理模块
|   │   ├── /LecturerHighlightContent       # 集锦管理模块
|   │   ├── /LecturerMessageApp             # 消息管理模块
|   │   ├── /LecturerMessageContainer       # 消息管理模块
|   │   ├── /LecturerMessageContent         # 消息管理模块
|   │   ├── /LecturerProfile                # 通用模块 -- 个人房间信息模块
|   │   ├── /LecturerSidebar                # 通用模块 -- 菜单栏模块
|   │   ├── /LecturerSidebarItem            # 通用模块 -- 菜单项模块
|   │   ├── /LecturerTargetApp              # 指标管理模块
|   │   ├── /LecturerTargetContainer        # 指标管理模块
|   │   ├── /LecturerTargetContent          # 指标管理模块
|   │   ├── /LecturerVideoApp               # 录播管理模块
|   │   ├── /LecturerVideoContainer         # 录播管理模块
|   │   ├── /LecturerVideoContent           # 录播管理模块
|   │   ├── /LecturerWordApp                # 文字管理模块
|   │   ├── /LecturerWordContainer          # 文字管理模块
|   │   ├── /LecturerWordContent            # 文字管理模块
│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content (plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core framework and utility functions
|   │   ├── /DomUtils                       # DOM的工具
|   │   ├── /Util.js                        # 通用工具模块
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /routes.js              # Universal (isomorphic) application routes
│   └── /server.js              # Server-side startup script
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
│── package.json                # The list of 3rd party libraries and utilities
└── preprocessor.js             # ES6 transpiler settings for Jest
```

### Related Projects

  * [React Static Boilerplate](https://github.com/koistya/react-static-boilerplate) — Generates static websites from React components
  * [Babel Starter Kit](https://github.com/kriasoft/babel-starter-kit) — Boilerplate for authoring JavaScript/React.js libraries
  * [React Decorators](https://github.com/kriasoft/react-decorators) — A collection of higher-order React components

### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Getting Started with GraphQL and Relay](https://quip.com/oLxzA1gTsJsE)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
  * [Jest - Painless Unit Testing](http://facebook.github.io/jest/)
  * [Flow - A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)

### Support

  * [#react-starter-kit](https://gitter.im/kriasoft/react-starter-kit) on Gitter — Feedback, feature requests, Q&A
  * [@koistya](https://www.codementor.io/koistya) on Codementor — Mentorship, pair coding, code reviews
  * support@kriasoft.com — Customization requests, help with GraphQL/Relay, database design etc.

### License

Copyright © 2014-2015 Kriasoft, LLC. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/kriasoft/react-starter-kit/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.

---
Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/react-starter-kit/graphs/contributors)
