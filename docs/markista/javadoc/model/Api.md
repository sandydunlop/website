Package [io.github.sandydunlop.markista.model](index.md)

# Class Api
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                [AbstractTypeOwner](AbstractTypeOwner.md)<br/>
                        io.github.sandydunlop.markista.model.Api<br/>
<br/>

----

Represents the API being documented, encapsulating its modules and packages.
Provides methods to add and retrieve modules, packages, and types, as well as sorting them.


## Field Summary

| Modifier and Type                                                                                                                     | Field                           | Description                               |
|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|-------------------------------------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ModuleNode](ModuleNode.md)&gt;   | [modules](#modules)             | List of modules included in the API.      |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; | [packages](#packages)           | List of packages included in the API.     |
| private [ModuleNode](ModuleNode.md)                                                                                                   | [unnamedModule](#unnamedmodule) | Represents the unnamed module in the API. |

## Constructor Summary

| Constructor | Description                       |
|-------------|-----------------------------------|
| Api()       | Constructs an empty Api instance. |

## Method Summary

| Modifier and Type                                                                                                             | Method                                                                                                                                                      | Description                                                                                     |
|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [getName](#getname)()                                                                                                                                       | Returns the name of the API.                                                                    |
| void                                                                                                                          | [setName](#setname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                      | Sets the name of the API.                                                                       |
| void                                                                                                                          | [addModule](#addmodule)([ModuleNode](ModuleNode.md) node)                                                                                                   | Adds a module to the API.                                                                       |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ModuleNode](ModuleNode.md)&gt;   | [getModules](#getmodules)()                                                                                                                                 | Returns the list of modules in the API.                                                         |
| [ModuleNode](ModuleNode.md)                                                                                                   | [getModuleNode](#getmodulenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                 | Retrieves a module matching the specified qualified name.                                       |
| [ModuleNode](ModuleNode.md)                                                                                                   | [getUnnamedModuleNode](#getunnamedmodulenode)()                                                                                                             | Returns the unnamed module of the API.                                                          |
| void                                                                                                                          | [addPackage](#addpackage)([PackageNode](PackageNode.md) node)                                                                                               | Adds a package to the API.                                                                      |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; | [getPackages](#getpackages)()                                                                                                                               | Returns the list of packages in the API.                                                        |
| [PackageNode](PackageNode.md)                                                                                                 | [getPackageNode](#getpackagenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)               | Retrieves a package matching the specified qualified name.                                      |
| [TypeNode](TypeNode.md)                                                                                                       | [getTypeNode](#gettypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                     | Retrieves a TypeNode based on its fully qualified name.                                         |
| [TypeNode](TypeNode.md)                                                                                                       | [getTypeNode](#gettypenode)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type) | Retrieves a TypeNode based on a TypeElement.                                                    |
| void                                                                                                                          | [sort](#sort)()                                                                                                                                             | Sorts the packages in descending order by qualified name and sorts all child types recursively. |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [commonBase](#commonbase)()                                                                                                                                 | Computes the longest common base package prefix shared by all packages in this API.             |

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


## Method Details

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name of the API.

**Returns:**

The name of the API


---

### setName

void setName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the name of the API.

**Parameters:**

`name` - The name of the API


---

### addModule

void addModule([ModuleNode](ModuleNode.md) node)

Adds a module to the API.

**Parameters:**

`node` - the ModuleNode instance to add.


---

### getModules

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ModuleNode](ModuleNode.md)&gt; getModules()

Returns the list of modules in the API.

**Returns:**

List of ModuleNode objects representing the modules.


---

### getModuleNode

[ModuleNode](ModuleNode.md) getModuleNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)

Retrieves a module matching the specified qualified name.

**Parameters:**

`qualifiedName` - the fully qualified name of the module.

**Returns:**

the matching ModuleNode if found, or null otherwise.


---

### getUnnamedModuleNode

[ModuleNode](ModuleNode.md) getUnnamedModuleNode()

Returns the unnamed module of the API.

**Returns:**

the unnamed ModuleNode.


---

### addPackage

void addPackage([PackageNode](PackageNode.md) node)

Adds a package to the API.

**Parameters:**

`node` - the PackageNode instance to add.


---

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; getPackages()

Returns the list of packages in the API.

**Returns:**

List of PackageNode objects representing the packages.


---

### getPackageNode

[PackageNode](PackageNode.md) getPackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)

Retrieves a package matching the specified qualified name.

**Parameters:**

`qualifiedName` - the fully qualified name of the package.

**Returns:**

the matching PackageNode if found, or null otherwise.


---

### getTypeNode

[TypeNode](TypeNode.md) getTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)

Retrieves a TypeNode based on its fully qualified name.

**Parameters:**

`qualifiedName` - the fully qualified name of the type.

**Returns:**

the matching TypeNode if found, or null otherwise.


---

### getTypeNode

[TypeNode](TypeNode.md) getTypeNode([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)

Retrieves a TypeNode based on a TypeElement.

**Parameters:**

`type` - the TypeElement to match.

**Returns:**

the matching TypeNode if found, or null if type is null or no match found.


---

### sort

void sort()

Sorts the packages in descending order by qualified name and sorts all child types recursively.

**Overrides:**

[AbstractTypeOwner.sort](AbstractTypeOwner.md#sort) from [AbstractTypeOwner](AbstractTypeOwner.md)


---

### commonBase

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) commonBase()

Computes the longest common base package prefix shared by all packages in this API.

This method iterates through the list of packages and determines the common package name prefix,
truncated at the nearest dot ('.') boundary. If no common base exists, returns an empty string.

**Returns:**

The longest common base package name shared by all packages, or an empty string if none.


---

