# json-persistent

使用Redis、MongoDB实现json的持久化

## Install

`npm install json-persistent`

## API

### set(key, value): Promise
存储持久化数据

### 参数
- `key` 持久化数据的键，必须在数据库中唯一
- `value` 持久化数据的JSON字符串，可使用JSON.stringify方法生成

### 返回值
出错时，reject错误描述；


## Example

### Redis 示例

参见 [测试用例](./test/redis.js)
