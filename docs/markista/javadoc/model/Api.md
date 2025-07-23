Package [io.github.sandydunlop.markista.model](index.md)

# Class Api
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.AbstractTypeOwner](AbstractTypeOwner.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.Api<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                     | Field                             | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; | [packages](#packages)             |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;     | [constantValues](#constantvalues) |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Api()       |             |

## Method Summary

| Modifier and Type                                                                                                             | Method                                                                                                                                                        | Description |
|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; | [getPackages](#getpackages)()                                                                                                                                 |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;     | [getConstantValues](#getconstantvalues)()                                                                                                                     |             |
| void                                                                                                                          | [addPackage](#addpackage)([PackageNode](PackageNode.md) node)                                                                                                 |             |
| [PackageNode](PackageNode.md)                                                                                                 | [getPackageNode](#getpackagenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                 |             |
| [ClassNode](ClassNode.md)                                                                                                     | [getClassNode](#getclassnode)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type) |             |
| [TypeNode](TypeNode.md)                                                                                                       | [getTypeNode](#gettypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                       |             |
| [TypeNode](TypeNode.md)                                                                                                       | [getTypeNode](#gettypenode)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)   |             |
| void                                                                                                                          | [sort](#sort)()                                                                                                                                               |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [getName](#getname)()                                                                                                                                         |             |

## Field Details

### packages



### constantValues




## Method Details

### getPackages

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageNode](PackageNode.md)&gt; getPackages()



### getConstantValues

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; getConstantValues()



### addPackage

void addPackage([PackageNode](PackageNode.md) node)



### getPackageNode

[PackageNode](PackageNode.md) getPackageNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)



### getClassNode

[ClassNode](ClassNode.md) getClassNode([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)



### getTypeNode

[TypeNode](TypeNode.md) getTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)



### getTypeNode

[TypeNode](TypeNode.md) getTypeNode([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)



### sort

void sort()



### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()



