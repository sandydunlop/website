Package [io.github.sandydunlop.markista.model](index.md)

# Class MethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                io.github.sandydunlop.markista.model.MethodNode<br/>
<br/>

----

<span style="font-family: monospace;">public Class __MethodNode__</span>

Contains information about a method being documented


## Field Summary

| Modifier and Type                                                                                                                                                                                          | Field                                   | Description                                                         |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------|
| private [Text](Text.md)                                                                                                                                                                                    | [returnDescription](#returndescription) | Description of the method's return value.                           |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                       | [specifiedBy](#specifiedby)             | Name of the interface or specification this method is specified by. |
| private final [TypeNode](TypeNode.md)                                                                                                                                                                      | [returnType](#returntype)               | The return type of this method.                                     |
| private [OverriddenMethodNode](OverriddenMethodNode.md)                                                                                                                                                    | [overrides](#overrides)                 | Information about the method that this method overrides, if any.    |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt;                                                                    | [params](#params)                       | List of parameters for this method.                                 |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [thrownTypes](#throwntypes)             | List of exception types that this method declares it can throw.     |
| private [TypeNode](TypeNode.md)                                                                                                                                                                            | [owner](#owner)                         | The type (class/interface) that owns this method.                   |

## Constructor Summary

| Constructor                                                                                                                                       | Description                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| MethodNode([TypeNode](TypeNode.md) returnType, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a MethodNode with the specified return type and method name. |

## Method Summary

| Modifier and Type                                                                                                                                                                                   | Method                                                                                                                                        | Description                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| public void                                                                                                                                                                                         | [setOverriddenMethod](#setoverriddenmethod)([OverriddenMethodNode](OverriddenMethodNode.md) overrides)                                        | Sets the overridden method information that this method overrides.                             |
| public [OverriddenMethodNode](OverriddenMethodNode.md)                                                                                                                                              | [getOverriddenMethod](#getoverriddenmethod)()                                                                                                 | Returns the overridden method information, if any.                                             |
| public [TypeNode](TypeNode.md)                                                                                                                                                                      | [getReturnType](#getreturntype)()                                                                                                             | Returns the return type of this method.                                                        |
| public void                                                                                                                                                                                         | [addParam](#addparam)([ParamNode](ParamNode.md) param)                                                                                        | Adds a parameter to this method.                                                               |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt;                                                                    | [getParams](#getparams)()                                                                                                                     | Returns the list of parameters of this method.                                                 |
| public void                                                                                                                                                                                         | [addThrownType](#addthrowntype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)            | Adds an exception type that this method declares it throws.                                    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getThrownTypes](#getthrowntypes)()                                                                                                           | Returns the list of exception types declared by this method.                                   |
| public void                                                                                                                                                                                         | [setOwner](#setowner)([TypeNode](TypeNode.md) owner)                                                                                          | Sets the owning type (class/interface) of this method.                                         |
| public [TypeNode](TypeNode.md)                                                                                                                                                                      | [getOwner](#getowner)()                                                                                                                       | Returns the owning type of this method.                                                        |
| public void                                                                                                                                                                                         | [setSpecifiedBy](#setspecifiedby)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName) | Sets the interface or specification name this method is specified by.                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getSpecifiedBy](#getspecifiedby)()                                                                                                           | Returns the name of the interface or specification this method is specified by.                |
| public void                                                                                                                                                                                         | [setReturnDescription](#setreturndescription)([Text](Text.md) text)                                                                           | Sets the description of the method's return value.                                             |
| public [Text](Text.md)                                                                                                                                                                              | [getReturnDescription](#getreturndescription)()                                                                                               | Returns the description of the method's return value.                                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [signature](#signature)()                                                                                                                     | Computes and returns the method signature string, including return type, name, and parameters. |
| public void                                                                                                                                                                                         | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)            | Sets the simple name of the method.                                                            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getSimpleName](#getsimplename)()                                                                                                             | Returns the simple name of the method.                                                         |

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

public void setOverriddenMethod([OverriddenMethodNode](OverriddenMethodNode.md) overrides)

Sets the overridden method information that this method overrides.


---

### getOverriddenMethod

public [OverriddenMethodNode](OverriddenMethodNode.md) getOverriddenMethod()

Returns the overridden method information, if any.

**Returns:**

the OverriddenMethodNode representing the overridden method, or null if none.


---

### getReturnType

public [TypeNode](TypeNode.md) getReturnType()

Returns the return type of this method.

**Returns:**

the TypeNode representing the return type.


---

### addParam

public void addParam([ParamNode](ParamNode.md) param)

Adds a parameter to this method.


---

### getParams

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](ParamNode.md)&gt; getParams()

Returns the list of parameters of this method.

**Returns:**

List of ParamNode objects representing the method parameters.


---

### addThrownType

public void addThrownType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Adds an exception type that this method declares it throws.


---

### getThrownTypes

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getThrownTypes()

Returns the list of exception types declared by this method.

**Returns:**

List of exception type names as Strings.


---

### setOwner

public void setOwner([TypeNode](TypeNode.md) owner)

Sets the owning type (class/interface) of this method.


---

### getOwner

public [TypeNode](TypeNode.md) getOwner()

Returns the owning type of this method.

**Returns:**

the TypeNode representing the owner.


---

### setSpecifiedBy

public void setSpecifiedBy([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) interfaceName)

Sets the interface or specification name this method is specified by.


---

### getSpecifiedBy

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSpecifiedBy()

Returns the name of the interface or specification this method is specified by.

**Returns:**

the specifying interface or specification name.


---

### setReturnDescription

public void setReturnDescription([Text](Text.md) text)

Sets the description of the method's return value.


---

### getReturnDescription

public [Text](Text.md) getReturnDescription()

Returns the description of the method's return value.

**Returns:**

a Text object containing the return description.


---

### signature

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature()

Computes and returns the method signature string, including return type, name, and parameters.
Example format: "java.lang.String methodName(int, java.util.List)"

**Returns:**

the method signature as a String.


---

### setSimpleName

public void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the simple name of the method.


---

### getSimpleName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()

Returns the simple name of the method.

**Returns:**

the simple name as a String.


---

