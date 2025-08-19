
# Package io.github.sandydunlop.markista.util


This package contains utility methods used by other packages.

=== "Classes"

    | Class                                   | Description                                                                                                                                                                                                                                                                                                             |
    |-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [TypeUtils](TypeUtils.md)               | Utility class providing static methods to create and manipulate TypeNodes, MethodNodes, FieldNodes, and other API model objects from language model elements and Javadoc doc trees obtained from the Java source code.                                                                                                  |
    | [MarkdownParser](MarkdownParser.md)     | Parses a Markdown string into a sequence of tokens representing text and special markup such as brackets and parentheses.                                                                                                                                                                                               |
    | [Utils](Utils.md)                       | A set of utility methods for changing between qualified and unqualified names.                                                                                                                                                                                                                                          |
    | [ModuleDirectives](ModuleDirectives.md) | A utility class for creating [DirectiveNode](../model/DirectiveNode.md) objects which encapsulate  the information provided by [Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html)  objects scanned by the [ApiScanner](ApiScanner.md). |
    | [Markdown](Markdown.md)                 | A utility class for producing Markdown formatted text and resolving Markdown links to point to the correct file, directory, or web page.                                                                                                                                                                                |
    | [LinkFormatter](LinkFormatter.md)       |                                                                                                                                                                                                                                                                                                                         |
    | [ApiScanner](ApiScanner.md)             | A scanner that walks the language model elements provided by the Javadoc doclet  environment and builds an Api model representing the discovered modules, packages, types, and members.                                                                                                                                 |
    | [LinkResolver](LinkResolver.md)         | `LinkResolver` calculates the paths for Markdown documents to link between different packages and to URLs of external packages and their contents.                                                                                                                                                                      |
=== "Record Classes"

    | Class                       | Description |
    |-----------------------------|-------------|
    | [TestREcord](TestREcord.md) |             |
