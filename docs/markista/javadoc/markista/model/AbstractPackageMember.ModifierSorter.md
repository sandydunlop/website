Package [io.github.sandydunlop.markista.model](index.md)

# Class AbstractPackageMember.ModifierSorter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.AbstractPackageMember.ModifierSorter<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)


----

<span style="font-family: monospace;">public static class __AbstractPackageMember.ModifierSorter__</span>

Utility class to sort modifiers according to Java language conventions.


## Method Summary

| Modifier and Type                                                                                                               | Method                                                                                                                                                       | Description                                              |
|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Modifier](Modifier.md)> | [sortModifiers](#sortmodifiers)([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> modifierSet) | Sort the given set of modifiers into the standard order. |

## Method Details

### sortModifiers

public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Modifier](Modifier.md)> sortModifiers([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](Modifier.md)> modifierSet)

Sort the given set of modifiers into the standard order.

**Returns:**

List of modifiers sorted in the defined order.


---

