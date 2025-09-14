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
| [Api](../model/Api.md)                                                                                                                                                                                                                                                                     | [api](#api)                                   |             |
| [Context](../core/Context.md)                                                                                                                                                                                                                                                              | [ctx](#ctx)                                   |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ExternalLink](../model/ExternalLink.md)>                                                                                                                                                         | [externalLinks](#externallinks)               |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                               | [flattenedDirectories](#flatteneddirectories) |             |
| private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html)> | [jreNamedModules](#jrenamedmodules)           |             |
| private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [jrePackagesToModules](#jrepackagestomodules) |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)>                                                                                       | [primitives](#primitives)                     |             |
| private [ModulePath](ModulePath.md)                                                                                                                                                                                                                                                        | [siblingModulePath](#siblingmodulepath)       |             |



## Constructor Summary

| Constructor                                                             | Description |
|-------------------------------------------------------------------------|-------------|
| LinkResolver([Api](../model/Api.md) a, [Context](../core/Context.md) c) |             |



## Method Summary

| Modifier and Type                                                                                                                                                                                                            | Method                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                          | [resolveRoot](#resolveroot)()                                                                                                                                                                                                                                                                                                                                          |                                                                                         |
| public void                                                                                                                                                                                                                  | [resolveVariableType](#resolvevariabletype)([VariableType](../model/VariableType.md) typeRef)                                                                                                                                                                                                                                                                          | Resolve links to types referenced by a [VariableType](../model/VariableType.md).        |
| public boolean                                                                                                                                                                                                               | [resolveLink](#resolvelink)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                             |                                                                                         |
| boolean                                                                                                                                                                                                                      | [resolvePrimitiveOrVoid](#resolveprimitiveorvoid)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                       | Checks if the target is a primitive type or void.                                       |
| private void                                                                                                                                                                                                                 | [resolvedModule](#resolvedmodule)([Link](../model/Link.md) link, [Scope](../model/Link.Scope.md) scope)                                                                                                                                                                                                                                                                |                                                                                         |
| private void                                                                                                                                                                                                                 | [resolvedPackage](#resolvedpackage)([Link](../model/Link.md) link, [Scope](../model/Link.Scope.md) scope)                                                                                                                                                                                                                                                              |                                                                                         |
| private void                                                                                                                                                                                                                 | [resolvedType](#resolvedtype)([Link](../model/Link.md) link, [Scope](../model/Link.Scope.md) scope)                                                                                                                                                                                                                                                                    |                                                                                         |
| private void                                                                                                                                                                                                                 | [resolvedExternal](#resolvedexternal)([Link](../model/Link.md) link, [ExternalLink](../model/ExternalLink.md) extLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)                                |                                                                                         |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                          | [relativizeWithSiblingModule](#relativizewithsiblingmodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toModule) | Computes a relative path from the current package context, considering sibling modules. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                          | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                                                                                                                                                                                       | Removes parentheses and what they contain from an expression                            |
| void                                                                                                                                                                                                                         | [loadPackages](#loadpackages)()                                                                                                                                                                                                                                                                                                                                        |                                                                                         |
| void                                                                                                                                                                                                                         | [loadExternalLinks](#loadexternallinks)()                                                                                                                                                                                                                                                                                                                              |                                                                                         |
| public boolean                                                                                                                                                                                                               | [resolve](#resolve)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                     |                                                                                         |
| private boolean                                                                                                                                                                                                              | [resolvePackageOrType](#resolvepackageortype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                           |                                                                                         |
| private boolean                                                                                                                                                                                                              | [resolveModule](#resolvemodule)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                         |                                                                                         |
| boolean                                                                                                                                                                                                                      | [tryResolveJreModule](#tryresolvejremodule)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                             |                                                                                         |
| boolean                                                                                                                                                                                                                      | [tryResolveLocalModule](#tryresolvelocalmodule)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                         |                                                                                         |
| boolean                                                                                                                                                                                                                      | [tryResolveExternalModule](#tryresolveexternalmodule)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                   |                                                                                         |
| boolean                                                                                                                                                                                                                      | [tryResolveJreType](#tryresolvejretype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                 |                                                                                         |
| boolean                                                                                                                                                                                                                      | [tryResolveJrePackage](#tryresolvejrepackage)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                           |                                                                                         |
| boolean                                                                                                                                                                                                                      | [tryResolveLocalType](#tryresolvelocaltype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                             |                                                                                         |
| boolean                                                                                                                                                                                                                      | [tryResolveLocalPackage](#tryresolvelocalpackage)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                       |                                                                                         |
| boolean                                                                                                                                                                                                                      | [tryResolveExternalPackageOrType](#tryresolveexternalpackageortype)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                     |                                                                                         |
| [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html)                                                                                                                                        | [relativize](#relativize)([Name](../model/Name.md) from, [Name](../model/Name.md) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) module)                                                                                                                                                                             |                                                                                         |
| [Name](../model/Name.md)                                                                                                                                                                                                     | [flattenDirectory](#flattendirectory)([Name](../model/Name.md) path)                                                                                                                                                                                                                                                                                                   | Removes prefix directories from a path if flattenedDirectories is set and matches.      |
| boolean                                                                                                                                                                                                                      | [qualify](#qualify)([Reference](../model/Reference.md) ref)                                                                                                                                                                                                                                                                                                            |                                                                                         |
| private boolean                                                                                                                                                                                                              | [qualifyLocalReference](#qualifylocalreference)([Reference](../model/Reference.md) ref)                                                                                                                                                                                                                                                                                |                                                                                         |
| private boolean                                                                                                                                                                                                              | [qualifyJreReference](#qualifyjrereference)([Reference](../model/Reference.md) ref)                                                                                                                                                                                                                                                                                    |                                                                                         |
| private boolean                                                                                                                                                                                                              | [qualifyExternalReference](#qualifyexternalreference)([Reference](../model/Reference.md) ref)                                                                                                                                                                                                                                                                          |                                                                                         |
| private [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [findExternalPackage](#findexternalpackage)([Name](../model/Name.md) targetName)                                                                                                                                                                                                                                                                                       |                                                                                         |



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

### externalLinks

<span style="font-family: monospace; font-size: 80%;">[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ExternalLink](../model/ExternalLink.md)> __externalLinks__</span>




---

### flattenedDirectories

<span style="font-family: monospace; font-size: 80%;">[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __flattenedDirectories__</span>




---

### jreNamedModules

<span style="font-family: monospace; font-size: 80%;">private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html)> __jreNamedModules__</span>




---

### jrePackagesToModules

<span style="font-family: monospace; font-size: 80%;">private [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __jrePackagesToModules__</span>




---

### primitives

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __primitives__</span>




---

### siblingModulePath

<span style="font-family: monospace; font-size: 80%;">private [ModulePath](ModulePath.md) __siblingModulePath__</span>




---


## Method Details

### resolveRoot

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __resolveRoot__()</span>




---

### resolveVariableType

<span style="font-family: monospace; font-size: 80%;">public void __resolveVariableType__([VariableType](../model/VariableType.md) typeRef)</span>

Resolve links to types referenced by a [VariableType](../model/VariableType.md).

**Parameters:**

`typeRef` - a VariableType object describing the links


---

### resolveLink

<span style="font-family: monospace; font-size: 80%;">public boolean __resolveLink__([Link](../model/Link.md) link)</span>




---

### resolvePrimitiveOrVoid

<span style="font-family: monospace; font-size: 80%;">boolean __resolvePrimitiveOrVoid__([Link](../model/Link.md) link)</span>

Checks if the target is a primitive type or void.

**Parameters:**

`link` - The target to be resolved.

**Returns:**

True if the reference resolved to primitive or void, else false.


---

### resolvedModule

<span style="font-family: monospace; font-size: 80%;">private void __resolvedModule__([Link](../model/Link.md) link, [Scope](../model/Link.Scope.md) scope)</span>




---

### resolvedPackage

<span style="font-family: monospace; font-size: 80%;">private void __resolvedPackage__([Link](../model/Link.md) link, [Scope](../model/Link.Scope.md) scope)</span>




---

### resolvedType

<span style="font-family: monospace; font-size: 80%;">private void __resolvedType__([Link](../model/Link.md) link, [Scope](../model/Link.Scope.md) scope)</span>




---

### resolvedExternal

<span style="font-family: monospace; font-size: 80%;">private void __resolvedExternal__([Link](../model/Link.md) link, [ExternalLink](../model/ExternalLink.md) extLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)</span>




---

### relativizeWithSiblingModule

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __relativizeWithSiblingModule__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) from, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toModule)</span>

Computes a relative path from the current package context, considering sibling modules.

**Parameters:**

`from` - The source package name.

`to` - The target package name.

**Returns:**

The relative path string including sibling module base if applicable.


---

### removeParentheses

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeParentheses__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)</span>

Removes parentheses and what they contain from an expression

**Parameters:**

`expression` - An expression such as `classname.method(parameter)`.

**Returns:**

The expression with the parentheses removed


---

### loadPackages

<span style="font-family: monospace; font-size: 80%;">void __loadPackages__()</span>




---

### loadExternalLinks

<span style="font-family: monospace; font-size: 80%;">void __loadExternalLinks__()</span>




---

### resolve

<span style="font-family: monospace; font-size: 80%;">public boolean __resolve__([Link](../model/Link.md) link)</span>




---

### resolvePackageOrType

<span style="font-family: monospace; font-size: 80%;">private boolean __resolvePackageOrType__([Link](../model/Link.md) link)</span>




---

### resolveModule

<span style="font-family: monospace; font-size: 80%;">private boolean __resolveModule__([Link](../model/Link.md) link)</span>




---

### tryResolveJreModule

<span style="font-family: monospace; font-size: 80%;">boolean __tryResolveJreModule__([Link](../model/Link.md) link)</span>




---

### tryResolveLocalModule

<span style="font-family: monospace; font-size: 80%;">boolean __tryResolveLocalModule__([Link](../model/Link.md) link)</span>




---

### tryResolveExternalModule

<span style="font-family: monospace; font-size: 80%;">boolean __tryResolveExternalModule__([Link](../model/Link.md) link)</span>




---

### tryResolveJreType

<span style="font-family: monospace; font-size: 80%;">boolean __tryResolveJreType__([Link](../model/Link.md) link)</span>




---

### tryResolveJrePackage

<span style="font-family: monospace; font-size: 80%;">boolean __tryResolveJrePackage__([Link](../model/Link.md) link)</span>




---

### tryResolveLocalType

<span style="font-family: monospace; font-size: 80%;">boolean __tryResolveLocalType__([Link](../model/Link.md) link)</span>




---

### tryResolveLocalPackage

<span style="font-family: monospace; font-size: 80%;">boolean __tryResolveLocalPackage__([Link](../model/Link.md) link)</span>




---

### tryResolveExternalPackageOrType

<span style="font-family: monospace; font-size: 80%;">boolean __tryResolveExternalPackageOrType__([Link](../model/Link.md) link)</span>




---

### relativize

<span style="font-family: monospace; font-size: 80%;">[URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) __relativize__([Name](../model/Name.md) from, [Name](../model/Name.md) to, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) module)</span>




---

### flattenDirectory

<span style="font-family: monospace; font-size: 80%;">[Name](../model/Name.md) __flattenDirectory__([Name](../model/Name.md) path)</span>

Removes prefix directories from a path if flattenedDirectories is set and matches.

**Parameters:**

`path` - The package name or path to flatten.

**Returns:**

The adjusted path or original if no flattening applies.


---

### qualify

<span style="font-family: monospace; font-size: 80%;">boolean __qualify__([Reference](../model/Reference.md) ref)</span>




---

### qualifyLocalReference

<span style="font-family: monospace; font-size: 80%;">private boolean __qualifyLocalReference__([Reference](../model/Reference.md) ref)</span>




---

### qualifyJreReference

<span style="font-family: monospace; font-size: 80%;">private boolean __qualifyJreReference__([Reference](../model/Reference.md) ref)</span>




---

### qualifyExternalReference

<span style="font-family: monospace; font-size: 80%;">private boolean __qualifyExternalReference__([Reference](../model/Reference.md) ref)</span>




---

### findExternalPackage

<span style="font-family: monospace; font-size: 80%;">private [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __findExternalPackage__([Name](../model/Name.md) targetName)</span>




---

