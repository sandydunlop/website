Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class LinkResolver
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.LinkResolver<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __LinkResolver__</span>

`LinkResolver` calculates the paths for Markdown documents
to link between different packages and to URLs of external
packages and their contents.

This class manages resolving references and generating links
for types, packages, modules, and standard Java elements.

It supports resolving primitives, void, standard Java modules and packages,
and also local API model packages and types.

LinkResolver must be initialized for the current API before use via the [init](#init) method: `init(Api)`.
It provides multiple resolve methods for building appropriate links.

The class supports relative path calculation for Markdown output.
It also manages standard Java documentation URLs for modules and packages.


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                                                         | Field                                         | Description                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                         | [DOT_CLASS](#dot_class)                       |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                         | [DOT_HTML](#dot_html)                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                         | [JAVA_24_URL](#java_24_url)                   |                                                                                                                                                                                       |
| private static [Api](../model/Api.md)                                                                                                                                                                                                                                                                     | [api](#api)                                   | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation.                            |
| static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                 | [classToModule](#classtomodule)               |                                                                                                                                                                                       |
| static [Context](../core/Context.md)                                                                                                                                                                                                                                                                      | [ctx](#ctx)                                   | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                               | [flattenedDirectories](#flatteneddirectories) |                                                                                                                                                                                       |
| private static final [ModuleLayer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/ModuleLayer.html)                                                                                                                                                                               | [moduleLayer](#modulelayer)                   |                                                                                                                                                                                       |
| private static final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                               | [primitives](#primitives)                     |                                                                                                                                                                                       |
| static [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                                               | [siblingClassNames](#siblingclassnames)       |                                                                                                                                                                                       |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                       | [siblingModuleName](#siblingmodulename)       |                                                                                                                                                                                       |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                                             | [siblingModules](#siblingmodules)             |                                                                                                                                                                                       |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [standardModuleNames](#standardmodulenames)   |                                                                                                                                                                                       |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [standardPackageNames](#standardpackagenames) |                                                                                                                                                                                       |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [suffix](#suffix)                             |                                                                                                                                                                                       |



## Constructor Summary

| Constructor    | Description                                                  |
|----------------|--------------------------------------------------------------|
| LinkResolver() | The default constructor is private to prevent instantiation. |



## Method Summary

| Modifier and Type                                                                                            | Method                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                         |
|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| public static void                                                                                           | [init](#init)([Api](../model/Api.md) a, [Context](../core/Context.md) c)                                                                                                                                                                                                                                                                                               | Initializes the LinkResolver for the API being documented.                                          |
| public static void                                                                                           | [setFlattenedDirectories](#setflatteneddirectories)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)                                                                                                                                                                                                                   | Sets the string used to adjust flattened directories in relative path calculations.                 |
| public static void                                                                                           | [addStandardModuleUrl](#addstandardmoduleurl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)           | Adds a standard module URL base for linking standard Java modules and their packages.               |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)                                                                                                                                                                                                                                     | Extracts the package name part from an identifier string, assuming lowercase start for package.     |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [getClassName](#getclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)                                                                                                                                                                                                                                         | Extracts the class name part from an identifier string, assuming uppercase start for class.         |
| public static [Link](../model/Link.md)                                                                       | [resolve](#resolve)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                     | Resolves a link reference.                                                                          |
| static [Link](../model/Link.md)                                                                              | [resolveUnsupported](#resolveunsupported)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                               | Checks if the target is unsupported by the `LinkResolver`.                                          |
| static boolean                                                                                               | [resolvePrimitiveOrVoid](#resolveprimitiveorvoid)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                       | Checks if the target is a primitive type or void.                                                   |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] | [qualifyType](#qualifytype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                                         | Returns canonical package and class names for a given type name, ensuring both parts are qualified. |
| static boolean                                                                                               | [resolveStandardPackageOrType](#resolvestandardpackageortype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                           | Resolves a standard Java package or type to an external documentation URL.                          |
| private static boolean                                                                                       | [resolveStandardPackageOrTypeInternal](#resolvestandardpackageortypeinternal)([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toPackageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toClassName)                                     |                                                                                                     |
| static boolean                                                                                               | [resolveLocalPackageOrType](#resolvelocalpackageortype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                 | Resolves a local package or type within the documented API to a relative link.                      |
| static boolean                                                                                               | [resolveLocalPackageOrTypeInternal](#resolvelocalpackageortypeinternal)([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toPackageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toClassName)                                           |                                                                                                     |
| static void                                                                                                  | [addClassToReference](#addclasstoreference)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [Link](../model/Link.md) link)                                                                                                                                                                                     | Appends the class name to the URI on the Reference and sets kind TYPE if not URL.                   |
| static boolean                                                                                               | [resolveLocalModule](#resolvelocalmodule)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                               | Resolves a module reference by name to a Reference either local or standard.                        |
| static boolean                                                                                               | [resolveSiblingModule](#resolvesiblingmodule)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                           | Attempts to resolve the link as a sibling module relative to the current context.                   |
| static boolean                                                                                               | [resolveSiblingType](#resolvesiblingtype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                               | Attempts to resolve the link as a sibling type relative to the current context.                     |
| static [ModuleNode](../model/ModuleNode.md)                                                                  | [getModule](#getmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                                       | Returns the ModuleNode for the named module in the current API.                                     |
| static boolean                                                                                               | [isPackageQualified](#ispackagequalified)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                           | Checks if a package name is qualified (contains a dot).                                             |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [qualifyPackage](#qualifypackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)                                                                                                                                                                                                                             | Qualifies a simple package name to its fully qualified name within the API, if exists.              |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                                                                                                             | Produces a relative path from the current package context to a target package.                      |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)          | [relativizeWithModules](#relativizewithmodules)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                    | Produces a relative path considering modules between two packages.                                  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)          | [relativizeWithSiblingModule](#relativizewithsiblingmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toModule) | Computes a relative path from the current package context, considering sibling modules.             |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                          | Produces a relative path string from one package to another by splitting and comparing components.  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)          | [flattenDirectory](#flattendirectory)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)                                                                                                                                                                                                                               | Removes prefix directories from a path if flattenedDirectories is set and matches.                  |
| static int                                                                                                   | [findCommonIndex](#findcommonindex)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] fromParts, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] toParts)                                                                                                                  | Finds the common prefix index between two string arrays.                                            |
| static void                                                                                                  | [appendParentDirs](#appendparentdirs)([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, int count)                                                                                                                                                                                                       | Appends parent directory segments `..` to the relative path string builder.                         |
| static void                                                                                                  | [appendTargetDirs](#appendtargetdirs)([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] toParts, int start)                                                                                               | Appends target directory segments to the relative path string builder starting at index start.      |
| static void                                                                                                  | [configureSiblingModules](#configuresiblingmodules)()                                                                                                                                                                                                                                                                                                                  | Configures the known sibling modules for link resolution, typically loading their info.             |
| static void                                                                                                  | [processDirectory](#processdirectory)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory)                                                                                                                                                                                                                                |                                                                                                     |
| static void                                                                                                  | [processDirectoryUrl](#processdirectoryurl)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [URL](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URL.html)[] urls)                                                                                                                            |                                                                                                     |
| static void                                                                                                  | [processClassFile](#processclassfile)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file, [URLClassLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URLClassLoader.html) classLoader)          |                                                                                                     |
| static void                                                                                                  | [processJarFile](#processjarfile)([JarFile](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/jar/JarFile.html) jarFile)                                                                                                                                                                                                                          | Processes a JAR file to extract module and package information relevant for sibling module linking. |
| static void                                                                                                  | [addStandardModule](#addstandardmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                       | Adds a standard Java module URL for linking purposes using a standard Oracle Javadoc base URL.      |
| public static void                                                                                           | [addStandardModules](#addstandardmodules)()                                                                                                                                                                                                                                                                                                                            | Adds known standard modules for Java SE 24 to the resolver.                                         |



## Field Details

### DOT_CLASS

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __DOT_CLASS__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### DOT_HTML

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __DOT_HTML__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### JAVA_24_URL

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __JAVA_24_URL__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### api

<span style="font-family: monospace; font-size: 80%;">private static [Api](../model/Api.md) __api__</span>

The Api model representing the entire documented API structure,
including modules, packages, types, and members used for cross-referencing and navigation.


---

### classToModule

<span style="font-family: monospace; font-size: 80%;">static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __classToModule__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">static [Context](../core/Context.md) __ctx__</span>

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---

### flattenedDirectories

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __flattenedDirectories__</span>




---

### moduleLayer

<span style="font-family: monospace; font-size: 80%;">private static final [ModuleLayer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/ModuleLayer.html) __moduleLayer__</span>




---

### primitives

<span style="font-family: monospace; font-size: 80%;">private static final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __primitives__</span>




---

### siblingClassNames

<span style="font-family: monospace; font-size: 80%;">static [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __siblingClassNames__</span>




---

### siblingModuleName

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __siblingModuleName__</span>




---

### siblingModules

<span style="font-family: monospace; font-size: 80%;">static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __siblingModules__</span>




---

### standardModuleNames

<span style="font-family: monospace; font-size: 80%;">private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __standardModuleNames__</span>




---

### standardPackageNames

<span style="font-family: monospace; font-size: 80%;">private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __standardPackageNames__</span>




---

### suffix

<span style="font-family: monospace; font-size: 80%;">private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __suffix__</span>




---


## Method Details

### init

<span style="font-family: monospace; font-size: 80%;">public static void __init__([Api](../model/Api.md) a, [Context](../core/Context.md) c)</span>

Initializes the LinkResolver for the API being documented.


---

### setFlattenedDirectories

<span style="font-family: monospace; font-size: 80%;">public static void __setFlattenedDirectories__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)</span>

Sets the string used to adjust flattened directories in relative path calculations.


---

### addStandardModuleUrl

<span style="font-family: monospace; font-size: 80%;">public static void __addStandardModuleUrl__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)</span>

Adds a standard module URL base for linking standard Java modules and their packages.


---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)</span>

Extracts the package name part from an identifier string, assuming lowercase start for package.

**Returns:**

The package name portion or empty string if not a package.


---

### getClassName

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getClassName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)</span>

Extracts the class name part from an identifier string, assuming uppercase start for class.

**Returns:**

The class name portion or empty string if none found.


---

### resolve

<span style="font-family: monospace; font-size: 80%;">public static [Link](../model/Link.md) __resolve__([Link](../model/Link.md) link)</span>

Resolves a link reference. The supplied `link` parameter must specify the
target of the link: a class, a module, etc. If the link can be resolved,
the details of the type of link are set in the `link` object before it is
returned.

**Returns:**

The `link` with its `uri` field set, or its `kind` field set to `UNKNOWN`
if the link was not able to be resolved.


---

### resolveUnsupported

<span style="font-family: monospace; font-size: 80%;">static [Link](../model/Link.md) __resolveUnsupported__([Link](../model/Link.md) link)</span>

Checks if the target is unsupported by the `LinkResolver`.

**Returns:**

A `Reference` with `Reference.Kind.UNKNOWN` if unsupported, else `Reference.Kind.NONE`.


---

### resolvePrimitiveOrVoid

<span style="font-family: monospace; font-size: 80%;">static boolean __resolvePrimitiveOrVoid__([Link](../model/Link.md) link)</span>

Checks if the target is a primitive type or void.

**Returns:**

True if the reference resolved to primitive or void, else false.


---

### qualifyType

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] __qualifyType__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Returns canonical package and class names for a given type name, ensuring both parts are qualified.

**Returns:**

A String array: {packageName, className}.


---

### resolveStandardPackageOrType

<span style="font-family: monospace; font-size: 80%;">static boolean __resolveStandardPackageOrType__([Link](../model/Link.md) link)</span>

Resolves a standard Java package or type to an external documentation URL.

**Returns:**

True if the reference resolved to a standard package or type.


---

### resolveStandardPackageOrTypeInternal

<span style="font-family: monospace; font-size: 80%;">private static boolean __resolveStandardPackageOrTypeInternal__([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toPackageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toClassName)</span>




---

### resolveLocalPackageOrType

<span style="font-family: monospace; font-size: 80%;">static boolean __resolveLocalPackageOrType__([Link](../model/Link.md) link)</span>

Resolves a local package or type within the documented API to a relative link.

**Returns:**

True if the reference resolved to a local package or type.


---

### resolveLocalPackageOrTypeInternal

<span style="font-family: monospace; font-size: 80%;">static boolean __resolveLocalPackageOrTypeInternal__([Link](../model/Link.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toPackageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toClassName)</span>




---

### addClassToReference

<span style="font-family: monospace; font-size: 80%;">static void __addClassToReference__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [Link](../model/Link.md) link)</span>

Appends the class name to the URI on the Reference and sets kind TYPE if not URL.


---

### resolveLocalModule

<span style="font-family: monospace; font-size: 80%;">static boolean __resolveLocalModule__([Link](../model/Link.md) link)</span>

Resolves a module reference by name to a Reference either local or standard.

**Returns:**

True if the reference resolved to a local module.


---

### resolveSiblingModule

<span style="font-family: monospace; font-size: 80%;">static boolean __resolveSiblingModule__([Link](../model/Link.md) link)</span>

Attempts to resolve the link as a sibling module relative to the current context.

**Returns:**

True if the reference resolved to a sibling module.


---

### resolveSiblingType

<span style="font-family: monospace; font-size: 80%;">static boolean __resolveSiblingType__([Link](../model/Link.md) link)</span>

Attempts to resolve the link as a sibling type relative to the current context.

**Returns:**

True if the reference resolved to a sibling type.


---

### getModule

<span style="font-family: monospace; font-size: 80%;">static [ModuleNode](../model/ModuleNode.md) __getModule__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)</span>

Returns the ModuleNode for the named module in the current API.

**Returns:**

The ModuleNode if found, else null.


---

### isPackageQualified

<span style="font-family: monospace; font-size: 80%;">static boolean __isPackageQualified__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Checks if a package name is qualified (contains a dot).

**Returns:**

True if the name is qualified, false otherwise.


---

### qualifyPackage

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __qualifyPackage__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)</span>

Qualifies a simple package name to its fully qualified name within the API, if exists.

**Returns:**

The fully qualified package name or empty string if not found.


---

### relativize

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __relativize__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)</span>

Produces a relative path from the current package context to a target package.

**Returns:**

A relative filesystem path string.


---

### relativizeWithModules

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __relativizeWithModules__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)</span>

Produces a relative path considering modules between two packages.
If packages belong to different modules, the relative path includes module directories.

**Returns:**

The relative path string.


---

### relativizeWithSiblingModule

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __relativizeWithSiblingModule__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toModule)</span>

Computes a relative path from the current package context, considering sibling modules.

**Returns:**

The relative path string including sibling module base if applicable.


---

### relativize

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __relativize__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)</span>

Produces a relative path string from one package to another by splitting and comparing components.
Supports flattened directories if set.

**Returns:**

The relative path string.


---

### flattenDirectory

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __flattenDirectory__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)</span>

Removes prefix directories from a path if flattenedDirectories is set and matches.

**Returns:**

The adjusted path or original if no flattening applies.


---

### findCommonIndex

<span style="font-family: monospace; font-size: 80%;">static int __findCommonIndex__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] fromParts, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] toParts)</span>

Finds the common prefix index between two string arrays.

**Returns:**

The number of common leading segments.


---

### appendParentDirs

<span style="font-family: monospace; font-size: 80%;">static void __appendParentDirs__([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, int count)</span>

Appends parent directory segments `..` to the relative path string builder.


---

### appendTargetDirs

<span style="font-family: monospace; font-size: 80%;">static void __appendTargetDirs__([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] toParts, int start)</span>

Appends target directory segments to the relative path string builder starting at index start.


---

### configureSiblingModules

<span style="font-family: monospace; font-size: 80%;">static void __configureSiblingModules__()</span>

Configures the known sibling modules for link resolution, typically loading their info.
This method updates internal structures to recognize sibling modules for proper linking.


---

### processDirectory

<span style="font-family: monospace; font-size: 80%;">static void __processDirectory__([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory)</span>




---

### processDirectoryUrl

<span style="font-family: monospace; font-size: 80%;">static void __processDirectoryUrl__([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [URL](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URL.html)[] urls)</span>




---

### processClassFile

<span style="font-family: monospace; font-size: 80%;">static void __processClassFile__([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory, [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) file, [URLClassLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URLClassLoader.html) classLoader)</span>



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### processJarFile

<span style="font-family: monospace; font-size: 80%;">static void __processJarFile__([JarFile](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/jar/JarFile.html) jarFile)</span>

Processes a JAR file to extract module and package information relevant for sibling module linking.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### addStandardModule

<span style="font-family: monospace; font-size: 80%;">static void __addStandardModule__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)</span>

Adds a standard Java module URL for linking purposes using a standard Oracle Javadoc base URL.


---

### addStandardModules

<span style="font-family: monospace; font-size: 80%;">public static void __addStandardModules__()</span>

Adds known standard modules for Java SE 24 to the resolver.
This populates internal mappings for standard module and package documentation URLs.


---

