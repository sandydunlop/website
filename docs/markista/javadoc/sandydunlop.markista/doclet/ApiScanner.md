Package [io.github.sandydunlop.markista.doclet](index.md)

# Class ApiScanner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.AbstractElementVisitor6&lt;java.lang.Void,java.lang.Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.ElementScanner6&lt;java.lang.Void,java.lang.Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.ElementScanner7&lt;java.lang.Void,java.lang.Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.ElementScanner8&lt;java.lang.Void,java.lang.Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.ElementScanner9&lt;java.lang.Void,java.lang.Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.ApiScanner<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                                                                                                       | Field                                           | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|-------------|
| private [Api](../model/Api.md)                                                                                                                                                                                          | [api](#api)                                     |             |
| private [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)&gt; | [encounteredSupertypes](#encounteredsupertypes) |             |
| private [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html)                                                                                   | [environment](#environment)                     |             |
| private [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html)                                                                                                     | [reporter](#reporter)                           |             |
| private [ModuleNode](../model/ModuleNode.md)                                                                                                                                                                            | [unnamedModule](#unnamedmodule)                 |             |
| private [ModuleNode](../model/ModuleNode.md)                                                                                                                                                                            | [currentModule](#currentmodule)                 |             |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                 | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| ApiScanner([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter) |             |

## Method Summary

| Modifier and Type                                                                                                                          | Method                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [Api](../model/Api.md)                                                                                                                     | [scan](#scan)([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)&gt; elements)                                                                                                                                                                                                 |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                                                   | [scan](#scan)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                                                                                                                                                                          |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                                                   | [visitModule](#visitmodule)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                                                                                                                                                |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                                                   | [visitPackage](#visitpackage)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                                                                                                                                           |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                                                   | [visitType](#visittype)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                                                                                                                                                        |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                                                   | [visitExecutable](#visitexecutable)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                                                                                                                               |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                                                   | [visitVariable](#visitvariable)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) ve, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                                                                                                                                       |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                                                   | [visitTypeParameter](#visittypeparameter)([TypeParameterElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeParameterElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                                                                                                                    |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                                                   | [visitRecordComponent](#visitrecordcomponent)([RecordComponentElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RecordComponentElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                                                                                                            |                                                                        |
| private [TypeNode](../model/TypeNode.md)                                                                                                   | [nodeFromElement](#nodefromelement)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                                                                            |                                                                        |
| private void                                                                                                                               | [setEnumConstants](#setenumconstants)([EnumNode](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)                                                                                                                                                                                                                                     |                                                                        |
| private [MethodNode](../model/MethodNode.md)                                                                                               | [nodeFromElement](#nodefromelement)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                                                                                                                                                |                                                                        |
| private [FieldNode](../model/FieldNode.md)                                                                                                 | [nodeFromElement](#nodefromelement)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                                                                                                                    |                                                                        |
| private [TypeNode](../model/TypeNode.md)                                                                                                   | [createTypeNode](#createtypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind) |                                                                        |
| private void                                                                                                                               | [setDocumentation](#setdocumentation)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                         |                                                                        |
| private void                                                                                                                               | [setTypeOwnership](#settypeownership)([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                               |                                                                        |
| void                                                                                                                                       | [setMethodAnnotations](#setmethodannotations)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                   |                                                                        |
| private void                                                                                                                               | [setSpecifiedBy](#setspecifiedby)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                           |                                                                        |
| private [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenMethod](#getoverriddenmethod)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                     |                                                                        |
| private [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenMethod](#getoverriddenmethod)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) superclass, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                            |                                                                        |
| private [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenNativeMethod](#getoverriddennativemethod)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName, [MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                              |                                                                        |
| private void                                                                                                                               | [addConstantFieldValuesReference](#addconstantfieldvaluesreference)()                                                                                                                                                                                                                                                                                                                                                                             |                                                                        |
| boolean                                                                                                                                    | [isInterface](#isinterface)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)                                                                                                                                                                                                                                                                                      |                                                                        |
| private void                                                                                                                               | [findImplementedInterfaces](#findimplementedinterfaces)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)                                               |                                                                        |
| private void                                                                                                                               | [collectAllSupertypes](#collectallsupertypes)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)                                                                        |                                                                        |
| private [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html)       | [getDeprecation](#getdeprecation)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)                                                                                                                                                                                                                                                                        |                                                                        |
| private [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html)               | [getReturnTree](#getreturntree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              |                                                                        |
| private [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html)                 | [getParamTree](#getparamtree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)                                                                                                                                   |                                                                        |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](../model/Reference.md)&gt; | [getReferences](#getreferences)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              |                                                                        |
| private [Text](../model/Text.md)                                                                                                           | [getSince](#getsince)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                                        |                                                                        |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                | [getUrl](#geturl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)                                                                                                                                                                                                                                                                                                                              |                                                                        |
| private void                                                                                                                               | [setDeprecationStatus](#setdeprecationstatus)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)                                                                                                               |                                                                        |
| private boolean                                                                                                                            | [isIncludedInApi](#isincludedinapi)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                                                          |                                                                        |
| private void                                                                                                                               | [setMethodParams](#setmethodparams)([MethodNode](../model/MethodNode.md) methodDoc, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)                                                                                                                                                                                                                     |                                                                        |
| private [TypeNode](../model/TypeNode.md)                                                                                                   | [getFieldType](#getfieldtype)([Elements](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/Elements.html) elementUtils, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                      |                                                                        |
| private [TypeNode](../model/TypeNode.md)                                                                                                   | [getParamType](#getparamtype)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                               |                                                                        |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)                                                                                                                                                                                                                                                                                                 |                                                                        |
| static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html)     | [getEnclosingPackageElement](#getenclosingpackageelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                              |                                                                        |
| static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)           | [getEnclosingTypeElement](#getenclosingtypeelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                                    | Returns the TypeElement of the class the specified element belongs to. |

## Field Details

### api



### encounteredSupertypes



### environment



### reporter



### unnamedModule



### currentModule




## Method Details

### scan

[Api](../model/Api.md) scan([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)&gt; elements)



### scan

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) scan([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[scan](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html#scan) from [ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;

### visitModule

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitModule([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[visitModule](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#visitModule) from [ElementScanner9](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html)&lt;[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;

### visitPackage

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitPackage([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[visitPackage](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html#visitPackage) from [ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;

### visitType

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitType([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[visitType](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html#visitType) from [ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;

### visitExecutable

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitExecutable([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[visitExecutable](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html#visitExecutable) from [ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;

### visitVariable

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitVariable([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) ve, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[visitVariable](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner7.html#visitVariable) from [ElementScanner7](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner7.html)&lt;[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;

### visitTypeParameter

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitTypeParameter([TypeParameterElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeParameterElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[visitTypeParameter](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html#visitTypeParameter) from [ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;

### visitRecordComponent

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitRecordComponent([RecordComponentElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RecordComponentElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[visitRecordComponent](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html#visitRecordComponent) from [ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;

### nodeFromElement

private [TypeNode](../model/TypeNode.md) nodeFromElement([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)



### setEnumConstants

private void setEnumConstants([EnumNode](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)



### nodeFromElement

private [MethodNode](../model/MethodNode.md) nodeFromElement([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)



### nodeFromElement

private [FieldNode](../model/FieldNode.md) nodeFromElement([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)



### createTypeNode

private [TypeNode](../model/TypeNode.md) createTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)



### setDocumentation

private void setDocumentation([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)



### setTypeOwnership

private void setTypeOwnership([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)



### setMethodAnnotations

void setMethodAnnotations([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)



### setSpecifiedBy

private void setSpecifiedBy([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)



### getOverriddenMethod

private [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenMethod([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)



### getOverriddenMethod

private [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenMethod([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) superclass, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)



### getOverriddenNativeMethod

private [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenNativeMethod([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName, [MethodNode](../model/MethodNode.md) method)



### addConstantFieldValuesReference

private void addConstantFieldValuesReference()



### isInterface

boolean isInterface([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)



### findImplementedInterfaces

private void findImplementedInterfaces([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)



### collectAllSupertypes

private void collectAllSupertypes([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)



### getDeprecation

private [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html) getDeprecation([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)



### getReturnTree

private [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html) getReturnTree([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)



### getParamTree

private [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html) getParamTree([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)



### getReferences

private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](../model/Reference.md)&gt; getReferences([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)



### getSince

private [Text](../model/Text.md) getSince([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)



### getUrl

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getUrl([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)



### setDeprecationStatus

private void setDeprecationStatus([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)



### isIncludedInApi

private boolean isIncludedInApi([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)



### setMethodParams

private void setMethodParams([MethodNode](../model/MethodNode.md) methodDoc, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)



### getFieldType

private [TypeNode](../model/TypeNode.md) getFieldType([Elements](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/Elements.html) elementUtils, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)



### getParamType

private [TypeNode](../model/TypeNode.md) getParamType([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)



### getPackageName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)



### getEnclosingPackageElement

static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) getEnclosingPackageElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)



### getEnclosingTypeElement

static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) getEnclosingTypeElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)

Returns the TypeElement of the class the specified element belongs to.

**Parameters:**

`element` - A program element such as a field or method

**Returns:**

the TypeElement of the class the specified element belongs to.

