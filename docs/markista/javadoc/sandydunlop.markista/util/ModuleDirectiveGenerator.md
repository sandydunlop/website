Package [io.github.sandydunlop.markista.util](index.md)

# Class ModuleDirectiveGenerator
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;io.github.sandydunlop.markista.util.ModuleDirectiveGenerator<br/>
<br/>

----


## Field Summary

| Modifier and Type                                                                                                                            | Field                       | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|-------------|
| private static [DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) | [environment](#environment) |             |

## Constructor Summary

| Constructor                | Description |
|----------------------------|-------------|
| ModuleDirectiveGenerator() |             |

## Method Summary

| Modifier and Type                                             | Method                                                                                                                                                                                                           | Description |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| static void                                                   | [setEnvironment](#setenvironment)([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) env)                                             |             |
| static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) | [createFrom](#createfrom)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)                           |             |
| static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) | [createRequiresDirective](#createrequiresdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive) |             |
| static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) | [createExportsDirective](#createexportsdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)   |             |
| static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) | [createOpensDirective](#createopensdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)       |             |
| static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) | [createUsesDirective](#createusesdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)         |             |
| static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) | [createProvidesDirective](#createprovidesdirective)([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive) |             |

## Field Details

### environment




## Method Details

### setEnvironment

static void setEnvironment([DocletEnvironment](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/jdk/javadoc/doclet/DocletEnvironment.html) env)



### createFrom

static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) createFrom([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)



### createRequiresDirective

static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) createRequiresDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)



### createExportsDirective

static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) createExportsDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)



### createOpensDirective

static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) createOpensDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)



### createUsesDirective

static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) createUsesDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)



### createProvidesDirective

static [ModuleDirectiveNode](../model/ModuleDirectiveNode.md) createProvidesDirective([ModuleElement.Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html) directive)



