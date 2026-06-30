Package [io.github.sandydunlop.markista.model](index.md)

# Class FieldNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.ParamNode](ParamNode.md)<br/>
                                io.github.sandydunlop.markista.model.FieldNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __FieldNode__<br/>extends [ParamNode](ParamNode.md)
</span>

A class to hold information about fields within a class, interface, or enum.


## Field Summary

| Modifier and Type                                                                                              | Field                                             | Description                                        |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------|----------------------------------------------------|
| private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [constantValue](#constantvalue)                   | The constant value assigned to this field, if any. |
| private [VariableType](VariableType.md)                                                                        | [constantValueReference](#constantvaluereference) |                                                    |



## Constructor Summary

| Constructor                                                                                                                                                                                                     | Description                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| FieldNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a FieldNode with the given type and name. |



## Method Summary

| Modifier and Type                                                                                             | Method                                                                                                                                                      | Description                                                           |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [getConstantValue](#getconstantvalue)()                                                                                                                     | Returns the constant value of this field.                             |
| public void                                                                                                   | [setConstantValue](#setconstantvalue)([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue) | Sets the constant value of this field.                                |
| public void                                                                                                   | [setConstantValueReference](#setconstantvaluereference)([VariableType](VariableType.md) ref)                                                                |                                                                       |
| public [VariableType](VariableType.md)                                                                        | [getConstantValueReference](#getconstantvaluereference)()                                                                                                   |                                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)           | [fullSignature](#fullsignature)()                                                                                                                           | Returns the full signature of the field including modifiers and name. |


### Methods inherited from [AbstractMember](AbstractMember.md)

[addAppliedAnnotation](AbstractMember.md#addappliedannotation), [setName](AbstractMember.md#setname), [addModifier](AbstractMember.md#addmodifier), [getName](AbstractMember.md#getname), [getModifiers](AbstractMember.md#getmodifiers), [getAppliedAnnotations](AbstractMember.md#getappliedannotations), [getPackageName](AbstractMember.md#getpackagename), [setPackageName](AbstractMember.md#setpackagename), [getModifiersString](AbstractMember.md#getmodifiersstring)

### Methods inherited from [ParamNode](ParamNode.md)

[getType](ParamNode.md#gettype), [setType](ParamNode.md#settype)

### Methods inherited from [Node](Node.md)

[getReferences](Node.md#getreferences), [setDeprecationText](Node.md#setdeprecationtext), [getBody](Node.md#getbody), [setFirstSentence](Node.md#setfirstsentence), [setDeprecation](Node.md#setdeprecation), [getDeprecation](Node.md#getdeprecation), [getUUID](Node.md#getuuid), [getFullBody](Node.md#getfullbody), [setReferences](Node.md#setreferences), [getKind](Node.md#getkind), [getSince](Node.md#getsince), [setSince](Node.md#setsince), [setBody](Node.md#setbody), [getFirstSentence](Node.md#getfirstsentence), [setKind](Node.md#setkind), [getDeprecationText](Node.md#getdeprecationtext)


## Field Details

### constantValue

<span style="font-family: monospace; font-size: 80%;">private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) __constantValue__</span>

The constant value assigned to this field, if any.


---

### constantValueReference

<span style="font-family: monospace; font-size: 80%;">private [VariableType](VariableType.md) __constantValueReference__</span>




---


## Method Details

### getConstantValue

<span style="font-family: monospace; font-size: 80%;">public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) __getConstantValue__()</span>

Returns the constant value of this field.

**Returns:**

The constant value of the field or null if none.


---

### setConstantValue

<span style="font-family: monospace; font-size: 80%;">public void __setConstantValue__([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue)</span>

Sets the constant value of this field.

**Parameters:**

`constantValue` - The constant value to set.


---

### setConstantValueReference

<span style="font-family: monospace; font-size: 80%;">public void __setConstantValueReference__([VariableType](VariableType.md) ref)</span>




---

### getConstantValueReference

<span style="font-family: monospace; font-size: 80%;">public [VariableType](VariableType.md) __getConstantValueReference__()</span>




---

### fullSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullSignature__()</span>

Returns the full signature of the field including modifiers and name.

**Returns:**

The string representing the full signature.


---

