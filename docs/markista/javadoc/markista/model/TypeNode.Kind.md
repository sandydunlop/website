Package [io.github.sandydunlop.markista.model](index.md)

# Enum TypeNode.Kind
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)<[io.github.sandydunlop.markista.model.TypeNode.Kind](TypeNode.Kind.md)><br/>
                io.github.sandydunlop.markista.model.TypeNode.Kind<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)


----

<span style="font-family: monospace;">public static final enum __TypeNode.Kind__</span>

Enumeration representing kinds of types: None, Class, Interface, Enum, Annotation.


##Enum Constants

| Enum Constant             | Description |
|---------------------------|-------------|
| [NONE](#none)             |             |
| [CLASS](#class)           |             |
| [INTERFACE](#interface)   |             |
| [ENUM](#enum)             |             |
| [ANNOTATION](#annotation) |             |

## Field Summary

| Modifier and Type                                                                                          | Field         | Description                    |
|------------------------------------------------------------------------------------------------------------|---------------|--------------------------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [name](#name) | The display name for the kind. |

## Constructor Summary

| Constructor       | Description                             |
|-------------------|-----------------------------------------|
| TypeNode.Kind( s) | Constructor assigning the display name. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                 | Description                           |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| public static io.github.sandydunlop.markista.model.TypeNode.Kind\[]                                 | [values](#values)()                                                                                                    |                                       |
| public static [TypeNode.Kind](TypeNode.Kind.md)                                                     | [valueOf](#valueof)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the display name of the kind. |

## Enum Constant Details

### NONE

public static final NONE NONE




---

### CLASS

public static final CLASS CLASS




---

### INTERFACE

public static final INTERFACE INTERFACE




---

### ENUM

public static final ENUM ENUM




---

### ANNOTATION

public static final ANNOTATION ANNOTATION




---


## Field Details

### name

The display name for the kind.


---


## Method Details

### values

public static io.github.sandydunlop.markista.model.TypeNode.Kind\[] values()




---

### valueOf

public static [TypeNode.Kind](TypeNode.Kind.md) valueOf([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### toString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()

Returns the display name of the kind.

**Overrides:**

[Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)<[TypeNode.Kind](TypeNode.Kind.md)>.toString


---

