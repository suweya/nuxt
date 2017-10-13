- head里面meta的使用
- nuxt.config.js 里面可以定义head对象,包含两个属性titleTemplate、meta
  - titleTemplate 定义title的模板，在page里面可以定义title替换
  - meta 里面是公共的meta信息page里面可以覆盖，根据name

- component里面也可以包含head，会添加在page页面