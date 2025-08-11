Package [io.github.sandydunlop.markista.structure](index.md)

# Class TreeSvgWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.structure.TreeSvgWriter<br/>
<br/>

----

<span style="font-family: monospace;">public Class __TreeSvgWriter__</span>


## Field Summary

| Modifier and Type                                                                                                       | Field                 | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                      | [writer](#writer)     | The Writer used to output the generated markdown content for the current document.                                                                                                    |
| [TreeNode](TreeNode.md)                                                                                                 | [root](#root)         |                                                                                                                                                                                       |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; | [contents](#contents) |                                                                                                                                                                                       |
| [AbstractTree](AbstractTree.md)                                                                                         | [tree](#tree)         |                                                                                                                                                                                       |
| private [Context](../util/Context.md)                                                                                   | [ctx](#ctx)           | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |

## Constructor Summary

| Constructor     | Description |
|-----------------|-------------|
| TreeSvgWriter() |             |

## Method Summary

| Modifier and Type                                                                                    | Method                                                                                                                                                            | Description |
|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public void                                                                                          | [setContext](#setcontext)([Context](../util/Context.md) context)                                                                                                  |             |
| public void                                                                                          | [setContents](#setcontents)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; contents)     |             |
| public void                                                                                          | [write](#write)([AbstractTree](AbstractTree.md) tree, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)      |             |
| public void                                                                                          | [writeContents](#writecontents)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; contents) |             |
| private void                                                                                         | [writeEntry](#writeentry)([TreeNode](TreeNode.md) treeNode)                                                                                                       |             |
| private void                                                                                         | [writeLines1](#writelines1)([TreeNode](TreeNode.md) treeNode)                                                                                                     |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [escapeName](#escapename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                      |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [top](#top)()                                                                                                                                                     |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [bot](#bot)()                                                                                                                                                     |             |

## Field Details

### writer

The Writer used to output the generated markdown content for the current document.
It handles writing text to the appropriate output file or stream.


---

### root




---

### contents




---

### tree




---

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.
> **Warning**<br/>
Do not make this `final`. It will break tests with mocked [Context](../util/Context.md).


---


## Method Details

### setContext

public void setContext([Context](../util/Context.md) context)




---

### setContents

public void setContents([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; contents)




---

### write

public void write([AbstractTree](AbstractTree.md) tree, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fileName)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### writeContents

public void writeContents([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; contents)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### writeEntry

private void writeEntry([TreeNode](TreeNode.md) treeNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### writeLines1

private void writeLines1([TreeNode](TreeNode.md) treeNode)



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### escapeName

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) escapeName([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### top

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) top()




---

### bot

private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) bot()




---

