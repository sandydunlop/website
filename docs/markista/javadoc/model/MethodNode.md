Package [io.github.sandydunlop.markista.model](index.md)

# Class MethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.MethodNode<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                                                                                    | Field                                   | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| private [Text](Text.md)                                                                                                                                                                              | [returnDescription](#returndescription) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [specifiedBy](#specifiedby)             |             |
| private [TypeNode](TypeNode.md)                                                                                                                                                                      | [returnType](#returntype)               |             |
| private [OverriddenMethodNode](OverriddenMethodNode.md)                                                                                                                                              | [overrides](#overrides)                 |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt;                                                                    | [params](#params)                       |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [thrownTypes](#throwntypes)             |             |
| private [TypeNode](TypeNode.md)                                                                                                                                                                      | [owner](#owner)                         |             |

## Constructor Summary

| Constructor                                                                                                                                       | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| MethodNode([TypeNode](TypeNode.md) returnType, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |             |

## Method Summary

| Modifier and Type                                                                                                                                                                            | Method                                                                                                                                        | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| void                                                                                                                                                                                         | [setOverriddenMethod](#setoverriddenmethod)([OverriddenMethodNode](OverriddenMethodNode.md) overrides)                                        |             |
| [OverriddenMethodNode](OverriddenMethodNode.md)                                                                                                                                              | [getOverriddenMethod](#getoverriddenmethod)()                                                                                                 |             |
| [TypeNode](TypeNode.md)                                                                                                                                                                      | [getReturnType](#getreturntype)()                                                                                                             |             |
| void                                                                                                                                                                                         | [addParam](#addparam)([ParamNode](ParamNode.md) param)                                                                                        |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt;                                                                    | [getParams](#getparams)()                                                                                                                     |             |
| void                                                                                                                                                                                         | [addThrownType](#addthrowntype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)            |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getThrownTypes](#getthrowntypes)()                                                                                                           |             |
| void                                                                                                                                                                                         | [setOwner](#setowner)([TypeNode](TypeNode.md) owner)                                                                                          |             |
| [TypeNode](TypeNode.md)                                                                                                                                                                      | [getOwner](#getowner)()                                                                                                                       |             |
| void                                                                                                                                                                                         | [setSpecifiedBy](#setspecifiedby)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName) |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getSpecifiedBy](#getspecifiedby)()                                                                                                           |             |
| void                                                                                                                                                                                         | [setReturnDescription](#setreturndescription)([Text](Text.md) text)                                                                           |             |
| [Text](Text.md)                                                                                                                                                                              | [getReturnDescription](#getreturndescription)()                                                                                               |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [signature](#signature)()                                                                                                                     |             |
| void                                                                                                                                                                                         | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)            |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getSimpleName](#getsimplename)()                                                                                                             |             |

## Field Details

### returnDescription




---

### specifiedBy




---

### returnType




---

### overrides




---

### params




---

### thrownTypes




---

### owner




---


## Method Details

### setOverriddenMethod

void setOverriddenMethod([OverriddenMethodNode](OverriddenMethodNode.md) overrides)




---

### getOverriddenMethod

[OverriddenMethodNode](OverriddenMethodNode.md) getOverriddenMethod()




---

### getReturnType

[TypeNode](TypeNode.md) getReturnType()




---

### addParam

void addParam([ParamNode](ParamNode.md) param)




---

### getParams

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt; getParams()




---

### addThrownType

void addThrownType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### getThrownTypes

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getThrownTypes()




---

### setOwner

void setOwner([TypeNode](TypeNode.md) owner)




---

### getOwner

[TypeNode](TypeNode.md) getOwner()




---

### setSpecifiedBy

void setSpecifiedBy([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)




---

### getSpecifiedBy

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSpecifiedBy()




---

### setReturnDescription

void setReturnDescription([Text](Text.md) text)




---

### getReturnDescription

[Text](Text.md) getReturnDescription()




---

### signature

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature()




---

### setSimpleName

void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### getSimpleName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()




---

