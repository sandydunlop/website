Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.AbstractTypeOwner](AbstractTypeOwner.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.TypeNode<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[PackageMember](PackageMember.md)


----


## Field Summary

| Modifier and Type                                                                                                                                                                                    | Field                                           | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|-------------|
| private [TypeOwner](TypeOwner.md)                                                                                                                                                                    | [owner](#owner)                                 |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [implementedInterfaces](#implementedinterfaces) |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [supertypes](#supertypes)                       |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [arrayBrackets](#arraybrackets)                 |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt;                                                                  | [constructors](#constructors)                   |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt;                                                                  | [methods](#methods)                             |             |
| private [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;                                                                    | [fields](#fields)                               |             |
| protected [TypeNode.Kind](TypeNode.Kind.md)                                                                                                                                                          | [kind](#kind)                                   |             |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                              | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| TypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](PackageNode.md) packageNode) |             |

## Method Summary

| Modifier and Type                                                                                                                                                                            | Method                                                                                                                                                                                                                                                                    | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| void                                                                                                                                                                                         | [setArrayBrackets](#setarraybrackets)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)                                                                                                                              |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getArrayBrackets](#getarraybrackets)()                                                                                                                                                                                                                                   |             |
| void                                                                                                                                                                                         | [setImplementedInterfaces](#setimplementedinterfaces)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; implementedInterfaces) |             |
| void                                                                                                                                                                                         | [setSupertypes](#setsupertypes)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; supertypes)                                  |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getSupertypes](#getsupertypes)()                                                                                                                                                                                                                                         |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getImplementedInterfaces](#getimplementedinterfaces)()                                                                                                                                                                                                                   |             |
| void                                                                                                                                                                                         | [setOwner](#setowner)([TypeOwner](TypeOwner.md) owner)                                                                                                                                                                                                                    |             |
| [TypeOwner](TypeOwner.md)                                                                                                                                                                    | [getOwner](#getowner)()                                                                                                                                                                                                                                                   |             |
| void                                                                                                                                                                                         | [setSimpleName](#setsimplename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                        |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getSimpleName](#getsimplename)()                                                                                                                                                                                                                                         |             |
| void                                                                                                                                                                                         | [setQualifiedName](#setqualifiedname)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                                  |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getQualifiedName](#getqualifiedname)()                                                                                                                                                                                                                                   |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getPackageName](#getpackagename)()                                                                                                                                                                                                                                       |             |
| [PackageNode](PackageNode.md)                                                                                                                                                                | [getPackage](#getpackage)()                                                                                                                                                                                                                                               |             |
| void                                                                                                                                                                                         | [setKind](#setkind)([TypeNode.Kind](TypeNode.Kind.md) kind)                                                                                                                                                                                                               |             |
| [TypeNode.Kind](TypeNode.Kind.md)                                                                                                                                                            | [getKind](#getkind)()                                                                                                                                                                                                                                                     |             |
| void                                                                                                                                                                                         | [addMethod](#addmethod)([MethodNode](MethodNode.md) method)                                                                                                                                                                                                               |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt;                                                                  | [getMethods](#getmethods)()                                                                                                                                                                                                                                               |             |
| void                                                                                                                                                                                         | [addConstructor](#addconstructor)([MethodNode](MethodNode.md) constructor)                                                                                                                                                                                                |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt;                                                                  | [getConstructors](#getconstructors)()                                                                                                                                                                                                                                     |             |
| void                                                                                                                                                                                         | [addField](#addfield)([FieldNode](FieldNode.md) field)                                                                                                                                                                                                                    |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt;                                                                    | [getFields](#getfields)()                                                                                                                                                                                                                                                 |             |
| [FieldNode](FieldNode.md)                                                                                                                                                                    | [getField](#getfield)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                             |             |
| [MethodNode](MethodNode.md)                                                                                                                                                                  | [getMethod](#getmethod)([MethodNode](MethodNode.md) method)                                                                                                                                                                                                               |             |
| [MethodNode](MethodNode.md)                                                                                                                                                                  | [getConstructor](#getconstructor)([MethodNode](MethodNode.md) method)                                                                                                                                                                                                     |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getName](#getname)()                                                                                                                                                                                                                                                     |             |
| [Text](Text.md)                                                                                                                                                                              | [getDescription](#getdescription)()                                                                                                                                                                                                                                       |             |

## Field Details

### owner



### implementedInterfaces



### supertypes



### arrayBrackets



### constructors



### methods



### fields



### kind




## Method Details

### setArrayBrackets

void setArrayBrackets([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) brackets)



### getArrayBrackets

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getArrayBrackets()



### setImplementedInterfaces

void setImplementedInterfaces([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; implementedInterfaces)



### setSupertypes

void setSupertypes([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; supertypes)



### getSupertypes

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getSupertypes()



### getImplementedInterfaces

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getImplementedInterfaces()



### setOwner

void setOwner([TypeOwner](TypeOwner.md) owner)



### getOwner

[TypeOwner](TypeOwner.md) getOwner()



### setSimpleName

void setSimpleName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)



### getSimpleName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()



### setQualifiedName

void setQualifiedName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)



### getQualifiedName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getQualifiedName()



### getPackageName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName()



### getPackage

[PackageNode](PackageNode.md) getPackage()



### setKind

void setKind([TypeNode.Kind](TypeNode.Kind.md) kind)



### getKind

[TypeNode.Kind](TypeNode.Kind.md) getKind()



### addMethod

void addMethod([MethodNode](MethodNode.md) method)



### getMethods

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt; getMethods()



### addConstructor

void addConstructor([MethodNode](MethodNode.md) constructor)



### getConstructors

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](MethodNode.md)&gt; getConstructors()



### addField

void addField([FieldNode](FieldNode.md) field)



### getFields

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](FieldNode.md)&gt; getFields()



### getField

[FieldNode](FieldNode.md) getField([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)



### getMethod

[MethodNode](MethodNode.md) getMethod([MethodNode](MethodNode.md) method)



### getConstructor

[MethodNode](MethodNode.md) getConstructor([MethodNode](MethodNode.md) method)



### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()



**Specified By:**

[io.github.sandydunlop.markista.model.PackageMember](PackageMember.md)

### getDescription

[Text](Text.md) getDescription()



**Specified By:**

[io.github.sandydunlop.markista.model.PackageMember](PackageMember.md)

