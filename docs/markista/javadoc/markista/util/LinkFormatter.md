Package [io.github.sandydunlop.markista.util](index.md)

# Class LinkFormatter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.LinkFormatter<br/>
<br/>

----

<span style="font-family: monospace;">public class __LinkFormatter__</span>


## Field Summary

| Modifier and Type                            | Field       | Description |
|----------------------------------------------|-------------|-------------|
| private static [Context](../core/Context.md) | [ctx](#ctx) |             |
| private static [Api](../model/Api.md)        | [api](#api) |             |

## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| LinkFormatter() |             |

## Method Summary

| Modifier and Type                                                                                          | Method                                                                                                                                                                                                                                | Description                                                                                                          |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                         | [generateLinkTexts](#generatelinktexts)([Api](../model/Api.md) a, [Context](../core/Context.md) context)                                                                                                                              | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.                             |
| static void                                                                                                | [processTypeNode](#processtypenode)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                        |                                                                                                                      |
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
| public static void                                                                                         | [generateLinkTexts](#generatelinktexts)([Api](../model/Api.md) a, [Context](../core/Context.md) context)                                                                                                                              | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.                             |
| static void                                                                                                | [processTypeNode](#processtypenode)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                        |                                                                                                                      |
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
| public static void                                                                                         | [generateLinkTexts](#generatelinktexts)([Api](../model/Api.md) a, [Context](../core/Context.md) context)                                                                                                                              | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.                             |
| static void                                                                                                | [processTypeNode](#processtypenode)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                        |                                                                                                                      |
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




---

### api




---


## Method Details

### generateLinkTexts

public static void generateLinkTexts([Api](../model/Api.md) a, [Context](../core/Context.md) context)

Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.
This is where we decide if the label for those links shows qualified names or simplified names.


---

### processTypeNode

static void processTypeNode([TypeNode](../model/TypeNode.md) typeNode)




---

### processModules

static void processModules([Api](../model/Api.md) api)




---

### processJavadocComments

static void processJavadocComments([Api](../model/Api.md) api)




---

### generateLinkTextsForParams

static void generateLinkTextsForParams([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)




---

### generateLinkTextsForReferences

private static void generateLinkTextsForReferences([Node](../model/Node.md) node)




---

### link

public static [Text](../model/Text.md) link([Reference](../model/Reference.md) reference, boolean useQualifiedName)

Create a markdown link, automatically deciding what kind of link to make.

**Returns:**

markdown formatted link


---

### setDisplayName

private static void setDisplayName([Reference](../model/Reference.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod, boolean useQualifiedName)




---

### canBeSimplified

private static boolean canBeSimplified([Reference](../model/Reference.md) link)




---

### escape

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

### linkGenerics

public static [Text](../model/Text.md) linkGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean useQualifiedName)

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Returns:**

A Text object with the qualified names changed to unqualified
           names and links to types added


---

### splitAndLink

public static [Text](../model/Text.md) splitAndLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean useQualifiedName)

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Returns:**

a list of links to types formatted as Markdown


---

### generateLinkTexts

public static void generateLinkTexts([Api](../model/Api.md) a, [Context](../core/Context.md) context)

Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.
This is where we decide if the label for those links shows qualified names or simplified names.


---

### processTypeNode

static void processTypeNode([TypeNode](../model/TypeNode.md) typeNode)




---

### processModules

static void processModules([Api](../model/Api.md) api)




---

### processJavadocComments

static void processJavadocComments([Api](../model/Api.md) api)




---

### generateLinkTextsForParams

static void generateLinkTextsForParams([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)




---

### generateLinkTextsForReferences

private static void generateLinkTextsForReferences([Node](../model/Node.md) node)




---

### link

public static [Text](../model/Text.md) link([Reference](../model/Reference.md) reference, boolean useQualifiedName)

Create a markdown link, automatically deciding what kind of link to make.

**Returns:**

markdown formatted link


---

### setDisplayName

private static void setDisplayName([Reference](../model/Reference.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod, boolean useQualifiedName)




---

### canBeSimplified

private static boolean canBeSimplified([Reference](../model/Reference.md) link)




---

### escape

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

### linkGenerics

public static [Text](../model/Text.md) linkGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean useQualifiedName)

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Returns:**

A Text object with the qualified names changed to unqualified
           names and links to types added


---

### splitAndLink

public static [Text](../model/Text.md) splitAndLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean useQualifiedName)

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Returns:**

a list of links to types formatted as Markdown


---

### generateLinkTexts

public static void generateLinkTexts([Api](../model/Api.md) a, [Context](../core/Context.md) context)

Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.
This is where we decide if the label for those links shows qualified names or simplified names.


---

### processTypeNode

static void processTypeNode([TypeNode](../model/TypeNode.md) typeNode)




---

### processModules

static void processModules([Api](../model/Api.md) api)




---

### processJavadocComments

static void processJavadocComments([Api](../model/Api.md) api)




---

### generateLinkTextsForParams

static void generateLinkTextsForParams([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)




---

### generateLinkTextsForReferences

private static void generateLinkTextsForReferences([Node](../model/Node.md) node)




---

### link

public static [Text](../model/Text.md) link([Reference](../model/Reference.md) reference, boolean useQualifiedName)

Create a markdown link, automatically deciding what kind of link to make.

**Returns:**

markdown formatted link


---

### setDisplayName

private static void setDisplayName([Reference](../model/Reference.md) link, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod, boolean useQualifiedName)




---

### canBeSimplified

private static boolean canBeSimplified([Reference](../model/Reference.md) link)




---

### escape

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escape([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

### linkGenerics

public static [Text](../model/Text.md) linkGenerics([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str, boolean useQualifiedName)

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Returns:**

A Text object with the qualified names changed to unqualified
           names and links to types added


---

### splitAndLink

public static [Text](../model/Text.md) splitAndLink([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString, boolean useQualifiedName)

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Returns:**

a list of links to types formatted as Markdown


---

