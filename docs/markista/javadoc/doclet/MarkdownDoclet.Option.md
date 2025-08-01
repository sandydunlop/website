Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet.Option
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.MarkdownDoclet.Option<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)

Enclosing Class:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[MarkdownDoclet](MarkdownDoclet.md)


----

A base class for declaring options.
Subtypes for specific options should implement
the [Doclet.Option.process(java.lang.String,java.util.List)](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html#process(java.lang.String,java.util.List)) method
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

| Modifier and Type                                                                                                                                                                            | Method                                  | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| int                                                                                                                                                                                          | [getArgumentCount](#getargumentcount)() |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getDescription](#getdescription)()     |             |
| [Doclet.Option.Kind](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.Kind.html)                                                              | [getKind](#getkind)()                   |             |
| [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [getNames](#getnames)()                 |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [getParameters](#getparameters)()       |             |

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

int getArgumentCount()



**Specified By:**

[jdk.javadoc.doclet.Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

### getDescription

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDescription()



**Specified By:**

[jdk.javadoc.doclet.Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

### getKind

[Doclet.Option.Kind](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.Kind.html) getKind()



**Specified By:**

[jdk.javadoc.doclet.Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

### getNames

[List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; getNames()



**Specified By:**

[jdk.javadoc.doclet.Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

### getParameters

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getParameters()



**Specified By:**

[jdk.javadoc.doclet.Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)


---

