
# Package io.github.sandydunlop.markista.markdown


This package contains the classes responsible for writing the Markdown file.
[](ModuleWriter.md) handles the top-level module documentation including constant
field values for the module. It uses [](PackageWriter.md) to output the Markdown
files for each [package](../model/PackageNode.md) 
contained within, which in turn uses [](TypeWriter.md) to output the Markdown 
files for each [type](../model/TypeNode.md) 
contained within.

=== "All Classes and Interfaces"

    | Class                                 | Description                                                                                                                              |
    |---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
    | [MarkdownService](MarkdownService.md) |                                                                                                                                          |
    | [MarkdownTable](MarkdownTable.md)     | A utility class for creating tables in Markdown documents.                                                                               |
    | [MarkdownUtils](MarkdownUtils.md)     | A utility class for producing Markdown formatted text and resolving Markdown links to point to the correct file, directory, or web page. |
    | [ModuleWriter](ModuleWriter.md)       | A class that outputs a module's API documentation as Markdown.                                                                           |
    | [PackageWriter](PackageWriter.md)     | A class that outputs API package documentation as Markdown.                                                                              |
    | [TypeWriter](TypeWriter.md)           | A class that outputs API type documentation as Markdown.                                                                                 |


=== "Classes"

    | Class                                 | Description                                                                                                                              |
    |---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
    | [MarkdownService](MarkdownService.md) |                                                                                                                                          |
    | [MarkdownTable](MarkdownTable.md)     | A utility class for creating tables in Markdown documents.                                                                               |
    | [MarkdownUtils](MarkdownUtils.md)     | A utility class for producing Markdown formatted text and resolving Markdown links to point to the correct file, directory, or web page. |
    | [ModuleWriter](ModuleWriter.md)       | A class that outputs a module's API documentation as Markdown.                                                                           |
    | [PackageWriter](PackageWriter.md)     | A class that outputs API package documentation as Markdown.                                                                              |
    | [TypeWriter](TypeWriter.md)           | A class that outputs API type documentation as Markdown.                                                                                 |


