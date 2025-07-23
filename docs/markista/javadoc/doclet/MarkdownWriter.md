Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.MarkdownWriter<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                 | Field                                             | Description |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_CLASS](#text_class)                         |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description)             |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_MODIFIER_AND_TYPE](#text_modifier_and_type) |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [BR](#br)                                         |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [NBSP](#nbsp)                                     |             |
| private boolean                                                                                                   | [squashEmptyDirectories](#squashemptydirectories) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)              | [squashedDirectories](#squasheddirectories)       |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)              | [outputDirectory](#outputdirectory)               |             |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                                 |             |

## Constructor Summary

| Constructor                                                                                                                  | Description                                                              |
|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| MarkdownWriter([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory) | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                                                                                                                                                                | Description                                                |
|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| void                                                                                                 | [setSquashEmptyDirectories](#setsquashemptydirectories)(boolean b)                                                                                                                                                                                                                                    |                                                            |
| void                                                                                                 | [writeDocs](#writedocs)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                   | Ouput the documentation files for the specified API        |
| private void                                                                                         | [setSquashedDirectories](#setsquasheddirectories)([Api](../model/Api.md) api)                                                                                                                                                                                                                         |                                                            |
| private static int                                                                                   | [countDots](#countdots)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)                                                                                                                                                                             |                                                            |
| private void                                                                                         | [outputPackageDoc](#outputpackagedoc)([PackageNode](../model/PackageNode.md) packageNode)                                                                                                                                                                                                             |                                                            |
| private void                                                                                         | [outputPackageMembers](#outputpackagemembers)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; members) |                                                            |
| private void                                                                                         | [outputTypeDoc](#outputtypedoc)([TypeNode](../model/TypeNode.md) typeNode)                                                                                                                                                                                                                            |                                                            |
| private void                                                                                         | [outputTypeDoc](#outputtypedoc)([TypeNode](../model/TypeNode.md) typeNode, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeKind)                                                                                                                     |                                                            |
| private void                                                                                         | [outputSupertypes](#outputsupertypes)([TypeNode](../model/TypeNode.md) typeDoc)                                                                                                                                                                                                                       |                                                            |
| private void                                                                                         | [outputImplementedInterfaces](#outputimplementedinterfaces)([TypeNode](../model/TypeNode.md) typeDoc)                                                                                                                                                                                                 |                                                            |
| private void                                                                                         | [outputEnclosingClass](#outputenclosingclass)([TypeNode](../model/TypeNode.md) typeDoc)                                                                                                                                                                                                               |                                                            |
| private void                                                                                         | [outputNestedClassSummary](#outputnestedclasssummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; nestedClasses)                                                                                       |                                                            |
| private void                                                                                         | [outputEnumConstantsSummary](#outputenumconstantssummary)([EnumNode](../model/EnumNode.md) enumNode)                                                                                                                                                                                                  |                                                            |
| private void                                                                                         | [outputFieldSummary](#outputfieldsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](../model/FieldNode.md)&gt; fields)                                                                                                                  |                                                            |
| private void                                                                                         | [outputConstructorSummary](#outputconstructorsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](../model/MethodNode.md)&gt; methods)                                                                                                   |                                                            |
| private void                                                                                         | [outputMethodSummary](#outputmethodsummary)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](../model/MethodNode.md)&gt; methods)                                                                                                             | Writes the markdown for a class's method summary table     |
| private void                                                                                         | [outputEnumConstantDetails](#outputenumconstantdetails)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](../model/FieldNode.md)&gt; constants, [EnumNode](../model/EnumNode.md) enumNode)                                                      |                                                            |
| private void                                                                                         | [outputDetails](#outputdetails)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Node](../model/Node.md)&gt; nodes)                                                                                                                                       | Writes the markdown for a class's method or field details. |
| private void                                                                                         | [outputReferences](#outputreferences)([Node](../model/Node.md) node)                                                                                                                                                                                                                                  |                                                            |
| private void                                                                                         | [outputMethodDetails](#outputmethoddetails)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                              |                                                            |
| private void                                                                                         | [outputMethodParams](#outputmethodparams)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                |                                                            |
| private void                                                                                         | [outputDeprecation](#outputdeprecation)([Deprecation](../model/Deprecation.md) status, [Text](../model/Text.md) text)                                                                                                                                                                                 |                                                            |
| private void                                                                                         | [outputConstantValues](#outputconstantvalues)([Api](../model/Api.md) api)                                                                                                                                                                                                                             |                                                            |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [fullSignature](#fullsignature)([MethodNode](../model/MethodNode.md) method)                                                                                                                                                                                                                          |                                                            |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)         | [paramsString](#paramsstring)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](../model/ParamNode.md)&gt; params)                                                                                                                              |                                                            |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatReference](#formatreference)([Reference](../model/Reference.md) ref)                                                                                                                                                                                                                           |                                                            |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatTaggedText](#formattaggedtext)([Text](../model/Text.md) text)                                                                                                                                                                                                                                  |                                                            |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatTaggedCode](#formattaggedcode)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) code)                                                                                                                                            |                                                            |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatTaggedLink](#formattaggedlink)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) link)                                                                                                                                            |                                                            |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [formatTaggedLinkPlain](#formattaggedlinkplain)([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) link)                                                                                                                                  |                                                            |
| private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)       | [buildContainingDirPath](#buildcontainingdirpath)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)                             |                                                            |
| private char                                                                                         | [pathSeparator](#pathseparator)()                                                                                                                                                                                                                                                                     |                                                            |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)   | [createFile](#createfile)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)                                                           |                                                            |

## Field Details

### TEXT_CLASS



**See Also:**


[Constant Field Values](../constant-values.md)


### TEXT_DESCRIPTION



**See Also:**


[Constant Field Values](../constant-values.md)


### TEXT_MODIFIER_AND_TYPE



**See Also:**


[Constant Field Values](../constant-values.md)


### BR



**See Also:**


[Constant Field Values](../constant-values.md)


### NBSP



**See Also:**


[Constant Field Values](../constant-values.md)


### squashEmptyDirectories



### squashedDirectories



### outputDirectory



### writer




## Method Details

### setSquashEmptyDirectories

void setSquashEmptyDirectories(boolean b)



### writeDocs

void writeDocs([Api](../model/Api.md) api)

Ouput the documentation files for the specified API

**Parameters:**

`api` - The API to output the documentation for

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### setSquashedDirectories

private void setSquashedDirectories([Api](../model/Api.md) api)



### countDots

private static int countDots([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) str)



### outputPackageDoc

private void outputPackageDoc([PackageNode](../model/PackageNode.md) packageNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputPackageMembers

private void outputPackageMembers([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; members)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputTypeDoc

private void outputTypeDoc([TypeNode](../model/TypeNode.md) typeNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputTypeDoc

private void outputTypeDoc([TypeNode](../model/TypeNode.md) typeNode, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) typeKind)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputSupertypes

private void outputSupertypes([TypeNode](../model/TypeNode.md) typeDoc)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputImplementedInterfaces

private void outputImplementedInterfaces([TypeNode](../model/TypeNode.md) typeDoc)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputEnclosingClass

private void outputEnclosingClass([TypeNode](../model/TypeNode.md) typeDoc)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputNestedClassSummary

private void outputNestedClassSummary([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; nestedClasses)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputEnumConstantsSummary

private void outputEnumConstantsSummary([EnumNode](../model/EnumNode.md) enumNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputFieldSummary

private void outputFieldSummary([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](../model/FieldNode.md)&gt; fields)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputConstructorSummary

private void outputConstructorSummary([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](../model/MethodNode.md)&gt; methods)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputMethodSummary

private void outputMethodSummary([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[MethodNode](../model/MethodNode.md)&gt; methods)

Writes the markdown for a class's method summary table

**Parameters:**

`methods` - The list of methods to include in the summary table

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputEnumConstantDetails

private void outputEnumConstantDetails([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[FieldNode](../model/FieldNode.md)&gt; constants, [EnumNode](../model/EnumNode.md) enumNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputDetails

private void outputDetails([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[Node](../model/Node.md)&gt; nodes)

Writes the markdown for a class's method or field details.

**Parameters:**

`nodes` - The list of methods to write the details of

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

**Since:**

0.1.0

**See Also:**


[http://example.com](http://example.com)


[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)


### outputReferences

private void outputReferences([Node](../model/Node.md) node)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputMethodDetails

private void outputMethodDetails([MethodNode](../model/MethodNode.md) method)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputMethodParams

private void outputMethodParams([MethodNode](../model/MethodNode.md) method)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputDeprecation

private void outputDeprecation([Deprecation](../model/Deprecation.md) status, [Text](../model/Text.md) text)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### outputConstantValues

private void outputConstantValues([Api](../model/Api.md) api)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

### fullSignature

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fullSignature([MethodNode](../model/MethodNode.md) method)



### paramsString

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) paramsString([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[ParamNode](../model/ParamNode.md)&gt; params)



### formatReference

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatReference([Reference](../model/Reference.md) ref)



### formatTaggedText

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatTaggedText([Text](../model/Text.md) text)



### formatTaggedCode

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatTaggedCode([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) code)



### formatTaggedLink

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatTaggedLink([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) link)



### formatTaggedLinkPlain

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) formatTaggedLinkPlain([DocTree](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/com/sun/source/doctree/DocTree.html) link)



### buildContainingDirPath

private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) buildContainingDirPath([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)



**Parameters:**

`outputDirectory` - output path specified by the `-d` command line parameter

`packageName` - the name of the packageName

### pathSeparator

private char pathSeparator()



### createFile

private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) createFile([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) className, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) packageName)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)

