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

| Modifier and Type                                                                                                                                                                                                                                                                                                                                    | Method                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                          |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                                                                                                                                                                                                                                                                   | [assembleTextAndLinks](#assembletextandlinks)([Api](../model/Api.md) a, [Context](../core/Context.md) c)                                                                                                                                                                                                                                                                                          | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text.                             |
| public static void                                                                                                                                                                                                                                                                                                                                   | [addJavadocToRecords](#addjavadoctorecords)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                           |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processTypeNode](#processtypenode)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                    |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processSubtypes](#processsubtypes)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                    |                                                                                                                      |
| public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Link](../model/Link.md)>> | [gatherOverriddenMethods](#gatheroverriddenmethods)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                    |                                                                                                                      |
| public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)>>                               | [listBySupertypeName](#listbysupertypename)([Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Link](../model/Link.md)>> methodLookup1) |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processInheritedMethods](#processinheritedmethods)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                    |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processMethod](#processmethod)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                                                                                                                      |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [linkBaseMethod](#linkbasemethod)([Link](../model/Link.md) baseMethodLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseTypeName)                                                                                                                                                                                                             |                                                                                                                      |
| public static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                               | [processInheritDocTags](#processinheritdoctags)([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)                                                                                                                                                                                                                                                                           |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                                                           | [baseTypeName](#basetypename)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                                                                                                                        |                                                                                                                      |
| public static boolean                                                                                                                                                                                                                                                                                                                                | [typeHasMethod](#typehasmethod)([TypeNode](../model/TypeNode.md) typeNode, [MethodNode](../model/MethodNode.md) methodNode)                                                                                                                                                                                                                                                                       |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processModules](#processmodules)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](../model/ModuleNode.md)> modules)                                                                                                                                                                                                                         |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [associateMethodWithType](#associatemethodwithtype)([MethodNode](../model/MethodNode.md) methodNode)                                                                                                                                                                                                                                                                                              |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [associateMethodsWithImplementedInterfaces](#associatemethodswithimplementedinterfaces)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                |                                                                                                                      |
| public static [InterfaceNode](../model/InterfaceNode.md)                                                                                                                                                                                                                                                                                             | [getStandardInterface](#getstandardinterface)([TypeReference](../model/TypeReference.md) interfaceRef)                                                                                                                                                                                                                                                                                            |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [associateClassWithInterface](#associateclasswithinterface)([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                  |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [associateMethodsWithInterface](#associatemethodswithinterface)([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                              |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processJavadocComments](#processjavadoccomments)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                     |                                                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                          | [generateLinkTextsForParams](#generatelinktextsforparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)                                                                                                                                                                                                    |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [generateLinkTextsForReferences](#generatelinktextsforreferences)([Node](../model/Node.md) node)                                                                                                                                                                                                                                                                                                  |                                                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                                   | [resolveTypeRererence](#resolvetyperererence)([TypeReference](../model/TypeReference.md) typeRef)                                                                                                                                                                                                                                                                                                 | Resolve links to types referenced by a [TypeReference](../model/TypeReference.md).                                   |
| public static void                                                                                                                                                                                                                                                                                                                                   | [resolveLink](#resolvelink)([Link](../model/Link.md) link)                                                                                                                                                                                                                                                                                                                                        |                                                                                                                      |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                                                                                           | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                                                                                                                                                               | Escapes HTML `<` and `>` characters in a string with their corresponding HTML character entities, `&lt;` and `&gt;`. |



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

<span style="font-family: monospace; font-size: 80%;">public static void __processTypeNode__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processSubtypes

<span style="font-family: monospace; font-size: 80%;">public static void __processSubtypes__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### gatherOverriddenMethods

<span style="font-family: monospace; font-size: 80%;">public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Link](../model/Link.md)>> __gatherOverriddenMethods__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### listBySupertypeName

<span style="font-family: monospace; font-size: 80%;">public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)>> __listBySupertypeName__([Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Link](../model/Link.md)>> methodLookup1)</span>




---

### processInheritedMethods

<span style="font-family: monospace; font-size: 80%;">public static void __processInheritedMethods__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processMethod

<span style="font-family: monospace; font-size: 80%;">public static void __processMethod__([MethodNode](../model/MethodNode.md) method)</span>




---

### linkBaseMethod

<span style="font-family: monospace; font-size: 80%;">public static void __linkBaseMethod__([Link](../model/Link.md) baseMethodLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseTypeName)</span>




---

### processInheritDocTags

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __processInheritDocTags__([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)</span>




---

### baseTypeName

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __baseTypeName__([MethodNode](../model/MethodNode.md) method)</span>




---

### typeHasMethod

<span style="font-family: monospace; font-size: 80%;">public static boolean __typeHasMethod__([TypeNode](../model/TypeNode.md) typeNode, [MethodNode](../model/MethodNode.md) methodNode)</span>




---

### processModules

<span style="font-family: monospace; font-size: 80%;">public static void __processModules__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](../model/ModuleNode.md)> modules)</span>




---

### associateMethodWithType

<span style="font-family: monospace; font-size: 80%;">public static void __associateMethodWithType__([MethodNode](../model/MethodNode.md) methodNode)</span>




---

### associateMethodsWithImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public static void __associateMethodsWithImplementedInterfaces__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### getStandardInterface

<span style="font-family: monospace; font-size: 80%;">public static [InterfaceNode](../model/InterfaceNode.md) __getStandardInterface__([TypeReference](../model/TypeReference.md) interfaceRef)</span>




---

### associateClassWithInterface

<span style="font-family: monospace; font-size: 80%;">public static void __associateClassWithInterface__([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)</span>




---

### associateMethodsWithInterface

<span style="font-family: monospace; font-size: 80%;">public static void __associateMethodsWithInterface__([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processJavadocComments

<span style="font-family: monospace; font-size: 80%;">public static void __processJavadocComments__([Api](../model/Api.md) api)</span>




---

### generateLinkTextsForParams

<span style="font-family: monospace; font-size: 80%;">static void __generateLinkTextsForParams__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)</span>




---

### generateLinkTextsForReferences

<span style="font-family: monospace; font-size: 80%;">public static void __generateLinkTextsForReferences__([Node](../model/Node.md) node)</span>




---

### resolveTypeRererence

<span style="font-family: monospace; font-size: 80%;">public static void __resolveTypeRererence__([TypeReference](../model/TypeReference.md) typeRef)</span>

Resolve links to types referenced by a [TypeReference](../model/TypeReference.md).


---

### resolveLink

<span style="font-family: monospace; font-size: 80%;">public static void __resolveLink__([Link](../model/Link.md) link)</span>




---

### escape

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __escape__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Escapes HTML `<` and `>` characters in a string with their corresponding
HTML character entities, `&lt;` and `&gt;`.

**Returns:**

The escaped string


---

