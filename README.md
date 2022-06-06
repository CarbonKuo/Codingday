# CodingDay

Personal practice with Leetcode and some question banks 💻

## Create a new problem

```
gulp init
prompt: num: <number>
prompt: language: [js|rust]
```

It will generate a folder and files automatically.

## Benchmark

```
npm run benchmark
node benchmark
node benchmark -t Roman
```

## Test

### Node.js

```sh
npm test
mocha test
mocha test -t Roman
```

#### Test Java using mocha

```
mocha test -t '001.Two Sum' --java
```

#### Test Ruby using mocha

```
mocha test -t '001.Two Sum' --ruby
```

### Rust

```sh
cargo test
cargo test --lib -p <target>
```

## Links

| #    | Title                                                                                                                                         | Solution                                                                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 0160 | [Intersection of Two Linked Lists](https://github.com/CarbonKuo/CodingDay/tree/master/LeetCode/0160.Intersection%20of%20Two%20Linked%20Lists) | [js](https://github.com/CarbonKuo/CodingDay/tree/master/LeetCode/0160.Intersection%20of%20Two%20Linked%20Lists/index.js) |
| 0027 | [Remove Element](https://github.com/CarbonKuo/CodingDay/tree/master/LeetCode/0027.Remove%20Element)                                           | [js](https://github.com/CarbonKuo/CodingDay/tree/master/LeetCode/0027.Remove%20Element/index.js)                         |
