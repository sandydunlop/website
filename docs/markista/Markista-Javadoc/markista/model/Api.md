Package [io.github.sandydunlop.markista.model](index.md)

# Class Api
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.ModuleMemberNode](ModuleMemberNode.md)<br/>
                        [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                                [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                        io.github.sandydunlop.markista.model.Api<br/>
<br/>

----

<span style="font-family: monospace;">public Class __Api__</span>

Represents the API being documented, encapsulating its modules and packages.
Provides methods to add and retrieve modules, packages, and types, as well as sorting them.


## Field Summary

| Modifier and Type                                                                                                                                         | Field                                     | Description                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](ModuleNode.md)>                       | [modules](#modules)                       | List of modules included in the API.      |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)>                     | [packages](#packages)                     | List of packages included in the API.     |
| private final [ModuleNode](ModuleNode.md)                                                                                                                 | [unnamedModule](#unnamedmodule)           | Represents the unnamed module in the API. |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [appliedAnnotations](#appliedannotations) | List of applied annotations.              |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)>                         | [links](#links)                           | List of links.                            |

## Constructor Summary

| Constructor | Description                                           |
|-------------|-------------------------------------------------------|
| Api( name)  | Constructs an empty Api instance with the given name. |

## Method Summary

| Modifier and Type                                                                                                                                  | Method                                                                                                                                        | Description                                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getName](#getname)()                                                                                                                         | Returns the name of the API.                                                                    |
| public void                                                                                                                                        | [addModule](#addmodule)([ModuleNode](ModuleNode.md) node)                                                                                     | Adds a module to the API.                                                                       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](ModuleNode.md)>                       | [getModules](#getmodules)()                                                                                                                   | Returns the list of modules in the API.                                                         |
| public [ModuleNode](ModuleNode.md)                                                                                                                 | [getModuleNode](#getmodulenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)   | Retrieves a module matching the specified qualified name.                                       |
| public [ModuleNode](ModuleNode.md)                                                                                                                 | [getUnnamedModuleNode](#getunnamedmodulenode)()                                                                                               | Returns the unnamed module of the API.                                                          |
| public void                                                                                                                                        | [addPackage](#addpackage)([PackageNode](PackageNode.md) node)                                                                                 | Adds a package to the API.                                                                      |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)>                     | [getPackages](#getpackages)()                                                                                                                 | Returns the list of packages in the API.                                                        |
| public void                                                                                                                                        | [addAppliedAnnotation](#addappliedannotation)([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)                                   | Adds an applied annotation                                                                      |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [getAppliedAnnotations](#getappliedannotations)()                                                                                             | Returns the list of applied annotations                                                         |
| public void                                                                                                                                        | [addLink](#addlink)([Reference](Reference.md) link)                                                                                           | Adds a link                                                                                     |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)>                         | [getLinks](#getlinks)()                                                                                                                       | Returns the list of link.                                                                       |
| public [PackageNode](PackageNode.md)                                                                                                               | [getPackageNode](#getpackagenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName) | Retrieves a package matching the specified qualified name.                                      |
| public [TypeNode](TypeNode.md)                                                                                                                     | [getTypeNode](#gettypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)       | Retrieves a TypeNode based on its fully qualified name.                                         |
| public void                                                                                                                                        | [sort](#sort)()                                                                                                                               | Sorts the packages in descending order by qualified name and sorts all child types recursively. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [commonBase](#commonbase)()                                                                                                                   | Computes the longest common base package prefix shared by all packages in this API.             |

## Field Details

### modules

List of modules included in the API.


---

### packages

List of packages included in the API.


---

### unnamedModule

Represents the unnamed module in the API.


---

### appliedAnnotations

List of applied annotations.


---

### links

List of links.


---


## Method Details

### getName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name of the API.

**Returns:**

The name of the API


---

### addModule

public void addModule([ModuleNode](ModuleNode.md) node)

Adds a module to the API.


---

### getModules

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](ModuleNode.md)> getModules()

Returns the list of modules in the API.

**Returns:**

List of ModuleNode objects representing the modules.


---

### getModuleNode

public [ModuleNode](ModuleNode.md) getModuleNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)

Retrieves a module matching the specified qualified name.

**Returns:**

the matching ModuleNode if found, or null otherwise.


---

### getUnnamedModuleNode

public [ModuleNode](ModuleNode.md) getUnnamedModuleNode()

Returns the unnamed module of the API.

**Returns:**

the unnamed ModuleNode.


---

### addPackage

public void addPackage([PackageNode](PackageNode.md) node)

Adds a package to the API.


---

### getPackages

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> getPackages()

Returns the list of packages in the API.

**Returns:**

List of PackageNode objects representing the packages.


---

### addAppliedAnnotation

public void addAppliedAnnotation([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)

Adds an applied annotation


---

### getAppliedAnnotations

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> getAppliedAnnotations()

Returns the list of applied annotations

**Returns:**

list of applied annotations


---

### addLink

public void addLink([Reference](Reference.md) link)

Adds a link


---

### getLinks

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> getLinks()

Returns the list of link.

**Returns:**

list of links


---

### getPackageNode

public [PackageNode](PackageNode.md) getPackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)

Retrieves a package matching the specified qualified name.

**Returns:**

the matching PackageNode if found, or null otherwise.


---

### getTypeNode

public [TypeNode](TypeNode.md) getTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)

Retrieves a TypeNode based on its fully qualified name.

**Returns:**

the matching TypeNode if found, or null otherwise.


---

### sort

public void sort()

Sorts the packages in descending order by qualified name and sorts all child types recursively.

**Overrides:**

[io.github.sandydunlop.markista.model.PackageOrTypeNode.sort](PackageOrTypeNode.md#sort).sort


---

### commonBase

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) commonBase()

Computes the longest common base package prefix shared by all packages in this API.

This method iterates through the list of packages and determines the common package name prefix,
truncated at the nearest dot ('.') boundary. If no common base exists, returns an empty string.

**Returns:**

The longest common base package name shared by all packages, or an empty string if none.


---

