Package [io.github.sandydunlop.markista.common](index.md)

# Class Utils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.common.Utils<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __Utils__</span>

A set of utility methods for changing between qualified and unqualified names.


## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Utils()     |             |



## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                         | Description                                                     |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                               | Removes parentheses and what they contain from an expression    |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [simplifyNames](#simplifynames)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                              | Changes all qualified names in a string into unqualified names. |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyNamesLoop](#simplifynamesloop)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)                                                                    |                                                                 |
| private static boolean                                                                                      | [shouldReplaceQualifiedWithSimple](#shouldreplacequalifiedwithsimple)(int qualifiedStart, int simpleStart, int i, int length, char c)                                                                          |                                                                 |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [replaceQualifiedWithSimple](#replacequalifiedwithsimple)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i) |                                                                 |
| private static boolean                                                                                      | [isValidSimpleNameChar](#isvalidsimplenamechar)(char c)                                                                                                                                                        | Checks if the given character is valid in an unqualified name.  |
| private static boolean                                                                                      | [isValidQualifiedNameChar](#isvalidqualifiednamechar)(char c)                                                                                                                                                  | Checks if the given character is valid in a qualified name.     |



## Method Details

### removeParentheses

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeParentheses__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)</span>

Removes parentheses and what they contain from an expression

**Returns:**

The expression with the parentheses removed


---

### simplifyNames

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simplifyNames__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Changes all qualified names in a string into unqualified names.

**Returns:**

The input string, with all qualified names changed to unqualified names.


---

### simplifyNamesLoop

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simplifyNamesLoop__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)</span>




---

### shouldReplaceQualifiedWithSimple

<span style="font-family: monospace; font-size: 80%;">private static boolean __shouldReplaceQualifiedWithSimple__(int qualifiedStart, int simpleStart, int i, int length, char c)</span>




---

### replaceQualifiedWithSimple

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __replaceQualifiedWithSimple__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i)</span>




---

### isValidSimpleNameChar

<span style="font-family: monospace; font-size: 80%;">private static boolean __isValidSimpleNameChar__(char c)</span>

Checks if the given character is valid in an unqualified name.

**Returns:**

Whether or not the character is valid in an unqualified name.


---

### isValidQualifiedNameChar

<span style="font-family: monospace; font-size: 80%;">private static boolean __isValidQualifiedNameChar__(char c)</span>

Checks if the given character is valid in a qualified name.

**Returns:**

Whether or not the character is valid in a qualified name.


---

