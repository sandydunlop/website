Package [io.github.sandydunlop.markista.model](index.md)

# Class EnumNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.EnumNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __EnumNode__<br/>extends [TypeNode](TypeNode.md)
</span>

Represents an enum type node with its constants.


## Field Summary

| Modifier and Type                                                                                                                 | Field                   | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> | [constants](#constants) |             |



## Constructor Summary

| Constructor                    | Description                                                        |
|--------------------------------|--------------------------------------------------------------------|
| EnumNode([Name](Name.md) name) | Constructs an EnumNode with the specified simple name and package. |



## Method Summary

| Modifier and Type                                                                                                          | Method                                                          | Description                         |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|-------------------------------------|
| public void                                                                                                                | [addConstant](#addconstant)([FieldNode](FieldNode.md) constant) | Adds a constant field to this enum. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> | [getConstants](#getconstants)()                                 | Returns the list of enum constants. |


### Methods inherited from [TypeNode](TypeNode.md)

[getInheritedMethods](TypeNode.md#getinheritedmethods), [getMethods](TypeNode.md#getmethods), [setHasDocumentedAnnotation](TypeNode.md#sethasdocumentedannotation), [getSupertypes](TypeNode.md#getsupertypes), [getFields](TypeNode.md#getfields), [getClasses](TypeNode.md#getclasses), [sort](TypeNode.md#sort), [isAnnotation](TypeNode.md#isannotation), [getField](TypeNode.md#getfield), [addType](TypeNode.md#addtype), [getOwnerName](TypeNode.md#getownername), [getEnums](TypeNode.md#getenums), [setEnclosingClassRef](TypeNode.md#setenclosingclassref), [getRecords](TypeNode.md#getrecords), [setOwnerName](TypeNode.md#setownername), [getKindName](TypeNode.md#getkindname), [getSubtypes](TypeNode.md#getsubtypes), [getModifiersString](TypeNode.md#getmodifiersstring), [isInterface](TypeNode.md#isinterface), [getMethod](TypeNode.md#getmethod), [getSourcePath](TypeNode.md#getsourcepath), [getImplementedInterfaces](TypeNode.md#getimplementedinterfaces), [isClass](TypeNode.md#isclass), [addConstructor](TypeNode.md#addconstructor), [getConstructors](TypeNode.md#getconstructors), [hasDocumentedAnnotation](TypeNode.md#hasdocumentedannotation), [isEnum](TypeNode.md#isenum), [isRecord](TypeNode.md#isrecord), [setModuleName](TypeNode.md#setmodulename), [getInterfaces](TypeNode.md#getinterfaces), [getModuleName](TypeNode.md#getmodulename), [getEnclosingClassRef](TypeNode.md#getenclosingclassref), [getConstructor](TypeNode.md#getconstructor), [setSourcePath](TypeNode.md#setsourcepath), [addMethod](TypeNode.md#addmethod), [getTypes](TypeNode.md#gettypes), [getAnnotations](TypeNode.md#getannotations), [addField](TypeNode.md#addfield)

### Methods inherited from [AbstractMember](AbstractMember.md)

[addAppliedAnnotation](AbstractMember.md#addappliedannotation), [addModifier](AbstractMember.md#addmodifier), [getName](AbstractMember.md#getname), [getModifiers](AbstractMember.md#getmodifiers), [getAppliedAnnotations](AbstractMember.md#getappliedannotations), [setName](AbstractMember.md#setname), [getPackageName](AbstractMember.md#getpackagename), [setPackageName](AbstractMember.md#setpackagename)

### Methods inherited from [Node](Node.md)

[getReferences](Node.md#getreferences), [getBody](Node.md#getbody), [getDeprecation](Node.md#getdeprecation), [getKind](Node.md#getkind), [getSince](Node.md#getsince), [getFirstSentence](Node.md#getfirstsentence), [setKind](Node.md#setkind), [getDeprecationText](Node.md#getdeprecationtext), [setDeprecationText](Node.md#setdeprecationtext), [setFirstSentence](Node.md#setfirstsentence), [setDeprecation](Node.md#setdeprecation), [getUUID](Node.md#getuuid), [getFullBody](Node.md#getfullbody), [setReferences](Node.md#setreferences), [setSince](Node.md#setsince), [setBody](Node.md#setbody)


## Field Details

### constants

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __constants__</span>




---


## Method Details

### addConstant

<span style="font-family: monospace; font-size: 80%;">public void __addConstant__([FieldNode](FieldNode.md) constant)</span>

Adds a constant field to this enum.

**Parameters:**

`constant` - The FieldNode representing the enum constant.


---

### getConstants

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __getConstants__()</span>

Returns the list of enum constants.

**Returns:**

List of FieldNode constants.


---

