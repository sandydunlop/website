Package [io.github.sandydunlop.markista.assembler](index.md)

# Class TextAssembler
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.assembler.TextAssembler<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __TextAssembler__</span>


## Field Summary

| Modifier and Type                            | Field       | Description |
|----------------------------------------------|-------------|-------------|
| private static [Api](../model/Api.md)        | [api](#api) |             |
| private static [Context](../core/Context.md) | [ctx](#ctx) |             |



## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| TextAssembler() |             |



## Method Summary

| Modifier and Type                                                                                                                                                                                                                                                                                                                                                           | Method                                                                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                                                                                                                                                                                                                                                                                          | [addJavadocToRecords](#addjavadoctorecords)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                                          | [assembleTextAndLinks](#assembletextandlinks)([Api](../model/Api.md) a, [Context](../core/Context.md) context)                                                                                                                                                                                                                                                                                                                  | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.                             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                                                                                         | [baseTypeName](#basetypename)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                                                                                  | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                                                                                                                                                                                             | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |
| static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [MethodReference](../model/MethodReference.md)>> | [gatherOverriddenMethods](#gatheroverriddenmethods)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                                  |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [generateLinkTextsForParams](#generatelinktextsforparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)                                                                                                                                                                                                                                  |                                                                                                                      |
| private static void                                                                                                                                                                                                                                                                                                                                                         | [generateLinkTextsForReferences](#generatelinktextsforreferences)([Node](../model/Node.md) node)                                                                                                                                                                                                                                                                                                                                |                                                                                                                      |
| public static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                                                      | [link](#link)([Link](../model/Link.md) reference)                                                                                                                                                                                                                                                                                                                                                                               | Create a markdown link, automatically deciding what kind of link to make.                                            |
| public static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                                                      | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                                                                                                                                                                                 | Changes qualified generic type names to unqualified generic  type names and adds links to their API documentation.   |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](../model/MethodReference.md)>>                       | [listBySupertypeName](#listbysupertypename)([HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [MethodReference](../model/MethodReference.md)>> methodLookup1) |                                                                                                                      |
| static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                                                             | [processInheritDocTags](#processinheritdoctags)([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)                                                                                                                                                                                                                                                                                                         |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processInheritedMethods](#processinheritedmethods)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                                  |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processJavadocComments](#processjavadoccomments)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processMethod](#processmethod)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processModules](#processmodules)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processSubtypes](#processsubtypes)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processTypeNode](#processtypenode)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                      |
| private static void                                                                                                                                                                                                                                                                                                                                                         | [setDisplayName](#setdisplayname)([Link](../model/Link.md) reference, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod)                                                                                                                                                                                                                          |                                                                                                                      |
| public static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                                                      | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)                                                                                                                                                                                                                                                                                         | Creates markdown formatted text with links to types from a string.                                                   |
| static boolean                                                                                                                                                                                                                                                                                                                                                              | [typeHasMethod](#typehasmethod)([TypeNode](../model/TypeNode.md) typeNode, [MethodNode](../model/MethodNode.md) methodNode)                                                                                                                                                                                                                                                                                                     |                                                                                                                      |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">private static [Api](../model/Api.md) __api__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">private static [Context](../core/Context.md) __ctx__</span>




---


## Method Details

### addJavadocToRecords

<span style="font-family: monospace; font-size: 80%;">public static void __addJavadocToRecords__([Api](../model/Api.md) api)</span>




---

### assembleTextAndLinks

<span style="font-family: monospace; font-size: 80%;">public static void __assembleTextAndLinks__([Api](../model/Api.md) a, [Context](../core/Context.md) context)</span>

Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.
This is where we decide if the label for those links shows qualified names or simplified names.


---

### baseTypeName

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __baseTypeName__([MethodNode](../model/MethodNode.md) method)</span>




---

### escape

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __escape__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

### gatherOverriddenMethods

<span style="font-family: monospace; font-size: 80%;">static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [MethodReference](../model/MethodReference.md)>> __gatherOverriddenMethods__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### generateLinkTextsForParams

<span style="font-family: monospace; font-size: 80%;">static void __generateLinkTextsForParams__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)</span>




---

### generateLinkTextsForReferences

<span style="font-family: monospace; font-size: 80%;">private static void __generateLinkTextsForReferences__([Node](../model/Node.md) node)</span>




---

### link

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __link__([Link](../model/Link.md) reference)</span>

Create a markdown link, automatically deciding what kind of link to make.

**Returns:**

markdown formatted link


---

### linkGenerics

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __linkGenerics__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Returns:**

A Text object with the qualified names changed to unqualified
           names and links to types added


---

### listBySupertypeName

<span style="font-family: monospace; font-size: 80%;">private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](../model/MethodReference.md)>> __listBySupertypeName__([HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [MethodReference](../model/MethodReference.md)>> methodLookup1)</span>




---

### processInheritDocTags

<span style="font-family: monospace; font-size: 80%;">static [Text](../model/Text.md) __processInheritDocTags__([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)</span>




---

### processInheritedMethods

<span style="font-family: monospace; font-size: 80%;">static void __processInheritedMethods__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processJavadocComments

<span style="font-family: monospace; font-size: 80%;">static void __processJavadocComments__([Api](../model/Api.md) api)</span>




---

### processMethod

<span style="font-family: monospace; font-size: 80%;">static void __processMethod__([MethodNode](../model/MethodNode.md) method)</span>




---

### processModules

<span style="font-family: monospace; font-size: 80%;">static void __processModules__([Api](../model/Api.md) api)</span>




---

### processSubtypes

<span style="font-family: monospace; font-size: 80%;">static void __processSubtypes__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processTypeNode

<span style="font-family: monospace; font-size: 80%;">static void __processTypeNode__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### setDisplayName

<span style="font-family: monospace; font-size: 80%;">private static void __setDisplayName__([Link](../model/Link.md) reference, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod)</span>




---

### splitAndLink

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __splitAndLink__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)</span>

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Returns:**

a list of links to types formatted as Markdown


---

### typeHasMethod

<span style="font-family: monospace; font-size: 80%;">static boolean __typeHasMethod__([TypeNode](../model/TypeNode.md) typeNode, [MethodNode](../model/MethodNode.md) methodNode)</span>




---

