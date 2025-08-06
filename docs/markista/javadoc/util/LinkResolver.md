Package [io.github.sandydunlop.markista.util](index.md)

# Class LinkResolver
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.LinkResolver<br/>
<br/>

----

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


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                                                               | Field                                         | Description                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                               | [DOT_CLASS](#dot_class)                       |                                                                                                                                                                                       |
| static [Context](Context.md)                                                                                                                                                                                                                                                                                    | [ctx](#ctx)                                   | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                               | [DOT_HTML](#dot_html)                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                               | [JAVA_24_URL](#java_24_url)                   |                                                                                                                                                                                       |
| private static final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt;                                                                                               | [primitives](#primitives)                     |                                                                                                                                                                                       |
| private static final [ModuleLayer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/ModuleLayer.html)                                                                                                                                                                                     | [moduleLayer](#modulelayer)                   |                                                                                                                                                                                       |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [nativeModuleNames](#nativemodulenames)       |                                                                                                                                                                                       |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [nativePackageNames](#nativepackagenames)     |                                                                                                                                                                                       |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [suffix](#suffix)                             |                                                                                                                                                                                       |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt;                                                                                                             | [siblingModules](#siblingmodules)             |                                                                                                                                                                                       |
| static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt;                 | [classToModule](#classtomodule)               |                                                                                                                                                                                       |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                             | [siblingModuleName](#siblingmodulename)       |                                                                                                                                                                                       |
| static [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt;                                                                                                               | [siblingClassNames](#siblingclassnames)       |                                                                                                                                                                                       |
| private static [Api](../model/Api.md)                                                                                                                                                                                                                                                                           | [api](#api)                                   | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation.                            |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                     | [flattenedDirectories](#flatteneddirectories) |                                                                                                                                                                                       |

## Constructor Summary

| Constructor    | Description                                                  |
|----------------|--------------------------------------------------------------|
| LinkResolver() | The default constructor is private to prevent instantiation. |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                         |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| static void                                                                                                 | [init](#init)([Api](../model/Api.md) a)                                                                                                                                                                                                                                                                                                                                | Initializes the LinkResolver for the API being documented.                                          |
| static void                                                                                                 | [setFlattenedDirectories](#setflatteneddirectories)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)                                                                                                                                                                                                                   | Sets the string used to adjust flattened directories in relative path calculations.                 |
| static void                                                                                                 | [addNativeModuleUrl](#addnativemoduleurl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)               | Adds a native module URL base for linking native Java modules and their packages.                   |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)                                                                                                                                                                                                                                     | Extracts the package name part from an identifier string, assuming lowercase start for package.     |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)                                                                                                                                                                                                                                         | Extracts the class name part from an identifier string, assuming uppercase start for class.         |
| static [Reference](../model/Reference.md)                                                                   | [resolve](#resolve)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                                                           | Resolves a link reference.                                                                          |
| static boolean                                                                                              | [tryResolvePrimitiveOrVoid](#tryresolveprimitiveorvoid)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                       | Tries to resolve the link as a primitive or void type.                                              |
| static boolean                                                                                              | [tryResolveNativePackageOrType](#tryresolvenativepackageortype)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                               | Tries to resolve the link as a native package or type.                                              |
| static boolean                                                                                              | [tryResolveLocalPackageOrType](#tryresolvelocalpackageortype)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                 | Tries to resolve the link as a local package or type.                                               |
| static boolean                                                                                              | [tryResolveLocalModule](#tryresolvelocalmodule)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                               | Tries to resolve the link as a local module.                                                        |
| static boolean                                                                                              | [tryResolveSiblingModule](#tryresolvesiblingmodule)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                           | Tries to resolve the link as a sibling module.                                                      |
| static boolean                                                                                              | [tryResolveSiblingType](#tryresolvesiblingtype)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                               | Tries to resolve the link as a sibling type.                                                        |
| static [Reference](../model/Reference.md)                                                                   | [resolveUnsupported](#resolveunsupported)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                                     | Checks if the target is unsupported by the `LinkResolver`.                                          |
| static [Reference](../model/Reference.md)                                                                   | [resolvePrimitiveOrVoid](#resolveprimitiveorvoid)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                             | Checks if the target is a primitive type or void.                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifyType](#qualifytype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                                         | Returns canonical package and class names for a given type name, ensuring both parts are qualified. |
| static [Reference](../model/Reference.md)                                                                   | [resolveNativePackageOrType](#resolvenativepackageortype)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                     | Resolves a native Java package or type to an external documentation URL.                            |
| static [Reference](../model/Reference.md)                                                                   | [resolveLocalPackageOrType](#resolvelocalpackageortype)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                       | Resolves a local package or type within the documented API to a relative link.                      |
| static void                                                                                                 | [addClassToReference](#addclasstoreference)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [Reference](../model/Reference.md) link)                                                                                                                                                                           | Appends the class name to the URI on the Reference and sets kind TYPE if not URL.                   |
| static [Reference](../model/Reference.md)                                                                   | [resolveLocalModule](#resolvelocalmodule)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                                     | Resolves a module reference by name to a Reference either local or native.                          |
| static [Reference](../model/Reference.md)                                                                   | [resolveSiblingModule](#resolvesiblingmodule)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                                 | Attempts to resolve the link as a sibling module relative to the current context.                   |
| static [Reference](../model/Reference.md)                                                                   | [resolveSiblingType](#resolvesiblingtype)([Reference](../model/Reference.md) link)                                                                                                                                                                                                                                                                                     | Attempts to resolve the link as a sibling type relative to the current context.                     |
| static [ModuleNode](../model/ModuleNode.md)                                                                 | [getModule](#getmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                                       | Returns the ModuleNode for the named module in the current API.                                     |
| static boolean                                                                                              | [isPackageQualified](#ispackagequalified)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                           | Checks if a package name is qualified (contains a dot).                                             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifyClass](#qualifyclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)                                                                                                                                                                                                                                 | Qualifies a simple class name to its fully qualified name within the API, if exists.                |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifyPackage](#qualifypackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)                                                                                                                                                                                                                             | Qualifies a simple package name to its fully qualified name within the API, if exists.              |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                                                                                                             | Produces a relative path from the current package context to a target package.                      |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativizeWithModules](#relativizewithmodules)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                    | Produces a relative path considering modules between two packages.                                  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativizeWithSiblingModule](#relativizewithsiblingmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toModule) | Computes a relative path from the current package context, considering sibling modules.             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                          | Produces a relative path string from one package to another by splitting and comparing components.  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [flattenDirectory](#flattendirectory)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)                                                                                                                                                                                                                               | Removes prefix directories from a path if flattenedDirectories is set and matches.                  |
| static int                                                                                                  | [findCommonIndex](#findcommonindex)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] fromParts, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] toParts)                                                                                                                | Finds the common prefix index between two string arrays.                                            |
| static void                                                                                                 | [appendParentDirs](#appendparentdirs)([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, int count)                                                                                                                                                                                                       | Appends parent directory segments (..) to the relative path string builder.                         |
| static void                                                                                                 | [appendTargetDirs](#appendtargetdirs)([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] toParts, int start)                                                                                              | Appends target directory segments to the relative path string builder starting at index start.      |
| static void                                                                                                 | [configureSiblingModules](#configuresiblingmodules)()                                                                                                                                                                                                                                                                                                                  | Configures the known sibling modules for link resolution, typically loading their info.             |
| static void                                                                                                 | [processDirectory](#processdirectory)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory)                                                                                                                                                                                                                                |                                                                                                     |
| static void                                                                                                 | [processDirectoryUrl](#processdirectoryurl)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [URL](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URL.html)\[] urls)                                                                                                                           |                                                                                                     |
| static void                                                                                                 | [processClassFile](#processclassfile)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file, [URLClassLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URLClassLoader.html) classLoader)          |                                                                                                     |
| static void                                                                                                 | [processJarFile](#processjarfile)([JarFile](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/jar/JarFile.html) jarFile)                                                                                                                                                                                                                          |                                                                                                     |
| static void                                                                                                 | [addNativeModule](#addnativemodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                           | Adds a native Java module URL for linking purposes using a standard Oracle Javadoc base URL.        |
| static void                                                                                                 | [addNativeModules](#addnativemodules)()                                                                                                                                                                                                                                                                                                                                | Adds known native modules for Java SE 24 to the resolver.                                           |

## Field Details

### DOT_CLASS



**See Also:**


[Constant Field Values](../constant-values.md)



---

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---

### DOT_HTML



**See Also:**


[Constant Field Values](../constant-values.md)



---

### JAVA_24_URL



**See Also:**


[Constant Field Values](../constant-values.md)



---

### primitives




---

### moduleLayer




---

### nativeModuleNames




---

### nativePackageNames




---

### suffix




---

### siblingModules




---

### classToModule




---

### siblingModuleName




---

### siblingClassNames




---

### api

The Api model representing the entire documented API structure,
including modules, packages, types, and members used for cross-referencing and navigation.


---

### flattenedDirectories




---


## Method Details

### init

static void init([Api](../model/Api.md) a)

Initializes the LinkResolver for the API being documented.

**Parameters:**

`a` - The API being documented.


---

### setFlattenedDirectories

static void setFlattenedDirectories([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)

Sets the string used to adjust flattened directories in relative path calculations.

**Parameters:**

`sd` - The string representing flattened directories.


---

### addNativeModuleUrl

static void addNativeModuleUrl([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)

Adds a native module URL base for linking native Java modules and their packages.

**Parameters:**

`moduleName` - The native module's name (e.g., java.base).

`baseUrl` - The base URL for the native module's documentation.

`s` - The suffix to append to URLs for this module's packages (e.g., ".html").


---

### getPackageName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)

Extracts the package name part from an identifier string, assuming lowercase start for package.

**Parameters:**

`id` - The identifier string (e.g., "java.lang.String").

**Returns:**

The package name portion or empty string if not a package.


---

### getClassName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getClassName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)

Extracts the class name part from an identifier string, assuming uppercase start for class.

**Parameters:**

`id` - The identifier string.

**Returns:**

The class name portion or empty string if none found.


---

### resolve

static [Reference](../model/Reference.md) resolve([Reference](../model/Reference.md) link)

Resolves a link reference. The supplied `link` parameter must specify the
target of the link: a class, a module, etc. If the link can be resolved, 
the details of the type of link are set in the `link` object before it is
returned.

**Parameters:**

`link` - A [Reference](../model/Reference.md) object specifying the target of the link

**Returns:**

The `link` with its `uri` field set, or its `kind` field set to `UNKNOWN`
if the link was not able to be resolved.


---

### tryResolvePrimitiveOrVoid

static boolean tryResolvePrimitiveOrVoid([Reference](../model/Reference.md) link)

Tries to resolve the link as a primitive or void type.

**Parameters:**

`link` - The Reference object to resolve.

**Returns:**

true if resolved successfully, false otherwise.


---

### tryResolveNativePackageOrType

static boolean tryResolveNativePackageOrType([Reference](../model/Reference.md) link)

Tries to resolve the link as a native package or type.

**Parameters:**

`link` - The Reference object to resolve.

**Returns:**

true if resolved successfully, false otherwise.


---

### tryResolveLocalPackageOrType

static boolean tryResolveLocalPackageOrType([Reference](../model/Reference.md) link)

Tries to resolve the link as a local package or type.

**Parameters:**

`link` - The Reference object to resolve.

**Returns:**

true if resolved successfully, false otherwise.


---

### tryResolveLocalModule

static boolean tryResolveLocalModule([Reference](../model/Reference.md) link)

Tries to resolve the link as a local module.

**Parameters:**

`link` - The Reference object to resolve.

**Returns:**

true if resolved successfully, false otherwise.


---

### tryResolveSiblingModule

static boolean tryResolveSiblingModule([Reference](../model/Reference.md) link)

Tries to resolve the link as a sibling module.

**Parameters:**

`link` - The Reference object to resolve.

**Returns:**

true if resolved successfully, false otherwise.


---

### tryResolveSiblingType

static boolean tryResolveSiblingType([Reference](../model/Reference.md) link)

Tries to resolve the link as a sibling type.

**Parameters:**

`link` - The Reference object to resolve.

**Returns:**

true if resolved successfully, false otherwise.


---

### resolveUnsupported

static [Reference](../model/Reference.md) resolveUnsupported([Reference](../model/Reference.md) link)

Checks if the target is unsupported by the `LinkResolver`.

**Returns:**

A `Reference` with `Reference.Kind.UNKNOWN` if unsupported, else `Reference.Kind.NONE`.


---

### resolvePrimitiveOrVoid

static [Reference](../model/Reference.md) resolvePrimitiveOrVoid([Reference](../model/Reference.md) link)

Checks if the target is a primitive type or void.

**Returns:**

A Reference with appropriate kind if primitive or void, else none.


---

### qualifyType

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Returns canonical package and class names for a given type name, ensuring both parts are qualified.

**Parameters:**

`name` - The type name to qualify.

**Returns:**

A String array: packageName, className.


---

### resolveNativePackageOrType

static [Reference](../model/Reference.md) resolveNativePackageOrType([Reference](../model/Reference.md) link)

Resolves a native Java package or type to an external documentation URL.

**Parameters:**

`link` - The link to be resolved

**Returns:**

A Reference with scope NATIVE and kind URL if native, else none.


---

### resolveLocalPackageOrType

static [Reference](../model/Reference.md) resolveLocalPackageOrType([Reference](../model/Reference.md) link)

Resolves a local package or type within the documented API to a relative link.

**Parameters:**

`link` - the link to resolve

**Returns:**

A Reference with scope LOCAL and kind MODULE or TYPE, or none if unresolved.
//String from, String toPackageName, String toClassName


---

### addClassToReference

static void addClassToReference([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [Reference](../model/Reference.md) link)

Appends the class name to the URI on the Reference and sets kind TYPE if not URL.

**Parameters:**

`className` - The class name to add.

`link` - The Reference object to modify.


---

### resolveLocalModule

static [Reference](../model/Reference.md) resolveLocalModule([Reference](../model/Reference.md) link)

Resolves a module reference by name to a Reference either local or native.

**Parameters:**

`link` - the link to be resolved

**Returns:**

A Reference with scope LOCAL or NATIVE with appropriate URI or none if unresolved.


---

### resolveSiblingModule

static [Reference](../model/Reference.md) resolveSiblingModule([Reference](../model/Reference.md) link)

Attempts to resolve the link as a sibling module relative to the current context.

**Parameters:**

`link` - The Reference object to resolve.

**Returns:**

The Reference with resolution info if successful, or unchanged if not.


---

### resolveSiblingType

static [Reference](../model/Reference.md) resolveSiblingType([Reference](../model/Reference.md) link)

Attempts to resolve the link as a sibling type relative to the current context.

**Parameters:**

`link` - The Reference object to resolve.

**Returns:**

The Reference with resolution info if successful, or unchanged if not.


---

### getModule

static [ModuleNode](../model/ModuleNode.md) getModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)

Returns the ModuleNode for the named module in the current API.

**Parameters:**

`moduleName` - The module's name.

**Returns:**

The ModuleNode if found, else null.


---

### isPackageQualified

static boolean isPackageQualified([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Checks if a package name is qualified (contains a dot).

**Parameters:**

`name` - The package name to check.

**Returns:**

True if the name is qualified, false otherwise.


---

### qualifyClass

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyClass([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)

Qualifies a simple class name to its fully qualified name within the API, if exists.

**Parameters:**

`simpleName` - The class simple name.

**Returns:**

The fully qualified class name or empty string if not found.


---

### qualifyPackage

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyPackage([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)

Qualifies a simple package name to its fully qualified name within the API, if exists.

**Parameters:**

`simpleName` - The package simple name.

**Returns:**

The fully qualified package name or empty string if not found.


---

### relativize

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativize([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)

Produces a relative path from the current package context to a target package.

**Parameters:**

`to` - The target package name.

**Returns:**

A relative filesystem path string.


---

### relativizeWithModules

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativizeWithModules([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)

Produces a relative path considering modules between two packages.
If packages belong to different modules, the relative path includes module directories.

**Parameters:**

`from` - The package name for the source.

`to` - The package name for the target.

**Returns:**

The relative path string.


---

### relativizeWithSiblingModule

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativizeWithSiblingModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toModule)

Computes a relative path from the current package context, considering sibling modules.

**Parameters:**

`from` - The source package name.

`to` - The target package name.

**Returns:**

The relative path string including sibling module base if applicable.


---

### relativize

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativize([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)

Produces a relative path string from one package to another by splitting and comparing components.
Supports flattened directories if set.

**Parameters:**

`from` - The source package name.

`to` - The target package name.

**Returns:**

The relative path string.


---

### flattenDirectory

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) flattenDirectory([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)

Removes prefix directories from a path if flattenedDirectories is set and matches.

**Parameters:**

`path` - The package name or path to flatten.

**Returns:**

The adjusted path or original if no flattening applies.


---

### findCommonIndex

static int findCommonIndex([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] fromParts, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] toParts)

Finds the common prefix index between two string arrays.

**Parameters:**

`fromParts` - Array of strings for source path.

`toParts` - Array of strings for target path.

**Returns:**

The number of common leading segments.


---

### appendParentDirs

static void appendParentDirs([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, int count)

Appends parent directory segments (..) to the relative path string builder.

**Parameters:**

`rel` - The StringBuilder accumulating the path.

`count` - The number of parent directory segments to append.


---

### appendTargetDirs

static void appendTargetDirs([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] toParts, int start)

Appends target directory segments to the relative path string builder starting at index start.

**Parameters:**

`rel` - The StringBuilder accumulating the path.

`toParts` - Array of target path segments.

`start` - The start index for appending segments.


---

### configureSiblingModules

static void configureSiblingModules()

Configures the known sibling modules for link resolution, typically loading their info.
This method updates internal structures to recognize sibling modules for proper linking.


---

### processDirectory

static void processDirectory([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory)




---

### processDirectoryUrl

static void processDirectoryUrl([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [URL](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URL.html)\[] urls)




---

### processClassFile

static void processClassFile([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file, [URLClassLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URLClassLoader.html) classLoader)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### processJarFile

static void processJarFile([JarFile](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/jar/JarFile.html) jarFile)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### addNativeModule

static void addNativeModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)

Adds a native Java module URL for linking purposes using a standard Oracle Javadoc base URL.

**Parameters:**

`moduleName` - The native module name (e.g., java.base).


---

### addNativeModules

static void addNativeModules()

Adds known native modules for Java SE 24 to the resolver.
This populates internal mappings for native module and package documentation URLs.


---

