# Package io.github.sandydunlop.markista.doclet


This package contains the main doclet classes.

The Markista doclet has 3 main functions:

  - Collecting API and documentation infomation from the Java compiler
  - Arranging the infomation into an API tree using model.* classes
  - Outputting the documentation from the API tree as Markdown

=== "Classes"

    | Class                               | Description                                                                               |
    |-------------------------------------|-------------------------------------------------------------------------------------------|
    | [ModuleWriter](ModuleWriter.md)     | A class that outputs a module's API documentation as Markdown.                            |
    | [MarkdownTable](MarkdownTable.md)   | A utility class for creating tables in Markdown documents.                                |
    | [MarkdownDoclet](MarkdownDoclet.md) | A doclet that renders javadoc comments as Markdown                                        |
    | [PackageWriter](PackageWriter.md)   | A class that outputs API package documentation as Markdown.                               |
    | [ApiScanner](ApiScanner.md)         | A class that scans code and generates an API tree representing code and Javadoc comments. |
    | [TypeWriter](TypeWriter.md)         | A class that outputs API type documentation as Markdown.                                  |
