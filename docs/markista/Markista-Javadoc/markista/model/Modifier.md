Package [io.github.sandydunlop.markista.model](index.md)

# Enum Modifier
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)<[io.github.sandydunlop.markista.model.Modifier](Modifier.md)><br/>
                io.github.sandydunlop.markista.model.Modifier<br/>
<br/>

----

<span style="font-family: monospace;">public final Enum __Modifier__</span>

Enum representing Java language modifiers with their string 
representations.


##Enum Constants

| Enum Constant                 | Description |
|-------------------------------|-------------|
| [PUBLIC](#public)             |             |
| [PROTECTED](#protected)       |             |
| [PRIVATE](#private)           |             |
| [STATIC](#static)             |             |
| [FINAL](#final)               |             |
| [ABSTRACT](#abstract)         |             |
| [SYNCHRONIZED](#synchronized) |             |
| [TRANSIENT](#transient)       |             |
| [VOLATILE](#volatile)         |             |
| [NATIVE](#native)             |             |
| [STRICTFP](#strictfp)         |             |
| [DEFAULT](#default)           |             |

## Field Summary

| Modifier and Type                                                                                          | Field         | Description                                |
|------------------------------------------------------------------------------------------------------------|---------------|--------------------------------------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [name](#name) | The string representation of the modifier. |

## Constructor Summary

| Constructor  | Description                                                          |
|--------------|----------------------------------------------------------------------|
| Modifier( s) | Constructs a Modifier enum constant with the specified string value. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                 | Description                                         |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| public static [Modifier](Modifier.md)                                                               | [values](#values)()                                                                                                    |                                                     |
| public static [Modifier](Modifier.md)                                                               | [valueOf](#valueof)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |                                                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the string representation of this modifier. |

## Enum Constant Details

### PUBLIC

public static final PUBLIC PUBLIC




---

### PROTECTED

public static final PROTECTED PROTECTED




---

### PRIVATE

public static final PRIVATE PRIVATE




---

### STATIC

public static final STATIC STATIC




---

### FINAL

public static final FINAL FINAL




---

### ABSTRACT

public static final ABSTRACT ABSTRACT




---

### SYNCHRONIZED

public static final SYNCHRONIZED SYNCHRONIZED




---

### TRANSIENT

public static final TRANSIENT TRANSIENT




---

### VOLATILE

public static final VOLATILE VOLATILE




---

### NATIVE

public static final NATIVE NATIVE




---

### STRICTFP

public static final STRICTFP STRICTFP




---

### DEFAULT

public static final DEFAULT DEFAULT




---


## Field Details

### name

The string representation of the modifier.


---


## Method Details

### values

public static [Modifier](Modifier.md) values()




---

### valueOf

public static [Modifier](Modifier.md) valueOf([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### toString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) toString()

Returns the string representation of this modifier.

**Returns:**

The string name of the modifier.

**Overrides:**

[Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)<[Modifier](Modifier.md)>.toString


---

