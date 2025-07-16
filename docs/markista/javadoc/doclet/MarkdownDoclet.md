Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.MarkdownDoclet<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Doclet


----


## Nested Class Summary

| Modifier and Type | Class                                             | Description                         |
|-------------------|---------------------------------------------------|-------------------------------------|
| abstract          | [MarkdownDoclet.Option](MarkdownDoclet.Option.md) | A base class for declaring options. |

## Field Summary

| Modifier and Type                                                                                    | Field                  | Description |
|------------------------------------------------------------------------------------------------------|------------------------|-------------|
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | outputDirectory        |             |
| private final Set&lt;MarkdownDoclet.Option&gt;                                                       | options                |             |
| private boolean                                                                                      | documentPrivateMembers |             |
| private boolean                                                                                      | createExternalLinks    |             |
| private static final boolean                                                                         | OK                     |             |
| private static final boolean                                                                         | FAILED                 |             |

## Constructor Summary

| Constructor      | Description                            |
|------------------|----------------------------------------|
| MarkdownDoclet() | The default constructor, does nothing. |

## Method Summary

| Modifier and Type                                                                            | Method                                                    | Description             |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------|-------------------------|
| boolean                                                                                      | [run](#run)(DocletEnvironment environment)                | []                      |
| static void                                                                                  | [main](#main)(String[] args)                              |                         |
| void                                                                                         | [init](#init)(Locale locale, Reporter reporter)           | Initializes the doclet. |
| SourceVersion                                                                                | [getSupportedSourceVersion](#getsupportedsourceversion)() |                         |
| Set&lt;? extends MarkdownDoclet.Option&gt;                                                   | [getSupportedOptions](#getsupportedoptions)()             |                         |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getName](#getname)()                                     |                         |

## Method Details

### run

`boolean run(DocletEnvironment environment)`

[]

Returns:

[true if completed without errors, false if errors occurred.]

### main

`static void main(String[] args)`



### init

`void init(Locale locale, Reporter reporter)`



### getSupportedSourceVersion

`SourceVersion getSupportedSourceVersion()`



### getSupportedOptions

`Set<? extends MarkdownDoclet.Option> getSupportedOptions()`



### getName

`String getName()`



