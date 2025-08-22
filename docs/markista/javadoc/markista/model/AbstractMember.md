Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractMember
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AbstractMember<br/>
<br/>
Direct Known Subtypes:<br/>
    [MethodNode](MethodNode.md), [ParamNode](ParamNode.md), [PackageOrTypeNode](PackageOrTypeNode.md)


----

<span style="font-family: monospace; font-size: 80%;">public abstract class __AbstractMember__<br/>extends [Node](Node.md)
</span>


## Nested Class Summary

| Modifier and Type | Class                                                             | Description                                                             |
|-------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------|
| public static     | [AbstractMember.ModifierSorter](AbstractMember.ModifierSorter.md) | Utility class to sort modifiers according to Java language conventions. |



## Field Summary

| Modifier and Type                                                                                                                                         | Field                                     | Description                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|------------------------------------------------------------------------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [appliedAnnotations](#appliedannotations) | List of annotations applied to this type.                                    |
| private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)>                             | [modifiers](#modifiers)                   | A list of the modifiers a node has                                           |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                    | [packageName](#packagename)               | A [PackageNode](PackageNode.md) representing the package the node belongs to |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                    | [qualifiedName](#qualifiedname)           | The qualified form of the name                                               |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                    | [simpleName](#simplename)                 | The simple form of the name                                                  |



## Constructor Summary

| Constructor      | Description |
|------------------|-------------|
| AbstractMember() |             |



## Method Summary

| Modifier and Type                                                                                                                                  | Method                                                                                                                                   | Description                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| public void                                                                                                                                        | [addAppliedAnnotation](#addappliedannotation)([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)                              | Adds an applied annotation to this type               |
| public void                                                                                                                                        | [addModifier](#addmodifier)([Modifier](Modifier.md) mod)                                                                                 | Adds a modifier to the set of modifiers.              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [getAppliedAnnotations](#getappliedannotations)()                                                                                        | Returns the list of annotations applied to this type. |
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)>                             | [getModifiers](#getmodifiers)()                                                                                                          | Returns the set of modifiers for this node.           |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getModifiersString](#getmodifiersstring)()                                                                                              | Returns a string representation of modifiers.         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getQualifiedName](#getqualifiedname)()                                                                                                  | Returns the qualified name of this type.              |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getSimpleName](#getsimplename)()                                                                                                        | Returns the simple name of this type.                 |
| public void                                                                                                                                        | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the qualified name of this type.                 |
| public void                                                                                                                                        | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the simple name of this type.                    |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[References](Node.md#getreferences), [Kind](Node.md#getkind), [DeprecationText](Node.md#setdeprecationtext), [Body](Node.md#getbody), [Since](Node.md#getsince), [FullBody](Node.md#setfullbody), [References](Node.md#setreferences), [FirstSentence](Node.md#setfirstsentence), [Kind](Node.md#setkind), [Body](Node.md#setbody), [Since](Node.md#setsince), [Deprecation](Node.md#setdeprecation), [FirstSentence](Node.md#getfirstsentence), [Deprecation](Node.md#getdeprecation), [UUID](Node.md#getuuid), [DeprecationText](Node.md#getdeprecationtext), [FullBody](Node.md#getfullbody)


## Field Details

### appliedAnnotations

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __appliedAnnotations__</span>

List of annotations applied to this type.


---

### modifiers

<span style="font-family: monospace; font-size: 80%;">private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> __modifiers__</span>

A list of the modifiers a node has


---

### packageName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __packageName__</span>

A [PackageNode](PackageNode.md) representing the package the node belongs to


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

### addAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __addAppliedAnnotation__([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)</span>

Adds an applied annotation to this type


---

### addModifier

<span style="font-family: monospace; font-size: 80%;">public void __addModifier__([Modifier](Modifier.md) mod)</span>

Adds a modifier to the set of modifiers.


---

### getAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __getAppliedAnnotations__()</span>

Returns the list of annotations applied to this type.

**Returns:**

list of applied annotations


---

### getModifiers

<span style="font-family: monospace; font-size: 80%;">public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> __getModifiers__()</span>

Returns the set of modifiers for this node.

**Returns:**

Set of modifiers.


---

### getModifiersString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModifiersString__()</span>

Returns a string representation of modifiers.
The modifiers are sorted according to a predefined order.

**Returns:**

A string containing sorted modifiers separated by spaces.


---

### getQualifiedName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getQualifiedName__()</span>

Returns the qualified name of this type.

**Returns:**

the qualified name.


---

### getSimpleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSimpleName__()</span>

Returns the simple name of this type.

**Returns:**

the simple name.


---

### setQualifiedName

<span style="font-family: monospace; font-size: 80%;">public void __setQualifiedName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the qualified name of this type.


---

### setSimpleName

<span style="font-family: monospace; font-size: 80%;">public void __setSimpleName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>

Sets the simple name of this type.


---

