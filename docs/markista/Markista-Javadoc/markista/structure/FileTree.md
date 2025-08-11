Package [io.github.sandydunlop.markista.structure](index.md)

# Class FileTree
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.structure.AbstractTree](AbstractTree.md)<br/>
                io.github.sandydunlop.markista.structure.FileTree<br/>
<br/>

----

<span style="font-family: monospace;">public Class __FileTree__</span>


## Field Summary

| Modifier and Type                                                                                                                                                                            | Field                     | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|-------------|
| [Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html)                                                                                                 | [rootPath](#rootpath)     |             |
| boolean                                                                                                                                                                                      | [showHidden](#showhidden) |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [ignore](#ignore)         |             |

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| FileTree()  |             |

## Method Summary

| Modifier and Type               | Method                                                                                                                                                                                                                                                               | Description |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public void                     | [setShowHidden](#setshowhidden)(boolean b)                                                                                                                                                                                                                           |             |
| public void                     | [ignore](#ignore)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] files)                                                                                                                                             |             |
| private void                    | [scanDirectory](#scandirectory)([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory)                                                                                                                                    |             |
| private [NodeKind](NodeKind.md) | [kindFromFilename](#kindfromfilename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)                                                                                                                             |             |
| public void                     | [scan](#scan)([Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) directory)                                                                                                                                                |             |
| private [TreeNode](TreeNode.md) | [getBranch](#getbranch)([TreeNode](TreeNode.md) fromBranch, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; components) |             |

## Field Details

### rootPath




---

### showHidden




---

### ignore




---


## Method Details

### setShowHidden

public void setShowHidden(boolean b)




---

### ignore

public void ignore([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] files)




---

### scanDirectory

private void scanDirectory([File](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/File.html) directory)




---

### kindFromFilename

private [NodeKind](NodeKind.md) kindFromFilename([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)




---

### scan

public void scan([Path](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/Path.html) directory)




---

### getBranch

private [TreeNode](TreeNode.md) getBranch([TreeNode](TreeNode.md) fromBranch, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; components)




---

