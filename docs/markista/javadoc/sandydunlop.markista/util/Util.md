Package [io.github.sandydunlop.markista.util](index.md)

# Class Util
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.Util<br/>
<br/>

----


## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Util()      |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                         | Description                                                     |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [removeGenerics](#removegenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                            |                                                                 |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                               | Removes parentheses and what they contain from an expression    |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [simplifyNames](#simplifynames)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                              | Changes all qualified names in a string into unqualified names. |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyNamesLoop](#simplifynamesloop)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)                                                                    |                                                                 |
| private static boolean                                                                                      | [shouldReplaceQualifiedWithSimple](#shouldreplacequalifiedwithsimple)(int qualifiedStart, int simpleStart, int i, int length, char c)                                                                          |                                                                 |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [replaceQualifiedWithSimple](#replacequalifiedwithsimple)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i) |                                                                 |
| static boolean                                                                                              | [isValidSimpleNameChar](#isvalidsimplenamechar)(char c)                                                                                                                                                        | Checks if the given character is valid in an unqualified name.  |
| static boolean                                                                                              | [isValidQualifiedNameChar](#isvalidqualifiednamechar)(char c)                                                                                                                                                  | Checks if the given character is valid in a qualified name.     |
| static boolean                                                                                              | [isNullOrEmpty](#isnullorempty)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)                                                                                |                                                                 |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [inOneLine](#inoneline)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)                                                                                     |                                                                 |

## Method Details

### removeGenerics

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) removeGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)



### removeParentheses

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) removeParentheses([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)

Removes parentheses and what they contain from an expression

**Parameters:**

`expression` - An expression such as `classname.method(parameter)`.

**Returns:**

The expression with the parentheses removed

### simplifyNames

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplifyNames([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Changes all qualified names in a string into unqualified names.

**Parameters:**

`str` - A string that may contain one or more qualified names.

**Returns:**

The input string, with all qualified names changed to unqualified names.

### simplifyNamesLoop

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplifyNamesLoop([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)



### shouldReplaceQualifiedWithSimple

private static boolean shouldReplaceQualifiedWithSimple(int qualifiedStart, int simpleStart, int i, int length, char c)



### replaceQualifiedWithSimple

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) replaceQualifiedWithSimple([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i)



### isValidSimpleNameChar

static boolean isValidSimpleNameChar(char c)

Checks if the given character is valid in an unqualified name.

**Parameters:**

`c` - The character to check.

**Returns:**

Whether or not the character is valid in an unqualified name.

### isValidQualifiedNameChar

static boolean isValidQualifiedNameChar(char c)

Checks if the given character is valid in a qualified name.

**Parameters:**

`c` - The character to check.

**Returns:**

Whether or not the character is valid in a qualified name.

### isNullOrEmpty

static boolean isNullOrEmpty([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)



### inOneLine

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) inOneLine([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)



