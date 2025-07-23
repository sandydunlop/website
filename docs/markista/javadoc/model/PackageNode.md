Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.AbstractTypeOwner](AbstractTypeOwner.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.PackageNode<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[PackageMember](PackageMember.md)


----


## Field Summary

| Modifier and Type                                                                                                                         | Field                 | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [packages](#packages) |             |

## Constructor Summary

| Constructor                                                                                                           | Description |
|-----------------------------------------------------------------------------------------------------------------------|-------------|
| PackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) |             |

## Method Summary

| Modifier and Type                                                                                                                 | Method                                                               | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|-------------|
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getPackages](#getpackages)()                                        |             |
| void                                                                                                                              | [addPackage](#addpackage)([PackageNode](PackageNode.md) packageNode) |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                                |             |
| [Text](Text.md)                                                                                                                   | [getDescription](#getdescription)()                                  |             |

## Field Details

### packages




## Method Details

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getPackages()



### addPackage

void addPackage([PackageNode](PackageNode.md) packageNode)



### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()



**Specified By:**

[io.github.sandydunlop.markista.model.PackageMember](PackageMember.md)

### getDescription

[Text](Text.md) getDescription()



**Specified By:**

[io.github.sandydunlop.markista.model.PackageMember](PackageMember.md)

