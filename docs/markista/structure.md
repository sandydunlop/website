# Documentation Structure

The file structure of the documentation produced changes, depending on options passed to Markista.

## Basic Java Project

In this basic Java project there are no `package-info.java` or `module-info.java` files.

| Source Code | Module Structure | 
:-------------------------|:-------------------------|
![](assets/no-module-or-package-info/source.svg) | ![](assets/no-module-or-package-info/module.svg)

Running Markista with the default options, the following documentation file structure is created:

![](assets/no-module-or-package-info/docs.svg)

The documentation is created in a directory with the same name as the project directory
as there is no module name to use for it. The top-level `index.md` file lists the packages
that have been documented.


## Modular Java Project

In this modular Java project, there are `package-info.java` and `module-info.java` files.

| Source Code | Module Structure | 
:-------------------------|:-------------------------|
![](assets/module/source.svg) | ![](assets/module/module.svg)

Running Markista with the default options, the following documentation file structure is created with the standard Javadoc layout:

![](assets/module/docs.svg)

The documentation is created in a directory with the same name as the package being
documented. The top-level `index.md` file is the package documentation, which can
contain the package's directives (`requires`, `exports`, etc) with links to contained
packages and other modules (if relevant).

To *flatten* the directory structure, run Markista with the `--flatten-packages` option.

The following documentation file structure is created:

![](assets/module-flatten-packages/docs.svg)
