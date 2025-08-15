# Module markista


Markista is a tool for generating Markdown documentation from Java source code.
It is designed to work with Java 24 and later versions.
The module-info.java file defines the module and its exports.
It exports only the doclet package for external use.

=== "Exports"

    | Package                                                  | Description |
    |----------------------------------------------------------|-------------|
    | [io.github.sandydunlop.markista.doclet](doclet/index.md) |             |
=== "Requires"

    | Module                                                                                                | Description |
    |-------------------------------------------------------------------------------------------------------|-------------|
    | [java.base](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/module-summary.html)         |             |
    | [jdk.compiler](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.compiler/module-summary.html)   |             |
    | [jdk.javadoc](https://docs.oracle.com/en/java/javase/24/docs/api/jdk.javadoc/module-summary.html)     |             |
    | [java.compiler](https://docs.oracle.com/en/java/javase/24/docs/api/java.compiler/module-summary.html) |             |
=== "Opens"

    | Package                                                      | Description |
    |--------------------------------------------------------------|-------------|
    | [io.github.sandydunlop.markista.doclet](doclet/index.md)     |             |
    | [io.github.sandydunlop.markista.markdown](markdown/index.md) |             |
    | [io.github.sandydunlop.markista.model](model/index.md)       |             |
    | [io.github.sandydunlop.markista.util](util/index.md)         |             |
