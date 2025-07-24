# Module sandydunlop.markista


Markista is a tool for generating Markdown documentation from Java source code.
It is designed to work with Java 11 and later versions.
The module-info.java file defines the module and its exports.
It exports the doclet, model, and util packages for use by other modules.

## Packages

| Package                                                  | Description                                                                        |
|----------------------------------------------------------|------------------------------------------------------------------------------------|
| [io.github.sandydunlop.markista.doclet](doclet/index.md) | This package contains the main doclet classes.                                     |
| [io.github.sandydunlop.markista.model](model/index.md)   | The classes used to store structure and docuemntation information in the API tree. |
| [io.github.sandydunlop.markista.util](util/index.md)     | This package contains utility methods used by other packages.                      |
