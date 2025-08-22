Package [io.github.sandydunlop.markista.model](index.md)

# Class MethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        io.github.sandydunlop.markista.model.MethodNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __MethodNode__<br/>extends [AbstractMember](AbstractMember.md)
</span>

Contains information about a method being documented


## Field Summary

| Modifier and Type                                                                                                                 | Field                                   | Description                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------|
| private [MethodReference](MethodReference.md)                                                                                     | [baseMethod](#basemethod)               | Information about the method that this method overrides, if any.    |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                              | [ownerName](#ownername)                 | The type (class/interface) that owns this method.                   |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> | [params](#params)                       | List of parameters for this method.                                 |
| private [Text](Text.md)                                                                                                           | [returnDescription](#returndescription) | Description of the method's return value.                           |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [returnTypeName](#returntypename)       | The return type of this method.                                     |
| private [Text](Text.md)                                                                                                           | [returnTypeText](#returntypetext)       |                                                                     |
| private [Link](Link.md)                                                                                                           | [specifiedBy](#specifiedby)             | Name of the interface or specification this method is specified by. |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)>           | [thrownTypes](#throwntypes)             | List of exception types that this method declares it can throw.     |



## Constructor Summary

| Constructor                                                                                                                                                                                                            | Description                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| MethodNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) returnType, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a MethodNode with the specified return type and method name. |



## Method Summary

| Modifier and Type                                                                                                          | Method                                                                                                                            | Description                                                                                    |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| public void                                                                                                                | [addParam](#addparam)([ParamNode](ParamNode.md) param)                                                                            | Adds a parameter to this method.                                                               |
| public void                                                                                                                | [addThrownType](#addthrowntype)([Link](Link.md) name)                                                                             | Adds an exception type that this method declares it throws.                                    |
| public [MethodReference](MethodReference.md)                                                                               | [getBaseMethod](#getbasemethod)()                                                                                                 | Returns the base method information, if any.                                                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [getOwnerName](#getownername)()                                                                                                   | Returns the owning type of this method.                                                        |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> | [getParams](#getparams)()                                                                                                         | Returns the list of parameters of this method.                                                 |
| public [Text](Text.md)                                                                                                     | [getReturnDescription](#getreturndescription)()                                                                                   | Returns the description of the method's return value.                                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [getReturnTypeName](#getreturntypename)()                                                                                         | Returns the return type of this method.                                                        |
| public [Text](Text.md)                                                                                                     | [getReturnTypeText](#getreturntypetext)()                                                                                         | Returns the type Text of this parameter.                                                       |
| public [Link](Link.md)                                                                                                     | [getSpecifiedBy](#getspecifiedby)()                                                                                               | Returns the name of the interface or specification this method is specified by.                |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)>           | [getThrownTypes](#getthrowntypes)()                                                                                               | Returns the list of exception types declared by this method.                                   |
| public void                                                                                                                | [setBaseMethod](#setbasemethod)([MethodReference](MethodReference.md) baseMethod)                                                 | Sets the base method information that this method overrides.                                   |
| public void                                                                                                                | [setOwnerName](#setownername)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner) | Sets the owning type (class/interface) of this method.                                         |
| public void                                                                                                                | [setReturnDescription](#setreturndescription)([Text](Text.md) text)                                                               | Sets the description of the method's return value.                                             |
| public void                                                                                                                | [setReturnTypeText](#setreturntypetext)([Text](Text.md) text)                                                                     | Sets the type Text of this parameter.                                                          |
| public void                                                                                                                | [setSpecifiedBy](#setspecifiedby)([Link](Link.md) interfaceName)                                                                  | Sets the interface or specification name this method is specified by.                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [signature](#signature)()                                                                                                         | Computes and returns the method signature string, including return type, name, and parameters. |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[References](Node.md#getreferences), [DeprecationText](Node.md#setdeprecationtext), [Body](Node.md#getbody), [References](Node.md#setreferences), [FirstSentence](Node.md#setfirstsentence), [Deprecation](Node.md#setdeprecation), [Deprecation](Node.md#getdeprecation), [UUID](Node.md#getuuid), [FullBody](Node.md#getfullbody), [Kind](Node.md#getkind), [Since](Node.md#getsince), [FullBody](Node.md#setfullbody), [Kind](Node.md#setkind), [Body](Node.md#setbody), [Since](Node.md#setsince), [FirstSentence](Node.md#getfirstsentence), [DeprecationText](Node.md#getdeprecationtext)

### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AppliedAnnotation](AbstractMember.md#addappliedannotation), [Modifier](AbstractMember.md#addmodifier), [QualifiedName](AbstractMember.md#setqualifiedname), [Modifiers](AbstractMember.md#getmodifiers), [AppliedAnnotations](AbstractMember.md#getappliedannotations), [QualifiedName](AbstractMember.md#getqualifiedname), [SimpleName](AbstractMember.md#setsimplename), [SimpleName](AbstractMember.md#getsimplename), [ModifiersString](AbstractMember.md#getmodifiersstring)


## Field Details

### baseMethod

<span style="font-family: monospace; font-size: 80%;">private [MethodReference](MethodReference.md) __baseMethod__</span>

Information about the method that this method overrides, if any.


---

### ownerName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __ownerName__</span>

The type (class/interface) that owns this method.


---

### params

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> __params__</span>

List of parameters for this method.


---

### returnDescription

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __returnDescription__</span>

Description of the method's return value.


---

### returnTypeName

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __returnTypeName__</span>

The return type of this method.


---

### returnTypeText

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __returnTypeText__</span>




---

### specifiedBy

<span style="font-family: monospace; font-size: 80%;">private [Link](Link.md) __specifiedBy__</span>

Name of the interface or specification this method is specified by.


---

### thrownTypes

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __thrownTypes__</span>

List of exception types that this method declares it can throw.


---


## Method Details

### addParam

<span style="font-family: monospace; font-size: 80%;">public void __addParam__([ParamNode](ParamNode.md) param)</span>

Adds a parameter to this method.


---

### addThrownType

<span style="font-family: monospace; font-size: 80%;">public void __addThrownType__([Link](Link.md) name)</span>

Adds an exception type that this method declares it throws.


---

### getBaseMethod

<span style="font-family: monospace; font-size: 80%;">public [MethodReference](MethodReference.md) __getBaseMethod__()</span>

Returns the base method information, if any.

**Returns:**

the a reference to the base method and the text representing it, or null if none.


---

### getOwnerName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOwnerName__()</span>

Returns the owning type of this method.

**Returns:**

the name of the TypeNode representing the owner.


---

### getParams

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> __getParams__()</span>

Returns the list of parameters of this method.

**Returns:**

List of ParamNode objects representing the method parameters.


---

### getReturnDescription

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getReturnDescription__()</span>

Returns the description of the method's return value.

**Returns:**

a Text object containing the return description.


---

### getReturnTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getReturnTypeName__()</span>

Returns the return type of this method.

**Returns:**

the TypeNode representing the return type.


---

### getReturnTypeText

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getReturnTypeText__()</span>

Returns the type Text of this parameter.

**Returns:**

The Text representing the parameter's type.


---

### getSpecifiedBy

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getSpecifiedBy__()</span>

Returns the name of the interface or specification this method is specified by.

**Returns:**

the specifying interface or specification name.


---

### getThrownTypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __getThrownTypes__()</span>

Returns the list of exception types declared by this method.

**Returns:**

List of exception type names as Strings.


---

### setBaseMethod

<span style="font-family: monospace; font-size: 80%;">public void __setBaseMethod__([MethodReference](MethodReference.md) baseMethod)</span>

Sets the base method information that this method overrides.


---

### setOwnerName

<span style="font-family: monospace; font-size: 80%;">public void __setOwnerName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)</span>

Sets the owning type (class/interface) of this method.


---

### setReturnDescription

<span style="font-family: monospace; font-size: 80%;">public void __setReturnDescription__([Text](Text.md) text)</span>

Sets the description of the method's return value.


---

### setReturnTypeText

<span style="font-family: monospace; font-size: 80%;">public void __setReturnTypeText__([Text](Text.md) text)</span>

Sets the type Text of this parameter.


---

### setSpecifiedBy

<span style="font-family: monospace; font-size: 80%;">public void __setSpecifiedBy__([Link](Link.md) interfaceName)</span>

Sets the interface or specification name this method is specified by.


---

### signature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __signature__()</span>

Computes and returns the method signature string, including return type, name, and parameters.
Example format: "java.lang.String methodName(int,java.util.List)"

**Returns:**

the method signature as a String.


---

