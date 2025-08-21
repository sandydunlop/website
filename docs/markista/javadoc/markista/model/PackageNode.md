Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.PackageNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __PackageNode__</span>

Represents a Java package


## Field Summary

| Modifier and Type                                                                                                                     | Field                             | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [moduleName](#modulename)         |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [sourcePath](#sourcepath)         |             |
| private boolean                                                                                                                       | [hasPackageInfo](#haspackageinfo) |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> | [packages](#packages)             |             |

## Constructor Summary

| Constructor                                                                                                    | Description                                                         |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| PackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a PackageNode with the specified qualified package name. |

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

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __moduleName__</span>




---

### sourcePath

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __sourcePath__</span>




---

### hasPackageInfo

<span style="font-family: monospace; font-size: 80%;">private boolean __hasPackageInfo__</span>




---

### packages

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __packages__</span>




---


## Method Details

### setModuleName

<span style="font-family: monospace; font-size: 80%;">public void __setModuleName__</span>

Sets the module for this package.


---

### getModuleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModuleName__</span>

Returns the module that owns this package.

**Returns:**

The ModuleNode instance.


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__</span>




---

### getSourcePath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSourcePath__</span>




---

### getPackages

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __getPackages__</span>

Returns the list of package members owned by this package.

**Returns:**

List of PackageNode objects.


---

### addPackage

<span style="font-family: monospace; font-size: 80%;">public void __addPackage__</span>

Adds a subpackage to this package.


---

### getDescription

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getDescription__</span>

Returns the description text for this package, typically the first sentence.

**Returns:**

The Text object representing the description.


---

### setHasPackageInfo

<span style="font-family: monospace; font-size: 80%;">public void __setHasPackageInfo__</span>




---

### hasPackageInfo

<span style="font-family: monospace; font-size: 80%;">public boolean __hasPackageInfo__</span>




---

