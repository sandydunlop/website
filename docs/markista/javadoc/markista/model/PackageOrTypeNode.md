Package [io.github.sandydunlop.markista.model](index.md)

# Class PackageOrTypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        io.github.sandydunlop.markista.model.PackageOrTypeNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public abstract class __PackageOrTypeNode__</span>


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
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getRecords](#getrecords)()                           | Gets the list of records *owned* by this instance.              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getAnnotations](#getannotations)()                   | Gets the list of annotations *owned* by this instance.          |
| public void                                                                                                              | [sort](#sort)()                                       | Sorts the nodes owned by this instance into alphabetical order. |

## Field Details

### types

<span style="font-family: monospace; font-size: 80%;">protected final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __types__</span>




---


## Method Details

### addType

<span style="font-family: monospace; font-size: 80%;">public void __addType__</span>




---

### getTypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getTypes__</span>

Gets the list of types *owned* by this instance.


---

### getClasses

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getClasses__</span>

Gets the list of classes *owned* by this instance.


---

### getInterfaces

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getInterfaces__</span>

Gets the list of interfaces *owned* by this instance.


---

### getEnums

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getEnums__</span>

Gets the list of enums *owned* by this instance.


---

### getRecords

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getRecords__</span>

Gets the list of records *owned* by this instance.


---

### getAnnotations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getAnnotations__</span>

Gets the list of annotations *owned* by this instance.


---

### sort

<span style="font-family: monospace; font-size: 80%;">public void __sort__</span>

Sorts the nodes owned by this instance into alphabetical order.


---

