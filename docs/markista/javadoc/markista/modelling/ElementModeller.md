Package [io.github.sandydunlop.markista.modelling](index.md)

# Class ElementModeller
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.modelling.ElementModeller<br/>
<br/>
All Implemented Interfaces:<br/>
    [io.github.sandydunlop.markista.modelling.Modeller](Modeller.md)<[javax.lang.model.element.ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html), [javax.lang.model.element.PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html), [javax.lang.model.element.TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html), [javax.lang.model.element.VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html), [javax.lang.model.element.ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html), [javax.lang.model.element.VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html)>


----

<span style="font-family: monospace; font-size: 80%;">public class __ElementModeller__</span>


## Field Summary

| Modifier and Type                                                                                                                     | Field                                         | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-------------|
| private [Api](../model/Api.md)                                                                                                        | [api](#api)                                   |             |
| [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) | [currentMethodElement](#currentmethodelement) |             |
| [MethodNode](../model/MethodNode.md)                                                                                                  | [currentMethodNode](#currentmethodnode)       |             |
| private [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) | [environment](#environment)                   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [fromModule](#frommodule)                     |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [fromPackage](#frompackage)                   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                  | [fromType](#fromtype)                         |             |
| int                                                                                                                                   | [lastKnownLineNumber](#lastknownlinenumber)   |             |



## Constructor Summary

| Constructor                                                                                                                                                                | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| ElementModeller([Api](../model/Api.md) a, [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) e) |             |



## Method Summary

| Modifier and Type                                                                                                                       | Method                                                                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                             |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public [ModuleNode](../model/ModuleNode.md)                                                                                             | [modelModule](#modelmodule)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) m)                                                                                                                                                                                                                    |                                                                                                                                                                                         |
| public [PackageNode](../model/PackageNode.md)                                                                                           | [modelPackage](#modelpackage)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) p)                                                                                                                                                                                                                |                                                                                                                                                                                         |
| public [TypeNode](../model/TypeNode.md)                                                                                                 | [modelType](#modeltype)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                                                                      | Creates or retrieves a TypeNode from the supplied TypeElement.                                                                                                                          |
| public [ClassNode](../model/ClassNode.md)                                                                                               | [modelClass](#modelclass)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)                                                                                                                                                                                                                       |                                                                                                                                                                                         |
| public [FieldNode](../model/FieldNode.md)                                                                                               | [modelField](#modelfield)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                                                            | Creates a FieldNode representation from the VariableElement element representing a field.                                                                                               |
| public [MethodNode](../model/MethodNode.md)                                                                                             | [modelMethod](#modelmethod)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                                                                                      | Creates a MethodNode representation from the ExecutableElement element (method or constructor).                                                                                         |
| public [ParamNode](../model/ParamNode.md)                                                                                               | [modelParam](#modelparam)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)                                                                                                                                                                                                            |                                                                                                                                                                                         |
| private [TypeNode](../model/TypeNode.md)                                                                                                | [createTypeNode](#createtypenode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)                                        | Factory method to create TypeNode (ClassNode, InterfaceNode, RecordNode, EnumNode, or AnnotationNode) based on ElementKind.                                                             |
| public void                                                                                                                             | [setEnumConstants](#setenumconstants)([EnumNode](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)                                                                                                                                                                   | Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.                                                                                                  |
| public void                                                                                                                             | [setTypeOwnership](#settypeownership)([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                             | Sets ownership of a TypeNode based on its enclosing type or package.                                                                                                                    |
| public void                                                                                                                             | [setModifiers](#setmodifiers)([AbstractMember](../model/AbstractMember.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)> modifiers)                                                                         | Adds modifiers to a model Node based on the set of language model modifiers.                                                                                                            |
| public void                                                                                                                             | [setAppliedAnnotations](#setappliedannotations)([AbstractMember](../model/AbstractMember.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) elem)                                                                                                                                                      | Adds applied annotations to a TypeNode, FieldNode, or MethodNode.                                                                                                                       |
| public void                                                                                                                             | [setAppliedAnnotation](#setappliedannotation)([AbstractMember](../model/AbstractMember.md) node, [AnnotationMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/AnnotationMirror.html) annotationMirror)                                                                                                                          | Adds an applied annotation to a TypeNode.                                                                                                                                               |
| public void                                                                                                                             | [setSourcePath](#setsourcepath)([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)                                                                                                                                                                   |                                                                                                                                                                                         |
| public void                                                                                                                             | [setMethodParams](#setmethodparams)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)                                                                                                                                                  | Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.                                                                                       |
| public boolean                                                                                                                          | [setMethodOwnerDetails](#setmethodownerdetails)([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)                                                                                                                                 |                                                                                                                                                                                         |
| public void                                                                                                                             | [setDeprecationStatus](#setdeprecationstatus)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)                                             | Sets the deprecation status of a Node based on element annotations and Javadoc `@Deprecated` tag.                                                                                       |
| public void                                                                                                                             | [setThrownTypes](#setthrowntypes)([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)> thrownTypes)                                                        | Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.                                                                                                |
| public void                                                                                                                             | [setMethodAnnotations](#setmethodannotations)([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)                                                                                                                                 | Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.                                                                             |
| public [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html)             | [getReturnTree](#getreturntree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                            | Finds the @return tag from a Javadoc DocCommentTree if present.                                                                                                                         |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)>               | [getReferences](#getreferences)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)                                                                                                                                                                                                            | Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.                                                                                      |
| public [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html)                                            | [getUrl](#geturl)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)                                                                                                                                                                                                                                                            | Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.                                                                                           |
| public [Text](../model/Text.md)                                                                                                         | [getSince](#getsince)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                                                | Extracts the @since tag content from a DocCommentTree, if present.                                                                                                                      |
| public [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html)     | [getDeprecation](#getdeprecation)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)                                                                                                                                                                                                      | Finds the DeprecatedTree from a Javadoc DocCommentTree if present.                                                                                                                      |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                     | [getParamType](#getparamtype)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)                                                                                             | Gets the parameter type as a TypeNode for the specified parameter name in the method.                                                                                                   |
| public [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html)               | [getParamTree](#getparamtree)([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)                                                                 | Finds the @param tag in a DocCommentTree matching the specified parameter variable.                                                                                                     |
| private [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) | [getEnclosingPackageElement](#getenclosingpackageelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                            | Recursively finds the enclosing PackageElement of a given element.                                                                                                                      |
| public [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)        | [getEnclosingTypeElement](#getenclosingtypeelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)                                                                                                                                                                                                  | Recursively finds the enclosing TypeElement (class, interface, enum, record, annotation) for the given element.                                                                         |
| private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                                          | [getModuleInfoFile](#getmoduleinfofile)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) moduleElement)                                                                                                                                                                                            | Retrieve the module-info.java file for the given ModuleElement if available.                                                                                                            |
| private void                                                                                                                            | [setPackageSourcePath](#setpackagesourcepath)([PackageNode](../model/PackageNode.md) pkg, [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee)                                                                                                                                                   |                                                                                                                                                                                         |
| private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)                                          | [getPackageInfoFile](#getpackageinfofile)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) packageElement)                                                                                                                                                                                       | Retrieves the `package-info.java` file associated with the specified PackageElement.                                                                                                    |
| private void                                                                                                                            | [setDocumentation](#setdocumentation)([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                                                                       | Sets documentation text for a Node based on the doc comment tree attached to a language model element.                                                                                  |
| [SourceCodeLocation](../model/SourceCodeLocation.md)                                                                                    | [commentLocation](#commentlocation)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element, [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)                                                                                          |                                                                                                                                                                                         |
| private [Text](../model/Text.md)                                                                                                        | [createText](#createtext)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)> dtList) | Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.                                                                                          |
| private [Reference](../model/Reference.md)                                                                                              | [here](#here)()                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                         |
| [Text](../model/Text.md)                                                                                                                | [docTreeToText](#doctreetotext)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element, [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)                                                                                              | Creates a [Text](../model/Text.md) object from a DocTree node, setting the appropriate kind and content.                                                                                |
| [Text](../model/Text.md)                                                                                                                | [markdownToText](#markdowntotext)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown, [SourceCodeLocation](../model/SourceCodeLocation.md) sourceLocation)                                                                                                                                                                   | Converts Markdown text into a [Text](../model/Text.md) object                                                                                                                           |
| private [Token](MarkdownParser.Token.md)                                                                                                | [handleBracketsTag](#handlebracketstag)([Token](MarkdownParser.Token.md) token, [Token](MarkdownParser.Token.md) next, [Text](../model/Text.md) text, [SourceCodeLocation](../model/SourceCodeLocation.md) sourceLoction)                                                                                                                                                       |                                                                                                                                                                                         |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getDocTreeText](#getdoctreetext)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)                                                                                                                                                                                                            | Extracts text from a DocTree to build a string from a part of its tokenized representation.                                                                                             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                    | [getDocTreePart](#getdoctreepart)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)                                                                                                                                                                                                                | Extracts a specific part (token) from a DocTree's toString representation.                                                                                                              |
| public void                                                                                                                             | [collectAllSupertypes](#collectallsupertypes)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[VariableType](../model/VariableType.md)> result)                                                                | Collects all supertypes (classes) of the specified type recursively and adds them to the result list.                                                                                   |
| public boolean                                                                                                                          | [isInterface](#isinterface)([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)                                                                                                                                                                                                                    | Returns true if the TypeMirror represents an interface.                                                                                                                                 |
| public void                                                                                                                             | [findImplementedInterfaces](#findimplementedinterfaces)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[VariableType](../model/VariableType.md)> result)                                       | Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.                                                                             |
| public [DirectiveNode](../model/DirectiveNode.md)                                                                                       | [createDirectiveNode](#createdirectivenode)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)                                                                                                                                                                                                    | Creates a [DirectiveNode](../model/DirectiveNode.md) to encapsulate the information provided by a module directive element.                                                             |
| public [DirectiveNode](../model/DirectiveNode.md)                                                                                       | [createRequiresDirective](#createrequiresdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)                                                                                                                                                                                            | Creates a DirectiveNode representing a [RequiresDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RequiresDirective.html) directive. |
| public [DirectiveNode](../model/DirectiveNode.md)                                                                                       | [createExportsDirective](#createexportsdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)                                                                                                                                                                                              | Creates a DirectiveNode representing an [ExportsDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExportsDirective.html) directive.  |
| public [DirectiveNode](../model/DirectiveNode.md)                                                                                       | [createOpensDirective](#createopensdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)                                                                                                                                                                                                  | Creates a DirectiveNode representing an [OpensDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/OpensDirective.html) directive.      |
| public [DirectiveNode](../model/DirectiveNode.md)                                                                                       | [createUsesDirective](#createusesdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)                                                                                                                                                                                                    | Creates a DirectiveNode representing a [UsesDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/UsesDirective.html) directive.         |
| public [DirectiveNode](../model/DirectiveNode.md)                                                                                       | [createProvidesDirective](#createprovidesdirective)([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)                                                                                                                                                                                            | Creates a DirectiveNode representing a [ProvidesDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ProvidesDirective.html) directive. |
| public void                                                                                                                             | [setImplementations](#setimplementations)([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)> implementations)                              | Adds implementation type names to a DirectiveNode.                                                                                                                                      |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                     | [removeParentheses](#removeparentheses)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)                                                                                                                                                                                                                                | Removes parentheses and what they contain from an expression                                                                                                                            |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">private [Api](../model/Api.md) __api__</span>




---

### currentMethodElement

<span style="font-family: monospace; font-size: 80%;">[ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) __currentMethodElement__</span>




---

### currentMethodNode

<span style="font-family: monospace; font-size: 80%;">[MethodNode](../model/MethodNode.md) __currentMethodNode__</span>




---

### environment

<span style="font-family: monospace; font-size: 80%;">private [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) __environment__</span>




---

### fromModule

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fromModule__</span>




---

### fromPackage

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fromPackage__</span>




---

### fromType

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fromType__</span>




---

### lastKnownLineNumber

<span style="font-family: monospace; font-size: 80%;">int __lastKnownLineNumber__</span>




---


## Method Details

### modelModule

<span style="font-family: monospace; font-size: 80%;">public [ModuleNode](../model/ModuleNode.md) __modelModule__([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) m)</span>




---

### modelPackage

<span style="font-family: monospace; font-size: 80%;">public [PackageNode](../model/PackageNode.md) __modelPackage__([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) p)</span>




---

### modelType

<span style="font-family: monospace; font-size: 80%;">public [TypeNode](../model/TypeNode.md) __modelType__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>

Creates or retrieves a TypeNode from the supplied TypeElement.This method extracts type details such as qualified name, package, kind, ownership, modifiers, supertypes, and interfaces,
adds the new TypeNode to the API model, and returns it.

**Parameters:**

`element` - The language model TypeElement to create a TypeNode from.

**Returns:**

The corresponding TypeNode in the API model, or null if unsupported or error occurs.


---

### modelClass

<span style="font-family: monospace; font-size: 80%;">public [ClassNode](../model/ClassNode.md) __modelClass__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) type)</span>




---

### modelField

<span style="font-family: monospace; font-size: 80%;">public [FieldNode](../model/FieldNode.md) __modelField__([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)</span>

Creates a FieldNode representation from the VariableElement element representing a field.Links the field to the owning TypeNode.

**Parameters:**

`element` - The VariableElement to convert.

**Returns:**

The FieldNode, or null if errors occur.


---

### modelMethod

<span style="font-family: monospace; font-size: 80%;">public [MethodNode](../model/MethodNode.md) __modelMethod__([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)</span>

Creates a MethodNode representation from the ExecutableElement element (method or constructor).Sets return type, parameters, modifiers, thrown exceptions, ownership, and annotations.
Adds the method to the owning TypeNode's method or constructor list.

**Parameters:**

`element` - The ExecutableElement to convert.

**Returns:**

The constructed MethodNode, or null if errors occur.


---

### modelParam

<span style="font-family: monospace; font-size: 80%;">public [ParamNode](../model/ParamNode.md) __modelParam__([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) element)</span>




---

### createTypeNode

<span style="font-family: monospace; font-size: 80%;">private [TypeNode](../model/TypeNode.md) __createTypeNode__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName, [PackageNode](../model/PackageNode.md) packageNode, [ElementKind](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ElementKind.html) elementKind)</span>

Factory method to create TypeNode (ClassNode, InterfaceNode, RecordNode,
EnumNode, or AnnotationNode) based on ElementKind.

**Parameters:**

`qualifiedName` - The qualified name of the type.

`packageNode` - The owning PackageNode.

`elementKind` - The ElementKind representing the type kind.

**Returns:**

A TypeNode instance corresponding to the kind, or null if unsupported.


---

### setEnumConstants

<span style="font-family: monospace; font-size: 80%;">public void __setEnumConstants__([EnumNode](../model/EnumNode.md) enumNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e)</span>

Reads enum constants from the TypeElement and adds them as FieldNodes to the EnumNode.

**Parameters:**

`enumNode` - The EnumNode to populate with constants.

`e` - The TypeElement representing the enum type.


---

### setTypeOwnership

<span style="font-family: monospace; font-size: 80%;">public void __setTypeOwnership__([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>

Sets ownership of a TypeNode based on its enclosing type or package.Updates the ownership link and qualified names accordingly.

**Parameters:**

`typeNode` - The TypeNode to set ownership on.

`element` - The TypeElement representing the type.


---

### setModifiers

<span style="font-family: monospace; font-size: 80%;">public void __setModifiers__([AbstractMember](../model/AbstractMember.md) node, [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[Modifier](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Modifier.html)> modifiers)</span>

Adds modifiers to a model Node based on the set of language model modifiers.

**Parameters:**

`node` - The Node to add modifiers to.

`modifiers` - The set of Modifier enums from language model.


---

### setAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public void __setAppliedAnnotations__([AbstractMember](../model/AbstractMember.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) elem)</span>

Adds applied annotations to a TypeNode, FieldNode, or MethodNode.

**Parameters:**

`node` - The TypeNode to add annotations to.

`elem` - The scanned Element that contains information about the applied annotations.


---

### setAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public void __setAppliedAnnotation__([AbstractMember](../model/AbstractMember.md) node, [AnnotationMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/AnnotationMirror.html) annotationMirror)</span>

Adds an applied annotation to a TypeNode.

**Parameters:**

`node` - The TypeNode to add annotations to.

`annotationMirror` - The scanned annotation


---

### setSourcePath

<span style="font-family: monospace; font-size: 80%;">public void __setSourcePath__([TypeNode](../model/TypeNode.md) typeNode, [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) element)</span>




---

### setMethodParams

<span style="font-family: monospace; font-size: 80%;">public void __setMethodParams__([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee)</span>

Sets the parameters on a MethodNode by inspecting the ExecutableElement and its doc comment tags.

**Parameters:**

`methodNode` - The MethodNode to update.

`ee` - The ExecutableElement representing the method or constructor.


---

### setMethodOwnerDetails

<span style="font-family: monospace; font-size: 80%;">public boolean __setMethodOwnerDetails__([MethodNode](../model/MethodNode.md) methodNode, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) element)</span>




---

### setDeprecationStatus

<span style="font-family: monospace; font-size: 80%;">public void __setDeprecationStatus__([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dct)</span>

Sets the deprecation status of a Node based on element annotations and Javadoc `@Deprecated` tag.

**Parameters:**

`node` - The Node to update.

`e` - The language model element corresponding to the node.

`dct` - The DocCommentTree containing javadoc comments.


---

### setThrownTypes

<span style="font-family: monospace; font-size: 80%;">public void __setThrownTypes__([MethodNode](../model/MethodNode.md) methodNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html)> thrownTypes)</span>

Adds list of thrown types (exceptions) to a MethodNode based on Java model type mirrors.

**Parameters:**

`methodNode` - The MethodNode to add thrown types to.

`thrownTypes` - The list of TypeMirror representing thrown exceptions.


---

### setMethodAnnotations

<span style="font-family: monospace; font-size: 80%;">public void __setMethodAnnotations__([MethodNode](../model/MethodNode.md) method, [ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) methodElement)</span>

Sets annotations on the MethodNode, in particular looks for @Override annotation to set overridden methods.

**Parameters:**

`method` - The MethodNode to update.

`methodElement` - The ExecutableElement representing the method.


---

### getReturnTree

<span style="font-family: monospace; font-size: 80%;">public [ReturnTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ReturnTree.html) __getReturnTree__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)</span>

Finds the @return tag from a Javadoc DocCommentTree if present.

**Parameters:**

`dcTree` - The DocCommentTree to search.

**Returns:**

The ReturnTree if found, null otherwise.


---

### getReferences

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)> __getReferences__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree)</span>

Extracts a list of Reference objects representing occurrences of @see tags in the Javadoc comment.

**Parameters:**

`dcTree` - The DocCommentTree to process.

**Returns:**

A list of Reference objects extracted from @see tags.


---

### getUrl

<span style="font-family: monospace; font-size: 80%;">public [URI](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/net/URI.html) __getUrl__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) html)</span>

Extracts a URL string from html-like text, e.g., from an href attribute inside double-quotes.

**Parameters:**

`html` - The input HTML-like string.

**Returns:**

The extracted URL inside quotes or null if none found.


---

### getSince

<span style="font-family: monospace; font-size: 80%;">public [Text](../model/Text.md) __getSince__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)</span>

Extracts the @since tag content from a DocCommentTree, if present.

**Parameters:**

`element` - The element

**Returns:**

A Text object representing @since content or an empty Text if none present.


---

### getDeprecation

<span style="font-family: monospace; font-size: 80%;">public [DeprecatedTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DeprecatedTree.html) __getDeprecation__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) docComment)</span>

Finds the DeprecatedTree from a Javadoc DocCommentTree if present.

**Parameters:**

`docComment` - The Javadoc comment tree.

**Returns:**

The DeprecatedTree if found, null otherwise.


---

### getParamType

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getParamType__([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) method, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fieldName)</span>

Gets the parameter type as a TypeNode for the specified parameter name in the method.

**Parameters:**

`method` - The ExecutableElement representing the method.

`fieldName` - The parameter name.

**Returns:**

A TypeNode for the parameter's type, or null if not found.


---

### getParamTree

<span style="font-family: monospace; font-size: 80%;">public [ParamTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/ParamTree.html) __getParamTree__([DocCommentTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocCommentTree.html) dcTree, [VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) parameter)</span>

Finds the @param tag in a DocCommentTree matching the specified parameter variable.

**Parameters:**

`dcTree` - The DocCommentTree containing block tags.

`parameter` - The VariableElement parameter to match.

**Returns:**

The matching ParamTree if found, null otherwise.


---

### getEnclosingPackageElement

<span style="font-family: monospace; font-size: 80%;">private [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) __getEnclosingPackageElement__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)</span>

Recursively finds the enclosing PackageElement of a given element.

**Parameters:**

`element` - The language model element.

**Returns:**

The nearest enclosing PackageElement or null if none found.


---

### getEnclosingTypeElement

<span style="font-family: monospace; font-size: 80%;">public [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) __getEnclosingTypeElement__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element)</span>

Recursively finds the enclosing TypeElement (class, interface, enum, record, annotation) for the given element.

**Parameters:**

`element` - The language model element such as a field or method.

**Returns:**

The enclosing TypeElement or null if none found.


---

### getModuleInfoFile

<span style="font-family: monospace; font-size: 80%;">private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __getModuleInfoFile__([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) moduleElement)</span>

Retrieve the module-info.java file for the given ModuleElement if available.This helper inspects the JavaFileObject associated with the module and returns
a File when the file name ends with "module-info.java".

**Parameters:**

`moduleElement` - the ModuleElement to inspect

**Returns:**

a File pointing to the module-info.java source or null if none found


---

### setPackageSourcePath

<span style="font-family: monospace; font-size: 80%;">private void __setPackageSourcePath__([PackageNode](../model/PackageNode.md) pkg, [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee)</span>




---

### getPackageInfoFile

<span style="font-family: monospace; font-size: 80%;">private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) __getPackageInfoFile__([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) packageElement)</span>

Retrieves the `package-info.java` file associated with the specified
PackageElement.This method checks if the package element has an
associated file and returns it as a [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) object.

**Parameters:**

`packageElement` - the [PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) for which to retrieve the
                      associated `package-info.java` file

**Returns:**

a [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) object representing the `package-info.java`
        file if it exists; `null` if the file does not exist or is
        not associated with the given package element


---

### setDocumentation

<span style="font-family: monospace; font-size: 80%;">private void __setDocumentation__([Node](../model/Node.md) node, [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)</span>

Sets documentation text for a Node based on the doc comment tree attached to a language model element.This populates first sentence, body, and full body texts.

**Parameters:**

`node` - The Node to set documentation for.

`e` - The element whose doc comment is used.


---

### commentLocation

<span style="font-family: monospace; font-size: 80%;">[SourceCodeLocation](../model/SourceCodeLocation.md) __commentLocation__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element, [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)</span>




---

### createText

<span style="font-family: monospace; font-size: 80%;">private [Text](../model/Text.md) __createText__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html)> dtList)</span>

Creates a complete Text object by traversing a list of DocTree nodes from the Javadoc comment.

**Parameters:**

`element` - The program element this comment is associated with

`dtList` - List of DocTree nodes representing a part of a Javadoc comment.

**Returns:**

A Text object composed of segments derived from each DocTree node.


---

### here

<span style="font-family: monospace; font-size: 80%;">private [Reference](../model/Reference.md) __here__()</span>




---

### docTreeToText

<span style="font-family: monospace; font-size: 80%;">[Text](../model/Text.md) __docTreeToText__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) element, [DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree)</span>

Creates a [Text](../model/Text.md) object from a DocTree node, setting the appropriate kind and content.

**Parameters:**

`docTree` - The DocTree node to convert.

**Returns:**

A [Text](../model/Text.md) object representing the content and kind of the provided DocTree.


---

### markdownToText

<span style="font-family: monospace; font-size: 80%;">[Text](../model/Text.md) __markdownToText__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) markdown, [SourceCodeLocation](../model/SourceCodeLocation.md) sourceLocation)</span>

Converts Markdown text into a [Text](../model/Text.md) object

**Parameters:**

`markdown` - Markdown formatted text possibly containing links

**Returns:**

[Text](../model/Text.md) version of the Markdown


---

### handleBracketsTag

<span style="font-family: monospace; font-size: 80%;">private [Token](MarkdownParser.Token.md) __handleBracketsTag__([Token](MarkdownParser.Token.md) token, [Token](MarkdownParser.Token.md) next, [Text](../model/Text.md) text, [SourceCodeLocation](../model/SourceCodeLocation.md) sourceLoction)</span>




---

### getDocTreeText

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getDocTreeText__([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int start)</span>

Extracts text from a DocTree to build a string from a part of its tokenized representation.

**Parameters:**

`docTree` - The DocTree to extract from.

`start` - The starting index for extraction.

**Returns:**

A string representing the extracted part or empty string if extraction fails.


---

### getDocTreePart

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getDocTreePart__([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) docTree, int n)</span>

Extracts a specific part (token) from a DocTree's toString representation.

**Parameters:**

`docTree` - The DocTree to parse.

`n` - The zero-based index of the part to extract.

**Returns:**

The extracted string part or empty string if out of range.


---

### collectAllSupertypes

<span style="font-family: monospace; font-size: 80%;">public void __collectAllSupertypes__([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) t, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[VariableType](../model/VariableType.md)> result)</span>

Collects all supertypes (classes) of the specified type recursively and adds them to the result list.java.lang.Object is excluded.

**Parameters:**

`t` - The type to examine.

`result` - The list to receive supertypes.


---

### isInterface

<span style="font-family: monospace; font-size: 80%;">public boolean __isInterface__([TypeMirror](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/type/TypeMirror.html) typeMirror)</span>

Returns true if the TypeMirror represents an interface.

**Parameters:**

`typeMirror` - The TypeMirror to check.

**Returns:**

true if the type is an interface, false otherwise.


---

### findImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">public void __findImplementedInterfaces__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) typeElement, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[VariableType](../model/VariableType.md)> result)</span>

Finds all interfaces implemented directly by the given TypeElement and adds their names to the result list.

**Parameters:**

`typeElement` - The type to examine.

`result` - The list to receive the qualified interface names.


---

### createDirectiveNode

<span style="font-family: monospace; font-size: 80%;">public [DirectiveNode](../model/DirectiveNode.md) __createDirectiveNode__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)</span>

Creates a [DirectiveNode](../model/DirectiveNode.md) to encapsulate the information provided
by a module directive element.

**Parameters:**

`directive` - a scanned module directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createRequiresDirective

<span style="font-family: monospace; font-size: 80%;">public [DirectiveNode](../model/DirectiveNode.md) __createRequiresDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)</span>

Creates a DirectiveNode representing a [RequiresDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RequiresDirective.html) directive.

**Parameters:**

`directive` - a scanned [RequiresDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RequiresDirective.html) element.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createExportsDirective

<span style="font-family: monospace; font-size: 80%;">public [DirectiveNode](../model/DirectiveNode.md) __createExportsDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)</span>

Creates a DirectiveNode representing an [ExportsDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExportsDirective.html) directive.

**Parameters:**

`directive` - a scanned [ExportsDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExportsDirective.html) element.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createOpensDirective

<span style="font-family: monospace; font-size: 80%;">public [DirectiveNode](../model/DirectiveNode.md) __createOpensDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)</span>

Creates a DirectiveNode representing an [OpensDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/OpensDirective.html) directive.

**Parameters:**

`directive` - a scanned [OpensDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/OpensDirective.html) element.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createUsesDirective

<span style="font-family: monospace; font-size: 80%;">public [DirectiveNode](../model/DirectiveNode.md) __createUsesDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)</span>

Creates a DirectiveNode representing a [UsesDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/UsesDirective.html) directive.

**Parameters:**

`directive` - a scanned [UsesDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/UsesDirective.html) element.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createProvidesDirective

<span style="font-family: monospace; font-size: 80%;">public [DirectiveNode](../model/DirectiveNode.md) __createProvidesDirective__([Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Directive.html) directive)</span>

Creates a DirectiveNode representing a [ProvidesDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ProvidesDirective.html) directive.

**Parameters:**

`directive` - a scanned [ProvidesDirective](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ProvidesDirective.html) element.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### setImplementations

<span style="font-family: monospace; font-size: 80%;">public void __setImplementations__([DirectiveNode](../model/DirectiveNode.md) directiveNode, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<? extends [TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html)> implementations)</span>

Adds implementation type names to a DirectiveNode.

**Parameters:**

`directiveNode` - The DirectiveNode to update.

`implementations` - List of TypeElements representing implementations.


---

### removeParentheses

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __removeParentheses__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) expression)</span>

Removes parentheses and what they contain from an expression

**Parameters:**

`expression` - An expression such as `classname.method(parameter)`.

**Returns:**

The expression with the parentheses removed


---

