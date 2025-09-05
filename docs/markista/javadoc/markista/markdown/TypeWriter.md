Package [io.github.sandydunlop.markista.markdown](index.md)

# Class TypeWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.TypeWriter<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __TypeWriter__</span>

A class that outputs API type documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                             | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [BR](#br)                                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [NBSP](#nbsp)                                     |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_CLASS](#text_class)                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description)             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_MODIFIER_AND_TYPE](#text_modifier_and_type) |                                                                                                                                                                                       |
| private [](../core/Context.md)                                                                                    | [ctx](#ctx)                                       | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                                 | The Writer used to output the generated markdown content for the current document.                                                                                                    |



## Constructor Summary

| Constructor                                | Description                                                              |
|--------------------------------------------|--------------------------------------------------------------------------|
| TypeWriter([](../core/Context.md) context) | Constructor that sets up the locations API documents will be written to. |



## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                                                  | Description                                                     |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| public void                                                                                          | [outputTypeDoc](#outputtypedoc)([](../model/TypeNode.md) typeNode)                                                                                                                      | Writes a Markdown file for the Javadoc of a type                |
| private void                                                                                         | [outputSupertypes](#outputsupertypes)([](../model/TypeNode.md) typeNode)                                                                                                                | Outputs the hierarchy of supertypes of a class                  |
| private void                                                                                         | [outputImplementedInterfaces](#outputimplementedinterfaces)([](../model/TypeNode.md) typeNode)                                                                                          | Outputs details of any interfaces that this class implements    |
| private void                                                                                         | [outputEnclosingClass](#outputenclosingclass)([](../model/TypeNode.md) typeNode)                                                                                                        | Outputs details of the class that encloses this one             |
| private void                                                                                         | [outputAllKnownImplementingClasses](#outputallknownimplementingclasses)([](../model/TypeNode.md) typeNode)                                                                              |                                                                 |
| private void                                                                                         | [outputDirectKnownSubtypes](#outputdirectknownsubtypes)([](../model/TypeNode.md) typeNode)                                                                                              |                                                                 |
| private void                                                                                         | [outputDeclaration](#outputdeclaration)([](../model/TypeNode.md) typeNode)                                                                                                              | Outputs the type declaration                                    |
| private void                                                                                         | [outputMethodOrFieldDeclaration](#outputmethodorfielddeclaration)([](../model/AbstractMember.md) member)                                                                                | Outputs the type declaration                                    |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [createAnnotationString](#createannotationstring)([](../model/AppliedAnnotationNode.md) annotation)                                                                                     | Creates a string of the elements within an annotation           |
| private void                                                                                         | [outputNestedClassSummary](#outputnestedclasssummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/TypeNode.md)> nestedClasses) | Outputs a summary of nested classes within this one as Markdown |
| private void                                                                                         | [outputEnumConstantsSummary](#outputenumconstantssummary)([](../model/EnumNode.md) enumNode)                                                                                            | Outputs as summary of an enum's constants as Markdown           |
| private void                                                                                         | [outputFieldSummary](#outputfieldsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/FieldNode.md)> fields)                   | Outputs a summary of this class's fields as Markdown            |
| private void                                                                                         | [outputConstructorSummary](#outputconstructorsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/MethodNode.md)> methods)     | Outputs a the summary of this class's constructors as Markdown  |
| private void                                                                                         | [outputMethodSummary](#outputmethodsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/MethodNode.md)> methods)               | Writes the markdown for a class's method summary table          |
| private void                                                                                         | [outputEnumConstantDetails](#outputenumconstantdetails)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/FieldNode.md)> constants)  | Outputs enum constant details as Markdown                       |
| private void                                                                                         | [outputDetails](#outputdetails)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/Node.md)> nodes)                                   | Writes the markdown for a class's method or field details.      |
| private void                                                                                         | [outputReferences](#outputreferences)([](../model/Node.md) node)                                                                                                                        | Outputs references for a type member                            |
| private void                                                                                         | [outputMethodDetails](#outputmethoddetails)([](../model/MethodNode.md) method)                                                                                                          | Outputs the Javadoc of a method as Markdown                     |
| private void                                                                                         | [outputMethodParams](#outputmethodparams)([](../model/MethodNode.md) method)                                                                                                            | Outputs the parameters of a method as Markdown                  |
| private void                                                                                         | [outputDeprecation](#outputdeprecation)([](../model/Deprecation.md) status, [](../model/Text.md) text)                                                                                  | Outputs the deprecation status of this type as Markdown         |
| private void                                                                                         | [outputInheritedMethods](#outputinheritedmethods)([](../model/TypeNode.md) typeNode)                                                                                                    |                                                                 |



## Field Details

### BR

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __BR__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### NBSP

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __NBSP__</span>




---

### TEXT_CLASS

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TEXT_CLASS__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TEXT_DESCRIPTION

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TEXT_DESCRIPTION__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TEXT_MODIFIER_AND_TYPE

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TEXT_MODIFIER_AND_TYPE__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### ctx

<span style="font-family: monospace; font-size: 80%;">private [](../core/Context.md) __ctx__</span>

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.
> **Warning**<br/>
Do not make this `final`. It will break tests with mocked [](../core/Context.md).


---

### writer

<span style="font-family: monospace; font-size: 80%;">private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __writer__</span>

The Writer used to output the generated markdown content for the current document.
It handles writing text to the appropriate output file or stream.


---


## Method Details

### outputTypeDoc

<span style="font-family: monospace; font-size: 80%;">public void __outputTypeDoc__([](../model/TypeNode.md) typeNode)</span>

Writes a Markdown file for the Javadoc of a type

**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputSupertypes

<span style="font-family: monospace; font-size: 80%;">private void __outputSupertypes__([](../model/TypeNode.md) typeNode)</span>

Outputs the hierarchy of supertypes of a class

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">private void __outputImplementedInterfaces__([](../model/TypeNode.md) typeNode)</span>

Outputs details of any interfaces that this class implements

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnclosingClass

<span style="font-family: monospace; font-size: 80%;">private void __outputEnclosingClass__([](../model/TypeNode.md) typeNode)</span>

Outputs details of the class that encloses this one

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputAllKnownImplementingClasses

<span style="font-family: monospace; font-size: 80%;">private void __outputAllKnownImplementingClasses__([](../model/TypeNode.md) typeNode)</span>



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDirectKnownSubtypes

<span style="font-family: monospace; font-size: 80%;">private void __outputDirectKnownSubtypes__([](../model/TypeNode.md) typeNode)</span>



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDeclaration

<span style="font-family: monospace; font-size: 80%;">private void __outputDeclaration__([](../model/TypeNode.md) typeNode)</span>

Outputs the type declaration

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodOrFieldDeclaration

<span style="font-family: monospace; font-size: 80%;">private void __outputMethodOrFieldDeclaration__([](../model/AbstractMember.md) member)</span>

Outputs the type declaration

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createAnnotationString

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __createAnnotationString__([](../model/AppliedAnnotationNode.md) annotation)</span>

Creates a string of the elements within an annotation

**Returns:**

The string


---

### outputNestedClassSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputNestedClassSummary__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/TypeNode.md)> nestedClasses)</span>

Outputs a summary of nested classes within this one as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnumConstantsSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputEnumConstantsSummary__([](../model/EnumNode.md) enumNode)</span>

Outputs as summary of an enum's constants as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputFieldSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputFieldSummary__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/FieldNode.md)> fields)</span>

Outputs a summary of this class's fields as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputConstructorSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputConstructorSummary__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/MethodNode.md)> methods)</span>

Outputs a the summary of this class's constructors as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputMethodSummary__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/MethodNode.md)> methods)</span>

Writes the markdown for a class's method summary table

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnumConstantDetails

<span style="font-family: monospace; font-size: 80%;">private void __outputEnumConstantDetails__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/FieldNode.md)> constants)</span>

Outputs enum constant details as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDetails

<span style="font-family: monospace; font-size: 80%;">private void __outputDetails__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[](../model/Node.md)> nodes)</span>

Writes the markdown for a class's method or field details.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

**Since:**

0.1.0

**See Also:**


[](http://example.com)


[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)



---

### outputReferences

<span style="font-family: monospace; font-size: 80%;">private void __outputReferences__([](../model/Node.md) node)</span>

Outputs references for a type member

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodDetails

<span style="font-family: monospace; font-size: 80%;">private void __outputMethodDetails__([](../model/MethodNode.md) method)</span>

Outputs the Javadoc of a method as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodParams

<span style="font-family: monospace; font-size: 80%;">private void __outputMethodParams__([](../model/MethodNode.md) method)</span>

Outputs the parameters of a method as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDeprecation

<span style="font-family: monospace; font-size: 80%;">private void __outputDeprecation__([](../model/Deprecation.md) status, [](../model/Text.md) text)</span>

Outputs the deprecation status of this type as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputInheritedMethods

<span style="font-family: monospace; font-size: 80%;">private void __outputInheritedMethods__([](../model/TypeNode.md) typeNode)</span>



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

