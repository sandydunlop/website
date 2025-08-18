Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractPackageMember
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.AbstractPackageMember<br/>
<br/>

----

<span style="font-family: monospace;">public abstract class __AbstractPackageMember__</span>


## Nested Class Summary

| Modifier and Type | Class                                                                           | Description                                                             |
|-------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| public static     | [AbstractPackageMember.ModifierSorter](AbstractPackageMember.ModifierSorter.md) | Utility class to sort modifiers according to Java language conventions. |

## Field Summary

| Modifier and Type                                                                                      | Field                           | Description                                                                  |
|--------------------------------------------------------------------------------------------------------|---------------------------------|------------------------------------------------------------------------------|
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simpleName](#simplename)       | The simple form of the node's name                                           |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [qualifiedName](#qualifiedname) | The canonical form of the type's name                                        |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [packageName](#packagename)     | A [PackageNode](PackageNode.md) representing the package the node belongs to |

## Constructor Summary

| Constructor             | Description |
|-------------------------|-------------|
| AbstractPackageMember() |             |

## Method Summary

| Modifier and Type                                                                                                      | Method                                                                                                                                   | Description                                   |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| public void                                                                                                            | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)       | Sets the simple name of this type.            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                    | [getSimpleName](#getsimplename)()                                                                                                        | Returns the simple name of this type.         |
| public void                                                                                                            | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Sets the qualified name of this type.         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                    | [getQualifiedName](#getqualifiedname)()                                                                                                  | Returns the qualified name of this type.      |
| public void                                                                                                            | [addModifier](#addmodifier)([Modifier](Modifier.md) mod)                                                                                 | Adds a modifier to the set of modifiers.      |
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> | [getModifiers](#getmodifiers)()                                                                                                          | Returns the set of modifiers for this node.   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                    | [getModifiersString](#getmodifiersstring)()                                                                                              | Returns a string representation of modifiers. |

## Field Details

### simpleName

The simple form of the node's name


---

### qualifiedName

The canonical form of the type's name


---

### packageName

A [PackageNode](PackageNode.md) representing the package the node belongs to


---


## Method Details

### setSimpleName

public void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the simple name of this type.


---

### getSimpleName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()

Returns the simple name of this type.

**Returns:**

the simple name.


---

### setQualifiedName

public void setQualifiedName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the qualified name of this type.


---

### getQualifiedName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getQualifiedName()

Returns the qualified name of this type.

**Returns:**

the qualified name.


---

### addModifier

public void addModifier([Modifier](Modifier.md) mod)

Adds a modifier to the set of modifiers.


---

### getModifiers

public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> getModifiers()

Returns the set of modifiers for this node.

**Returns:**

Set of modifiers.


---

### getModifiersString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getModifiersString()

Returns a string representation of modifiers.
The modifiers are sorted according to a predefined order.

**Returns:**

A string containing sorted modifiers separated by spaces.


---

