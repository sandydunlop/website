Package [io.github.sandydunlop.markista.model](index.md)

# Enum Class Node.Kind
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)<[io.github.sandydunlop.markista.model.Node.Kind](Node.Kind.md)><br/>
                io.github.sandydunlop.markista.model.Node.Kind<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.model.Node](Node.md)


----

<span style="font-family: monospace; font-size: 80%;">public static final enum class __Node.Kind__<br/>extends [Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)<[Node.Kind](Node.Kind.md)>
</span>


##Enum Constants

| Enum Constant             | Description |
|---------------------------|-------------|
| [NONE](#none)             |             |
| [CLASS](#class)           |             |
| [INTERFACE](#interface)   |             |
| [RECORD](#record)         |             |
| [ENUM](#enum)             |             |
| [ANNOTATION](#annotation) |             |
| [FIELD](#field)           |             |
| [METHOD](#method)         |             |
| [PARAMETER](#parameter)   |             |



## Field Summary

| Modifier and Type                                                                                          | Field         | Description                    |
|------------------------------------------------------------------------------------------------------------|---------------|--------------------------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [name](#name) | The display name for the kind. |



## Constructor Summary

| Constructor                                                                                               | Description                             |
|-----------------------------------------------------------------------------------------------------------|-----------------------------------------|
| Node.Kind([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) | Constructor assigning the display name. |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                 | Description                           |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| public static [Node.Kind](Node.Kind.md)[]                                                           | [values](#values)()                                                                                                    |                                       |
| public static [Node.Kind](Node.Kind.md)                                                             | [valueOf](#valueof)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the display name of the kind. |



## Enum Constant Details

### NONE

public static final  NONE




---

### CLASS

public static final  CLASS




---

### INTERFACE

public static final  INTERFACE




---

### RECORD

public static final  RECORD




---

### ENUM

public static final  ENUM




---

### ANNOTATION

public static final  ANNOTATION




---

### FIELD

public static final  FIELD




---

### METHOD

public static final  METHOD




---

### PARAMETER

public static final  PARAMETER




---


## Field Details

### name

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>

The display name for the kind.


---


## Method Details

### values

<span style="font-family: monospace; font-size: 80%;">public static [Node.Kind](Node.Kind.md)[] __values__()</span>




---

### valueOf

<span style="font-family: monospace; font-size: 80%;">public static [Node.Kind](Node.Kind.md) __valueOf__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>

Returns the display name of the kind.

**Overrides:**

[Enum.toString](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html#toString)


---

