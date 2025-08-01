Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractTypeOwner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.AbstractTypeOwner<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[TypeOwner](TypeOwner.md)


----


## Field Summary

| Modifier and Type                                                                                                                 | Field           | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------|-------------|
| protected [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt; | [types](#types) |             |

## Constructor Summary

| Constructor         | Description |
|---------------------|-------------|
| AbstractTypeOwner() |             |

## Method Summary

| Modifier and Type                                                                                                                 | Method                                                                    | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|-------------|
| void                                                                                                                              | [addType](#addtype)([TypeNode](TypeNode.md) typeNode)                     |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt;           | [getTypes](#gettypes)()                                                   |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getClasses](#getclasses)()                                               |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getInterfaces](#getinterfaces)()                                         |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getEnums](#getenums)()                                                   |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getAnnotations](#getannotations)()                                       |             |
| void                                                                                                                              | [addClass](#addclass)([ClassNode](ClassNode.md) node)                     |             |
| void                                                                                                                              | [addInterface](#addinterface)([InterfaceNode](InterfaceNode.md) node)     |             |
| void                                                                                                                              | [addEnum](#addenum)([EnumNode](EnumNode.md) node)                         |             |
| void                                                                                                                              | [addException](#addexception)([ExceptionNode](ExceptionNode.md) node)     |             |
| void                                                                                                                              | [addAnnotation](#addannotation)([AnnotationNode](AnnotationNode.md) node) |             |
| void                                                                                                                              | [sort](#sort)()                                                           |             |

## Field Details

### types




---


## Method Details

### addType

void addType([TypeNode](TypeNode.md) typeNode)



**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getTypes

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt; getTypes()



**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getClasses

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getClasses()



**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getInterfaces

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getInterfaces()



**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getEnums

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getEnums()



**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getAnnotations

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getAnnotations()



**Specified By:**

[TypeOwner](TypeOwner.md)


---

### addClass

void addClass([ClassNode](ClassNode.md) node)




---

### addInterface

void addInterface([InterfaceNode](InterfaceNode.md) node)




---

### addEnum

void addEnum([EnumNode](EnumNode.md) node)




---

### addException

void addException([ExceptionNode](ExceptionNode.md) node)




---

### addAnnotation

void addAnnotation([AnnotationNode](AnnotationNode.md) node)




---

### sort

void sort()




---

