Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                [AbstractTypeOwner](AbstractTypeOwner.md)<br/>
                        io.github.sandydunlop.markista.model.PackageNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [PackageMember](PackageMember.md), [PackageOwner](PackageOwner.md)


----

Represents a Java package


## Field Summary

| Modifier and Type                                                                                                                         | Field                 | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|-------------|
| private [ModuleNode](ModuleNode.md)                                                                                                       | [module](#module)     |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [packages](#packages) |             |

## Constructor Summary

| Constructor                                                                                                           | Description                                                         |
|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| PackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructs a PackageNode with the specified qualified package name. |

## Method Summary

| Modifier and Type                                                                                                                 | Method                                                               | Description                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|------------------------------------------------------------------------------|
| void                                                                                                                              | [setModule](#setmodule)([ModuleNode](ModuleNode.md) module)          | Sets the module for this package.                                            |
| [ModuleNode](ModuleNode.md)                                                                                                       | [getModule](#getmodule)()                                            | Returns the module that owns this package.                                   |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getPackages](#getpackages)()                                        | Returns the list of package members owned by this package.                   |
| void                                                                                                                              | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode) | Adds a subpackage to this package.                                           |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                                | Returns the name (qualified name) of this package.                           |
| [Text](Text.md)                                                                                                                   | [getDescription](#getdescription)()                                  | Returns the description text for this package, typically the first sentence. |

## Field Details

### module




---

### packages




---


## Method Details

### setModule

void setModule([ModuleNode](ModuleNode.md) module)

Sets the module for this package.

**Parameters:**

`module` - The ModuleNode that owns this package.


---

### getModule

[ModuleNode](ModuleNode.md) getModule()

Returns the module that owns this package.

**Returns:**

The ModuleNode instance.


---

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getPackages()

Returns the list of package members owned by this package.

**Returns:**

List of PackageMember objects.

**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addPackage

void addPackage([PackageNode](PackageNode.md) packageNode)

Adds a subpackage to this package.

**Parameters:**

`packageNode` - The PackageNode to add as a member.

**Specified By:**

[PackageOwner](PackageOwner.md)


---

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name (qualified name) of this package.

**Returns:**

The qualified package name.

**Specified By:**

[PackageMember](PackageMember.md)


---

### getDescription

[Text](Text.md) getDescription()

Returns the description text for this package, typically the first sentence.

**Returns:**

The Text object representing the description.

**Specified By:**

[PackageMember](PackageMember.md)


---

