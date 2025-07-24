Package [io.github.sandydunlop.markista.util](index.md)

# Class LinkResolver
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.LinkResolver<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                                                               | Field                                       | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|-------------|
| private static final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt;                                                                                               | [primatives](#primatives)                   |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                     | [location](#location)                       |             |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [nativePackageNames](#nativepackagenames)   |             |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [suffix](#suffix)                           |             |
| private static final [ModuleLayer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/ModuleLayer.html)                                                                                                                                                                                     | [moduleLayer](#modulelayer)                 |             |
| private static [Api](../model/Api.md)                                                                                                                                                                                                                                                                           | [api](#api)                                 |             |
| private static [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html)                                                                                                                                                                                      | [reporter](#reporter)                       |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                     | [squashedDirectories](#squasheddirectories) |             |

## Constructor Summary

| Constructor    | Description |
|----------------|-------------|
| LinkResolver() |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                                                                                                                                                             | Description |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| static void                                                                                                 | [setApi](#setapi)([Api](../model/Api.md) a)                                                                                                                                                                                                                                                                                                        |             |
| static void                                                                                                 | [setSquashedDirectories](#setsquasheddirectories)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)                                                                                                                                                                                                 |             |
| static void                                                                                                 | [setReporter](#setreporter)([Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) r)                                                                                                                                                                                                         |             |
| static void                                                                                                 | [setLocation](#setlocation)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) loc)                                                                                                                                                                                                                      |             |
| static void                                                                                                 | [addNativeModule](#addnativemodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)                                                                                                                                                                                                                 |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)                                                                                                                                                                                                                     |             |
| static [Reference](../model/Reference.md)                                                                   | [resolve](#resolve)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                                                                                               |             |
| static [Reference](../model/Reference.md)                                                                   | [resolve](#resolve)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                            |             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [resolveNative](#resolvenative)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                                                                                   |             |
| static boolean                                                                                              | [isQualified](#isqualified)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                    |             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifyClass](#qualifyclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                  |             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifyPackage](#qualifypackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                              |             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                                                                                         |             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                      |             |

## Field Details

### primatives



### location



### nativePackageNames



### suffix



### moduleLayer



### api



### reporter



### squashedDirectories




## Method Details

### setApi

static void setApi([Api](../model/Api.md) a)



### setSquashedDirectories

static void setSquashedDirectories([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)



### setReporter

static void setReporter([Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) r)



### setLocation

static void setLocation([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) loc)



### addNativeModule

static void addNativeModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)



### getPackageName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)



### getClassName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getClassName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)



### resolve

static [Reference](../model/Reference.md) resolve([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)



### resolve

static [Reference](../model/Reference.md) resolve([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)



### resolveNative

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) resolveNative([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)



### isQualified

static boolean isQualified([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)



### qualifyClass

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyClass([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)



### qualifyPackage

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyPackage([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)



### relativize

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativize([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)



### relativize

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativize([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)



