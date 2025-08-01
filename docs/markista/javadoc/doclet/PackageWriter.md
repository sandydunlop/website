Package [io.github.sandydunlop.markista.doclet](index.md)

# Class PackageWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.PackageWriter<br/>
<br/>

----

A class that outputs API package documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                 | Description |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------|-------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_CLASS](#text_class)             |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description) |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)              | [outputDirectory](#outputdirectory)   |             |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                     |             |
| private [FileUtils](../util/FileUtils.md)                                                                         | [fileUtils](#fileutils)               |             |

## Constructor Summary

| Constructor                                                                                                                 | Description                                                              |
|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| PackageWriter([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) outputDirectory) | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type | Method                                                                                                                                                                                                                                                                                                | Description                                          |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| void              | [writeDocs](#writedocs)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                              | Output the documentation files for the specified API |
| private void      | [outputPackageDoc](#outputpackagedoc)([PackageNode](../model/PackageNode.md) packageNode)                                                                                                                                                                                                             |                                                      |
| private void      | [outputPackageMembers](#outputpackagemembers)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; members) |                                                      |

## Field Details

### TEXT_CLASS



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TEXT_DESCRIPTION



**See Also:**


[Constant Field Values](../constant-values.md)



---

### outputDirectory




---

### writer




---

### fileUtils




---


## Method Details

### writeDocs

void writeDocs([ModuleNode](../model/ModuleNode.md) moduleNode)

Output the documentation files for the specified API

**Parameters:**

`moduleNode` - The module containing the packages to output the documentation for

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageDoc

private void outputPackageDoc([PackageNode](../model/PackageNode.md) packageNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageMembers

private void outputPackageMembers([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; members)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

