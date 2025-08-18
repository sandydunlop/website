Package [io.github.sandydunlop.markista.markdown](index.md)

# Class TypeWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.TypeWriter<br/>
<br/>

----

<span style="font-family: monospace;">public class __TypeWriter__</span>

A class that outputs API type documentation as Markdown.


## Constructor Summary

| Constructor  | Description                                                              |
|--------------|--------------------------------------------------------------------------|
| TypeWriter() | Constructor that sets up the locations API documents will be written to. |

## Method Summary

| Modifier and Type | Method                                                                     | Description                                      |
|-------------------|----------------------------------------------------------------------------|--------------------------------------------------|
| public void       | [outputTypeDoc](#outputtypedoc)([TypeNode](../model/TypeNode.md) typeNode) | Writes a Markdown file for the Javadoc of a type |

## Method Details

### outputTypeDoc

public void outputTypeDoc([TypeNode](../model/TypeNode.md) typeNode)

Writes a Markdown file for the Javadoc of a type

**Throws:**

[java.io.IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

