Package [io.github.sandydunlop.markista.orchestration](index.md)

# Class TextAssembler
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.orchestration.TextAssembler<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __TextAssembler__</span>


## Field Summary

| Modifier and Type                     | Field                 | Description |
|---------------------------------------|-----------------------|-------------|
| private static [](../model/Api.md)    | [api](#api)           |             |
| private static [](../core/Context.md) | [ctx](#ctx)           |             |
| private static [](LinkResolver.md)    | [resolver](#resolver) |             |



## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| TextAssembler() |             |



## Method Summary

| Modifier and Type                                                                                                                                                                                                                                                                                                                            | Method                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                          |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| public static void                                                                                                                                                                                                                                                                                                                           | [assembleTextAndLinks](#assembletextandlinks)([](../model/Api.md) a, [](../core/Context.md) c)                                                                                                                                                                                                                                                                                            | Generates [](../model/Text.md) objects for links to types and links in Javadoc text. |
| public static void                                                                                                                                                                                                                                                                                                                           | [processModules](#processmodules)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/ModuleNode.md)> modules)                                                                                                                                                                                                                           |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [processTypeNode](#processtypenode)([](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                    |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [processMethod](#processmethod)([](../model/MethodNode.md) method)                                                                                                                                                                                                                                                                                                                        |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [processSubtypes](#processsubtypes)([](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                                    |                                                                                      |
| public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [](../model/Link.md)>> | [gatherOverriddenMethods](#gatheroverriddenmethods)([](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                    |                                                                                      |
| public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/Link.md)>>                           | [listBySupertypeName](#listbysupertypename)([Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [](../model/Link.md)>> methodLookup1) |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [processInheritedMethods](#processinheritedmethods)([](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                                                    |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [linkBaseMethod](#linkbasemethod)([](../model/Link.md) baseMethodLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseTypeName)                                                                                                                                                                                                         |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [associateMethodWithType](#associatemethodwithtype)([](../model/MethodNode.md) methodNode)                                                                                                                                                                                                                                                                                                |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [associateMethodsWithImplementedInterfaces](#associatemethodswithimplementedinterfaces)([](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                                |                                                                                      |
| public static [](../model/InterfaceNode.md)                                                                                                                                                                                                                                                                                                  | [getStandardInterface](#getstandardinterface)([](../model/TypeReference.md) interfaceRef)                                                                                                                                                                                                                                                                                                 |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [setImplementingClass](#setimplementingclass)([](../model/InterfaceNode.md) interfaceNode, [](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                             |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [setMethodsSpecifier](#setmethodsspecifier)([](../model/InterfaceNode.md) interfaceNode, [](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                                                               |                                                                                      |
| static void                                                                                                                                                                                                                                                                                                                                  | [resolveLinksForParams](#resolvelinksforparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/ParamNode.md)> params)                                                                                                                                                                                                               |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [resolveLinksForReferences](#resolvelinksforreferences)([](../model/Node.md) node)                                                                                                                                                                                                                                                                                                        |                                                                                      |
| public static [](../model/Text.md)                                                                                                                                                                                                                                                                                                           | [processInheritDocTags](#processinheritdoctags)([](../model/Text.md) baseMethodText, [](../model/Text.md) text)                                                                                                                                                                                                                                                                           |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [processJavadocComments](#processjavadoccomments)([](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                |                                                                                      |
| public static void                                                                                                                                                                                                                                                                                                                           | [addJavadocToRecords](#addjavadoctorecords)([](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                      |                                                                                      |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">private static [](../model/Api.md) __api__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">private static [](../core/Context.md) __ctx__</span>




---

### resolver

<span style="font-family: monospace; font-size: 80%;">private static [](LinkResolver.md) __resolver__</span>




---


## Method Details

### assembleTextAndLinks

<span style="font-family: monospace; font-size: 80%;">public static void __assembleTextAndLinks__([](../model/Api.md) a, [](../core/Context.md) c)</span>

Generates [](../model/Text.md) objects for links to types and links in Javadoc text.
This is where we decide if the label for those links shows qualified names or simplified names.


---

### processModules

<span style="font-family: monospace; font-size: 80%;">public static void __processModules__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/ModuleNode.md)> modules)</span>




---

### processTypeNode

<span style="font-family: monospace; font-size: 80%;">public static void __processTypeNode__([](../model/TypeNode.md) typeNode)</span>




---

### processMethod

<span style="font-family: monospace; font-size: 80%;">public static void __processMethod__([](../model/MethodNode.md) method)</span>




---

### processSubtypes

<span style="font-family: monospace; font-size: 80%;">public static void __processSubtypes__([](../model/TypeNode.md) typeNode)</span>




---

### gatherOverriddenMethods

<span style="font-family: monospace; font-size: 80%;">public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [](../model/Link.md)>> __gatherOverriddenMethods__([](../model/TypeNode.md) typeNode)</span>




---

### listBySupertypeName

<span style="font-family: monospace; font-size: 80%;">public static [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/Link.md)>> __listBySupertypeName__([Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [](../model/Pair.md)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [](../model/Link.md)>> methodLookup1)</span>




---

### processInheritedMethods

<span style="font-family: monospace; font-size: 80%;">public static void __processInheritedMethods__([](../model/TypeNode.md) typeNode)</span>




---

### linkBaseMethod

<span style="font-family: monospace; font-size: 80%;">public static void __linkBaseMethod__([](../model/Link.md) baseMethodLink, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) baseTypeName)</span>




---

### associateMethodWithType

<span style="font-family: monospace; font-size: 80%;">public static void __associateMethodWithType__([](../model/MethodNode.md) methodNode)</span>




---

### associateMethodsWithImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public static void __associateMethodsWithImplementedInterfaces__([](../model/TypeNode.md) typeNode)</span>




---

### getStandardInterface

<span style="font-family: monospace; font-size: 80%;">public static [](../model/InterfaceNode.md) __getStandardInterface__([](../model/TypeReference.md) interfaceRef)</span>




---

### setImplementingClass

<span style="font-family: monospace; font-size: 80%;">public static void __setImplementingClass__([](../model/InterfaceNode.md) interfaceNode, [](../model/TypeNode.md) typeNode)</span>




---

### setMethodsSpecifier

<span style="font-family: monospace; font-size: 80%;">public static void __setMethodsSpecifier__([](../model/InterfaceNode.md) interfaceNode, [](../model/TypeNode.md) typeNode)</span>




---

### resolveLinksForParams

<span style="font-family: monospace; font-size: 80%;">static void __resolveLinksForParams__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/ParamNode.md)> params)</span>




---

### resolveLinksForReferences

<span style="font-family: monospace; font-size: 80%;">public static void __resolveLinksForReferences__([](../model/Node.md) node)</span>




---

### processInheritDocTags

<span style="font-family: monospace; font-size: 80%;">public static [](../model/Text.md) __processInheritDocTags__([](../model/Text.md) baseMethodText, [](../model/Text.md) text)</span>




---

### processJavadocComments

<span style="font-family: monospace; font-size: 80%;">public static void __processJavadocComments__([](../model/Api.md) api)</span>




---

### addJavadocToRecords

<span style="font-family: monospace; font-size: 80%;">public static void __addJavadocToRecords__([](../model/Api.md) api)</span>




---

