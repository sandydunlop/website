Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeReference
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.TypeReference<br/>
<br/>
All Implemented Interfaces:<br/>
    [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __TypeReference__</span>


## Field Summary

| Modifier and Type                                                                                    | Field                                 | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------|-------------|
| private [Link](Link.md)                                                                              | [link](#link)                         |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [qualifiedName](#qualifiedname)       |             |
| private static final long                                                                            | [serialVersionUID](#serialversionuid) |             |
| private [Text](Text.md)                                                                              | [text](#text)                         |             |



## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| TypeReference() |             |



## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                                   | Description |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public [Link](Link.md)                                                                              | [getLink](#getlink)()                                                                                                                    |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getQualifiedName](#getqualifiedname)()                                                                                                  |             |
| public [Text](Text.md)                                                                              | [getText](#gettext)()                                                                                                                    |             |
| public void                                                                                         | [setLink](#setlink)([Link](Link.md) ref)                                                                                                 |             |
| public void                                                                                         | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |             |
| public void                                                                                         | [setText](#settext)([Text](Text.md) text)                                                                                                |             |
| public static [TypeReference](TypeReference.md)                                                     | [to](#to)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)                         |             |
| public static [TypeReference](TypeReference.md)                                                     | [to](#to)([Link](Link.md) r, [Text](Text.md) t)                                                                                          |             |



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


## Method Details

### getLink

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getLink__()</span>




---

### getQualifiedName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getQualifiedName__()</span>




---

### getText

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getText__()</span>




---

### setLink

<span style="font-family: monospace; font-size: 80%;">public void __setLink__([Link](Link.md) ref)</span>




---

### setQualifiedName

<span style="font-family: monospace; font-size: 80%;">public void __setQualifiedName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### setText

<span style="font-family: monospace; font-size: 80%;">public void __setText__([Text](Text.md) text)</span>




---

### to

<span style="font-family: monospace; font-size: 80%;">public static [TypeReference](TypeReference.md) __to__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeName)</span>




---

### to

<span style="font-family: monospace; font-size: 80%;">public static [TypeReference](TypeReference.md) __to__([Link](Link.md) r, [Text](Text.md) t)</span>




---

