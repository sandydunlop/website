Package [io.github.sandydunlop.markista.model](index.md)

# Interface TypeMember
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.TypeMember<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public interface __TypeMember__</span>


## Method Summary

| Modifier and Type                                                                                                                                           | Method                                                                                                      | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------|
| public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> | [getAppliedAnnotations](#getappliedannotations)()                                                           |             |
| public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getSimpleName](#getsimplename)()                                                                           |             |
| public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                | [getModifiersString](#getmodifiersstring)()                                                                 |             |
| public abstract [Node.Kind](Node.Kind.md)                                                                                                                   | [getKind](#getkind)()                                                                                       |             |
| public abstract void                                                                                                                                        | [addAppliedAnnotation](#addappliedannotation)([AppliedAnnotationNode](AppliedAnnotationNode.md) annotation) |             |
| public abstract void                                                                                                                                        | [setHasDocumentedAnnotation](#sethasdocumentedannotation)(boolean b)                                        |             |

## Method Details

### getAppliedAnnotations

<span style="font-family: monospace; font-size: 80%;">public abstract [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[AppliedAnnotationNode](AppliedAnnotationNode.md)> __getAppliedAnnotations__</span>




---

### getSimpleName

<span style="font-family: monospace; font-size: 80%;">public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSimpleName__</span>




---

### getModifiersString

<span style="font-family: monospace; font-size: 80%;">public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModifiersString__</span>




---

### getKind

<span style="font-family: monospace; font-size: 80%;">public abstract [Node.Kind](Node.Kind.md) __getKind__</span>




---

### addAppliedAnnotation

<span style="font-family: monospace; font-size: 80%;">public abstract void __addAppliedAnnotation__</span>




---

### setHasDocumentedAnnotation

<span style="font-family: monospace; font-size: 80%;">public abstract void __setHasDocumentedAnnotation__</span>




---

