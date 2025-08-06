Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [Node](Node.md)<br/>
                [AbstractTypeOwner](AbstractTypeOwner.md)<br/>
                        io.github.sandydunlop.markista.model.TypeNode<br/>
<br/>
All Implemented Interfaces:<br/>
    [PackageMember](PackageMember.md)


----

Represents a type in the API model, including its kind (class, interface, enum, annotation),
supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata.


## Field Summary

| Modifier and Type                                                                                                                                                                                    | Field                                           | Description                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------------------------|
| private [TypeOwner](TypeOwner.md)                                                                                                                                                                    | [owner](#owner)                                 | The owner of this type, usually another type or module.                        |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [implementedInterfaces](#implementedinterfaces) | List of qualified names of interfaces implemented by this type.                |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [supertypes](#supertypes)                       | List of qualified names of this type's supertypes.                             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [arrayBrackets](#arraybrackets)                 | String representation of array brackets if this type is an array (e.g., `[]`). |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt;                                                                  | [constructors](#constructors)                   | List of constructor methods belonging to this type.                            |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt;                                                                  | [methods](#methods)                             | List of methods belonging to this type.                                        |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;                                                                    | [fields](#fields)                               | List of fields belonging to this type.                                         |
| protected [TypeNode.Kind](TypeNode.Kind.md)                                                                                                                                                          | [kind](#kind)                                   | The kind of this type (e.g., class, interface, enum, annotation).              |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                              | Description                                                                        |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| TypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](PackageNode.md) packageNode) | Constructs a TypeNode with the specified qualified name, simple name, and package. |

## Method Summary

| Modifier and Type                                                                                                                                                                            | Method                                                                                                                                                                                                                                                                    | Description                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| void                                                                                                                                                                                         | [setArrayBrackets](#setarraybrackets)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)                                                                                                                              | Sets the array brackets representation for this type.                 |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getArrayBrackets](#getarraybrackets)()                                                                                                                                                                                                                                   | Returns the array brackets representation for this type.              |
| void                                                                                                                                                                                         | [setImplementedInterfaces](#setimplementedinterfaces)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; implementedInterfaces) | Sets the list of implemented interfaces by qualified names.           |
| void                                                                                                                                                                                         | [setSupertypes](#setsupertypes)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; supertypes)                                  | Sets the list of supertypes by qualified names.                       |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getSupertypes](#getsupertypes)()                                                                                                                                                                                                                                         | Returns the list of supertypes by qualified names.                    |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getImplementedInterfaces](#getimplementedinterfaces)()                                                                                                                                                                                                                   | Returns the list of implemented interfaces by qualified names.        |
| void                                                                                                                                                                                         | [setOwner](#setowner)([TypeOwner](TypeOwner.md) owner)                                                                                                                                                                                                                    | Sets the owner of this type.                                          |
| [TypeOwner](TypeOwner.md)                                                                                                                                                                    | [getOwner](#getowner)()                                                                                                                                                                                                                                                   | Returns the owner of this type.                                       |
| void                                                                                                                                                                                         | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                        | Sets the simple name of this type.                                    |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getSimpleName](#getsimplename)()                                                                                                                                                                                                                                         | Returns the simple name of this type.                                 |
| void                                                                                                                                                                                         | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                  | Sets the qualified name of this type.                                 |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getQualifiedName](#getqualifiedname)()                                                                                                                                                                                                                                   | Returns the qualified name of this type.                              |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getPackageName](#getpackagename)()                                                                                                                                                                                                                                       | Returns the package name for this type.                               |
| [PackageNode](PackageNode.md)                                                                                                                                                                | [getPackage](#getpackage)()                                                                                                                                                                                                                                               | Returns the package node this type belongs to.                        |
| void                                                                                                                                                                                         | [setKind](#setkind)([TypeNode.Kind](TypeNode.Kind.md) kind)                                                                                                                                                                                                               | Sets the kind (class, interface, enum, annotation) of this type.      |
| [TypeNode.Kind](TypeNode.Kind.md)                                                                                                                                                            | [getKind](#getkind)()                                                                                                                                                                                                                                                     | Returns the kind of this type.                                        |
| void                                                                                                                                                                                         | [addMethod](#addmethod)([MethodNode](MethodNode.md) method)                                                                                                                                                                                                               | Adds a method to this type.                                           |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt;                                                                  | [getMethods](#getmethods)()                                                                                                                                                                                                                                               | Returns the list of methods of this type.                             |
| void                                                                                                                                                                                         | [addConstructor](#addconstructor)([MethodNode](MethodNode.md) constructor)                                                                                                                                                                                                | Adds a constructor method to this type.                               |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt;                                                                  | [getConstructors](#getconstructors)()                                                                                                                                                                                                                                     | Returns the list of constructors of this type.                        |
| void                                                                                                                                                                                         | [addField](#addfield)([FieldNode](FieldNode.md) field)                                                                                                                                                                                                                    | Adds a field to this type.                                            |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;                                                                    | [getFields](#getfields)()                                                                                                                                                                                                                                                 | Returns the list of fields of this type.                              |
| [FieldNode](FieldNode.md)                                                                                                                                                                    | [getField](#getfield)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                             | Retrieves a field by its simple name.                                 |
| [MethodNode](MethodNode.md)                                                                                                                                                                  | [getMethod](#getmethod)([MethodNode](MethodNode.md) method)                                                                                                                                                                                                               | Retrieves a method matching the signature of a given MethodNode.      |
| [MethodNode](MethodNode.md)                                                                                                                                                                  | [getConstructor](#getconstructor)([MethodNode](MethodNode.md) method)                                                                                                                                                                                                     | Retrieves a constructor matching the signature of a given MethodNode. |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getName](#getname)()                                                                                                                                                                                                                                                     | Returns the name of the type.                                         |
| [Text](Text.md)                                                                                                                                                                              | [getDescription](#getdescription)()                                                                                                                                                                                                                                       | Returns the description of this type.                                 |

## Field Details

### owner

The owner of this type, usually another type or module.


---

### implementedInterfaces

List of qualified names of interfaces implemented by this type.


---

### supertypes

List of qualified names of this type's supertypes.


---

### arrayBrackets

String representation of array brackets if this type is an array (e.g., `[]`).


---

### constructors

List of constructor methods belonging to this type.


---

### methods

List of methods belonging to this type.


---

### fields

List of fields belonging to this type.


---

### kind

The kind of this type (e.g., class, interface, enum, annotation).


---


## Method Details

### setArrayBrackets

void setArrayBrackets([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)

Sets the array brackets representation for this type.

**Parameters:**

`brackets` - string representing array dimension brackets (e.g., `[]`).


---

### getArrayBrackets

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getArrayBrackets()

Returns the array brackets representation for this type.

**Returns:**

string representing array dimension brackets.


---

### setImplementedInterfaces

void setImplementedInterfaces([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; implementedInterfaces)

Sets the list of implemented interfaces by qualified names.

**Parameters:**

`implementedInterfaces` - list of qualified interface names.


---

### setSupertypes

void setSupertypes([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; supertypes)

Sets the list of supertypes by qualified names.

**Parameters:**

`supertypes` - list of qualified supertype names.


---

### getSupertypes

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getSupertypes()

Returns the list of supertypes by qualified names.

**Returns:**

list of qualified supertype names.


---

### getImplementedInterfaces

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getImplementedInterfaces()

Returns the list of implemented interfaces by qualified names.

**Returns:**

list of qualified interface names.


---

### setOwner

void setOwner([TypeOwner](TypeOwner.md) owner)

Sets the owner of this type.

**Parameters:**

`owner` - the TypeOwner that owns this type.


---

### getOwner

[TypeOwner](TypeOwner.md) getOwner()

Returns the owner of this type.

**Returns:**

the TypeOwner that owns this type.


---

### setSimpleName

void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the simple name of this type.

**Parameters:**

`name` - the simple name to set.


---

### getSimpleName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()

Returns the simple name of this type.

**Returns:**

the simple name.


---

### setQualifiedName

void setQualifiedName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)

Sets the qualified name of this type.

**Parameters:**

`name` - the qualified name to set.


---

### getQualifiedName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getQualifiedName()

Returns the qualified name of this type.

**Returns:**

the qualified name.


---

### getPackageName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName()

Returns the package name for this type.

**Returns:**

fully qualified package name, or null if no package node.


---

### getPackage

[PackageNode](PackageNode.md) getPackage()

Returns the package node this type belongs to.

**Returns:**

the PackageNode instance.


---

### setKind

void setKind([TypeNode.Kind](TypeNode.Kind.md) kind)

Sets the kind (class, interface, enum, annotation) of this type.

**Parameters:**

`kind` - the Kind enum value.


---

### getKind

[TypeNode.Kind](TypeNode.Kind.md) getKind()

Returns the kind of this type.

**Returns:**

the Kind enum value.


---

### addMethod

void addMethod([MethodNode](MethodNode.md) method)

Adds a method to this type.

**Parameters:**

`method` - the MethodNode to add.


---

### getMethods

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt; getMethods()

Returns the list of methods of this type.

**Returns:**

list of MethodNode instances.


---

### addConstructor

void addConstructor([MethodNode](MethodNode.md) constructor)

Adds a constructor method to this type.

**Parameters:**

`constructor` - the MethodNode constructor to add.


---

### getConstructors

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt; getConstructors()

Returns the list of constructors of this type.

**Returns:**

list of MethodNode constructors.


---

### addField

void addField([FieldNode](FieldNode.md) field)

Adds a field to this type.

**Parameters:**

`field` - the FieldNode to add.


---

### getFields

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; getFields()

Returns the list of fields of this type.

**Returns:**

list of FieldNode instances.


---

### getField

[FieldNode](FieldNode.md) getField([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)

Retrieves a field by its simple name.

**Parameters:**

`fieldName` - the simple name of the field.

**Returns:**

the FieldNode if found, otherwise null.


---

### getMethod

[MethodNode](MethodNode.md) getMethod([MethodNode](MethodNode.md) method)

Retrieves a method matching the signature of a given MethodNode.

**Parameters:**

`method` - the MethodNode whose signature to match.

**Returns:**

the matching MethodNode if found, otherwise null.


---

### getConstructor

[MethodNode](MethodNode.md) getConstructor([MethodNode](MethodNode.md) method)

Retrieves a constructor matching the signature of a given MethodNode.

**Parameters:**

`method` - the MethodNode whose signature to match.

**Returns:**

the matching constructor MethodNode if found, otherwise null.


---

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()

Returns the name of the type.

**Returns:**

the simple name.

**Specified By:**

[PackageMember](PackageMember.md)


---

### getDescription

[Text](Text.md) getDescription()

Returns the description of this type.

**Returns:**

a Text object containing the first sentence or summary.

**Specified By:**

[PackageMember](PackageMember.md)


---

