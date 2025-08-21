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
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_CLASS](#text_class)                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description)             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_MODIFIER_AND_TYPE](#text_modifier_and_type) |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [BR](#br)                                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [NBSP](#nbsp)                                     |                                                                                                                                                                                       |
| private [Context](../core/Context.md)                                                                             | [ctx](#ctx)                                       | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                                 | The Writer used to output the generated markdown content for the current document.                                                                                                    |

## Constructor Summary

| Constructor                                       | Description                                                              |
|---------------------------------------------------|--------------------------------------------------------------------------|
| TypeWriter([Context](../core/Context.md) context) | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                                                          | Description                                                     |
|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| public void                                                                                          | [outputTypeDoc](#outputtypedoc)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                      | Writes a Markdown file for the Javadoc of a type                |
| private void                                                                                         | [outputSupertypes](#outputsupertypes)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                | Outputs the hierarchy of supertypes of a class                  |
| private void                                                                                         | [outputImplementedInterfaces](#outputimplementedinterfaces)([TypeNode](../model/TypeNode.md) typeNode)                                                                                          | Outputs details of any interfaces that this class implements    |
| private void                                                                                         | [outputEnclosingClass](#outputenclosingclass)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                        | Outputs details of the class that encloses this one             |
| private void                                                                                         | [outputDeclaration](#outputdeclaration)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                              | Outputs the type declaration                                    |
| private void                                                                                         | [outputMethodOrFieldDeclaration](#outputmethodorfielddeclaration)([AbstractMember](../model/AbstractMember.md) member)                                                                          | Outputs the type declaration                                    |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [createAnnotationString](#createannotationstring)([AppliedAnnotationNode](../model/AppliedAnnotationNode.md) annotation)                                                                        | Creates a string of the elements within an annotation           |
| private void                                                                                         | [outputNestedClassSummary](#outputnestedclasssummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](../model/TypeView.md)> nestedClasses) | Outputs a summary of nested classes within this one as Markdown |
| private void                                                                                         | [outputEnumConstantsSummary](#outputenumconstantssummary)([EnumTypeNode](../model/EnumTypeNode.md) enumNode)                                                                                    | Outputs as summary of an enum's constants as Markdown           |
| private void                                                                                         | [outputFieldSummary](#outputfieldsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](../model/FieldNode.md)> fields)                  | Outputs a summary of this class's fields as Markdown            |
| private void                                                                                         | [outputConstructorSummary](#outputconstructorsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](../model/MethodNode.md)> methods)   | Outputs a the summary of this class's constructors as Markdown  |
| private void                                                                                         | [outputMethodSummary](#outputmethodsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[MethodNode](../model/MethodNode.md)> methods)             | Writes the markdown for a class's method summary table          |
| private void                                                                                         | [outputEnumConstantDetails](#outputenumconstantdetails)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[FieldNode](../model/FieldNode.md)> constants) | Outputs enum constant details as Markdown                       |
| private void                                                                                         | [outputDetails](#outputdetails)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Node](../model/Node.md)> nodes)                                       | Writes the markdown for a class's method or field details.      |
| private void                                                                                         | [outputReferences](#outputreferences)([Node](../model/Node.md) node)                                                                                                                            | Outputs references for a type member                            |
| private void                                                                                         | [outputMethodDetails](#outputmethoddetails)([MethodNode](../model/MethodNode.md) method)                                                                                                        | Outputs the Javadoc of a method as Markdown                     |
| private void                                                                                         | [outputMethodParams](#outputmethodparams)([MethodNode](../model/MethodNode.md) method)                                                                                                          | Outputs the parameters of a method as Markdown                  |
| private void                                                                                         | [outputDeprecation](#outputdeprecation)([Deprecation](../model/Deprecation.md) status, [Text](../model/Text.md) text)                                                                           | Outputs the deprecation status of this type as Markdown         |

## Field Details

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

### BR

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __BR__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### NBSP

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __NBSP__</span>




---

### ctx

<span style="font-family: monospace; font-size: 80%;">private [Context](../core/Context.md) __ctx__</span>

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.
> **Warning**<br/>
Do not make this `final`. It will break tests with mocked [Context](../core/Context.md).


---

### writer

<span style="font-family: monospace; font-size: 80%;">private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __writer__</span>

The Writer used to output the generated markdown content for the current document.
It handles writing text to the appropriate output file or stream.


---


## Method Details

### outputTypeDoc

<span style="font-family: monospace; font-size: 80%;">public void __outputTypeDoc__</span>

Writes a Markdown file for the Javadoc of a type

**Throws:**

[java.nio.file.InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputSupertypes

<span style="font-family: monospace; font-size: 80%;">private void __outputSupertypes__</span>

Outputs the hierarchy of supertypes of a class

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputImplementedInterfaces

<span style="font-family: monospace; font-size: 80%;">private void __outputImplementedInterfaces__</span>

Outputs details of any interfaces that this class implements

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnclosingClass

<span style="font-family: monospace; font-size: 80%;">private void __outputEnclosingClass__</span>

Outputs details of the class that encloses this one

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDeclaration

<span style="font-family: monospace; font-size: 80%;">private void __outputDeclaration__</span>

Outputs the type declaration

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodOrFieldDeclaration

<span style="font-family: monospace; font-size: 80%;">private void __outputMethodOrFieldDeclaration__</span>

Outputs the type declaration

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createAnnotationString

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __createAnnotationString__</span>

Creates a string of the elements within an annotation

**Returns:**

The string


---

### outputNestedClassSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputNestedClassSummary__</span>

Outputs a summary of nested classes within this one as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnumConstantsSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputEnumConstantsSummary__</span>

Outputs as summary of an enum's constants as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputFieldSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputFieldSummary__</span>

Outputs a summary of this class's fields as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputConstructorSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputConstructorSummary__</span>

Outputs a the summary of this class's constructors as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodSummary

<span style="font-family: monospace; font-size: 80%;">private void __outputMethodSummary__</span>

Writes the markdown for a class's method summary table

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnumConstantDetails

<span style="font-family: monospace; font-size: 80%;">private void __outputEnumConstantDetails__</span>

Outputs enum constant details as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDetails

<span style="font-family: monospace; font-size: 80%;">private void __outputDetails__</span>

Writes the markdown for a class's method or field details.

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

**Since:**

0.1.0

**See Also:**


[http://example.com](http://example.com)


[java.util.List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)



---

### outputReferences

<span style="font-family: monospace; font-size: 80%;">private void __outputReferences__</span>

Outputs references for a type member

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodDetails

<span style="font-family: monospace; font-size: 80%;">private void __outputMethodDetails__</span>

Outputs the Javadoc of a method as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodParams

<span style="font-family: monospace; font-size: 80%;">private void __outputMethodParams__</span>

Outputs the parameters of a method as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDeprecation

<span style="font-family: monospace; font-size: 80%;">private void __outputDeprecation__</span>

Outputs the deprecation status of this type as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

