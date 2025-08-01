Package [io.github.sandydunlop.markista.model](index.md)

# Interface TypeOwner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.TypeOwner<br/>
<br/>

----


## Method Summary

| Modifier and Type                                                                                                                          | Method                                                | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-------------|
| abstract void                                                                                                                              | [addType](#addtype)([TypeNode](TypeNode.md) typeNode) |             |
| abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt;           | [getTypes](#gettypes)()                               |             |
| abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getClasses](#getclasses)()                           |             |
| abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getInterfaces](#getinterfaces)()                     |             |
| abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getEnums](#getenums)()                               |             |
| abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getAnnotations](#getannotations)()                   |             |
| abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                 |             |

## Method Details

### addType

abstract void addType([TypeNode](TypeNode.md) typeNode)




---

### getTypes

abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt; getTypes()




---

### getClasses

abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getClasses()




---

### getInterfaces

abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getInterfaces()




---

### getEnums

abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getEnums()




---

### getAnnotations

abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getAnnotations()




---

### getName

abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()




---

