Package [io.github.sandydunlop.markista.doclet](index.md)

# Class ApiCollector
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.AbstractElementVisitor6&lt;Void,Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.ElementScanner6&lt;Void,Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.ElementScanner7&lt;Void,Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.ElementScanner8&lt;Void,Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;javax.lang.model.util.ElementScanner9&lt;Void,Integer&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.ApiCollector<br/>
<br/>

----


## Field Summary

| Modifier and Type                               | Field                  | Description |
|-------------------------------------------------|------------------------|-------------|
| private static Types                            | typeUtils              |             |
| private static DocTrees                         | treeUtils              |             |
| private [PackageNode](../model//PackageNode.md) | packageDoc             |             |
| private Set&lt;Element&gt;                      | encounteredSupertypes  |             |
| private static Elements                         | elementUtils           |             |
| private boolean                                 | documentPrivateMembers |             |
| private [Api](../model//Api.md)                 | api                    |             |

## Constructor Summary

| Constructor                                 | Description |
|---------------------------------------------|-------------|
| ApiCollector(DocletEnvironment environment) |             |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                 | Description                                                            |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                    | [visitVariable](#visitvariable)(VariableElement ve, Integer depth)                                                     |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                    | [visitType](#visittype)(TypeElement e, Integer depth)                                                                  |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                    | [visitPackage](#visitpackage)(PackageElement ee, Integer depth)                                                        |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                    | [visitExecutable](#visitexecutable)(ExecutableElement ee, Integer depth)                                               |                                                                        |
| private void                                                                                                | [setMethodParams](#setmethodparams)(MethodNode methodDoc, ExecutableElement ee)                                        |                                                                        |
| void                                                                                                        | [setDocumentPrivateMembers](#setdocumentprivatemembers)(boolean documentPrivateMembers)                                |                                                                        |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html)                    | [scan](#scan)(Element e, Integer depth)                                                                                |                                                                        |
| boolean                                                                                                     | [isInterface](#isinterface)(TypeMirror typeMirror)                                                                     |                                                                        |
| private boolean                                                                                             | [isIncludedInApi](#isincludedinapi)(Element e)                                                                         |                                                                        |
| private [TypeNode](../model//TypeNode.md)                                                                   | [insantiateSubtype](#insantiatesubtype)(ElementKind kind, String qualifiedName, String simpleName, String packageName) |                                                                        |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getSimpleName](#getsimplename)(String qualifiedTypeName)                                                              |                                                                        |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [getReturnComment](#getreturncomment)(DocCommentTree docComment)                                                       |                                                                        |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getParamType](#getparamtype)(Elements elementUtils, String className, ExecutableElement method, String fieldName)     |                                                                        |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [getParamComment](#getparamcomment)(DocCommentTree dcTree, VariableElement parameter)                                  |                                                                        |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getPackageName](#getpackagename)(String qualifiedTypeName)                                                            |                                                                        |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getFieldType](#getfieldtype)(Elements elementUtils, String className, String fieldName)                               |                                                                        |
| static TypeElement                                                                                          | [getEnclosingTypeElement](#getenclosingtypeelement)(Element element)                                                   | Returns the TypeElement of the class the specified element belongs to. |
| static PackageElement                                                                                       | [getEnclosingPackageElement](#getenclosingpackageelement)(Element element)                                             |                                                                        |
| private [Deprecation](../model//Deprecation.md)                                                             | [getDeprecationStatus](#getdeprecationstatus)(Element e)                                                               |                                                                        |
| private void                                                                                                | [findImplementedInterfaces](#findimplementedinterfaces)(TypeElement typeElement, List result)                          |                                                                        |
| private void                                                                                                | [collectAllSupertypes](#collectallsupertypes)(TypeMirror t, List result)                                               |                                                                        |
| [Api](../model//Api.md)                                                                                     | [collect](#collect)(Set elements)                                                                                      |                                                                        |

## Method Details

### visitVariable

`Void visitVariable(VariableElement ve, Integer depth)`



### visitType

`Void visitType(TypeElement e, Integer depth)`



### visitPackage

`Void visitPackage(PackageElement ee, Integer depth)`



### visitExecutable

`Void visitExecutable(ExecutableElement ee, Integer depth)`



### setMethodParams

`private void setMethodParams(MethodNode methodDoc, ExecutableElement ee)`



### setDocumentPrivateMembers

`void setDocumentPrivateMembers(boolean documentPrivateMembers)`



### scan

`Void scan(Element e, Integer depth)`



### isInterface

`boolean isInterface(TypeMirror typeMirror)`



### isIncludedInApi

`private boolean isIncludedInApi(Element e)`



### insantiateSubtype

`private TypeNode insantiateSubtype(ElementKind kind, String qualifiedName, String simpleName, String packageName)`



### getSimpleName

`private static String getSimpleName(String qualifiedTypeName)`



### getReturnComment

`private String getReturnComment(DocCommentTree docComment)`



### getParamType

`private static String getParamType(Elements elementUtils, String className, ExecutableElement method, String fieldName)`



### getParamComment

`private String getParamComment(DocCommentTree dcTree, VariableElement parameter)`



### getPackageName

`private static String getPackageName(String qualifiedTypeName)`



### getFieldType

`private static String getFieldType(Elements elementUtils, String className, String fieldName)`



### getEnclosingTypeElement

`static TypeElement getEnclosingTypeElement(Element element)`



Returns:

[the TypeElement of the class the specified element belongs to.]

### getEnclosingPackageElement

`static PackageElement getEnclosingPackageElement(Element element)`



### getDeprecationStatus

`private Deprecation getDeprecationStatus(Element e)`



### findImplementedInterfaces

`private void findImplementedInterfaces(TypeElement typeElement, List result)`



### collectAllSupertypes

`private void collectAllSupertypes(TypeMirror t, List result)`



### collect

`Api collect(Set elements)`



