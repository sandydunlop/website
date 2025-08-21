Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractMember](AbstractMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.TypeNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [io.github.sandydunlop.markista.model.TypeView](TypeView.md)


----

<span style="font-family: monospace; font-size: 80%;">public class __TypeNode__</span>

Represents a type in the API model, including its kind (class, interface, enum, annotation),
supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata.


## Field Summary

| Modifier and Type                                                                                                                                             | Field                                               | Description                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------|
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                        | [sourcePath](#sourcepath)                           |                                                                                |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [owner](#owner)                                     | The owner of this type, usually another type or module.                        |
| private [Reference](Reference.md)                                                                                                                             | [enclosingClassRef](#enclosingclassref)             |                                                                                |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)>     | [appliedAnnotations](#appliedannotations)           | List of annotations applied to this type.                                      |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)>                                   | [implementedInterfaces](#implementedinterfaces)     | List of qualified names of interfaces implemented by this type.                |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Pair](Pair.md)<[Reference](Reference.md), [Text](Text.md)>> | [supertypes](#supertypes)                           | List of qualified names of this type's supertypes.                             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [arrayBrackets](#arraybrackets)                     | String representation of array brackets if this type is an array (e.g., `[]`). |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                           | [constructors](#constructors)                       | List of constructor methods belonging to this type.                            |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                           | [methods](#methods)                                 | List of methods belonging to this type.                                        |
| private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)>                             | [fields](#fields)                                   | List of fields belonging to this type.                                         |
| private boolean                                                                                                                                               | [hasDocumentedAnnotation](#hasdocumentedannotation) | Has the `@Documented` annotation applied                                       |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                                                             | Description                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| TypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName) | Constructs a TypeNode with the specified qualified name, simple name, and package. |

## Method Summary

| Modifier and Type                                                                                                                                            | Method                                                                                                                                                                                           | Description                                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| public boolean                                                                                                                                               | [isClass](#isclass)()                                                                                                                                                                            |                                                                               |
| public boolean                                                                                                                                               | [isInterface](#isinterface)()                                                                                                                                                                    |                                                                               |
| public boolean                                                                                                                                               | [isEnum](#isenum)()                                                                                                                                                                              |                                                                               |
| public boolean                                                                                                                                               | [isRecord](#isrecord)()                                                                                                                                                                          |                                                                               |
| public boolean                                                                                                                                               | [isAnnotation](#isannotation)()                                                                                                                                                                  |                                                                               |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [getKindName](#getkindname)()                                                                                                                                                                    |                                                                               |
| public void                                                                                                                                                  | [setSourcePath](#setsourcepath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)                                                               |                                                                               |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [getSourcePath](#getsourcepath)()                                                                                                                                                                |                                                                               |
| public void                                                                                                                                                  | [setArrayBrackets](#setarraybrackets)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)                                                     | Sets the array brackets representation for this type.                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [getArrayBrackets](#getarraybrackets)()                                                                                                                                                          | Returns the array brackets representation for this type.                      |
| public void                                                                                                                                                  | [addAppliedAnnotation](#addappliedannotation)([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)                                                                                      | Adds an applied annotation to this type                                       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)>           | [getAppliedAnnotations](#getappliedannotations)()                                                                                                                                                | Returns the list of annotations applied to this type.                         |
| public void                                                                                                                                                  | [setImplementedInterfaces](#setimplementedinterfaces)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> implementedInterfaces) | Sets the list of implemented interfaces by qualified names.                   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Pair](Pair.md)<[Reference](Reference.md), [Text](Text.md)>> | [getSupertypes](#getsupertypes)()                                                                                                                                                                | Returns the list of supertypes by qualified names.                            |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)>                                   | [getImplementedInterfaces](#getimplementedinterfaces)()                                                                                                                                          | Returns the list of implemented interfaces by qualified names.                |
| public void                                                                                                                                                  | [setOwner](#setowner)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)                                                                        | Sets the owner of this type.                                                  |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [getOwner](#getowner)()                                                                                                                                                                          | Returns the owner of this type.                                               |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [getPackageName](#getpackagename)()                                                                                                                                                              | Returns the package name for this type.                                       |
| public void                                                                                                                                                  | [addMethod](#addmethod)([MethodNode](MethodNode.md) method)                                                                                                                                      | Adds a method to this type.                                                   |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                                 | [getMethods](#getmethods)()                                                                                                                                                                      | Returns the list of methods of this type.                                     |
| public void                                                                                                                                                  | [addConstructor](#addconstructor)([MethodNode](MethodNode.md) constructor)                                                                                                                       | Adds a constructor method to this type.                                       |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)>                                 | [getConstructors](#getconstructors)()                                                                                                                                                            | Returns the list of constructors of this type.                                |
| public void                                                                                                                                                  | [addField](#addfield)([FieldNode](FieldNode.md) field)                                                                                                                                           | Adds a field to this type.                                                    |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)>                                   | [getFields](#getfields)()                                                                                                                                                                        | Returns the list of fields of this type.                                      |
| public void                                                                                                                                                  | [setHasDocumentedAnnotation](#sethasdocumentedannotation)(boolean b)                                                                                                                             | Sets a flag indicating if this type as having a `@Documented` meta-annotation |
| public boolean                                                                                                                                               | [hasDocumentedAnnotation](#hasdocumentedannotation)()                                                                                                                                            | Does this type have a `@Documented` meta-annotation?                          |
| public void                                                                                                                                                  | [setEnclosingClassRef](#setenclosingclassref)([Reference](Reference.md) ref)                                                                                                                     |                                                                               |
| public [Reference](Reference.md)                                                                                                                             | [getEnclosingClassRef](#getenclosingclassref)()                                                                                                                                                  |                                                                               |
| public [FieldNode](FieldNode.md)                                                                                                                             | [getField](#getfield)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                    | Retrieves a field by its simple name.                                         |
| public [MethodNode](MethodNode.md)                                                                                                                           | [getMethod](#getmethod)([MethodNode](MethodNode.md) method)                                                                                                                                      | Retrieves a method matching the signature of a given MethodNode.              |
| public [MethodNode](MethodNode.md)                                                                                                                           | [getConstructor](#getconstructor)([MethodNode](MethodNode.md) method)                                                                                                                            | Retrieves a constructor matching the signature of a given MethodNode.         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [getModifiersString](#getmodifiersstring)()                                                                                                                                                      |                                                                               |

## Field Details

### sourcePath

<span style="font-family: monospace; font-size: 80%;">protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __sourcePath__</span>




---

### owner

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __owner__</span>

The owner of this type, usually another type or module.


---

### enclosingClassRef

<span style="font-family: monospace; font-size: 80%;">private [Reference](Reference.md) __enclosingClassRef__</span>




---

### appliedAnnotations

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __appliedAnnotations__</span>

List of annotations applied to this type.


---

### implementedInterfaces

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> __implementedInterfaces__</span>

List of qualified names of interfaces implemented by this type.


---

### supertypes

<span style="font-family: monospace; font-size: 80%;">private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Pair](Pair.md)<[Reference](Reference.md), [Text](Text.md)>> __supertypes__</span>

List of qualified names of this type's supertypes.


---

### arrayBrackets

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __arrayBrackets__</span>

String representation of array brackets if this type is an array (e.g., `[]`).


---

### constructors

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __constructors__</span>

List of constructor methods belonging to this type.


---

### methods

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __methods__</span>

List of methods belonging to this type.


---

### fields

<span style="font-family: monospace; font-size: 80%;">private final [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __fields__</span>

List of fields belonging to this type.


---

### hasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">private boolean __hasDocumentedAnnotation__</span>

Has the `@Documented` annotation applied


---


## Method Details

### isClass

<span style="font-family: monospace; font-size: 80%;">public boolean __isClass__</span>




---

### isInterface

<span style="font-family: monospace; font-size: 80%;">public boolean __isInterface__</span>




---

### isEnum

<span style="font-family: monospace; font-size: 80%;">public boolean __isEnum__</span>




---

### isRecord

<span style="font-family: monospace; font-size: 80%;">public boolean __isRecord__</span>




---

### isAnnotation

<span style="font-family: monospace; font-size: 80%;">public boolean __isAnnotation__</span>




---

### getKindName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getKindName__</span>




---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__</span>




---

### getSourcePath

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSourcePath__</span>




---

### setArrayBrackets

<span style="font-family: monospace; font-size: 80%;">public void __setArrayBrackets__</span>

Sets the array brackets representation for this type.


---

### getArrayBrackets

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getArrayBrackets__</span>

Returns the array brackets representation for this type.

**Returns:**

string representing array dimension brackets.


---

### addAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __addAppliedAnnotation__</span>

Adds an applied annotation to this type


---

### getAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __getAppliedAnnotations__</span>

Returns the list of annotations applied to this type.

**Returns:**

list of applied annotations


---

### setImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public void __setImplementedInterfaces__</span>

Sets the list of implemented interfaces by qualified names.


---

### getSupertypes

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Pair](Pair.md)<[Reference](Reference.md), [Text](Text.md)>> __getSupertypes__</span>

Returns the list of supertypes by qualified names.

**Returns:**

list of qualified supertype names.


---

### getImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> __getImplementedInterfaces__</span>

Returns the list of implemented interfaces by qualified names.

**Returns:**

list of qualified interface names.


---

### setOwner

<span style="font-family: monospace; font-size: 80%;">public void __setOwner__</span>

Sets the owner of this type.


---

### getOwner

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getOwner__</span>

Returns the owner of this type.

**Returns:**

the TypeOwner that owns this type.


---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__</span>

Returns the package name for this type.

**Returns:**

qualified package name, or null if no package node.


---

### addMethod

<span style="font-family: monospace; font-size: 80%;">public void __addMethod__</span>

Adds a method to this type.


---

### getMethods

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __getMethods__</span>

Returns the list of methods of this type.

**Returns:**

list of MethodNode instances.


---

### addConstructor

<span style="font-family: monospace; font-size: 80%;">public void __addConstructor__</span>

Adds a constructor method to this type.


---

### getConstructors

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> __getConstructors__</span>

Returns the list of constructors of this type.

**Returns:**

list of MethodNode constructors.


---

### addField

<span style="font-family: monospace; font-size: 80%;">public void __addField__</span>

Adds a field to this type.


---

### getFields

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> __getFields__</span>

Returns the list of fields of this type.

**Returns:**

list of FieldNode instances.


---

### setHasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __setHasDocumentedAnnotation__</span>

Sets a flag indicating if this type as having a `@Documented` meta-annotation


---

### hasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public boolean __hasDocumentedAnnotation__</span>

Does this type have a `@Documented` meta-annotation?

**Returns:**

True if it has a `@Documented` meta-annotation


---

### setEnclosingClassRef

<span style="font-family: monospace; font-size: 80%;">public void __setEnclosingClassRef__</span>




---

### getEnclosingClassRef

<span style="font-family: monospace; font-size: 80%;">public [Reference](Reference.md) __getEnclosingClassRef__</span>




---

### getField

<span style="font-family: monospace; font-size: 80%;">public [FieldNode](FieldNode.md) __getField__</span>

Retrieves a field by its simple name.

**Returns:**

the FieldNode if found, otherwise null.


---

### getMethod

<span style="font-family: monospace; font-size: 80%;">public [MethodNode](MethodNode.md) __getMethod__</span>

Retrieves a method matching the signature of a given MethodNode.

**Returns:**

the matching MethodNode if found, otherwise null.


---

### getConstructor

<span style="font-family: monospace; font-size: 80%;">public [MethodNode](MethodNode.md) __getConstructor__</span>

Retrieves a constructor matching the signature of a given MethodNode.

**Returns:**

the matching constructor MethodNode if found, otherwise null.


---

### getModifiersString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModifiersString__</span>



**Returns:**

A string containing sorted modifiers separated by spaces.

**Overrides:**

[AbstractMember.getModifiersString](AbstractMember.md#getmodifiersstring)


---

