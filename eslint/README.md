### 配置文件
```
{
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "script"
    }
}
```

- env: 定义预设的全局变量
    - browser: 浏览器环境，预定义 window、document 等
    - es2021: ES2021 标准，支持 Promise、Symbol 等
- extends: 设置为 "eslint:recommended"，表示使用 ESLint 推荐的规则
parserOptions: 解析器相关
    - ecmaVersion: 指定 ECMAScript 版本
    - sourceType: 指定源代码类型
        - script: 默认值，表示 JavaScript 代码
        - module: 表示 ES6 模块化代码
- rules: 定义具体的规则，与 prettier 的规则冲突时，以 prettier 的规则为准
    - indent: 缩进，2个空格，如果发生错误，则使用 error 级别抛出错误；
    - quotes: 字符串使用单引号，如果发生错误，则使用 error 级别抛出错误；

#### 增加 --fix
```
exlint --fix .
```

使用 ESLint 做代码检查的时候，支持自动修复，只能修复一部分。
