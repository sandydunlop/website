Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class TextAssembler
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.TextAssembler<br/>
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

| Modifier and Type                                                                                                                                                                                                                                                                                                                                                           | Method                                                                                                                                                                                                      | Description                                                                                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                                                                                                                                                                                                                                                                                          | [assembleTextAndLinks](#assembletextandlinks)([Api](../model/Api.md) a, [Context](../core/Context.md) c)                                                                                                    | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.                             |
| public static void                                                                                                                                                                                                                                                                                                                                                          | [addJavadocToRecords](#addjavadoctorecords)([Api](../model/Api.md) api)                                                                                                                                     |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processTypeNode](#processtypenode)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                              |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processSubtypes](#processsubtypes)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                              |                                                                                                                      |
| static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [MethodReference](../model/MethodReference.md)>> | [gatherOverriddenMethods](#gatheroverriddenmethods)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                              |                                                                                                                      |
| private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](../model/MethodReference.md)>>                       | [listBySupertypeName](#listbysupertypename)([HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html) methodLookup1)                                                   |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processInheritedMethods](#processinheritedmethods)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                              |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processMethod](#processmethod)([MethodNode](../model/MethodNode.md) method)                                                                                                                                |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [linkBaseMethod](#linkbasemethod)([MethodReference](../model/MethodReference.md) baseMethodPair, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseTypeName) |                                                                                                                      |
| static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                                                             | [processInheritDocTags](#processinheritdoctags)([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)                                                                                     |                                                                                                                      |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                                                                                         | [baseTypeName](#basetypename)([MethodNode](../model/MethodNode.md) method)                                                                                                                                  |                                                                                                                      |
| static boolean                                                                                                                                                                                                                                                                                                                                                              | [typeHasMethod](#typehasmethod)([TypeNode](../model/TypeNode.md) typeNode, [MethodNode](../model/MethodNode.md) methodNode)                                                                                 |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processModules](#processmodules)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html) modules)                                                                         |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [associateMethodWithType](#associatemethodwithtype)([MethodNode](../model/MethodNode.md) methodNode)                                                                                                        |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [associateMethodsWithImplementedInterfaces](#associatemethodswithimplementedinterfaces)([TypeNode](../model/TypeNode.md) typeNode)                                                                          |                                                                                                                      |
| static [InterfaceNode](../model/InterfaceNode.md)                                                                                                                                                                                                                                                                                                                           | [getStandardInterface](#getstandardinterface)([TypeReference](../model/TypeReference.md) interfaceRef)                                                                                                      |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [associateClassWithInterface](#associateclasswithinterface)([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)                                            |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [associateMethodsWithInterface](#associatemethodswithinterface)([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)                                        |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [processJavadocComments](#processjavadoccomments)([Api](../model/Api.md) api)                                                                                                                               |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                                                 | [generateLinkTextsForParams](#generatelinktextsforparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html) params)                                                  |                                                                                                                      |
| private static void                                                                                                                                                                                                                                                                                                                                                         | [generateLinkTextsForReferences](#generatelinktextsforreferences)([Node](../model/Node.md) node)                                                                                                            |                                                                                                                      |
| public static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                                                      | [link](#link)([Link](../model/Link.md) reference)                                                                                                                                                           | Create a markdown link, automatically deciding what kind of link to make.                                            |
| private static void                                                                                                                                                                                                                                                                                                                                                         | [setDisplayName](#setdisplayname)([Link](../model/Link.md) reference, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod)      |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                                                                                  | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                         | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |
| public static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                                                      | [linkGenerics](#linkgenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                             | Changes qualified generic type names to unqualified generic  type names and adds links to their API documentation.   |
| public static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                                                      | [splitAndLink](#splitandlink)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)                                                                     | Creates markdown formatted text with links to types from a string.                                                   |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                                                                                  | [removeGenerics](#removegenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                         | Removes the generic type and its surrounding <> from a string, if present                                            |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">private static [Api](../model/Api.md) __api__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">private static [Context](../core/Context.md) __ctx__</span>




---


## Method Details

### assembleTextAndLinks

<span style="font-family: monospace; font-size: 80%;">public static void __assembleTextAndLinks__([Api](../model/Api.md) a, [Context](../core/Context.md) c)</span>

Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.
This is where we decide if the label for those links shows qualified names or simplified names.


---

### addJavadocToRecords

<span style="font-family: monospace; font-size: 80%;">public static void __addJavadocToRecords__([Api](../model/Api.md) api)</span>




---

### processTypeNode

<span style="font-family: monospace; font-size: 80%;">static void __processTypeNode__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processSubtypes

<span style="font-family: monospace; font-size: 80%;">static void __processSubtypes__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### gatherOverriddenMethods

<span style="font-family: monospace; font-size: 80%;">static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [MethodReference](../model/MethodReference.md)>> __gatherOverriddenMethods__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### listBySupertypeName

<span style="font-family: monospace; font-size: 80%;">private static [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](../model/MethodReference.md)>> __listBySupertypeName__([HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html) methodLookup1)</span>




---

### processInheritedMethods

<span style="font-family: monospace; font-size: 80%;">static void __processInheritedMethods__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processMethod

<span style="font-family: monospace; font-size: 80%;">static void __processMethod__([MethodNode](../model/MethodNode.md) method)</span>




---

### linkBaseMethod

<span style="font-family: monospace; font-size: 80%;">static void __linkBaseMethod__([MethodReference](../model/MethodReference.md) baseMethodPair, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseTypeName)</span>




---

### processInheritDocTags

<span style="font-family: monospace; font-size: 80%;">static [Text](../model/Text.md) __processInheritDocTags__([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)</span>




---

### baseTypeName

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __baseTypeName__([MethodNode](../model/MethodNode.md) method)</span>




---

### typeHasMethod

<span style="font-family: monospace; font-size: 80%;">static boolean __typeHasMethod__([TypeNode](../model/TypeNode.md) typeNode, [MethodNode](../model/MethodNode.md) methodNode)</span>




---

### processModules

<span style="font-family: monospace; font-size: 80%;">static void __processModules__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html) modules)</span>




---

### associateMethodWithType

<span style="font-family: monospace; font-size: 80%;">static void __associateMethodWithType__([MethodNode](../model/MethodNode.md) methodNode)</span>




---

### associateMethodsWithImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">static void __associateMethodsWithImplementedInterfaces__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### getStandardInterface

<span style="font-family: monospace; font-size: 80%;">static [InterfaceNode](../model/InterfaceNode.md) __getStandardInterface__([TypeReference](../model/TypeReference.md) interfaceRef)</span>




---

### associateClassWithInterface

<span style="font-family: monospace; font-size: 80%;">static void __associateClassWithInterface__([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)</span>




---

### associateMethodsWithInterface

<span style="font-family: monospace; font-size: 80%;">static void __associateMethodsWithInterface__([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processJavadocComments

<span style="font-family: monospace; font-size: 80%;">static void __processJavadocComments__([Api](../model/Api.md) api)</span>




---

### generateLinkTextsForParams

<span style="font-family: monospace; font-size: 80%;">static void __generateLinkTextsForParams__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html) params)</span>




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

### setDisplayName

<span style="font-family: monospace; font-size: 80%;">private static void __setDisplayName__([Link](../model/Link.md) reference, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) displayName, boolean isLocalMethod)</span>




---

### escape

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __escape__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

### linkGenerics

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __linkGenerics__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Changes qualified generic type names to unqualified generic 
type names and adds links to their API documentation.

**Returns:**

A Text object with the qualified names changed to unqualified
           names and links to types added


---

### splitAndLink

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __splitAndLink__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typesString)</span>

Creates markdown formatted text with links to types from a string.
containing one or more types separated by commas.

**Returns:**

a list of links to types formatted as Markdown


---

### removeGenerics

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeGenerics__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Removes the generic type and its surrounding <> from a string, if present

**Returns:**

The string with the generic type and surrounding <> removed


---

