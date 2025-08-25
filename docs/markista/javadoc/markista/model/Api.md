Package [io.github.sandydunlop.markista.model](index.md)

# Class Api
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.Api<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __Api__<br/>extends [Node](Node.md)
</span>

Represents the API being documented, encapsulating its modules and packages.
Provides methods to add and retrieve modules, packages, and types, as well as sorting them.


## Field Summary

| Modifier and Type                                                                                                                                         | Field                                     | Description                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [appliedAnnotations](#appliedannotations) | List of applied annotations.              |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)>                                   | [links](#links)                           | List of links.                            |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                             | [methods](#methods)                       |                                           |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](ModuleNode.md)>                       | [modules](#modules)                       | List of modules included in the API.      |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                      | [name](#name)                             | The name of the API                       |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)>                     | [packages](#packages)                     | List of packages included in the API.     |
| protected final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                         | [types](#types)                           |                                           |
| private final [ModuleNode](ModuleNode.md)                                                                                                                 | [unnamedModule](#unnamedmodule)           | Represents the unnamed module in the API. |



## Constructor Summary

| Constructor                                                                                            | Description                                           |
|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Api([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs an empty Api instance with the given name. |



## Method Summary

| Modifier and Type                                                                                                                                  | Method                                                                                                                                        | Description                                                                                  |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getName](#getname)()                                                                                                                         | Returns the name of the API.                                                                 |
| public void                                                                                                                                        | [addModule](#addmodule)([ModuleNode](ModuleNode.md) node)                                                                                     | Adds a module to the API.                                                                    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](ModuleNode.md)>                       | [getModules](#getmodules)()                                                                                                                   | Returns the list of modules in the API.                                                      |
| public void                                                                                                                                        | [addMethod](#addmethod)([MethodNode](MethodNode.md) node)                                                                                     | Adds a method to the API.                                                                    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                       | [getMethods](#getmethods)()                                                                                                                   | Returns the list of methods in the API.                                                      |
| public [ModuleNode](ModuleNode.md)                                                                                                                 | [getModuleNode](#getmodulenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)   | Retrieves a module matching the specified qualified name.                                    |
| public [ModuleNode](ModuleNode.md)                                                                                                                 | [getUnnamedModuleNode](#getunnamedmodulenode)()                                                                                               | Returns the unnamed module of the API.                                                       |
| public void                                                                                                                                        | [addPackage](#addpackage)([PackageNode](PackageNode.md) node)                                                                                 | Adds a package to the API.                                                                   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)>                     | [getPackages](#getpackages)()                                                                                                                 | Returns the list of packages in the API.                                                     |
| public void                                                                                                                                        | [addAppliedAnnotation](#addappliedannotation)([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)                                   | Adds an applied annotation                                                                   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [getAppliedAnnotations](#getappliedannotations)()                                                                                             | Returns the list of applied annotations                                                      |
| public void                                                                                                                                        | [addLink](#addlink)([Link](Link.md) link)                                                                                                     | Adds a link                                                                                  |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)>                                   | [getLinks](#getlinks)()                                                                                                                       | Returns the list of link.                                                                    |
| public void                                                                                                                                        | [addType](#addtype)([TypeView](TypeView.md) typeNode)                                                                                         |                                                                                              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                           | [getTypes](#gettypes)()                                                                                                                       | Gets the list of types *owned* by this instance.                                             |
| public [PackageNode](PackageNode.md)                                                                                                               | [getPackageNode](#getpackagenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName) | Retrieves a package matching the specified qualified name.                                   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                           | [getRecords](#getrecords)()                                                                                                                   | Gets the list of records *owned* by this instance.                                           |
| public [TypeNode](TypeNode.md)                                                                                                                     | [getTypeNode](#gettypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)       | Retrieves a TypeNode based on its fully qualified name.                                      |
| public void                                                                                                                                        | [sort](#sort)()                                                                                                                               | Sorts the types in descending order by qualified name and sorts all child types recursively. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [commonBase](#commonbase)()                                                                                                                   | Computes the longest common base package prefix shared by all packages in this API.          |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[setReferences](Node.md#setreferences), [getReferences](Node.md#getreferences), [getKind](Node.md#getkind), [setDeprecationText](Node.md#setdeprecationtext), [getBody](Node.md#getbody), [getSince](Node.md#getsince), [setFullBody](Node.md#setfullbody), [setFirstSentence](Node.md#setfirstsentence), [setSince](Node.md#setsince), [setBody](Node.md#setbody), [setKind](Node.md#setkind), [setDeprecation](Node.md#setdeprecation), [getFirstSentence](Node.md#getfirstsentence), [getDeprecation](Node.md#getdeprecation), [getUUID](Node.md#getuuid), [getDeprecationText](Node.md#getdeprecationtext), [getFullBody](Node.md#getfullbody)


## Field Details

### appliedAnnotations

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __appliedAnnotations__</span>

List of applied annotations.


---

### links

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __links__</span>

List of links.


---

### methods

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __methods__</span>




---

### modules

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](ModuleNode.md)> __modules__</span>

List of modules included in the API.


---

### name

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>

The name of the API


---

### packages

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __packages__</span>

List of packages included in the API.


---

### types

<span style="font-family: monospace; font-size: 80%;">protected final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __types__</span>




---

### unnamedModule

<span style="font-family: monospace; font-size: 80%;">private final [ModuleNode](ModuleNode.md) __unnamedModule__</span>

Represents the unnamed module in the API.


---


## Method Details

### getName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getName__()</span>

Returns the name of the API.

**Returns:**

The name of the API


---

### addModule

<span style="font-family: monospace; font-size: 80%;">public void __addModule__([ModuleNode](ModuleNode.md) node)</span>

Adds a module to the API.


---

### getModules

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](ModuleNode.md)> __getModules__()</span>

Returns the list of modules in the API.

**Returns:**

List of ModuleNode objects representing the modules.


---

### addMethod

<span style="font-family: monospace; font-size: 80%;">public void __addMethod__([MethodNode](MethodNode.md) node)</span>

Adds a method to the API.


---

### getMethods

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __getMethods__()</span>

Returns the list of methods in the API.

**Returns:**

List of MethodNode objects representing the methods.


---

### getModuleNode

<span style="font-family: monospace; font-size: 80%;">public [ModuleNode](ModuleNode.md) __getModuleNode__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>

Retrieves a module matching the specified qualified name.

**Returns:**

the matching ModuleNode if found, or null otherwise.


---

### getUnnamedModuleNode

<span style="font-family: monospace; font-size: 80%;">public [ModuleNode](ModuleNode.md) __getUnnamedModuleNode__()</span>

Returns the unnamed module of the API.

**Returns:**

the unnamed ModuleNode.


---

### addPackage

<span style="font-family: monospace; font-size: 80%;">public void __addPackage__([PackageNode](PackageNode.md) node)</span>

Adds a package to the API.


---

### getPackages

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __getPackages__()</span>

Returns the list of packages in the API.

**Returns:**

List of PackageNode objects representing the packages.


---

### addAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __addAppliedAnnotation__([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)</span>

Adds an applied annotation


---

### getAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __getAppliedAnnotations__()</span>

Returns the list of applied annotations

**Returns:**

list of applied annotations


---

### addLink

<span style="font-family: monospace; font-size: 80%;">public void __addLink__([Link](Link.md) link)</span>

Adds a link


---

### getLinks

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __getLinks__()</span>

Returns the list of link.

**Returns:**

list of links


---

### addType

<span style="font-family: monospace; font-size: 80%;">public void __addType__([TypeView](TypeView.md) typeNode)</span>




---

### getTypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getTypes__()</span>

Gets the list of types *owned* by this instance.


---

### getPackageNode

<span style="font-family: monospace; font-size: 80%;">public [PackageNode](PackageNode.md) __getPackageNode__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>

Retrieves a package matching the specified qualified name.

**Returns:**

the matching PackageNode if found, or null otherwise.


---

### getRecords

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getRecords__()</span>

Gets the list of records *owned* by this instance.


---

### getTypeNode

<span style="font-family: monospace; font-size: 80%;">public [TypeNode](TypeNode.md) __getTypeNode__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>

Retrieves a TypeNode based on its fully qualified name.

**Returns:**

the matching TypeNode if found, or null otherwise.


---

### sort

<span style="font-family: monospace; font-size: 80%;">public void __sort__()</span>

Sorts the types in descending order by qualified name and sorts all child types recursively.


---

### commonBase

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __commonBase__()</span>

Computes the longest common base package prefix shared by all packages in this API.

This method iterates through the list of packages and determines the common package name prefix,
truncated at the nearest dot ('.') boundary. If no common base exists, returns an empty string.

**Returns:**

The longest common base package name shared by all packages, or an empty string if none.


---

