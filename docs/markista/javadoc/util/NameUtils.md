Package [io.github.sandydunlop.markista.util](index.md)

# Class NameUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.NameUtils<br/>
<br/>

----


## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| NameUtils() |             |

## Method Summary

| Modifier and Type                                                                                   | Method                                                        | Description                                                     |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------|-----------------------------------------------------------------|
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyNames](#simplifynames)(String str)                   | Changes all qualified names in a string into unqualified names. |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [simplifyGenerics](#simplifygenerics)(String str)             | Changes qualified generic names to unqualified generic names.   |
| static boolean                                                                                      | [isValidSimpleNameChar](#isvalidsimplenamechar)(char c)       | Checks if the given character is valid in an unqualified name.  |
| static boolean                                                                                      | [isValidQualifiedNameChar](#isvalidqualifiednamechar)(char c) | Checks if the given character is valid in a qualified name.     |

## Method Details

### simplifyNames

`static String simplifyNames(String str)`



Returns:

[The input string, with all qualified names changed to unqualified names.]

### simplifyGenerics

`static String simplifyGenerics(String str)`



Returns:

[A string with the qualified names changed to unqualified names.]

### isValidSimpleNameChar

`static boolean isValidSimpleNameChar(char c)`



Returns:

[Whether or not the character is valid in an unqualified name.]

### isValidQualifiedNameChar

`static boolean isValidQualifiedNameChar(char c)`



Returns:

[Whether or not the character is valid in a qualified name.]

