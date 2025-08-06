Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractTypeOwner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AbstractTypeOwner<br/>
<br/>
All Implemented Interfaces:<br/>
    [TypeOwner](TypeOwner.md)


----

An abstract class with a set of methods useful to other subclasses of [Node](Node.md)
that can be owners of types.


## Field Summary

| Modifier and Type                                                                                                                 | Field           | Description                              |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------------------------|
| protected [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt; | [types](#types) | A list of types owned by this type owner |

## Constructor Summary

| Constructor         | Description         |
|---------------------|---------------------|
| AbstractTypeOwner() | Default constructor |

## Method Summary

| Modifier and Type                                                                                                                 | Method                                                                    | Description                                                            |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------|
| void                                                                                                                              | [addType](#addtype)([TypeNode](TypeNode.md) typeNode)                     | Adds a type to the list of types *owned* by this instance.             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt;           | [getTypes](#gettypes)()                                                   | Gets the list of types *owned* by this instance.                       |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getClasses](#getclasses)()                                               | Gets the list of classes *owned* by this instance.                     |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getInterfaces](#getinterfaces)()                                         | Gets the list of interfaces *owned* by this instance.                  |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getEnums](#getenums)()                                                   | Gets the list of enums *owned* by this instance.                       |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getAnnotations](#getannotations)()                                       | Gets the list of annotations *owned* by this instance.                 |
| void                                                                                                                              | [addClass](#addclass)([ClassNode](ClassNode.md) node)                     | Adds a class to the list of classes *owned* by this instance.          |
| void                                                                                                                              | [addInterface](#addinterface)([InterfaceNode](InterfaceNode.md) node)     | Adds a interface to the list of interfaces *owned* by this instance.   |
| void                                                                                                                              | [addEnum](#addenum)([EnumNode](EnumNode.md) node)                         | Adds a enum to the list of enums *owned* by this instance.             |
| void                                                                                                                              | [addAnnotation](#addannotation)([AnnotationNode](AnnotationNode.md) node) | Adds a annotation to the list of annotations *owned* by this instance. |
| void                                                                                                                              | [sort](#sort)()                                                           | Sorts the nodes owned by this instance into alphabetical order.        |

## Field Details

### types

A list of types owned by this type owner


---


## Method Details

### addType

void addType([TypeNode](TypeNode.md) typeNode)

Adds a type to the list of types *owned* by this instance.

**Parameters:**

`typeNode` - the type to add

**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getTypes

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt; getTypes()

Gets the list of types *owned* by this instance.

**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getClasses

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getClasses()

Gets the list of classes *owned* by this instance.

**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getInterfaces

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getInterfaces()

Gets the list of interfaces *owned* by this instance.

**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getEnums

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getEnums()

Gets the list of enums *owned* by this instance.

**Specified By:**

[TypeOwner](TypeOwner.md)


---

### getAnnotations

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getAnnotations()

Gets the list of annotations *owned* by this instance.

**Specified By:**

[TypeOwner](TypeOwner.md)


---

### addClass

void addClass([ClassNode](ClassNode.md) node)

Adds a class to the list of classes *owned* by this instance.

**Parameters:**

`node` - the class to add


---

### addInterface

void addInterface([InterfaceNode](InterfaceNode.md) node)

Adds a interface to the list of interfaces *owned* by this instance.

**Parameters:**

`node` - the interface to add


---

### addEnum

void addEnum([EnumNode](EnumNode.md) node)

Adds a enum to the list of enums *owned* by this instance.

**Parameters:**

`node` - the enum to add


---

### addAnnotation

void addAnnotation([AnnotationNode](AnnotationNode.md) node)

Adds a annotation to the list of annotations *owned* by this instance.

**Parameters:**

`node` - the annotation to add


---

### sort

void sort()

Sorts the nodes owned by this instance into alphabetical order.


---

