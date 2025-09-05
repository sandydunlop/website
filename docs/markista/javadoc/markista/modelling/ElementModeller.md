Package [io.github.sandydunlop.markista.modelling](index.md)

# Class ElementModeller
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.modelling.ElementModeller<br/>
<br/>
All Implemented Interfaces:<br/>
    [](Modeller.md)<[ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html), [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html), [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html), [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html), [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html), [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html)>


----

<span style="font-family: monospace; font-size: 80%;">public class __ElementModeller__</span>


## Field Summary

| Modifier and Type                                                                                                                     | Field                                         | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-------------|
| private [](../model/Api.md)                                                                                                           | [api](#api)                                   |             |
| [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) | [currentMethodElement](#currentmethodelement) |             |
| [](../model/MethodNode.md)                                                                                                            | [currentMethodNode](#currentmethodnode)       |             |
| private [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) | [environment](#environment)                   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [fromPackage](#frompackage)                   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [fromType](#fromtype)                         |             |



## Constructor Summary

| Constructor                                                                                                                                                             | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| ElementModeller([](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e) |             |



## Method Summary

| Modifier and Type                                                                                                                       | Method                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public [](../model/ModuleNode.md)                                                                                                       | [modelModule](#modelmodule)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) m)                                                                                                                                                                          |                                                                                                                                                                                              |
| public [](../model/PackageNode.md)                                                                                                      | [modelPackage](#modelpackage)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) p)                                                                                                                                                                      |                                                                                                                                                                                              |
| public [](../model/TypeNode.md)                                                                                                         | [modelType](#modeltype)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                            | Creates or retrieves a TypeNode from the supplied TypeElement.                                                                                                                               |
| public [](../model/ClassNode.md)                                                                                                        | [modelClass](#modelclass)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)                                                                                                                                                                             |                                                                                                                                                                                              |
| public [](../model/FieldNode.md)                                                                                                        | [modelField](#modelfield)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                  | Creates a FieldNode representation from the VariableElement element representing a field.                                                                                                    |
| public [](../model/MethodNode.md)                                                                                                       | [modelMethod](#modelmethod)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                                            | Creates a MethodNode representation from the ExecutableElement element (method or constructor).                                                                                              |
| public [](../model/ParamNode.md)                                                                                                        | [modelParam](#modelparam)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                  |                                                                                                                                                                                              |
| private [](../model/TypeNode.md)                                                                                                        | [createTypeNode](#createtypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)            | Factory method to create TypeNode (ClassNode, InterfaceNode, RecordNode, EnumNode, or AnnotationNode) based on ElementKind.                                                                  |
| public void                                                                                                                             | [setEnumConstants](#setenumconstants)([](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)                                                                                                                                 | Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.                                                                                                       |
| public void                                                                                                                             | [setTypeOwnership](#settypeownership)([](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                           | Sets ownership of a TypeNode based on its enclosing type or package.                                                                                                                         |
| public void                                                                                                                             | [setModifiers](#setmodifiers)([](../model/AbstractMember.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)> modifiers)                                             | Adds modifiers to a model Node based on the set of language model modifiers.                                                                                                                 |
| public void                                                                                                                             | [setAppliedAnnotations](#setappliedannotations)([](../model/AbstractMember.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) elem)                                                                                                                          | Adds applied annotations to a TypeNode, FieldNode, or MethodNode.                                                                                                                            |
| public void                                                                                                                             | [setAppliedAnnotation](#setappliedannotation)([](../model/AbstractMember.md) node, [AnnotationMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/AnnotationMirror.html) annotationMirror)                                                                                              | Adds an applied annotation to a TypeNode.                                                                                                                                                    |
| public void                                                                                                                             | [setSourcePath](#setsourcepath)([](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                 |                                                                                                                                                                                              |
| public void                                                                                                                             | [setMethodParams](#setmethodparams)([](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)                                                                                                                  | Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.                                                                                            |
| public boolean                                                                                                                          | [setMethodOwnerDetails](#setmethodownerdetails)([](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                 |                                                                                                                                                                                              |
| public void                                                                                                                             | [setDeprecationStatus](#setdeprecationstatus)([](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)       | Sets the deprecation status of a Node based on element annotations and Javadoc `@Deprecated` tag.                                                                                            |
| public void                                                                                                                             | [setThrownTypes](#setthrowntypes)([](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)> thrownTypes)                        | Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.                                                                                                     |
| public void                                                                                                                             | [setMethodAnnotations](#setmethodannotations)([](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                 | Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.                                                                                  |
| public [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html)             | [getReturnTree](#getreturntree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                  | Finds the @return tag from a Javadoc DocCommentTree if present.                                                                                                                              |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/Link.md)>                   | [getReferences](#getreferences)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                  | Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.                                                                                           |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                     | [getUrl](#geturl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)                                                                                                                                                                                                                  | Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.                                                                                                |
| public [](../model/Text.md)                                                                                                             | [getSince](#getsince)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                            | Extracts the @since tag content from a DocCommentTree, if present.                                                                                                                           |
| public [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html)     | [getDeprecation](#getdeprecation)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)                                                                                                                                                            | Finds the DeprecatedTree from a Javadoc DocCommentTree if present.                                                                                                                           |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                     | [getParamType](#getparamtype)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                   | Gets the parameter type as a TypeNode for the specified parameter name in the method.                                                                                                        |
| public [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html)               | [getParamTree](#getparamtree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)                       | Finds the @param tag in a DocCommentTree matching the specified parameter variable.                                                                                                          |
| private [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) | [getEnclosingPackageElement](#getenclosingpackageelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                  | Recursively finds the enclosing PackageElement of a given element.                                                                                                                           |
| public [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)        | [getEnclosingTypeElement](#getenclosingtypeelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                        | Recursively finds the enclosing TypeElement (class, interface, enum, record, annotation) for the given element.                                                                              |
| private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                                          | [getModuleInfoFile](#getmoduleinfofile)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) moduleElement)                                                                                                                                                  | Retrieve the module-info.java file for the given ModuleElement if available.                                                                                                                 |
| private void                                                                                                                            | [setPackageSourcePath](#setpackagesourcepath)([](../model/PackageNode.md) pkg, [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee)                                                                                                                    |                                                                                                                                                                                              |
| private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                                          | [getPackageInfoFile](#getpackageinfofile)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) packageElement)                                                                                                                                             | Retrieves the `package-info.java` file associated with the specified PackageElement.                                                                                                         |
| private void                                                                                                                            | [setDocumentation](#setdocumentation)([](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                 | Sets documentation text for a Node based on the doc comment tree attached to a language model element.                                                                                       |
| private [](../model/Text.md)                                                                                                            | [createText](#createtext)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)> dtList)                                                                                  | Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.                                                                                               |
| [](../model/Text.md)                                                                                                                    | [docTreeToText](#doctreetotext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)                                                                                                                                                                               | Creates a [](../model/Text.md) object from a DocTree node, setting the appropriate kind and content.                                                                                         |
| [](../model/Text.md)                                                                                                                    | [markdownToText](#markdowntotext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)                                                                                                                                                                                              | Converts Markdown text into a [](../model/Text.md) object                                                                                                                                    |
| private [](MarkdownParser.Token.md)                                                                                                     | [handleBracketsTag](#handlebracketstag)([](MarkdownParser.Token.md) token, [](MarkdownParser.Token.md) next, [](../model/Text.md) text)                                                                                                                                                                                               |                                                                                                                                                                                              |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getDocTreeText](#getdoctreetext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)                                                                                                                                                                  | Extracts text from a DocTree to build a string from a part of its tokenized representation.                                                                                                  |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getDocTreePart](#getdoctreepart)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)                                                                                                                                                                      | Extracts a specific part (token) from a DocTree's toString representation.                                                                                                                   |
| public void                                                                                                                             | [collectAllSupertypes](#collectallsupertypes)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/TypeReference.md)> result)                                 | Collects all supertypes (classes) of the specified type recursively and adds them to the result list.                                                                                        |
| public boolean                                                                                                                          | [isInterface](#isinterface)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)                                                                                                                                                                          | Returns true if the TypeMirror represents an interface.                                                                                                                                      |
| public void                                                                                                                             | [findImplementedInterfaces](#findimplementedinterfaces)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/TypeReference.md)> result)        | Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.                                                                                  |
| public [](../model/DirectiveNode.md)                                                                                                    | [createDirectiveNode](#createdirectivenode)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)                                                                                                                                            | Creates a [](../model/DirectiveNode.md) to encapsulate the information provided by a module directive element.                                                                               |
| public [](../model/DirectiveNode.md)                                                                                                    | [createRequiresDirective](#createrequiresdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)                                                                                                                                    | Creates a DirectiveNode representing a [requires](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.RequiresDirective.html) directive. |
| public [](../model/DirectiveNode.md)                                                                                                    | [createExportsDirective](#createexportsdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)                                                                                                                                      | Creates a DirectiveNode representing an exports directive.                                                                                                                                   |
| public [](../model/DirectiveNode.md)                                                                                                    | [createOpensDirective](#createopensdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)                                                                                                                                          | Creates a DirectiveNode representing an opens directive.                                                                                                                                     |
| public [](../model/DirectiveNode.md)                                                                                                    | [createUsesDirective](#createusesdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)                                                                                                                                            | Creates a DirectiveNode representing a uses directive.                                                                                                                                       |
| public [](../model/DirectiveNode.md)                                                                                                    | [createProvidesDirective](#createprovidesdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)                                                                                                                                    | Creates a DirectiveNode representing a provides directive.                                                                                                                                   |
| public void                                                                                                                             | [setImplementations](#setimplementations)([](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)> implementations) | Adds implementation type names to a DirectiveNode.                                                                                                                                           |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">private [](../model/Api.md) __api__</span>




---

### currentMethodElement

<span style="font-family: monospace; font-size: 80%;">[ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) __currentMethodElement__</span>




---

### currentMethodNode

<span style="font-family: monospace; font-size: 80%;">[](../model/MethodNode.md) __currentMethodNode__</span>




---

### environment

<span style="font-family: monospace; font-size: 80%;">private [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) __environment__</span>




---

### fromPackage

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fromPackage__</span>




---

### fromType

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fromType__</span>




---


## Method Details

### modelModule

<span style="font-family: monospace; font-size: 80%;">public [](../model/ModuleNode.md) __modelModule__([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) m)</span>




---

### modelPackage

<span style="font-family: monospace; font-size: 80%;">public [](../model/PackageNode.md) __modelPackage__([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) p)</span>




---

### modelType

<span style="font-family: monospace; font-size: 80%;">public [](../model/TypeNode.md) __modelType__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>

Creates or retrieves a TypeNode from the supplied TypeElement.
This method extracts type details such as qualified name, package, kind, ownership, modifiers, supertypes, and interfaces,
adds the new TypeNode to the API model, and returns it.

**Returns:**

The corresponding TypeNode in the API model, or null if unsupported or error occurs.


---

### modelClass

<span style="font-family: monospace; font-size: 80%;">public [](../model/ClassNode.md) __modelClass__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)</span>




---

### modelField

<span style="font-family: monospace; font-size: 80%;">public [](../model/FieldNode.md) __modelField__([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)</span>

Creates a FieldNode representation from the VariableElement element representing a field.
Links the field to the owning TypeNode.

**Returns:**

The FieldNode, or null if errors occur.


---

### modelMethod

<span style="font-family: monospace; font-size: 80%;">public [](../model/MethodNode.md) __modelMethod__([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)</span>

Creates a MethodNode representation from the ExecutableElement element (method or constructor).
Sets return type, parameters, modifiers, thrown exceptions, ownership, and annotations.
Adds the method to the owning TypeNode's method or constructor list.

**Returns:**

The constructed MethodNode, or null if errors occur.


---

### modelParam

<span style="font-family: monospace; font-size: 80%;">public [](../model/ParamNode.md) __modelParam__([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)</span>




---

### createTypeNode

<span style="font-family: monospace; font-size: 80%;">private [](../model/TypeNode.md) __createTypeNode__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) simpleName, [](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)</span>

Factory method to create TypeNode (ClassNode, InterfaceNode, RecordNode,
EnumNode, or AnnotationNode) based on ElementKind.

**Returns:**

A TypeNode instance corresponding to the kind, or null if unsupported.


---

### setEnumConstants

<span style="font-family: monospace; font-size: 80%;">public void __setEnumConstants__([](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)</span>

Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.


---

### setTypeOwnership

<span style="font-family: monospace; font-size: 80%;">public void __setTypeOwnership__([](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>

Sets ownership of a TypeNode based on its enclosing type or package.
Updates the ownership link and qualified names accordingly.


---

### setModifiers

<span style="font-family: monospace; font-size: 80%;">public void __setModifiers__([](../model/AbstractMember.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)> modifiers)</span>

Adds modifiers to a model Node based on the set of language model modifiers.


---

### setAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public void __setAppliedAnnotations__([](../model/AbstractMember.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) elem)</span>

Adds applied annotations to a TypeNode, FieldNode, or MethodNode.


---

### setAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __setAppliedAnnotation__([](../model/AbstractMember.md) node, [AnnotationMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/AnnotationMirror.html) annotationMirror)</span>

Adds an applied annotation to a TypeNode.


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__([](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>




---

### setMethodParams

<span style="font-family: monospace; font-size: 80%;">public void __setMethodParams__([](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)</span>

Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.


---

### setMethodOwnerDetails

<span style="font-family: monospace; font-size: 80%;">public boolean __setMethodOwnerDetails__([](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)</span>




---

### setDeprecationStatus

<span style="font-family: monospace; font-size: 80%;">public void __setDeprecationStatus__([](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)</span>

Sets the deprecation status of a Node based on element annotations and Javadoc `@Deprecated` tag.


---

### setThrownTypes

<span style="font-family: monospace; font-size: 80%;">public void __setThrownTypes__([](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)> thrownTypes)</span>

Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.


---

### setMethodAnnotations

<span style="font-family: monospace; font-size: 80%;">public void __setMethodAnnotations__([](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)</span>

Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.


---

### getReturnTree

<span style="font-family: monospace; font-size: 80%;">public [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html) __getReturnTree__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)</span>

Finds the @return tag from a Javadoc DocCommentTree if present.

**Returns:**

The ReturnTree if found, null otherwise.


---

### getReferences

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/Link.md)> __getReferences__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)</span>

Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.

**Returns:**

A list of Reference objects extracted from @see tags.


---

### getUrl

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getUrl__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)</span>

Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.

**Returns:**

The extracted URL inside quotes or null if none found.


---

### getSince

<span style="font-family: monospace; font-size: 80%;">public [](../model/Text.md) __getSince__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)</span>

Extracts the @since tag content from a DocCommentTree, if present.

**Returns:**

A Text object representing @since content or an empty Text if none present.


---

### getDeprecation

<span style="font-family: monospace; font-size: 80%;">public [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html) __getDeprecation__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)</span>

Finds the DeprecatedTree from a Javadoc DocCommentTree if present.

**Returns:**

The DeprecatedTree if found, null otherwise.


---

### getParamType

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getParamType__([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)</span>

Gets the parameter type as a TypeNode for the specified parameter name in the method.

**Returns:**

A TypeNode for the parameter's type, or null if not found.


---

### getParamTree

<span style="font-family: monospace; font-size: 80%;">public [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html) __getParamTree__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)</span>

Finds the @param tag in a DocCommentTree matching the specified parameter variable.

**Returns:**

The matching ParamTree if found, null otherwise.


---

### getEnclosingPackageElement

<span style="font-family: monospace; font-size: 80%;">private [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) __getEnclosingPackageElement__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)</span>

Recursively finds the enclosing PackageElement of a given element.

**Returns:**

The nearest enclosing PackageElement or null if none found.


---

### getEnclosingTypeElement

<span style="font-family: monospace; font-size: 80%;">public [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) __getEnclosingTypeElement__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)</span>

Recursively finds the enclosing TypeElement (class, interface, enum, record, annotation) for the given element.

**Returns:**

The enclosing TypeElement or null if none found.


---

### getModuleInfoFile

<span style="font-family: monospace; font-size: 80%;">private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __getModuleInfoFile__([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) moduleElement)</span>

Retrieve the module-info.java file for the given ModuleElement if available.
This helper inspects the JavaFileObject associated with the module and returns
a File when the file name ends with "module-info.java".

**Returns:**

a File pointing to the module-info.java source or null if none found


---

### setPackageSourcePath

<span style="font-family: monospace; font-size: 80%;">private void __setPackageSourcePath__([](../model/PackageNode.md) pkg, [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee)</span>




---

### getPackageInfoFile

<span style="font-family: monospace; font-size: 80%;">private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __getPackageInfoFile__([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) packageElement)</span>

Retrieves the `package-info.java` file associated with the specified
PackageElement. This method checks if the package element has an
associated file and returns it as a File object.

**Returns:**

a File object representing the `package-info.java`
        file if it exists; `null` if the file does not exist or is
        not associated with the given package element


---

### setDocumentation

<span style="font-family: monospace; font-size: 80%;">private void __setDocumentation__([](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)</span>

Sets documentation text for a Node based on the doc comment tree attached to a language model element.
This populates first sentence, body, and full body texts.


---

### createText

<span style="font-family: monospace; font-size: 80%;">private [](../model/Text.md) __createText__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)> dtList)</span>

Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.

**Returns:**

A Text object composed of segments derived from each DocTree node.


---

### docTreeToText

<span style="font-family: monospace; font-size: 80%;">[](../model/Text.md) __docTreeToText__([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)</span>

Creates a [](../model/Text.md) object from a DocTree node, setting the appropriate kind and content.

**Returns:**

A [](../model/Text.md) object representing the content and kind of the provided DocTree.


---

### markdownToText

<span style="font-family: monospace; font-size: 80%;">[](../model/Text.md) __markdownToText__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown)</span>

Converts Markdown text into a [](../model/Text.md) object

**Returns:**

[](../model/Text.md) version of the Markdown


---

### handleBracketsTag

<span style="font-family: monospace; font-size: 80%;">private [](MarkdownParser.Token.md) __handleBracketsTag__([](MarkdownParser.Token.md) token, [](MarkdownParser.Token.md) next, [](../model/Text.md) text)</span>




---

### getDocTreeText

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getDocTreeText__([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)</span>

Extracts text from a DocTree to build a string from a part of its tokenized representation.

**Returns:**

A string representing the extracted part or empty string if extraction fails.


---

### getDocTreePart

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getDocTreePart__([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)</span>

Extracts a specific part (token) from a DocTree's toString representation.

**Returns:**

The extracted string part or empty string if out of range.


---

### collectAllSupertypes

<span style="font-family: monospace; font-size: 80%;">public void __collectAllSupertypes__([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/TypeReference.md)> result)</span>

Collects all supertypes (classes) of the specified type recursively and adds them to the result list.
java.lang.Object is excluded.


---

### isInterface

<span style="font-family: monospace; font-size: 80%;">public boolean __isInterface__([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)</span>

Returns true if the TypeMirror represents an interface.

**Returns:**

true if the type is an interface, false otherwise.


---

### findImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public void __findImplementedInterfaces__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/TypeReference.md)> result)</span>

Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.


---

### createDirectiveNode

<span style="font-family: monospace; font-size: 80%;">public [](../model/DirectiveNode.md) __createDirectiveNode__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)</span>

Creates a [](../model/DirectiveNode.md) to encapsulate the information provided
by a module directive element.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createRequiresDirective

<span style="font-family: monospace; font-size: 80%;">public [](../model/DirectiveNode.md) __createRequiresDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)</span>

Creates a DirectiveNode representing a [requires](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.RequiresDirective.html) directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createExportsDirective

<span style="font-family: monospace; font-size: 80%;">public [](../model/DirectiveNode.md) __createExportsDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)</span>

Creates a DirectiveNode representing an exports directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createOpensDirective

<span style="font-family: monospace; font-size: 80%;">public [](../model/DirectiveNode.md) __createOpensDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)</span>

Creates a DirectiveNode representing an opens directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createUsesDirective

<span style="font-family: monospace; font-size: 80%;">public [](../model/DirectiveNode.md) __createUsesDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)</span>

Creates a DirectiveNode representing a uses directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createProvidesDirective

<span style="font-family: monospace; font-size: 80%;">public [](../model/DirectiveNode.md) __createProvidesDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)</span>

Creates a DirectiveNode representing a provides directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### setImplementations

<span style="font-family: monospace; font-size: 80%;">public void __setImplementations__([](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)> implementations)</span>

Adds implementation type names to a DirectiveNode.


---

