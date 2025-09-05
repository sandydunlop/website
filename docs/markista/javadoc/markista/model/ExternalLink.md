Package [io.github.sandydunlop.markista.model](index.md)

# Class ExternalLink
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.ExternalLink<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __ExternalLink__</span>


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                                  | Field                               | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|-------------|
| [](Api.md)                                                                                                                                                                                                                                                                         | [api](#api)                         |             |
| [](../core/Context.md)                                                                                                                                                                                                                                                             | [ctx](#ctx)                         |             |
| boolean                                                                                                                                                                                                                                                                            | [isWebLink](#isweblink)             |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                             | [modules](#modules)                 |             |
| [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [packageToModule](#packagetomodule) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                             | [packages](#packages)               |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                       | [path](#path)                       |             |



## Constructor Summary

| Constructor                                                                                                                            | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|-------------|
| ExternalLink([](../core/Context.md) c, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) p) |             |



## Method Summary

| Modifier and Type                                                                                                                                                                                                                                                                         | Method                                                                                                                           | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                       | [getPath](#getpath)()                                                                                                            |             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                             | [getModules](#getmodules)()                                                                                                      |             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                             | [getPackages](#getpackages)()                                                                                                    |             |
| public [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [getPackageToModule](#getpackagetomodule)()                                                                                      |             |
| public void                                                                                                                                                                                                                                                                               | [setWebLink](#setweblink)(boolean b)                                                                                             |             |
| public boolean                                                                                                                                                                                                                                                                            | [isWebLink](#isweblink)()                                                                                                        |             |
| public [](Api.md)                                                                                                                                                                                                                                                                         | [getApi](#getapi)()                                                                                                              |             |
| public void                                                                                                                                                                                                                                                                               | [load](#load)()                                                                                                                  |             |
| private [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html)                                                                                                                                                                                             | [uriForFile](#uriforfile)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName) |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                            | [loadFileFromUri](#loadfilefromuri)([URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) uri)   |             |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">[](Api.md) __api__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">[](../core/Context.md) __ctx__</span>




---

### isWebLink

<span style="font-family: monospace; font-size: 80%;">boolean __isWebLink__</span>




---

### modules

<span style="font-family: monospace; font-size: 80%;">[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __modules__</span>




---

### packageToModule

<span style="font-family: monospace; font-size: 80%;">[Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __packageToModule__</span>




---

### packages

<span style="font-family: monospace; font-size: 80%;">[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __packages__</span>




---

### path

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __path__</span>




---


## Method Details

### getPath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPath__()</span>




---

### getModules

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __getModules__()</span>




---

### getPackages

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __getPackages__()</span>




---

### getPackageToModule

<span style="font-family: monospace; font-size: 80%;">public [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __getPackageToModule__()</span>




---

### setWebLink

<span style="font-family: monospace; font-size: 80%;">public void __setWebLink__(boolean b)</span>




---

### isWebLink

<span style="font-family: monospace; font-size: 80%;">public boolean __isWebLink__()</span>




---

### getApi

<span style="font-family: monospace; font-size: 80%;">public [](Api.md) __getApi__()</span>




---

### load

<span style="font-family: monospace; font-size: 80%;">public void __load__()</span>




---

### uriForFile

<span style="font-family: monospace; font-size: 80%;">private [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) __uriForFile__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)</span>




---

### loadFileFromUri

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __loadFileFromUri__([URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) uri)</span>




---

