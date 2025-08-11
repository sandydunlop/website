Package [io.github.sandydunlop.markista.model](index.md)

# Class FieldNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.ParamNode](ParamNode.md)<br/>
                        io.github.sandydunlop.markista.model.FieldNode<br/>
<br/>

----

<span style="font-family: monospace;">public Class __FieldNode__</span>

A class to hold information about fields within a class, interface, or enum.


## Field Summary

| Modifier and Type                                                                                              | Field                           | Description                                        |
|----------------------------------------------------------------------------------------------------------------|---------------------------------|----------------------------------------------------|
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [qualifiedName](#qualifiedname) | The canonical form of the node's name              |
| private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [constantValue](#constantvalue) | The constant value assigned to this field, if any. |

## Constructor Summary

| Constructor                                                                                                                                | Description                                          |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| FieldNode([TypeNode](TypeNode.md) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a FieldNode with the given type and name. |

## Method Summary

| Modifier and Type                                                                                             | Method                                                                                                                                                      | Description                                                           |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| public void                                                                                                   | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                    | Sets the qualified name of this parameter.                            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)           | [getQualifiedName](#getqualifiedname)()                                                                                                                     | Returns the qualified name of this parameter.                         |
| public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [getConstantValue](#getconstantvalue)()                                                                                                                     | Returns the constant value of this field.                             |
| public void                                                                                                   | [setConstantValue](#setconstantvalue)([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue) | Sets the constant value of this field.                                |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)           | [fullSignature](#fullsignature)()                                                                                                                           | Returns the full signature of the field including modifiers and name. |

## Field Details

### qualifiedName

The canonical form of the node's name


---

### constantValue

The constant value assigned to this field, if any.


---


## Method Details

### setQualifiedName

public void setQualifiedName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the qualified name of this parameter.


---

### getQualifiedName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getQualifiedName()

Returns the qualified name of this parameter.

**Returns:**

The qualified name.


---

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

### fullSignature

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullSignature()

Returns the full signature of the field including modifiers and name.

**Returns:**

The string representing the full signature.


---

