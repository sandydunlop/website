Package [io.github.sandydunlop.markista.structure](index.md)

# Class ModuleTree
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        [io.github.sandydunlop.markista.structure.AbstractTree](AbstractTree.md)<br/>
                io.github.sandydunlop.markista.structure.ModuleTree<br/>
<br/>

----

<span style="font-family: monospace;">public Class __ModuleTree__</span>


## Constructor Summary

| Constructor  | Description |
|--------------|-------------|
| ModuleTree() |             |

## Method Summary

| Modifier and Type               | Method                                                                                                  | Description |
|---------------------------------|---------------------------------------------------------------------------------------------------------|-------------|
| public void                     | [scan](#scan)()                                                                                         |             |
| private [TreeNode](TreeNode.md) | [addModule](#addmodule)([ModuleNode](../model/ModuleNode.md) node, [TreeNode](TreeNode.md) current)     |             |
| private void                    | [addPackage](#addpackage)([PackageNode](../model/PackageNode.md) node, [TreeNode](TreeNode.md) current) |             |
| private void                    | [addType](#addtype)([TypeNode](../model/TypeNode.md) node, [TreeNode](TreeNode.md) current)             |             |

## Method Details

### scan

public void scan()




---

### addModule

private [TreeNode](TreeNode.md) addModule([ModuleNode](../model/ModuleNode.md) node, [TreeNode](TreeNode.md) current)




---

### addPackage

private void addPackage([PackageNode](../model/PackageNode.md) node, [TreeNode](TreeNode.md) current)




---

### addType

private void addType([TypeNode](../model/TypeNode.md) node, [TreeNode](TreeNode.md) current)




---

