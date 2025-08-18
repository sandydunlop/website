Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.model.Node](Node.md)<br/>
                [io.github.sandydunlop.markista.model.AbstractPackageMember](AbstractPackageMember.md)<br/>
                        [io.github.sandydunlop.markista.model.PackageOrTypeNode](PackageOrTypeNode.md)<br/>
                                io.github.sandydunlop.markista.model.TypeNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [io.github.sandydunlop.markista.model.TypeView](TypeView.md)


----

<span style="font-family: monospace;">public class __TypeNode__</span>

Represents a type in the API model, including its kind (class, interface, enum, annotation),
supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata.


## Field Summary

| Modifier and Type                                                                                      | Field                     | Description                                                       |
|--------------------------------------------------------------------------------------------------------|---------------------------|-------------------------------------------------------------------|
| protected [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [sourcePath](#sourcepath) |                                                                   |
| protected [TypeNode.Kind](TypeNode.Kind.md)                                                            | [kind](#kind)             | The kind of this type (e.g., class, interface, enum, annotation). |

## Constructor Summary

| Constructor                                         | Description                                                                        |
|-----------------------------------------------------|------------------------------------------------------------------------------------|
| TypeNode( qualifiedName,  simpleName,  packageName) | Constructs a TypeNode with the specified qualified name, simple name, and package. |

## Method Summary

| Modifier and Type                                                                                                                                            | Method                                                                                                                                                                                           | Description                                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| public boolean                                                                                                                                               | [isClass](#isclass)()                                                                                                                                                                            |                                                                               |
| public boolean                                                                                                                                               | [isInterface](#isinterface)()                                                                                                                                                                    |                                                                               |
| public boolean                                                                                                                                               | [isEnum](#isenum)()                                                                                                                                                                              |                                                                               |
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
| public void                                                                                                                                                  | [setKind](#setkind)([TypeNode.Kind](TypeNode.Kind.md) kind)                                                                                                                                      | Sets the kind (class, interface, enum, annotation) of this type.              |
| public [TypeNode.Kind](TypeNode.Kind.md)                                                                                                                     | [getKind](#getkind)()                                                                                                                                                                            | Returns the kind of this type.                                                |
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
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [getModifiersString](#getmodifiersstring)()                                                                                                                                                      | Returns a string representation of modifiers.                                 |

## Field Details

### sourcePath




---

### kind

The kind of this type (e.g., class, interface, enum, annotation).


---


## Method Details

### isClass

public boolean isClass()




---

### isInterface

public boolean isInterface()




---

### isEnum

public boolean isEnum()




---

### isAnnotation

public boolean isAnnotation()




---

### getKindName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getKindName()




---

### setSourcePath

public void setSourcePath([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) path)




---

### getSourcePath

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSourcePath()




---

### setArrayBrackets

public void setArrayBrackets([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)

Sets the array brackets representation for this type.


---

### getArrayBrackets

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getArrayBrackets()

Returns the array brackets representation for this type.

**Returns:**

string representing array dimension brackets.


---

### addAppliedAnnotation

public void addAppliedAnnotation([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation)

Adds an applied annotation to this type


---

### getAppliedAnnotations

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> getAppliedAnnotations()

Returns the list of annotations applied to this type.

**Returns:**

list of applied annotations


---

### setImplementedInterfaces

public void setImplementedInterfaces([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> implementedInterfaces)

Sets the list of implemented interfaces by qualified names.


---

### getSupertypes

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Pair](Pair.md)<[Reference](Reference.md), [Text](Text.md)>> getSupertypes()

Returns the list of supertypes by qualified names.

**Returns:**

list of qualified supertype names.


---

### getImplementedInterfaces

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](Reference.md)> getImplementedInterfaces()

Returns the list of implemented interfaces by qualified names.

**Returns:**

list of qualified interface names.


---

### setOwner

public void setOwner([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) owner)

Sets the owner of this type.


---

### getOwner

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getOwner()

Returns the owner of this type.

**Returns:**

the TypeOwner that owns this type.


---

### getPackageName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName()

Returns the package name for this type.

**Returns:**

qualified package name, or null if no package node.


---

### setKind

public void setKind([TypeNode.Kind](TypeNode.Kind.md) kind)

Sets the kind (class, interface, enum, annotation) of this type.


---

### getKind

public [TypeNode.Kind](TypeNode.Kind.md) getKind()

Returns the kind of this type.

**Returns:**

the Kind enum value.


---

### addMethod

public void addMethod([MethodNode](MethodNode.md) method)

Adds a method to this type.


---

### getMethods

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> getMethods()

Returns the list of methods of this type.

**Returns:**

list of MethodNode instances.


---

### addConstructor

public void addConstructor([MethodNode](MethodNode.md) constructor)

Adds a constructor method to this type.


---

### getConstructors

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](MethodNode.md)> getConstructors()

Returns the list of constructors of this type.

**Returns:**

list of MethodNode constructors.


---

### addField

public void addField([FieldNode](FieldNode.md) field)

Adds a field to this type.


---

### getFields

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](FieldNode.md)> getFields()

Returns the list of fields of this type.

**Returns:**

list of FieldNode instances.


---

### setHasDocumentedAnnotation

public void setHasDocumentedAnnotation(boolean b)

Sets a flag indicating if this type as having a `@Documented` meta-annotation


---

### hasDocumentedAnnotation

public boolean hasDocumentedAnnotation()

Does this type have a `@Documented` meta-annotation?

**Returns:**

True if it has a `@Documented` meta-annotation


---

### setEnclosingClassRef

public void setEnclosingClassRef([Reference](Reference.md) ref)




---

### getEnclosingClassRef

public [Reference](Reference.md) getEnclosingClassRef()




---

### getField

public [FieldNode](FieldNode.md) getField([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)

Retrieves a field by its simple name.

**Returns:**

the FieldNode if found, otherwise null.


---

### getMethod

public [MethodNode](MethodNode.md) getMethod([MethodNode](MethodNode.md) method)

Retrieves a method matching the signature of a given MethodNode.

**Returns:**

the matching MethodNode if found, otherwise null.


---

### getConstructor

public [MethodNode](MethodNode.md) getConstructor([MethodNode](MethodNode.md) method)

Retrieves a constructor matching the signature of a given MethodNode.

**Returns:**

the matching constructor MethodNode if found, otherwise null.


---

### getModifiersString

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getModifiersString()

Returns a string representation of modifiers.
The modifiers are sorted according to a predefined order.

**Returns:**

A string containing sorted modifiers separated by spaces.

**Overrides:**

[io.github.sandydunlop.markista.model.AbstractPackageMember.getModifiersString](AbstractPackageMember.md#getmodifiersstring).getModifiersString


---

