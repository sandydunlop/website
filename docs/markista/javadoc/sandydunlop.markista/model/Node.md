Package [io.github.sandydunlop.markista.model](index.md)

# Class Node
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.Node<br/>
<br/>

----


## Nested Class Summary

| Modifier and Type | Class                                         | Description |
|-------------------|-----------------------------------------------|-------------|
|                   | [Node.ModifierSorter](Node.ModifierSorter.md) |             |

## Field Summary

| Modifier and Type                                                                                                                                                                                                         | Field                               | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|-------------|
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                    | [simpleName](#simplename)           |             |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                    | [qualifiedName](#qualifiedname)     |             |
| protected [PackageNode](PackageNode.md)                                                                                                                                                                                   | [packageNode](#packagenode)         |             |
| private [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)&gt; | [modifiers](#modifiers)             |             |
| private [Deprecation](Deprecation.md)                                                                                                                                                                                     | [deprecation](#deprecation)         |             |
| private [Text](Text.md)                                                                                                                                                                                                   | [deprecationText](#deprecationtext) |             |
| private [Text](Text.md)                                                                                                                                                                                                   | [since](#since)                     |             |
| protected [Text](Text.md)                                                                                                                                                                                                 | [firstSentence](#firstsentence)     |             |
| private [Text](Text.md)                                                                                                                                                                                                   | [body](#body)                       |             |
| private [Text](Text.md)                                                                                                                                                                                                   | [fullBody](#fullbody)               |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt;                                                                                         | [references](#references)           |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Node()      |             |

## Method Summary

| Modifier and Type                                                                                                                                                                                                 | Method                                                                                                                                                                                                                                                              | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)&gt; | [getModifiers](#getmodifiers)()                                                                                                                                                                                                                                     |             |
| void                                                                                                                                                                                                              | [setDeprecation](#setdeprecation)([Deprecation](Deprecation.md) deprecation)                                                                                                                                                                                        |             |
| [Deprecation](Deprecation.md)                                                                                                                                                                                     | [getDeprecation](#getdeprecation)()                                                                                                                                                                                                                                 |             |
| void                                                                                                                                                                                                              | [setDeprecationText](#setdeprecationtext)([Text](Text.md) text)                                                                                                                                                                                                     |             |
| [Text](Text.md)                                                                                                                                                                                                   | [getDeprecationText](#getdeprecationtext)()                                                                                                                                                                                                                         |             |
| void                                                                                                                                                                                                              | [setSince](#setsince)([Text](Text.md) text)                                                                                                                                                                                                                         |             |
| [Text](Text.md)                                                                                                                                                                                                   | [getSince](#getsince)()                                                                                                                                                                                                                                             |             |
| void                                                                                                                                                                                                              | [setFirstSentence](#setfirstsentence)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; doc) |             |
| [Text](Text.md)                                                                                                                                                                                                   | [getFirstSentence](#getfirstsentence)()                                                                                                                                                                                                                             |             |
| void                                                                                                                                                                                                              | [setBody](#setbody)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; doc)                   |             |
| [Text](Text.md)                                                                                                                                                                                                   | [getBody](#getbody)()                                                                                                                                                                                                                                               |             |
| void                                                                                                                                                                                                              | [setFullBody](#setfullbody)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; doc)           |             |
| [Text](Text.md)                                                                                                                                                                                                   | [getFullBody](#getfullbody)()                                                                                                                                                                                                                                       |             |
| void                                                                                                                                                                                                              | [setReferences](#setreferences)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt; refs)                                                                                                     |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt;                                                                                         | [getReferences](#getreferences)()                                                                                                                                                                                                                                   |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                      | [getModifiersString](#getmodifiersstring)()                                                                                                                                                                                                                         |             |
| void                                                                                                                                                                                                              | [sortModifiers](#sortmodifiers)()                                                                                                                                                                                                                                   |             |

## Field Details

### simpleName



### qualifiedName



### packageNode



### modifiers



### deprecation



### deprecationText



### since



### firstSentence



### body



### fullBody



### references




## Method Details

### getModifiers

[Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)&gt; getModifiers()



### setDeprecation

void setDeprecation([Deprecation](Deprecation.md) deprecation)



### getDeprecation

[Deprecation](Deprecation.md) getDeprecation()



### setDeprecationText

void setDeprecationText([Text](Text.md) text)



### getDeprecationText

[Text](Text.md) getDeprecationText()



### setSince

void setSince([Text](Text.md) text)



### getSince

[Text](Text.md) getSince()



### setFirstSentence

void setFirstSentence([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; doc)



### getFirstSentence

[Text](Text.md) getFirstSentence()



### setBody

void setBody([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; doc)



### getBody

[Text](Text.md) getBody()



### setFullBody

void setFullBody([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; doc)



### getFullBody

[Text](Text.md) getFullBody()



### setReferences

void setReferences([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt; refs)



### getReferences

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](Reference.md)&gt; getReferences()



### getModifiersString

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getModifiersString()



### sortModifiers

void sortModifiers()



