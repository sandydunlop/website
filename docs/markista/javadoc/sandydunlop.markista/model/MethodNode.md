Package [io.github.sandydunlop.markista.model](index.md)

# Class MethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.MethodNode<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                                                                                                                      | Field                                   | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| private [Text](Text.md)                                                                                                                                                                                                                | [returnDescription](#returndescription) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                   | [specifiedBy](#specifiedby)             |             |
| private [TypeNode](TypeNode.md)                                                                                                                                                                                                        | [returnType](#returntype)               |             |
| private [OverriddenMethodNode](OverriddenMethodNode.md)                                                                                                                                                                                | [overrides](#overrides)                 |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt;                                                                                                      | [params](#params)                       |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; | [thrownTypes](#throwntypes)             |             |
| private [TypeNode](TypeNode.md)                                                                                                                                                                                                        | [owner](#owner)                         |             |

## Constructor Summary

| Constructor                                                                                                                                       | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| MethodNode([TypeNode](TypeNode.md) returnType, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |             |

## Method Summary

| Modifier and Type                                                                                                                                                                                                              | Method                                                                                                                                                                                                                                                                        | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| void                                                                                                                                                                                                                           | [setOverriddenMethod](#setoverriddenmethod)([OverriddenMethodNode](OverriddenMethodNode.md) overrides)                                                                                                                                                                        |             |
| [OverriddenMethodNode](OverriddenMethodNode.md)                                                                                                                                                                                | [getOverriddenMethod](#getoverriddenmethod)()                                                                                                                                                                                                                                 |             |
| void                                                                                                                                                                                                                           | [setReturnType](#setreturntype)([TypeNode](TypeNode.md) returnType)                                                                                                                                                                                                           |             |
| [TypeNode](TypeNode.md)                                                                                                                                                                                                        | [getReturnType](#getreturntype)()                                                                                                                                                                                                                                             |             |
| void                                                                                                                                                                                                                           | [setParams](#setparams)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt; params)                                                                                                                     |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt;                                                                                                      | [getParams](#getparams)()                                                                                                                                                                                                                                                     |             |
| void                                                                                                                                                                                                                           | [setThrownTypes](#setthrowntypes)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; thrownTypes) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; | [getThrownTypes](#getthrowntypes)()                                                                                                                                                                                                                                           |             |
| void                                                                                                                                                                                                                           | [setOwner](#setowner)([TypeNode](TypeNode.md) owner)                                                                                                                                                                                                                          |             |
| [TypeNode](TypeNode.md)                                                                                                                                                                                                        | [getOwner](#getowner)()                                                                                                                                                                                                                                                       |             |
| void                                                                                                                                                                                                                           | [setSpecifiedBy](#setspecifiedby)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)                                                                                                                                 |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                   | [getSpecifiedBy](#getspecifiedby)()                                                                                                                                                                                                                                           |             |
| void                                                                                                                                                                                                                           | [setReturnDescription](#setreturndescription)([Text](Text.md) text)                                                                                                                                                                                                           |             |
| [Text](Text.md)                                                                                                                                                                                                                | [getReturnDescription](#getreturndescription)()                                                                                                                                                                                                                               |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                   | [signature](#signature)()                                                                                                                                                                                                                                                     |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                   | [fullSignature](#fullsignature)()                                                                                                                                                                                                                                             |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                   | [paramsString](#paramsstring)()                                                                                                                                                                                                                                               |             |
| void                                                                                                                                                                                                                           | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                            |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                   | [getSimpleName](#getsimplename)()                                                                                                                                                                                                                                             |             |
| void                                                                                                                                                                                                                           | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                      |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                   | [getQualifiedName](#getqualifiedname)()                                                                                                                                                                                                                                       |             |

## Field Details

### returnDescription



### specifiedBy



### returnType



### overrides



### params



### thrownTypes



### owner




## Method Details

### setOverriddenMethod

void setOverriddenMethod([OverriddenMethodNode](OverriddenMethodNode.md) overrides)



### getOverriddenMethod

[OverriddenMethodNode](OverriddenMethodNode.md) getOverriddenMethod()



### setReturnType

void setReturnType([TypeNode](TypeNode.md) returnType)



### getReturnType

[TypeNode](TypeNode.md) getReturnType()



### setParams

void setParams([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt; params)



### getParams

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt; getParams()



### setThrownTypes

void setThrownTypes([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; thrownTypes)



### getThrownTypes

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; getThrownTypes()



### setOwner

void setOwner([TypeNode](TypeNode.md) owner)



### getOwner

[TypeNode](TypeNode.md) getOwner()



### setSpecifiedBy

void setSpecifiedBy([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)



### getSpecifiedBy

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSpecifiedBy()



### setReturnDescription

void setReturnDescription([Text](Text.md) text)



### getReturnDescription

[Text](Text.md) getReturnDescription()



### signature

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature()



### fullSignature

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullSignature()



### paramsString

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) paramsString()



### setSimpleName

void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)



### getSimpleName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()



### setQualifiedName

void setQualifiedName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)



### getQualifiedName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getQualifiedName()



