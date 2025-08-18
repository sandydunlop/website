Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageOrTypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                        io.github.sandydunlop.markista.model.PackageOrTypeNode<br/>
<br/>

----

<span style="font-family: monospace;">public abstract class __PackageOrTypeNode__</span>


## Field Summary

| Modifier and Type                                                                                                                 | Field           | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------|-------------|
| protected final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [types](#types) |             |

## Constructor Summary

| Constructor         | Description |
|---------------------|-------------|
| PackageOrTypeNode() |             |

## Method Summary

| Modifier and Type                                                                                                        | Method                                                | Description                                                     |
|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------|
| public void                                                                                                              | [addType](#addtype)([TypeView](TypeView.md) typeNode) |                                                                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getTypes](#gettypes)()                               | Gets the list of types *owned* by this instance.                |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getClasses](#getclasses)()                           | Gets the list of classes *owned* by this instance.              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getInterfaces](#getinterfaces)()                     | Gets the list of interfaces *owned* by this instance.           |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getEnums](#getenums)()                               | Gets the list of enums *owned* by this instance.                |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getAnnotations](#getannotations)()                   | Gets the list of annotations *owned* by this instance.          |
| public void                                                                                                              | [sort](#sort)()                                       | Sorts the nodes owned by this instance into alphabetical order. |

## Field Details

### types




---


## Method Details

### addType

public void addType([TypeView](TypeView.md) typeNode)




---

### getTypes

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> getTypes()

Gets the list of types *owned* by this instance.


---

### getClasses

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> getClasses()

Gets the list of classes *owned* by this instance.


---

### getInterfaces

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> getInterfaces()

Gets the list of interfaces *owned* by this instance.


---

### getEnums

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> getEnums()

Gets the list of enums *owned* by this instance.


---

### getAnnotations

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> getAnnotations()

Gets the list of annotations *owned* by this instance.


---

### sort

public void sort()

Sorts the nodes owned by this instance into alphabetical order.


---

