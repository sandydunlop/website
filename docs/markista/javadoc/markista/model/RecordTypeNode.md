Package [io.github.sandydunlop.markista.model](index.md)

# Class RecordTypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)<br/>
                                        io.github.sandydunlop.markista.model.RecordTypeNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __RecordTypeNode__<br/>extends [TypeNode](TypeNode.md)
</span>

Represents a Java record class.
This class is intended to model a class within a program's structure.
It inherits properties from TypeNode and specifies its own kind.


## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                                                                   | Description                      |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| RecordTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructs a new RecordTypeNode. |


### Methods inherited from [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)

[Classes](PackageOrTypeNode.md#getclasses), [Enums](PackageOrTypeNode.md#getenums), [Records](PackageOrTypeNode.md#getrecords), [Interfaces](PackageOrTypeNode.md#getinterfaces), [Type](PackageOrTypeNode.md#addtype), [Types](PackageOrTypeNode.md#gettypes), [Annotations](PackageOrTypeNode.md#getannotations)

### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AppliedAnnotation](AbstractMember.md#addappliedannotation), [Modifier](AbstractMember.md#addmodifier), [QualifiedName](AbstractMember.md#setqualifiedname), [Modifiers](AbstractMember.md#getmodifiers), [AppliedAnnotations](AbstractMember.md#getappliedannotations), [SimpleName](AbstractMember.md#setsimplename), [SimpleName](AbstractMember.md#getsimplename), [QualifiedName](AbstractMember.md#getqualifiedname)

### Methods inherited from [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)

[InheritedMethods](TypeNode.md#getinheritedmethods), [Methods](TypeNode.md#getmethods), [HasDocumentedAnnotation](TypeNode.md#sethasdocumentedannotation), [Supertypes](TypeNode.md#getsupertypes), [Fields](TypeNode.md#getfields), [sort](TypeNode.md#sort), [Annotation](TypeNode.md#isannotation), [Field](TypeNode.md#getfield), [ArrayBrackets](TypeNode.md#getarraybrackets), [ArrayBrackets](TypeNode.md#setarraybrackets), [EnclosingClassRef](TypeNode.md#setenclosingclassref), [KindName](TypeNode.md#getkindname), [Subtypes](TypeNode.md#getsubtypes), [ModifiersString](TypeNode.md#getmodifiersstring), [Interface](TypeNode.md#isinterface), [Method](TypeNode.md#getmethod), [SourcePath](TypeNode.md#getsourcepath), [ImplementedInterfaces](TypeNode.md#getimplementedinterfaces), [Constructor](TypeNode.md#addconstructor), [Class](TypeNode.md#isclass), [ImplementedInterfaces](TypeNode.md#setimplementedinterfaces), [Constructors](TypeNode.md#getconstructors), [DocumentedAnnotation](TypeNode.md#hasdocumentedannotation), [Enum](TypeNode.md#isenum), [Record](TypeNode.md#isrecord), [Owner](TypeNode.md#setowner), [Owner](TypeNode.md#getowner), [PackageName](TypeNode.md#getpackagename), [EnclosingClassRef](TypeNode.md#getenclosingclassref), [Constructor](TypeNode.md#getconstructor), [SourcePath](TypeNode.md#setsourcepath), [Method](TypeNode.md#addmethod), [Field](TypeNode.md#addfield)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[References](Node.md#getreferences), [Body](Node.md#getbody), [Deprecation](Node.md#getdeprecation), [Kind](Node.md#getkind), [Since](Node.md#getsince), [Kind](Node.md#setkind), [FirstSentence](Node.md#getfirstsentence), [DeprecationText](Node.md#getdeprecationtext), [DeprecationText](Node.md#setdeprecationtext), [References](Node.md#setreferences), [FirstSentence](Node.md#setfirstsentence), [Deprecation](Node.md#setdeprecation), [UUID](Node.md#getuuid), [FullBody](Node.md#getfullbody), [FullBody](Node.md#setfullbody), [Body](Node.md#setbody), [Since](Node.md#setsince)

