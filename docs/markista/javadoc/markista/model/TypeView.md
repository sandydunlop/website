Package [io.github.sandydunlop.markista.model](index.md)

# Interface TypeView
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.TypeView<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public interface __TypeView__</span>

Minimal view of a type used by PackageOrTypeNode.
Does not reference TypeNode to avoid cycles.


## Method Summary

| Modifier and Type                                                                                            | Method                                      | Description |
|--------------------------------------------------------------------------------------------------------------|---------------------------------------------|-------------|
| public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getQualifiedName](#getqualifiedname)()     |             |
| public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getSimpleName](#getsimplename)()           |             |
| public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getModifiersString](#getmodifiersstring)() |             |
| public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getKindName](#getkindname)()               |             |
| public abstract [Text](Text.md)                                                                              | [getFirstSentence](#getfirstsentence)()     |             |
| public abstract void                                                                                         | [sort](#sort)()                             |             |
| public abstract boolean                                                                                      | [isClass](#isclass)()                       |             |
| public abstract boolean                                                                                      | [isInterface](#isinterface)()               |             |
| public abstract boolean                                                                                      | [isEnum](#isenum)()                         |             |
| public abstract boolean                                                                                      | [isRecord](#isrecord)()                     |             |
| public abstract boolean                                                                                      | [isAnnotation](#isannotation)()             |             |



## Method Details

### getQualifiedName

<span style="font-family: monospace; font-size: 80%;">public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getQualifiedName__()</span>




---

### getSimpleName

<span style="font-family: monospace; font-size: 80%;">public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getSimpleName__()</span>




---

### getModifiersString

<span style="font-family: monospace; font-size: 80%;">public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getModifiersString__()</span>




---

### getKindName

<span style="font-family: monospace; font-size: 80%;">public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getKindName__()</span>




---

### getFirstSentence

<span style="font-family: monospace; font-size: 80%;">public abstract [Text](Text.md) __getFirstSentence__()</span>




---

### sort

<span style="font-family: monospace; font-size: 80%;">public abstract void __sort__()</span>




---

### isClass

<span style="font-family: monospace; font-size: 80%;">public abstract boolean __isClass__()</span>




---

### isInterface

<span style="font-family: monospace; font-size: 80%;">public abstract boolean __isInterface__()</span>




---

### isEnum

<span style="font-family: monospace; font-size: 80%;">public abstract boolean __isEnum__()</span>




---

### isRecord

<span style="font-family: monospace; font-size: 80%;">public abstract boolean __isRecord__()</span>




---

### isAnnotation

<span style="font-family: monospace; font-size: 80%;">public abstract boolean __isAnnotation__()</span>




---

