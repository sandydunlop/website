Package [io.github.sandydunlop.markista.model](index.md)

# Interface TypeView
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.TypeView<br/>
<br/>

----

<span style="font-family: monospace;">public interface __TypeView__</span>

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

public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getQualifiedName()




---

### getSimpleName

public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getSimpleName()




---

### getModifiersString

public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getModifiersString()




---

### getKindName

public abstract [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getKindName()




---

### getFirstSentence

public abstract [Text](Text.md) getFirstSentence()




---

### sort

public abstract void sort()




---

### isClass

public abstract boolean isClass()




---

### isInterface

public abstract boolean isInterface()




---

### isEnum

public abstract boolean isEnum()




---

### isRecord

public abstract boolean isRecord()




---

### isAnnotation

public abstract boolean isAnnotation()




---

