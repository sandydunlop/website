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
| private [TypeReference](TypeReference.md)                                                                      | [constantValueReference](#constantvaluereference) |                                                    |



## Constructor Summary

| Constructor                                                                                                                                                                                                     | Description                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| FieldNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a FieldNode with the given type and name. |



## Method Summary

| Modifier and Type                                                                                             | Method                                                                                                                                                      | Description                                                           |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [getConstantValue](#getconstantvalue)()                                                                                                                     | Returns the constant value of this field.                             |
| public void                                                                                                   | [setConstantValue](#setconstantvalue)([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue) | Sets the constant value of this field.                                |
| public void                                                                                                   | [setConstantValueReference](#setconstantvaluereference)([TypeReference](TypeReference.md) ref)                                                              |                                                                       |
| public [TypeReference](TypeReference.md)                                                                      | [getConstantValueReference](#getconstantvaluereference)()                                                                                                   |                                                                       |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)           | [fullSignature](#fullsignature)()                                                                                                                           | Returns the full signature of the field including modifiers and name. |


### Methods inherited from [io.github.sandydunlop.markista.model.ParamNode](ParamNode.md)

[ParamNode.getType](ParamNode.md#gettype), [ParamNode.setType](ParamNode.md#settype)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[Node.getReferences](Node.md#getreferences), [Node.setDeprecationText](Node.md#setdeprecationtext), [Node.getBody](Node.md#getbody), [Node.setFirstSentence](Node.md#setfirstsentence), [Node.setDeprecation](Node.md#setdeprecation), [Node.getDeprecation](Node.md#getdeprecation), [Node.getUUID](Node.md#getuuid), [Node.getFullBody](Node.md#getfullbody), [Node.setReferences](Node.md#setreferences), [Node.getKind](Node.md#getkind), [Node.getSince](Node.md#getsince), [Node.setFullBody](Node.md#setfullbody), [Node.setSince](Node.md#setsince), [Node.setBody](Node.md#setbody), [Node.getFirstSentence](Node.md#getfirstsentence), [Node.setKind](Node.md#setkind), [Node.getDeprecationText](Node.md#getdeprecationtext)

### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AbstractMember.addAppliedAnnotation](AbstractMember.md#addappliedannotation), [AbstractMember.addModifier](AbstractMember.md#addmodifier), [AbstractMember.setQualifiedName](AbstractMember.md#setqualifiedname), [AbstractMember.getName](AbstractMember.md#getname), [AbstractMember.getModifiers](AbstractMember.md#getmodifiers), [AbstractMember.getAppliedAnnotations](AbstractMember.md#getappliedannotations), [AbstractMember.getPackageName](AbstractMember.md#getpackagename), [AbstractMember.setNestedName](AbstractMember.md#setnestedname), [AbstractMember.setPackageName](AbstractMember.md#setpackagename), [AbstractMember.getQualifiedName](AbstractMember.md#getqualifiedname), [AbstractMember.setSimpleName](AbstractMember.md#setsimplename), [AbstractMember.getSimpleName](AbstractMember.md#getsimplename), [AbstractMember.getModifiersString](AbstractMember.md#getmodifiersstring), [AbstractMember.getNestedName](AbstractMember.md#getnestedname), [AbstractMember.setName](AbstractMember.md#setname)


## Field Details

### constantValue

<span style="font-family: monospace; font-size: 80%;">private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) __constantValue__</span>

The constant value assigned to this field, if any.


---

### constantValueReference

<span style="font-family: monospace; font-size: 80%;">private [TypeReference](TypeReference.md) __constantValueReference__</span>




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


---

### setConstantValueReference

<span style="font-family: monospace; font-size: 80%;">public void __setConstantValueReference__([TypeReference](TypeReference.md) ref)</span>




---

### getConstantValueReference

<span style="font-family: monospace; font-size: 80%;">public [TypeReference](TypeReference.md) __getConstantValueReference__()</span>




---

### fullSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullSignature__()</span>

Returns the full signature of the field including modifiers and name.

**Returns:**

The string representing the full signature.


---

