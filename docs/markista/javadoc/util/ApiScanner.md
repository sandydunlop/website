Package [io.github.sandydunlop.markista.util](index.md)

# Class ApiScanner
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [javax.lang.model.util.AbstractElementVisitor6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/AbstractElementVisitor6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;<br/>
                [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;<br/>
                        [javax.lang.model.util.ElementScanner7](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner7.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;<br/>
                                [javax.lang.model.util.ElementScanner8](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner8.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;<br/>
                                        [javax.lang.model.util.ElementScanner9](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;<br/>
                                                io.github.sandydunlop.markista.util.ApiScanner<br/>
<br/>

----

A class that scans code and generates an API tree representing code and Javadoc comments.


## Field Summary

| Modifier and Type                                                                                                                                                                                          | Field                           | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|-------------|
| private [Context](Context.md)                                                                                                                                                                              | [ctx](#ctx)                     |             |
| [Api](../model/Api.md)                                                                                                                                                                                     | [api](#api)                     |             |
| private [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html)                                                                      | [environment](#environment)     |             |
| private [ModuleNode](../model/ModuleNode.md)                                                                                                                                                               | [unnamedModule](#unnamedmodule) |             |
| private [ModuleNode](../model/ModuleNode.md)                                                                                                                                                               | [currentModule](#currentmodule) |             |
| private [HashSet](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashSet.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [includedNames](#includednames) |             |

## Constructor Summary

| Constructor                                                                                                                                           | Description                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| ApiScanner([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment) | Initializes the ApiScanner with access to the doclet environment. |

## Method Summary

| Modifier and Type                                                                        | Method                                                                                                                                                                                                                                                                                                 | Description                                         |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [Api](../model/Api.md)                                                                   | [scan](#scan)([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)&gt; elements)                                                      | The starting point for a scan of the API structure. |
| private void                                                                             | [processIncludedElements](#processincludedelements)([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)&gt; elements)                |                                                     |
| private boolean                                                                          | [isIncludedElement](#isincludedelement)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)                                                                                                                                                    |                                                     |
| private boolean                                                                          | [isIncludedElement](#isincludedelement)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)                                                                                                                                           |                                                     |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [scan](#scan)([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                                               |                                                     |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitModule](#visitmodule)([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                     |                                                     |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitPackage](#visitpackage)([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                |                                                     |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitType](#visittype)([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                                             |                                                     |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitExecutable](#visitexecutable)([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                    |                                                     |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitVariable](#visitvariable)([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) ve, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)                            |                                                     |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitTypeParameter](#visittypeparameter)([TypeParameterElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeParameterElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)         |                                                     |
| [Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) | [visitRecordComponent](#visitrecordcomponent)([RecordComponentElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RecordComponentElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth) |                                                     |

## Field Details

### ctx




---

### api




---

### environment




---

### unnamedModule




---

### currentModule




---

### includedNames




---


## Method Details

### scan

[Api](../model/Api.md) scan([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)&gt; elements)

The starting point for a scan of the API structure. This method sets up
the environment and begins the scan of the API.

**Parameters:**

`elements` - a list of language model elements

**Returns:**

An [Api](../model/Api.md) object representing the entire model of the API that's being documented


---

### processIncludedElements

private void processIncludedElements([Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html)&gt; elements)




---

### isIncludedElement

private boolean isIncludedElement([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) qualifiedName)




---

### isIncludedElement

private boolean isIncludedElement([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e)




---

### scan

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) scan([Element](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/Element.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt; from [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;


---

### visitModule

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitModule([ModuleElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[javax.lang.model.util.ElementScanner9](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt; from [javax.lang.model.util.ElementScanner9](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner9.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;


---

### visitPackage

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitPackage([PackageElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/PackageElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt; from [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;


---

### visitType

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitType([TypeElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt; from [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;


---

### visitExecutable

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitExecutable([ExecutableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExecutableElement.html) ee, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt; from [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;


---

### visitVariable

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitVariable([VariableElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/VariableElement.html) ve, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[javax.lang.model.util.ElementScanner7](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner7.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt; from [javax.lang.model.util.ElementScanner7](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner7.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;


---

### visitTypeParameter

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitTypeParameter([TypeParameterElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/TypeParameterElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt; from [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;


---

### visitRecordComponent

[Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html) visitRecordComponent([RecordComponentElement](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/RecordComponentElement.html) e, [Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html) depth)



**Overrides:**

[javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt; from [javax.lang.model.util.ElementScanner6](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/ElementScanner6.html)&lt;[java.lang.Void](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Void.html), [java.lang.Integer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Integer.html)&gt;


---

