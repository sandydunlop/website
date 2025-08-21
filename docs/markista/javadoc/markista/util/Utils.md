Package [io.github.sandydunlop.markista.util](index.md)

# Class Utils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.Utils<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __Utils__</span>

A set of utility methods for changing between qualified and unqualified names.


## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Utils()     |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                         | Description                                                               |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [removeGenerics](#removegenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                            | Removes the generic type and its surrounding <> from a string, if present |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                               | Removes parentheses and what they contain from an expression              |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [simplifyNames](#simplifynames)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                              | Changes all qualified names in a string into unqualified names.           |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyNamesLoop](#simplifynamesloop)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)                                                                    |                                                                           |
| private static boolean                                                                                      | [shouldReplaceQualifiedWithSimple](#shouldreplacequalifiedwithsimple)(int qualifiedStart, int simpleStart, int i, int length, char c)                                                                          |                                                                           |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [replaceQualifiedWithSimple](#replacequalifiedwithsimple)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i) |                                                                           |
| public static boolean                                                                                       | [isValidSimpleNameChar](#isvalidsimplenamechar)(char c)                                                                                                                                                        | Checks if the given character is valid in an unqualified name.            |
| public static boolean                                                                                       | [isValidQualifiedNameChar](#isvalidqualifiednamechar)(char c)                                                                                                                                                  | Checks if the given character is valid in a qualified name.               |
| public static boolean                                                                                       | [isNullOrEmpty](#isnullorempty)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                              | Checks if a string is null or empty                                       |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [inOneLine](#inoneline)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                      | Removes new line characters from a string, replacing them with spaces     |

## Method Details

### removeGenerics

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeGenerics__</span>

Removes the generic type and its surrounding <> from a string, if present

**Returns:**

The string with the generic type and surrounding <> removed


---

### removeParentheses

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeParentheses__</span>

Removes parentheses and what they contain from an expression

**Returns:**

The expression with the parentheses removed


---

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

### isNullOrEmpty

<span style="font-family: monospace; font-size: 80%;">public static boolean __isNullOrEmpty__</span>

Checks if a string is null or empty

**Returns:**

True if the string is either null or empty


---

### inOneLine

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __inOneLine__</span>

Removes new line characters from a string, replacing them with spaces

**Returns:**

The string, with newlines converted to spaces


---

