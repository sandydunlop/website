Package [io.github.sandydunlop.markista.model](index.md)

# Enum TypeNode.Kind
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[io.github.sandydunlop.markista.model.TypeNode.Kind](TypeNode.Kind.md)&gt;<br/>
                io.github.sandydunlop.markista.model.TypeNode.Kind<br/>
<br/>
Enclosing Class:<br/>
    [TypeNode](TypeNode.md)


----

<span style="font-family: monospace;">public static final Enum __TypeNode.Kind__</span>

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

| Constructor                                                                                                   | Description                             |
|---------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| TypeNode.Kind([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) | Constructor assigning the display name. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                 | Description                           |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| public static [TypeNode.Kind](TypeNode.Kind.md)                                                     | [values](#values)()                                                                                                    |                                       |
| public static [TypeNode.Kind](TypeNode.Kind.md)                                                     | [valueOf](#valueof)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the display name of the kind. |

## Enum Constant Details

### NONE

public static final [io.github.sandydunlop.markista.model.TypeNode.Kind](TypeNode.Kind.md) NONE




---

### CLASS

public static final [io.github.sandydunlop.markista.model.TypeNode.Kind](TypeNode.Kind.md) CLASS




---

### INTERFACE

public static final [io.github.sandydunlop.markista.model.TypeNode.Kind](TypeNode.Kind.md) INTERFACE




---

### ENUM

public static final [io.github.sandydunlop.markista.model.TypeNode.Kind](TypeNode.Kind.md) ENUM




---

### ANNOTATION

public static final [io.github.sandydunlop.markista.model.TypeNode.Kind](TypeNode.Kind.md) ANNOTATION




---


## Field Details

### name

The display name for the kind.


---


## Method Details

### values

public static [TypeNode.Kind](TypeNode.Kind.md) values()




---

### valueOf

public static [TypeNode.Kind](TypeNode.Kind.md) valueOf([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### toString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()

Returns the display name of the kind.

**Overrides:**

[Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[TypeNode.Kind](TypeNode.Kind.md)&gt; from [Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[TypeNode.Kind](TypeNode.Kind.md)&gt;


---

