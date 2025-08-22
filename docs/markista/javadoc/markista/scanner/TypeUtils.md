Package [io.github.sandydunlop.markista.scanner](index.md)

# Class TypeUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.scanner.TypeUtils<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __TypeUtils__</span>

Utility class providing static methods to create and manipulate TypeNodes, MethodNodes, FieldNodes, and other API model objects
from language model elements and Javadoc doc trees obtained from the Java source code.

This class bridges the Java language model and the internal API representation used for generating documentation.
It includes methods to extract element details, ownership, modifiers, supertypes, interfaces, annotations, and documentation text.

The TypeUtils class must be initialized with an Api and DocletEnvironment before usage via the init(Api, DocletEnvironment) method.

It provides numerous helper methods to process types, methods, fields, annotations, and project structure metadata.

Methods also support handling Javadoc comment trees to extract detailed documentation fragments such as `@deprecated`, @param, @return, @since, and @see tags.

The class works internally with the Api model for cross-referencing and linking discovered elements.

This class is for internal use within the documentation generator and is not thread-safe.


## Field Summary

| Modifier and Type                                                                                                                            | Field                                         | Description                                                                                                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static [Api](../model/Api.md)                                                                                                        | [api](#api)                                   | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation.                            |
| static [Context](../core/Context.md)                                                                                                         | [ctx](#ctx)                                   | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| static [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) | [currentMethodElement](#currentmethodelement) |                                                                                                                                                                                       |
| static [MethodNode](../model/MethodNode.md)                                                                                                  | [currentMethodNode](#currentmethodnode)       |                                                                                                                                                                                       |
| private static [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) | [environment](#environment)                   |                                                                                                                                                                                       |



## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| TypeUtils() |             |



## Method Summary

| Modifier and Type                                                                                                                             | Method                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                                                            | [addConstantFieldValuesReference](#addconstantfieldvaluesreference)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                                              | Adds references to constant field values from classes in the API to the provided module node.                                                              |
| public static boolean                                                                                                                         | [belongsToClass](#belongstoclass)([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> cls, [MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                                                                 | Attempts to find an inherited method defined in native Java classes (e.g., from runtime classes).                                                          |
| public static void                                                                                                                            | [collectAllSupertypes](#collectallsupertypes)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](../model/TypeReference.md)> result)                                                                                                                                | Collects all supertypes (classes) of the specified type recursively and adds them to the result list.                                                      |
| public static [Text](../model/Text.md)                                                                                                        | [createText](#createtext)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)> dtList)                                                                                                                                                                                              | Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.                                                             |
| public static [TypeNode](../model/TypeNode.md)                                                                                                | [createTypeNode](#createtypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind) | Factory method to create TypeNode (ClassTypeNode, InterfaceTypeNode, RecordTypeNode, EnumTypeNode, or AnnotationTypeNode) based on ElementKind.            |
| public static [Text](../model/Text.md)                                                                                                        | [docTreeToText](#doctreetotext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)                                                                                                                                                                                                                                                                                           | Creates a [Text](../model/Text.md) object from a DocTree node, setting the appropriate kind and content.                                                   |
| public static void                                                                                                                            | [findImplementedInterfaces](#findimplementedinterfaces)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](../model/TypeReference.md)> result)                                                                                                       | Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.                                                |
| public static [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html)    | [getDeprecation](#getdeprecation)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)                                                                                                                                                                                                                                                                        | Finds the DeprecatedTree from a Javadoc DocCommentTree if present.                                                                                         |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getDocTreePart](#getdoctreepart)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)                                                                                                                                                                                                                                                                                  | Extracts a specific part (token) from a DocTree's toString representation.                                                                                 |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getDocTreeText](#getdoctreetext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)                                                                                                                                                                                                                                                                              | Extracts text from a DocTree to build a string from a part of its tokenized representation.                                                                |
| public static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) | [getEnclosingPackageElement](#getenclosingpackageelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                              | Recursively finds the enclosing PackageElement of a given element.                                                                                         |
| public static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)       | [getEnclosingTypeElement](#getenclosingtypeelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                                    | Recursively finds the enclosing TypeElement (class, interface, enum, record, annotation) for the given element.                                            |
| public static [TypeNode](../model/TypeNode.md)                                                                                                | [getFieldType](#getfieldtype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                                                                     | Gets the field type as a TypeNode for the specified class name and field name.                                                                             |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                           | [getFullSignature](#getfullsignature)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                                                                                                                                              |                                                                                                                                                            |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getNativeClassForInheritedMethod](#getnativeclassforinheritedmethod)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                                                                                                                                | Recursively searches for an overridden method matching the supplied method within the supertypes of its owner.                                             |
| public static [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                                          | [getPackageInfoFile](#getpackageinfofile)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) packageElement)                                                                                                                                                                                                                                                         | Retrieves the `package-info.java` file associated with the specified  .                                                                                    |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                   | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)                                                                                                                                                                                                                                                                                                 | Extracts the package name from a qualified type name.                                                                                                      |
| public static [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html)              | [getParamTree](#getparamtree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)                                                                                                                                   | Finds the @param tag in a DocCommentTree matching the specified parameter variable.                                                                        |
| public static [TypeNode](../model/TypeNode.md)                                                                                                | [getParamType](#getparamtype)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                               | Gets the parameter type as a TypeNode for the specified parameter name in the method.                                                                      |
| public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)>              | [getReferences](#getreferences)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              | Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.                                                         |
| public static [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html)            | [getReturnTree](#getreturntree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              | Finds the @return tag from a Javadoc DocCommentTree if present.                                                                                            |
| public static [Text](../model/Text.md)                                                                                                        | [getSince](#getsince)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                                        | Extracts the @since tag content from a DocCommentTree, if present.                                                                                         |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getUrl](#geturl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)                                                                                                                                                                                                                                                                                                                              | Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.                                                              |
| public static void                                                                                                                            | [init](#init)([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e)                                                                                                                                                                                                                                                                          | Initializes this utility class to use the given API model and Doclet environment.                                                                          |
| public static boolean                                                                                                                         | [isIncludedInApi](#isincludedinapi)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                                                          | Returns true if the element should be included in the public API documentation based on its modifiers and configuration.                                   |
| public static boolean                                                                                                                         | [isInterface](#isinterface)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)                                                                                                                                                                                                                                                                                      | Returns true if the TypeMirror represents an interface.                                                                                                    |
| public static void                                                                                                                            | [markCustomAnnotations](#markcustomannotations)()                                                                                                                                                                                                                                                                                                                                                                                                 | Iterates over all annotations in the API, identifying ones that are custom and those that have the `@Documented` meta-annotation and marking them as such. |
| public static [Text](../model/Text.md)                                                                                                        | [markdownToText](#markdowntotext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)                                                                                                                                                                                                                                                                                                          | Converts Markdown text into a [Text](../model/Text.md) object                                                                                              |
| public static [TypeNode](../model/TypeNode.md)                                                                                                | [nodeFromElement](#nodefromelement)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                                                                            | Creates or retrieves a TypeNode from the supplied TypeElement.                                                                                             |
| public static [MethodNode](../model/MethodNode.md)                                                                                            | [nodeFromElement](#nodefromelement)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                                                                                                                                                | Creates a MethodNode representation from the ExecutableElement element (method or constructor).                                                            |
| public static [FieldNode](../model/FieldNode.md)                                                                                              | [nodeFromElement](#nodefromelement)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                                                                                                                    | Creates a FieldNode representation from the VariableElement element representing a field.                                                                  |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [removeGenerics](#removegenerics)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                                                                                                                                                                                               | Removes the generic type and its surrounding <> from a string, if present                                                                                  |
| public static void                                                                                                                            | [setAppliedAnnotation](#setappliedannotation)([AbstractMember](../model/AbstractMember.md) node, [AnnotationMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/AnnotationMirror.html) annotationMirror)                                                                                                                                                                                            | Adds an applied annotation to a TypeNode.                                                                                                                  |
| public static void                                                                                                                            | [setAppliedAnnotations](#setappliedannotations)([AbstractMember](../model/AbstractMember.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) elem)                                                                                                                                                                                                                        | Adds applied annotations to a TypeNode, FieldNode, or MethodNode.                                                                                          |
| public static void                                                                                                                            | [setDeprecationStatus](#setdeprecationstatus)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)                                                                                                               | Sets the deprecation status of a Node based on element annotations and Javadoc `@Deprecated` tag.                                                          |
| public static void                                                                                                                            | [setDocumentation](#setdocumentation)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                         | Sets documentation text for a Node based on the doc comment tree attached to a language model element.                                                     |
| public static void                                                                                                                            | [setEnumConstants](#setenumconstants)([EnumTypeNode](../model/EnumTypeNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)                                                                                                                                                                                                                             | Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.                                                                     |
| public static void                                                                                                                            | [setImplementations](#setimplementations)([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)> implementations)                                                                                                | Adds implementation type names to a DirectiveNode.                                                                                                         |
| public static void                                                                                                                            | [setMethodAnnotations](#setmethodannotations)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                   | Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.                                                |
| public static boolean                                                                                                                         | [setMethodOwnerDetails](#setmethodownerdetails)([MethodNode](../model/MethodNode.md) methodNode, [PackageNode](../model/PackageNode.md) packageNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                               |                                                                                                                                                            |
| public static void                                                                                                                            | [setMethodParams](#setmethodparams)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)                                                                                                                                                                                                                    | Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.                                                          |
| public static void                                                                                                                            | [setModifiers](#setmodifiers)([AbstractMember](../model/AbstractMember.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)> modifiers)                                                                                                                                           | Adds modifiers to a model Node based on the set of language model modifiers.                                                                               |
| public static void                                                                                                                            | [setPackageSourcePath](#setpackagesourcepath)([PackageNode](../model/PackageNode.md) pkg, [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee)                                                                                                                                                                                                                     |                                                                                                                                                            |
| public static void                                                                                                                            | [setSourcePath](#setsourcepath)([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                                     |                                                                                                                                                            |
| public static void                                                                                                                            | [setSpecifiedBy](#setspecifiedby)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                           | Checks implemented interfaces of a method's owning type, and sets "specifiedBy" on the method if it implements an interface method.                        |
| public static void                                                                                                                            | [setThrownTypes](#setthrowntypes)([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)> thrownTypes)                                                                                                                          | Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.                                                                   |
| public static void                                                                                                                            | [setTypeOwnership](#settypeownership)([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                               | Sets ownership of a TypeNode based on its enclosing type or package.                                                                                       |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">private static [Api](../model/Api.md) __api__</span>

The Api model representing the entire documented API structure,
including modules, packages, types, and members used for cross-referencing and navigation.


---

### ctx

<span style="font-family: monospace; font-size: 80%;">static [Context](../core/Context.md) __ctx__</span>

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---

### currentMethodElement

<span style="font-family: monospace; font-size: 80%;">static [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) __currentMethodElement__</span>




---

### currentMethodNode

<span style="font-family: monospace; font-size: 80%;">static [MethodNode](../model/MethodNode.md) __currentMethodNode__</span>




---

### environment

<span style="font-family: monospace; font-size: 80%;">private static [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) __environment__</span>




---


## Method Details

### addConstantFieldValuesReference

<span style="font-family: monospace; font-size: 80%;">public static void __addConstantFieldValuesReference__([ModuleNode](../model/ModuleNode.md) moduleNode)</span>

Adds references to constant field values from classes in the API to the provided module node.


---

### belongsToClass

<span style="font-family: monospace; font-size: 80%;">public static boolean __belongsToClass__([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> cls, [MethodNode](../model/MethodNode.md) method)</span>

Attempts to find an inherited method defined in native Java classes (e.g., from runtime classes).

**Returns:**

An InheritedMethodNode if found, or null otherwise.

**Throws:**

[ClassNotFoundException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/ClassNotFoundException.html)


---

### collectAllSupertypes

<span style="font-family: monospace; font-size: 80%;">public static void __collectAllSupertypes__([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](../model/TypeReference.md)> result)</span>

Collects all supertypes (classes) of the specified type recursively and adds them to the result list.
java.lang.Object is excluded.


---

### createText

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __createText__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)> dtList)</span>

Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.

**Returns:**

A Text object composed of segments derived from each DocTree node.


---

### createTypeNode

<span style="font-family: monospace; font-size: 80%;">public static [TypeNode](../model/TypeNode.md) __createTypeNode__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)</span>

Factory method to create TypeNode (ClassTypeNode, InterfaceTypeNode, RecordTypeNode,
EnumTypeNode, or AnnotationTypeNode) based on ElementKind.

**Returns:**

A TypeNode instance corresponding to the kind, or null if unsupported.


---

### docTreeToText

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __docTreeToText__([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)</span>

Creates a [Text](../model/Text.md) object from a DocTree node, setting the appropriate kind and content.

**Returns:**

A [Text](../model/Text.md) object representing the content and kind of the provided DocTree.


---

### findImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public static void __findImplementedInterfaces__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeReference](../model/TypeReference.md)> result)</span>

Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.


---

### getDeprecation

<span style="font-family: monospace; font-size: 80%;">public static [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html) __getDeprecation__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)</span>

Finds the DeprecatedTree from a Javadoc DocCommentTree if present.

**Returns:**

The DeprecatedTree if found, null otherwise.


---

### getDocTreePart

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getDocTreePart__([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)</span>

Extracts a specific part (token) from a DocTree's toString representation.

**Returns:**

The extracted string part or empty string if out of range.


---

### getDocTreeText

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getDocTreeText__([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)</span>

Extracts text from a DocTree to build a string from a part of its tokenized representation.

**Returns:**

A string representing the extracted part or empty string if extraction fails.


---

### getEnclosingPackageElement

<span style="font-family: monospace; font-size: 80%;">public static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) __getEnclosingPackageElement__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)</span>

Recursively finds the enclosing PackageElement of a given element.

**Returns:**

The nearest enclosing PackageElement or null if none found.


---

### getEnclosingTypeElement

<span style="font-family: monospace; font-size: 80%;">public static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) __getEnclosingTypeElement__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)</span>

Recursively finds the enclosing TypeElement (class, interface, enum, record, annotation) for the given element.

**Returns:**

The enclosing TypeElement or null if none found.


---

### getFieldType

<span style="font-family: monospace; font-size: 80%;">public static [TypeNode](../model/TypeNode.md) __getFieldType__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)</span>

Gets the field type as a TypeNode for the specified class name and field name.

**Returns:**

A TypeNode representing the field's type, or null if not found.


---

### getFullSignature

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getFullSignature__([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)</span>




---

### getNativeClassForInheritedMethod

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getNativeClassForInheritedMethod__([MethodNode](../model/MethodNode.md) method)</span>

Recursively searches for an overridden method matching the supplied method within the supertypes of its owner.

**Returns:**

An InheritedMethodNode if a matching overriden method is found, else null.


---

### getPackageInfoFile

<span style="font-family: monospace; font-size: 80%;">public static [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __getPackageInfoFile__([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) packageElement)</span>

Retrieves the `package-info.java` file associated with the specified 
. This method checks if the package element has an 
associated file and returns it as a  object.

**Returns:**

a  object representing the `package-info.java`
        file if it exists; `null` if the file does not exist or is 
        not associated with the given package element


---

### getPackageName

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getPackageName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)</span>

Extracts the package name from a qualified type name.

**Returns:**

The package name portion or null if input null.


---

### getParamTree

<span style="font-family: monospace; font-size: 80%;">public static [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html) __getParamTree__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)</span>

Finds the @param tag in a DocCommentTree matching the specified parameter variable.

**Returns:**

The matching ParamTree if found, null otherwise.


---

### getParamType

<span style="font-family: monospace; font-size: 80%;">public static [TypeNode](../model/TypeNode.md) __getParamType__([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)</span>

Gets the parameter type as a TypeNode for the specified parameter name in the method.

**Returns:**

A TypeNode for the parameter's type, or null if not found.


---

### getReferences

<span style="font-family: monospace; font-size: 80%;">public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)> __getReferences__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)</span>

Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.

**Returns:**

A list of Reference objects extracted from @see tags.


---

### getReturnTree

<span style="font-family: monospace; font-size: 80%;">public static [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html) __getReturnTree__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)</span>

Finds the @return tag from a Javadoc DocCommentTree if present.

**Returns:**

The ReturnTree if found, null otherwise.


---

### getSince

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __getSince__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)</span>

Extracts the @since tag content from a DocCommentTree, if present.

**Returns:**

A Text object representing @since content or an empty Text if none present.


---

### getUrl

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getUrl__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)</span>

Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.

**Returns:**

The extracted URL inside quotes or null if none found.


---

### init

<span style="font-family: monospace; font-size: 80%;">public static void __init__([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e)</span>

Initializes this utility class to use the given API model and Doclet environment.
Sets up internal references and context necessary for subsequent operations.


---

### isIncludedInApi

<span style="font-family: monospace; font-size: 80%;">public static boolean __isIncludedInApi__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)</span>

Returns true if the element should be included in the public API documentation based on its modifiers and configuration.

**Returns:**

true if element is public or protected or private member documentation is configured; false otherwise.


---

### isInterface

<span style="font-family: monospace; font-size: 80%;">public static boolean __isInterface__([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)</span>

Returns true if the TypeMirror represents an interface.

**Returns:**

true if the type is an interface, false otherwise.


---

### markCustomAnnotations

<span style="font-family: monospace; font-size: 80%;">public static void __markCustomAnnotations__()</span>

Iterates over all annotations in the API, identifying ones that are custom and
those that have the `@Documented` meta-annotation and marking them as such.


---

### markdownToText

<span style="font-family: monospace; font-size: 80%;">public static [Text](../model/Text.md) __markdownToText__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)</span>

Converts Markdown text into a [Text](../model/Text.md) object

**Returns:**

[Text](../model/Text.md) version of the Markdown


---

### nodeFromElement

<span style="font-family: monospace; font-size: 80%;">public static [TypeNode](../model/TypeNode.md) __nodeFromElement__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>

Creates or retrieves a TypeNode from the supplied TypeElement.
This method extracts type details such as qualified name, package, kind, ownership, modifiers, supertypes, and interfaces,
adds the new TypeNode to the API model, and returns it.

**Returns:**

The corresponding TypeNode in the API model, or null if unsupported or error occurs.


---

### nodeFromElement

<span style="font-family: monospace; font-size: 80%;">public static [MethodNode](../model/MethodNode.md) __nodeFromElement__([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)</span>

Creates a MethodNode representation from the ExecutableElement element (method or constructor).
Sets return type, parameters, modifiers, thrown exceptions, ownership, and annotations.
Adds the method to the owning TypeNode's method or constructor list.

**Returns:**

The constructed MethodNode, or null if errors occur.


---

### nodeFromElement

<span style="font-family: monospace; font-size: 80%;">public static [FieldNode](../model/FieldNode.md) __nodeFromElement__([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)</span>

Creates a FieldNode representation from the VariableElement element representing a field.
Links the field to the owning TypeNode.

**Returns:**

The FieldNode, or null if errors occur.


---

### removeGenerics

<span style="font-family: monospace; font-size: 80%;">public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeGenerics__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)</span>

Removes the generic type and its surrounding <> from a string, if present

**Returns:**

The string with the generic type and surrounding <> removed


---

### setAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public static void __setAppliedAnnotation__([AbstractMember](../model/AbstractMember.md) node, [AnnotationMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/AnnotationMirror.html) annotationMirror)</span>

Adds an applied annotation to a TypeNode.


---

### setAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public static void __setAppliedAnnotations__([AbstractMember](../model/AbstractMember.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) elem)</span>

Adds applied annotations to a TypeNode, FieldNode, or MethodNode.


---

### setDeprecationStatus

<span style="font-family: monospace; font-size: 80%;">public static void __setDeprecationStatus__([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)</span>

Sets the deprecation status of a Node based on element annotations and Javadoc `@Deprecated` tag.


---

### setDocumentation

<span style="font-family: monospace; font-size: 80%;">public static void __setDocumentation__([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)</span>

Sets documentation text for a Node based on the doc comment tree attached to a language model element.
This populates first sentence, body, and full body texts.


---

### setEnumConstants

<span style="font-family: monospace; font-size: 80%;">public static void __setEnumConstants__([EnumTypeNode](../model/EnumTypeNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)</span>

Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.


---

### setImplementations

<span style="font-family: monospace; font-size: 80%;">public static void __setImplementations__([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)> implementations)</span>

Adds implementation type names to a DirectiveNode.


---

### setMethodAnnotations

<span style="font-family: monospace; font-size: 80%;">public static void __setMethodAnnotations__([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)</span>

Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.


---

### setMethodOwnerDetails

<span style="font-family: monospace; font-size: 80%;">public static boolean __setMethodOwnerDetails__([MethodNode](../model/MethodNode.md) methodNode, [PackageNode](../model/PackageNode.md) packageNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)</span>




---

### setMethodParams

<span style="font-family: monospace; font-size: 80%;">public static void __setMethodParams__([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)</span>

Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.


---

### setModifiers

<span style="font-family: monospace; font-size: 80%;">public static void __setModifiers__([AbstractMember](../model/AbstractMember.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)> modifiers)</span>

Adds modifiers to a model Node based on the set of language model modifiers.


---

### setPackageSourcePath

<span style="font-family: monospace; font-size: 80%;">public static void __setPackageSourcePath__([PackageNode](../model/PackageNode.md) pkg, [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee)</span>




---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public static void __setSourcePath__([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>




---

### setSpecifiedBy

<span style="font-family: monospace; font-size: 80%;">public static void __setSpecifiedBy__([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)</span>

Checks implemented interfaces of a method's owning type, and sets "specifiedBy" on the method if it implements an interface method.


---

### setThrownTypes

<span style="font-family: monospace; font-size: 80%;">public static void __setThrownTypes__([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)> thrownTypes)</span>

Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.


---

### setTypeOwnership

<span style="font-family: monospace; font-size: 80%;">public static void __setTypeOwnership__([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>

Sets ownership of a TypeNode based on its enclosing type or package.
Updates the ownership link and qualified names accordingly.


---

