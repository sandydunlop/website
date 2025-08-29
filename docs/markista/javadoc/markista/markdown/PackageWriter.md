Package [io.github.sandydunlop.markista.markdown](index.md)

# Class PackageWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.PackageWriter<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __PackageWriter__</span>

A class that outputs API package documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                 | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_CLASS](#text_class)             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TEXT_DESCRIPTION](#text_description) |                                                                                                                                                                                       |
| private [Context](../core/Context.md)                                                                             | [ctx](#ctx)                           | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                     | The Writer used to output the generated markdown content for the current document.                                                                                                    |



## Constructor Summary

| Constructor                                          | Description                                                              |
|------------------------------------------------------|--------------------------------------------------------------------------|
| PackageWriter([Context](../core/Context.md) context) | Constructor that sets up the locations API documents will be written to. |



## Method Summary

| Modifier and Type | Method                                                                                                                                                                                                                                                            | Description                                                    |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| public void       | [writeDocs](#writedocs)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                          | Output the documentation files for the specified API           |
| void              | [outputPackageDoc](#outputpackagedoc)([PackageNode](../model/PackageNode.md) packageNode)                                                                                                                                                                         | Writes the Javadoc for a package as Markdown                   |
| private void      | [outputPackageMemberPackages](#outputpackagememberpackages)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html) members) | Writes the Javadoc for a package's member packages as Markdown |
| private void      | [outputPackageMemberTypes](#outputpackagemembertypes)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html) members)       | Writes the Javadoc for a package's members as Markdown         |



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

### writeDocs

<span style="font-family: monospace; font-size: 80%;">public void __writeDocs__([ModuleNode](../model/ModuleNode.md) moduleNode)</span>

Output the documentation files for the specified API

**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageDoc

<span style="font-family: monospace; font-size: 80%;">void __outputPackageDoc__([PackageNode](../model/PackageNode.md) packageNode)</span>

Writes the Javadoc for a package as Markdown

**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageMemberPackages

<span style="font-family: monospace; font-size: 80%;">private void __outputPackageMemberPackages__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html) members)</span>

Writes the Javadoc for a package's member packages as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputPackageMemberTypes

<span style="font-family: monospace; font-size: 80%;">private void __outputPackageMemberTypes__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html) members)</span>

Writes the Javadoc for a package's members as Markdown

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

