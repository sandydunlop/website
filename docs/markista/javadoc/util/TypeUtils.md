Package [io.github.sandydunlop.markista.util](index.md)

# Class TypeUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.TypeUtils<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                            | Field                       | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|-------------|
| private static [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) | [environment](#environment) |             |
| private static [Api](../model/Api.md)                                                                                                        | [api](#api)                 |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| TypeUtils() |             |

## Method Summary

| Modifier and Type                                                                                                                         | Method                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                            |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| static void                                                                                                                               | [init](#init)([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e)                                                                                                                                                                                                                                                                          |                                                                                                                        |
| static [TypeNode](../model/TypeNode.md)                                                                                                   | [nodeFromElement](#nodefromelement)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                                                                            |                                                                                                                        |
| static void                                                                                                                               | [setEnumConstants](#setenumconstants)([EnumNode](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)                                                                                                                                                                                                                                     |                                                                                                                        |
| static [MethodNode](../model/MethodNode.md)                                                                                               | [nodeFromElement](#nodefromelement)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                                                                                                                                                |                                                                                                                        |
| static [FieldNode](../model/FieldNode.md)                                                                                                 | [nodeFromElement](#nodefromelement)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                                                                                                                    |                                                                                                                        |
| static [TypeNode](../model/TypeNode.md)                                                                                                   | [createTypeNode](#createtypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind) |                                                                                                                        |
| static [Text](../model/Text.md)                                                                                                           | [createText](#createtext)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; dtList)                                                                                                                                                                                        |                                                                                                                        |
| static [Text.Segment](../model/Text.Segment.md)                                                                                           | [createTextSegment](#createtextsegment)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)                                                                                                                                                                                                                                                                                   |                                                                                                                        |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                       | [getDocTreeText](#getdoctreetext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)                                                                                                                                                                                                                                                                              |                                                                                                                        |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                       | [getDocTreePart](#getdoctreepart)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)                                                                                                                                                                                                                                                                                  |                                                                                                                        |
| static void                                                                                                                               | [setDocumentation](#setdocumentation)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                         |                                                                                                                        |
| static void                                                                                                                               | [setTypeOwnership](#settypeownership)([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                               |                                                                                                                        |
| static void                                                                                                                               | [setMethodAnnotations](#setmethodannotations)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                   |                                                                                                                        |
| static void                                                                                                                               | [setSpecifiedBy](#setspecifiedby)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                           |                                                                                                                        |
| static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenMethod](#getoverriddenmethod)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                     |                                                                                                                        |
| static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenMethod](#getoverriddenmethod)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) superclass, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                            |                                                                                                                        |
| static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenNativeMethod](#getoverriddennativemethod)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName, [MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                              | Returns a method that is overridden by the specified method when the  overridden method belongs to a Java native type. |
| static void                                                                                                                               | [addConstantFieldValuesReference](#addconstantfieldvaluesreference)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                                              |                                                                                                                        |
| static boolean                                                                                                                            | [isInterface](#isinterface)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)                                                                                                                                                                                                                                                                                      |                                                                                                                        |
| static void                                                                                                                               | [findImplementedInterfaces](#findimplementedinterfaces)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)                                               |                                                                                                                        |
| static void                                                                                                                               | [collectAllSupertypes](#collectallsupertypes)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)                                                                        |                                                                                                                        |
| static [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html)       | [getDeprecation](#getdeprecation)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)                                                                                                                                                                                                                                                                        |                                                                                                                        |
| static [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html)               | [getReturnTree](#getreturntree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              |                                                                                                                        |
| static [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html)                 | [getParamTree](#getparamtree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)                                                                                                                                   |                                                                                                                        |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](../model/Reference.md)&gt; | [getReferences](#getreferences)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              | Returns a list of `Reference` objects.                                                                                 |
| static [Text](../model/Text.md)                                                                                                           | [getSince](#getsince)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                                        |                                                                                                                        |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                       | [getUrl](#geturl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)                                                                                                                                                                                                                                                                                                                              |                                                                                                                        |
| static void                                                                                                                               | [setModifiers](#setmodifiers)([Node](../model/Node.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)&gt; modifiers)                                                                                                                                                         |                                                                                                                        |
| static void                                                                                                                               | [setThrownTypes](#setthrowntypes)([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; thrownTypes)                                                                                                                    |                                                                                                                        |
| static void                                                                                                                               | [setDeprecationStatus](#setdeprecationstatus)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)                                                                                                               |                                                                                                                        |
| static boolean                                                                                                                            | [isIncludedInApi](#isincludedinapi)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                                                          |                                                                                                                        |
| static void                                                                                                                               | [setMethodParams](#setmethodparams)([MethodNode](../model/MethodNode.md) methodDoc, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)                                                                                                                                                                                                                     |                                                                                                                        |
| static void                                                                                                                               | [setImplementations](#setimplementations)([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)&gt; implementations)                                                                                          |                                                                                                                        |
| static [TypeNode](../model/TypeNode.md)                                                                                                   | [getFieldType](#getfieldtype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                                                                     |                                                                                                                        |
| static [TypeNode](../model/TypeNode.md)                                                                                                   | [getParamType](#getparamtype)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                               |                                                                                                                        |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                               | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)                                                                                                                                                                                                                                                                                                 |                                                                                                                        |
| static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html)    | [getEnclosingPackageElement](#getenclosingpackageelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                              |                                                                                                                        |
| static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)          | [getEnclosingTypeElement](#getenclosingtypeelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                                    | Returns the TypeElement of the class the specified element belongs to.                                                 |

## Field Details

### environment




---

### api




---


## Method Details

### init

static void init([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e)




---

### nodeFromElement

static [TypeNode](../model/TypeNode.md) nodeFromElement([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)




---

### setEnumConstants

static void setEnumConstants([EnumNode](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)




---

### nodeFromElement

static [MethodNode](../model/MethodNode.md) nodeFromElement([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)




---

### nodeFromElement

static [FieldNode](../model/FieldNode.md) nodeFromElement([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)




---

### createTypeNode

static [TypeNode](../model/TypeNode.md) createTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)




---

### createText

static [Text](../model/Text.md) createText([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; dtList)




---

### createTextSegment

static [Text.Segment](../model/Text.Segment.md) createTextSegment([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)




---

### getDocTreeText

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDocTreeText([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)




---

### getDocTreePart

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDocTreePart([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)




---

### setDocumentation

static void setDocumentation([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)




---

### setTypeOwnership

static void setTypeOwnership([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)




---

### setMethodAnnotations

static void setMethodAnnotations([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)




---

### setSpecifiedBy

static void setSpecifiedBy([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)




---

### getOverriddenMethod

static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenMethod([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)




---

### getOverriddenMethod

static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenMethod([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) superclass, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)




---

### getOverriddenNativeMethod

static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenNativeMethod([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName, [MethodNode](../model/MethodNode.md) method)

Returns a method that is overridden by the specified method when the 
overridden method belongs to a Java native type.


---

### addConstantFieldValuesReference

static void addConstantFieldValuesReference([ModuleNode](../model/ModuleNode.md) moduleNode)




---

### isInterface

static boolean isInterface([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)




---

### findImplementedInterfaces

static void findImplementedInterfaces([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)




---

### collectAllSupertypes

static void collectAllSupertypes([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)




---

### getDeprecation

static [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html) getDeprecation([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)




---

### getReturnTree

static [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html) getReturnTree([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)




---

### getParamTree

static [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html) getParamTree([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)




---

### getReferences

static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](../model/Reference.md)&gt; getReferences([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)

Returns a list of `Reference` objects. Each one represents an
occurrence of `@see` in a Javadoc comment.


---

### getSince

static [Text](../model/Text.md) getSince([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)




---

### getUrl

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getUrl([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)




---

### setModifiers

static void setModifiers([Node](../model/Node.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)&gt; modifiers)




---

### setThrownTypes

static void setThrownTypes([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; thrownTypes)




---

### setDeprecationStatus

static void setDeprecationStatus([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)




---

### isIncludedInApi

static boolean isIncludedInApi([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)




---

### setMethodParams

static void setMethodParams([MethodNode](../model/MethodNode.md) methodDoc, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)




---

### setImplementations

static void setImplementations([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)&gt; implementations)




---

### getFieldType

static [TypeNode](../model/TypeNode.md) getFieldType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)




---

### getParamType

static [TypeNode](../model/TypeNode.md) getParamType([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)




---

### getPackageName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)




---

### getEnclosingPackageElement

static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) getEnclosingPackageElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)




---

### getEnclosingTypeElement

static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) getEnclosingTypeElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)

Returns the TypeElement of the class the specified element belongs to.

**Parameters:**

`element` - A program element such as a field or method

**Returns:**

the TypeElement of the class the specified element belongs to.


---

