Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet.Option
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.doclet.MarkdownDoclet.Option<br/>
<br/>
All Implemented Interfaces:<br/>
    [Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)

Enclosing Class:<br/>
    [io.github.sandydunlop.markista.doclet.MarkdownDoclet](MarkdownDoclet.md)


----

<span style="font-family: monospace; font-size: 80%;">public abstract class __MarkdownDoclet.Option__</span>

A base class for declaring options.
Subtypes for specific options should implement
the [process](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option#process(java.lang.String,java.util.List).html) method
to handle instances of the option found on the
command line.


## Field Summary

| Modifier and Type                                                                                          | Field                       | Description |
|------------------------------------------------------------------------------------------------------------|-----------------------------|-------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [description](#description) |             |
| private final boolean                                                                                      | [hasArg](#hasarg)           |             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [name](#name)               |             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [parameters](#parameters)   |             |



## Constructor Summary

| Constructor                                                                                                                                                                                                                                                                                                                                                 | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| MarkdownDoclet.Option([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) name, boolean hasArg, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) description, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) parameters) |             |



## Method Summary

| Modifier and Type                                                                                                                                                                             | Method                                  | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| public int                                                                                                                                                                                    | [getArgumentCount](#getargumentcount)() |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                           | [getDescription](#getdescription)()     |             |
| public [Doclet.Option.Kind](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.Kind.html)                                                        | [getKind](#getkind)()                   |             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [getNames](#getnames)()                 |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                           | [getParameters](#getparameters)()       |             |



## Field Details

### description

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __description__</span>




---

### hasArg

<span style="font-family: monospace; font-size: 80%;">private final boolean __hasArg__</span>




---

### name

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __name__</span>




---

### parameters

<span style="font-family: monospace; font-size: 80%;">private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __parameters__</span>




---


## Method Details

### getArgumentCount

<span style="font-family: monospace; font-size: 80%;">public int __getArgumentCount__()</span>




---

### getDescription

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getDescription__()</span>




---

### getKind

<span style="font-family: monospace; font-size: 80%;">public [Doclet.Option.Kind](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.Kind.html) __getKind__()</span>




---

### getNames

<span style="font-family: monospace; font-size: 80%;">public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __getNames__()</span>




---

### getParameters

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getParameters__()</span>




---

