Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractPackageMember.ModifierSorter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.AbstractPackageMember.ModifierSorter<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)


----

<span style="font-family: monospace;">public static Class __AbstractPackageMember.ModifierSorter__</span>

Utility class to sort modifiers according to Java language conventions.


## Field Summary

| Modifier and Type                                                                                                                      | Field           | Description                                                      |
|----------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------------------------------------------------|
| private static final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Modifier](Modifier.md)> | [ORDER](#order) | The fixed order of modifiers as per Java language specification. |

## Constructor Summary

| Constructor                            | Description                                   |
|----------------------------------------|-----------------------------------------------|
| AbstractPackageMember.ModifierSorter() | Private constructor to prevent instantiation. |

## Method Summary

| Modifier and Type                                                                                                               | Method                                                                                                                                                       | Description                                              |
|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Modifier](Modifier.md)> | [sortModifiers](#sortmodifiers)([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> modifierSet) | Sort the given set of modifiers into the standard order. |

## Field Details

### ORDER

The fixed order of modifiers as per Java language specification.


---


## Method Details

### sortModifiers

public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Modifier](Modifier.md)> sortModifiers([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> modifierSet)

Sort the given set of modifiers into the standard order.

**Returns:**

List of modifiers sorted in the defined order.


---

