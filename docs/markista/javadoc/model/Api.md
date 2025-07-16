Package [io.github.sandydunlop.markista.model](index.md)

# Class Api
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.Api<br/>
<br/>

----


## Field Summary

| Modifier and Type                  | Field       | Description |
|------------------------------------|-------------|-------------|
| private List&lt;PackageNode&gt;    | packages    |             |
| private List&lt;InterfaceNode&gt;  | interfaces  |             |
| private List&lt;ExceptionNode&gt;  | exceptions  |             |
| private List&lt;EnumNode&gt;       | enums       |             |
| private List&lt;ClassNode&gt;      | classes     |             |
| private List&lt;AnnotationNode&gt; | annotations |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| Api()       |             |

## Method Summary

| Modifier and Type             | Method                                                     | Description |
|-------------------------------|------------------------------------------------------------|-------------|
| void                          | [sort](#sort)()                                            |             |
| [TypeNode](TypeNode.md)       | [getTypeDoc](#gettypedoc)(String qualifiedName, List docs) |             |
| List&lt;PackageNode&gt;       | [getPackages](#getpackages)()                              |             |
| [PackageNode](PackageNode.md) | [getPackageDoc](#getpackagedoc)(String qualifiedName)      |             |
| List&lt;InterfaceNode&gt;     | [getInterfaces](#getinterfaces)()                          |             |
| List&lt;ExceptionNode&gt;     | [getExceptions](#getexceptions)()                          |             |
| List&lt;EnumNode&gt;          | [getEnums](#getenums)()                                    |             |
| List&lt;ClassNode&gt;         | [getClasses](#getclasses)()                                |             |
| [ClassNode](ClassNode.md)     | [getClassDoc](#getclassdoc)(TypeElement type)              |             |
| List&lt;AnnotationNode&gt;    | [getAnnotations](#getannotations)()                        |             |
| void                          | [addPackage](#addpackage)(PackageNode node)                |             |
| void                          | [addInterface](#addinterface)(InterfaceNode node)          |             |
| void                          | [addException](#addexception)(ExceptionNode node)          |             |
| void                          | [addEnum](#addenum)(EnumNode node)                         |             |
| void                          | [addClass](#addclass)(ClassNode node)                      |             |
| void                          | [addAnnotation](#addannotation)(AnnotationNode node)       |             |

## Method Details

### sort

`void sort()`



### getTypeDoc

`TypeNode getTypeDoc(String qualifiedName, List docs)`



### getPackages

`List<PackageNode> getPackages()`



### getPackageDoc

`PackageNode getPackageDoc(String qualifiedName)`



### getInterfaces

`List<InterfaceNode> getInterfaces()`



### getExceptions

`List<ExceptionNode> getExceptions()`



### getEnums

`List<EnumNode> getEnums()`



### getClasses

`List<ClassNode> getClasses()`



### getClassDoc

`ClassNode getClassDoc(TypeElement type)`



### getAnnotations

`List<AnnotationNode> getAnnotations()`



### addPackage

`void addPackage(PackageNode node)`



### addInterface

`void addInterface(InterfaceNode node)`



### addException

`void addException(ExceptionNode node)`



### addEnum

`void addEnum(EnumNode node)`



### addClass

`void addClass(ClassNode node)`



### addAnnotation

`void addAnnotation(AnnotationNode node)`



