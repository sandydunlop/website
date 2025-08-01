Package [io.github.sandydunlop.markista.model](index.md)

# Class Api
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[AbstractTypeOwner](AbstractTypeOwner.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.Api<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                     | Field                           | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ModuleNode](ModuleNode.md)&gt;   | [modules](#modules)             |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; | [packages](#packages)           |             |
| private [ModuleNode](ModuleNode.md)                                                                                                   | [unnamedModule](#unnamedmodule) |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Api()       |             |

## Method Summary

| Modifier and Type                                                                                                             | Method                                                                                                                                                      | Description |
|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [getName](#getname)()                                                                                                                                       |             |
| void                                                                                                                          | [addModule](#addmodule)([ModuleNode](ModuleNode.md) node)                                                                                                   |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ModuleNode](ModuleNode.md)&gt;   | [getModules](#getmodules)()                                                                                                                                 |             |
| [ModuleNode](ModuleNode.md)                                                                                                   | [getModuleNode](#getmodulenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                 |             |
| [ModuleNode](ModuleNode.md)                                                                                                   | [getUnnamedModuleNode](#getunnamedmodulenode)()                                                                                                             |             |
| void                                                                                                                          | [addPackage](#addpackage)([PackageNode](PackageNode.md) node)                                                                                               |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; | [getPackages](#getpackages)()                                                                                                                               |             |
| [PackageNode](PackageNode.md)                                                                                                 | [getPackageNode](#getpackagenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)               |             |
| [TypeNode](TypeNode.md)                                                                                                       | [getTypeNode](#gettypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                     |             |
| [TypeNode](TypeNode.md)                                                                                                       | [getTypeNode](#gettypenode)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type) |             |
| void                                                                                                                          | [sort](#sort)()                                                                                                                                             |             |

## Field Details

### modules




---

### packages




---

### unnamedModule




---


## Method Details

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()




---

### addModule

void addModule([ModuleNode](ModuleNode.md) node)




---

### getModules

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ModuleNode](ModuleNode.md)&gt; getModules()




---

### getModuleNode

[ModuleNode](ModuleNode.md) getModuleNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)




---

### getUnnamedModuleNode

[ModuleNode](ModuleNode.md) getUnnamedModuleNode()




---

### addPackage

void addPackage([PackageNode](PackageNode.md) node)




---

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; getPackages()




---

### getPackageNode

[PackageNode](PackageNode.md) getPackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)




---

### getTypeNode

[TypeNode](TypeNode.md) getTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)




---

### getTypeNode

[TypeNode](TypeNode.md) getTypeNode([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)




---

### sort

void sort()



**Overrides:**

[AbstractTypeOwner.sort](AbstractTypeOwner.md#sort) from [AbstractTypeOwner](AbstractTypeOwner.md)


---

