Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class LinkResolver
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.LinkResolver<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __LinkResolver__</span>


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                                          | Field                                   | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                          | [DOT_HTML](#dot_html)                   |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                          | [JAVA_24_URL](#java_24_url)             |             |
| [Api](../model/Api.md)                                                                                                                                                                                                                                                                     | [api](#api)                             |             |
| [Context](../core/Context.md)                                                                                                                                                                                                                                                              | [ctx](#ctx)                             |             |
| private [StandardModeller](../modelling/StandardModeller.md)                                                                                                                                                                                                                               | [modeller](#modeller)                   |             |
| private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html)> | [namedModules](#namedmodules)           |             |
| private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [packagesToModules](#packagestomodules) |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                       | [primitives](#primitives)               |             |
| private [ModulePath](ModulePath.md)                                                                                                                                                                                                                                                        | [siblingModulePath](#siblingmodulepath) |             |



## Constructor Summary

| Constructor                                                             | Description |
|-------------------------------------------------------------------------|-------------|
| LinkResolver([Api](../model/Api.md) a, [Context](../core/Context.md) c) |             |



## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                             |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| public void                                                                                          | [resolveTypeRererence](#resolvetyperererence)([TypeReference](../model/TypeReference.md) typeRef)                                                                                                                                                                                                                                                                      | Resolve links to types referenced by a [TypeReference](../model/TypeReference.md).      |
| public void                                                                                          | [resolveLink](#resolvelink)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                             |                                                                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                                                                                                                                                                                       | Removes parentheses and what they contain from an expression                            |
| public boolean                                                                                       | [resolve](#resolve)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                     |                                                                                         |
| [Link](../model/Link.md)                                                                             | [resolveUnsupported](#resolveunsupported)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                               | Checks if the target is unsupported by LinkResolver.                                    |
| boolean                                                                                              | [resolvePrimitiveOrVoid](#resolveprimitiveorvoid)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                       | Checks if the target is a primitive type or void.                                       |
| boolean                                                                                              | [resolveJreModule](#resolvejremodule)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                   |                                                                                         |
| boolean                                                                                              | [resolveLocalModule](#resolvelocalmodule)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                               |                                                                                         |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [moduleName](#modulename)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                               |                                                                                         |
| boolean                                                                                              | [resolveJrePackageOrType](#resolvejrepackageortype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                     | Resolves a standard Java package or type to an external documentation URL.              |
| boolean                                                                                              | [resolveLocalPackageOrType](#resolvelocalpackageortype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                 |                                                                                         |
| private void                                                                                         | [resolvedModule](#resolvedmodule)([Link](../model/Link.md) link, [Link.Scope](../model/Link.Scope.md) scope)                                                                                                                                                                                                                                                           |                                                                                         |
| private void                                                                                         | [resolvedPackage](#resolvedpackage)([Link](../model/Link.md) link, [Link.Scope](../model/Link.Scope.md) scope)                                                                                                                                                                                                                                                         |                                                                                         |
| private void                                                                                         | [resolvedType](#resolvedtype)([Link](../model/Link.md) link, [TypeNode](../model/TypeNode.md) type, [Link.Scope](../model/Link.Scope.md) scope)                                                                                                                                                                                                                        |                                                                                         |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [relativizeWithModules](#relativizewithmodules)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to)                                                                                                                    | Produces a relative path considering modules between two packages.                      |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [relativizeWithSiblingModule](#relativizewithsiblingmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toModule) | Computes a relative path from the current package context, considering sibling modules. |
| public void                                                                                          | [loadPackages](#loadpackages)()                                                                                                                                                                                                                                                                                                                                        |                                                                                         |



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

<span style="font-family: monospace; font-size: 80%;">[Api](../model/Api.md) __api__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">[Context](../core/Context.md) __ctx__</span>




---

### modeller

<span style="font-family: monospace; font-size: 80%;">private [StandardModeller](../modelling/StandardModeller.md) __modeller__</span>




---

### namedModules

<span style="font-family: monospace; font-size: 80%;">private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html)> __namedModules__</span>




---

### packagesToModules

<span style="font-family: monospace; font-size: 80%;">private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __packagesToModules__</span>




---

### primitives

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __primitives__</span>




---

### siblingModulePath

<span style="font-family: monospace; font-size: 80%;">private [ModulePath](ModulePath.md) __siblingModulePath__</span>




---


## Method Details

### resolveTypeRererence

<span style="font-family: monospace; font-size: 80%;">public void __resolveTypeRererence__([TypeReference](../model/TypeReference.md) typeRef)</span>

Resolve links to types referenced by a [TypeReference](../model/TypeReference.md).


---

### resolveLink

<span style="font-family: monospace; font-size: 80%;">public void __resolveLink__([Link](../model/Link.md) link)</span>




---

### removeParentheses

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeParentheses__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)</span>

Removes parentheses and what they contain from an expression

**Returns:**

The expression with the parentheses removed


---

### resolve

<span style="font-family: monospace; font-size: 80%;">public boolean __resolve__([Link](../model/Link.md) link)</span>




---

### resolveUnsupported

<span style="font-family: monospace; font-size: 80%;">[Link](../model/Link.md) __resolveUnsupported__([Link](../model/Link.md) link)</span>

Checks if the target is unsupported by LinkResolver.

**Returns:**

A [Link](../model/Link.md) with `Reference.Kind.UNKNOWN` if unsupported, else `Reference.Kind.NONE`.


---

### resolvePrimitiveOrVoid

<span style="font-family: monospace; font-size: 80%;">boolean __resolvePrimitiveOrVoid__([Link](../model/Link.md) link)</span>

Checks if the target is a primitive type or void.

**Returns:**

True if the reference resolved to primitive or void, else false.


---

### resolveJreModule

<span style="font-family: monospace; font-size: 80%;">boolean __resolveJreModule__([Link](../model/Link.md) link)</span>




---

### resolveLocalModule

<span style="font-family: monospace; font-size: 80%;">boolean __resolveLocalModule__([Link](../model/Link.md) link)</span>




---

### moduleName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __moduleName__([Link](../model/Link.md) link)</span>




---

### resolveJrePackageOrType

<span style="font-family: monospace; font-size: 80%;">boolean __resolveJrePackageOrType__([Link](../model/Link.md) link)</span>

Resolves a standard Java package or type to an external documentation URL.

**Returns:**

True if the reference resolved to a standard package or type.


---

### resolveLocalPackageOrType

<span style="font-family: monospace; font-size: 80%;">boolean __resolveLocalPackageOrType__([Link](../model/Link.md) link)</span>




---

### resolvedModule

<span style="font-family: monospace; font-size: 80%;">private void __resolvedModule__([Link](../model/Link.md) link, [Link.Scope](../model/Link.Scope.md) scope)</span>




---

### resolvedPackage

<span style="font-family: monospace; font-size: 80%;">private void __resolvedPackage__([Link](../model/Link.md) link, [Link.Scope](../model/Link.Scope.md) scope)</span>




---

### resolvedType

<span style="font-family: monospace; font-size: 80%;">private void __resolvedType__([Link](../model/Link.md) link, [TypeNode](../model/TypeNode.md) type, [Link.Scope](../model/Link.Scope.md) scope)</span>




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

### loadPackages

<span style="font-family: monospace; font-size: 80%;">public void __loadPackages__()</span>




---

