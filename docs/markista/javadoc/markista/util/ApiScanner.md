Package [io.github.sandydunlop.markista.util](index.md)

# Class ApiScanner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [javax.lang.model.util.AbstractElementVisitor6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/AbstractElementVisitor6.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                        [javax.lang.model.util.ElementScanner7](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner7.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                                [javax.lang.model.util.ElementScanner8](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner8.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                                        [javax.lang.model.util.ElementScanner9](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html)<[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)><br/>
                                                io.github.sandydunlop.markista.util.ApiScanner<br/>
<br/>

----

<span style="font-family: monospace;">public class __ApiScanner__</span>

A scanner that walks the language model elements provided by the Javadoc doclet 
environment and builds an Api model representing the discovered modules, packages,
types, and members. The scanner delegates most element-to-model conversion logic
to TypeUtils, and it records a set of included element names so filtering can be
applied when only a subset of elements should be documented.

This class extends ElementScanner9 so it can visit elements in source order and
recursively walk nested elements. The scanner keeps track of the current ModuleNode
being populated and updates the Api instance as elements are encountered.


## Constructor Summary

| Constructor              | Description                                                       |
|--------------------------|-------------------------------------------------------------------|
| ApiScanner( environment) | Initializes the ApiScanner with access to the doclet environment. |

## Method Summary

| Modifier and Type                                                                               | Method                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public [Api](../model/Api.md)                                                                   | [scan](#scan)([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)> elements)                                                            | Scan the given set of top-level elements and return the built Api model.                                                                                                                                                                     |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [scan](#scan)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                               |                                                                                                                                                                                                                                              |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitModule](#visitmodule)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                     | Visit a module element and create or reuse a ModuleNode for it.                                                                                                                                                                              |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitPackage](#visitpackage)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                | Visit a package element and, if it was included, create a PackageNode and attach it to the current module and to the Api model.                                                                                                              |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitType](#visittype)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                             | Visit a type element (class/interface/enum/annotation) and create a TypeNode representation if the type is included and TypeUtils considers it part of the API.                                                                              |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitExecutable](#visitexecutable)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                    | Visit an executable element (method or constructor), convert it to a MethodNode if included, and populate Javadoc-derived fields such as first sentence, body, return description, references and since information using TypeUtils helpers. |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitVariable](#visitvariable)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) ve, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                            | Visit a variable element and, if it is a field included in the API, convert it to a FieldNode, record any constant value, and populate documentation and modifiers.                                                                          |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitTypeParameter](#visittypeparameter)([TypeParameterElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeParameterElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)         | Visit a type parameter.                                                                                                                                                                                                                      |
| public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitRecordComponent](#visitrecordcomponent)([RecordComponentElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RecordComponentElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth) | Visit a record component.                                                                                                                                                                                                                    |
| public [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)   | [getModuleInfoFile](#getmoduleinfofile)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) moduleElement)                                                                                                                   | Retrieve the module-info.java file for the given ModuleElement if available.                                                                                                                                                                 |

## Method Details

### scan

public [Api](../model/Api.md) scan([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)> elements)

Scan the given set of top-level elements and return the built Api model.
This method performs setup actions (register included elements, initialize
TypeUtils with the Api and environment), executes the scan, performs some
post-processing (constant value reference collection, annotation marking),
computes the unnamed module source path and sorts the final Api model.

**Returns:**

the fully-populated Api model


---

### scan

public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) scan([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>.scan


---

### visitModule

public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitModule([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)

Visit a module element and create or reuse a ModuleNode for it.
The module's module-info.java presence and source path are discovered,
directives are added, and the module is registered with the Api model.

**Overrides:**

[ElementScanner9](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>.visitModule


---

### visitPackage

public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitPackage([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)

Visit a package element and, if it was included, create a PackageNode and
attach it to the current module and to the Api model. Package source path
and documentation are configured via TypeUtils helpers.

**Overrides:**

[ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>.visitPackage


---

### visitType

public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitType([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)

Visit a type element (class/interface/enum/annotation) and create a TypeNode
representation if the type is included and TypeUtils considers it part of the API.
This also records the source file path when available.

**Overrides:**

[ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>.visitType


---

### visitExecutable

public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitExecutable([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)

Visit an executable element (method or constructor), convert it to a MethodNode
if included, and populate Javadoc-derived fields such as first sentence, body,
return description, references and since information using TypeUtils helpers.

**Overrides:**

[ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>.visitExecutable


---

### visitVariable

public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitVariable([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) ve, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)

Visit a variable element and, if it is a field included in the API, convert it
to a FieldNode, record any constant value, and populate documentation and modifiers.

**Overrides:**

[ElementScanner7](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner7.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>.visitVariable


---

### visitTypeParameter

public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitTypeParameter([TypeParameterElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeParameterElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)

Visit a type parameter. This method delegates to scanning of enclosed elements
so that bounds and other nested elements are visited.

**Overrides:**

[ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>.visitTypeParameter


---

### visitRecordComponent

public [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitRecordComponent([RecordComponentElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RecordComponentElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)

Visit a record component. For record components, use the unknown element
visit which preserves default behavior if no special handling is required.

**Overrides:**

[ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)<[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)>.visitRecordComponent


---

### getModuleInfoFile

public [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) getModuleInfoFile([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) moduleElement)

Retrieve the module-info.java file for the given ModuleElement if available.
This helper inspects the JavaFileObject associated with the module and returns
a File when the file name ends with "module-info.java".

**Returns:**

a File pointing to the module-info.java source or null if none found


---

