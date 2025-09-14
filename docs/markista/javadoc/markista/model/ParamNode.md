Package [io.github.sandydunlop.markista.model](index.md)

# Class ParamNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        io.github.sandydunlop.markista.model.ParamNode<br/>
<br/>
Direct Known Subtypes:<br/>
    [FieldNode](FieldNode.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __ParamNode__<br/>extends [AbstractMember](AbstractMember.md)
</span>

A class to hold information about method parameters.


## Field Summary

| Modifier and Type                       | Field         | Description                |
|-----------------------------------------|---------------|----------------------------|
| private [VariableType](VariableType.md) | [type](#type) | The type of this parameter |



## Constructor Summary

| Constructor                                                                                                                                                                                                           | Description                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| ParamNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName) | Constructs a ParamNode with the given type and name. |



## Method Summary

| Modifier and Type                      | Method                                                    | Description                              |
|----------------------------------------|-----------------------------------------------------------|------------------------------------------|
| public [VariableType](VariableType.md) | [getType](#gettype)()                                     | Returns the type Text of this parameter. |
| public void                            | [setType](#settype)([VariableType](VariableType.md) type) | Sets the type Text of this parameter.    |


### Methods inherited from [AbstractMember](AbstractMember.md)

[addAppliedAnnotation](AbstractMember.md#addappliedannotation), [setName](AbstractMember.md#setname), [addModifier](AbstractMember.md#addmodifier), [getName](AbstractMember.md#getname), [getModifiers](AbstractMember.md#getmodifiers), [getAppliedAnnotations](AbstractMember.md#getappliedannotations), [getPackageName](AbstractMember.md#getpackagename), [setPackageName](AbstractMember.md#setpackagename), [getModifiersString](AbstractMember.md#getmodifiersstring)

### Methods inherited from [Node](Node.md)

[getReferences](Node.md#getreferences), [setDeprecationText](Node.md#setdeprecationtext), [getBody](Node.md#getbody), [setFirstSentence](Node.md#setfirstsentence), [setDeprecation](Node.md#setdeprecation), [getDeprecation](Node.md#getdeprecation), [getUUID](Node.md#getuuid), [getFullBody](Node.md#getfullbody), [setReferences](Node.md#setreferences), [getKind](Node.md#getkind), [getSince](Node.md#getsince), [setSince](Node.md#setsince), [setBody](Node.md#setbody), [getFirstSentence](Node.md#getfirstsentence), [setKind](Node.md#setkind), [getDeprecationText](Node.md#getdeprecationtext)


## Field Details

### type

<span style="font-family: monospace; font-size: 80%;">private [VariableType](VariableType.md) __type__</span>

The type of this parameter


---


## Method Details

### getType

<span style="font-family: monospace; font-size: 80%;">public [VariableType](VariableType.md) __getType__()</span>

Returns the type Text of this parameter.

**Returns:**

The Text representing the parameter's type.


---

### setType

<span style="font-family: monospace; font-size: 80%;">public void __setType__([VariableType](VariableType.md) type)</span>

Sets the type Text of this parameter.

**Parameters:**

`type` - The Text to set as this parameter's type Text.


---

