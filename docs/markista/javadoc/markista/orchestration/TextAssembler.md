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

| Modifier and Type                                                                                                                                                                                                                                                                                                                                    | Method                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| public static void                                                                                                                                                                                                                                                                                                                                   | [assembleTextAndLinks](#assembletextandlinks)([Api](../model/Api.md) a, [Context](../core/Context.md) c)                                                                                                                                                                                                                                                                                          | Generates [Text](../model/Text.md) objects for links to types and links in Javadoc text. |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processModules](#processmodules)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](../model/ModuleNode.md)> modules)                                                                                                                                                                                                                         |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processTypeNode](#processtypenode)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                    |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processMethod](#processmethod)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                                                                                                                      |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processSubtypes](#processsubtypes)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                    |                                                                                          |
| public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Link](../model/Link.md)>> | [gatherOverriddenMethods](#gatheroverriddenmethods)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                    |                                                                                          |
| public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)>>                               | [listBySupertypeName](#listbysupertypename)([Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Pair](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [Link](../model/Link.md)>> methodLookup1) |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processInheritedMethods](#processinheritedmethods)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                    |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [linkBaseMethod](#linkbasemethod)([Link](../model/Link.md) baseMethodLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseTypeName)                                                                                                                                                                                                             |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [associateMethodWithType](#associatemethodwithtype)([MethodNode](../model/MethodNode.md) methodNode)                                                                                                                                                                                                                                                                                              |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [associateMethodsWithImplementedInterfaces](#associatemethodswithimplementedinterfaces)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                |                                                                                          |
| public static [InterfaceNode](../model/InterfaceNode.md)                                                                                                                                                                                                                                                                                             | [getStandardInterface](#getstandardinterface)([TypeReference](../model/TypeReference.md) interfaceRef)                                                                                                                                                                                                                                                                                            |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [setImplementingClass](#setimplementingclass)([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [setMethodsSpecifier](#setmethodsspecifier)([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                  |                                                                                          |
| static void                                                                                                                                                                                                                                                                                                                                          | [resolveLinksForParams](#resolvelinksforparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)                                                                                                                                                                                                              |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [resolveLinksForReferences](#resolvelinksforreferences)([Node](../model/Node.md) node)                                                                                                                                                                                                                                                                                                            |                                                                                          |
| public static [Text](../model/Text.md)                                                                                                                                                                                                                                                                                                               | [processInheritDocTags](#processinheritdoctags)([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)                                                                                                                                                                                                                                                                           |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [processJavadocComments](#processjavadoccomments)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                     |                                                                                          |
| public static void                                                                                                                                                                                                                                                                                                                                   | [addJavadocToRecords](#addjavadoctorecords)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                           |                                                                                          |



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

### processModules

<span style="font-family: monospace; font-size: 80%;">public static void __processModules__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ModuleNode](../model/ModuleNode.md)> modules)</span>




---

### processTypeNode

<span style="font-family: monospace; font-size: 80%;">public static void __processTypeNode__([TypeNode](../model/TypeNode.md) typeNode)</span>




---

### processMethod

<span style="font-family: monospace; font-size: 80%;">public static void __processMethod__([MethodNode](../model/MethodNode.md) method)</span>




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

### linkBaseMethod

<span style="font-family: monospace; font-size: 80%;">public static void __linkBaseMethod__([Link](../model/Link.md) baseMethodLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseTypeName)</span>




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

### setImplementingClass

<span style="font-family: monospace; font-size: 80%;">public static void __setImplementingClass__([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)</span>




---

### setMethodsSpecifier

<span style="font-family: monospace; font-size: 80%;">public static void __setMethodsSpecifier__([InterfaceNode](../model/InterfaceNode.md) interfaceNode, [TypeNode](../model/TypeNode.md) typeNode)</span>




---

### resolveLinksForParams

<span style="font-family: monospace; font-size: 80%;">static void __resolveLinksForParams__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](../model/ParamNode.md)> params)</span>




---

### resolveLinksForReferences

<span style="font-family: monospace; font-size: 80%;">public static void __resolveLinksForReferences__([Node](../model/Node.md) node)</span>




---

### processInheritDocTags

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __processInheritDocTags__([Text](../model/Text.md) baseMethodText, [Text](../model/Text.md) text)</span>




---

### processJavadocComments

<span style="font-family: monospace; font-size: 80%;">public static void __processJavadocComments__([Api](../model/Api.md) api)</span>




---

### addJavadocToRecords

<span style="font-family: monospace; font-size: 80%;">public static void __addJavadocToRecords__([Api](../model/Api.md) api)</span>




---

