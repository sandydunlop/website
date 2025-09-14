Package [io.github.sandydunlop.markista.model](index.md)

# Class Name
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.model.Name<br/>
<br/>
All Implemented Interfaces:<br/>
    [java.io.Serializable](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Serializable.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __Name__</span>

See Java Language Specification (JLS) [Chapter 6. Names](https://docs.oracle.com/javase/specs/jls/se24/html/jls-6.html).


## Field Summary

| Modifier and Type                                                                                      | Field                                           | Description |
|--------------------------------------------------------------------------------------------------------|-------------------------------------------------|-------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] | [components](#components)                       |             |
| boolean                                                                                                | [isMember](#ismember)                           |             |
| boolean                                                                                                | [isPackage](#ispackage)                         |             |
| boolean                                                                                                | [isType](#istype)                               |             |
| int                                                                                                    | [packageComponentCount](#packagecomponentcount) |             |
| private static final long                                                                              | [serialVersionUID](#serialversionuid)           |             |



## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                              | Description        |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| Name()                                                                                                                                                                                                                                                                                                   | Represents a name. |
| Name([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) n)                                                                                                                                                                                                     |                    |
| Name([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fqn, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) pn)                                                                                                  |                    |
| Name([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) mn, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) fqn, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) pn) |                    |
| Name([Name](Name.md) n)                                                                                                                                                                                                                                                                                  |                    |



## Method Summary

| Modifier and Type                                                                                      | Method                                                                                                                                  | Description |
|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------|
| private static void                                                                                    | [validateName](#validatename)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)        |             |
| public void                                                                                            | [setIsPackage](#setispackage)(boolean b)                                                                                                |             |
| public boolean                                                                                         | [isPackage](#ispackage)()                                                                                                               |             |
| public void                                                                                            | [setIsType](#setistype)(boolean b)                                                                                                      |             |
| public boolean                                                                                         | [isType](#istype)()                                                                                                                     |             |
| public void                                                                                            | [setIsMember](#setismember)(boolean b)                                                                                                  |             |
| public boolean                                                                                         | [isMember](#ismember)()                                                                                                                 |             |
| public boolean                                                                                         | [isEmpty](#isempty)()                                                                                                                   |             |
| public void                                                                                            | [setPackageComponentCount](#setpackagecomponentcount)(int n)                                                                            |             |
| public int                                                                                             | [packageComponentCount](#packagecomponentcount)()                                                                                       |             |
| public [Name](Name.md)                                                                                 | [packageName](#packagename)()                                                                                                           |             |
| public [Name](Name.md)                                                                                 | [typeName](#typename)()                                                                                                                 |             |
| public [Name](Name.md)                                                                                 | [memberName](#membername)()                                                                                                             |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)    | [fullyQualifiedName](#fullyqualifiedname)()                                                                                             |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)    | [simpleName](#simplename)()                                                                                                             |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)    | [fullyQualifiedBinaryName](#fullyqualifiedbinaryname)()                                                                                 |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)    | [simpleBinaryName](#simplebinaryname)()                                                                                                 |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)    | [toString](#tostring)()                                                                                                                 |             |
| public int                                                                                             | [componentCount](#componentcount)()                                                                                                     |             |
| public int                                                                                             | [commonComponentCount](#commoncomponentcount)([Name](Name.md) n)                                                                        |             |
| public [Name](Name.md)                                                                                 | [firstComponents](#firstcomponents)(int n)                                                                                              |             |
| public [Name](Name.md)                                                                                 | [lastComponents](#lastcomponents)(int n)                                                                                                |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] | [extractComponents](#extractcomponents)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s) |             |



## Field Details

### components

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] __components__</span>




---

### isMember

<span style="font-family: monospace; font-size: 80%;">boolean __isMember__</span>




---

### isPackage

<span style="font-family: monospace; font-size: 80%;">boolean __isPackage__</span>




---

### isType

<span style="font-family: monospace; font-size: 80%;">boolean __isType__</span>




---

### packageComponentCount

<span style="font-family: monospace; font-size: 80%;">int __packageComponentCount__</span>




---

### serialVersionUID

<span style="font-family: monospace; font-size: 80%;">private static final long __serialVersionUID__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---


## Method Details

### validateName

<span style="font-family: monospace; font-size: 80%;">private static void __validateName__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name)</span>




---

### setIsPackage

<span style="font-family: monospace; font-size: 80%;">public void __setIsPackage__(boolean b)</span>




---

### isPackage

<span style="font-family: monospace; font-size: 80%;">public boolean __isPackage__()</span>




---

### setIsType

<span style="font-family: monospace; font-size: 80%;">public void __setIsType__(boolean b)</span>




---

### isType

<span style="font-family: monospace; font-size: 80%;">public boolean __isType__()</span>




---

### setIsMember

<span style="font-family: monospace; font-size: 80%;">public void __setIsMember__(boolean b)</span>




---

### isMember

<span style="font-family: monospace; font-size: 80%;">public boolean __isMember__()</span>




---

### isEmpty

<span style="font-family: monospace; font-size: 80%;">public boolean __isEmpty__()</span>




---

### setPackageComponentCount

<span style="font-family: monospace; font-size: 80%;">public void __setPackageComponentCount__(int n)</span>




---

### packageComponentCount

<span style="font-family: monospace; font-size: 80%;">public int __packageComponentCount__()</span>




---

### packageName

<span style="font-family: monospace; font-size: 80%;">public [Name](Name.md) __packageName__()</span>




---

### typeName

<span style="font-family: monospace; font-size: 80%;">public [Name](Name.md) __typeName__()</span>




---

### memberName

<span style="font-family: monospace; font-size: 80%;">public [Name](Name.md) __memberName__()</span>




---

### fullyQualifiedName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullyQualifiedName__()</span>




---

### simpleName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simpleName__()</span>




---

### fullyQualifiedBinaryName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __fullyQualifiedBinaryName__()</span>




---

### simpleBinaryName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __simpleBinaryName__()</span>




---

### toString

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __toString__()</span>



**Overrides:**

[Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html#tostring)


---

### componentCount

<span style="font-family: monospace; font-size: 80%;">public int __componentCount__()</span>




---

### commonComponentCount

<span style="font-family: monospace; font-size: 80%;">public int __commonComponentCount__([Name](Name.md) n)</span>




---

### firstComponents

<span style="font-family: monospace; font-size: 80%;">public [Name](Name.md) __firstComponents__(int n)</span>




---

### lastComponents

<span style="font-family: monospace; font-size: 80%;">public [Name](Name.md) __lastComponents__(int n)</span>




---

### extractComponents

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] __extractComponents__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) s)</span>




---

