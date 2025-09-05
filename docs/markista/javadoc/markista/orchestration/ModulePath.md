Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class ModulePath
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.ModulePath<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __ModulePath__</span>


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                                  | Field                           | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                  | [DOT_CLASS](#dot_class)         |             |
| [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                               | [classNames](#classnames)       |             |
| [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [classToModule](#classtomodule) |             |
| [Context](../core/Context.md)                                                                                                                                                                                                                                                      | [ctx](#ctx)                     |             |
| [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                               | [moduleNames](#modulenames)     |             |



## Constructor Summary

| Constructor                                                                                                                                          | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| ModulePath()                                                                                                                                         |             |
| ModulePath([Context](../core/Context.md) c, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePath) |             |



## Method Summary

| Modifier and Type                                                                                                                                                                           | Method                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [getModules](#getmodules)()                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                         | [getModuleForClass](#getmoduleforclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)                                                                                                                                                                                                                                                                                                                        |                                                                                                     |
| public boolean                                                                                                                                                                              | [hasModule](#hasmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                                                                                                                                       |                                                                                                     |
| public boolean                                                                                                                                                                              | [hasClass](#hasclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)                                                                                                                                                                                                                                                                                                                                          |                                                                                                     |
| void                                                                                                                                                                                        | [loadModulePath](#loadmodulepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePath)                                                                                                                                                                                                                                                                                                                             |                                                                                                     |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                | [processDirectory](#processdirectory)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                       |                                                                                                     |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                | [processDirectoryUrl](#processdirectoryurl)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [URL](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URL.html)[] urls, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                   |                                                                                                     |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                | [processClassFile](#processclassfile)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file, [URLClassLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URLClassLoader.html) classLoader, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName) |                                                                                                     |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                | [processJarFile](#processjarfile)([JarFile](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/jar/JarFile.html) jarFile, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                 | Processes a JAR file to extract module and package information relevant for sibling module linking. |



## Field Details

### DOT_CLASS

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __DOT_CLASS__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### classNames

<span style="font-family: monospace; font-size: 80%;">[Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __classNames__</span>




---

### classToModule

<span style="font-family: monospace; font-size: 80%;">[Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __classToModule__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">[Context](../core/Context.md) __ctx__</span>




---

### moduleNames

<span style="font-family: monospace; font-size: 80%;">[Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __moduleNames__</span>




---


## Method Details

### getModules

<span style="font-family: monospace; font-size: 80%;">public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __getModules__()</span>




---

### getModuleForClass

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModuleForClass__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)</span>




---

### hasModule

<span style="font-family: monospace; font-size: 80%;">public boolean __hasModule__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)</span>




---

### hasClass

<span style="font-family: monospace; font-size: 80%;">public boolean __hasClass__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className)</span>




---

### loadModulePath

<span style="font-family: monospace; font-size: 80%;">void __loadModulePath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) modulePath)</span>




---

### processDirectory

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __processDirectory__([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)</span>




---

### processDirectoryUrl

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __processDirectoryUrl__([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [URL](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URL.html)[] urls, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)</span>




---

### processClassFile

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __processClassFile__([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file, [URLClassLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URLClassLoader.html) classLoader, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)</span>



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### processJarFile

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __processJarFile__([JarFile](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/jar/JarFile.html) jarFile, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)</span>

Processes a JAR file to extract module and package information relevant for sibling module linking.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

