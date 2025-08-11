Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractTypeOwner](AbstractTypeOwner.md)<br/>
                        io.github.sandydunlop.markista.model.PackageNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [io.github.sandydunlop.markista.model.PackageMember](PackageMember.md), [io.github.sandydunlop.markista.model.PackageOwner](PackageOwner.md)


----

<span style="font-family: monospace;">public Class __PackageNode__</span>

Represents a Java package


## Field Summary

| Modifier and Type                                                                                                                               | Field                             | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private [ModuleNode](ModuleNode.md)                                                                                                             | [module](#module)                 |             |
| private [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html)                                            | [sourcePath](#sourcepath)         |             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [name](#name)                     |             |
| private boolean                                                                                                                                 | [hasPackageInfo](#haspackageinfo) |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [packages](#packages)             |             |

## Constructor Summary

| Constructor                                                                                                    | Description                                                         |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| PackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a PackageNode with the specified qualified package name. |

## Method Summary

| Modifier and Type                                                                                                                        | Method                                                                                                                             | Description                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| public void                                                                                                                              | [setModule](#setmodule)([ModuleNode](ModuleNode.md) module)                                                                        | Sets the module for this package.                                            |
| public [ModuleNode](ModuleNode.md)                                                                                                       | [getModule](#getmodule)()                                                                                                          | Returns the module that owns this package.                                   |
| public void                                                                                                                              | [setSourcePath](#setsourcepath)([Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) path) |                                                                              |
| public [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html)                                      | [getSourcePath](#getsourcepath)()                                                                                                  |                                                                              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getPackages](#getpackages)()                                                                                                      | Returns the list of package members owned by this package.                   |
| public void                                                                                                                              | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode)                                                               | Adds a subpackage to this package.                                           |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                                                                                              | Returns the name (canonical name) of this package.                           |
| public [Text](Text.md)                                                                                                                   | [getDescription](#getdescription)()                                                                                                | Returns the description text for this package, typically the first sentence. |
| public void                                                                                                                              | [setHasPackageInfo](#sethaspackageinfo)(boolean b)                                                                                 |                                                                              |
| public boolean                                                                                                                           | [hasPackageInfo](#haspackageinfo)()                                                                                                |                                                                              |

## Field Details

### module




---

### sourcePath




---

### name




---

### hasPackageInfo




---

### packages




---


## Method Details

### setModule

public void setModule([ModuleNode](ModuleNode.md) module)

Sets the module for this package.


---

### getModule

public [ModuleNode](ModuleNode.md) getModule()

Returns the module that owns this package.

**Returns:**

The ModuleNode instance.


---

### setSourcePath

public void setSourcePath([Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) path)




---

### getSourcePath

public [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) getSourcePath()




---

### getPackages

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getPackages()

Returns the list of package members owned by this package.

**Returns:**

List of PackageMember objects.

**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addPackage

public void addPackage([PackageNode](PackageNode.md) packageNode)

Adds a subpackage to this package.

**Specified By:**

[PackageOwner](PackageOwner.md)


---

### getName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name (canonical name) of this package.

**Returns:**

The package name.

**Specified By:**

[PackageMember](PackageMember.md)


---

### getDescription

public [Text](Text.md) getDescription()

Returns the description text for this package, typically the first sentence.

**Returns:**

The Text object representing the description.

**Specified By:**

[PackageMember](PackageMember.md)


---

### setHasPackageInfo

public void setHasPackageInfo(boolean b)




---

### hasPackageInfo

public boolean hasPackageInfo()




---

