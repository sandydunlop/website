Package [io.github.sandydunlop.markista.util](index.md)

# Class LinkResolver
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.LinkResolver<br/>
<br/>

----

`LinkResolver` calculates the paths for Markdown documents 
to link between different packages and to URLs of external
packages and their contents.


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                                                               | Field                                         | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                               | [DOT_HTML](#dot_html)                         |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                               | [JAVA_24_URL](#java_24_url)                   |             |
| private static final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt;                                                                                               | [primitives](#primitives)                     |             |
| private static final [ModuleLayer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/ModuleLayer.html)                                                                                                                                                                                     | [moduleLayer](#modulelayer)                   |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                     | [currentTypeName](#currenttypename)           |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                     | [currentPackageName](#currentpackagename)     |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                     | [currentModuleName](#currentmodulename)       |             |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [nativeModuleNames](#nativemodulenames)       |             |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [nativePackageNames](#nativepackagenames)     |             |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [suffix](#suffix)                             |             |
| private static [Api](../model/Api.md)                                                                                                                                                                                                                                                                           | [api](#api)                                   |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                     | [flattenedDirectories](#flatteneddirectories) |             |

## Constructor Summary

| Constructor    | Description |
|----------------|-------------|
| LinkResolver() |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                         |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| static void                                                                                                 | [init](#init)([Api](../model/Api.md) a)                                                                                                                                                                                                                                                                                                                                          |                                                                                                     |
| static void                                                                                                 | [setFlattenedDirectories](#setflatteneddirectories)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)                                                                                                                                                                                                                             |                                                                                                     |
| static void                                                                                                 | [setCurrentTypeName](#setcurrenttypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                                     |                                                                                                     |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [getCurrentTypeName](#getcurrenttypename)()                                                                                                                                                                                                                                                                                                                                      |                                                                                                     |
| static void                                                                                                 | [setCurrentPackageName](#setcurrentpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                               |                                                                                                     |
| static void                                                                                                 | [setCurrentModuleName](#setcurrentmodulename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                                 |                                                                                                     |
| static void                                                                                                 | [addNativeModuleUrl](#addnativemoduleurl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)                         |                                                                                                     |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)                                                                                                                                                                                                                                               |                                                                                                     |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getClassName](#getclassname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)                                                                                                                                                                                                                                                   |                                                                                                     |
| static [Reference](../model/Reference.md)                                                                   | [resolve](#resolve)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                                                                                                                             |                                                                                                     |
| static [Reference](../model/Reference.md)                                                                   | [resolve](#resolve)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                          |                                                                                                     |
| private static [Reference](../model/Reference.md)                                                           | [resolveUnsupported](#resolveunsupported)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                                                                                                                                                                                                                                   | Checks if the target is unsupported by the `LinkResolver`.                                          |
| private static [Reference](../model/Reference.md)                                                           | [resolvePrimitiveOrVoid](#resolveprimitiveorvoid)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                                                                                                                                                                                                                           | Checks if the target is a primitive type or is void or the Void type.                               |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifyType](#qualifytype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                                                   | Gets the canonical package name and class name of a class that is part of the API being documented. |
| static [Reference](../model/Reference.md)                                                                   | [resolveNativePackageOrType](#resolvenativepackageortype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toPackageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toClassName)                                                                                                  | Checks if the target is native package.                                                             |
| static [Reference](../model/Reference.md)                                                                   | [resolveLocalPackageOrType](#resolvelocalpackageortype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toPackageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toClassName) |                                                                                                     |
| private static void                                                                                         | [addClassToReference](#addclasstoreference)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [Reference](../model/Reference.md) link)                                                                                                                                                                                     |                                                                                                     |
| static [Reference](../model/Reference.md)                                                                   | [resolveModule](#resolvemodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)                                                                                                                                          | Gets a `Reference` for a package with `name` being the canonical name of the module.                |
| static [ModuleNode](../model/ModuleNode.md)                                                                 | [getModule](#getmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                                                 | Gets a module node by its name                                                                      |
| static boolean                                                                                              | [isPackageQualified](#ispackagequalified)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                                                                                                                     | Checks if a package name is qualified (canonical) or unqualified.                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifyClass](#qualifyclass)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)                                                                                                                                                                                                                                           | Gets the canonical name of a class defined in the API being documented.                             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifyPackage](#qualifypackage)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)                                                                                                                                                                                                                                       | Returns the canonical name of a package defined in the API being documented.                        |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                                                                                                                       |                                                                                                     |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativizeWithModules](#relativizewithmodules)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                              |                                                                                                     |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativize](#relativize)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                                                    |                                                                                                     |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [flattenDirectory](#flattendirectory)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)                                                                                                                                                                                                                                         |                                                                                                     |
| private static int                                                                                          | [findCommonIndex](#findcommonindex)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] fromParts, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] toParts)                                                                                                                          |                                                                                                     |
| private static void                                                                                         | [appendParentDirs](#appendparentdirs)([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, int count)                                                                                                                                                                                                                 |                                                                                                     |
| private static void                                                                                         | [appendTargetDirs](#appendtargetdirs)([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] toParts, int start)                                                                                                        |                                                                                                     |
| private static void                                                                                         | [addNativeModule](#addnativemodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                                                                                                                                                                     |                                                                                                     |
| static void                                                                                                 | [addNativeModules](#addnativemodules)()                                                                                                                                                                                                                                                                                                                                          |                                                                                                     |

## Field Details

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

### currentTypeName




---

### currentPackageName




---

### currentModuleName




---

### nativeModuleNames




---

### nativePackageNames




---

### suffix




---

### api




---

### flattenedDirectories




---


## Method Details

### init

static void init([Api](../model/Api.md) a)




---

### setFlattenedDirectories

static void setFlattenedDirectories([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) sd)




---

### setCurrentTypeName

static void setCurrentTypeName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### getCurrentTypeName

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getCurrentTypeName()




---

### setCurrentPackageName

static void setCurrentPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### setCurrentModuleName

static void setCurrentModuleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### addNativeModuleUrl

static void addNativeModuleUrl([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseUrl, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)




---

### getPackageName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)




---

### getClassName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getClassName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) id)




---

### resolve

static [Reference](../model/Reference.md) resolve([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)




---

### resolve

static [Reference](../model/Reference.md) resolve([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)




---

### resolveUnsupported

private static [Reference](../model/Reference.md) resolveUnsupported([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)

Checks if the target is unsupported by the `LinkResolver`.

**Parameters:**

`target` - The target to be resolved

**Returns:**

A `Reference` with `Reference.Kind.UNSUPPORTED` if the target
        is unsupported, otherwise with `Reference.Kind.NONE`.


---

### resolvePrimitiveOrVoid

private static [Reference](../model/Reference.md) resolvePrimitiveOrVoid([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)

Checks if the target is a primitive type or is void or the Void type.

**Parameters:**

`target` - The target to be resolved

**Returns:**

A `Reference` with `Reference.Kind.UNSUPPORTED` if the target
        is a primitive type or is void or the Void type, otherwise
        `Reference.Kind.NONE`.


---

### qualifyType

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Gets the canonical package name and class name of a class
that is part of the API being documented.

**Parameters:**

`name` - The name of a class

**Returns:**

An array containing the canonical name of the 
        class's package, and the class name.


---

### resolveNativePackageOrType

static [Reference](../model/Reference.md) resolveNativePackageOrType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toPackageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toClassName)

Checks if the target is native package. If it is a native package,
the `Reference` bring returned will have `Reference.Type.URL` and
its `uri` will be the URL of the Oracle Javadoc for the package.

**Parameters:**

`toPackageName` - The package name of the target to be resolved

`toClassName` - The class name of the target to be resolved

**Returns:**

A `Reference` with `Reference.Scope.NATIVE` if the target
        is a native Java type, otherwise `Reference.Scope.NONE`.


---

### resolveLocalPackageOrType

static [Reference](../model/Reference.md) resolveLocalPackageOrType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toPackageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toClassName)




---

### addClassToReference

private static void addClassToReference([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [Reference](../model/Reference.md) link)




---

### resolveModule

static [Reference](../model/Reference.md) resolveModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) target)

Gets a `Reference` for a package with `name` being the canonical
name of the module.

For packages defined in the API being documented, this will have `scope`
`Reference.Scope.LOCAL` and `kind` `Reference.Kind.MODULE`, with `uri`
being the relative path between the _from_ package and the _target_ package.

For native Java modules, this will have `scope` `Reference.Scope.NATIVE`
and `kind` `Reference.Kind.URL`, with its `uri` being set to the URL 
of the Oracle Javadoc for the package.

**Parameters:**

`from` - The package that's currently being documented

`target` - The name of the module tha is being linked to

**Returns:**

A [Reference](../model/Reference.md) object containing the link. If the link cannot
        be resolved, a `Reference` with `kind` set to `Reference.Kind.NONE`
        is returned.


---

### getModule

static [ModuleNode](../model/ModuleNode.md) getModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)

Gets a module node by its name

**Parameters:**

`moduleName` - The module's name (eg java.base)

**Returns:**

a `ModuleNode` for the requested module


---

### isPackageQualified

static boolean isPackageQualified([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Checks if a package name is qualified (canonical) or unqualified.

**Parameters:**

`name` - A package name

**Returns:**

True if the name is a qualified name, false otherwise.


---

### qualifyClass

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyClass([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)

Gets the canonical name of a class defined in the API being documented.

**Parameters:**

`simpleName` - The unqualified name of the class.

**Returns:**

The canonical name of the class, or an empty string
        if the class wasn't found in the API model.


---

### qualifyPackage

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifyPackage([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName)

Returns the canonical name of a package defined in the API being documented.

**Parameters:**

`simpleName` - The unqualified name of the package.

**Returns:**

The canonical name of the package, or an empty string
        if the package wasn't found in the API model.


---

### relativize

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativize([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)




---

### relativizeWithModules

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativizeWithModules([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)




---

### relativize

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) relativize([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)




---

### flattenDirectory

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) flattenDirectory([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)




---

### findCommonIndex

private static int findCommonIndex([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] fromParts, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] toParts)




---

### appendParentDirs

private static void appendParentDirs([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, int count)




---

### appendTargetDirs

private static void appendTargetDirs([StringBuilder](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/StringBuilder.html) rel, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] toParts, int start)




---

### addNativeModule

private static void addNativeModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)




---

### addNativeModules

static void addNativeModules()




---

