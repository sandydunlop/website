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
| private [Link](Link.md)                                                                                                           | [baseMethod](#basemethod)               | Information about the method that this method overrides, if any.    |
| private boolean                                                                                                                   | [isConstructor](#isconstructor)         |                                                                     |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                              | [ownerName](#ownername)                 | The type (class/interface) that owns this method.                   |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> | [params](#params)                       | List of parameters for this method.                                 |
| private [Text](Text.md)                                                                                                           | [returnDescription](#returndescription) | Description of the method's return value.                           |
| private [TypeReference](TypeReference.md)                                                                                         | [returnType](#returntype)               | The return type of this method.                                     |
| private [Link](Link.md)                                                                                                           | [specifiedBy](#specifiedby)             | Name of the interface or specification this method is specified by. |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)>           | [thrownTypes](#throwntypes)             | List of exception types that this method declares it can throw.     |



## Constructor Summary

| Constructor                                                                                                                                                                                                            | Description                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| MethodNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) returnType, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a MethodNode with the specified return type and method name. |



## Method Summary

| Modifier and Type                                                                                                          | Method                                                                                                                            | Description                                                                                    |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| public void                                                                                                                | [setConstructor](#setconstructor)(boolean b)                                                                                      |                                                                                                |
| public boolean                                                                                                             | [isConstructor](#isconstructor)()                                                                                                 |                                                                                                |
| public void                                                                                                                | [setBaseMethod](#setbasemethod)([Link](Link.md) baseMethod)                                                                       | Sets the base method information that this method overrides.                                   |
| public [Link](Link.md)                                                                                                     | [getBaseMethod](#getbasemethod)()                                                                                                 | Returns the base method information, if any.                                                   |
| public [TypeReference](TypeReference.md)                                                                                   | [getReturnType](#getreturntype)()                                                                                                 | Returns the return type of this method.                                                        |
| public void                                                                                                                | [addParam](#addparam)([ParamNode](ParamNode.md) param)                                                                            | Adds a parameter to this method.                                                               |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> | [getParams](#getparams)()                                                                                                         | Returns the list of parameters of this method.                                                 |
| public io.github.sandydunlop.markista.model.TypeReference[][]                                                              | [getParamTypes](#getparamtypes)()                                                                                                 |                                                                                                |
| public void                                                                                                                | [addThrownType](#addthrowntype)([Link](Link.md) name)                                                                             | Adds an exception type that this method declares it throws.                                    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)>           | [getThrownTypes](#getthrowntypes)()                                                                                               | Returns the list of exception types declared by this method.                                   |
| public void                                                                                                                | [setOwnerName](#setownername)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner) | Sets the owning type (class/interface) of this method.                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [getOwnerName](#getownername)()                                                                                                   | Returns the owning type of this method.                                                        |
| public void                                                                                                                | [setSpecifiedBy](#setspecifiedby)([Link](Link.md) interfaceName)                                                                  | Sets the interface or specification name this method is specified by.                          |
| public [Link](Link.md)                                                                                                     | [getSpecifiedBy](#getspecifiedby)()                                                                                               | Returns the name of the interface or specification this method is specified by.                |
| public void                                                                                                                | [setReturnDescription](#setreturndescription)([Text](Text.md) text)                                                               | Sets the description of the method's return value.                                             |
| public [Text](Text.md)                                                                                                     | [getReturnDescription](#getreturndescription)()                                                                                   | Returns the description of the method's return value.                                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [simplifiedSignature](#simplifiedsignature)()                                                                                     | Computes and returns the method signature string, including return type, name, and parameters. |


### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AbstractMember.addAppliedAnnotation](AbstractMember.md#addappliedannotation), [AbstractMember.addModifier](AbstractMember.md#addmodifier), [AbstractMember.setQualifiedName](AbstractMember.md#setqualifiedname), [AbstractMember.getModifiers](AbstractMember.md#getmodifiers), [AbstractMember.getAppliedAnnotations](AbstractMember.md#getappliedannotations), [AbstractMember.getQualifiedName](AbstractMember.md#getqualifiedname), [AbstractMember.setSimpleName](AbstractMember.md#setsimplename), [AbstractMember.getSimpleName](AbstractMember.md#getsimplename), [AbstractMember.getModifiersString](AbstractMember.md#getmodifiersstring)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[Node.getReferences](Node.md#getreferences), [Node.setDeprecationText](Node.md#setdeprecationtext), [Node.getBody](Node.md#getbody), [Node.setFirstSentence](Node.md#setfirstsentence), [Node.setDeprecation](Node.md#setdeprecation), [Node.getDeprecation](Node.md#getdeprecation), [Node.getUUID](Node.md#getuuid), [Node.getFullBody](Node.md#getfullbody), [Node.setReferences](Node.md#setreferences), [Node.getKind](Node.md#getkind), [Node.getSince](Node.md#getsince), [Node.setFullBody](Node.md#setfullbody), [Node.setSince](Node.md#setsince), [Node.setBody](Node.md#setbody), [Node.getFirstSentence](Node.md#getfirstsentence), [Node.setKind](Node.md#setkind), [Node.getDeprecationText](Node.md#getdeprecationtext)


## Field Details

### baseMethod

<span style="font-family: monospace; font-size: 80%;">private [Link](Link.md) __baseMethod__</span>

Information about the method that this method overrides, if any.


---

### isConstructor

<span style="font-family: monospace; font-size: 80%;">private boolean __isConstructor__</span>




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

### returnType

<span style="font-family: monospace; font-size: 80%;">private [TypeReference](TypeReference.md) __returnType__</span>

The return type of this method.


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

### setConstructor

<span style="font-family: monospace; font-size: 80%;">public void __setConstructor__(boolean b)</span>




---

### isConstructor

<span style="font-family: monospace; font-size: 80%;">public boolean __isConstructor__()</span>




---

### setBaseMethod

<span style="font-family: monospace; font-size: 80%;">public void __setBaseMethod__([Link](Link.md) baseMethod)</span>

Sets the base method information that this method overrides.


---

### getBaseMethod

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getBaseMethod__()</span>

Returns the base method information, if any.

**Returns:**

the a reference to the base method and the text representing it, or null if none.


---

### getReturnType

<span style="font-family: monospace; font-size: 80%;">public [TypeReference](TypeReference.md) __getReturnType__()</span>

Returns the return type of this method.

**Returns:**

the TypeNode representing the return type.


---

### addParam

<span style="font-family: monospace; font-size: 80%;">public void __addParam__([ParamNode](ParamNode.md) param)</span>

Adds a parameter to this method.


---

### getParams

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> __getParams__()</span>

Returns the list of parameters of this method.

**Returns:**

List of ParamNode objects representing the method parameters.


---

### getParamTypes

<span style="font-family: monospace; font-size: 80%;">public io.github.sandydunlop.markista.model.TypeReference[][] __getParamTypes__()</span>




---

### addThrownType

<span style="font-family: monospace; font-size: 80%;">public void __addThrownType__([Link](Link.md) name)</span>

Adds an exception type that this method declares it throws.


---

### getThrownTypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __getThrownTypes__()</span>

Returns the list of exception types declared by this method.

**Returns:**

List of exception type names as Strings.


---

### setOwnerName

<span style="font-family: monospace; font-size: 80%;">public void __setOwnerName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)</span>

Sets the owning type (class/interface) of this method.


---

### getOwnerName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOwnerName__()</span>

Returns the owning type of this method.

**Returns:**

the name of the TypeNode representing the owner.


---

### setSpecifiedBy

<span style="font-family: monospace; font-size: 80%;">public void __setSpecifiedBy__([Link](Link.md) interfaceName)</span>

Sets the interface or specification name this method is specified by.


---

### getSpecifiedBy

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getSpecifiedBy__()</span>

Returns the name of the interface or specification this method is specified by.

**Returns:**

the specifying interface or specification name.


---

### setReturnDescription

<span style="font-family: monospace; font-size: 80%;">public void __setReturnDescription__([Text](Text.md) text)</span>

Sets the description of the method's return value.


---

### getReturnDescription

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getReturnDescription__()</span>

Returns the description of the method's return value.

**Returns:**

a Text object containing the return description.


---

### simplifiedSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simplifiedSignature__()</span>

Computes and returns the method signature string, including return type, name, and parameters.
Example format: "java.lang.String methodName(int,java.util.List)"

**Returns:**

the method signature as a String.


---

