Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeReference
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.TypeReference<br/>
<br/>
All Implemented Interfaces:<br/>
    [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)

Direct Known Subtypes:<br/>
    [TypeReference.Generic](TypeReference.Generic.md), [TypeReference.Array](TypeReference.Array.md), [TypeReference.Sequence](TypeReference.Sequence.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __TypeReference__</span>


## Nested Class Summary

| Modifier and Type | Class                                               | Description |
|-------------------|-----------------------------------------------------|-------------|
| public static     | [TypeReference.Array](TypeReference.Array.md)       |             |
| public static     | [TypeReference.Generic](TypeReference.Generic.md)   |             |
| public static     | [TypeReference.Sequence](TypeReference.Sequence.md) |             |



## Field Summary

| Modifier and Type                                                                                      | Field                                 | Description |
|--------------------------------------------------------------------------------------------------------|---------------------------------------|-------------|
| private [Link](Link.md)                                                                                | [link](#link)                         |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [qualifiedName](#qualifiedname)       |             |
| private static final long                                                                              | [serialVersionUID](#serialversionuid) |             |
| private [Text](Text.md)                                                                                | [text](#text)                         |             |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [typeString](#typestring)             |             |



## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| TypeReference() |             |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                   | Description |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public static [TypeReference](TypeReference.md)                                                     | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)                         |             |
| public static [TypeReference](TypeReference.md)                                                     | [empty](#empty)()                                                                                                                        |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getTypeString](#gettypestring)()                                                                                                        |             |
| public void                                                                                         | [setLink](#setlink)([Link](Link.md) ref)                                                                                                 |             |
| public [Link](Link.md)                                                                              | [getLink](#getlink)()                                                                                                                    |             |
| public void                                                                                         | [setText](#settext)([Text](Text.md) text)                                                                                                |             |
| public [Text](Text.md)                                                                              | [getText](#gettext)()                                                                                                                    |             |
| public void                                                                                         | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getQualifiedName](#getqualifiedname)()                                                                                                  |             |
| public [TypeReference.Array](TypeReference.Array.md)                                                | [asArray](#asarray)()                                                                                                                    |             |
| public [TypeReference.Generic](TypeReference.Generic.md)                                            | [asGeneric](#asgeneric)()                                                                                                                |             |
| public [TypeReference.Sequence](TypeReference.Sequence.md)                                          | [asSequence](#assequence)()                                                                                                              |             |
| private static [TypeReference](TypeReference.md)                                                    | [parse](#parse)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) targetName)                 |             |
| private static [TypeReference](TypeReference.md)                                                    | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)          |             |
| public static [TypeReference](TypeReference.md)                                                     | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)  |             |



## Field Details

### link

<span style="font-family: monospace; font-size: 80%;">private [Link](Link.md) __link__</span>




---

### qualifiedName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __qualifiedName__</span>




---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### text

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __text__</span>




---

### typeString

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __typeString__</span>




---


## Method Details

### to

<span style="font-family: monospace; font-size: 80%;">public static [TypeReference](TypeReference.md) __to__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)</span>




---

### empty

<span style="font-family: monospace; font-size: 80%;">public static [TypeReference](TypeReference.md) __empty__()</span>




---

### getTypeString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getTypeString__()</span>




---

### setLink

<span style="font-family: monospace; font-size: 80%;">public void __setLink__([Link](Link.md) ref)</span>




---

### getLink

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getLink__()</span>




---

### setText

<span style="font-family: monospace; font-size: 80%;">public void __setText__([Text](Text.md) text)</span>




---

### getText

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getText__()</span>




---

### setQualifiedName

<span style="font-family: monospace; font-size: 80%;">public void __setQualifiedName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### getQualifiedName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getQualifiedName__()</span>




---

### asArray

<span style="font-family: monospace; font-size: 80%;">public [TypeReference.Array](TypeReference.Array.md) __asArray__()</span>




---

### asGeneric

<span style="font-family: monospace; font-size: 80%;">public [TypeReference.Generic](TypeReference.Generic.md) __asGeneric__()</span>




---

### asSequence

<span style="font-family: monospace; font-size: 80%;">public [TypeReference.Sequence](TypeReference.Sequence.md) __asSequence__()</span>




---

### parse

<span style="font-family: monospace; font-size: 80%;">private static [TypeReference](TypeReference.md) __parse__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) targetName)</span>




---

### linkGenerics

<span style="font-family: monospace; font-size: 80%;">private static [TypeReference](TypeReference.md) __linkGenerics__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>




---

### splitAndLink

<span style="font-family: monospace; font-size: 80%;">public static [TypeReference](TypeReference.md) __splitAndLink__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)</span>




---

