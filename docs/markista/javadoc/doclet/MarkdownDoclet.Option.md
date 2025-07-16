Package [io.github.sandydunlop.markista.doclet](index.md)

# Class MarkdownDoclet.Option
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.doclet.MarkdownDoclet.Option<br/>
<br/>
All Implemented Interfaces:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Doclet.Option

Enclosing Class:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[MarkdownDoclet](MarkdownDoclet.md)


----

Subtypes for specific options should implement
the ,{@linkplain #process(String,List) process}, method
to handle instances of the option found on the
command line.


## Field Summary

| Modifier and Type                                                                                          | Field       | Description |
|------------------------------------------------------------------------------------------------------------|-------------|-------------|
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | parameters  |             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | name        |             |
| private final boolean                                                                                      | hasArg      |             |
| private final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | description |             |

## Constructor Summary

| Constructor                                                                               | Description |
|-------------------------------------------------------------------------------------------|-------------|
| MarkdownDoclet.Option(String name, boolean hasArg, String description, String parameters) |             |

## Method Summary

| Modifier and Type                                                                            | Method                                  | Description |
|----------------------------------------------------------------------------------------------|-----------------------------------------|-------------|
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getParameters](#getparameters)()       |             |
| List&lt;String&gt;                                                                           | [getNames](#getnames)()                 |             |
| Doclet.Option.Kind                                                                           | [getKind](#getkind)()                   |             |
| [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [getDescription](#getdescription)()     |             |
| int                                                                                          | [getArgumentCount](#getargumentcount)() |             |

## Method Details

### getParameters

`String getParameters()`



### getNames

`List<String> getNames()`



### getKind

`Doclet.Option.Kind getKind()`



### getDescription

`String getDescription()`



### getArgumentCount

`int getArgumentCount()`



