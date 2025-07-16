Package [io.github.sandydunlop.markista.util](index.md)

# Class LinkResolver
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.LinkResolver<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                           | Field              | Description |
|-----------------------------------------------------------------------------------------------------------------------------|--------------------|-------------|
| private static HashMap&lt;String,String&gt;                                                                                 | suffix             |             |
| private static HashMap&lt;String,String&gt;                                                                                 | nativePackageNames |             |
| private static final [ModuleLayer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/ModuleLayer.html) | moduleLayer        |             |
| private static HashSet&lt;String&gt;                                                                                        | localPackageNames  |             |

## Constructor Summary

| Constructor    | Description |
|----------------|-------------|
| LinkResolver() |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                           | Description |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-------------|
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [resolve](#resolve)(String from, String to)                                      |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getPackageName](#getpackagename)(String id)                                     |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)(String id)                                         |             |
| static void                                                                                                 | [addNativeModule](#addnativemodule)(String moduleName, String baseUrl, String s) |             |
| static void                                                                                                 | [addLocalPackage](#addlocalpackage)(String identifier)                           |             |

## Method Details

### resolve

`static String resolve(String from, String to)`



### getPackageName

`private static String getPackageName(String id)`



### getClassName

`private static String getClassName(String id)`



### addNativeModule

`static void addNativeModule(String moduleName, String baseUrl, String s)`



### addLocalPackage

`static void addLocalPackage(String identifier)`



