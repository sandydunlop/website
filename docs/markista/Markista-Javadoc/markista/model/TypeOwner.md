Package [io.github.sandydunlop.markista.model](index.md)

# Interface TypeOwner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.TypeOwner<br/>
<br/>

----

<span style="font-family: monospace;">public abstract Interface __TypeOwner__</span>

A TypeOwner is a [Node](Node.md) that can be set as the *owner* of another type.


## Method Summary

| Modifier and Type                                                                                                                                 | Method                                                | Description                                           |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| public abstract void                                                                                                                              | [addType](#addtype)([TypeNode](TypeNode.md) typeNode) | Adds a type node to this owner.                       |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt;           | [getTypes](#gettypes)()                               | Returns a list of all type nodes owned by this owner. |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getClasses](#getclasses)()                           | Returns a list of classes owned by this owner.        |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getInterfaces](#getinterfaces)()                     | Returns a list of interfaces owned by this owner.     |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getEnums](#getenums)()                               | Returns a list of enums owned by this owner.          |
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; | [getAnnotations](#getannotations)()                   | Returns a list of annotations owned by this owner.    |
| public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                      | [getName](#getname)()                                 | Returns the simple name of this owner.                |

## Method Details

### addType

public abstract void addType([TypeNode](TypeNode.md) typeNode)

Adds a type node to this owner.


---

### getTypes

public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TypeNode](TypeNode.md)&gt; getTypes()

Returns a list of all type nodes owned by this owner.

**Returns:**

list of TypeNode objects


---

### getClasses

public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getClasses()

Returns a list of classes owned by this owner.

**Returns:**

list of PackageMember objects representing classes


---

### getInterfaces

public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getInterfaces()

Returns a list of interfaces owned by this owner.

**Returns:**

list of PackageMember objects representing interfaces


---

### getEnums

public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getEnums()

Returns a list of enums owned by this owner.

**Returns:**

list of PackageMember objects representing enums


---

### getAnnotations

public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](PackageMember.md)&gt; getAnnotations()

Returns a list of annotations owned by this owner.

**Returns:**

list of PackageMember objects representing annotations


---

### getName

public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the simple name of this owner.

**Returns:**

name as a String


---

