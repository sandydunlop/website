Package [io.github.sandydunlop.markista.util](index.md)

# Class TypeUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.TypeUtils<br/>
<br/>

----

<span style="font-family: monospace;">public class __TypeUtils__</span>

Utility class providing static methods to create and manipulate TypeNodes, MethodNodes, FieldNodes, and other API model objects
from language model elements and Javadoc doc trees obtained from the Java source code.

This class bridges the Java language model and the internal API representation used for generating documentation.
It includes methods to extract element details, ownership, modifiers, supertypes, interfaces, annotations, and documentation text.

The TypeUtils class must be initialized with an Api and DocletEnvironment before usage via the init(Api, DocletEnvironment) method.

It provides numerous helper methods to process types, methods, fields, annotations, and project structure metadata.

Methods also support handling Javadoc comment trees to extract detailed documentation fragments such as @deprecated, @param, @return, @since, and @see tags.

The class works internally with the Api model for cross-referencing and linking discovered elements.

This class is for internal use within the documentation generator and is not thread-safe.


## Field Summary

| Modifier and Type                                                                                                                            | Field                       | Description                                                                                                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| static [Context](../core/Context.md)                                                                                                         | [ctx](#ctx)                 | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private static [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) | [environment](#environment) |                                                                                                                                                                                       |
| private static [Api](../model/Api.md)                                                                                                        | [api](#api)                 | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation.                            |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| TypeUtils() |             |

## Method Summary

| Modifier and Type                                                                                                                             | Method                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public static void                                                                                                                            | [init](#init)([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e)                                                                                                                                                                                                                                                                          | Initializes this utility class to use the given API model and Doclet environment.                                                                          |
| public static [TypeNode](../model/TypeNode.md)                                                                                                | [nodeFromElement](#nodefromelement)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                                                                            | Creates or retrieves a TypeNode from the supplied TypeElement.                                                                                             |
| public static void                                                                                                                            | [setEnumConstants](#setenumconstants)([EnumTypeNode](../model/EnumTypeNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)                                                                                                                                                                                                                             | Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.                                                                     |
| public static [MethodNode](../model/MethodNode.md)                                                                                            | [nodeFromElement](#nodefromelement)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                                                                                                                                                | Creates a MethodNode representation from the ExecutableElement element (method or constructor).                                                            |
| public static [FieldNode](../model/FieldNode.md)                                                                                              | [nodeFromElement](#nodefromelement)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                                                                                                                    | Creates a FieldNode representation from the VariableElement element representing a field.                                                                  |
| public static [TypeNode](../model/TypeNode.md)                                                                                                | [createTypeNode](#createtypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind) | Factory method to create TypeNode (ClassNode, InterfaceNode, EnumNode, or AnnotationNode) based on ElementKind.                                            |
| public static [Text](../model/Text.md)                                                                                                        | [createText](#createtext)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)> dtList)                                                                                                                                                                                              | Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.                                                             |
| public static [Text](../model/Text.md)                                                                                                        | [docTreeToText](#doctreetotext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)                                                                                                                                                                                                                                                                                           | Creates a [Text](../model/Text.md) object from a DocTree node, setting the appropriate kind and content.                                                   |
| public static [Text](../model/Text.md)                                                                                                        | [markdownToText](#markdowntotext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)                                                                                                                                                                                                                                                                                                          | Converts Markdown text into a [Text](../model/Text.md) object                                                                                              |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getDocTreeText](#getdoctreetext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)                                                                                                                                                                                                                                                                              | Extracts text from a DocTree to build a string from a part of its tokenized representation.                                                                |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getDocTreePart](#getdoctreepart)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)                                                                                                                                                                                                                                                                                  | Extracts a specific part (token) from a DocTree's toString representation.                                                                                 |
| public static void                                                                                                                            | [setDocumentation](#setdocumentation)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                         | Sets documentation text for a Node based on the doc comment tree attached to a language model element.                                                     |
| public static void                                                                                                                            | [setTypeOwnership](#settypeownership)([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                               | Sets ownership of a TypeNode based on its enclosing type or package.                                                                                       |
| public static void                                                                                                                            | [setMethodAnnotations](#setmethodannotations)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                   | Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.                                                |
| public static void                                                                                                                            | [setSpecifiedBy](#setspecifiedby)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                           | Checks implemented interfaces of a method's owning type, and sets "specifiedBy" on the method if it implements an interface method.                        |
| public static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                        | [getOverriddenMethod](#getoverriddenmethod)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                     | Recursively searches for an overridden method matching the supplied method within the supertypes of its owner.                                             |
| public static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                        | [getOverriddenMethod](#getoverriddenmethod)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) superclass, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                            | Searches the given TypeElement for a method matching the supplied ExecutableElement\u2019s name.                                                           |
| public static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                        | [getOverriddenNativeMethod](#getoverriddennativemethod)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName, [MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                              | Attempts to find an overridden method defined in native Java classes (e.g., from runtime classes).                                                         |
| public static void                                                                                                                            | [addConstantFieldValuesReference](#addconstantfieldvaluesreference)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                                              | Adds references to constant field values from classes in the API to the provided module node.                                                              |
| public static boolean                                                                                                                         | [isInterface](#isinterface)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)                                                                                                                                                                                                                                                                                      | Returns true if the TypeMirror represents an interface.                                                                                                    |
| public static void                                                                                                                            | [findImplementedInterfaces](#findimplementedinterfaces)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](../model/Reference.md)> result)                                                                                                               | Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.                                                |
| public static void                                                                                                                            | [collectAllSupertypes](#collectallsupertypes)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Pair](../model/Pair.md)<[Reference](../model/Reference.md), [Text](../model/Text.md)>> result)                                                                                    | Collects all supertypes (classes) of the specified type recursively and adds them to the result list.                                                      |
| public static [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html)    | [getDeprecation](#getdeprecation)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)                                                                                                                                                                                                                                                                        | Finds the DeprecatedTree from a Javadoc DocCommentTree if present.                                                                                         |
| public static [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html)            | [getReturnTree](#getreturntree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              | Finds the @return tag from a Javadoc DocCommentTree if present.                                                                                            |
| public static [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html)              | [getParamTree](#getparamtree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)                                                                                                                                   | Finds the @param tag in a DocCommentTree matching the specified parameter variable.                                                                        |
| public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](../model/Reference.md)>    | [getReferences](#getreferences)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              | Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.                                                         |
| public static [Text](../model/Text.md)                                                                                                        | [getSince](#getsince)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                                        | Extracts the @since tag content from a DocCommentTree, if present.                                                                                         |
| public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getUrl](#geturl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)                                                                                                                                                                                                                                                                                                                              | Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.                                                              |
| public static void                                                                                                                            | [setModifiers](#setmodifiers)([AbstractPackageMember](../model/AbstractPackageMember.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)> modifiers)                                                                                                                             | Adds modifiers to a model Node based on the set of language model modifiers.                                                                               |
| public static void                                                                                                                            | [setAppliedAnnotations](#setappliedannotations)([TypeNode](../model/TypeNode.md) node, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) elem)                                                                                                                                                                                                                            | Adds applied annotations to a TypeNode.                                                                                                                    |
| public static void                                                                                                                            | [setAppliedAnnotation](#setappliedannotation)([TypeNode](../model/TypeNode.md) node, [AnnotationMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/AnnotationMirror.html) annotationMirror)                                                                                                                                                                                                        | Adds an applied annotation to a TypeNode.                                                                                                                  |
| public static void                                                                                                                            | [markCustomAnnotations](#markcustomannotations)()                                                                                                                                                                                                                                                                                                                                                                                                 | Iterates over all annotations in the API, identifying ones that are custom and those that have the `@Documented` meta-annotation and marking them as such. |
| public static void                                                                                                                            | [setThrownTypes](#setthrowntypes)([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)> thrownTypes)                                                                                                                          | Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.                                                                   |
| public static void                                                                                                                            | [setDeprecationStatus](#setdeprecationstatus)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)                                                                                                               | Sets the deprecation status of a Node based on element annotations and Javadoc @deprecated tag.                                                            |
| public static boolean                                                                                                                         | [isIncludedInApi](#isincludedinapi)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                                                          | Returns true if the element should be included in the public API documentation based on its modifiers and configuration.                                   |
| public static void                                                                                                                            | [setMethodParams](#setmethodparams)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)                                                                                                                                                                                                                    | Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.                                                          |
| public static void                                                                                                                            | [setImplementations](#setimplementations)([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)> implementations)                                                                                                | Adds implementation type names to a DirectiveNode.                                                                                                         |
| public static [TypeNode](../model/TypeNode.md)                                                                                                | [getFieldType](#getfieldtype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                                                                     | Gets the field type as a TypeNode for the specified class name and field name.                                                                             |
| public static [TypeNode](../model/TypeNode.md)                                                                                                | [getParamType](#getparamtype)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                               | Gets the parameter type as a TypeNode for the specified parameter name in the method.                                                                      |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                   | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)                                                                                                                                                                                                                                                                                                 | Extracts the package name from a qualified type name.                                                                                                      |
| public static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) | [getEnclosingPackageElement](#getenclosingpackageelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                              | Recursively finds the enclosing PackageElement of a given element.                                                                                         |
| public static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)       | [getEnclosingTypeElement](#getenclosingtypeelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                                    | Recursively finds the enclosing TypeElement (class, interface, enum, annotation) for the given element.                                                    |
| public static void                                                                                                                            | [setPackageSourcePath](#setpackagesourcepath)([PackageNode](../model/PackageNode.md) pkg, [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee)                                                                                                                                                                                                                     |                                                                                                                                                            |
| public static [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                                          | [getPackageInfoFile](#getpackageinfofile)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) packageElement)                                                                                                                                                                                                                                                         | Retrieves the `package-info.java` file associated with the specified  .                                                                                    |

## Field Details

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---

### environment




---

### api

The Api model representing the entire documented API structure,
including modules, packages, types, and members used for cross-referencing and navigation.


---


## Method Details

### init

public static void init([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e)

Initializes this utility class to use the given API model and Doclet environment.
Sets up internal references and context necessary for subsequent operations.


---

### nodeFromElement

public static [TypeNode](../model/TypeNode.md) nodeFromElement([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)

Creates or retrieves a TypeNode from the supplied TypeElement.
This method extracts type details such as qualified name, package, kind, ownership, modifiers, supertypes, and interfaces,
adds the new TypeNode to the API model, and returns it.

**Returns:**

The corresponding TypeNode in the API model, or null if unsupported or error occurs.


---

### setEnumConstants

public static void setEnumConstants([EnumTypeNode](../model/EnumTypeNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)

Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.


---

### nodeFromElement

public static [MethodNode](../model/MethodNode.md) nodeFromElement([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)

Creates a MethodNode representation from the ExecutableElement element (method or constructor).
Sets return type, parameters, modifiers, thrown exceptions, ownership, and annotations.
Adds the method to the owning TypeNode's method or constructor list.

**Returns:**

The constructed MethodNode, or null if errors occur.


---

### nodeFromElement

public static [FieldNode](../model/FieldNode.md) nodeFromElement([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)

Creates a FieldNode representation from the VariableElement element representing a field.
Links the field to the owning TypeNode.

**Returns:**

The FieldNode, or null if errors occur.


---

### createTypeNode

public static [TypeNode](../model/TypeNode.md) createTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)

Factory method to create TypeNode (ClassNode, InterfaceNode, EnumNode, or AnnotationNode) based on ElementKind.

**Returns:**

A TypeNode instance corresponding to the kind, or null if unsupported.


---

### createText

public static [Text](../model/Text.md) createText([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)> dtList)

Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.

**Returns:**

A Text object composed of segments derived from each DocTree node.


---

### docTreeToText

public static [Text](../model/Text.md) docTreeToText([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)

Creates a [Text](../model/Text.md) object from a DocTree node, setting the appropriate kind and content.

**Returns:**

A [Text](../model/Text.md) object representing the content and kind of the provided DocTree.


---

### markdownToText

public static [Text](../model/Text.md) markdownToText([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)

Converts Markdown text into a [Text](../model/Text.md) object

**Returns:**

[Text](../model/Text.md) version of the Markdown


---

### getDocTreeText

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDocTreeText([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)

Extracts text from a DocTree to build a string from a part of its tokenized representation.

**Returns:**

A string representing the extracted part or empty string if extraction fails.


---

### getDocTreePart

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDocTreePart([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)

Extracts a specific part (token) from a DocTree's toString representation.

**Returns:**

The extracted string part or empty string if out of range.


---

### setDocumentation

public static void setDocumentation([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)

Sets documentation text for a Node based on the doc comment tree attached to a language model element.
This populates first sentence, body, and full body texts.


---

### setTypeOwnership

public static void setTypeOwnership([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)

Sets ownership of a TypeNode based on its enclosing type or package.
Updates the ownership link and qualified names accordingly.


---

### setMethodAnnotations

public static void setMethodAnnotations([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)

Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.


---

### setSpecifiedBy

public static void setSpecifiedBy([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)

Checks implemented interfaces of a method's owning type, and sets "specifiedBy" on the method if it implements an interface method.


---

### getOverriddenMethod

public static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenMethod([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)

Recursively searches for an overridden method matching the supplied method within the supertypes of its owner.

**Returns:**

An OverriddenMethodNode if a matching override is found, else null.


---

### getOverriddenMethod

public static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenMethod([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) superclass, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)

Searches the given TypeElement for a method matching the supplied ExecutableElement\u2019s name.

**Returns:**

An OverriddenMethodNode if a match found, else null.


---

### getOverriddenNativeMethod

public static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenNativeMethod([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName, [MethodNode](../model/MethodNode.md) method)

Attempts to find an overridden method defined in native Java classes (e.g., from runtime classes).

**Returns:**

An OverriddenMethodNode if found, or null otherwise.


---

### addConstantFieldValuesReference

public static void addConstantFieldValuesReference([ModuleNode](../model/ModuleNode.md) moduleNode)

Adds references to constant field values from classes in the API to the provided module node.


---

### isInterface

public static boolean isInterface([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)

Returns true if the TypeMirror represents an interface.

**Returns:**

true if the type is an interface, false otherwise.


---

### findImplementedInterfaces

public static void findImplementedInterfaces([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](../model/Reference.md)> result)

Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.


---

### collectAllSupertypes

public static void collectAllSupertypes([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Pair](../model/Pair.md)<[Reference](../model/Reference.md), [Text](../model/Text.md)>> result)

Collects all supertypes (classes) of the specified type recursively and adds them to the result list.
java.lang.Object is excluded.


---

### getDeprecation

public static [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html) getDeprecation([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)

Finds the DeprecatedTree from a Javadoc DocCommentTree if present.

**Returns:**

The DeprecatedTree if found, null otherwise.


---

### getReturnTree

public static [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html) getReturnTree([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)

Finds the @return tag from a Javadoc DocCommentTree if present.

**Returns:**

The ReturnTree if found, null otherwise.


---

### getParamTree

public static [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html) getParamTree([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)

Finds the @param tag in a DocCommentTree matching the specified parameter variable.

**Returns:**

The matching ParamTree if found, null otherwise.


---

### getReferences

public static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Reference](../model/Reference.md)> getReferences([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)

Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.

**Returns:**

A list of Reference objects extracted from @see tags.


---

### getSince

public static [Text](../model/Text.md) getSince([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)

Extracts the @since tag content from a DocCommentTree, if present.

**Returns:**

A Text object representing @since content or an empty Text if none present.


---

### getUrl

public static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getUrl([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)

Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.

**Returns:**

The extracted URL inside quotes or null if none found.


---

### setModifiers

public static void setModifiers([AbstractPackageMember](../model/AbstractPackageMember.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)> modifiers)

Adds modifiers to a model Node based on the set of language model modifiers.


---

### setAppliedAnnotations

public static void setAppliedAnnotations([TypeNode](../model/TypeNode.md) node, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) elem)

Adds applied annotations to a TypeNode.


---

### setAppliedAnnotation

public static void setAppliedAnnotation([TypeNode](../model/TypeNode.md) node, [AnnotationMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/AnnotationMirror.html) annotationMirror)

Adds an applied annotation to a TypeNode.


---

### markCustomAnnotations

public static void markCustomAnnotations()

Iterates over all annotations in the API, identifying ones that are custom and
those that have the `@Documented` meta-annotation and marking them as such.


---

### setThrownTypes

public static void setThrownTypes([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)> thrownTypes)

Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.


---

### setDeprecationStatus

public static void setDeprecationStatus([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)

Sets the deprecation status of a Node based on element annotations and Javadoc @deprecated tag.


---

### isIncludedInApi

public static boolean isIncludedInApi([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)

Returns true if the element should be included in the public API documentation based on its modifiers and configuration.

**Returns:**

true if element is public or protected or private member documentation is configured; false otherwise.


---

### setMethodParams

public static void setMethodParams([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)

Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.


---

### setImplementations

public static void setImplementations([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)> implementations)

Adds implementation type names to a DirectiveNode.


---

### getFieldType

public static [TypeNode](../model/TypeNode.md) getFieldType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)

Gets the field type as a TypeNode for the specified class name and field name.

**Returns:**

A TypeNode representing the field's type, or null if not found.


---

### getParamType

public static [TypeNode](../model/TypeNode.md) getParamType([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)

Gets the parameter type as a TypeNode for the specified parameter name in the method.

**Returns:**

A TypeNode for the parameter's type, or null if not found.


---

### getPackageName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)

Extracts the package name from a qualified type name.

**Returns:**

The package name portion or null if input null.


---

### getEnclosingPackageElement

public static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) getEnclosingPackageElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)

Recursively finds the enclosing PackageElement of a given element.

**Returns:**

The nearest enclosing PackageElement or null if none found.


---

### getEnclosingTypeElement

public static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) getEnclosingTypeElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)

Recursively finds the enclosing TypeElement (class, interface, enum, annotation) for the given element.

**Returns:**

The enclosing TypeElement or null if none found.


---

### setPackageSourcePath

public static void setPackageSourcePath([PackageNode](../model/PackageNode.md) pkg, [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee)




---

### getPackageInfoFile

public static [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) getPackageInfoFile([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) packageElement)

Retrieves the `package-info.java` file associated with the specified 
. This method checks if the package element has an 
associated file and returns it as a  object.

**Returns:**

a  object representing the `package-info.java`
        file if it exists; `null` if the file does not exist or is 
        not associated with the given package element


---

