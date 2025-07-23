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

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                                                       | Description                                                                                                       |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAutoLink](#mdautolink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier, boolean simplify)                                                                                         | Create a markdown link, automatically deciding what kind of link to make                                          |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)                                                                                                      |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean simplifiy)                                                                                           | Changes qualified generic type names to unqualified generic type names and adds links to their API documentation. |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [removeGenerics](#removegenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                          |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                                                             | Removes parentheses and what they contain from an expression                                                      |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [simplifyNames](#simplifynames)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                            | Changes all qualified names in a string into unqualified names.                                                   |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyNamesLoop](#simplifynamesloop)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) input)                                                                                                  |                                                                                                                   |
| private static boolean                                                                                      | [shouldReplaceQualifiedWithSimple](#shouldreplacequalifiedwithsimple)(int qualifiedStart, int simpleStart, int i, int length, char c)                                                                                                        |                                                                                                                   |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [replaceQualifiedWithSimple](#replacequalifiedwithsimple)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simplified, int qualifiedStart, int simpleStart, int i)                               |                                                                                                                   |
| static boolean                                                                                              | [isValidSimpleNameChar](#isvalidsimplenamechar)(char c)                                                                                                                                                                                      | Checks if the given character is valid in an unqualified name.                                                    |
| static boolean                                                                                              | [isValidQualifiedNameChar](#isvalidqualifiednamechar)(char c)                                                                                                                                                                                | Checks if the given character is valid in a qualified name.                                                       |
| static boolean                                                                                              | [isNullOrEmpty](#isnullorempty)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)                                                                                                              |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [inOneLine](#inoneline)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)                                                                                                                   |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAnchor](#mdanchor)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                                                                   |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAnchorLink](#mdanchorlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)                                                                                                           |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)                                                                                                      |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdDocumentLink](#mddocumentlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName) |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [mdAutoLink](#mdautolink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier)                                                                                                           |                                                                                                                   |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                          |                                                                                                                   |

## Method Details

### mdAutoLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAutoLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier, boolean simplify)

Create a markdown link, automatically deciding what kind of link to make

**Parameters:**

`identifier` - a package, type, or method identifier

`simplify` - if true, the fully simplified version of the identifier is shown

**Returns:**

markdown text for a link to a document for the specified identifier or an anchor link

### splitAndLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) splitAndLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)



### linkGenerics

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) linkGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean simplifiy)

Changes qualified generic type names to unqualified generic type names and adds links to their API documentation.

**Parameters:**

`str` - A string containing a qualified generic name.

**Returns:**

A string with the qualified names changed to unqualified names and links to types added

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



### mdAnchor

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAnchor([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)



### mdAnchorLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAnchorLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase)



### mdDocumentLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdDocumentLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)



### mdDocumentLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdDocumentLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) phrase, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) docName)



### mdAutoLink

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mdAutoLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) identifier)



### escape

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)



