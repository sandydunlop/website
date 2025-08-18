Package [io.github.sandydunlop.markista.util](index.md)

# Class LinkResolver
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.LinkResolver<br/>
<br/>

----

<span style="font-family: monospace;">public class __LinkResolver__</span>

`LinkResolver` calculates the paths for Markdown documents
to link between different packages and to URLs of external
packages and their contents.

This class manages resolving references and generating links
for types, packages, modules, and native Java elements.

It supports resolving primitives, void, native Java modules and packages,
and also local API model packages and types.

LinkResolver must be initialized for the current API before use via `init(Api)`.
It provides multiple resolve methods for building appropriate links.

The class supports relative path calculation for Markdown output.
It also manages native Java documentation URLs for modules and packages.


## Method Summary

| Modifier and Type                                                                                              | Method                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                         |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| public static void                                                                                             | [init](#init)([Api](../model/Api.md) a, [Context](../core/Context.md) c)                                                                                                                                                                                                                                                                                 | Initializes the LinkResolver for the API being documented.                                          |
| public static void                                                                                             | [setFlattenedDirectories](#setflatteneddirectories)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)                                                                                                                                                                                                     | Sets the string used to adjust flattened directories in relative path calculations.                 |
| public static void                                                                                             | [addNativeModuleUrl](#addnativemoduleurl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) | Adds a native module URL base for linking native Java modules and their packages.                   |
| public static [Reference](../model/Reference.md)                                                               | [resolve](#resolve)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                                             | Resolves a link reference.                                                                          |
| public static [String\](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String\.html)[] | [qualifyType](#qualifytype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                           | Returns canonical package and class names for a given type name, ensuring both parts are qualified. |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)     | [qualifyPackage](#qualifypackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)                                                                                                                                                                                                               | Qualifies a simple package name to its fully qualified name within the API, if exists.              |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)     | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                                                                                               | Produces a relative path from the current package context to a target package.                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)     | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                            | Produces a relative path string from one package to another by splitting and comparing components.  |
| public static void                                                                                             | [addNativeModules](#addnativemodules)()                                                                                                                                                                                                                                                                                                                  | Adds known native modules for Java SE 24 to the resolver.                                           |

## Method Details

### init

public static void init([Api](../model/Api.md) a, [Context](../core/Context.md) c)

Initializes the LinkResolver for the API being documented.


---

### setFlattenedDirectories

public static void setFlattenedDirectories([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)

Sets the string used to adjust flattened directories in relative path calculations.


---

### addNativeModuleUrl

public static void addNativeModuleUrl([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)

Adds a native module URL base for linking native Java modules and their packages.


---

### resolve

public static [Reference](../model/Reference.md) resolve([Reference](../model/Reference.md) link)

Resolves a link reference. The supplied `link` parameter must specify the
target of the link: a class, a module, etc. If the link can be resolved, 
the details of the type of link are set in the `link` object before it is
returned.

**Returns:**

The `link` with its `uri` field set, or its `kind` field set to `UNKNOWN`
if the link was not able to be resolved.


---

### qualifyType

public static [String\](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String\.html)[] qualifyType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Returns canonical package and class names for a given type name, ensuring both parts are qualified.

**Returns:**

A String array: {packageName, className}.


---

### qualifyPackage

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyPackage([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)

Qualifies a simple package name to its fully qualified name within the API, if exists.

**Returns:**

The fully qualified package name or empty string if not found.


---

### relativize

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativize([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)

Produces a relative path from the current package context to a target package.

**Returns:**

A relative filesystem path string.


---

### relativize

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativize([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)

Produces a relative path string from one package to another by splitting and comparing components.
Supports flattened directories if set.

**Returns:**

The relative path string.


---

### addNativeModules

public static void addNativeModules()

Adds known native modules for Java SE 24 to the resolver.
This populates internal mappings for native module and package documentation URLs.


---

