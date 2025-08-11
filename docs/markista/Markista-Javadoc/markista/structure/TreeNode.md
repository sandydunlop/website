Package [io.github.sandydunlop.markista.structure](index.md)

# Class TreeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.structure.TreeNode<br/>
<br/>

----

<span style="font-family: monospace;">public Class __TreeNode__</span>


## Field Summary

| Modifier and Type                                                                                                       | Field                 | Description |
|-------------------------------------------------------------------------------------------------------------------------|-----------------------|-------------|
| [NodeKind](NodeKind.md)                                                                                                 | [kind](#kind)         |             |
| [Icon](Icon.md)                                                                                                         | [icon](#icon)         |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                            | [label](#label)       |             |
| int                                                                                                                     | [x](#x)               |             |
| int                                                                                                                     | [y](#y)               |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[TreeNode](TreeNode.md)&gt; | [children](#children) |             |
| [TreeNode](TreeNode.md)                                                                                                 | [parent](#parent)     |             |
| [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html)                            | [path](#path)         |             |
| boolean                                                                                                                 | [visible](#visible)   |             |

## Constructor Summary

| Constructor                                                                                                                                | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| TreeNode([NodeKind](NodeKind.md) kind, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) label) |             |

## Method Summary

| Modifier and Type                                                                                   | Method                                                                                                                   | Description |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------|
| public void                                                                                         | [setX](#setx)(int x)                                                                                                     |             |
| public int                                                                                          | [getX](#getx)()                                                                                                          |             |
| public void                                                                                         | [setY](#sety)(int y)                                                                                                     |             |
| public int                                                                                          | [getY](#gety)()                                                                                                          |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getLabel](#getlabel)()                                                                                                  |             |
| public [Icon](Icon.md)                                                                              | [getIcon](#geticon)()                                                                                                    |             |
| public void                                                                                         | [addChild](#addchild)([TreeNode](TreeNode.md) entry)                                                                     |             |
| public [TreeNode](TreeNode.md)                                                                      | [getParent](#getparent)()                                                                                                |             |
| public void                                                                                         | [setParent](#setparent)([TreeNode](TreeNode.md) parent)                                                                  |             |
| public void                                                                                         | [setPath](#setpath)([Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) path)   |             |
| public [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) | [getPath](#getpath)()                                                                                                    |             |
| public void                                                                                         | [setVisible](#setvisible)(boolean b)                                                                                     |             |
| public boolean                                                                                      | [isVisible](#isvisible)()                                                                                                |             |
| public void                                                                                         | [setKind](#setkind)([NodeKind](NodeKind.md) kind)                                                                        |             |
| public [NodeKind](NodeKind.md)                                                                      | [getKind](#getkind)()                                                                                                    |             |
| public [TreeNode](TreeNode.md)                                                                      | [getChild](#getchild)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name) |             |

## Field Details

### kind




---

### icon




---

### label




---

### x




---

### y




---

### children




---

### parent




---

### path




---

### visible




---


## Method Details

### setX

public void setX(int x)




---

### getX

public int getX()




---

### setY

public void setY(int y)




---

### getY

public int getY()




---

### getLabel

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getLabel()




---

### getIcon

public [Icon](Icon.md) getIcon()




---

### addChild

public void addChild([TreeNode](TreeNode.md) entry)




---

### getParent

public [TreeNode](TreeNode.md) getParent()




---

### setParent

public void setParent([TreeNode](TreeNode.md) parent)




---

### setPath

public void setPath([Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) path)




---

### getPath

public [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) getPath()




---

### setVisible

public void setVisible(boolean b)




---

### isVisible

public boolean isVisible()




---

### setKind

public void setKind([NodeKind](NodeKind.md) kind)




---

### getKind

public [NodeKind](NodeKind.md) getKind()




---

### getChild

public [TreeNode](TreeNode.md) getChild([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

