Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.doclet.MarkdownDoclet<br/>
<br/>
All Implemented Interfaces:<br/>
    [jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


----

<span style="font-family: monospace;">public class __MarkdownDoclet__</span>

A doclet that renders javadoc comments as Markdown


## Nested Class Summary

| Modifier and Type | Class                                             | Description                         |
|-------------------|---------------------------------------------------|-------------------------------------|
| public abstract   | [MarkdownDoclet.Option](MarkdownDoclet.Option.md) | A base class for declaring options. |

## Field Summary

| Modifier and Type           | Field     | Description       |
|-----------------------------|-----------|-------------------|
| public static final boolean | [OK](#ok) | Indicates success |

## Constructor Summary

| Constructor      | Description                            |
|------------------|----------------------------------------|
| MarkdownDoclet() | The default constructor, does nothing. |

## Method Summary

| Modifier and Type                                                                                                                                          | Method                                                                                                                                                                                                                                   | Description                                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| public static void                                                                                                                                         | [readJavadocOptions](#readjavadocoptions)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) optionsPath)                                                                                      | Reads a javadoc.options file containing command line arguments for Javadoc.     |
| public static void                                                                                                                                         | [main](#main)([String\](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String\.html)[] args)                                                                                                                     | The starting point of Markista if it is being used without the Javadoc command. |
| public void                                                                                                                                                | [init](#init)([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter) | Initializes the doclet.                                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                        | [getName](#getname)()                                                                                                                                                                                                                    |                                                                                 |
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)> | [getSupportedOptions](#getsupportedoptions)()                                                                                                                                                                                            |                                                                                 |
| public [SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html)                               | [getSupportedSourceVersion](#getsupportedsourceversion)()                                                                                                                                                                                |                                                                                 |
| public boolean                                                                                                                                             | [run](#run)([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)                                                                                   | The `run` method is called by the Javadoc tool to begin running the doclet.     |

## Field Details

### OK

Indicates success

**See Also:**


[Constant Field Values](../constant-values.md)



---


## Method Details

### readJavadocOptions

public static void readJavadocOptions([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) optionsPath)

Reads a javadoc.options file containing command line arguments for Javadoc.


---

### main

public static void main([String\](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String\.html)[] args)

The starting point of Markista if it is being used
without the Javadoc command. This is useful for debugging.


---

### init

public void init([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)

Initializes the doclet.


---

### getName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()




---

### getSupportedOptions

public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)> getSupportedOptions()




---

### getSupportedSourceVersion

public [SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html) getSupportedSourceVersion()




---

### run

public boolean run([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)

The `run` method is called by the Javadoc tool to begin running the doclet.

**Returns:**

true if completed without errors, false if errors occurred.


---

