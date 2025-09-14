Package [io.github.sandydunlop.markista.model](index.md)

# Class VariableType
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.VariableType<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)

Direct Known Subtypes:<br/>
    [TypeParameter](VariableType.TypeParameter.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __VariableType__</span>


See Java Language Specification (JLS) [Chapter 4. Types, Values, and Variables](https://docs.oracle.com/javase/specs/jls/se24/html/jls-4.html).


## Nested Class Summary

| Modifier and Type | Class                                                       | Description |
|-------------------|-------------------------------------------------------------|-------------|
| public static     | [VariableType.Generic](VariableType.Generic.md)             |             |
| public static     | [VariableType.Sequence](VariableType.Sequence.md)           |             |
| public static     | [VariableType.TypeParameter](VariableType.TypeParameter.md) |             |



## Field Summary

| Modifier and Type                                                                                      | Field                                                 | Description |
|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-------------|
| protected int                                                                                          | [arrayDimensions](#arraydimensions)                   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)   | [fullTypeName](#fulltypename)                         |             |
| protected [Link](Link.md)                                                                              | [link](#link)                                         |             |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [rawTypeName](#rawtypename)                           |             |
| private static final long                                                                              | [serialVersionUID](#serialversionuid)                 |             |
| private [VariableType](VariableType.md)                                                                | [typeParameterDeclaration](#typeparameterdeclaration) |             |



## Constructor Summary

| Constructor    | Description |
|----------------|-------------|
| VariableType() |             |



## Method Summary

| Modifier and Type                                                                                                                                                                                                          | Method                                                                                                                                                                                                                                                       | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public boolean                                                                                                                                                                                                             | [isArray](#isarray)()                                                                                                                                                                                                                                        |             |
| public int                                                                                                                                                                                                                 | [arrayDimensions](#arraydimensions)()                                                                                                                                                                                                                        |             |
| public static [VariableType](VariableType.md)                                                                                                                                                                              | [parse](#parse)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)                                                                                                                                       |             |
| private static int                                                                                                                                                                                                         | [matchingClosingChevron](#matchingclosingchevron)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) string, int pos)                                                                                              |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                        | [getRawTypeName](#getrawtypename)()                                                                                                                                                                                                                          |             |
| public [Link](Link.md)                                                                                                                                                                                                     | [getLink](#getlink)()                                                                                                                                                                                                                                        |             |
| public void                                                                                                                                                                                                                | [setFullTypeName](#setfulltypename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                       |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                        | [getFullTypeName](#getfulltypename)()                                                                                                                                                                                                                        |             |
| public [VariableType](VariableType.md)                                                                                                                                                                                     | [getTypeParameterDeclaration](#gettypeparameterdeclaration)()                                                                                                                                                                                                |             |
| public [Generic](VariableType.Generic.md)                                                                                                                                                                                  | [asGeneric](#asgeneric)()                                                                                                                                                                                                                                    |             |
| public [Sequence](VariableType.Sequence.md)                                                                                                                                                                                | [asSequence](#assequence)()                                                                                                                                                                                                                                  |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                        | [toString](#tostring)()                                                                                                                                                                                                                                      |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                       | [stringify](#stringify)([VariableType](VariableType.md) typeReference)                                                                                                                                                                                       |             |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                | [boundingConstraint](#boundingconstraint)([TypeParameter](VariableType.TypeParameter.md) type)                                                                                                                                                               |             |
| private static [TypeParameter](VariableType.TypeParameter.md)                                                                                                                                                              | [parseType](#parsetype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                    |             |
| private static [TypeParameter](VariableType.TypeParameter.md)                                                                                                                                                              | [parseSequence](#parsesequence)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) before, [TypeParameter](VariableType.TypeParameter.md) inner)                                                                   |             |
| private static [TypeParameter](VariableType.TypeParameter.md)                                                                                                                                                              | [parseGeneric](#parsegeneric)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                              |             |
| private static [Pair](Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [parseBoundingConstraint](#parseboundingconstraint)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) keyword, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type) |             |
| private static void                                                                                                                                                                                                        | [parseArray](#parsearray)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, [TypeParameter](VariableType.TypeParameter.md) type)                                                                             |             |



## Field Details

### arrayDimensions

<span style="font-family: monospace; font-size: 80%;">protected int __arrayDimensions__</span>




---

### fullTypeName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullTypeName__</span>




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

### typeParameterDeclaration

<span style="font-family: monospace; font-size: 80%;">private [VariableType](VariableType.md) __typeParameterDeclaration__</span>




---


## Method Details

### isArray

<span style="font-family: monospace; font-size: 80%;">public boolean __isArray__()</span>




---

### arrayDimensions

<span style="font-family: monospace; font-size: 80%;">public int __arrayDimensions__()</span>




---

### parse

<span style="font-family: monospace; font-size: 80%;">public static [VariableType](VariableType.md) __parse__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)</span>




---

### matchingClosingChevron

<span style="font-family: monospace; font-size: 80%;">private static int __matchingClosingChevron__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) string, int pos)</span>




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

### getTypeParameterDeclaration

<span style="font-family: monospace; font-size: 80%;">public [VariableType](VariableType.md) __getTypeParameterDeclaration__()</span>




---

### asGeneric

<span style="font-family: monospace; font-size: 80%;">public [Generic](VariableType.Generic.md) __asGeneric__()</span>




---

### asSequence

<span style="font-family: monospace; font-size: 80%;">public [Sequence](VariableType.Sequence.md) __asSequence__()</span>




---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>




---

### stringify

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __stringify__([VariableType](VariableType.md) typeReference)</span>




---

### boundingConstraint

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __boundingConstraint__([TypeParameter](VariableType.TypeParameter.md) type)</span>




---

### parseType

<span style="font-family: monospace; font-size: 80%;">private static [TypeParameter](VariableType.TypeParameter.md) __parseType__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>




---

### parseSequence

<span style="font-family: monospace; font-size: 80%;">private static [TypeParameter](VariableType.TypeParameter.md) __parseSequence__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) before, [TypeParameter](VariableType.TypeParameter.md) inner)</span>




---

### parseGeneric

<span style="font-family: monospace; font-size: 80%;">private static [TypeParameter](VariableType.TypeParameter.md) __parseGeneric__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>




---

### parseBoundingConstraint

<span style="font-family: monospace; font-size: 80%;">private static [Pair](Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __parseBoundingConstraint__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) keyword, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type)</span>




---

### parseArray

<span style="font-family: monospace; font-size: 80%;">private static void __parseArray__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, [TypeParameter](VariableType.TypeParameter.md) type)</span>




---

