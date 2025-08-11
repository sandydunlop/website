Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.doclet.MarkdownDoclet<br/>
<br/>
All Implemented Interfaces:<br/>
    [jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


----

<span style="font-family: monospace;">public Class __MarkdownDoclet__</span>

A doclet that renders javadoc comments as Markdown


## Nested Class Summary

| Modifier and Type | Class                                             | Description                         |
|-------------------|---------------------------------------------------|-------------------------------------|
| public abstract   | [MarkdownDoclet.Option](MarkdownDoclet.Option.md) | A base class for declaring options. |

## Field Summary

| Modifier and Type                                                                                                                                                                                   | Field                                                   | Description                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private [Context](../util/Context.md)                                                                                                                                                               | [ctx](#ctx)                                             | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| public static final boolean                                                                                                                                                                         | [OK](#ok)                                               | Indicates success                                                                                                                                                                     |
| private static final boolean                                                                                                                                                                        | [FAILED](#failed)                                       | Indicates failure                                                                                                                                                                     |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[]                                                                                               | [docletArgs](#docletargs)                               |                                                                                                                                                                                       |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [javadocArgs](#javadocargs)                             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                   | [UNUSED_OPTION_DESCRIPTION](#unused_option_description) |                                                                                                                                                                                       |
| private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt;                                       | [options](#options)                                     |                                                                                                                                                                                       |

## Constructor Summary

| Constructor      | Description                            |
|------------------|----------------------------------------|
| MarkdownDoclet() | The default constructor, does nothing. |

## Method Summary

| Modifier and Type                                                                                                                                                | Method                                                                                                                                                                                                                                   | Description                                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| public static void                                                                                                                                               | [readJavadocOptions](#readjavadocoptions)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) optionsPath)                                                                                      | Reads a javadoc.options file containing command line arguments for Javadoc.     |
| public static void                                                                                                                                               | [main](#main)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] args)                                                                                                                      | The starting point of Markista if it is being used without the Javadoc command. |
| public void                                                                                                                                                      | [init](#init)([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter) | Initializes the doclet.                                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                              | [getName](#getname)()                                                                                                                                                                                                                    |                                                                                 |
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt; | [getSupportedOptions](#getsupportedoptions)()                                                                                                                                                                                            |                                                                                 |
| public [SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html)                                     | [getSupportedSourceVersion](#getsupportedsourceversion)()                                                                                                                                                                                |                                                                                 |
| public boolean                                                                                                                                                   | [run](#run)([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)                                                                                   | The `run` method is called by the Javadoc tool to begin running the doclet.     |

## Field Details

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---

### OK

Indicates success

**See Also:**


[Constant Field Values](../constant-values.md)



---

### FAILED

Indicates failure

**See Also:**


[Constant Field Values](../constant-values.md)



---

### docletArgs




---

### javadocArgs




---

### UNUSED_OPTION_DESCRIPTION



**See Also:**


[Constant Field Values](../constant-values.md)



---

### options




---


## Method Details

### readJavadocOptions

public static void readJavadocOptions([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) optionsPath)

Reads a javadoc.options file containing command line arguments for Javadoc.


---

### main

public static void main([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] args)

The starting point of Markista if it is being used
without the Javadoc command. This is useful for debugging.


---

### init

public void init([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)

Initializes the doclet.

**Specified By:**

[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### getName

public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()



**Specified By:**

[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### getSupportedOptions

public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt; getSupportedOptions()



**Specified By:**

[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### getSupportedSourceVersion

public [SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html) getSupportedSourceVersion()



**Specified By:**

[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### run

public boolean run([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)

The `run` method is called by the Javadoc tool to begin running the doclet.

**Returns:**

true if completed without errors, false if errors occurred.

**Specified By:**

[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

