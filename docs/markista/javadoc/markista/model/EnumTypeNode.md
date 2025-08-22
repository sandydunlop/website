Package [io.github.sandydunlop.markista.model](index.md)

# Class EnumTypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)<br/>
                                        io.github.sandydunlop.markista.model.EnumTypeNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __EnumTypeNode__<br/>extends [TypeNode](TypeNode.md)
</span>

Represents an enum type node with its constants.


## Field Summary

| Modifier and Type                                                                                                                 | Field                   | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------|
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> | [constants](#constants) |             |



## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                                                                 | Description                                                                         |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| EnumTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructs an EnumNode with the specified qualified name, simple name, and package. |



## Method Summary

| Modifier and Type                                                                                                          | Method                                                          | Description                         |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|-------------------------------------|
| public void                                                                                                                | [addConstant](#addconstant)([FieldNode](FieldNode.md) constant) | Adds a constant field to this enum. |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> | [getConstants](#getconstants)()                                 | Returns the list of enum constants. |


### Methods inherited from [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)

[Classes](PackageOrTypeNode.md#getclasses), [Enums](PackageOrTypeNode.md#getenums), [Records](PackageOrTypeNode.md#getrecords), [Interfaces](PackageOrTypeNode.md#getinterfaces), [Type](PackageOrTypeNode.md#addtype), [Types](PackageOrTypeNode.md#gettypes), [Annotations](PackageOrTypeNode.md#getannotations)

### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AppliedAnnotation](AbstractMember.md#addappliedannotation), [Modifier](AbstractMember.md#addmodifier), [QualifiedName](AbstractMember.md#setqualifiedname), [Modifiers](AbstractMember.md#getmodifiers), [AppliedAnnotations](AbstractMember.md#getappliedannotations), [SimpleName](AbstractMember.md#setsimplename), [SimpleName](AbstractMember.md#getsimplename), [QualifiedName](AbstractMember.md#getqualifiedname)

### Methods inherited from [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)

[InheritedMethods](TypeNode.md#getinheritedmethods), [Methods](TypeNode.md#getmethods), [HasDocumentedAnnotation](TypeNode.md#sethasdocumentedannotation), [Supertypes](TypeNode.md#getsupertypes), [Fields](TypeNode.md#getfields), [sort](TypeNode.md#sort), [Annotation](TypeNode.md#isannotation), [Field](TypeNode.md#getfield), [ArrayBrackets](TypeNode.md#getarraybrackets), [ArrayBrackets](TypeNode.md#setarraybrackets), [EnclosingClassRef](TypeNode.md#setenclosingclassref), [KindName](TypeNode.md#getkindname), [Subtypes](TypeNode.md#getsubtypes), [ModifiersString](TypeNode.md#getmodifiersstring), [Interface](TypeNode.md#isinterface), [Method](TypeNode.md#getmethod), [SourcePath](TypeNode.md#getsourcepath), [ImplementedInterfaces](TypeNode.md#getimplementedinterfaces), [Constructor](TypeNode.md#addconstructor), [Class](TypeNode.md#isclass), [ImplementedInterfaces](TypeNode.md#setimplementedinterfaces), [Constructors](TypeNode.md#getconstructors), [DocumentedAnnotation](TypeNode.md#hasdocumentedannotation), [Enum](TypeNode.md#isenum), [Record](TypeNode.md#isrecord), [Owner](TypeNode.md#setowner), [Owner](TypeNode.md#getowner), [PackageName](TypeNode.md#getpackagename), [EnclosingClassRef](TypeNode.md#getenclosingclassref), [Constructor](TypeNode.md#getconstructor), [SourcePath](TypeNode.md#setsourcepath), [Method](TypeNode.md#addmethod), [Field](TypeNode.md#addfield)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[References](Node.md#getreferences), [Body](Node.md#getbody), [Deprecation](Node.md#getdeprecation), [Kind](Node.md#getkind), [Since](Node.md#getsince), [Kind](Node.md#setkind), [FirstSentence](Node.md#getfirstsentence), [DeprecationText](Node.md#getdeprecationtext), [DeprecationText](Node.md#setdeprecationtext), [References](Node.md#setreferences), [FirstSentence](Node.md#setfirstsentence), [Deprecation](Node.md#setdeprecation), [UUID](Node.md#getuuid), [FullBody](Node.md#getfullbody), [FullBody](Node.md#setfullbody), [Body](Node.md#setbody), [Since](Node.md#setsince)


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

