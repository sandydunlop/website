Package [io.github.sandydunlop.markista.model](index.md)

# Class AnnotationNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.AnnotationNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __AnnotationNode__<br/>extends [](TypeNode.md)
</span>

A [](Node.md) that represents an [Annotation](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/text/Annotation.html) class


## Constructor Summary

| Constructor                                                                                                                                                                                                                       | Description                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| AnnotationNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructor that sets the minimum required information for an AnnotationNode. |


### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AbstractMember.addAppliedAnnotation](AbstractMember.md#addappliedannotation), [AbstractMember.addModifier](AbstractMember.md#addmodifier), [AbstractMember.setQualifiedName](AbstractMember.md#setqualifiedname), [AbstractMember.getName](AbstractMember.md#getname), [AbstractMember.getModifiers](AbstractMember.md#getmodifiers), [AbstractMember.getAppliedAnnotations](AbstractMember.md#getappliedannotations), [AbstractMember.setSimpleName](AbstractMember.md#setsimplename), [AbstractMember.getSimpleName](AbstractMember.md#getsimplename), [AbstractMember.getPackageName](AbstractMember.md#getpackagename), [AbstractMember.setNestedName](AbstractMember.md#setnestedname), [AbstractMember.setPackageName](AbstractMember.md#setpackagename), [AbstractMember.getQualifiedName](AbstractMember.md#getqualifiedname), [AbstractMember.getNestedName](AbstractMember.md#getnestedname), [AbstractMember.setName](AbstractMember.md#setname)

### Methods inherited from [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)

[TypeNode.getInheritedMethods](TypeNode.md#getinheritedmethods), [TypeNode.getMethods](TypeNode.md#getmethods), [TypeNode.setHasDocumentedAnnotation](TypeNode.md#sethasdocumentedannotation), [TypeNode.getSupertypes](TypeNode.md#getsupertypes), [TypeNode.getFields](TypeNode.md#getfields), [TypeNode.getClasses](TypeNode.md#getclasses), [TypeNode.sort](TypeNode.md#sort), [TypeNode.isAnnotation](TypeNode.md#isannotation), [TypeNode.getField](TypeNode.md#getfield), [TypeNode.addType](TypeNode.md#addtype), [TypeNode.getOwnerName](TypeNode.md#getownername), [TypeNode.getEnums](TypeNode.md#getenums), [TypeNode.setEnclosingClassRef](TypeNode.md#setenclosingclassref), [TypeNode.getRecords](TypeNode.md#getrecords), [TypeNode.setOwnerName](TypeNode.md#setownername), [TypeNode.getKindName](TypeNode.md#getkindname), [TypeNode.getSubtypes](TypeNode.md#getsubtypes), [TypeNode.getModifiersString](TypeNode.md#getmodifiersstring), [TypeNode.isInterface](TypeNode.md#isinterface), [TypeNode.getMethod](TypeNode.md#getmethod), [TypeNode.getSourcePath](TypeNode.md#getsourcepath), [TypeNode.getImplementedInterfaces](TypeNode.md#getimplementedinterfaces), [TypeNode.isClass](TypeNode.md#isclass), [TypeNode.addConstructor](TypeNode.md#addconstructor), [TypeNode.getConstructors](TypeNode.md#getconstructors), [TypeNode.hasDocumentedAnnotation](TypeNode.md#hasdocumentedannotation), [TypeNode.isEnum](TypeNode.md#isenum), [TypeNode.isRecord](TypeNode.md#isrecord), [TypeNode.getInterfaces](TypeNode.md#getinterfaces), [TypeNode.getEnclosingClassRef](TypeNode.md#getenclosingclassref), [TypeNode.getConstructor](TypeNode.md#getconstructor), [TypeNode.setSourcePath](TypeNode.md#setsourcepath), [TypeNode.addMethod](TypeNode.md#addmethod), [TypeNode.getTypes](TypeNode.md#gettypes), [TypeNode.getAnnotations](TypeNode.md#getannotations), [TypeNode.addField](TypeNode.md#addfield)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[Node.getReferences](Node.md#getreferences), [Node.getBody](Node.md#getbody), [Node.getDeprecation](Node.md#getdeprecation), [Node.getKind](Node.md#getkind), [Node.getSince](Node.md#getsince), [Node.getFirstSentence](Node.md#getfirstsentence), [Node.setKind](Node.md#setkind), [Node.getDeprecationText](Node.md#getdeprecationtext), [Node.setDeprecationText](Node.md#setdeprecationtext), [Node.setFirstSentence](Node.md#setfirstsentence), [Node.setDeprecation](Node.md#setdeprecation), [Node.getUUID](Node.md#getuuid), [Node.getFullBody](Node.md#getfullbody), [Node.setReferences](Node.md#setreferences), [Node.setFullBody](Node.md#setfullbody), [Node.setSince](Node.md#setsince), [Node.setBody](Node.md#setbody)

