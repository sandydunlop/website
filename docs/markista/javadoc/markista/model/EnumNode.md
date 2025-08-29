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

| Constructor                                                                                                                                                                                                                 | Description                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| EnumNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructs an EnumNode with the specified simple name and package. |



## Method Summary

| Modifier and Type                                                                                                          | Method                                                          | Description                         |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|-------------------------------------|
| public void                                                                                                                | [addConstant](#addconstant)([FieldNode](FieldNode.md) constant) | Adds a constant field to this enum. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> | [getConstants](#getconstants)()                                 | Returns the list of enum constants. |


### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AbstractMember.addAppliedAnnotation](AbstractMember.md#addappliedannotation), [AbstractMember.addModifier](AbstractMember.md#addmodifier), [AbstractMember.setQualifiedName](AbstractMember.md#setqualifiedname), [AbstractMember.getModifiers](AbstractMember.md#getmodifiers), [AbstractMember.getAppliedAnnotations](AbstractMember.md#getappliedannotations), [AbstractMember.setSimpleName](AbstractMember.md#setsimplename), [AbstractMember.getSimpleName](AbstractMember.md#getsimplename), [AbstractMember.getQualifiedName](AbstractMember.md#getqualifiedname)

### Methods inherited from [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)

[TypeNode.getInheritedMethods](TypeNode.md#getinheritedmethods), [TypeNode.getMethods](TypeNode.md#getmethods), [TypeNode.setHasDocumentedAnnotation](TypeNode.md#sethasdocumentedannotation), [TypeNode.getSupertypes](TypeNode.md#getsupertypes), [TypeNode.getFields](TypeNode.md#getfields), [TypeNode.getClasses](TypeNode.md#getclasses), [TypeNode.sort](TypeNode.md#sort), [TypeNode.isAnnotation](TypeNode.md#isannotation), [TypeNode.getField](TypeNode.md#getfield), [TypeNode.addType](TypeNode.md#addtype), [TypeNode.getOwnerName](TypeNode.md#getownername), [TypeNode.getArrayBrackets](TypeNode.md#getarraybrackets), [TypeNode.getEnums](TypeNode.md#getenums), [TypeNode.setArrayBrackets](TypeNode.md#setarraybrackets), [TypeNode.setEnclosingClassRef](TypeNode.md#setenclosingclassref), [TypeNode.getRecords](TypeNode.md#getrecords), [TypeNode.setOwnerName](TypeNode.md#setownername), [TypeNode.getKindName](TypeNode.md#getkindname), [TypeNode.getSubtypes](TypeNode.md#getsubtypes), [TypeNode.getModifiersString](TypeNode.md#getmodifiersstring), [TypeNode.isInterface](TypeNode.md#isinterface), [TypeNode.getMethod](TypeNode.md#getmethod), [TypeNode.getSourcePath](TypeNode.md#getsourcepath), [TypeNode.getImplementedInterfaces](TypeNode.md#getimplementedinterfaces), [TypeNode.isClass](TypeNode.md#isclass), [TypeNode.addConstructor](TypeNode.md#addconstructor), [TypeNode.getConstructors](TypeNode.md#getconstructors), [TypeNode.hasDocumentedAnnotation](TypeNode.md#hasdocumentedannotation), [TypeNode.isEnum](TypeNode.md#isenum), [TypeNode.isRecord](TypeNode.md#isrecord), [TypeNode.getInterfaces](TypeNode.md#getinterfaces), [TypeNode.getPackageName](TypeNode.md#getpackagename), [TypeNode.getEnclosingClassRef](TypeNode.md#getenclosingclassref), [TypeNode.getConstructor](TypeNode.md#getconstructor), [TypeNode.setSourcePath](TypeNode.md#setsourcepath), [TypeNode.addMethod](TypeNode.md#addmethod), [TypeNode.getTypes](TypeNode.md#gettypes), [TypeNode.getAnnotations](TypeNode.md#getannotations), [TypeNode.addField](TypeNode.md#addfield)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[Node.getReferences](Node.md#getreferences), [Node.getBody](Node.md#getbody), [Node.getDeprecation](Node.md#getdeprecation), [Node.getKind](Node.md#getkind), [Node.getSince](Node.md#getsince), [Node.getFirstSentence](Node.md#getfirstsentence), [Node.setKind](Node.md#setkind), [Node.getDeprecationText](Node.md#getdeprecationtext), [Node.setDeprecationText](Node.md#setdeprecationtext), [Node.setFirstSentence](Node.md#setfirstsentence), [Node.setDeprecation](Node.md#setdeprecation), [Node.getUUID](Node.md#getuuid), [Node.getFullBody](Node.md#getfullbody), [Node.setReferences](Node.md#setreferences), [Node.setFullBody](Node.md#setfullbody), [Node.setSince](Node.md#setsince), [Node.setBody](Node.md#setbody)


## Field Details

### constants

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __constants__</span>




---


## Method Details

### addConstant

<span style="font-family: monospace; font-size: 80%;">public void __addConstant__([FieldNode](FieldNode.md) constant)</span>

Adds a constant field to this enum.


---

### getConstants

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __getConstants__()</span>

Returns the list of enum constants.

**Returns:**

List of FieldNode constants.


---

