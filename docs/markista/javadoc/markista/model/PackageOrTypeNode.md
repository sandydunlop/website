Package [io.github.sandydunlop.markista.model](index.md)

# Interface PackageOrTypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.PackageOrTypeNode<br/>
<br/>
All Known Implementing Classes:<br/>
    [PackageNode](PackageNode.md), [TypeNode](TypeNode.md)


----

<span style="font-family: monospace; font-size: 80%;">public interface __PackageOrTypeNode__</span>


## Method Summary

| Modifier and Type                                                                                                                 | Method                                                | Description                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------|
| public abstract void                                                                                                              | [addType](#addtype)([TypeView](TypeView.md) typeNode) |                                                                 |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getTypes](#gettypes)()                               | Gets the list of types *owned* by this instance.                |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getClasses](#getclasses)()                           | Gets the list of classes *owned* by this instance.              |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getInterfaces](#getinterfaces)()                     | Gets the list of interfaces *owned* by this instance.           |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getEnums](#getenums)()                               | Gets the list of enums *owned* by this instance.                |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getRecords](#getrecords)()                           | Gets the list of records *owned* by this instance.              |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> | [getAnnotations](#getannotations)()                   | Gets the list of annotations *owned* by this instance.          |
| public abstract void                                                                                                              | [sort](#sort)()                                       | Sorts the nodes owned by this instance into alphabetical order. |



## Method Details

### addType

<span style="font-family: monospace; font-size: 80%;">public abstract void __addType__([TypeView](TypeView.md) typeNode)</span>




---

### getTypes

<span style="font-family: monospace; font-size: 80%;">public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getTypes__()</span>

Gets the list of types *owned* by this instance.


---

### getClasses

<span style="font-family: monospace; font-size: 80%;">public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getClasses__()</span>

Gets the list of classes *owned* by this instance.


---

### getInterfaces

<span style="font-family: monospace; font-size: 80%;">public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getInterfaces__()</span>

Gets the list of interfaces *owned* by this instance.


---

### getEnums

<span style="font-family: monospace; font-size: 80%;">public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getEnums__()</span>

Gets the list of enums *owned* by this instance.


---

### getRecords

<span style="font-family: monospace; font-size: 80%;">public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getRecords__()</span>

Gets the list of records *owned* by this instance.


---

### getAnnotations

<span style="font-family: monospace; font-size: 80%;">public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getAnnotations__()</span>

Gets the list of annotations *owned* by this instance.


---

### sort

<span style="font-family: monospace; font-size: 80%;">public abstract void __sort__()</span>

Sorts the nodes owned by this instance into alphabetical order.


---

