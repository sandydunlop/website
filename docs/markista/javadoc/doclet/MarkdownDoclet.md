Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.MarkdownDoclet<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)


----


## Nested Class Summary

| Modifier and Type | Class                                             | Description                         |
|-------------------|---------------------------------------------------|-------------------------------------|
| abstract          | [MarkdownDoclet.Option](MarkdownDoclet.Option.md) | A base class for declaring options. |

## Field Summary

| Modifier and Type                                                                                                                                             | Field                                                   | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|-------------|
| private static final boolean                                                                                                                                  | [OK](#ok)                                               |             |
| private static final boolean                                                                                                                                  | [FAILED](#failed)                                       |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                             | [DOT_HTML](#dot_html)                                   |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                             | [JAVA_24_URL](#java_24_url)                             |             |
| private [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html)                                           | [reporter](#reporter)                                   |             |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                          | [outputDirectory](#outputdirectory)                     |             |
| private boolean                                                                                                                                               | [documentPrivateMembers](#documentprivatemembers)       |             |
| private boolean                                                                                                                                               | [createExternalLinks](#createexternallinks)             |             |
| private boolean                                                                                                                                               | [squashEmptyDirectories](#squashemptydirectories)       |             |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                             | [UNUSED_OPTION_DESCRIPTION](#unused_option_description) |             |
| private final [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;[MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt; | [options](#options)                                     |             |

## Constructor Summary

| Constructor      | Description                            |
|------------------|----------------------------------------|
| MarkdownDoclet() | The default constructor, does nothing. |

## Method Summary

| Modifier and Type                                                                                                                                         | Method                                                                                                                                                                                                                                   | Description                                                                      |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| static void                                                                                                                                               | [main](#main)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] args)                                                                                                                      | The starting point of Markista if it is being used withiout the Javadoc command. |
| void                                                                                                                                                      | [init](#init)([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter) | Initializes the doclet.                                                          |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)                                                              | [getName](#getname)()                                                                                                                                                                                                                    |                                                                                  |
| [Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt; | [getSupportedOptions](#getsupportedoptions)()                                                                                                                                                                                            |                                                                                  |
| [SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html)                                     | [getSupportedSourceVersion](#getsupportedsourceversion)()                                                                                                                                                                                |                                                                                  |
| boolean                                                                                                                                                   | [run](#run)([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)                                                                                   |                                                                                  |
| private void                                                                                                                                              | [addNativeModule](#addnativemodule)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)                                                                                             |                                                                                  |

## Field Details

### OK



**See Also:**


[Constant Field Values](../constant-values.md)


### FAILED



**See Also:**


[Constant Field Values](../constant-values.md)


### DOT_HTML



**See Also:**


[Constant Field Values](../constant-values.md)


### JAVA_24_URL



**See Also:**


[Constant Field Values](../constant-values.md)


### reporter



### outputDirectory



### documentPrivateMembers



### createExternalLinks



### squashEmptyDirectories



### UNUSED_OPTION_DESCRIPTION



**See Also:**


[Constant Field Values](../constant-values.md)


### options




## Method Details

### main

static void main([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)\[] args)

The starting point of Markista if it is being used
withiout the Javadoc command. This is useful for debugging.

**Parameters:**

`args` - this parameter is ignored.

### init

void init([Locale](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Locale.html) locale, [Reporter](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Reporter.html) reporter)

Initializes the doclet.

**Parameters:**

`locale` - The locale used for messages

`reporter` - The reporter used for messages

**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)

### getName

[String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) getName()



**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)

### getSupportedOptions

[Set](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/Set.html)&lt;? extends [MarkdownDoclet.Option](MarkdownDoclet.Option.md)&gt; getSupportedOptions()



**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)

### getSupportedSourceVersion

[SourceVersion](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/SourceVersion.html) getSupportedSourceVersion()



**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)

### run

boolean run([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) environment)



**Parameters:**

`environment` - Represents the operating environment of a single invocation of the doclet.

**Returns:**

true if completed without errors, false if errors occurred.

**Specified By:**

[jdk.javadoc.doclet.Doclet](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/Doclet.html)

### addNativeModule

private void addNativeModule([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) moduleName)



