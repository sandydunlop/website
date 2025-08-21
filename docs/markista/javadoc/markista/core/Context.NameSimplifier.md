Package [io.github.sandydunlop.markista.core](index.md)

# Class Context.NameSimplifier
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.core.Context.NameSimplifier<br/>
<br/>
Enclosing Class:<br/>
    [io.github.sandydunlop.markista.core.Context](Context.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __Context.NameSimplifier__</span>


## Constructor Summary

| Constructor              | Description |
|--------------------------|-------------|
| Context.NameSimplifier() |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                         | Description                                                     |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [simplifyNames](#simplifynames)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                              | Changes all qualified names in a string into unqualified names. |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyNamesLoop](#simplifynamesloop)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)                                                                    |                                                                 |
| private static boolean                                                                                      | [shouldReplaceQualifiedWithSimple](#shouldreplacequalifiedwithsimple)(int qualifiedStart, int simpleStart, int i, int length, char c)                                                                          |                                                                 |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [replaceQualifiedWithSimple](#replacequalifiedwithsimple)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i) |                                                                 |
| public static boolean                                                                                       | [isValidSimpleNameChar](#isvalidsimplenamechar)(char c)                                                                                                                                                        | Checks if the given character is valid in an unqualified name.  |
| public static boolean                                                                                       | [isValidQualifiedNameChar](#isvalidqualifiednamechar)(char c)                                                                                                                                                  | Checks if the given character is valid in a qualified name.     |

## Method Details

### simplifyNames

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simplifyNames__</span>

Changes all qualified names in a string into unqualified names.

**Returns:**

The input string, with all qualified names changed to unqualified names.


---

### simplifyNamesLoop

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simplifyNamesLoop__</span>




---

### shouldReplaceQualifiedWithSimple

<span style="font-family: monospace; font-size: 80%;">private static boolean __shouldReplaceQualifiedWithSimple__</span>




---

### replaceQualifiedWithSimple

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __replaceQualifiedWithSimple__</span>




---

### isValidSimpleNameChar

<span style="font-family: monospace; font-size: 80%;">public static boolean __isValidSimpleNameChar__</span>

Checks if the given character is valid in an unqualified name.

**Returns:**

Whether or not the character is valid in an unqualified name.


---

### isValidQualifiedNameChar

<span style="font-family: monospace; font-size: 80%;">public static boolean __isValidQualifiedNameChar__</span>

Checks if the given character is valid in a qualified name.

**Returns:**

Whether or not the character is valid in a qualified name.


---

