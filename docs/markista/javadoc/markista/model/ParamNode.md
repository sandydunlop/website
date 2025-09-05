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

| Modifier and Type                         | Field         | Description                |
|-------------------------------------------|---------------|----------------------------|
| private [TypeReference](TypeReference.md) | [type](#type) | The type of this parameter |



## Constructor Summary

| Constructor                                                                                                                                                                                                     | Description                                          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| ParamNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) type, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) | Constructs a ParamNode with the given type and name. |



## Method Summary

| Modifier and Type                        | Method                                                      | Description                              |
|------------------------------------------|-------------------------------------------------------------|------------------------------------------|
| public [TypeReference](TypeReference.md) | [getType](#gettype)()                                       | Returns the type Text of this parameter. |
| public void                              | [setType](#settype)([TypeReference](TypeReference.md) type) | Sets the type Text of this parameter.    |


### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AbstractMember.addAppliedAnnotation](AbstractMember.md#addappliedannotation), [AbstractMember.addModifier](AbstractMember.md#addmodifier), [AbstractMember.setQualifiedName](AbstractMember.md#setqualifiedname), [AbstractMember.getName](AbstractMember.md#getname), [AbstractMember.getModifiers](AbstractMember.md#getmodifiers), [AbstractMember.getAppliedAnnotations](AbstractMember.md#getappliedannotations), [AbstractMember.getPackageName](AbstractMember.md#getpackagename), [AbstractMember.setNestedName](AbstractMember.md#setnestedname), [AbstractMember.setPackageName](AbstractMember.md#setpackagename), [AbstractMember.getQualifiedName](AbstractMember.md#getqualifiedname), [AbstractMember.setSimpleName](AbstractMember.md#setsimplename), [AbstractMember.getSimpleName](AbstractMember.md#getsimplename), [AbstractMember.getModifiersString](AbstractMember.md#getmodifiersstring), [AbstractMember.getNestedName](AbstractMember.md#getnestedname), [AbstractMember.setName](AbstractMember.md#setname)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[Node.getReferences](Node.md#getreferences), [Node.setDeprecationText](Node.md#setdeprecationtext), [Node.getBody](Node.md#getbody), [Node.setFirstSentence](Node.md#setfirstsentence), [Node.setDeprecation](Node.md#setdeprecation), [Node.getDeprecation](Node.md#getdeprecation), [Node.getUUID](Node.md#getuuid), [Node.getFullBody](Node.md#getfullbody), [Node.setReferences](Node.md#setreferences), [Node.getKind](Node.md#getkind), [Node.getSince](Node.md#getsince), [Node.setFullBody](Node.md#setfullbody), [Node.setSince](Node.md#setsince), [Node.setBody](Node.md#setbody), [Node.getFirstSentence](Node.md#getfirstsentence), [Node.setKind](Node.md#setkind), [Node.getDeprecationText](Node.md#getdeprecationtext)


## Field Details

### type

<span style="font-family: monospace; font-size: 80%;">private [TypeReference](TypeReference.md) __type__</span>

The type of this parameter


---


## Method Details

### getType

<span style="font-family: monospace; font-size: 80%;">public [TypeReference](TypeReference.md) __getType__()</span>

Returns the type Text of this parameter.

**Returns:**

The Text representing the parameter's type.


---

### setType

<span style="font-family: monospace; font-size: 80%;">public void __setType__([TypeReference](TypeReference.md) type)</span>

Sets the type Text of this parameter.


---

