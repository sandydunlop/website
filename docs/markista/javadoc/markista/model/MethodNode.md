Package [io.github.sandydunlop.markista.model](index.md)

# Class MethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                        io.github.sandydunlop.markista.model.MethodNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __MethodNode__</span>

Contains information about a method being documented


## Field Summary

| Modifier and Type                                                                                                                 | Field                                   | Description                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------|
| private [Text](Text.md)                                                                                                           | [returnDescription](#returndescription) | Description of the method's return value.                           |
| private [Reference](Reference.md)                                                                                                 | [specifiedBy](#specifiedby)             | Name of the interface or specification this method is specified by. |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [returnTypeName](#returntypename)       | The return type of this method.                                     |
| private [Reference](Reference.md)                                                                                                 | [baseMethod](#basemethod)               | Information about the method that this method overrides, if any.    |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> | [params](#params)                       | List of parameters for this method.                                 |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> | [thrownTypes](#throwntypes)             | List of exception types that this method declares it can throw.     |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                              | [ownerName](#ownername)                 | The type (class/interface) that owns this method.                   |
| private [Text](Text.md)                                                                                                           | [returnTypeText](#returntypetext)       |                                                                     |

## Constructor Summary

| Constructor                                                                                                                                                                                                            | Description                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| MethodNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) returnType, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a MethodNode with the specified return type and method name. |

## Method Summary

| Modifier and Type                                                                                                          | Method                                                                                                                            | Description                                                                                    |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| public void                                                                                                                | [setBaseMethod](#setbasemethod)([Reference](Reference.md) overrides)                                                              | Sets the base method information that this method overrides.                                   |
| public [Reference](Reference.md)                                                                                           | [getBaseMethod](#getbasemethod)()                                                                                                 | Returns the base method information, if any.                                                   |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [getReturnTypeName](#getreturntypename)()                                                                                         | Returns the return type of this method.                                                        |
| public void                                                                                                                | [addParam](#addparam)([ParamNode](ParamNode.md) param)                                                                            | Adds a parameter to this method.                                                               |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> | [getParams](#getparams)()                                                                                                         | Returns the list of parameters of this method.                                                 |
| public void                                                                                                                | [addThrownType](#addthrowntype)([Reference](Reference.md) name)                                                                   | Adds an exception type that this method declares it throws.                                    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> | [getThrownTypes](#getthrowntypes)()                                                                                               | Returns the list of exception types declared by this method.                                   |
| public void                                                                                                                | [setOwnerName](#setownername)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner) | Sets the owning type (class/interface) of this method.                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [getOwnerName](#getownername)()                                                                                                   | Returns the owning type of this method.                                                        |
| public void                                                                                                                | [setSpecifiedBy](#setspecifiedby)([Reference](Reference.md) interfaceName)                                                        | Sets the interface or specification name this method is specified by.                          |
| public [Reference](Reference.md)                                                                                           | [getSpecifiedBy](#getspecifiedby)()                                                                                               | Returns the name of the interface or specification this method is specified by.                |
| public void                                                                                                                | [setReturnDescription](#setreturndescription)([Text](Text.md) text)                                                               | Sets the description of the method's return value.                                             |
| public [Text](Text.md)                                                                                                     | [getReturnDescription](#getreturndescription)()                                                                                   | Returns the description of the method's return value.                                          |
| public [Text](Text.md)                                                                                                     | [getReturnTypeText](#getreturntypetext)()                                                                                         | Returns the type Text of this parameter.                                                       |
| public void                                                                                                                | [setReturnTypeText](#setreturntypetext)([Text](Text.md) text)                                                                     | Sets the type Text of this parameter.                                                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [signature](#signature)()                                                                                                         | Computes and returns the method signature string, including return type, name, and parameters. |

## Field Details

### returnDescription

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __returnDescription__</span>

Description of the method's return value.


---

### specifiedBy

<span style="font-family: monospace; font-size: 80%;">private [Reference](Reference.md) __specifiedBy__</span>

Name of the interface or specification this method is specified by.


---

### returnTypeName

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __returnTypeName__</span>

The return type of this method.


---

### baseMethod

<span style="font-family: monospace; font-size: 80%;">private [Reference](Reference.md) __baseMethod__</span>

Information about the method that this method overrides, if any.


---

### params

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> __params__</span>

List of parameters for this method.


---

### thrownTypes

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> __thrownTypes__</span>

List of exception types that this method declares it can throw.


---

### ownerName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __ownerName__</span>

The type (class/interface) that owns this method.


---

### returnTypeText

<span style="font-family: monospace; font-size: 80%;">private [Text](Text.md) __returnTypeText__</span>




---


## Method Details

### setBaseMethod

<span style="font-family: monospace; font-size: 80%;">public void __setBaseMethod__</span>

Sets the base method information that this method overrides.


---

### getBaseMethod

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __getBaseMethod__</span>

Returns the base method information, if any.

**Returns:**

the OverriddenMethodNode representing the base method, or null if none.


---

### getReturnTypeName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getReturnTypeName__</span>

Returns the return type of this method.

**Returns:**

the TypeNode representing the return type.


---

### addParam

<span style="font-family: monospace; font-size: 80%;">public void __addParam__</span>

Adds a parameter to this method.


---

### getParams

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> __getParams__</span>

Returns the list of parameters of this method.

**Returns:**

List of ParamNode objects representing the method parameters.


---

### addThrownType

<span style="font-family: monospace; font-size: 80%;">public void __addThrownType__</span>

Adds an exception type that this method declares it throws.


---

### getThrownTypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> __getThrownTypes__</span>

Returns the list of exception types declared by this method.

**Returns:**

List of exception type names as Strings.


---

### setOwnerName

<span style="font-family: monospace; font-size: 80%;">public void __setOwnerName__</span>

Sets the owning type (class/interface) of this method.


---

### getOwnerName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOwnerName__</span>

Returns the owning type of this method.

**Returns:**

the name of the TypeNode representing the owner.


---

### setSpecifiedBy

<span style="font-family: monospace; font-size: 80%;">public void __setSpecifiedBy__</span>

Sets the interface or specification name this method is specified by.


---

### getSpecifiedBy

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __getSpecifiedBy__</span>

Returns the name of the interface or specification this method is specified by.

**Returns:**

the specifying interface or specification name.


---

### setReturnDescription

<span style="font-family: monospace; font-size: 80%;">public void __setReturnDescription__</span>

Sets the description of the method's return value.


---

### getReturnDescription

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getReturnDescription__</span>

Returns the description of the method's return value.

**Returns:**

a Text object containing the return description.


---

### getReturnTypeText

<span style="font-family: monospace; font-size: 80%;">public [Text](Text.md) __getReturnTypeText__</span>

Returns the type Text of this parameter.

**Returns:**

The Text representing the parameter's type.


---

### setReturnTypeText

<span style="font-family: monospace; font-size: 80%;">public void __setReturnTypeText__</span>

Sets the type Text of this parameter.


---

### signature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __signature__</span>

Computes and returns the method signature string, including return type, name, and parameters.
Example format: "java.lang.String methodName(int, java.util.List)"

**Returns:**

the method signature as a String.


---

