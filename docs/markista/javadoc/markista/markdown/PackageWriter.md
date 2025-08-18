Package [io.github.sandydunlop.markista.markdown](index.md)

# Class PackageWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.PackageWriter<br/>
<br/>

----

<span style="font-family: monospace;">public class __PackageWriter__</span>

A class that outputs API package documentation as Markdown.


## Constructor Summary

| Constructor     | Description                                                              |
|-----------------|--------------------------------------------------------------------------|
| PackageWriter() | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type | Method                                                                   | Description                                          |
|-------------------|--------------------------------------------------------------------------|------------------------------------------------------|
| public void       | [writeDocs](#writedocs)([ModuleNode](../model/ModuleNode.md) moduleNode) | Output the documentation files for the specified API |

## Method Details

### writeDocs

public void writeDocs([ModuleNode](../model/ModuleNode.md) moduleNode)

Output the documentation files for the specified API

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

