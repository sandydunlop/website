Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageOrTypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.ModuleMemberNode](ModuleMemberNode.md)<br/>
                        [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                                io.github.sandydunlop.markista.model.PackageOrTypeNode<br/>
<br/>

----

<span style="font-family: monospace;">public abstract Class __PackageOrTypeNode__</span>

An abstract class with a set of methods useful to other subclasses of [Node](Node.md)
that can be owners of types.


## Field Summary

| Modifier and Type                                                                                                           | Field           | Description                              |
|-----------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------------------------|
| protected [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> | [types](#types) | A list of types owned by this type owner |

## Constructor Summary

| Constructor         | Description         |
|---------------------|---------------------|
| PackageOrTypeNode() | Default constructor |

## Method Summary

| Modifier and Type                                                                                                        | Method                                                                            | Description                                                            |
|--------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------|
| public void                                                                                                              | [addType](#addtype)([TypeNode](TypeNode.md) typeNode)                             | Adds a type to the list of types *owned* by this instance.             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> | [getTypes](#gettypes)()                                                           | Gets the list of types *owned* by this instance.                       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> | [getClasses](#getclasses)()                                                       | Gets the list of classes *owned* by this instance.                     |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> | [getInterfaces](#getinterfaces)()                                                 | Gets the list of interfaces *owned* by this instance.                  |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> | [getEnums](#getenums)()                                                           | Gets the list of enums *owned* by this instance.                       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> | [getAnnotations](#getannotations)()                                               | Gets the list of annotations *owned* by this instance.                 |
| public void                                                                                                              | [addClass](#addclass)([ClassTypeNode](ClassTypeNode.md) node)                     | Adds a class to the list of classes *owned* by this instance.          |
| public void                                                                                                              | [addInterface](#addinterface)([InterfaceTypeNode](InterfaceTypeNode.md) node)     | Adds a interface to the list of interfaces *owned* by this instance.   |
| public void                                                                                                              | [addEnum](#addenum)([EnumTypeNode](EnumTypeNode.md) node)                         | Adds a enum to the list of enums *owned* by this instance.             |
| public void                                                                                                              | [addAnnotation](#addannotation)([AnnotationTypeNode](AnnotationTypeNode.md) node) | Adds a annotation to the list of annotations *owned* by this instance. |
| public void                                                                                                              | [sort](#sort)()                                                                   | Sorts the nodes owned by this instance into alphabetical order.        |

## Field Details

### types

A list of types owned by this type owner


---


## Method Details

### addType

public void addType([TypeNode](TypeNode.md) typeNode)

Adds a type to the list of types *owned* by this instance.


---

### getTypes

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> getTypes()

Gets the list of types *owned* by this instance.


---

### getClasses

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> getClasses()

Gets the list of classes *owned* by this instance.


---

### getInterfaces

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> getInterfaces()

Gets the list of interfaces *owned* by this instance.


---

### getEnums

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> getEnums()

Gets the list of enums *owned* by this instance.


---

### getAnnotations

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeNode](TypeNode.md)> getAnnotations()

Gets the list of annotations *owned* by this instance.


---

### addClass

public void addClass([ClassTypeNode](ClassTypeNode.md) node)

Adds a class to the list of classes *owned* by this instance.


---

### addInterface

public void addInterface([InterfaceTypeNode](InterfaceTypeNode.md) node)

Adds a interface to the list of interfaces *owned* by this instance.


---

### addEnum

public void addEnum([EnumTypeNode](EnumTypeNode.md) node)

Adds a enum to the list of enums *owned* by this instance.


---

### addAnnotation

public void addAnnotation([AnnotationTypeNode](AnnotationTypeNode.md) node)

Adds a annotation to the list of annotations *owned* by this instance.


---

### sort

public void sort()

Sorts the nodes owned by this instance into alphabetical order.


---

