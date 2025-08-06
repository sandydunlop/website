Package [io.github.sandydunlop.markista.markdown](index.md)

# Class PackageWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.PackageWriter<br/>
<br/>

----

A class that outputs API package documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                 | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_CLASS](#text_class)             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description) |                                                                                                                                                                                       |
| private [Context](../util/Context.md)                                                                             | [ctx](#ctx)                           | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                     | The Writer used to output the generated markdown content for the current document.                                                                                                    |

## Constructor Summary

| Constructor     | Description                                                              |
|-----------------|--------------------------------------------------------------------------|
| PackageWriter() | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type | Method                                                                                                                                                                                                                                                                                                | Description                                            |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| void              | [writeDocs](#writedocs)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                              | Output the documentation files for the specified API   |
| private void      | [outputPackageDoc](#outputpackagedoc)([PackageNode](../model/PackageNode.md) packageNode)                                                                                                                                                                                                             | Writes the Javadoc for a package as Markdown           |
| private void      | [outputPackageMembers](#outputpackagemembers)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; members) | Writes the Javadoc for a package's members as Markdown |

## Field Details

### TEXT_CLASS



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TEXT_DESCRIPTION



**See Also:**


[Constant Field Values](../constant-values.md)



---

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---

### writer

The Writer used to output the generated markdown content for the current document.
It handles writing text to the appropriate output file or stream.


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

Writes the Javadoc for a package as Markdown

**Parameters:**

`packageNode` - the package

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageMembers

private void outputPackageMembers([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[PackageMember](../model/PackageMember.md)&gt; members)

Writes the Javadoc for a package's members as Markdown

**Parameters:**

`title` - The title of this section in the Markdown document

`members` - The list of members of this package

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

