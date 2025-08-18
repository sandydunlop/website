Package [io.github.sandydunlop.markista.model](index.md)

# Class MethodNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                        io.github.sandydunlop.markista.model.MethodNode<br/>
<br/>

----

<span style="font-family: monospace;">public class __MethodNode__</span>

Contains information about a method being documented


## Field Summary

| Modifier and Type                                                                                                                 | Field                                   | Description                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------|
| private [Text](Text.md)                                                                                                           | [returnDescription](#returndescription) | Description of the method's return value.                           |
| private [Reference](Reference.md)                                                                                                 | [specifiedBy](#specifiedby)             | Name of the interface or specification this method is specified by. |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                        | [returnTypeName](#returntypename)       | The return type of this method.                                     |
| private [OverriddenMethodNode](OverriddenMethodNode.md)                                                                           | [overrides](#overrides)                 | Information about the method that this method overrides, if any.    |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> | [params](#params)                       | List of parameters for this method.                                 |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> | [thrownTypes](#throwntypes)             | List of exception types that this method declares it can throw.     |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                              | [ownerName](#ownername)                 | The type (class/interface) that owns this method.                   |
| private [Text](Text.md)                                                                                                           | [returnTypeText](#returntypetext)       |                                                                     |

## Constructor Summary

| Constructor                    | Description                                                             |
|--------------------------------|-------------------------------------------------------------------------|
| MethodNode( returnType,  name) | Constructs a MethodNode with the specified return type and method name. |

## Method Summary

| Modifier and Type                                                                                                          | Method                                                                                                                            | Description                                                                                    |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| public void                                                                                                                | [setOverriddenMethod](#setoverriddenmethod)([OverriddenMethodNode](OverriddenMethodNode.md) overrides)                            | Sets the overridden method information that this method overrides.                             |
| public [OverriddenMethodNode](OverriddenMethodNode.md)                                                                     | [getOverriddenMethod](#getoverriddenmethod)()                                                                                     | Returns the overridden method information, if any.                                             |
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

Description of the method's return value.


---

### specifiedBy

Name of the interface or specification this method is specified by.


---

### returnTypeName

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

### ownerName

The type (class/interface) that owns this method.


---

### returnTypeText




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

### getReturnTypeName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getReturnTypeName()

Returns the return type of this method.

**Returns:**

the TypeNode representing the return type.


---

### addParam

public void addParam([ParamNode](ParamNode.md) param)

Adds a parameter to this method.


---

### getParams

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[ParamNode](ParamNode.md)> getParams()

Returns the list of parameters of this method.

**Returns:**

List of ParamNode objects representing the method parameters.


---

### addThrownType

public void addThrownType([Reference](Reference.md) name)

Adds an exception type that this method declares it throws.


---

### getThrownTypes

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> getThrownTypes()

Returns the list of exception types declared by this method.

**Returns:**

List of exception type names as Strings.


---

### setOwnerName

public void setOwnerName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)

Sets the owning type (class/interface) of this method.


---

### getOwnerName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getOwnerName()

Returns the owning type of this method.

**Returns:**

the name of the TypeNode representing the owner.


---

### setSpecifiedBy

public void setSpecifiedBy([Reference](Reference.md) interfaceName)

Sets the interface or specification name this method is specified by.


---

### getSpecifiedBy

public [Reference](Reference.md) getSpecifiedBy()

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

### getReturnTypeText

public [Text](Text.md) getReturnTypeText()

Returns the type Text of this parameter.

**Returns:**

The Text representing the parameter's type.


---

### setReturnTypeText

public void setReturnTypeText([Text](Text.md) text)

Sets the type Text of this parameter.


---

### signature

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) signature()

Computes and returns the method signature string, including return type, name, and parameters.
Example format: "java.lang.String methodName(int, java.util.List)"

**Returns:**

the method signature as a String.


---

