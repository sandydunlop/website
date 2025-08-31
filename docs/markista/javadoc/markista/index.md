# Module markista


Markista is a tool for generating Markdown documentation from Java source code.
It is designed to work with Java 24 and later versions.
The module-info.java file defines the module and its exports.

=== "Exports"

    | Package                                                  | Description                                                                     |
    |----------------------------------------------------------|---------------------------------------------------------------------------------|
    | [io.github.sandydunlop.markista.core](core/index.md)     | A package for classes that are used everywhere, by Markista and its extensions. |
    | [io.github.sandydunlop.markista.doclet](doclet/index.md) | This package contains only the MarkdownDoclet class.                            |
    | [io.github.sandydunlop.markista.model](model/index.md)   | The types used to store structure and documentation information of the API.     |
    | [io.github.sandydunlop.markista.spi](spi/index.md)       | Service interface for extensions                                                |


=== "Requires"

    | Module                                                                                                | Description |
    |-------------------------------------------------------------------------------------------------------|-------------|
    | [java.base](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/module-summary.html)         |             |
    | [jdk.compiler](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/module-summary.html)   |             |
    | [jdk.javadoc](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/module-summary.html)     |             |
    | [java.compiler](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/module-summary.html) |             |


=== "Opens"

    | Package                                                                | Description                                                                                                  |
    |------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
    | [io.github.sandydunlop.markista.orchestration](orchestration/index.md) | This package deals with processing text and links in the scanned model before output is generated.           |
    | [io.github.sandydunlop.markista.core](core/index.md)                   | A package for classes that are used everywhere, by Markista and its extensions.                              |
    | [io.github.sandydunlop.markista.doclet](doclet/index.md)               | This package contains only the MarkdownDoclet class.                                                         |
    | [io.github.sandydunlop.markista.markdown](markdown/index.md)           | This package contains the classes responsible for writing the Markdown file.                                 |
    | [io.github.sandydunlop.markista.model](model/index.md)                 | The types used to store structure and documentation information of the API.                                  |
    | [io.github.sandydunlop.markista.scanning](scanning/index.md)           | A scanning visitor of program elements that generates an API model for use with Markista and its extensions. |
    | [io.github.sandydunlop.markista.spi](spi/index.md)                     | Service interface for extensions                                                                             |


=== "Uses"

    | Interface                                                          | Description                                                                                                                                                            |
    |--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [io.github.sandydunlop.markista.spi.DocService](spi/DocService.md) | This interface defines a service for processing a project's structure and documentation with the  [Markista markdown doclet](https://sandydunlop.github.io/markista/). |


