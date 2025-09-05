Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractMember
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AbstractMember<br/>
<br/>
Direct Known Subtypes:<br/>
    [](MethodNode.md), [](ParamNode.md), [](TypeNode.md)


----

<span style="font-family: monospace; font-size: 80%;">public abstract class __AbstractMember__<br/>extends [](Node.md)
</span>


## Nested Class Summary

| Modifier and Type | Class                                                             | Description                                                             |
|-------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------|
| public static     | [AbstractMember.ModifierSorter](AbstractMember.ModifierSorter.md) | Utility class to sort modifiers according to Java language conventions. |



## Field Summary

| Modifier and Type                                                                                                                    | Field                                     | Description                                                       |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](AppliedAnnotationNode.md)> | [appliedAnnotations](#appliedannotations) | List of annotations applied to this type.                         |
| private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[](Modifier.md)>                | [modifiers](#modifiers)                   | A list of the modifiers a node has                                |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                               | [name](#name)                             | The simple form of the name                                       |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                               | [nestedName](#nestedname)                 | The simple form of the name                                       |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                               | [packageName](#packagename)               | A [](PackageNode.md) representing the package the node belongs to |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                               | [qualifiedName](#qualifiedname)           | The qualified form of the name                                    |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                               | [simpleName](#simplename)                 | The simple form of the name                                       |



## Constructor Summary

| Constructor      | Description |
|------------------|-------------|
| AbstractMember() |             |



## Method Summary

| Modifier and Type                                                                                                             | Method                                                                                                                                   | Description                                           |
|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| public void                                                                                                                   | [setPackageName](#setpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)     | Sets the package name of this type.                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                           | [getPackageName](#getpackagename)()                                                                                                      | Returns the package name of this type.                |
| public void                                                                                                                   | [setName](#setname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                   | Sets the name of this type.                           |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                           | [getName](#getname)()                                                                                                                    | Returns the name of this type.                        |
| public void                                                                                                                   | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the qualified name of this type.                 |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                           | [getQualifiedName](#getqualifiedname)()                                                                                                  | Returns the qualified name of this type.              |
| public void                                                                                                                   | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the simple name of this type.                    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                           | [getSimpleName](#getsimplename)()                                                                                                        | Returns the simple name of this type.                 |
| public void                                                                                                                   | [setNestedName](#setnestedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the nested name of this type.                    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                           | [getNestedName](#getnestedname)()                                                                                                        | Returns the nested name of this type.                 |
| public void                                                                                                                   | [addModifier](#addmodifier)([](Modifier.md) mod)                                                                                         | Adds a modifier to the set of modifiers.              |
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[](Modifier.md)>                | [getModifiers](#getmodifiers)()                                                                                                          | Returns the set of modifiers for this node.           |
| public void                                                                                                                   | [addAppliedAnnotation](#addappliedannotation)([](AppliedAnnotationNode.md) annotation)                                                   | Adds an applied annotation to this type               |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](AppliedAnnotationNode.md)> | [getAppliedAnnotations](#getappliedannotations)()                                                                                        | Returns the list of annotations applied to this type. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                           | [getModifiersString](#getmodifiersstring)()                                                                                              | Returns a string representation of modifiers.         |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[Node.setReferences](Node.md#setreferences), [Node.getReferences](Node.md#getreferences), [Node.getKind](Node.md#getkind), [Node.setDeprecationText](Node.md#setdeprecationtext), [Node.getBody](Node.md#getbody), [Node.getSince](Node.md#getsince), [Node.setFullBody](Node.md#setfullbody), [Node.setFirstSentence](Node.md#setfirstsentence), [Node.setSince](Node.md#setsince), [Node.setBody](Node.md#setbody), [Node.setDeprecation](Node.md#setdeprecation), [Node.getFirstSentence](Node.md#getfirstsentence), [Node.setKind](Node.md#setkind), [Node.getDeprecation](Node.md#getdeprecation), [Node.getUUID](Node.md#getuuid), [Node.getDeprecationText](Node.md#getdeprecationtext), [Node.getFullBody](Node.md#getfullbody)


## Field Details

### appliedAnnotations

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](AppliedAnnotationNode.md)> __appliedAnnotations__</span>

List of annotations applied to this type.


---

### modifiers

<span style="font-family: monospace; font-size: 80%;">private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[](Modifier.md)> __modifiers__</span>

A list of the modifiers a node has


---

### name

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>

The simple form of the name


---

### nestedName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __nestedName__</span>

The simple form of the name


---

### packageName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __packageName__</span>

A [](PackageNode.md) representing the package the node belongs to


---

### qualifiedName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __qualifiedName__</span>

The qualified form of the name


---

### simpleName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simpleName__</span>

The simple form of the name


---


## Method Details

### setPackageName

<span style="font-family: monospace; font-size: 80%;">public void __setPackageName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the package name of this type.


---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__()</span>

Returns the package name of this type.

**Returns:**

the package name.


---

### setName

<span style="font-family: monospace; font-size: 80%;">public void __setName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the name of this type.


---

### getName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getName__()</span>

Returns the name of this type.

**Returns:**

the name.


---

### setQualifiedName

<span style="font-family: monospace; font-size: 80%;">public void __setQualifiedName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the qualified name of this type.


---

### getQualifiedName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getQualifiedName__()</span>

Returns the qualified name of this type.

**Returns:**

the qualified name.


---

### setSimpleName

<span style="font-family: monospace; font-size: 80%;">public void __setSimpleName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the simple name of this type.


---

### getSimpleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSimpleName__()</span>

Returns the simple name of this type.

**Returns:**

the simple name.


---

### setNestedName

<span style="font-family: monospace; font-size: 80%;">public void __setNestedName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the nested name of this type.


---

### getNestedName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getNestedName__()</span>

Returns the nested name of this type.

**Returns:**

the nested name.


---

### addModifier

<span style="font-family: monospace; font-size: 80%;">public void __addModifier__([](Modifier.md) mod)</span>

Adds a modifier to the set of modifiers.


---

### getModifiers

<span style="font-family: monospace; font-size: 80%;">public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[](Modifier.md)> __getModifiers__()</span>

Returns the set of modifiers for this node.

**Returns:**

Set of modifiers.


---

### addAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __addAppliedAnnotation__([](AppliedAnnotationNode.md) annotation)</span>

Adds an applied annotation to this type


---

### getAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](AppliedAnnotationNode.md)> __getAppliedAnnotations__()</span>

Returns the list of annotations applied to this type.

**Returns:**

list of applied annotations


---

### getModifiersString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModifiersString__()</span>

Returns a string representation of modifiers.
The modifiers are sorted according to a predefined order.

**Returns:**

A string containing sorted modifiers separated by spaces.


---

