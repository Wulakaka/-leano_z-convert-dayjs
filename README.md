# convert-dayjs
二次封装dayjs，当地时间与东八区时间互相转换

## 安装
```shell
pnpm add @leano_z/convert-dayjs
```

## API

所有方法返回对象均为`dayjs`对象，所以可以调用`dayjs`的所有方法。
### convertToLocal 
转换东八区时间为当地时间。

```ts
import {convertToLocal} from "@leano_z/convert-dayjs";
// 服务端返回时间为东八区时间，转换后变为当地时间
console.log(convertToLocal('2023-10-10').format())

// 可以将返回的dayjs对象重新转为东八区时间
console.log(convertToLocal('2023-10-10').server().format())
```

### convertToServer
转换当地时间为东八区时间（服务端时间）
```ts
import {convertToServer} from "@leano_z/convert-dayjs";
// 转换当地时间为东八区时间
console.log(convertToServer(new Date()).format())

// 重新转换为当地时间，local() 为 dayjs 的方法
console.log(convertToServer(new Date()).local().format())
```
