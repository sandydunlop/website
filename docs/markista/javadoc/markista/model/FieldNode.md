Package [io.github.sandydunlop.markista.model](index.md)

# Class FieldNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.ParamNode](ParamNode.md)<br/>
                                io.github.sandydunlop.markista.model.FieldNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __FieldNode__</span>

A class to hold information about fields within a class, interface, or enum.


## Field Summary

| Modifier and Type                                                                                              | Field                                             | Description                                        |
|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------|----------------------------------------------------|
| private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [constantValue](#constantvalue)                   | The constant value assigned to this field, if any. |
| private [Reference](Reference.md)                                                                              | [constantValueReference](#constantvaluereference) |                                                    |

## Constructor Summary

| Constructor                                                                                                                                                                                                     | Description                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| FieldNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a FieldNode with the given type and name. |

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

<span style="font-family: monospace; font-size: 80%;">private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) __constantValue__</span>

The constant value assigned to this field, if any.


---

### constantValueReference

<span style="font-family: monospace; font-size: 80%;">private [Reference](Reference.md) __constantValueReference__</span>




---


## Method Details

### getConstantValue

<span style="font-family: monospace; font-size: 80%;">public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) __getConstantValue__</span>

Returns the constant value of this field.

**Returns:**

The constant value of the field or null if none.


---

### setConstantValue

<span style="font-family: monospace; font-size: 80%;">public void __setConstantValue__</span>

Sets the constant value of this field.


---

### setConstantValueReference

<span style="font-family: monospace; font-size: 80%;">public void __setConstantValueReference__</span>




---

### getConstantValueReference

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __getConstantValueReference__</span>




---

### fullSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullSignature__</span>

Returns the full signature of the field including modifiers and name.

**Returns:**

The string representing the full signature.


---

