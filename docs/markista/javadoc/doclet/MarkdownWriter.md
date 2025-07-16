Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.MarkdownWriter<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                 | Field           | Description |
|-------------------------------------------------------------------------------------------------------------------|-----------------|-------------|
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | writer          |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)              | outputDirectory |             |
| private [TypeNode](../model//TypeNode.md)                                                                         | linkFrom        |             |
| private [Api](../model//Api.md)                                                                                   | api             |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | NBSP            |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | BR              |             |

## Constructor Summary

| Constructor                            | Description                                                              |
|----------------------------------------|--------------------------------------------------------------------------|
| MarkdownWriter(String outputDirectory) | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type                                                                                           | Method                                                                                        | Description                                                              |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| void                                                                                                        | [writeDocs](#writedocs)(Api api)                                                              | Ouput the documentation files for the specified API                      |
| private char                                                                                                | [pathSeparator](#pathseparator)()                                                             |                                                                          |
| private void                                                                                                | [outputTypeDoc](#outputtypedoc)(TypeNode typeDoc, String subType)                             |                                                                          |
| private void                                                                                                | [outputSupertypes](#outputsupertypes)(TypeNode typeDoc)                                       |                                                                          |
| private void                                                                                                | [outputPackageMembers](#outputpackagemembers)(String title, List members)                     |                                                                          |
| private void                                                                                                | [outputPackageDoc](#outputpackagedoc)(PackageNode packageDoc)                                 |                                                                          |
| private void                                                                                                | [outputNestedClassSummary](#outputnestedclasssummary)(List nestedClasses)                     |                                                                          |
| private void                                                                                                | [outputMethodSummary](#outputmethodsummary)(List methods)                                     |                                                                          |
| private void                                                                                                | [outputMethodDetails](#outputmethoddetails)(List methods)                                     |                                                                          |
| private void                                                                                                | [outputImplementedInterfaces](#outputimplementedinterfaces)(TypeNode typeDoc)                 |                                                                          |
| private void                                                                                                | [outputFieldSummary](#outputfieldsummary)(List fields)                                        |                                                                          |
| private void                                                                                                | [outputEnclosingClass](#outputenclosingclass)(TypeNode typeDoc)                               |                                                                          |
| private void                                                                                                | [outputConstructorSummary](#outputconstructorsummary)(List methods)                           |                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [mdDocumentLink](#mddocumentlink)(String docName)                                             |                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [mdDocumentLink](#mddocumentlink)(String phrase, String docName)                              |                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [mdAutoLink](#mdautolink)(String identifier)                                                  |                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [mdAutoLink](#mdautolink)(String identifier, boolean qualify)                                 | Create a markdown link, automatically deciding where it needs to link to |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [mdAnchorLink](#mdanchorlink)(String phrase)                                                  |                                                                          |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [mdAnchor](#mdanchor)(String phrase)                                                          |                                                                          |
| private boolean                                                                                             | [isNullOrEmpty](#isnullorempty)(String s)                                                     |                                                                          |
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [inOneLine](#inoneline)(String text)                                                          |                                                                          |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [escape](#escape)(String str)                                                                 |                                                                          |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)          | [createFile](#createfile)(String className, String packageName)                               |                                                                          |
| private [File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html)              | [buildContainingDirPath](#buildcontainingdirpath)(String outputDirectory, String packageName) | []                                                                       |

## Method Details

### writeDocs

`void writeDocs(Api api)`



### pathSeparator

`private char pathSeparator()`



### outputTypeDoc

`private void outputTypeDoc(TypeNode typeDoc, String subType)`



### outputSupertypes

`private void outputSupertypes(TypeNode typeDoc)`



### outputPackageMembers

`private void outputPackageMembers(String title, List members)`



### outputPackageDoc

`private void outputPackageDoc(PackageNode packageDoc)`



### outputNestedClassSummary

`private void outputNestedClassSummary(List nestedClasses)`



### outputMethodSummary

`private void outputMethodSummary(List methods)`



### outputMethodDetails

`private void outputMethodDetails(List methods)`



### outputImplementedInterfaces

`private void outputImplementedInterfaces(TypeNode typeDoc)`



### outputFieldSummary

`private void outputFieldSummary(List fields)`



### outputEnclosingClass

`private void outputEnclosingClass(TypeNode typeDoc)`



### outputConstructorSummary

`private void outputConstructorSummary(List methods)`



### mdDocumentLink

`private String mdDocumentLink(String docName)`



### mdDocumentLink

`private String mdDocumentLink(String phrase, String docName)`



### mdAutoLink

`private String mdAutoLink(String identifier)`



### mdAutoLink

`private String mdAutoLink(String identifier, boolean qualify)`



Returns:

[markdown text for a link to a document for the specified identifier or an anchor link]

### mdAnchorLink

`private String mdAnchorLink(String phrase)`



### mdAnchor

`private static String mdAnchor(String phrase)`



### isNullOrEmpty

`private boolean isNullOrEmpty(String s)`



### inOneLine

`private static String inOneLine(String text)`



### escape

`private String escape(String str)`



### createFile

`private Writer createFile(String className, String packageName)`



### buildContainingDirPath

`private File buildContainingDirPath(String outputDirectory, String packageName)`

[]

