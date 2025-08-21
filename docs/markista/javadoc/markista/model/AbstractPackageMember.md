Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractPackageMember
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AbstractPackageMember<br/>
<br/>
All Implemented Interfaces:<br/>
    [io.github.sandydunlop.markista.model.TypeMember](TypeMember.md)


----

<span style="font-family: monospace; font-size: 80%;">public abstract class __AbstractPackageMember__</span>


## Nested Class Summary

| Modifier and Type | Class                                                                           | Description                                                             |
|-------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| public static     | [AbstractPackageMember.ModifierSorter](AbstractPackageMember.ModifierSorter.md) | Utility class to sort modifiers according to Java language conventions. |

## Field Summary

| Modifier and Type                                                                                                                                         | Field                                               | Description                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|------------------------------------------------------------------------------|
| private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)>                             | [modifiers](#modifiers)                             | A list of the modifiers a node has                                           |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                    | [simpleName](#simplename)                           | The simple form of the name                                                  |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                    | [qualifiedName](#qualifiedname)                     | The qualified form of the name                                               |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                    | [packageName](#packagename)                         | A [PackageNode](PackageNode.md) representing the package the node belongs to |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [appliedAnnotations](#appliedannotations)           | List of annotations applied to this type.                                    |
| private boolean                                                                                                                                           | [hasDocumentedAnnotation](#hasdocumentedannotation) | Has the `@Documented` annotation applied                                     |

## Constructor Summary

| Constructor             | Description |
|-------------------------|-------------|
| AbstractPackageMember() |             |

## Method Summary

| Modifier and Type                                                                                                                                  | Method                                                                                                                                   | Description                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| public void                                                                                                                                        | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the simple name of this type.                                            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getSimpleName](#getsimplename)()                                                                                                        | Returns the simple name of this type.                                         |
| public void                                                                                                                                        | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the qualified name of this type.                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getQualifiedName](#getqualifiedname)()                                                                                                  | Returns the qualified name of this type.                                      |
| public void                                                                                                                                        | [addModifier](#addmodifier)([Modifier](Modifier.md) mod)                                                                                 | Adds a modifier to the set of modifiers.                                      |
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)>                             | [getModifiers](#getmodifiers)()                                                                                                          | Returns the set of modifiers for this node.                                   |
| public void                                                                                                                                        | [addAppliedAnnotation](#addappliedannotation)([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)                              | Adds an applied annotation to this type                                       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [getAppliedAnnotations](#getappliedannotations)()                                                                                        | Returns the list of annotations applied to this type.                         |
| public void                                                                                                                                        | [setHasDocumentedAnnotation](#sethasdocumentedannotation)(boolean b)                                                                     | Sets a flag indicating if this type as having a `@Documented` meta-annotation |
| public boolean                                                                                                                                     | [hasDocumentedAnnotation](#hasdocumentedannotation)()                                                                                    | Does this type have a `@Documented` meta-annotation?                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getModifiersString](#getmodifiersstring)()                                                                                              | Returns a string representation of modifiers.                                 |

## Field Details

### modifiers

<span style="font-family: monospace; font-size: 80%;">private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> __modifiers__</span>

A list of the modifiers a node has


---

### simpleName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simpleName__</span>

The simple form of the name


---

### qualifiedName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __qualifiedName__</span>

The qualified form of the name


---

### packageName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __packageName__</span>

A [PackageNode](PackageNode.md) representing the package the node belongs to


---

### appliedAnnotations

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __appliedAnnotations__</span>

List of annotations applied to this type.


---

### hasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">private boolean __hasDocumentedAnnotation__</span>

Has the `@Documented` annotation applied


---


## Method Details

### setSimpleName

<span style="font-family: monospace; font-size: 80%;">public void __setSimpleName__</span>

Sets the simple name of this type.


---

### getSimpleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSimpleName__</span>

Returns the simple name of this type.

**Returns:**

the simple name.


---

### setQualifiedName

<span style="font-family: monospace; font-size: 80%;">public void __setQualifiedName__</span>

Sets the qualified name of this type.


---

### getQualifiedName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getQualifiedName__</span>

Returns the qualified name of this type.

**Returns:**

the qualified name.


---

### addModifier

<span style="font-family: monospace; font-size: 80%;">public void __addModifier__</span>

Adds a modifier to the set of modifiers.


---

### getModifiers

<span style="font-family: monospace; font-size: 80%;">public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> __getModifiers__</span>

Returns the set of modifiers for this node.

**Returns:**

Set of modifiers.


---

### addAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __addAppliedAnnotation__</span>

Adds an applied annotation to this type


---

### getAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __getAppliedAnnotations__</span>

Returns the list of annotations applied to this type.

**Returns:**

list of applied annotations


---

### setHasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __setHasDocumentedAnnotation__</span>

Sets a flag indicating if this type as having a `@Documented` meta-annotation


---

### hasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public boolean __hasDocumentedAnnotation__</span>

Does this type have a `@Documented` meta-annotation?

**Returns:**

True if it has a `@Documented` meta-annotation


---

### getModifiersString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModifiersString__</span>

Returns a string representation of modifiers.
The modifiers are sorted according to a predefined order.

**Returns:**

A string containing sorted modifiers separated by spaces.


---

