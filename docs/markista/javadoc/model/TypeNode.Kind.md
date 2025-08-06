Package [io.github.sandydunlop.markista.model](index.md)

# Enum TypeNode.Kind
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[TypeNode.Kind](TypeNode.Kind.md)&gt;<br/>
                io.github.sandydunlop.markista.model.TypeNode.Kind<br/>
<br/>
Enclosing Class:<br/>
    [TypeNode](TypeNode.md)


----

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

| Modifier and Type                                                                            | Method                                                                                                                 | Description                           |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| static [TypeNode.Kind](TypeNode.Kind.md)                                                     | [values](#values)()                                                                                                    |                                       |
| static [TypeNode.Kind](TypeNode.Kind.md)                                                     | [valueOf](#valueof)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |                                       |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the display name of the kind. |

## Enum Constant Details

### NONE

public static final [TypeNode.Kind](TypeNode.Kind.md) NONE




---

### CLASS

public static final [TypeNode.Kind](TypeNode.Kind.md) CLASS




---

### INTERFACE

public static final [TypeNode.Kind](TypeNode.Kind.md) INTERFACE




---

### ENUM

public static final [TypeNode.Kind](TypeNode.Kind.md) ENUM




---

### ANNOTATION

public static final [TypeNode.Kind](TypeNode.Kind.md) ANNOTATION




---


## Field Details

### name

The display name for the kind.


---


## Method Details

### values

static [TypeNode.Kind](TypeNode.Kind.md) values()




---

### valueOf

static [TypeNode.Kind](TypeNode.Kind.md) valueOf([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### toString

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()

Returns the display name of the kind.

**Overrides:**

[java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[TypeNode.Kind](TypeNode.Kind.md)&gt; from [java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[TypeNode.Kind](TypeNode.Kind.md)&gt;


---

