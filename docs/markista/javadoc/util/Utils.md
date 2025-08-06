Package [io.github.sandydunlop.markista.util](index.md)

# Class Utils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.Utils<br/>
<br/>

----

A set of utility methods for changing between qualified and unqualified names.


## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Utils()     |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                         | Description                                                               |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [removeGenerics](#removegenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                            | Removes the generic type and its surrounding <> from a string, if present |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                               | Removes parentheses and what they contain from an expression              |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [simplifyNames](#simplifynames)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                              | Changes all qualified names in a string into unqualified names.           |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyNamesLoop](#simplifynamesloop)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)                                                                    |                                                                           |
| private static boolean                                                                                      | [shouldReplaceQualifiedWithSimple](#shouldreplacequalifiedwithsimple)(int qualifiedStart, int simpleStart, int i, int length, char c)                                                                          |                                                                           |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [replaceQualifiedWithSimple](#replacequalifiedwithsimple)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i) |                                                                           |
| static boolean                                                                                              | [isValidSimpleNameChar](#isvalidsimplenamechar)(char c)                                                                                                                                                        | Checks if the given character is valid in an unqualified name.            |
| static boolean                                                                                              | [isValidQualifiedNameChar](#isvalidqualifiednamechar)(char c)                                                                                                                                                  | Checks if the given character is valid in a qualified name.               |
| static boolean                                                                                              | [isNullOrEmpty](#isnullorempty)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                              | Checks if a string is null or empty                                       |
| static boolean                                                                                              | [isNullOrEmpty](#isnullorempty)([Text](../model/Text.md) text)                                                                                                                                                 | Checks if a Text object is null or empty                                  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [inOneLine](#inoneline)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                      | Removes new line characters from a string, replacing them with spaces     |

## Method Details

### removeGenerics

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) removeGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Removes the generic type and its surrounding <> from a string, if present

**Parameters:**

`str` - The string

**Returns:**

The string with the generic type and surrounding <> removed


---

### removeParentheses

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) removeParentheses([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)

Removes parentheses and what they contain from an expression

**Parameters:**

`expression` - An expression such as `classname.method(parameter)`.

**Returns:**

The expression with the parentheses removed


---

### simplifyNames

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplifyNames([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Changes all qualified names in a string into unqualified names.

**Parameters:**

`str` - A string that may contain one or more qualified names.

**Returns:**

The input string, with all qualified names changed to unqualified names.


---

### simplifyNamesLoop

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplifyNamesLoop([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)




---

### shouldReplaceQualifiedWithSimple

private static boolean shouldReplaceQualifiedWithSimple(int qualifiedStart, int simpleStart, int i, int length, char c)




---

### replaceQualifiedWithSimple

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) replaceQualifiedWithSimple([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i)




---

### isValidSimpleNameChar

static boolean isValidSimpleNameChar(char c)

Checks if the given character is valid in an unqualified name.

**Parameters:**

`c` - The character to check.

**Returns:**

Whether or not the character is valid in an unqualified name.


---

### isValidQualifiedNameChar

static boolean isValidQualifiedNameChar(char c)

Checks if the given character is valid in a qualified name.

**Parameters:**

`c` - The character to check.

**Returns:**

Whether or not the character is valid in a qualified name.


---

### isNullOrEmpty

static boolean isNullOrEmpty([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Checks if a string is null or empty

**Parameters:**

`str` - The string

**Returns:**

True if the string is either null or empty


---

### isNullOrEmpty

static boolean isNullOrEmpty([Text](../model/Text.md) text)

Checks if a Text object is null or empty

**Parameters:**

`text` - The Text object

**Returns:**

True if the Text object is either null or empty


---

### inOneLine

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) inOneLine([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Removes new line characters from a string, replacing them with spaces

**Parameters:**

`str` - The string

**Returns:**

The string, with newlines converted to spaces


---

