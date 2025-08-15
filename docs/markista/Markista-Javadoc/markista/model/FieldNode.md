Package [io.github.sandydunlop.markista.model](index.md)

# Class FieldNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.ModuleMemberNode](ModuleMemberNode.md)<br/>
                        [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                                [io.github.sandydunlop.markista.model.ParamNode](ParamNode.md)<br/>
                                        io.github.sandydunlop.markista.model.FieldNode<br/>
<br/>

----

<span style="font-family: monospace;">public Class __FieldNode__</span>

A class to hold information about fields within a class, interface, or enum.


## Field Summary

| Modifier and Type                                                                                              | Field                                             | Description                                        |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------|----------------------------------------------------|
| private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [constantValue](#constantvalue)                   | The constant value assigned to this field, if any. |
| private [Reference](Reference.md)                                                                              | [constantValueReference](#constantvaluereference) |                                                    |

## Constructor Summary

| Constructor             | Description                                          |
|-------------------------|------------------------------------------------------|
| FieldNode( type,  name) | Constructs a FieldNode with the given type and name. |

## Method Summary

| Modifier and Type                                                                                             | Method                                                                                                                                                      | Description                                                           |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [getConstantValue](#getconstantvalue)()                                                                                                                     | Returns the constant value of this field.                             |
| public void                                                                                                   | [setConstantValue](#setconstantvalue)([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue) | Sets the constant value of this field.                                |
| public void                                                                                                   | [setConstantValueReference](#setconstantvaluereference)([Reference](Reference.md) ref)                                                                      |                                                                       |
| public [Reference](Reference.md)                                                                              | [getConstantValueReference](#getconstantvaluereference)()                                                                                                   |                                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)           | [fullSignature](#fullsignature)()                                                                                                                           | Returns the full signature of the field including modifiers and name. |

## Field Details

### constantValue

The constant value assigned to this field, if any.


---

### constantValueReference




---


## Method Details

### getConstantValue

public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) getConstantValue()

Returns the constant value of this field.

**Returns:**

The constant value of the field or null if none.


---

### setConstantValue

public void setConstantValue([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue)

Sets the constant value of this field.


---

### setConstantValueReference

public void setConstantValueReference([Reference](Reference.md) ref)




---

### getConstantValueReference

public [Reference](Reference.md) getConstantValueReference()




---

### fullSignature

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullSignature()

Returns the full signature of the field including modifiers and name.

**Returns:**

The string representing the full signature.


---

