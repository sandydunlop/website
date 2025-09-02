Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeReference
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.TypeReference<br/>
<br/>
All Implemented Interfaces:<br/>
    [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)

Direct Known Subtypes:<br/>
    [TypeReference.TypeParameter](TypeReference.TypeParameter.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __TypeReference__</span>


## Nested Class Summary

| Modifier and Type | Class                                                         | Description |
|-------------------|---------------------------------------------------------------|-------------|
| public static     | [TypeReference.Generic](TypeReference.Generic.md)             |             |
| public static     | [TypeReference.Sequence](TypeReference.Sequence.md)           |             |
| public static     | [TypeReference.TypeParameter](TypeReference.TypeParameter.md) |             |



## Field Summary

| Modifier and Type                                                                                      | Field                                     | Description |
|--------------------------------------------------------------------------------------------------------|-------------------------------------------|-------------|
| protected int                                                                                          | [arrayDimensions](#arraydimensions)       |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [fullTypeName](#fulltypename)             |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [genericMethodParam](#genericmethodparam) |             |
| protected [Link](Link.md)                                                                              | [link](#link)                             |             |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [rawTypeName](#rawtypename)               |             |
| private static final long                                                                              | [serialVersionUID](#serialversionuid)     |             |



## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| TypeReference() |             |



## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                                                                    | Description |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public boolean                                                                                       | [isArray](#isarray)()                                                                                                                                                                                     |             |
| public int                                                                                           | [arrayDimensions](#arraydimensions)()                                                                                                                                                                     |             |
| public static [TypeReference](TypeReference.md)                                                      | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullTypeName)                                                                                      |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [getRawTypeName](#getrawtypename)()                                                                                                                                                                       |             |
| public [Link](Link.md)                                                                               | [getLink](#getlink)()                                                                                                                                                                                     |             |
| public void                                                                                          | [setFullTypeName](#setfulltypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                    |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [getFullTypeName](#getfulltypename)()                                                                                                                                                                     |             |
| public [TypeReference.Generic](TypeReference.Generic.md)                                             | [asGeneric](#asgeneric)()                                                                                                                                                                                 |             |
| public [TypeReference.Sequence](TypeReference.Sequence.md)                                           | [asSequence](#assequence)()                                                                                                                                                                               |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)  | [toString](#tostring)()                                                                                                                                                                                   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [stringify](#stringify)([TypeReference](TypeReference.md) typeReference)                                                                                                                                  |             |
| private static [TypeReference.TypeParameter](TypeReference.TypeParameter.md)                         | [parse](#parse)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)                                                                                    |             |
| private static [TypeReference.TypeParameter](TypeReference.TypeParameter.md)                         | [parseSequence](#parsesequence)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) before, [TypeReference.TypeParameter](TypeReference.TypeParameter.md) inner) |             |
| private static [TypeReference.TypeParameter](TypeReference.TypeParameter.md)                         | [parseGeneric](#parsegeneric)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                           |             |
| private static void                                                                                  | [parseArray](#parsearray)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, [TypeReference.TypeParameter](TypeReference.TypeParameter.md) type)           |             |



## Field Details

### arrayDimensions

<span style="font-family: monospace; font-size: 80%;">protected int __arrayDimensions__</span>




---

### fullTypeName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullTypeName__</span>




---

### genericMethodParam

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __genericMethodParam__</span>




---

### link

<span style="font-family: monospace; font-size: 80%;">protected [Link](Link.md) __link__</span>




---

### rawTypeName

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __rawTypeName__</span>




---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---


## Method Details

### isArray

<span style="font-family: monospace; font-size: 80%;">public boolean __isArray__()</span>




---

### arrayDimensions

<span style="font-family: monospace; font-size: 80%;">public int __arrayDimensions__()</span>




---

### to

<span style="font-family: monospace; font-size: 80%;">public static [TypeReference](TypeReference.md) __to__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullTypeName)</span>




---

### getRawTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getRawTypeName__()</span>




---

### getLink

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getLink__()</span>




---

### setFullTypeName

<span style="font-family: monospace; font-size: 80%;">public void __setFullTypeName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### getFullTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getFullTypeName__()</span>




---

### asGeneric

<span style="font-family: monospace; font-size: 80%;">public [TypeReference.Generic](TypeReference.Generic.md) __asGeneric__()</span>




---

### asSequence

<span style="font-family: monospace; font-size: 80%;">public [TypeReference.Sequence](TypeReference.Sequence.md) __asSequence__()</span>




---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>




---

### stringify

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __stringify__([TypeReference](TypeReference.md) typeReference)</span>




---

### parse

<span style="font-family: monospace; font-size: 80%;">private static [TypeReference.TypeParameter](TypeReference.TypeParameter.md) __parse__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)</span>




---

### parseSequence

<span style="font-family: monospace; font-size: 80%;">private static [TypeReference.TypeParameter](TypeReference.TypeParameter.md) __parseSequence__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) before, [TypeReference.TypeParameter](TypeReference.TypeParameter.md) inner)</span>




---

### parseGeneric

<span style="font-family: monospace; font-size: 80%;">private static [TypeReference.TypeParameter](TypeReference.TypeParameter.md) __parseGeneric__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>




---

### parseArray

<span style="font-family: monospace; font-size: 80%;">private static void __parseArray__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, [TypeReference.TypeParameter](TypeReference.TypeParameter.md) type)</span>




---

