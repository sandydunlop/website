Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class LinkResolver
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.LinkResolver<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __LinkResolver__</span>


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                                          | Field                                         | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                          | [DOT_HTML](#dot_html)                         |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                          | [JAVA_24_URL](#java_24_url)                   |             |
| [](../model/Api.md)                                                                                                                                                                                                                                                                        | [api](#api)                                   |             |
| [](../core/Context.md)                                                                                                                                                                                                                                                                     | [ctx](#ctx)                                   |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/ExternalLink.md)>                                                                                                                                                                     | [externalLinks](#externallinks)               |             |
| private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html)> | [jreNamedModules](#jrenamedmodules)           |             |
| private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [jrePackagesToModules](#jrepackagestomodules) |             |
| private [](../modelling/StandardModeller.md)                                                                                                                                                                                                                                               | [modeller](#modeller)                         |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                       | [primitives](#primitives)                     |             |
| private [](ModulePath.md)                                                                                                                                                                                                                                                                  | [siblingModulePath](#siblingmodulepath)       |             |



## Constructor Summary

| Constructor                                                   | Description |
|---------------------------------------------------------------|-------------|
| LinkResolver([](../model/Api.md) a, [](../core/Context.md) c) |             |



## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                             |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| public void                                                                                          | [resolveTypeRererence](#resolvetyperererence)([](../model/TypeReference.md) typeRef)                                                                                                                                                                                                                                                                                   | Resolve links to types referenced by a [](../model/TypeReference.md).                   |
| public void                                                                                          | [resolveLink](#resolvelink)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                 |                                                                                         |
| public boolean                                                                                       | [resolve](#resolve)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                         |                                                                                         |
| boolean                                                                                              | [preResolve](#preresolve)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                   |                                                                                         |
| [](../model/Link.md)                                                                                 | [resolveUnsupported](#resolveunsupported)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                                   | Checks if the target is unsupported by LinkResolver.                                    |
| boolean                                                                                              | [resolvePrimitiveOrVoid](#resolveprimitiveorvoid)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                           | Checks if the target is a primitive type or void.                                       |
| boolean                                                                                              | [resolveJreModule](#resolvejremodule)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                                       |                                                                                         |
| boolean                                                                                              | [resolveLocalModule](#resolvelocalmodule)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                                   |                                                                                         |
| boolean                                                                                              | [resolveExternalModule](#resolveexternalmodule)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                             |                                                                                         |
| boolean                                                                                              | [resolveJrePackageOrType](#resolvejrepackageortype)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                         | Resolves a standard Java package or type to an external documentation URL.              |
| boolean                                                                                              | [resolveLocalPackageOrType](#resolvelocalpackageortype)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                     |                                                                                         |
| boolean                                                                                              | [resolveExternalPackageOrType](#resolveexternalpackageortype)([](../model/Link.md) link)                                                                                                                                                                                                                                                                               |                                                                                         |
| private void                                                                                         | [resolvedModule](#resolvedmodule)([](../model/Link.md) link, [](../model/Link.Scope.md) scope)                                                                                                                                                                                                                                                                         |                                                                                         |
| private void                                                                                         | [resolvedPackage](#resolvedpackage)([](../model/Link.md) link, [](../model/Link.Scope.md) scope)                                                                                                                                                                                                                                                                       |                                                                                         |
| private void                                                                                         | [resolvedType](#resolvedtype)([](../model/Link.md) link, [](../model/TypeNode.md) type, [](../model/Link.Scope.md) scope)                                                                                                                                                                                                                                              |                                                                                         |
| private void                                                                                         | [resolvedExternal](#resolvedexternal)([](../model/Link.md) link, [](../model/ExternalLink.md) extLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)                                                |                                                                                         |
| private void                                                                                         | [setModule](#setmodule)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                     |                                                                                         |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [moduleName](#modulename)([](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                   |                                                                                         |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativizeWithModules](#relativizewithmodules)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                    | Produces a relative path considering modules between two packages.                      |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [relativizeWithSiblingModule](#relativizewithsiblingmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toModule) | Computes a relative path from the current package context, considering sibling modules. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                                                                                                                                                                                       | Removes parentheses and what they contain from an expression                            |
| void                                                                                                 | [loadPackages](#loadpackages)()                                                                                                                                                                                                                                                                                                                                        |                                                                                         |
| void                                                                                                 | [loadExternalLinks](#loadexternallinks)()                                                                                                                                                                                                                                                                                                                              |                                                                                         |



## Field Details

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

<span style="font-family: monospace; font-size: 80%;">[](../model/Api.md) __api__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">[](../core/Context.md) __ctx__</span>




---

### externalLinks

<span style="font-family: monospace; font-size: 80%;">[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/ExternalLink.md)> __externalLinks__</span>




---

### jreNamedModules

<span style="font-family: monospace; font-size: 80%;">private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html)> __jreNamedModules__</span>




---

### jrePackagesToModules

<span style="font-family: monospace; font-size: 80%;">private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __jrePackagesToModules__</span>




---

### modeller

<span style="font-family: monospace; font-size: 80%;">private [](../modelling/StandardModeller.md) __modeller__</span>




---

### primitives

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __primitives__</span>




---

### siblingModulePath

<span style="font-family: monospace; font-size: 80%;">private [](ModulePath.md) __siblingModulePath__</span>




---


## Method Details

### resolveTypeRererence

<span style="font-family: monospace; font-size: 80%;">public void __resolveTypeRererence__([](../model/TypeReference.md) typeRef)</span>

Resolve links to types referenced by a [](../model/TypeReference.md).


---

### resolveLink

<span style="font-family: monospace; font-size: 80%;">public void __resolveLink__([](../model/Link.md) link)</span>




---

### resolve

<span style="font-family: monospace; font-size: 80%;">public boolean __resolve__([](../model/Link.md) link)</span>




---

### preResolve

<span style="font-family: monospace; font-size: 80%;">boolean __preResolve__([](../model/Link.md) link)</span>




---

### resolveUnsupported

<span style="font-family: monospace; font-size: 80%;">[](../model/Link.md) __resolveUnsupported__([](../model/Link.md) link)</span>

Checks if the target is unsupported by LinkResolver.

**Returns:**

A [](../model/Link.md) with `Link.Kind.UNKNOWN` if unsupported, else `Link.Kind.NONE`.


---

### resolvePrimitiveOrVoid

<span style="font-family: monospace; font-size: 80%;">boolean __resolvePrimitiveOrVoid__([](../model/Link.md) link)</span>

Checks if the target is a primitive type or void.

**Returns:**

True if the reference resolved to primitive or void, else false.


---

### resolveJreModule

<span style="font-family: monospace; font-size: 80%;">boolean __resolveJreModule__([](../model/Link.md) link)</span>




---

### resolveLocalModule

<span style="font-family: monospace; font-size: 80%;">boolean __resolveLocalModule__([](../model/Link.md) link)</span>




---

### resolveExternalModule

<span style="font-family: monospace; font-size: 80%;">boolean __resolveExternalModule__([](../model/Link.md) link)</span>




---

### resolveJrePackageOrType

<span style="font-family: monospace; font-size: 80%;">boolean __resolveJrePackageOrType__([](../model/Link.md) link)</span>

Resolves a standard Java package or type to an external documentation URL.

**Returns:**

True if the reference resolved to a standard package or type.


---

### resolveLocalPackageOrType

<span style="font-family: monospace; font-size: 80%;">boolean __resolveLocalPackageOrType__([](../model/Link.md) link)</span>




---

### resolveExternalPackageOrType

<span style="font-family: monospace; font-size: 80%;">boolean __resolveExternalPackageOrType__([](../model/Link.md) link)</span>




---

### resolvedModule

<span style="font-family: monospace; font-size: 80%;">private void __resolvedModule__([](../model/Link.md) link, [](../model/Link.Scope.md) scope)</span>




---

### resolvedPackage

<span style="font-family: monospace; font-size: 80%;">private void __resolvedPackage__([](../model/Link.md) link, [](../model/Link.Scope.md) scope)</span>




---

### resolvedType

<span style="font-family: monospace; font-size: 80%;">private void __resolvedType__([](../model/Link.md) link, [](../model/TypeNode.md) type, [](../model/Link.Scope.md) scope)</span>




---

### resolvedExternal

<span style="font-family: monospace; font-size: 80%;">private void __resolvedExternal__([](../model/Link.md) link, [](../model/ExternalLink.md) extLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)</span>




---

### setModule

<span style="font-family: monospace; font-size: 80%;">private void __setModule__([](../model/Link.md) link)</span>




---

### moduleName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __moduleName__([](../model/Link.md) link)</span>




---

### relativizeWithModules

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __relativizeWithModules__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)</span>

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

### removeParentheses

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeParentheses__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)</span>

Removes parentheses and what they contain from an expression

**Returns:**

The expression with the parentheses removed


---

### loadPackages

<span style="font-family: monospace; font-size: 80%;">void __loadPackages__()</span>




---

### loadExternalLinks

<span style="font-family: monospace; font-size: 80%;">void __loadExternalLinks__()</span>




---

