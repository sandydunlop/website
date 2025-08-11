# Package io.github.sandydunlop.markista.model


The types used to store structure and documentation information of the API.

=== "Classes"

    | Class                                             | Description                                                                                                                                                                                       |
    |---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [Text](Text.md)                                   | Represents a block of text.                                                                                                                                                                       |
    | [Node](Node.md)                                   | The base class for all types of nodes in the API model.                                                                                                                                           |
    | [AppliedAnnotationNode](AppliedAnnotationNode.md) | An annotation applied to a type                                                                                                                                                                   |
    | [AnnotationTypeNode](AnnotationTypeNode.md)       | A [Node](Node.md) that represents an [Annotation](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/text/Annotation.html) class                                                   |
    | [FieldNode](FieldNode.md)                         | A class to hold information about fields within a class, interface, or enum.                                                                                                                      |
    | [ModuleNode](ModuleNode.md)                       | Represents a module node that contains directives, packages, and constant values.                                                                                                                 |
    | [DirectiveNode](DirectiveNode.md)                 | Represents a directive within a module declaration, such as requires, exports, or provides.                                                                                                       |
    | [MethodNode](MethodNode.md)                       | Contains information about a method being documented                                                                                                                                              |
    | [EnumTypeNode](EnumTypeNode.md)                   | Represents an enum type node with its constants.                                                                                                                                                  |
    | [PackageNode](PackageNode.md)                     | Represents a Java package                                                                                                                                                                         |
    | [InterfaceTypeNode](InterfaceTypeNode.md)         | A node representing a Java interface type                                                                                                                                                         |
    | [ParamNode](ParamNode.md)                         | A class to hold information about method parameters.                                                                                                                                              |
    | [AbstractTypeOwner](AbstractTypeOwner.md)         | An abstract class with a set of methods useful to other subclasses of [Node](Node.md) that can be owners of types.                                                                                |
    | [Reference](Reference.md)                         | `Reference` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.                                                                                               |
    | [TypeNode](TypeNode.md)                           | Represents a type in the API model, including its kind (class, interface, enum, annotation), supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata. |
    | [AnnotationElement](AnnotationElement.md)         | An element of an annotation                                                                                                                                                                       |
    | [OverriddenMethodNode](OverriddenMethodNode.md)   | Represents a method from another type that is overridden by a method in the type being documented.                                                                                                |
    | [ClassTypeNode](ClassTypeNode.md)                 | Represents a JAva class that extends a type node.                                                                                                                                                 |
    | [Api](Api.md)                                     | Represents the API being documented, encapsulating its modules and packages.                                                                                                                      |
=== "Interfaces"

    | Class                             | Description                                                                             |
    |-----------------------------------|-----------------------------------------------------------------------------------------|
    | [PackageMember](PackageMember.md) | Represents a member belonging to a package, such as a class, interface, or sub-package. |
    | [PackageOwner](PackageOwner.md)   | Interface representing an owner of packages.                                            |
    | [TypeOwner](TypeOwner.md)         | A TypeOwner is a [Node](Node.md) that can be set as the *owner* of another type.        |
=== "Enum Classes"

    | Class                         | Description                                                                   |
    |-------------------------------|-------------------------------------------------------------------------------|
    | [Modifier](Modifier.md)       | Enum representing Java language modifiers with their string  representations. |
    | [Deprecation](Deprecation.md) | Enum representing the deprecation status of an element                        |
