Package [io.github.sandydunlop.markista.markdown](index.md)

# Class TypeWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.TypeWriter<br/>
<br/>

----

<span style="font-family: monospace;">public Class __TypeWriter__</span>

A class that outputs API type documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                             | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_CLASS](#text_class)                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description)             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_MODIFIER_AND_TYPE](#text_modifier_and_type) |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [BR](#br)                                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [NBSP](#nbsp)                                     |                                                                                                                                                                                       |
| private [Context](../util/Context.md)                                                                             | [ctx](#ctx)                                       | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                                 | The Writer used to output the generated markdown content for the current document.                                                                                                    |

## Constructor Summary

| Constructor  | Description                                                              |
|--------------|--------------------------------------------------------------------------|
| TypeWriter() | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                                                                                                                   | Description                                                                                                                                                   |
|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public void                                                                                          | [writeDoc](#writedoc)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                         | Tells the [LinkResolver](../util/LinkResolver.md) what class is about to be documented then  calls the appropriate method do begin the documentation process. |
| private void                                                                                         | [outputTypeDoc](#outputtypedoc)([TypeNode](../model/TypeNode.md) typeNode, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeKind)                                                                        | Writes a Markdown file for the Javadoc of a type                                                                                                              |
| private void                                                                                         | [outputSupertypes](#outputsupertypes)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                         | Outputs the hierarchy of supertypes of a class                                                                                                                |
| private void                                                                                         | [outputImplementedInterfaces](#outputimplementedinterfaces)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                   | Outputs details of any interfaces that this class implements                                                                                                  |
| private void                                                                                         | [outputEnclosingClass](#outputenclosingclass)([TypeNode](../model/TypeNode.md) enclosingClass)                                                                                                                                                           | Outputs details of the class that encloses this one                                                                                                           |
| private void                                                                                         | [outputDeclaration](#outputdeclaration)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                       | Outputs the type declaration                                                                                                                                  |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [createAnnotationString](#createannotationstring)([AppliedAnnotationNode](../model/AppliedAnnotationNode.md) annotation)                                                                                                                                 | Creates a string of the elements within an annotation                                                                                                         |
| private void                                                                                         | [outputNestedClassSummary](#outputnestedclasssummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; nestedClasses)                                          | Outputs a summary of nested classes within this one as Markdown                                                                                               |
| private void                                                                                         | [outputEnumConstantsSummary](#outputenumconstantssummary)([EnumTypeNode](../model/EnumTypeNode.md) enumNode)                                                                                                                                             | Outputs as summary of an enum's constants as Markdown                                                                                                         |
| private void                                                                                         | [outputFieldSummary](#outputfieldsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](../model/FieldNode.md)&gt; fields)                                                                     | Outputs a summary of this class's fields as Markdown                                                                                                          |
| private void                                                                                         | [outputConstructorSummary](#outputconstructorsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](../model/MethodNode.md)&gt; methods)                                                      | Outputs a the summary of this class's constructors as Markdown                                                                                                |
| private void                                                                                         | [outputMethodSummary](#outputmethodsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](../model/MethodNode.md)&gt; methods)                                                                | Writes the markdown for a class's method summary table                                                                                                        |
| private void                                                                                         | [outputEnumConstantDetails](#outputenumconstantdetails)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](../model/FieldNode.md)&gt; constants, [EnumTypeNode](../model/EnumTypeNode.md) enumNode) | Outputs enum constant details as Markdown                                                                                                                     |
| private void                                                                                         | [outputDetails](#outputdetails)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Node](../model/Node.md)&gt; nodes)                                                                                          | Writes the markdown for a class's method or field details.                                                                                                    |
| private void                                                                                         | [outputReferences](#outputreferences)([Node](../model/Node.md) node)                                                                                                                                                                                     | Outputs references for a type member                                                                                                                          |
| private void                                                                                         | [outputMethodDetails](#outputmethoddetails)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                 | Outputs the Javadoc of a method as Markdown                                                                                                                   |
| private void                                                                                         | [outputMethodParams](#outputmethodparams)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                   | Outputs the parameters of a method as Markdown                                                                                                                |
| private void                                                                                         | [outputDeprecation](#outputdeprecation)([Deprecation](../model/Deprecation.md) status, [Text](../model/Text.md) text)                                                                                                                                    | Outputs the deprecation status of this type as Markdown                                                                                                       |

## Field Details

### TEXT_CLASS



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TEXT_DESCRIPTION



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TEXT_MODIFIER_AND_TYPE



**See Also:**


[Constant Field Values](../constant-values.md)



---

### BR



**See Also:**


[Constant Field Values](../constant-values.md)



---

### NBSP




---

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.
> **Warning**<br/>
Do not make this `final`. It will break tests with mocked [Context](../util/Context.md).


---

### writer

The Writer used to output the generated markdown content for the current document.
It handles writing text to the appropriate output file or stream.


---


## Method Details

### writeDoc

public void writeDoc([TypeNode](../model/TypeNode.md) typeNode)

Tells the [LinkResolver](../util/LinkResolver.md) what class is about to be documented then 
calls the appropriate method do begin the documentation process.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputTypeDoc

private void outputTypeDoc([TypeNode](../model/TypeNode.md) typeNode, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeKind)

Writes a Markdown file for the Javadoc of a type

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputSupertypes

private void outputSupertypes([TypeNode](../model/TypeNode.md) typeNode)

Outputs the hierarchy of supertypes of a class

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputImplementedInterfaces

private void outputImplementedInterfaces([TypeNode](../model/TypeNode.md) typeNode)

Outputs details of any interfaces that this class implements

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnclosingClass

private void outputEnclosingClass([TypeNode](../model/TypeNode.md) enclosingClass)

Outputs details of the class that encloses this one

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDeclaration

private void outputDeclaration([TypeNode](../model/TypeNode.md) typeNode)

Outputs the type declaration

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### createAnnotationString

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) createAnnotationString([AppliedAnnotationNode](../model/AppliedAnnotationNode.md) annotation)

Creates a string of the elements within an annotation

**Returns:**

The string


---

### outputNestedClassSummary

private void outputNestedClassSummary([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; nestedClasses)

Outputs a summary of nested classes within this one as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnumConstantsSummary

private void outputEnumConstantsSummary([EnumTypeNode](../model/EnumTypeNode.md) enumNode)

Outputs as summary of an enum's constants as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputFieldSummary

private void outputFieldSummary([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](../model/FieldNode.md)&gt; fields)

Outputs a summary of this class's fields as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputConstructorSummary

private void outputConstructorSummary([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](../model/MethodNode.md)&gt; methods)

Outputs a the summary of this class's constructors as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodSummary

private void outputMethodSummary([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](../model/MethodNode.md)&gt; methods)

Writes the markdown for a class's method summary table

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputEnumConstantDetails

private void outputEnumConstantDetails([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](../model/FieldNode.md)&gt; constants, [EnumTypeNode](../model/EnumTypeNode.md) enumNode)

Outputs enum constant details as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDetails

private void outputDetails([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Node](../model/Node.md)&gt; nodes)

Writes the markdown for a class's method or field details.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

**Since:**

0.1.0

**See Also:**


[http://example.com](http://example.com)


[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)



---

### outputReferences

private void outputReferences([Node](../model/Node.md) node)

Outputs references for a type member

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodDetails

private void outputMethodDetails([MethodNode](../model/MethodNode.md) method)

Outputs the Javadoc of a method as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputMethodParams

private void outputMethodParams([MethodNode](../model/MethodNode.md) method)

Outputs the parameters of a method as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputDeprecation

private void outputDeprecation([Deprecation](../model/Deprecation.md) status, [Text](../model/Text.md) text)

Outputs the deprecation status of this type as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

