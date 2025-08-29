Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.doclet.MarkdownDoclet<br/>
<br/>
All Implemented Interfaces:<br/>
    [Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


----

<span style="font-family: monospace; font-size: 80%;">public class __MarkdownDoclet__</span>

A doclet that renders javadoc comments as Markdown.

For more information, see the [Markista homepage](https://sandydunlop.github.io/markista).


## Nested Class Summary

| Modifier and Type | Class                                             | Description                         |
|-------------------|---------------------------------------------------|-------------------------------------|
| public abstract   | [MarkdownDoclet.Option](MarkdownDoclet.Option.md) | A base class for declaring options. |



## Field Summary

| Modifier and Type                                                                                                                                                                             | Field                                                   | Description                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final boolean                                                                                                                                                                  | [FAILED](#failed)                                       | Indicates failure                                                                                                                                                                     |
| public static final boolean                                                                                                                                                                   | [OK](#ok)                                               | Indicates success                                                                                                                                                                     |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                                             | [UNUSED_OPTION_DESCRIPTION](#unused_option_description) |                                                                                                                                                                                       |
| private [Context](../core/Context.md)                                                                                                                                                         | [ctx](#ctx)                                             | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[]                                                                                         | [docletArgs](#docletargs)                               |                                                                                                                                                                                       |
| static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> | [javadocArgs](#javadocargs)                             |                                                                                                                                                                                       |
| private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[MarkdownDoclet.Option](MarkdownDoclet.Option.md)>                                       | [options](#options)                                     |                                                                                                                                                                                       |



## Constructor Summary

| Constructor      | Description                            |
|------------------|----------------------------------------|
| MarkdownDoclet() | The default constructor, does nothing. |



## Method Summary

| Modifier and Type                                                                                                                                          | Method                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| public static void                                                                                                                                         | [readJavadocOptions](#readjavadocoptions)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) optionsPath)                                                                                                                                                                                                                                                                            | Reads a javadoc.options file containing command line arguments for Javadoc.     |
| public static void                                                                                                                                         | [main](#main)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] args)                                                                                                                                                                                                                                                                                                             | The starting point of Markista if it is being used without the Javadoc command. |
| public void                                                                                                                                                | [init](#init)([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)                                                                                                                                                                                       | Initializes the doclet.                                                         |
| public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                        | [getName](#getname)()                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                 |
| public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)> | [getSupportedOptions](#getsupportedoptions)()                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                 |
| public [SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html)                               | [getSupportedSourceVersion](#getsupportedsourceversion)()                                                                                                                                                                                                                                                                                                                                                                      |                                                                                 |
| public boolean                                                                                                                                             | [run](#run)([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)                                                                                                                                                                                                                                                                         | The `run` method is called by the Javadoc tool to begin running the doclet.     |
| [DocService](../spi/DocService.md)                                                                                                                         | [getMainServiceAndExtensions](#getmainserviceandextensions)([ServiceLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ServiceLoader.html)<[DocService](../spi/DocService.md)> loader, [DocService](../spi/DocService.md) defaultDocService, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DocService](../spi/DocService.md)> orderedExtensions)       | Populates the list of extensions and determines the main DocService.            |
| private [DocService](../spi/DocService.md)                                                                                                                 | [populateExtensionsWithOrder](#populateextensionswithorder)([ServiceLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ServiceLoader.html)<[DocService](../spi/DocService.md)> loader, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DocService](../spi/DocService.md)> orderedExtensions, [DocService](../spi/DocService.md) defaultDocService)       |                                                                                 |
| private [DocService](../spi/DocService.md)                                                                                                                 | [populateExtensionsWithoutOrder](#populateextensionswithoutorder)([ServiceLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ServiceLoader.html)<[DocService](../spi/DocService.md)> loader, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DocService](../spi/DocService.md)> orderedExtensions, [DocService](../spi/DocService.md) defaultDocService) |                                                                                 |
| private void                                                                                                                                               | [addExtensionToMap](#addextensiontomap)([HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [DocService](../spi/DocService.md)> extensions, [DocService](../spi/DocService.md) extension)                                                                                             |                                                                                 |
| private [DocService](../spi/DocService.md)                                                                                                                 | [handleExtension](#handleextension)([DocService](../spi/DocService.md) mainDocService, [DocService](../spi/DocService.md) defaultDocService, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DocService](../spi/DocService.md)> orderedExtensions, [DocService](../spi/DocService.md) extension)                                                                                     |                                                                                 |



## Field Details

### FAILED

<span style="font-family: monospace; font-size: 80%;">private static final boolean __FAILED__</span>

Indicates failure

**See Also:**


[Constant Field Values](../constant-values.md)



---

### OK

<span style="font-family: monospace; font-size: 80%;">public static final boolean __OK__</span>

Indicates success

**See Also:**


[Constant Field Values](../constant-values.md)



---

### UNUSED_OPTION_DESCRIPTION

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __UNUSED_OPTION_DESCRIPTION__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### ctx

<span style="font-family: monospace; font-size: 80%;">private [Context](../core/Context.md) __ctx__</span>

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.


---

### docletArgs

<span style="font-family: monospace; font-size: 80%;">static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] __docletArgs__</span>




---

### javadocArgs

<span style="font-family: monospace; font-size: 80%;">static [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)> __javadocArgs__</span>




---

### options

<span style="font-family: monospace; font-size: 80%;">private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<[MarkdownDoclet.Option](MarkdownDoclet.Option.md)> __options__</span>




---


## Method Details

### readJavadocOptions

<span style="font-family: monospace; font-size: 80%;">public static void __readJavadocOptions__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) optionsPath)</span>

Reads a javadoc.options file containing command line arguments for Javadoc.


---

### main

<span style="font-family: monospace; font-size: 80%;">public static void __main__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)[] args)</span>

The starting point of Markista if it is being used
without the Javadoc command. This is useful for debugging.


---

### init

<span style="font-family: monospace; font-size: 80%;">public void __init__([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)</span>

Initializes the doclet.


---

### getName

<span style="font-family: monospace; font-size: 80%;">public [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __getName__()</span>



**Specified By:**

[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### getSupportedOptions

<span style="font-family: monospace; font-size: 80%;">public [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)<? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)> __getSupportedOptions__()</span>



**Specified By:**

[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### getSupportedSourceVersion

<span style="font-family: monospace; font-size: 80%;">public [SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html) __getSupportedSourceVersion__()</span>



**Specified By:**

[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


---

### run

<span style="font-family: monospace; font-size: 80%;">public boolean __run__([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)</span>

The `run` method is called by the Javadoc tool to begin running the doclet.

**Returns:**

true if completed without errors, false if errors occurred.


---

### getMainServiceAndExtensions

<span style="font-family: monospace; font-size: 80%;">[DocService](../spi/DocService.md) __getMainServiceAndExtensions__([ServiceLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ServiceLoader.html)<[DocService](../spi/DocService.md)> loader, [DocService](../spi/DocService.md) defaultDocService, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DocService](../spi/DocService.md)> orderedExtensions)</span>

Populates the list of extensions and determines the main DocService.

**Returns:**

The DocService that is expected to output the main documentation files. Null if loading extensions failed.


---

### populateExtensionsWithOrder

<span style="font-family: monospace; font-size: 80%;">private [DocService](../spi/DocService.md) __populateExtensionsWithOrder__([ServiceLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ServiceLoader.html)<[DocService](../spi/DocService.md)> loader, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DocService](../spi/DocService.md)> orderedExtensions, [DocService](../spi/DocService.md) defaultDocService)</span>




---

### populateExtensionsWithoutOrder

<span style="font-family: monospace; font-size: 80%;">private [DocService](../spi/DocService.md) __populateExtensionsWithoutOrder__([ServiceLoader](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/ServiceLoader.html)<[DocService](../spi/DocService.md)> loader, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DocService](../spi/DocService.md)> orderedExtensions, [DocService](../spi/DocService.md) defaultDocService)</span>




---

### addExtensionToMap

<span style="font-family: monospace; font-size: 80%;">private void __addExtensionToMap__([HashMap](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/HashMap.html)<[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html), [DocService](../spi/DocService.md)> extensions, [DocService](../spi/DocService.md) extension)</span>




---

### handleExtension

<span style="font-family: monospace; font-size: 80%;">private [DocService](../spi/DocService.md) __handleExtension__([DocService](../spi/DocService.md) mainDocService, [DocService](../spi/DocService.md) defaultDocService, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DocService](../spi/DocService.md)> orderedExtensions, [DocService](../spi/DocService.md) extension)</span>




---

