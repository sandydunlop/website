Package [io.github.sandydunlop.markista.util](index.md)

# Class ModuleDirectives
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.util.ModuleDirectives<br/>
<br/>

----

<span style="font-family: monospace;">public Class __ModuleDirectives__</span>

A utility class for creating [DirectiveNode](../model/DirectiveNode.md) objects which encapsulate 
the information provided by [Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) 
objects scanned by the [ApiScanner](ApiScanner.md).


## Field Summary

| Modifier and Type                                                                                                                            | Field                       | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|-------------|
| private static [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) | [environment](#environment) |             |

## Constructor Summary

| Constructor        | Description |
|--------------------|-------------|
| ModuleDirectives() |             |

## Method Summary

| Modifier and Type                                        | Method                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                |
|----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public static void                                       | [setEnvironment](#setenvironment)([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) env)                                             | Sets the doclet environment where it can get access to  an [Elements](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/Elements.html) implementation to retrieve information about scanned elements. |
| public static [DirectiveNode](../model/DirectiveNode.md) | [createFrom](#createfrom)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)                           | Creates a [DirectiveNode](../model/DirectiveNode.md) to encapsulate the information provided by a module directive element.                                                                                                                |
| public static [DirectiveNode](../model/DirectiveNode.md) | [createRequiresDirective](#createrequiresdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive) | Creates a DirectiveNode representing a [requires](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.RequiresDirective.html) directive.                                               |
| public static [DirectiveNode](../model/DirectiveNode.md) | [createExportsDirective](#createexportsdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)   | Creates a DirectiveNode representing an [exports](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExportsDirective.html) directive.                                                              |
| public static [DirectiveNode](../model/DirectiveNode.md) | [createOpensDirective](#createopensdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)       | Creates a DirectiveNode representing an [opens](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/OpensDirective.html) directive.                                                                  |
| public static [DirectiveNode](../model/DirectiveNode.md) | [createUsesDirective](#createusesdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)         | Creates a DirectiveNode representing a [uses](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/UsesDirective.html) directive.                                                                     |
| public static [DirectiveNode](../model/DirectiveNode.md) | [createProvidesDirective](#createprovidesdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive) | Creates a DirectiveNode representing a [provides](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ProvidesDirective.html) directive.                                                             |

## Field Details

### environment




---


## Method Details

### setEnvironment

public static void setEnvironment([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) env)

Sets the doclet environment where it can get access to 
an [Elements](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/util/Elements.html) implementation
to retrieve information about scanned elements.


---

### createFrom

public static [DirectiveNode](../model/DirectiveNode.md) createFrom([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)

Creates a [DirectiveNode](../model/DirectiveNode.md) to encapsulate the information provided
by a module directive element.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createRequiresDirective

public static [DirectiveNode](../model/DirectiveNode.md) createRequiresDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)

Creates a DirectiveNode representing a [requires](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.RequiresDirective.html) directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createExportsDirective

public static [DirectiveNode](../model/DirectiveNode.md) createExportsDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)

Creates a DirectiveNode representing an [exports](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ExportsDirective.html) directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createOpensDirective

public static [DirectiveNode](../model/DirectiveNode.md) createOpensDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)

Creates a DirectiveNode representing an [opens](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/OpensDirective.html) directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createUsesDirective

public static [DirectiveNode](../model/DirectiveNode.md) createUsesDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)

Creates a DirectiveNode representing a [uses](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/UsesDirective.html) directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

### createProvidesDirective

public static [DirectiveNode](../model/DirectiveNode.md) createProvidesDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)

Creates a DirectiveNode representing a [provides](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ProvidesDirective.html) directive.

**Returns:**

A DirectiveNode representing the scanned directive element.


---

