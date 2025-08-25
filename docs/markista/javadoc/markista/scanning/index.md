
# Package io.github.sandydunlop.markista.scanning


A scanning visitor of program elements that generates an API model for use with Markista and its extensions.

=== "All Classes and Interfaces"

    | Class                                   | Description                                                                                                                                                                                                                                                                                                             |
    |-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [ApiScanner](ApiScanner.md)             | A scanner that walks the language model elements provided by the Javadoc doclet  environment and builds an Api model representing the discovered modules, packages, types, and members.                                                                                                                                 |
    | [MarkdownParser](MarkdownParser.md)     | Parses a Markdown string into a sequence of tokens representing text and special markup such as brackets and parentheses.                                                                                                                                                                                               |
    | [ModuleDirectives](ModuleDirectives.md) | A utility class for creating [DirectiveNode](../model/DirectiveNode.md) objects which encapsulate  the information provided by [Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html)  objects scanned by the [ApiScanner](ApiScanner.md). |
    | [TypeUtils](TypeUtils.md)               | Utility class providing static methods to create and manipulate TypeNodes, MethodNodes, FieldNodes, and other API model objects from language model elements and Javadoc doc trees obtained from the Java source code.                                                                                                  |


=== "Classes"

    | Class                                   | Description                                                                                                                                                                                                                                                                                                             |
    |-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [ApiScanner](ApiScanner.md)             | A scanner that walks the language model elements provided by the Javadoc doclet  environment and builds an Api model representing the discovered modules, packages, types, and members.                                                                                                                                 |
    | [MarkdownParser](MarkdownParser.md)     | Parses a Markdown string into a sequence of tokens representing text and special markup such as brackets and parentheses.                                                                                                                                                                                               |
    | [ModuleDirectives](ModuleDirectives.md) | A utility class for creating [DirectiveNode](../model/DirectiveNode.md) objects which encapsulate  the information provided by [Directive](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/javax/lang/model/element/ModuleElement.Directive.html)  objects scanned by the [ApiScanner](ApiScanner.md). |
    | [TypeUtils](TypeUtils.md)               | Utility class providing static methods to create and manipulate TypeNodes, MethodNodes, FieldNodes, and other API model objects from language model elements and Javadoc doc trees obtained from the Java source code.                                                                                                  |


