# YAML

[//]: # (This may be the most platform independent comment)

## YAML Parser Performance Benchmarks

Executed on OpenJDK 25 (Zulu 25+36-LTS). Warmed-up metrics measure Throughput (ops/ms, higher is better). Cold Start metrics measure Single-Shot execution (us/op, lower is better).

Benchmarks were made using [cascara-benchmark-yaml](https://github.com/sandydunlop/cascara-benchmark-yaml), a fork of [LSYAML-Benchmark](https://github.com/vansencool/LSYAML-Benchmark).

For CLI tools, short-lived serverless tasks, or developer environment initializations, cold startup is what developers actually experience. Cascara eliminates the heavy framework tax:

![](images/benchmark-yaml-parser-cold.svg)


Once the JVM optimizes the execution path, Cascara's stream-centric parsing model dominates mid-sized configurations and complex, anchor-heavy structural trees.

![](images/benchmark-yaml-parser-hot.svg)

---

