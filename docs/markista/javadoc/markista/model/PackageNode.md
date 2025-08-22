Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.PackageNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __PackageNode__<br/>extends [PackageOrTypeNode](PackageOrTypeNode.md)
</span>

Represents a Java package


## Field Summary

| Modifier and Type                                                                                                                     | Field                             | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private boolean                                                                                                                       | [hasPackageInfo](#haspackageinfo) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [moduleName](#modulename)         |             |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> | [packages](#packages)             |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [sourcePath](#sourcepath)         |             |



## Constructor Summary

| Constructor                                                                                                    | Description                                                         |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| PackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a PackageNode with the specified qualified package name. |



## Method Summary

| Modifier and Type                                                                                                              | Method                                                                                                                               | Description                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| public void                                                                                                                    | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode)                                                                 | Adds a subpackage to this package.                                           |
| public [Text](Text.md)                                                                                                         | [getDescription](#getdescription)()                                                                                                  | Returns the description text for this package, typically the first sentence. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [getModuleName](#getmodulename)()                                                                                                    | Returns the module that owns this package.                                   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> | [getPackages](#getpackages)()                                                                                                        | Returns the list of package members owned by this package.                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [getSourcePath](#getsourcepath)()                                                                                                    |                                                                              |
| public boolean                                                                                                                 | [hasPackageInfo](#haspackageinfo)()                                                                                                  |                                                                              |
| public void                                                                                                                    | [setHasPackageInfo](#sethaspackageinfo)(boolean b)                                                                                   |                                                                              |
| public void                                                                                                                    | [setModuleName](#setmodulename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) module) | Sets the module for this package.                                            |
| public void                                                                                                                    | [setSourcePath](#setsourcepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)   |                                                                              |


### Methods inherited from [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)

[Classes](PackageOrTypeNode.md#getclasses), [sort](PackageOrTypeNode.md#sort), [Interfaces](PackageOrTypeNode.md#getinterfaces), [Enums](PackageOrTypeNode.md#getenums), [Records](PackageOrTypeNode.md#getrecords), [Type](PackageOrTypeNode.md#addtype), [Types](PackageOrTypeNode.md#gettypes), [Annotations](PackageOrTypeNode.md#getannotations)

### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AppliedAnnotation](AbstractMember.md#addappliedannotation), [Modifier](AbstractMember.md#addmodifier), [QualifiedName](AbstractMember.md#setqualifiedname), [Modifiers](AbstractMember.md#getmodifiers), [AppliedAnnotations](AbstractMember.md#getappliedannotations), [QualifiedName](AbstractMember.md#getqualifiedname), [SimpleName](AbstractMember.md#setsimplename), [SimpleName](AbstractMember.md#getsimplename), [ModifiersString](AbstractMember.md#getmodifiersstring)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[References](Node.md#getreferences), [DeprecationText](Node.md#setdeprecationtext), [Body](Node.md#getbody), [References](Node.md#setreferences), [FirstSentence](Node.md#setfirstsentence), [Deprecation](Node.md#setdeprecation), [Deprecation](Node.md#getdeprecation), [UUID](Node.md#getuuid), [FullBody](Node.md#getfullbody), [Kind](Node.md#getkind), [Since](Node.md#getsince), [FullBody](Node.md#setfullbody), [Kind](Node.md#setkind), [Body](Node.md#setbody), [Since](Node.md#setsince), [FirstSentence](Node.md#getfirstsentence), [DeprecationText](Node.md#getdeprecationtext)


## Field Details

### hasPackageInfo

<span style="font-family: monospace; font-size: 80%;">private boolean __hasPackageInfo__</span>




---

### moduleName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __moduleName__</span>




---

### packages

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __packages__</span>




---

### sourcePath

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __sourcePath__</span>




---


## Method Details

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

### getModuleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModuleName__()</span>

Returns the module that owns this package.

**Returns:**

The ModuleNode instance.


---

### getPackages

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](PackageNode.md)> __getPackages__()</span>

Returns the list of package members owned by this package.

**Returns:**

List of PackageNode objects.


---

### getSourcePath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSourcePath__()</span>




---

### hasPackageInfo

<span style="font-family: monospace; font-size: 80%;">public boolean __hasPackageInfo__()</span>




---

### setHasPackageInfo

<span style="font-family: monospace; font-size: 80%;">public void __setHasPackageInfo__(boolean b)</span>




---

### setModuleName

<span style="font-family: monospace; font-size: 80%;">public void __setModuleName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) module)</span>

Sets the module for this package.


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)</span>




---

