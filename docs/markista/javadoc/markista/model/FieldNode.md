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
| private [Link](Link.md)                                                                                        | [constantValueReference](#constantvaluereference) |                                                    |



## Constructor Summary

| Constructor                                                                                                                                                                                                     | Description                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| FieldNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a FieldNode with the given type and name. |



## Method Summary

| Modifier and Type                                                                                             | Method                                                                                                                                                      | Description                                                           |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)           | [fullSignature](#fullsignature)()                                                                                                                           | Returns the full signature of the field including modifiers and name. |
| public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) | [getConstantValue](#getconstantvalue)()                                                                                                                     | Returns the constant value of this field.                             |
| public [Link](Link.md)                                                                                        | [getConstantValueReference](#getconstantvaluereference)()                                                                                                   |                                                                       |
| public void                                                                                                   | [setConstantValue](#setconstantvalue)([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue) | Sets the constant value of this field.                                |
| public void                                                                                                   | [setConstantValueReference](#setconstantvaluereference)([Link](Link.md) ref)                                                                                |                                                                       |


### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AppliedAnnotation](AbstractMember.md#addappliedannotation), [Modifier](AbstractMember.md#addmodifier), [QualifiedName](AbstractMember.md#setqualifiedname), [Modifiers](AbstractMember.md#getmodifiers), [AppliedAnnotations](AbstractMember.md#getappliedannotations), [QualifiedName](AbstractMember.md#getqualifiedname), [SimpleName](AbstractMember.md#setsimplename), [SimpleName](AbstractMember.md#getsimplename), [ModifiersString](AbstractMember.md#getmodifiersstring)

### Methods inherited from [io.github.sandydunlop.markista.model.ParamNode](ParamNode.md)

[TypeName](ParamNode.md#settypename), [TypeName](ParamNode.md#gettypename), [TypeText](ParamNode.md#gettypetext), [TypeText](ParamNode.md#settypetext)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[References](Node.md#getreferences), [DeprecationText](Node.md#setdeprecationtext), [Body](Node.md#getbody), [References](Node.md#setreferences), [FirstSentence](Node.md#setfirstsentence), [Deprecation](Node.md#setdeprecation), [Deprecation](Node.md#getdeprecation), [UUID](Node.md#getuuid), [FullBody](Node.md#getfullbody), [Kind](Node.md#getkind), [Since](Node.md#getsince), [FullBody](Node.md#setfullbody), [Kind](Node.md#setkind), [Body](Node.md#setbody), [Since](Node.md#setsince), [FirstSentence](Node.md#getfirstsentence), [DeprecationText](Node.md#getdeprecationtext)


## Field Details

### constantValue

<span style="font-family: monospace; font-size: 80%;">private [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) __constantValue__</span>

The constant value assigned to this field, if any.


---

### constantValueReference

<span style="font-family: monospace; font-size: 80%;">private [Link](Link.md) __constantValueReference__</span>




---


## Method Details

### fullSignature

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullSignature__()</span>

Returns the full signature of the field including modifiers and name.

**Returns:**

The string representing the full signature.


---

### getConstantValue

<span style="font-family: monospace; font-size: 80%;">public [Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) __getConstantValue__()</span>

Returns the constant value of this field.

**Returns:**

The constant value of the field or null if none.


---

### getConstantValueReference

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getConstantValueReference__()</span>




---

### setConstantValue

<span style="font-family: monospace; font-size: 80%;">public void __setConstantValue__([Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html) constantValue)</span>

Sets the constant value of this field.


---

### setConstantValueReference

<span style="font-family: monospace; font-size: 80%;">public void __setConstantValueReference__([Link](Link.md) ref)</span>




---

