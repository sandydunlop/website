Package [io.github.sandydunlop.markista.model](index.md)

# Class InterfaceNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.InterfaceNode<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __InterfaceNode__<br/>extends [TypeNode](TypeNode.md)
</span>

A node representing a Java interface type


## Field Summary

| Modifier and Type                                                                                                 | Field                                       | Description |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------|-------------|
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> | [implementingClasses](#implementingclasses) |             |



## Constructor Summary

| Constructor                                                                                                                                                                                                                      | Description                                        |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| InterfaceNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Create an InterfaceNode with the specified details |



## Method Summary

| Modifier and Type                                                                                                | Method                                                                   | Description |
|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|-------------|
| public void                                                                                                      | [addImplementingClass](#addimplementingclass)([Link](Link.md) classLink) |             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> | [getImplementingClasses](#getimplementingclasses)()                      |             |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[getReferences](Node.md#getreferences), [getBody](Node.md#getbody), [getDeprecation](Node.md#getdeprecation), [getKind](Node.md#getkind), [getSince](Node.md#getsince), [setKind](Node.md#setkind), [getFirstSentence](Node.md#getfirstsentence), [getDeprecationText](Node.md#getdeprecationtext), [setDeprecationText](Node.md#setdeprecationtext), [setFirstSentence](Node.md#setfirstsentence), [setDeprecation](Node.md#setdeprecation), [getUUID](Node.md#getuuid), [getFullBody](Node.md#getfullbody), [setReferences](Node.md#setreferences), [setFullBody](Node.md#setfullbody), [setSince](Node.md#setsince), [setBody](Node.md#setbody)

### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[addAppliedAnnotation](AbstractMember.md#addappliedannotation), [addModifier](AbstractMember.md#addmodifier), [setQualifiedName](AbstractMember.md#setqualifiedname), [getModifiers](AbstractMember.md#getmodifiers), [getAppliedAnnotations](AbstractMember.md#getappliedannotations), [setSimpleName](AbstractMember.md#setsimplename), [getSimpleName](AbstractMember.md#getsimplename), [getQualifiedName](AbstractMember.md#getqualifiedname)

### Methods inherited from [io.github.sandydunlop.markista.model.TypeNode](TypeNode.md)

[getInheritedMethods](TypeNode.md#getinheritedmethods), [getMethods](TypeNode.md#getmethods), [setHasDocumentedAnnotation](TypeNode.md#sethasdocumentedannotation), [getSupertypes](TypeNode.md#getsupertypes), [getFields](TypeNode.md#getfields), [getClasses](TypeNode.md#getclasses), [sort](TypeNode.md#sort), [isAnnotation](TypeNode.md#isannotation), [getField](TypeNode.md#getfield), [getOwnerName](TypeNode.md#getownername), [getArrayBrackets](TypeNode.md#getarraybrackets), [getEnums](TypeNode.md#getenums), [setArrayBrackets](TypeNode.md#setarraybrackets), [setEnclosingClassRef](TypeNode.md#setenclosingclassref), [getRecords](TypeNode.md#getrecords), [setOwnerName](TypeNode.md#setownername), [getKindName](TypeNode.md#getkindname), [getSubtypes](TypeNode.md#getsubtypes), [getModifiersString](TypeNode.md#getmodifiersstring), [isInterface](TypeNode.md#isinterface), [getMethod](TypeNode.md#getmethod), [getSourcePath](TypeNode.md#getsourcepath), [getImplementedInterfaces](TypeNode.md#getimplementedinterfaces), [isClass](TypeNode.md#isclass), [addConstructor](TypeNode.md#addconstructor), [getConstructors](TypeNode.md#getconstructors), [hasDocumentedAnnotation](TypeNode.md#hasdocumentedannotation), [isEnum](TypeNode.md#isenum), [isRecord](TypeNode.md#isrecord), [getInterfaces](TypeNode.md#getinterfaces), [getPackageName](TypeNode.md#getpackagename), [getEnclosingClassRef](TypeNode.md#getenclosingclassref), [getConstructor](TypeNode.md#getconstructor), [setSourcePath](TypeNode.md#setsourcepath), [addMethod](TypeNode.md#addmethod), [addType](TypeNode.md#addtype), [getTypes](TypeNode.md#gettypes), [getAnnotations](TypeNode.md#getannotations), [addField](TypeNode.md#addfield)


## Field Details

### implementingClasses

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __implementingClasses__</span>




---


## Method Details

### addImplementingClass

<span style="font-family: monospace; font-size: 80%;">public void __addImplementingClass__([Link](Link.md) classLink)</span>




---

### getImplementingClasses

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](Link.md)> __getImplementingClasses__()</span>




---

