Package [io.github.sandydunlop.markista.util](index.md)

# Class TextAssembler
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.TextAssembler<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __TextAssembler__</span>


## Field Summary

| Modifier and Type                            | Field       | Description |
|----------------------------------------------|-------------|-------------|
| private static [Context](../core/Context.md) | [ctx](#ctx) |             |
| private static [Api](../model/Api.md)        | [api](#api) |             |

## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| TextAssembler() |             |

## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                                                                                                                                | Description                                                                                                          |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                         | [generateLinkTexts](#generatelinktexts)([Api](../model/Api.md) a, [Context](../core/Context.md) context)                                                                                                                              | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.                             |
| static void                                                                                                | [processTypeNode](#processtypenode)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                        |                                                                                                                      |
| static void                                                                                                | [processMethod](#processmethod)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                          |                                                                                                                      |
| static [Text](../model/Text.md)                                                                            | [processInheritDocTags](#processinheritdoctags)([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)                                                                                                               |                                                                                                                      |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [baseTypeName](#basetypename)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                            |                                                                                                                      |
| static void                                                                                                | [processModules](#processmodules)([Api](../model/Api.md) api)                                                                                                                                                                         |                                                                                                                      |
| static void                                                                                                | [processJavadocComments](#processjavadoccomments)([Api](../model/Api.md) api)                                                                                                                                                         |                                                                                                                      |
| static void                                                                                                | [generateLinkTextsForParams](#generatelinktextsforparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)                                        |                                                                                                                      |
| private static void                                                                                        | [generateLinkTextsForReferences](#generatelinktextsforreferences)([Node](../model/Node.md) node)                                                                                                                                      |                                                                                                                      |
| public static [Text](../model/Text.md)                                                                     | [link](#link)([Reference](../model/Reference.md) reference, boolean useQualifiedName)                                                                                                                                                 | Create a markdown link, automatically deciding what kind of link to make.                                            |
| private static void                                                                                        | [setDisplayName](#setdisplayname)([Reference](../model/Reference.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod, boolean useQualifiedName) |                                                                                                                      |
| private static boolean                                                                                     | [canBeSimplified](#canbesimplified)([Reference](../model/Reference.md) link)                                                                                                                                                          |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                   | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |
| public static [Text](../model/Text.md)                                                                     | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean useQualifiedName)                                                                             | Changes qualified generic type names to unqualified generic  type names and adds links to their API documentation.   |
| public static [Text](../model/Text.md)                                                                     | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean useQualifiedName)                                                                     | Creates markdown formatted text with links to types from a string.                                                   |

## Field Details

### ctx

<span style="font-family: monospace; font-size: 80%;">private static [Context](../core/Context.md) __ctx__</span>




---

### api

<span style="font-family: monospace; font-size: 80%;">private static [Api](../model/Api.md) __api__</span>




---


## Method Details

### generateLinkTexts

<span style="font-family: monospace; font-size: 80%;">public static void __generateLinkTexts__</span>

Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.
This is where we decide if the label for those links shows qualified names or simplified names.


---

### processTypeNode

<span style="font-family: monospace; font-size: 80%;">static void __processTypeNode__</span>




---

### processMethod

<span style="font-family: monospace; font-size: 80%;">static void __processMethod__</span>




---

### processInheritDocTags

<span style="font-family: monospace; font-size: 80%;">static [Text](../model/Text.md) __processInheritDocTags__</span>




---

### baseTypeName

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __baseTypeName__</span>




---

### processModules

<span style="font-family: monospace; font-size: 80%;">static void __processModules__</span>




---

### processJavadocComments

<span style="font-family: monospace; font-size: 80%;">static void __processJavadocComments__</span>




---

### generateLinkTextsForParams

<span style="font-family: monospace; font-size: 80%;">static void __generateLinkTextsForParams__</span>




---

### generateLinkTextsForReferences

<span style="font-family: monospace; font-size: 80%;">private static void __generateLinkTextsForReferences__</span>




---

### link

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __link__</span>

Create a markdown link, automatically deciding what kind of link to make.

**Returns:**

markdown formatted link


---

### setDisplayName

<span style="font-family: monospace; font-size: 80%;">private static void __setDisplayName__</span>




---

### canBeSimplified

<span style="font-family: monospace; font-size: 80%;">private static boolean __canBeSimplified__</span>




---

### escape

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __escape__</span>

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

### linkGenerics

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __linkGenerics__</span>

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Returns:**

A Text object with the qualified names changed to unqualified
           names and links to types added


---

### splitAndLink

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __splitAndLink__</span>

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Returns:**

a list of links to types formatted as Markdown


---

