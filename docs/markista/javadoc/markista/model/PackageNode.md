Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.PackageNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [PackageOrTypeNode](PackageOrTypeNode.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __PackageNode__<br/>extends [Node](Node.md)
</span>

Represents a Java package


## Field Summary

| Modifier and Type                                                                                                                     | Field                             | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private boolean                                                                                                                       | [hasPackageInfo](#haspackageinfo) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [moduleName](#modulename)         |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [name](#name)                     |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> | [packages](#packages)             |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [sourcePath](#sourcepath)         |             |
| protected final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>     | [types](#types)                   |             |



## Constructor Summary

| Constructor                                                                                                    | Description                                                         |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| PackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a PackageNode with the specified qualified package name. |



## Method Summary

| Modifier and Type                                                                                                              | Method                                                                                                                               | Description                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [getName](#getname)()                                                                                                                |                                                                              |
| public void                                                                                                                    | [setModuleName](#setmodulename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) module) | Sets the module for this package.                                            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [getModuleName](#getmodulename)()                                                                                                    | Returns the module that owns this package.                                   |
| public void                                                                                                                    | [setSourcePath](#setsourcepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)   |                                                                              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [getSourcePath](#getsourcepath)()                                                                                                    |                                                                              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> | [getPackages](#getpackages)()                                                                                                        | Returns the list of package members owned by this package.                   |
| public void                                                                                                                    | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode)                                                                 | Adds a subpackage to this package.                                           |
| public [Text](Text.md)                                                                                                         | [getDescription](#getdescription)()                                                                                                  | Returns the description text for this package, typically the first sentence. |
| public void                                                                                                                    | [setHasPackageInfo](#sethaspackageinfo)(boolean b)                                                                                   |                                                                              |
| public boolean                                                                                                                 | [hasPackageInfo](#haspackageinfo)()                                                                                                  |                                                                              |
| public void                                                                                                                    | [addType](#addtype)([TypeView](TypeView.md) typeNode)                                                                                |                                                                              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>       | [getTypes](#gettypes)()                                                                                                              | Gets the list of types *owned* by this instance.                             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>       | [getClasses](#getclasses)()                                                                                                          | Gets the list of classes *owned* by this instance.                           |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>       | [getInterfaces](#getinterfaces)()                                                                                                    | Gets the list of interfaces *owned* by this instance.                        |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>       | [getEnums](#getenums)()                                                                                                              | Gets the list of enums *owned* by this instance.                             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>       | [getRecords](#getrecords)()                                                                                                          | Gets the list of records *owned* by this instance.                           |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>       | [getAnnotations](#getannotations)()                                                                                                  | Gets the list of annotations *owned* by this instance.                       |
| public void                                                                                                                    | [sort](#sort)()                                                                                                                      | Sorts the nodes owned by this instance into alphabetical order.              |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[setReferences](Node.md#setreferences), [getReferences](Node.md#getreferences), [getKind](Node.md#getkind), [setDeprecationText](Node.md#setdeprecationtext), [getBody](Node.md#getbody), [getSince](Node.md#getsince), [setFullBody](Node.md#setfullbody), [setFirstSentence](Node.md#setfirstsentence), [setSince](Node.md#setsince), [setBody](Node.md#setbody), [setKind](Node.md#setkind), [setDeprecation](Node.md#setdeprecation), [getFirstSentence](Node.md#getfirstsentence), [getDeprecation](Node.md#getdeprecation), [getUUID](Node.md#getuuid), [getDeprecationText](Node.md#getdeprecationtext), [getFullBody](Node.md#getfullbody)


## Field Details

### hasPackageInfo

<span style="font-family: monospace; font-size: 80%;">private boolean __hasPackageInfo__</span>




---

### moduleName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __moduleName__</span>




---

### name

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>




---

### packages

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __packages__</span>




---

### sourcePath

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __sourcePath__</span>




---

### types

<span style="font-family: monospace; font-size: 80%;">protected final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __types__</span>




---


## Method Details

### getName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getName__()</span>




---

### setModuleName

<span style="font-family: monospace; font-size: 80%;">public void __setModuleName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) module)</span>

Sets the module for this package.


---

### getModuleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModuleName__()</span>

Returns the module that owns this package.

**Returns:**

The ModuleNode instance.


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)</span>




---

### getSourcePath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSourcePath__()</span>




---

### getPackages

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __getPackages__()</span>

Returns the list of package members owned by this package.

**Returns:**

List of PackageNode objects.


---

### addPackage

<span style="font-family: monospace; font-size: 80%;">public void __addPackage__([PackageNode](PackageNode.md) packageNode)</span>

Adds a subpackage to this package.


---

### getDescription

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getDescription__()</span>

Returns the description text for this package, typically the first sentence.

**Returns:**

The Text object representing the description.


---

### setHasPackageInfo

<span style="font-family: monospace; font-size: 80%;">public void __setHasPackageInfo__(boolean b)</span>




---

### hasPackageInfo

<span style="font-family: monospace; font-size: 80%;">public boolean __hasPackageInfo__()</span>




---

### addType

<span style="font-family: monospace; font-size: 80%;">public void __addType__([TypeView](TypeView.md) typeNode)</span>



**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getTypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getTypes__()</span>

Gets the list of types *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getClasses

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getClasses__()</span>

Gets the list of classes *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getInterfaces

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getInterfaces__()</span>

Gets the list of interfaces *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getEnums

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getEnums__()</span>

Gets the list of enums *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getRecords

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getRecords__()</span>

Gets the list of records *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getAnnotations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getAnnotations__()</span>

Gets the list of annotations *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### sort

<span style="font-family: monospace; font-size: 80%;">public void __sort__()</span>

Sorts the nodes owned by this instance into alphabetical order.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

