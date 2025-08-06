Package [io.github.sandydunlop.markista.model](index.md)

# Class MethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.MethodNode<br/>
<br/>

----

Contains information about a method being documented


## Field Summary

| Modifier and Type                                                                                                                                                                                    | Field                                   | Description                                                         |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------|
| private [Text](Text.md)                                                                                                                                                                              | [returnDescription](#returndescription) | Description of the method's return value.                           |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [specifiedBy](#specifiedby)             | Name of the interface or specification this method is specified by. |
| private [TypeNode](TypeNode.md)                                                                                                                                                                      | [returnType](#returntype)               | The return type of this method.                                     |
| private [OverriddenMethodNode](OverriddenMethodNode.md)                                                                                                                                              | [overrides](#overrides)                 | Information about the method that this method overrides, if any.    |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt;                                                                    | [params](#params)                       | List of parameters for this method.                                 |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [thrownTypes](#throwntypes)             | List of exception types that this method declares it can throw.     |
| private [TypeNode](TypeNode.md)                                                                                                                                                                      | [owner](#owner)                         | The type (class/interface) that owns this method.                   |

## Constructor Summary

| Constructor                                                                                                                                       | Description                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| MethodNode([TypeNode](TypeNode.md) returnType, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a MethodNode with the specified return type and method name. |

## Method Summary

| Modifier and Type                                                                                                                                                                            | Method                                                                                                                                        | Description                                                                                    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| void                                                                                                                                                                                         | [setOverriddenMethod](#setoverriddenmethod)([OverriddenMethodNode](OverriddenMethodNode.md) overrides)                                        | Sets the overridden method information that this method overrides.                             |
| [OverriddenMethodNode](OverriddenMethodNode.md)                                                                                                                                              | [getOverriddenMethod](#getoverriddenmethod)()                                                                                                 | Returns the overridden method information, if any.                                             |
| [TypeNode](TypeNode.md)                                                                                                                                                                      | [getReturnType](#getreturntype)()                                                                                                             | Returns the return type of this method.                                                        |
| void                                                                                                                                                                                         | [addParam](#addparam)([ParamNode](ParamNode.md) param)                                                                                        | Adds a parameter to this method.                                                               |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt;                                                                    | [getParams](#getparams)()                                                                                                                     | Returns the list of parameters of this method.                                                 |
| void                                                                                                                                                                                         | [addThrownType](#addthrowntype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)            | Adds an exception type that this method declares it throws.                                    |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getThrownTypes](#getthrowntypes)()                                                                                                           | Returns the list of exception types declared by this method.                                   |
| void                                                                                                                                                                                         | [setOwner](#setowner)([TypeNode](TypeNode.md) owner)                                                                                          | Sets the owning type (class/interface) of this method.                                         |
| [TypeNode](TypeNode.md)                                                                                                                                                                      | [getOwner](#getowner)()                                                                                                                       | Returns the owning type of this method.                                                        |
| void                                                                                                                                                                                         | [setSpecifiedBy](#setspecifiedby)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName) | Sets the interface or specification name this method is specified by.                          |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getSpecifiedBy](#getspecifiedby)()                                                                                                           | Returns the name of the interface or specification this method is specified by.                |
| void                                                                                                                                                                                         | [setReturnDescription](#setreturndescription)([Text](Text.md) text)                                                                           | Sets the description of the method's return value.                                             |
| [Text](Text.md)                                                                                                                                                                              | [getReturnDescription](#getreturndescription)()                                                                                               | Returns the description of the method's return value.                                          |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [signature](#signature)()                                                                                                                     | Computes and returns the method signature string, including return type, name, and parameters. |
| void                                                                                                                                                                                         | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)            | Sets the simple name of the method.                                                            |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getSimpleName](#getsimplename)()                                                                                                             | Returns the simple name of the method.                                                         |

## Field Details

### returnDescription

Description of the method's return value.


---

### specifiedBy

Name of the interface or specification this method is specified by.


---

### returnType

The return type of this method.


---

### overrides

Information about the method that this method overrides, if any.


---

### params

List of parameters for this method.


---

### thrownTypes

List of exception types that this method declares it can throw.


---

### owner

The type (class/interface) that owns this method.


---


## Method Details

### setOverriddenMethod

void setOverriddenMethod([OverriddenMethodNode](OverriddenMethodNode.md) overrides)

Sets the overridden method information that this method overrides.

**Parameters:**

`overrides` - an OverriddenMethodNode representing the overridden method.


---

### getOverriddenMethod

[OverriddenMethodNode](OverriddenMethodNode.md) getOverriddenMethod()

Returns the overridden method information, if any.

**Returns:**

the OverriddenMethodNode representing the overridden method, or null if none.


---

### getReturnType

[TypeNode](TypeNode.md) getReturnType()

Returns the return type of this method.

**Returns:**

the TypeNode representing the return type.


---

### addParam

void addParam([ParamNode](ParamNode.md) param)

Adds a parameter to this method.

**Parameters:**

`param` - a ParamNode representing the parameter to add.


---

### getParams

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt; getParams()

Returns the list of parameters of this method.

**Returns:**

List of ParamNode objects representing the method parameters.


---

### addThrownType

void addThrownType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Adds an exception type that this method declares it throws.

**Parameters:**

`name` - the fully qualified name of the exception type.


---

### getThrownTypes

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getThrownTypes()

Returns the list of exception types declared by this method.

**Returns:**

List of exception type names as Strings.


---

### setOwner

void setOwner([TypeNode](TypeNode.md) owner)

Sets the owning type (class/interface) of this method.

**Parameters:**

`owner` - the TypeNode representing the owner.


---

### getOwner

[TypeNode](TypeNode.md) getOwner()

Returns the owning type of this method.

**Returns:**

the TypeNode representing the owner.


---

### setSpecifiedBy

void setSpecifiedBy([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)

Sets the interface or specification name this method is specified by.

**Parameters:**

`interfaceName` - the name of the specifying interface or specification.


---

### getSpecifiedBy

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSpecifiedBy()

Returns the name of the interface or specification this method is specified by.

**Returns:**

the specifying interface or specification name.


---

### setReturnDescription

void setReturnDescription([Text](Text.md) text)

Sets the description of the method's return value.

**Parameters:**

`text` - a Text object describing the return value.


---

### getReturnDescription

[Text](Text.md) getReturnDescription()

Returns the description of the method's return value.

**Returns:**

a Text object containing the return description.


---

### signature

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature()

Computes and returns the method signature string, including return type, name, and parameters.
Example format: "java.lang.String methodName(int, java.util.List)"

**Returns:**

the method signature as a String.


---

### setSimpleName

void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the simple name of the method.

**Parameters:**

`name` - the simple name to set.


---

### getSimpleName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()

Returns the simple name of the method.

**Returns:**

the simple name as a String.


---

