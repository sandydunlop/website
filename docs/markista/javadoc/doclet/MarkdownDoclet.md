Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.doclet.MarkdownDoclet<br/>
<br/>
All Implemented Interfaces:<br/>
    [jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


----

A doclet that renders javadoc comments as Markdown


## Nested Class Summary

| Modifier and Type | Class                                             | Description                         |
|-------------------|---------------------------------------------------|-------------------------------------|
| abstract          | [MarkdownDoclet.Option](MarkdownDoclet.Option.md) | A base class for declaring options. |

## Field Summary

| Modifier and Type                                                                                                                                                                                   | Field                                                   | Description                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private [Context](../util/Context.md)                                                                                                                                                               | [ctx](#ctx)                                             | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| static final boolean                                                                                                                                                                                | [OK](#ok)                                               | Indicates success                                                                                                                                                                     |
| private static final boolean                                                                                                                                                                        | [FAILED](#failed)                                       | Indicates failure                                                                                                                                                                     |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                                 | [docletArgs](#docletargs)                               |                                                                                                                                                                                       |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)&lt;[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)&gt; | [javadocArgs](#javadocargs)                             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                                   | [UNUSED_OPTION_DESCRIPTION](#unused_option_description) |                                                                                                                                                                                       |
| private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt;                                       | [options](#options)                                     |                                                                                                                                                                                       |

## Constructor Summary

| Constructor      | Description                            |
|------------------|----------------------------------------|
| MarkdownDoclet() | The default constructor, does nothing. |

## Method Summary

| Modifier and Type                                                                                                                                         | Method                                                                                                                                                                                                                                   | Description                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| static void                                                                                                                                               | [readJavadocOptions](#readjavadocoptions)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) optionsPath)                                                                                      |                                                                                 |
| static void                                                                                                                                               | [main](#main)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] args)                                                                                                                      | The starting point of Markista if it is being used without the Javadoc command. |
| void                                                                                                                                                      | [init](#init)([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter) | Initializes the doclet.                                                         |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                              | [getName](#getname)()                                                                                                                                                                                                                    |                                                                                 |
| [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt; | [getSupportedOptions](#getsupportedoptions)()                                                                                                                                                                                            |                                                                                 |
| [SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html)                                     | [getSupportedSourceVersion](#getsupportedsourceversion)()                                                                                                                                                                                |                                                                                 |
| boolean                                                                                                                                                   | [run](#run)([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)                                                                                   | The `run` method is called by the Javadoc tool to begin running the doclet.     |

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

static void readJavadocOptions([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) optionsPath)




---

### main

static void main([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] args)

The starting point of Markista if it is being used
without the Javadoc command. This is useful for debugging.

**Parameters:**

`args` - this parameter is ignored.


---

### init

void init([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)

Initializes the doclet.

**Parameters:**

`locale` - The locale used for messages

`reporter` - The reporter used for messages

**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()



**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### getSupportedOptions

[Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt; getSupportedOptions()



**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### getSupportedSourceVersion

[SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html) getSupportedSourceVersion()



**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### run

boolean run([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)

The `run` method is called by the Javadoc tool to begin running the doclet.

**Parameters:**

`environment` - Represents the operating environment of a single invocation of the doclet.

**Returns:**

true if completed without errors, false if errors occurred.

**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

