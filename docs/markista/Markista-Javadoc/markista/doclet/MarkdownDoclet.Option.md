Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet.Option
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.doclet.MarkdownDoclet.Option<br/>
<br/>
All Implemented Interfaces:<br/>
    [jdk.javadoc.doclet.Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)

Enclosing Class:<br/>
    [MarkdownDoclet](MarkdownDoclet.md)


----

<span style="font-family: monospace;">public abstract Class __MarkdownDoclet.Option__</span>

A base class for declaring options.
Subtypes for specific options should implement
the [process](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option#process(java.lang.String,java.util.List).html) method
to handle instances of the option found on the
command line.


## Field Summary

| Modifier and Type                                                                                          | Field                       | Description |
|------------------------------------------------------------------------------------------------------------|-----------------------------|-------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [name](#name)               |             |
| private final boolean                                                                                      | [hasArg](#hasarg)           |             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [description](#description) |             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [parameters](#parameters)   |             |

## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                                                                                 | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| MarkdownDoclet.Option([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, boolean hasArg, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) description, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) parameters) |             |

## Method Summary

| Modifier and Type                                                                                                                                                                                   | Method                                  | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| public int                                                                                                                                                                                          | [getArgumentCount](#getargumentcount)() |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getDescription](#getdescription)()     |             |
| public [Doclet.Option.Kind](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.Kind.html)                                                              | [getKind](#getkind)()                   |             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getNames](#getnames)()                 |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getParameters](#getparameters)()       |             |

## Field Details

### name




---

### hasArg




---

### description




---

### parameters




---


## Method Details

### getArgumentCount

public int getArgumentCount()



**Specified By:**

[Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

### getDescription

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDescription()



**Specified By:**

[Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

### getKind

public [Doclet.Option.Kind](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.Kind.html) getKind()



**Specified By:**

[Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

### getNames

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getNames()



**Specified By:**

[Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

### getParameters

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getParameters()



**Specified By:**

[Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

