Package [io.github.sandydunlop.markista.markdown](index.md)

# Class ModuleWriter
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.markdown.ModuleWriter<br/>
<br/>

----

<span style="font-family: monospace; font-size: 80%;">public class __ModuleWriter__</span>

A class that outputs a module's API documentation as Markdown.


## Field Summary

| Modifier and Type                                                                                                 | Field                                                       | Description                                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_CONSTANT_FIELD](#title_constant_field)               |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_CONSTANT_FIELD_VALUES](#title_constant_field_values) |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_DESCRIPTION](#title_description)                     |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_EXPORTS](#title_exports)                             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_IMPLEMENTATIONS](#title_implementations)             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_INTERFACE](#title_interface)                         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_MODIFIER_AND_TYPE](#title_modifier_and_type)         |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_MODULE](#title_module)                               |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_OPENS](#title_opens)                                 |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PACKAGE](#title_package)                             |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PACKAGES](#title_packages)                           |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_PROVIDES](#title_provides)                           |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_REQUIRES](#title_requires)                           |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_USES](#title_uses)                                   |                                                                                                                                                                                       |
| private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [TITLE_VALUE](#title_value)                                 |                                                                                                                                                                                       |
| private [Api](../model/Api.md)                                                                                    | [api](#api)                                                 | The Api model representing the entire documented API structure, including modules, packages, types, and members used for cross-referencing and navigation.                            |
| private [Context](../core/Context.md)                                                                             | [ctx](#ctx)                                                 | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |
| private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html)                | [writer](#writer)                                           | The Writer used to output the generated markdown content for the current document.                                                                                                    |



## Constructor Summary

| Constructor                                         | Description                                                              |
|-----------------------------------------------------|--------------------------------------------------------------------------|
| ModuleWriter([Context](../core/Context.md) context) | Constructor that sets up the locations API documents will be written to. |



## Method Summary

| Modifier and Type                                                                                           | Method                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                               |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) | [escape](#escape)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                           |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [formatDirectivePackageDoc](#formatdirectivepackagedoc)([DirectiveNode](../model/DirectiveNode.md) directive)                                                                                                                                                                                                                                                                                             | Formats the first sentence of a [DirectiveNode](../model/DirectiveNode.md)'s documentation so that it uses only one line in the markdown output and links and code are rendered properly. |
| private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html)        | [multiLink](#multilink)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)> references)                                                                                                                                                                                                                                                    | Turns each member of a list of strings into a link to the documentation for the module, package, or type denoted by that list member.                                                     |
| private void                                                                                                | [outputConstantValues](#outputconstantvalues)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                            | Outputs the *Constant Field Values* page.                                                                                                                                                 |
| private void                                                                                                | [outputModuleDirectives](#outputmoduledirectives)([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) kind, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](../model/DirectiveNode.md)> directives) | Outputs the directives declared in a module's `module-info.java` file.                                                                                                                    |
| private void                                                                                                | [outputModuleDoc](#outputmoduledoc)([ModuleNode](../model/ModuleNode.md) moduleNode)                                                                                                                                                                                                                                                                                                                      | Outputs a single module's documentation as a Markdown file.                                                                                                                               |
| private void                                                                                                | [outputModuleProvidesDirectives](#outputmoduleprovidesdirectives)([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](../model/DirectiveNode.md)> directives)                                                                                                                                                                                        | Outputs the `provides` directives declared in a module's `module-info.java` file.                                                                                                         |
| public void                                                                                                 | [writeDocs](#writedocs)([Api](../model/Api.md) api)                                                                                                                                                                                                                                                                                                                                                       | Output the documentation files for the specified API                                                                                                                                      |



## Field Details

### TITLE_CONSTANT_FIELD

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_CONSTANT_FIELD__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_CONSTANT_FIELD_VALUES

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_CONSTANT_FIELD_VALUES__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_DESCRIPTION

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_DESCRIPTION__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_EXPORTS

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_EXPORTS__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_IMPLEMENTATIONS

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_IMPLEMENTATIONS__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_INTERFACE

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_INTERFACE__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_MODIFIER_AND_TYPE

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_MODIFIER_AND_TYPE__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_MODULE

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_MODULE__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_OPENS

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_OPENS__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_PACKAGE

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_PACKAGE__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_PACKAGES

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_PACKAGES__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_PROVIDES

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_PROVIDES__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_REQUIRES

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_REQUIRES__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_USES

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_USES__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### TITLE_VALUE

<span style="font-family: monospace; font-size: 80%;">private static final [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __TITLE_VALUE__</span>



**See Also:**


[Constant Field Values](../constant-values.md)



---

### api

<span style="font-family: monospace; font-size: 80%;">private [Api](../model/Api.md) __api__</span>

The Api model representing the entire documented API structure,
including modules, packages, types, and members used for cross-referencing and navigation.


---

### ctx

<span style="font-family: monospace; font-size: 80%;">private [Context](../core/Context.md) __ctx__</span>

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.
> **Warning**<br/>
Do not make this `final`. It will break tests with mocked [Context](../core/Context.md).


---

### writer

<span style="font-family: monospace; font-size: 80%;">private [Writer](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/Writer.html) __writer__</span>

The Writer used to output the generated markdown content for the current document.
It handles writing text to the appropriate output file or stream.


---


## Method Details

### escape

<span style="font-family: monospace; font-size: 80%;">private static [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __escape__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) text)</span>




---

### formatDirectivePackageDoc

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __formatDirectivePackageDoc__([DirectiveNode](../model/DirectiveNode.md) directive)</span>

Formats the first sentence of a [DirectiveNode](../model/DirectiveNode.md)'s documentation so
that it uses only one line in the markdown output and links and
code are rendered properly.


---

### multiLink

<span style="font-family: monospace; font-size: 80%;">private [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) __multiLink__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[Link](../model/Link.md)> references)</span>

Turns each member of a list of strings into a link to the documentation
for the module, package, or type denoted by that list member.


---

### outputConstantValues

<span style="font-family: monospace; font-size: 80%;">private void __outputConstantValues__([ModuleNode](../model/ModuleNode.md) moduleNode)</span>

Outputs the *Constant Field Values* page.

**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleDirectives

<span style="font-family: monospace; font-size: 80%;">private void __outputModuleDirectives__([String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) title, [String](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/String.html) kind, [List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](../model/DirectiveNode.md)> directives)</span>

Outputs the directives declared in a module's `module-info.java` file.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleDoc

<span style="font-family: monospace; font-size: 80%;">private void __outputModuleDoc__([ModuleNode](../model/ModuleNode.md) moduleNode)</span>

Outputs a single module's documentation as a Markdown file.
For each module, the documentation for each [package](../model/PackageNode.md) it contains
are then written.

**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### outputModuleProvidesDirectives

<span style="font-family: monospace; font-size: 80%;">private void __outputModuleProvidesDirectives__([List](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/util/List.html)<[DirectiveNode](../model/DirectiveNode.md)> directives)</span>

Outputs the `provides` directives declared in a module's `module-info.java` file.

**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

### writeDocs

<span style="font-family: monospace; font-size: 80%;">public void __writeDocs__([Api](../model/Api.md) api)</span>

Output the documentation files for the specified API

**Throws:**

[InvalidPathException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/nio/file/InvalidPathException.html)
, [IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

