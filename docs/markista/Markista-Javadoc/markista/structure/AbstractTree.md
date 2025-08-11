Package [io.github.sandydunlop.markista.structure](index.md)

# Class AbstractTree
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.structure.AbstractTree<br/>
<br/>

----

<span style="font-family: monospace;">public abstract Class __AbstractTree__</span>


## Field Summary

| Modifier and Type                                                                                                       | Field                       | Description |
|-------------------------------------------------------------------------------------------------------------------------|-----------------------------|-------------|
| [ModuleNode](../model/ModuleNode.md)                                                                                    | [module](#module)           |             |
| [TreeNode](TreeNode.md)                                                                                                 | [root](#root)               |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; | [contents](#contents)       |             |
| int                                                                                                                     | [lineHeight](#lineheight)   |             |
| int                                                                                                                     | [imageHeight](#imageheight) |             |
| int                                                                                                                     | [imageWidth](#imagewidth)   |             |
| int                                                                                                                     | [y](#y)                     |             |
| int                                                                                                                     | [indent](#indent)           |             |

## Constructor Summary

| Constructor    | Description |
|----------------|-------------|
| AbstractTree() |             |

## Method Summary

| Modifier and Type                                                                                                              | Method                                                                                                                     | Description |
|--------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------|
| public void                                                                                                                    | [setModule](#setmodule)([ModuleNode](../model/ModuleNode.md) module)                                                       |             |
| public [TreeNode](TreeNode.md)                                                                                                 | [getRoot](#getroot)()                                                                                                      |             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; | [getContents](#getcontents)()                                                                                              |             |
| public int                                                                                                                     | [getWidth](#getwidth)()                                                                                                    |             |
| public int                                                                                                                     | [getHeight](#getheight)()                                                                                                  |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [getModuleName](#getmodulename)()                                                                                          |             |
| public void                                                                                                                    | [makeAllVisible](#makeallvisible)()                                                                                        |             |
| public void                                                                                                                    | [hideNames](#hidenames)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |             |
| public void                                                                                                                    | [hideKind](#hidekind)([NodeKind](NodeKind.md) kind)                                                                        |             |

## Field Details

### module




---

### root




---

### contents




---

### lineHeight




---

### imageHeight




---

### imageWidth




---

### y




---

### indent




---


## Method Details

### setModule

public void setModule([ModuleNode](../model/ModuleNode.md) module)




---

### getRoot

public [TreeNode](TreeNode.md) getRoot()




---

### getContents

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; getContents()




---

### getWidth

public int getWidth()




---

### getHeight

public int getHeight()




---

### getModuleName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getModuleName()




---

### makeAllVisible

public void makeAllVisible()




---

### hideNames

public void hideNames([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### hideKind

public void hideKind([NodeKind](NodeKind.md) kind)




---

