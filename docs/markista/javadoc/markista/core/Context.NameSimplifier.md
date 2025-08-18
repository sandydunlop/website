Package [io.github.sandydunlop.markista.core](index.md)

# Class Context.NameSimplifier
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.core.Context.NameSimplifier<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.core.Context](Context.md)


----

<span style="font-family: monospace;">public class __Context.NameSimplifier__</span>


## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                            | Description                                                     |
|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyNames](#simplifynames)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str) | Changes all qualified names in a string into unqualified names. |
| public static boolean                                                                                      | [isValidSimpleNameChar](#isvalidsimplenamechar)(char c)                                                                           | Checks if the given character is valid in an unqualified name.  |
| public static boolean                                                                                      | [isValidQualifiedNameChar](#isvalidqualifiednamechar)(char c)                                                                     | Checks if the given character is valid in a qualified name.     |

## Method Details

### simplifyNames

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplifyNames([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Changes all qualified names in a string into unqualified names.

**Returns:**

The input string, with all qualified names changed to unqualified names.


---

### isValidSimpleNameChar

public static boolean isValidSimpleNameChar(char c)

Checks if the given character is valid in an unqualified name.

**Returns:**

Whether or not the character is valid in an unqualified name.


---

### isValidQualifiedNameChar

public static boolean isValidQualifiedNameChar(char c)

Checks if the given character is valid in a qualified name.

**Returns:**

Whether or not the character is valid in a qualified name.


---

