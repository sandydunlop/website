Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet.Option
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.doclet.MarkdownDoclet.Option<br/>
<br/>
All Implemented Interfaces:<br/>
    [jdk.javadoc.doclet.Doclet.Option](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.html)

Enclosing Class:<br/>
    [io.github.sandydunlop.markista.doclet.MarkdownDoclet](MarkdownDoclet.md)


----

<span style="font-family: monospace;">public abstract class __MarkdownDoclet.Option__</span>

A base class for declaring options.
Subtypes for specific options should implement
the [process](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option#process(java.lang.String,java.util.List).html) method
to handle instances of the option found on the
command line.


## Method Summary

| Modifier and Type                                                                                                                                                                             | Method                                  | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| public int                                                                                                                                                                                    | [getArgumentCount](#getargumentcount)() |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                           | [getDescription](#getdescription)()     |             |
| public [Doclet.Option.Kind](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.Kind.html)                                                        | [getKind](#getkind)()                   |             |
| public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [getNames](#getnames)()                 |             |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                           | [getParameters](#getparameters)()       |             |

## Method Details

### getArgumentCount

public int getArgumentCount()




---

### getDescription

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getDescription()




---

### getKind

public [Doclet.Option.Kind](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.Option.Kind.html) getKind()




---

### getNames

public [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> getNames()




---

### getParameters

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getParameters()




---

