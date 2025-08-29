Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        io.github.sandydunlop.markista.model.TypeNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [PackageOrTypeNode](PackageOrTypeNode.md), [TypeView](TypeView.md)

Direct Known Subtypes:<br/>
    [RecordNode](RecordNode.md), [AnnotationNode](AnnotationNode.md), [EnumNode](EnumNode.md), [InterfaceNode](InterfaceNode.md), [ClassNode](ClassNode.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __TypeNode__<br/>extends [AbstractMember](AbstractMember.md)
</span>

Represents a type in the API model, including its kind (class, interface, enum, annotation),
supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata.


## Field Summary

| Modifier and Type                                                                                                                                                                                                                                                          | Field                                               | Description                                                                          |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                       | [arrayBrackets](#arraybrackets)                     | String representation of array brackets if this type is an array (e.g., `[]`).       |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                                                                                                                                        | [constructors](#constructors)                       | List of constructor methods belonging to this type.                                  |
| private [Link](Link.md)                                                                                                                                                                                                                                                    | [enclosingClassRef](#enclosingclassref)             |                                                                                      |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)>                                                                                                                                          | [fields](#fields)                                   | List of fields belonging to this type.                                               |
| private boolean                                                                                                                                                                                                                                                            | [hasDocumentedAnnotation](#hasdocumentedannotation) | Has the `@Documented` annotation applied                                             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                        | [implementedInterfaces](#implementedinterfaces)     | List of references to interfaces implemented by this type and text containing links. |
| private [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[TypeReference](TypeReference.md), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](MethodReference.md)>> | [inheritedMethods](#inheritedmethods)               |                                                                                      |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                                                                                                                                        | [methods](#methods)                                 | List of methods belonging to this type.                                              |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                       | [ownerName](#ownername)                             | The owner of this type \u2014 a type or package.                                     |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                     | [sourcePath](#sourcepath)                           |                                                                                      |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                        | [subtypes](#subtypes)                               | List of references to this type's subtypes and text containing links.                |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                        | [supertypes](#supertypes)                           | List of references to this type's supertypes and text containing links.              |
| protected final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                                                                                                                                          | [types](#types)                                     |                                                                                      |



## Constructor Summary

| Constructor                                                                                                                                                                                                                 | Description                                                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| TypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructs a TypeNode with the specified simple name and package. |



## Method Summary

| Modifier and Type                                                                                                                                                                                                                                                 | Method                                                                                                                                       | Description                                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| public boolean                                                                                                                                                                                                                                                    | [isClass](#isclass)()                                                                                                                        |                                                                                  |
| public boolean                                                                                                                                                                                                                                                    | [isInterface](#isinterface)()                                                                                                                |                                                                                  |
| public boolean                                                                                                                                                                                                                                                    | [isEnum](#isenum)()                                                                                                                          |                                                                                  |
| public boolean                                                                                                                                                                                                                                                    | [isRecord](#isrecord)()                                                                                                                      |                                                                                  |
| public boolean                                                                                                                                                                                                                                                    | [isAnnotation](#isannotation)()                                                                                                              |                                                                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getKindName](#getkindname)()                                                                                                                |                                                                                  |
| public void                                                                                                                                                                                                                                                       | [setSourcePath](#setsourcepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)           |                                                                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getSourcePath](#getsourcepath)()                                                                                                            |                                                                                  |
| public void                                                                                                                                                                                                                                                       | [setArrayBrackets](#setarraybrackets)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets) | Sets the array brackets representation for this type.                            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getArrayBrackets](#getarraybrackets)()                                                                                                      | Returns the array brackets representation for this type.                         |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                | [getImplementedInterfaces](#getimplementedinterfaces)()                                                                                      | Returns the list of implemented interfaces by qualified names.                   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                | [getSupertypes](#getsupertypes)()                                                                                                            | Returns the list of supertype references and text.                               |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                | [getSubtypes](#getsubtypes)()                                                                                                                | Returns the list of subtype references and text.                                 |
| public [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[TypeReference](TypeReference.md), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](MethodReference.md)>> | [getInheritedMethods](#getinheritedmethods)()                                                                                                | Returns the list of inherited methods organized by the type they are defined in. |
| public void                                                                                                                                                                                                                                                       | [setOwnerName](#setownername)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)            | Sets the owner of this type.                                                     |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getOwnerName](#getownername)()                                                                                                              | Returns the owner of this type.                                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getPackageName](#getpackagename)()                                                                                                          | Returns the package name for this type.                                          |
| public void                                                                                                                                                                                                                                                       | [addMethod](#addmethod)([MethodNode](MethodNode.md) method)                                                                                  | Adds a method to this type.                                                      |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                                                                                                                                      | [getMethods](#getmethods)()                                                                                                                  | Returns the list of methods of this type.                                        |
| public void                                                                                                                                                                                                                                                       | [addConstructor](#addconstructor)([MethodNode](MethodNode.md) constructor)                                                                   | Adds a constructor method to this type.                                          |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                                                                                                                                      | [getConstructors](#getconstructors)()                                                                                                        | Returns the list of constructors of this type.                                   |
| public void                                                                                                                                                                                                                                                       | [addField](#addfield)([FieldNode](FieldNode.md) field)                                                                                       | Adds a field to this type.                                                       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)>                                                                                                                                        | [getFields](#getfields)()                                                                                                                    | Returns the list of fields of this type.                                         |
| public void                                                                                                                                                                                                                                                       | [setHasDocumentedAnnotation](#sethasdocumentedannotation)(boolean b)                                                                         | Sets a flag indicating if this type as having a `@Documented` meta-annotation    |
| public boolean                                                                                                                                                                                                                                                    | [hasDocumentedAnnotation](#hasdocumentedannotation)()                                                                                        | Does this type have a `@Documented` meta-annotation?                             |
| public void                                                                                                                                                                                                                                                       | [setEnclosingClassRef](#setenclosingclassref)([Link](Link.md) ref)                                                                           |                                                                                  |
| public [Link](Link.md)                                                                                                                                                                                                                                            | [getEnclosingClassRef](#getenclosingclassref)()                                                                                              |                                                                                  |
| public void                                                                                                                                                                                                                                                       | [addType](#addtype)([TypeView](TypeView.md) typeNode)                                                                                        |                                                                                  |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                                                                                                                                          | [getTypes](#gettypes)()                                                                                                                      | Gets the list of types *owned* by this instance.                                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                                                                                                                                          | [getClasses](#getclasses)()                                                                                                                  | Gets the list of classes *owned* by this instance.                               |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                                                                                                                                          | [getInterfaces](#getinterfaces)()                                                                                                            | Gets the list of interfaces *owned* by this instance.                            |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                                                                                                                                          | [getEnums](#getenums)()                                                                                                                      | Gets the list of enums *owned* by this instance.                                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                                                                                                                                          | [getRecords](#getrecords)()                                                                                                                  | Gets the list of records *owned* by this instance.                               |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)>                                                                                                                                          | [getAnnotations](#getannotations)()                                                                                                          | Gets the list of annotations *owned* by this instance.                           |
| public [FieldNode](FieldNode.md)                                                                                                                                                                                                                                  | [getField](#getfield)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                | Retrieves a field by its simple name.                                            |
| public [MethodNode](MethodNode.md)                                                                                                                                                                                                                                | [getMethod](#getmethod)([MethodNode](MethodNode.md) method)                                                                                  | Retrieves a method matching the signature of a given MethodNode.                 |
| public [MethodNode](MethodNode.md)                                                                                                                                                                                                                                | [getConstructor](#getconstructor)([MethodNode](MethodNode.md) method)                                                                        | Retrieves a constructor matching the signature of a given MethodNode.            |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getModifiersString](#getmodifiersstring)()                                                                                                  | Returns a string representation of modifiers.                                    |
| public void                                                                                                                                                                                                                                                       | [sort](#sort)()                                                                                                                              | Sorts the nodes owned by this instance into alphabetical order.                  |


### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[getReferences](Node.md#getreferences), [setDeprecationText](Node.md#setdeprecationtext), [getBody](Node.md#getbody), [setFirstSentence](Node.md#setfirstsentence), [setDeprecation](Node.md#setdeprecation), [getDeprecation](Node.md#getdeprecation), [getUUID](Node.md#getuuid), [getFullBody](Node.md#getfullbody), [setReferences](Node.md#setreferences), [getKind](Node.md#getkind), [getSince](Node.md#getsince), [setFullBody](Node.md#setfullbody), [setSince](Node.md#setsince), [setBody](Node.md#setbody), [setKind](Node.md#setkind), [getFirstSentence](Node.md#getfirstsentence), [getDeprecationText](Node.md#getdeprecationtext)

### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[addAppliedAnnotation](AbstractMember.md#addappliedannotation), [addModifier](AbstractMember.md#addmodifier), [setQualifiedName](AbstractMember.md#setqualifiedname), [getModifiers](AbstractMember.md#getmodifiers), [getAppliedAnnotations](AbstractMember.md#getappliedannotations), [getQualifiedName](AbstractMember.md#getqualifiedname), [setSimpleName](AbstractMember.md#setsimplename), [getSimpleName](AbstractMember.md#getsimplename)


## Field Details

### arrayBrackets

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __arrayBrackets__</span>

String representation of array brackets if this type is an array (e.g., `[]`).


---

### constructors

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __constructors__</span>

List of constructor methods belonging to this type.


---

### enclosingClassRef

<span style="font-family: monospace; font-size: 80%;">private [Link](Link.md) __enclosingClassRef__</span>




---

### fields

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __fields__</span>

List of fields belonging to this type.


---

### hasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">private boolean __hasDocumentedAnnotation__</span>

Has the `@Documented` annotation applied


---

### implementedInterfaces

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __implementedInterfaces__</span>

List of references to interfaces implemented by this type and text containing links.


---

### inheritedMethods

<span style="font-family: monospace; font-size: 80%;">private [HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[TypeReference](TypeReference.md), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](MethodReference.md)>> __inheritedMethods__</span>




---

### methods

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __methods__</span>

List of methods belonging to this type.


---

### ownerName

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __ownerName__</span>

The owner of this type \u2014 a type or package.


---

### sourcePath

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __sourcePath__</span>




---

### subtypes

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __subtypes__</span>

List of references to this type's subtypes and text containing links.


---

### supertypes

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __supertypes__</span>

List of references to this type's supertypes and text containing links.


---

### types

<span style="font-family: monospace; font-size: 80%;">protected final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __types__</span>




---


## Method Details

### isClass

<span style="font-family: monospace; font-size: 80%;">public boolean __isClass__()</span>



**Specified By:**

[TypeView](TypeView.md)


---

### isInterface

<span style="font-family: monospace; font-size: 80%;">public boolean __isInterface__()</span>



**Specified By:**

[TypeView](TypeView.md)


---

### isEnum

<span style="font-family: monospace; font-size: 80%;">public boolean __isEnum__()</span>



**Specified By:**

[TypeView](TypeView.md)


---

### isRecord

<span style="font-family: monospace; font-size: 80%;">public boolean __isRecord__()</span>



**Specified By:**

[TypeView](TypeView.md)


---

### isAnnotation

<span style="font-family: monospace; font-size: 80%;">public boolean __isAnnotation__()</span>



**Specified By:**

[TypeView](TypeView.md)


---

### getKindName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getKindName__()</span>



**Specified By:**

[TypeView](TypeView.md)


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)</span>




---

### getSourcePath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSourcePath__()</span>




---

### setArrayBrackets

<span style="font-family: monospace; font-size: 80%;">public void __setArrayBrackets__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)</span>

Sets the array brackets representation for this type.


---

### getArrayBrackets

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getArrayBrackets__()</span>

Returns the array brackets representation for this type.

**Returns:**

string representing array dimension brackets.


---

### getImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __getImplementedInterfaces__()</span>

Returns the list of implemented interfaces by qualified names.

**Returns:**

list of qualified interface names.


---

### getSupertypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __getSupertypes__()</span>

Returns the list of supertype references and text.

**Returns:**

list of supertype references and text.


---

### getSubtypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __getSubtypes__()</span>

Returns the list of subtype references and text.

**Returns:**

list of subtype references and text.


---

### getInheritedMethods

<span style="font-family: monospace; font-size: 80%;">public [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[TypeReference](TypeReference.md), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](MethodReference.md)>> __getInheritedMethods__()</span>

Returns the list of inherited methods organized by the type they are defined in.

**Returns:**

HashMap of types containing inherited methods to inherited methods.


---

### setOwnerName

<span style="font-family: monospace; font-size: 80%;">public void __setOwnerName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)</span>

Sets the owner of this type.


---

### getOwnerName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOwnerName__()</span>

Returns the owner of this type.

**Returns:**

the TypeOwner that owns this type.


---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__()</span>

Returns the package name for this type.

**Returns:**

qualified package name, or null if no package node.


---

### addMethod

<span style="font-family: monospace; font-size: 80%;">public void __addMethod__([MethodNode](MethodNode.md) method)</span>

Adds a method to this type.


---

### getMethods

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __getMethods__()</span>

Returns the list of methods of this type.

**Returns:**

list of MethodNode instances.


---

### addConstructor

<span style="font-family: monospace; font-size: 80%;">public void __addConstructor__([MethodNode](MethodNode.md) constructor)</span>

Adds a constructor method to this type.


---

### getConstructors

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __getConstructors__()</span>

Returns the list of constructors of this type.

**Returns:**

list of MethodNode constructors.


---

### addField

<span style="font-family: monospace; font-size: 80%;">public void __addField__([FieldNode](FieldNode.md) field)</span>

Adds a field to this type.


---

### getFields

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __getFields__()</span>

Returns the list of fields of this type.

**Returns:**

list of FieldNode instances.


---

### setHasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __setHasDocumentedAnnotation__(boolean b)</span>

Sets a flag indicating if this type as having a `@Documented` meta-annotation


---

### hasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public boolean __hasDocumentedAnnotation__()</span>

Does this type have a `@Documented` meta-annotation?

**Returns:**

True if it has a `@Documented` meta-annotation


---

### setEnclosingClassRef

<span style="font-family: monospace; font-size: 80%;">public void __setEnclosingClassRef__([Link](Link.md) ref)</span>




---

### getEnclosingClassRef

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getEnclosingClassRef__()</span>




---

### addType

<span style="font-family: monospace; font-size: 80%;">public void __addType__([TypeView](TypeView.md) typeNode)</span>



**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getTypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getTypes__()</span>

Gets the list of types *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getClasses

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getClasses__()</span>

Gets the list of classes *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getInterfaces

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getInterfaces__()</span>

Gets the list of interfaces *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getEnums

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getEnums__()</span>

Gets the list of enums *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getRecords

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getRecords__()</span>

Gets the list of records *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getAnnotations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](TypeView.md)> __getAnnotations__()</span>

Gets the list of annotations *owned* by this instance.

**Specified By:**

[PackageOrTypeNode](PackageOrTypeNode.md)


---

### getField

<span style="font-family: monospace; font-size: 80%;">public [FieldNode](FieldNode.md) __getField__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)</span>

Retrieves a field by its simple name.

**Returns:**

the FieldNode if found, otherwise null.


---

### getMethod

<span style="font-family: monospace; font-size: 80%;">public [MethodNode](MethodNode.md) __getMethod__([MethodNode](MethodNode.md) method)</span>

Retrieves a method matching the signature of a given MethodNode.

**Returns:**

the matching MethodNode if found, otherwise null.


---

### getConstructor

<span style="font-family: monospace; font-size: 80%;">public [MethodNode](MethodNode.md) __getConstructor__([MethodNode](MethodNode.md) method)</span>

Retrieves a constructor matching the signature of a given MethodNode.

**Returns:**

the matching constructor MethodNode if found, otherwise null.


---

### getModifiersString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModifiersString__()</span>

Returns a string representation of modifiers.
The modifiers are sorted according to a predefined order.

**Returns:**

A string containing sorted modifiers separated by spaces.

**Specified By:**

[TypeView](TypeView.md)

**Overrides:**

[AbstractMember.getModifiersString](AbstractMember.md#getmodifiersstring)


---

### sort

<span style="font-family: monospace; font-size: 80%;">public void __sort__()</span>

Sorts the nodes owned by this instance into alphabetical order.

**Specified By:**

[TypeView](TypeView.md)


---

