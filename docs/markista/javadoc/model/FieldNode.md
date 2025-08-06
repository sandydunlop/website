Package [io.github.sandydunlop.markista.model](index.md)

# Class FieldNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                [ParamNode](ParamNode.md)<br/>
                        io.github.sandydunlop.markista.model.FieldNode<br/>
<br/>

----

A class to hold information about fields within a class, interface, or enum.


## Field Summary

| Modifier and Type                                                                                              | Field                           | Description                                        |
|----------------------------------------------------------------------------------------------------------------|---------------------------------|----------------------------------------------------|
| private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [constantValue](#constantvalue) | The constant value assigned to this field, if any. |

## Constructor Summary

| Constructor                                                                                                                                | Description                                          |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| FieldNode([TypeNode](TypeNode.md) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a FieldNode with the given type and name. |

## Method Summary

| Modifier and Type                                                                                      | Method                                                                                                                                                      | Description                                                           |
|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [getConstantValue](#getconstantvalue)()                                                                                                                     | Returns the constant value of this field.                             |
| void                                                                                                   | [setConstantValue](#setconstantvalue)([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue) | Sets the constant value of this field.                                |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)           | [fullSignature](#fullsignature)()                                                                                                                           | Returns the full signature of the field including modifiers and name. |

## Field Details

### constantValue

The constant value assigned to this field, if any.


---


## Method Details

### getConstantValue

[Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) getConstantValue()

Returns the constant value of this field.

**Returns:**

The constant value of the field or null if none.


---

### setConstantValue

void setConstantValue([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue)

Sets the constant value of this field.

**Parameters:**

`constantValue` - The constant value to set.


---

### fullSignature

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullSignature()

Returns the full signature of the field including modifiers and name.

**Returns:**

The string representing the full signature.


---

