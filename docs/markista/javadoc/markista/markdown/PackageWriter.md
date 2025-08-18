Package [io.github.sandydunlop.markista.markdown](index.md)

# Class PackageWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.PackageWriter<br/>
<br/>

----

<span style="font-family: monospace;">public class __PackageWriter__</span>

A class that outputs API package documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                 | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_CLASS](#text_class)             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description) |                                                                                                                                                                                       |
| private [Context](../core/Context.md)                                                                             | [ctx](#ctx)                           | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                     | The Writer used to output the generated markdown content for the current document.                                                                                                    |

## Constructor Summary

| Constructor     | Description                                                              |
|-----------------|--------------------------------------------------------------------------|
| PackageWriter() | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type | Method                                                                                                                                                                                                                                                                                                    | Description                                                    |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| public void       | [writeDocs](#writedocs)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                  | Output the documentation files for the specified API           |
| void              | [outputPackageDoc](#outputpackagedoc)([PackageNode](../model/PackageNode.md) packageNode)                                                                                                                                                                                                                 | Writes the Javadoc for a package as Markdown                   |
| private void      | [outputPackageMemberPackages](#outputpackagememberpackages)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](../model/PackageNode.md)> members) | Writes the Javadoc for a package's member packages as Markdown |
| private void      | [outputPackageMemberTypes](#outputpackagemembertypes)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](../model/TypeView.md)> members)             | Writes the Javadoc for a package's members as Markdown         |

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
> **Warning**<br/>
Do not make this `final`. It will break tests with mocked [Context](../core/Context.md).


---

### writer

The Writer used to output the generated markdown content for the current document.
It handles writing text to the appropriate output file or stream.


---


## Method Details

### writeDocs

public void writeDocs([ModuleNode](../model/ModuleNode.md) moduleNode)

Output the documentation files for the specified API

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageDoc

void outputPackageDoc([PackageNode](../model/PackageNode.md) packageNode)

Writes the Javadoc for a package as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageMemberPackages

private void outputPackageMemberPackages([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[PackageNode](../model/PackageNode.md)> members)

Writes the Javadoc for a package's member packages as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageMemberTypes

private void outputPackageMemberTypes([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[TypeView](../model/TypeView.md)> members)

Writes the Javadoc for a package's members as Markdown

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

