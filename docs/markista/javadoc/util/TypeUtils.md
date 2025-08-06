Package [io.github.sandydunlop.markista.util](index.md)

# Class TypeUtils
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.TypeUtils<br/>
<br/>

----

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
| private static [Context](Context.md)                                                                                                         | [ctx](#ctx)                 | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private static [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) | [environment](#environment) |                                                                                                                                                                                       |
| private static [Api](../model/Api.md)                                                                                                        | [api](#api)                 | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation.                            |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| TypeUtils() |             |

## Method Summary

| Modifier and Type                                                                                                                         | Method                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| static void                                                                                                                               | [init](#init)([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e)                                                                                                                                                                                                                                                                          | Initializes this utility class to use the given API model and Doclet environment.                                                   |
| static [TypeNode](../model/TypeNode.md)                                                                                                   | [nodeFromElement](#nodefromelement)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                                                                            | Creates or retrieves a TypeNode from the supplied TypeElement.                                                                      |
| static void                                                                                                                               | [setEnumConstants](#setenumconstants)([EnumNode](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)                                                                                                                                                                                                                                     | Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.                                              |
| static [MethodNode](../model/MethodNode.md)                                                                                               | [nodeFromElement](#nodefromelement)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                                                                                                                                                | Creates a MethodNode representation from the ExecutableElement element (method or constructor).                                     |
| static [FieldNode](../model/FieldNode.md)                                                                                                 | [nodeFromElement](#nodefromelement)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                                                                                                                    | Creates a FieldNode representation from the VariableElement element representing a field.                                           |
| static [TypeNode](../model/TypeNode.md)                                                                                                   | [createTypeNode](#createtypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind) | Factory method to create TypeNode (ClassNode, InterfaceNode, EnumNode, or AnnotationNode) based on ElementKind.                     |
| static [Text](../model/Text.md)                                                                                                           | [createText](#createtext)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; dtList)                                                                                                                                                                                        | Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.                                      |
| static [Text.Segment](../model/Text.Segment.md)                                                                                           | [createTextSegment](#createtextsegment)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)                                                                                                                                                                                                                                                                                   | Creates a single Text.Segment from a DocTree node, setting the appropriate kind and content.                                        |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                       | [getDocTreeText](#getdoctreetext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)                                                                                                                                                                                                                                                                              | Extracts text from a DocTree to build a string from a part of its tokenized representation.                                         |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                       | [getDocTreePart](#getdoctreepart)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)                                                                                                                                                                                                                                                                                  | Extracts a specific part (token) from a DocTree's toString representation.                                                          |
| static void                                                                                                                               | [setDocumentation](#setdocumentation)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                         | Sets documentation text for a Node based on the doc comment tree attached to a language model element.                              |
| static void                                                                                                                               | [setTypeOwnership](#settypeownership)([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                               | Sets ownership of a TypeNode based on its enclosing type or package.                                                                |
| static void                                                                                                                               | [setMethodAnnotations](#setmethodannotations)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                   | Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.                         |
| static void                                                                                                                               | [setSpecifiedBy](#setspecifiedby)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                           | Checks implemented interfaces of a method's owning type, and sets "specifiedBy" on the method if it implements an interface method. |
| static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenMethod](#getoverriddenmethod)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                                                                                     | Recursively searches for an overridden method matching the supplied method within the supertypes of its owner.                      |
| static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenMethod](#getoverriddenmethod)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) superclass, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                            | Searches the given TypeElement for a method matching the supplied ExecutableElement\u2019s name.                                    |
| static [OverriddenMethodNode](../model/OverriddenMethodNode.md)                                                                           | [getOverriddenNativeMethod](#getoverriddennativemethod)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName, [MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                              | Attempts to find an overridden method defined in native Java classes (e.g., from runtime classes).                                  |
| static void                                                                                                                               | [addConstantFieldValuesReference](#addconstantfieldvaluesreference)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                                              | Adds references to constant field values from classes in the API to the provided module node.                                       |
| static boolean                                                                                                                            | [isInterface](#isinterface)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)                                                                                                                                                                                                                                                                                      | Returns true if the TypeMirror represents an interface.                                                                             |
| static void                                                                                                                               | [findImplementedInterfaces](#findimplementedinterfaces)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)                                               | Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.                         |
| static void                                                                                                                               | [collectAllSupertypes](#collectallsupertypes)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)                                                                        | Collects all supertypes (classes) of the specified type recursively and adds them to the result list.                               |
| static [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html)       | [getDeprecation](#getdeprecation)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)                                                                                                                                                                                                                                                                        | Finds the DeprecatedTree from a Javadoc DocCommentTree if present.                                                                  |
| static [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html)               | [getReturnTree](#getreturntree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              | Finds the @return tag from a Javadoc DocCommentTree if present.                                                                     |
| static [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html)                 | [getParamTree](#getparamtree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)                                                                                                                                   | Finds the @param tag in a DocCommentTree matching the specified parameter variable.                                                 |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](../model/Reference.md)&gt; | [getReferences](#getreferences)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                              | Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.                                  |
| static [Text](../model/Text.md)                                                                                                           | [getSince](#getsince)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                                                                                                        | Extracts the @since tag content from a DocCommentTree, if present.                                                                  |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                       | [getUrl](#geturl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)                                                                                                                                                                                                                                                                                                                              | Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.                                       |
| static void                                                                                                                               | [setModifiers](#setmodifiers)([Node](../model/Node.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)&gt; modifiers)                                                                                                                                                         | Adds modifiers to a model Node based on the set of language model modifiers.                                                        |
| static void                                                                                                                               | [setThrownTypes](#setthrowntypes)([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; thrownTypes)                                                                                                                    | Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.                                            |
| static void                                                                                                                               | [setDeprecationStatus](#setdeprecationstatus)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)                                                                                                               | Sets the deprecation status of a Node based on element annotations and Javadoc @deprecated tag.                                     |
| static boolean                                                                                                                            | [isIncludedInApi](#isincludedinapi)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                                                                                                                          | Returns true if the element should be included in the public API documentation based on its modifiers and configuration.            |
| static void                                                                                                                               | [setMethodParams](#setmethodparams)([MethodNode](../model/MethodNode.md) methodDoc, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)                                                                                                                                                                                                                     | Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.                                   |
| static void                                                                                                                               | [setImplementations](#setimplementations)([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)&gt; implementations)                                                                                          | Adds implementation type names to a DirectiveNode.                                                                                  |
| static [TypeNode](../model/TypeNode.md)                                                                                                   | [getFieldType](#getfieldtype)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                                                                     | Gets the field type as a TypeNode for the specified class name and field name.                                                      |
| static [TypeNode](../model/TypeNode.md)                                                                                                   | [getParamType](#getparamtype)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                                                                                               | Gets the parameter type as a TypeNode for the specified parameter name in the method.                                               |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                               | [getPackageName](#getpackagename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)                                                                                                                                                                                                                                                                                                 | Extracts the package name from a fully qualified type name.                                                                         |
| static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html)    | [getEnclosingPackageElement](#getenclosingpackageelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                              | Recursively finds the enclosing PackageElement of a given element.                                                                  |
| static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)          | [getEnclosingTypeElement](#getenclosingtypeelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                                                    | Recursively finds the enclosing TypeElement (class, interface, enum, annotation) for the given element.                             |

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

static void init([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e)

Initializes this utility class to use the given API model and Doclet environment.
Sets up internal references and context necessary for subsequent operations.

**Parameters:**

`a` - The Api instance representing the overall API model.

`e` - The DocletEnvironment providing access to Javadoc doc trees and processing utilities.


---

### nodeFromElement

static [TypeNode](../model/TypeNode.md) nodeFromElement([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)

Creates or retrieves a TypeNode from the supplied TypeElement.
This method extracts type details such as qualified name, package, kind, ownership, modifiers, supertypes, and interfaces,
adds the new TypeNode to the API model, and returns it.

**Parameters:**

`element` - The language model TypeElement to create a TypeNode from.

**Returns:**

The corresponding TypeNode in the API model, or null if unsupported or error occurs.


---

### setEnumConstants

static void setEnumConstants([EnumNode](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)

Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.

**Parameters:**

`enumNode` - The EnumNode to populate with constants.

`e` - The TypeElement representing the enum type.


---

### nodeFromElement

static [MethodNode](../model/MethodNode.md) nodeFromElement([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)

Creates a MethodNode representation from the ExecutableElement element (method or constructor).
Sets return type, parameters, modifiers, thrown exceptions, ownership, and annotations.
Adds the method to the owning TypeNode's method or constructor list.

**Parameters:**

`element` - The ExecutableElement to convert.

**Returns:**

The constructed MethodNode, or null if errors occur.


---

### nodeFromElement

static [FieldNode](../model/FieldNode.md) nodeFromElement([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)

Creates a FieldNode representation from the VariableElement element representing a field.
Links the field to the owning TypeNode.

**Parameters:**

`element` - The VariableElement to convert.

**Returns:**

The FieldNode, or null if errors occur.


---

### createTypeNode

static [TypeNode](../model/TypeNode.md) createTypeNode([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)

Factory method to create TypeNode (ClassNode, InterfaceNode, EnumNode, or AnnotationNode) based on ElementKind.

**Parameters:**

`qualifiedName` - Fully qualified name of the type.

`simpleName` - The simple (unqualified) name of the type.

`packageNode` - The owning PackageNode.

`elementKind` - The ElementKind representing the type kind.

**Returns:**

A TypeNode instance corresponding to the kind, or null if unsupported.


---

### createText

static [Text](../model/Text.md) createText([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)&gt; dtList)

Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.

**Parameters:**

`dtList` - List of DocTree nodes representing a part of a Javadoc comment.

**Returns:**

A Text object composed of segments derived from each DocTree node.


---

### createTextSegment

static [Text.Segment](../model/Text.Segment.md) createTextSegment([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)

Creates a single Text.Segment from a DocTree node, setting the appropriate kind and content.

**Parameters:**

`docTree` - The DocTree node to convert.

**Returns:**

A Text.Segment representing the content and kind of the provided DocTree.


---

### getDocTreeText

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDocTreeText([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)

Extracts text from a DocTree to build a string from a part of its tokenized representation.

**Parameters:**

`docTree` - The DocTree to extract from.

`start` - The starting index for extraction.

**Returns:**

A string representing the extracted part or empty string if extraction fails.


---

### getDocTreePart

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDocTreePart([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)

Extracts a specific part (token) from a DocTree's toString representation.

**Parameters:**

`docTree` - The DocTree to parse.

`n` - The zero-based index of the part to extract.

**Returns:**

The extracted string part or empty string if out of range.


---

### setDocumentation

static void setDocumentation([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)

Sets documentation text for a Node based on the doc comment tree attached to a language model element.
This populates first sentence, body, and full body texts.

**Parameters:**

`node` - The Node to set documentation for.

`e` - The element whose doc comment is used.


---

### setTypeOwnership

static void setTypeOwnership([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)

Sets ownership of a TypeNode based on its enclosing type or package.
Updates the ownership link and qualified names accordingly.

**Parameters:**

`typeNode` - The TypeNode to set ownership on.

`element` - The TypeElement representing the type.


---

### setMethodAnnotations

static void setMethodAnnotations([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)

Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.

**Parameters:**

`method` - The MethodNode to update.

`methodElement` - The ExecutableElement representing the method.


---

### setSpecifiedBy

static void setSpecifiedBy([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)

Checks implemented interfaces of a method's owning type, and sets "specifiedBy" on the method if it implements an interface method.

**Parameters:**

`methodNode` - The MethodNode to update.

`methodElement` - The ExecutableElement representing the method.


---

### getOverriddenMethod

static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenMethod([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)

Recursively searches for an overridden method matching the supplied method within the supertypes of its owner.

**Parameters:**

`method` - The MethodNode for which to find an overridden method.

`methodElement` - The ExecutableElement representing the method.

**Returns:**

An OverriddenMethodNode if a matching override is found, else null.


---

### getOverriddenMethod

static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenMethod([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) superclass, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)

Searches the given TypeElement for a method matching the supplied ExecutableElement\u2019s name.

**Parameters:**

`superclass` - The TypeElement representing a supertype.

`methodElement` - The method to match by name.

**Returns:**

An OverriddenMethodNode if a match found, else null.


---

### getOverriddenNativeMethod

static [OverriddenMethodNode](../model/OverriddenMethodNode.md) getOverriddenNativeMethod([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName, [MethodNode](../model/MethodNode.md) method)

Attempts to find an overridden method defined in native Java classes (e.g., from runtime classes).

**Parameters:**

`qualifiedTypeName` - The fully qualified name of the type.

`method` - The MethodNode that may override the native method.

**Returns:**

An OverriddenMethodNode if found, or null otherwise.


---

### addConstantFieldValuesReference

static void addConstantFieldValuesReference([ModuleNode](../model/ModuleNode.md) moduleNode)

Adds references to constant field values from classes in the API to the provided module node.

**Parameters:**

`moduleNode` - The ModuleNode to which constant value references will be added.


---

### isInterface

static boolean isInterface([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)

Returns true if the TypeMirror represents an interface.

**Parameters:**

`typeMirror` - The TypeMirror to check.

**Returns:**

true if the type is an interface, false otherwise.


---

### findImplementedInterfaces

static void findImplementedInterfaces([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)

Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.

**Parameters:**

`typeElement` - The type to examine.

`result` - The list to receive the qualified interface names.


---

### collectAllSupertypes

static void collectAllSupertypes([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; result)

Collects all supertypes (classes) of the specified type recursively and adds them to the result list.
java.lang.Object is excluded.

**Parameters:**

`t` - The type to examine.

`result` - The list to receive supertypes.


---

### getDeprecation

static [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html) getDeprecation([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)

Finds the DeprecatedTree from a Javadoc DocCommentTree if present.

**Parameters:**

`docComment` - The Javadoc comment tree.

**Returns:**

The DeprecatedTree if found, null otherwise.


---

### getReturnTree

static [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html) getReturnTree([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)

Finds the @return tag from a Javadoc DocCommentTree if present.

**Parameters:**

`dcTree` - The DocCommentTree to search.

**Returns:**

The ReturnTree if found, null otherwise.


---

### getParamTree

static [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html) getParamTree([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)

Finds the @param tag in a DocCommentTree matching the specified parameter variable.

**Parameters:**

`dcTree` - The DocCommentTree containing block tags.

`parameter` - The VariableElement parameter to match.

**Returns:**

The matching ParamTree if found, null otherwise.


---

### getReferences

static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Reference](../model/Reference.md)&gt; getReferences([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)

Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.

**Parameters:**

`dcTree` - The DocCommentTree to process.

**Returns:**

A list of Reference objects extracted from @see tags.


---

### getSince

static [Text](../model/Text.md) getSince([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)

Extracts the @since tag content from a DocCommentTree, if present.

**Parameters:**

`dcTree` - The DocCommentTree containing tags.

**Returns:**

A Text object representing @since content or an empty Text if none present.


---

### getUrl

static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getUrl([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)

Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.

**Parameters:**

`html` - The input HTML-like string.

**Returns:**

The extracted URL inside quotes or null if none found.


---

### setModifiers

static void setModifiers([Node](../model/Node.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)&gt; modifiers)

Adds modifiers to a model Node based on the set of language model modifiers.

**Parameters:**

`node` - The Node to add modifiers to.

`modifiers` - The set of Modifier enums from language model.


---

### setThrownTypes

static void setThrownTypes([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)&gt; thrownTypes)

Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.

**Parameters:**

`methodNode` - The MethodNode to add thrown types to.

`thrownTypes` - The list of TypeMirror representing thrown exceptions.


---

### setDeprecationStatus

static void setDeprecationStatus([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)

Sets the deprecation status of a Node based on element annotations and Javadoc @deprecated tag.

**Parameters:**

`node` - The Node to update.

`e` - The language model element corresponding to the node.

`dct` - The DocCommentTree containing javadoc comments.


---

### isIncludedInApi

static boolean isIncludedInApi([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)

Returns true if the element should be included in the public API documentation based on its modifiers and configuration.

**Parameters:**

`e` - The language model element to test.

**Returns:**

true if element is public or protected or private member documentation is configured; false otherwise.


---

### setMethodParams

static void setMethodParams([MethodNode](../model/MethodNode.md) methodDoc, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)

Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.

**Parameters:**

`methodDoc` - The MethodNode to update.

`ee` - The ExecutableElement representing the method or constructor.


---

### setImplementations

static void setImplementations([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)&gt; implementations)

Adds implementation type names to a DirectiveNode.

**Parameters:**

`directiveNode` - The DirectiveNode to update.

`implementations` - List of TypeElements representing implementations.


---

### getFieldType

static [TypeNode](../model/TypeNode.md) getFieldType([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)

Gets the field type as a TypeNode for the specified class name and field name.

**Parameters:**

`className` - Fully qualified class name containing the field.

`fieldName` - The field name.

**Returns:**

A TypeNode representing the field's type, or null if not found.


---

### getParamType

static [TypeNode](../model/TypeNode.md) getParamType([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)

Gets the parameter type as a TypeNode for the specified parameter name in the method.

**Parameters:**

`method` - The ExecutableElement representing the method.

`fieldName` - The parameter name.

**Returns:**

A TypeNode for the parameter's type, or null if not found.


---

### getPackageName

private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getPackageName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedTypeName)

Extracts the package name from a fully qualified type name.

**Parameters:**

`qualifiedTypeName` - The fully qualified type name.

**Returns:**

The package name portion or null if input null.


---

### getEnclosingPackageElement

static [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) getEnclosingPackageElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)

Recursively finds the enclosing PackageElement of a given element.

**Parameters:**

`element` - The language model element.

**Returns:**

The nearest enclosing PackageElement or null if none found.


---

### getEnclosingTypeElement

static [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) getEnclosingTypeElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)

Recursively finds the enclosing TypeElement (class, interface, enum, annotation) for the given element.

**Parameters:**

`element` - The language model element such as a field or method.

**Returns:**

The enclosing TypeElement or null if none found.


---

