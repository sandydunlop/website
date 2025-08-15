Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractPackageMember
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.ModuleMemberNode](ModuleMemberNode.md)<br/>
                        io.github.sandydunlop.markista.model.AbstractPackageMember<br/>
<br/>

----

<span style="font-family: monospace;">public abstract Class __AbstractPackageMember__</span>


## Nested Class Summary

| Modifier and Type | Class                                                                           | Description                                                             |
|-------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| public static     | [AbstractPackageMember.ModifierSorter](AbstractPackageMember.ModifierSorter.md) | Utility class to sort modifiers according to Java language conventions. |

## Field Summary

| Modifier and Type                                                                                                             | Field                   | Description                        |
|-------------------------------------------------------------------------------------------------------------------------------|-------------------------|------------------------------------|
| private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> | [modifiers](#modifiers) | A list of the modifiers a node has |

## Constructor Summary

| Constructor             | Description |
|-------------------------|-------------|
| AbstractPackageMember() |             |

## Method Summary

| Modifier and Type                                                                                                      | Method                                                   | Description                                   |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|-----------------------------------------------|
| public void                                                                                                            | [addModifier](#addmodifier)([Modifier](Modifier.md) mod) | Adds a modifier to the set of modifiers.      |
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> | [getModifiers](#getmodifiers)()                          | Returns the set of modifiers for this node.   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                    | [getModifiersString](#getmodifiersstring)()              | Returns a string representation of modifiers. |

## Field Details

### modifiers

A list of the modifiers a node has


---


## Method Details

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

