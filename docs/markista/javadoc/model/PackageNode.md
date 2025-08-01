Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[AbstractTypeOwner](AbstractTypeOwner.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.PackageNode<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[PackageMember](PackageMember.md), [PackageOwner](PackageOwner.md)


----


## Field Summary

| Modifier and Type                                                                                                                         | Field                 | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|-------------|
| private [ModuleNode](ModuleNode.md)                                                                                                       | [module](#module)     |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [packages](#packages) |             |

## Constructor Summary

| Constructor                                                                                                           | Description |
|-----------------------------------------------------------------------------------------------------------------------|-------------|
| PackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) |             |

## Method Summary

| Modifier and Type                                                                                                                 | Method                                                               | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|-------------|
| void                                                                                                                              | [setModule](#setmodule)([ModuleNode](ModuleNode.md) module)          |             |
| [ModuleNode](ModuleNode.md)                                                                                                       | [getModule](#getmodule)()                                            |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getPackages](#getpackages)()                                        |             |
| void                                                                                                                              | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode) |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                                |             |
| [Text](Text.md)                                                                                                                   | [getDescription](#getdescription)()                                  |             |

## Field Details

### module




---

### packages




---


## Method Details

### setModule

void setModule([ModuleNode](ModuleNode.md) module)




---

### getModule

[ModuleNode](ModuleNode.md) getModule()




---

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getPackages()



**Specified By:**

[PackageOwner](PackageOwner.md)


---

### addPackage

void addPackage([PackageNode](PackageNode.md) packageNode)



**Specified By:**

[PackageOwner](PackageOwner.md)


---

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()



**Specified By:**

[PackageMember](PackageMember.md)


---

### getDescription

[Text](Text.md) getDescription()



**Specified By:**

[PackageMember](PackageMember.md)


---

