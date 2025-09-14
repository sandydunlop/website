Package [io.github.sandydunlop.markista.modelling](index.md)

# Class StandardModeller
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.modelling.StandardModeller<br/>
<br/>
All Implemented Interfaces:<br/>
    [io.github.sandydunlop.markista.modelling.Modeller](Modeller.md)<[java.lang.Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html), [java.lang.Package](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Package.html), [java.lang.Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?>, [java.lang.reflect.Field](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Field.html), [java.lang.reflect.Method](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Method.html), [java.lang.reflect.Parameter](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Parameter.html)>


----

<span style="font-family: monospace; font-size: 80%;">public class __StandardModeller__</span>


## Constructor Summary

| Constructor        | Description |
|--------------------|-------------|
| StandardModeller() |             |



## Method Summary

| Modifier and Type                             | Method                                                                                                                                                                                                                                          | Description |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| public [ModuleNode](../model/ModuleNode.md)   | [modelModule](#modelmodule)([Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html) m)                                                                                                                     |             |
| public [PackageNode](../model/PackageNode.md) | [modelPackage](#modelpackage)([Package](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Package.html) p)                                                                                                                 |             |
| public [TypeNode](../model/TypeNode.md)       | [modelType](#modeltype)([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> type)                                                                                                                     |             |
| public [ClassNode](../model/ClassNode.md)     | [modelClass](#modelclass)([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> type)                                                                                                                   |             |
| public [FieldNode](../model/FieldNode.md)     | [modelField](#modelfield)([Field](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Field.html) field)                                                                                                             |             |
| public [MethodNode](../model/MethodNode.md)   | [modelMethod](#modelmethod)([Method](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Method.html) method)                                                                                                        |             |
| public [ParamNode](../model/ParamNode.md)     | [modelParam](#modelparam)([Parameter](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Parameter.html) parameter)                                                                                                 |             |
| private [TypeNode](../model/TypeNode.md)      | [modelType](#modeltype)([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> type, [Kind](../model/Node.Kind.md) kind)                                                                                 |             |
| private [MethodNode](../model/MethodNode.md)  | [createMethodNode](#createmethodnode)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) method, [Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> owner) |             |



## Method Details

### modelModule

<span style="font-family: monospace; font-size: 80%;">public [ModuleNode](../model/ModuleNode.md) __modelModule__([Module](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Module.html) m)</span>




---

### modelPackage

<span style="font-family: monospace; font-size: 80%;">public [PackageNode](../model/PackageNode.md) __modelPackage__([Package](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Package.html) p)</span>




---

### modelType

<span style="font-family: monospace; font-size: 80%;">public [TypeNode](../model/TypeNode.md) __modelType__([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> type)</span>




---

### modelClass

<span style="font-family: monospace; font-size: 80%;">public [ClassNode](../model/ClassNode.md) __modelClass__([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> type)</span>




---

### modelField

<span style="font-family: monospace; font-size: 80%;">public [FieldNode](../model/FieldNode.md) __modelField__([Field](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Field.html) field)</span>




---

### modelMethod

<span style="font-family: monospace; font-size: 80%;">public [MethodNode](../model/MethodNode.md) __modelMethod__([Method](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Method.html) method)</span>




---

### modelParam

<span style="font-family: monospace; font-size: 80%;">public [ParamNode](../model/ParamNode.md) __modelParam__([Parameter](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/reflect/Parameter.html) parameter)</span>




---

### modelType

<span style="font-family: monospace; font-size: 80%;">private [TypeNode](../model/TypeNode.md) __modelType__([Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> type, [Kind](../model/Node.Kind.md) kind)</span>




---

### createMethodNode

<span style="font-family: monospace; font-size: 80%;">private [MethodNode](../model/MethodNode.md) __createMethodNode__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) method, [Class](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Class.html)<?> owner)</span>




---

