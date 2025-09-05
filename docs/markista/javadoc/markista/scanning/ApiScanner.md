Package [io.github.sandydunlop.markista.scanning](index.md)

# Class ApiScanner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [javax.lang.model.util.AbstractElementVisitor6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/AbstractElementVisitor6.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                        [javax.lang.model.util.ElementScanner7](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner7.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                                [javax.lang.model.util.ElementScanner8](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner8.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                                        [javax.lang.model.util.ElementScanner9](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                                                io.github.sandydunlop.markista.scanning.ApiScanner<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __ApiScanner__<br/>extends [ElementScanner9](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>
</span>

A scanner that walks the language model elements provided by the Javadoc doclet
environment and builds an Api model representing the discovered modules, packages,
types, and members. The scanner delegates most element-to-model conversion logic
to TypeUtils, and it records a set of included element names so filtering can be
applied when only a subset of elements should be documented.

This class extends ElementScanner9 so it can visit elements in source order and
recursively walk nested elements. The scanner keeps track of the current ModuleNode
being populated and updates the Api instance as elements are encountered.


## Field Summary

| Modifier and Type                                                                                                                                                                            | Field                           | Description                                                                          |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|--------------------------------------------------------------------------------------|
| [](../model/Api.md)                                                                                                                                                                          | [api](#api)                     | The Api model being populated by this scanner.                                       |
| private final [](../core/Context.md)                                                                                                                                                         | [ctx](#ctx)                     | The shared Context singleton providing logging and configuration access.             |
| private [](../model/ModuleNode.md)                                                                                                                                                           | [currentModule](#currentmodule) | The module node currently being populated during a scan.                             |
| [HashSet](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashSet.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [includedNames](#includednames) | A set of fully-qualified names (packages and types) included in the scan invocation. |
| private [](../modelling/ElementModeller.md)                                                                                                                                                  | [modeller](#modeller)           |                                                                                      |
| private final [](../model/ModuleNode.md)                                                                                                                                                     | [unnamedModule](#unnamedmodule) | The unnamed module node reprsenting package elements not in an explicit module.      |



## Constructor Summary

| Constructor                                                                                                                                           | Description                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| ApiScanner([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment) | Initializes the ApiScanner with access to the doclet environment. |



## Method Summary

| Modifier and Type                                                                               | Method                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public [](../model/Api.md)                                                                      | [scan](#scan)([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)> elements)                                                            | Scan the given set of top-level elements and return the built Api model.                                                                                                                                                                     |
| private void                                                                                    | [processIncludedElements](#processincludedelements)([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)> elements)                      | Populate the includedNames set from the provided element set.                                                                                                                                                                                |
| boolean                                                                                         | [isIncludedElement](#isincludedelement)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                                                                                                                                                    | Check whether an element with the given qualifiedName was explicitly included in the Javadoc invocation (via the elements set passed to the doclet).                                                                                         |
| boolean                                                                                         | [isIncludedElement](#isincludedelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                           | Determine whether an Element should be treated as included by looking up the enclosing type name and checking the includedNames set.                                                                                                         |
| void                                                                                            | [calculateUnnamedModuleSourcePath](#calculateunnamedmodulesourcepath)()                                                                                                                                                                                                                                | Derive an appropriate source root for the unnamed module by inspecting the source path of the first package contained in the unnamed module.                                                                                                 |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [scan](#scan)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                               |                                                                                                                                                                                                                                              |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitModule](#visitmodule)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                     | Visit a module element and create or reuse a ModuleNode for it.                                                                                                                                                                              |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitPackage](#visitpackage)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                | Visit a package element and, if it was included, create a PackageNode and attach it to the current module and to the Api model.                                                                                                              |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitType](#visittype)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                             | Visit a type element (class/interface/enum/annotation) and create a TypeNode representation if the type is included and TypeUtils considers it part of the API.                                                                              |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitExecutable](#visitexecutable)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                    | Visit an executable element (method or constructor), convert it to a MethodNode if included, and populate Javadoc-derived fields such as first sentence, body, return description, references and since information using TypeUtils helpers. |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitVariable](#visitvariable)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) ve, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                            | Visit a variable element and, if it is a field included in the API, convert it to a FieldNode, record any constant value, and populate documentation and modifiers.                                                                          |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitTypeParameter](#visittypeparameter)([TypeParameterElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeParameterElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)         | Visit a type parameter.                                                                                                                                                                                                                      |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitRecordComponent](#visitrecordcomponent)([RecordComponentElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RecordComponentElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth) | Visit a record component.                                                                                                                                                                                                                    |
| public void                                                                                     | [addConstantFieldValuesReference](#addconstantfieldvaluesreference)([](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                             | Adds references to constant field values from classes in the API to the provided module node.                                                                                                                                                |
| public void                                                                                     | [markCustomAnnotations](#markcustomannotations)()                                                                                                                                                                                                                                                      | Iterates over all annotations in the API, identifying ones that are custom and those that have the `@Documented` meta-annotation and marking them as such.                                                                                   |
| public boolean                                                                                  | [isIncludedInApi](#isincludedinapi)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                               | Returns true if the element should be included in the public API documentation based on its modifiers and configuration.                                                                                                                     |



## Field Details

### api

<span style="font-family: monospace; font-size: 80%;">[](../model/Api.md) __api__</span>

The Api model being populated by this scanner.


---

### ctx

<span style="font-family: monospace; font-size: 80%;">private final [](../core/Context.md) __ctx__</span>

The shared Context singleton providing logging and configuration access.


---

### currentModule

<span style="font-family: monospace; font-size: 80%;">private [](../model/ModuleNode.md) __currentModule__</span>

The module node currently being populated during a scan. private ModuleNode currentModule;


---

### includedNames

<span style="font-family: monospace; font-size: 80%;">[HashSet](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashSet.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __includedNames__</span>

A set of fully-qualified names (packages and types) included in the scan invocation.


---

### modeller

<span style="font-family: monospace; font-size: 80%;">private [](../modelling/ElementModeller.md) __modeller__</span>




---

### unnamedModule

<span style="font-family: monospace; font-size: 80%;">private final [](../model/ModuleNode.md) __unnamedModule__</span>

The unnamed module node reprsenting package elements not in an explicit module.


---


## Method Details

### scan

<span style="font-family: monospace; font-size: 80%;">public [](../model/Api.md) __scan__([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)> elements)</span>

Scan the given set of top-level elements and return the built Api model.
This method performs setup actions (register included elements, initialize
TypeUtils with the Api and environment), executes the scan, performs some
post-processing (constant value reference collection, annotation marking),
computes the unnamed module source path and sorts the final Api model.

**Returns:**

the fully-populated Api model


---

### processIncludedElements

<span style="font-family: monospace; font-size: 80%;">private void __processIncludedElements__([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)> elements)</span>

Populate the includedNames set from the provided element set.
Only package and type elements contribute names. The set is used by
isIncludedElement to quickly decide if an element should be processed.


---

### isIncludedElement

<span style="font-family: monospace; font-size: 80%;">boolean __isIncludedElement__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)</span>

Check whether an element with the given qualifiedName was explicitly included
in the Javadoc invocation (via the elements set passed to the doclet).

**Returns:**

true if the qualifiedName is present in the includedNames set


---

### isIncludedElement

<span style="font-family: monospace; font-size: 80%;">boolean __isIncludedElement__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)</span>

Determine whether an Element should be treated as included by looking up
the enclosing type name and checking the includedNames set.
This overload is used for members whose direct qualified name is not directly
present in includedNames but whose enclosing type may have been included.

**Returns:**

true if the element's enclosing type was included in the elements set


---

### calculateUnnamedModuleSourcePath

<span style="font-family: monospace; font-size: 80%;">void __calculateUnnamedModuleSourcePath__()</span>

Derive an appropriate source root for the unnamed module by inspecting the
source path of the first package contained in the unnamed module. If the
unnamed module contains no packages this is a no-op.


---

### scan

<span style="font-family: monospace; font-size: 80%;">public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) __scan__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)</span>



**Overrides:**

[ElementScanner9.scan](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#scan)


---

### visitModule

<span style="font-family: monospace; font-size: 80%;">public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) __visitModule__([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)</span>

Visit a module element and create or reuse a ModuleNode for it.
The module's module-info.java presence and source path are discovered,
directives are added, and the module is registered with the Api model.

**Overrides:**

[ElementScanner9.visitModule](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#visitModule)


---

### visitPackage

<span style="font-family: monospace; font-size: 80%;">public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) __visitPackage__([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)</span>

Visit a package element and, if it was included, create a PackageNode and
attach it to the current module and to the Api model. Package source path
and documentation are configured via TypeUtils helpers.

**Overrides:**

[ElementScanner9.visitPackage](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#visitPackage)


---

### visitType

<span style="font-family: monospace; font-size: 80%;">public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) __visitType__([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)</span>

Visit a type element (class/interface/enum/annotation) and create a TypeNode
representation if the type is included and TypeUtils considers it part of the API.
This also records the source file path when available.

**Overrides:**

[ElementScanner9.visitType](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#visitType)


---

### visitExecutable

<span style="font-family: monospace; font-size: 80%;">public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) __visitExecutable__([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)</span>

Visit an executable element (method or constructor), convert it to a MethodNode
if included, and populate Javadoc-derived fields such as first sentence, body,
return description, references and since information using TypeUtils helpers.

**Overrides:**

[ElementScanner9.visitExecutable](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#visitExecutable)


---

### visitVariable

<span style="font-family: monospace; font-size: 80%;">public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) __visitVariable__([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) ve, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)</span>

Visit a variable element and, if it is a field included in the API, convert it
to a FieldNode, record any constant value, and populate documentation and modifiers.

**Overrides:**

[ElementScanner9.visitVariable](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#visitVariable)


---

### visitTypeParameter

<span style="font-family: monospace; font-size: 80%;">public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) __visitTypeParameter__([TypeParameterElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeParameterElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)</span>

Visit a type parameter. This method delegates to scanning of enclosed elements
so that bounds and other nested elements are visited.

**Overrides:**

[ElementScanner9.visitTypeParameter](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#visitTypeParameter)


---

### visitRecordComponent

<span style="font-family: monospace; font-size: 80%;">public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) __visitRecordComponent__([RecordComponentElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RecordComponentElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)</span>

Visit a record component.

**Overrides:**

[ElementScanner9.visitRecordComponent](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html#visitRecordComponent)


---

### addConstantFieldValuesReference

<span style="font-family: monospace; font-size: 80%;">public void __addConstantFieldValuesReference__([](../model/ModuleNode.md) moduleNode)</span>

Adds references to constant field values from classes in the API to the provided module node.


---

### markCustomAnnotations

<span style="font-family: monospace; font-size: 80%;">public void __markCustomAnnotations__()</span>

Iterates over all annotations in the API, identifying ones that are custom and
those that have the `@Documented` meta-annotation and marking them as such.


---

### isIncludedInApi

<span style="font-family: monospace; font-size: 80%;">public boolean __isIncludedInApi__([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)</span>

Returns true if the element should be included in the public API documentation based on its modifiers and configuration.

**Returns:**

true if element is public or protected or private member documentation is configured; false otherwise.


---

