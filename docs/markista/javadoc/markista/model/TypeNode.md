Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.TypeNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [TypeView](TypeView.md)

Direct Known Subtypes:<br/>
    [RecordTypeNode](RecordTypeNode.md), [AnnotationTypeNode](AnnotationTypeNode.md), [EnumTypeNode](EnumTypeNode.md), [InterfaceTypeNode](InterfaceTypeNode.md), [ClassTypeNode](ClassTypeNode.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __TypeNode__<br/>extends [PackageOrTypeNode](PackageOrTypeNode.md)
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
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                       | [owner](#owner)                                     | The owner of this type, usually another type or module.                              |
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                                     | [sourcePath](#sourcepath)                           |                                                                                      |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                        | [subtypes](#subtypes)                               | List of references to this type's subtypes and text containing links.                |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                        | [supertypes](#supertypes)                           | List of references to this type's supertypes and text containing links.              |



## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                                                             | Description                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| TypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructs a TypeNode with the specified qualified name, simple name, and package. |



## Method Summary

| Modifier and Type                                                                                                                                                                                                                                                 | Method                                                                                                                                                                                                   | Description                                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| public void                                                                                                                                                                                                                                                       | [addConstructor](#addconstructor)([MethodNode](MethodNode.md) constructor)                                                                                                                               | Adds a constructor method to this type.                                          |
| public void                                                                                                                                                                                                                                                       | [addField](#addfield)([FieldNode](FieldNode.md) field)                                                                                                                                                   | Adds a field to this type.                                                       |
| public void                                                                                                                                                                                                                                                       | [addMethod](#addmethod)([MethodNode](MethodNode.md) method)                                                                                                                                              | Adds a method to this type.                                                      |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getArrayBrackets](#getarraybrackets)()                                                                                                                                                                  | Returns the array brackets representation for this type.                         |
| public [MethodNode](MethodNode.md)                                                                                                                                                                                                                                | [getConstructor](#getconstructor)([MethodNode](MethodNode.md) method)                                                                                                                                    | Retrieves a constructor matching the signature of a given MethodNode.            |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                                                                                                                                      | [getConstructors](#getconstructors)()                                                                                                                                                                    | Returns the list of constructors of this type.                                   |
| public [Link](Link.md)                                                                                                                                                                                                                                            | [getEnclosingClassRef](#getenclosingclassref)()                                                                                                                                                          |                                                                                  |
| public [FieldNode](FieldNode.md)                                                                                                                                                                                                                                  | [getField](#getfield)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                            | Retrieves a field by its simple name.                                            |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)>                                                                                                                                        | [getFields](#getfields)()                                                                                                                                                                                | Returns the list of fields of this type.                                         |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                | [getImplementedInterfaces](#getimplementedinterfaces)()                                                                                                                                                  | Returns the list of implemented interfaces by qualified names.                   |
| public [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[TypeReference](TypeReference.md), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](MethodReference.md)>> | [getInheritedMethods](#getinheritedmethods)()                                                                                                                                                            | Returns the list of inherited methods organized by the type they are defined in. |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getKindName](#getkindname)()                                                                                                                                                                            |                                                                                  |
| public [MethodNode](MethodNode.md)                                                                                                                                                                                                                                | [getMethod](#getmethod)([MethodNode](MethodNode.md) method)                                                                                                                                              | Retrieves a method matching the signature of a given MethodNode.                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                                                                                                                                      | [getMethods](#getmethods)()                                                                                                                                                                              | Returns the list of methods of this type.                                        |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getModifiersString](#getmodifiersstring)()                                                                                                                                                              | Returns a string representation of modifiers.                                    |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getOwner](#getowner)()                                                                                                                                                                                  | Returns the owner of this type.                                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getPackageName](#getpackagename)()                                                                                                                                                                      | Returns the package name for this type.                                          |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                                                                               | [getSourcePath](#getsourcepath)()                                                                                                                                                                        |                                                                                  |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                | [getSubtypes](#getsubtypes)()                                                                                                                                                                            | Returns the list of subtype references and text.                                 |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)>                                                                                                                                | [getSupertypes](#getsupertypes)()                                                                                                                                                                        | Returns the list of supertype references and text.                               |
| public boolean                                                                                                                                                                                                                                                    | [hasDocumentedAnnotation](#hasdocumentedannotation)()                                                                                                                                                    | Does this type have a `@Documented` meta-annotation?                             |
| public boolean                                                                                                                                                                                                                                                    | [isAnnotation](#isannotation)()                                                                                                                                                                          |                                                                                  |
| public boolean                                                                                                                                                                                                                                                    | [isClass](#isclass)()                                                                                                                                                                                    |                                                                                  |
| public boolean                                                                                                                                                                                                                                                    | [isEnum](#isenum)()                                                                                                                                                                                      |                                                                                  |
| public boolean                                                                                                                                                                                                                                                    | [isInterface](#isinterface)()                                                                                                                                                                            |                                                                                  |
| public boolean                                                                                                                                                                                                                                                    | [isRecord](#isrecord)()                                                                                                                                                                                  |                                                                                  |
| public void                                                                                                                                                                                                                                                       | [setArrayBrackets](#setarraybrackets)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)                                                             | Sets the array brackets representation for this type.                            |
| public void                                                                                                                                                                                                                                                       | [setEnclosingClassRef](#setenclosingclassref)([Link](Link.md) ref)                                                                                                                                       |                                                                                  |
| public void                                                                                                                                                                                                                                                       | [setHasDocumentedAnnotation](#sethasdocumentedannotation)(boolean b)                                                                                                                                     | Sets a flag indicating if this type as having a `@Documented` meta-annotation    |
| public void                                                                                                                                                                                                                                                       | [setImplementedInterfaces](#setimplementedinterfaces)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> implementedInterfaces) | Sets the list of implemented interfaces by qualified names.                      |
| public void                                                                                                                                                                                                                                                       | [setOwner](#setowner)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)                                                                                | Sets the owner of this type.                                                     |
| public void                                                                                                                                                                                                                                                       | [setSourcePath](#setsourcepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)                                                                       |                                                                                  |
| public void                                                                                                                                                                                                                                                       | [sort](#sort)()                                                                                                                                                                                          | Sorts the nodes owned by this instance into alphabetical order.                  |


### Methods inherited from [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)

[AppliedAnnotation](AbstractMember.md#addappliedannotation), [Modifier](AbstractMember.md#addmodifier), [QualifiedName](AbstractMember.md#setqualifiedname), [Modifiers](AbstractMember.md#getmodifiers), [AppliedAnnotations](AbstractMember.md#getappliedannotations), [QualifiedName](AbstractMember.md#getqualifiedname), [SimpleName](AbstractMember.md#setsimplename), [SimpleName](AbstractMember.md#getsimplename)

### Methods inherited from [io.github.sandydunlop.markista.model.Node](Node.md)

[References](Node.md#getreferences), [DeprecationText](Node.md#setdeprecationtext), [Body](Node.md#getbody), [References](Node.md#setreferences), [FirstSentence](Node.md#setfirstsentence), [Deprecation](Node.md#setdeprecation), [Deprecation](Node.md#getdeprecation), [UUID](Node.md#getuuid), [FullBody](Node.md#getfullbody), [Kind](Node.md#getkind), [Since](Node.md#getsince), [FullBody](Node.md#setfullbody), [Kind](Node.md#setkind), [Body](Node.md#setbody), [Since](Node.md#setsince), [FirstSentence](Node.md#getfirstsentence), [DeprecationText](Node.md#getdeprecationtext)

### Methods inherited from [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)

[Classes](PackageOrTypeNode.md#getclasses), [Interfaces](PackageOrTypeNode.md#getinterfaces), [Enums](PackageOrTypeNode.md#getenums), [Records](PackageOrTypeNode.md#getrecords), [Type](PackageOrTypeNode.md#addtype), [Types](PackageOrTypeNode.md#gettypes), [Annotations](PackageOrTypeNode.md#getannotations)


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

### owner

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __owner__</span>

The owner of this type, usually another type or module.


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


## Method Details

### addConstructor

<span style="font-family: monospace; font-size: 80%;">public void __addConstructor__([MethodNode](MethodNode.md) constructor)</span>

Adds a constructor method to this type.


---

### addField

<span style="font-family: monospace; font-size: 80%;">public void __addField__([FieldNode](FieldNode.md) field)</span>

Adds a field to this type.


---

### addMethod

<span style="font-family: monospace; font-size: 80%;">public void __addMethod__([MethodNode](MethodNode.md) method)</span>

Adds a method to this type.


---

### getArrayBrackets

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getArrayBrackets__()</span>

Returns the array brackets representation for this type.

**Returns:**

string representing array dimension brackets.


---

### getConstructor

<span style="font-family: monospace; font-size: 80%;">public [MethodNode](MethodNode.md) __getConstructor__([MethodNode](MethodNode.md) method)</span>

Retrieves a constructor matching the signature of a given MethodNode.

**Returns:**

the matching constructor MethodNode if found, otherwise null.


---

### getConstructors

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __getConstructors__()</span>

Returns the list of constructors of this type.

**Returns:**

list of MethodNode constructors.


---

### getEnclosingClassRef

<span style="font-family: monospace; font-size: 80%;">public [Link](Link.md) __getEnclosingClassRef__()</span>




---

### getField

<span style="font-family: monospace; font-size: 80%;">public [FieldNode](FieldNode.md) __getField__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)</span>

Retrieves a field by its simple name.

**Returns:**

the FieldNode if found, otherwise null.


---

### getFields

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __getFields__()</span>

Returns the list of fields of this type.

**Returns:**

list of FieldNode instances.


---

### getImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __getImplementedInterfaces__()</span>

Returns the list of implemented interfaces by qualified names.

**Returns:**

list of qualified interface names.


---

### getInheritedMethods

<span style="font-family: monospace; font-size: 80%;">public [Map](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Map.html)<[TypeReference](TypeReference.md), [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodReference](MethodReference.md)>> __getInheritedMethods__()</span>

Returns the list of inherited methods organized by the type they are defined in.

**Returns:**

HashMap of types containing inherited methods to inherited methods.


---

### getKindName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getKindName__()</span>




---

### getMethod

<span style="font-family: monospace; font-size: 80%;">public [MethodNode](MethodNode.md) __getMethod__([MethodNode](MethodNode.md) method)</span>

Retrieves a method matching the signature of a given MethodNode.

**Returns:**

the matching MethodNode if found, otherwise null.


---

### getMethods

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __getMethods__()</span>

Returns the list of methods of this type.

**Returns:**

list of MethodNode instances.


---

### getModifiersString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModifiersString__()</span>

Returns a string representation of modifiers.
The modifiers are sorted according to a predefined order.

**Returns:**

A string containing sorted modifiers separated by spaces.

**Overrides:**

[AbstractMember.getModifiersString](AbstractMember.md#getmodifiersstring)


---

### getOwner

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOwner__()</span>

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

### getSourcePath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSourcePath__()</span>




---

### getSubtypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __getSubtypes__()</span>

Returns the list of subtype references and text.

**Returns:**

list of subtype references and text.


---

### getSupertypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> __getSupertypes__()</span>

Returns the list of supertype references and text.

**Returns:**

list of supertype references and text.


---

### hasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public boolean __hasDocumentedAnnotation__()</span>

Does this type have a `@Documented` meta-annotation?

**Returns:**

True if it has a `@Documented` meta-annotation


---

### isAnnotation

<span style="font-family: monospace; font-size: 80%;">public boolean __isAnnotation__()</span>




---

### isClass

<span style="font-family: monospace; font-size: 80%;">public boolean __isClass__()</span>




---

### isEnum

<span style="font-family: monospace; font-size: 80%;">public boolean __isEnum__()</span>




---

### isInterface

<span style="font-family: monospace; font-size: 80%;">public boolean __isInterface__()</span>




---

### isRecord

<span style="font-family: monospace; font-size: 80%;">public boolean __isRecord__()</span>




---

### setArrayBrackets

<span style="font-family: monospace; font-size: 80%;">public void __setArrayBrackets__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)</span>

Sets the array brackets representation for this type.


---

### setEnclosingClassRef

<span style="font-family: monospace; font-size: 80%;">public void __setEnclosingClassRef__([Link](Link.md) ref)</span>




---

### setHasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __setHasDocumentedAnnotation__(boolean b)</span>

Sets a flag indicating if this type as having a `@Documented` meta-annotation


---

### setImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public void __setImplementedInterfaces__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](TypeReference.md)> implementedInterfaces)</span>

Sets the list of implemented interfaces by qualified names.


---

### setOwner

<span style="font-family: monospace; font-size: 80%;">public void __setOwner__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)</span>

Sets the owner of this type.


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)</span>




---

### sort

<span style="font-family: monospace; font-size: 80%;">public void __sort__()</span>

Sorts the nodes owned by this instance into alphabetical order.

**Overrides:**

[PackageOrTypeNode.sort](PackageOrTypeNode.md#sort)


---

