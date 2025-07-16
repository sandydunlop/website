Package [io.github.sandydunlop.markista.model](index.md)

# Class TypeNode
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[io.github.sandydunlop.markista.model.Node](Node.md)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.model.TypeNode<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                            | Field                 | Description |
|----------------------------------------------------------------------------------------------|-----------------------|-------------|
| List&lt;String&gt;                                                                           | supertypes            |             |
| List&lt;MethodNode&gt;                                                                       | methods               |             |
| List&lt;InterfaceNode&gt;                                                                    | interfaces            |             |
| List&lt;String&gt;                                                                           | implementedInterfaces |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | fullDescription       |             |
| List&lt;FieldNode&gt;                                                                        | fields                |             |
| List&lt;ExceptionNode&gt;                                                                    | exceptionClasses      |             |
| List&lt;EnumNode&gt;                                                                         | enumClasses           |             |
| List&lt;MethodNode&gt;                                                                       | constructors          |             |
| List&lt;ClassNode&gt;                                                                        | classes               |             |
| List&lt;AnnotationNode&gt;                                                                   | annotationClasses     |             |

## Constructor Summary

| Constructor                                                           | Description |
|-----------------------------------------------------------------------|-------------|
| TypeNode(String qualifiedName, String simpleName, String packageName) |             |

## Method Summary

| Modifier and Type | Method          | Description |
|-------------------|-----------------|-------------|
| void              | [sort](#sort)() |             |

## Method Details

### sort

`void sort()`



