Package [io.github.sandydunlop.markista.modelling](index.md)

# Interface Modeller
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.modelling.Modeller<br/>
<br/>
All Known Implementing Classes:<br/>
    [ElementModeller](ElementModeller.md), [StandardModeller](StandardModeller.md)


----

<span style="font-family: monospace; font-size: 80%;">public interface __Modeller__</span>


## Method Summary

| Modifier and Type                                      | Method                             | Description |
|--------------------------------------------------------|------------------------------------|-------------|
| public abstract [ModuleNode](../model/ModuleNode.md)   | [modelModule](#modelmodule)(A m)   |             |
| public abstract [PackageNode](../model/PackageNode.md) | [modelPackage](#modelpackage)(B p) |             |
| public abstract [TypeNode](../model/TypeNode.md)       | [modelType](#modeltype)(C t)       |             |
| public abstract [ClassNode](../model/ClassNode.md)     | [modelClass](#modelclass)(C t)     |             |
| public abstract [FieldNode](../model/FieldNode.md)     | [modelField](#modelfield)(F f)     |             |
| public abstract [MethodNode](../model/MethodNode.md)   | [modelMethod](#modelmethod)(M m)   |             |
| public abstract [ParamNode](../model/ParamNode.md)     | [modelParam](#modelparam)(P p)     |             |



## Method Details

### modelModule

<span style="font-family: monospace; font-size: 80%;">public abstract [ModuleNode](../model/ModuleNode.md) __modelModule__(A m)</span>




---

### modelPackage

<span style="font-family: monospace; font-size: 80%;">public abstract [PackageNode](../model/PackageNode.md) __modelPackage__(B p)</span>




---

### modelType

<span style="font-family: monospace; font-size: 80%;">public abstract [TypeNode](../model/TypeNode.md) __modelType__(C t)</span>




---

### modelClass

<span style="font-family: monospace; font-size: 80%;">public abstract [ClassNode](../model/ClassNode.md) __modelClass__(C t)</span>




---

### modelField

<span style="font-family: monospace; font-size: 80%;">public abstract [FieldNode](../model/FieldNode.md) __modelField__(F f)</span>




---

### modelMethod

<span style="font-family: monospace; font-size: 80%;">public abstract [MethodNode](../model/MethodNode.md) __modelMethod__(M m)</span>




---

### modelParam

<span style="font-family: monospace; font-size: 80%;">public abstract [ParamNode](../model/ParamNode.md) __modelParam__(P p)</span>




---

