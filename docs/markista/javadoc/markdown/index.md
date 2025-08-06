# Package io.github.sandydunlop.markista.markdown


This package contains the classes responsible for writing the Markdown file.
[ModuleWriter](ModuleWriter.md) handles the top-level module documentation including constant
field values for the module. It uses [PackageWriter](PackageWriter.md) to output the Markdown
files for each [package](../model/PackageNode.md) 
contained within, which in turn uses [TypeWriter](TypeWriter.md) to output the Markdown 
files for each [type](../model/TypeNode.md) 
contained within.

=== "Classes"

    | Class                             | Description                                                    |
    |-----------------------------------|----------------------------------------------------------------|
    | [ModuleWriter](ModuleWriter.md)   | A class that outputs a module's API documentation as Markdown. |
    | [MarkdownTable](MarkdownTable.md) | A utility class for creating tables in Markdown documents.     |
    | [PackageWriter](PackageWriter.md) | A class that outputs API package documentation as Markdown.    |
    | [TypeWriter](TypeWriter.md)       | A class that outputs API type documentation as Markdown.       |
