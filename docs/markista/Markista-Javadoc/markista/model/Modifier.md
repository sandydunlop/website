Package [io.github.sandydunlop.markista.model](index.md)

# Enum Modifier
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [java.lang.Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[io.github.sandydunlop.markista.model.Modifier](Modifier.md)&gt;<br/>
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

| Constructor                                                                                              | Description                                                          |
|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| Modifier([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) | Constructs a Modifier enum constant with the specified string value. |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                 | Description                                         |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| public static [Modifier](Modifier.md)                                                               | [values](#values)()                                                                                                    |                                                     |
| public static [Modifier](Modifier.md)                                                               | [valueOf](#valueof)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |                                                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [toString](#tostring)()                                                                                                | Returns the string representation of this modifier. |

## Enum Constant Details

### PUBLIC

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) PUBLIC




---

### PROTECTED

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) PROTECTED




---

### PRIVATE

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) PRIVATE




---

### STATIC

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) STATIC




---

### FINAL

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) FINAL




---

### ABSTRACT

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) ABSTRACT




---

### SYNCHRONIZED

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) SYNCHRONIZED




---

### TRANSIENT

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) TRANSIENT




---

### VOLATILE

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) VOLATILE




---

### NATIVE

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) NATIVE




---

### STRICTFP

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) STRICTFP




---

### DEFAULT

public static final [io.github.sandydunlop.markista.model.Modifier](Modifier.md) DEFAULT




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

[Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[Modifier](Modifier.md)&gt; from [Enum](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Enum.html)&lt;[Modifier](Modifier.md)&gt;


---

