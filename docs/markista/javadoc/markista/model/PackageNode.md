Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.PackageNode<br/>
<br/>

----

<span style="font-family: monospace;">public class __PackageNode__</span>

Represents a Java package


## Field Summary

| Modifier and Type                                                                                                                     | Field                             | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [moduleName](#modulename)         |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [sourcePath](#sourcepath)         |             |
| private boolean                                                                                                                       | [hasPackageInfo](#haspackageinfo) |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> | [packages](#packages)             |             |

## Constructor Summary

| Constructor        | Description                                                         |
|--------------------|---------------------------------------------------------------------|
| PackageNode( name) | Constructs a PackageNode with the specified qualified package name. |

## Method Summary

| Modifier and Type                                                                                                              | Method                                                                                                                               | Description                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| public void                                                                                                                    | [setModuleName](#setmodulename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) module) | Sets the module for this package.                                            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [getModuleName](#getmodulename)()                                                                                                    | Returns the module that owns this package.                                   |
| public void                                                                                                                    | [setSourcePath](#setsourcepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)   |                                                                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [getSourcePath](#getsourcepath)()                                                                                                    |                                                                              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> | [getPackages](#getpackages)()                                                                                                        | Returns the list of package members owned by this package.                   |
| public void                                                                                                                    | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode)                                                                 | Adds a subpackage to this package.                                           |
| public [Text](Text.md)                                                                                                         | [getDescription](#getdescription)()                                                                                                  | Returns the description text for this package, typically the first sentence. |
| public void                                                                                                                    | [setHasPackageInfo](#sethaspackageinfo)(boolean b)                                                                                   |                                                                              |
| public boolean                                                                                                                 | [hasPackageInfo](#haspackageinfo)()                                                                                                  |                                                                              |

## Field Details

### moduleName




---

### sourcePath




---

### hasPackageInfo




---

### packages




---


## Method Details

### setModuleName

public void setModuleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) module)

Sets the module for this package.


---

### getModuleName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getModuleName()

Returns the module that owns this package.

**Returns:**

The ModuleNode instance.


---

### setSourcePath

public void setSourcePath([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)




---

### getSourcePath

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSourcePath()




---

### getPackages

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> getPackages()

Returns the list of package members owned by this package.

**Returns:**

List of PackageNode objects.


---

### addPackage

public void addPackage([PackageNode](PackageNode.md) packageNode)

Adds a subpackage to this package.


---

### getDescription

public [Text](Text.md) getDescription()

Returns the description text for this package, typically the first sentence.

**Returns:**

The Text object representing the description.


---

### setHasPackageInfo

public void setHasPackageInfo(boolean b)




---

### hasPackageInfo

public boolean hasPackageInfo()




---

