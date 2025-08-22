Package [io.github.sandydunlop.markista.model](index.md)

# Enum Class NodeKind
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)<[io.github.sandydunlop.markista.model.NodeKind](NodeKind.md)><br/>
                io.github.sandydunlop.markista.model.NodeKind<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public final enum class __NodeKind__<br/>extends [Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)<[NodeKind](NodeKind.md)>
</span>

Enumeration representing kinds of types: None, Class, Interface, Enum, Annotation.


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

| Constructor                                                                                              | Description                             |
|----------------------------------------------------------------------------------------------------------|-----------------------------------------|
| NodeKind([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) | Constructor assigning the display name. |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                 | Description                           |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the display name of the kind. |
| public static [NodeKind](NodeKind.md)                                                               | [valueOf](#valueof)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |                                       |
| public static NodeKind\[]                                                                           | [values](#values)()                                                                                                    |                                       |



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

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>

Returns the display name of the kind.


---

### valueOf

<span style="font-family: monospace; font-size: 80%;">public static [NodeKind](NodeKind.md) __valueOf__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### values

<span style="font-family: monospace; font-size: 80%;">public static NodeKind\[] __values__()</span>




---

