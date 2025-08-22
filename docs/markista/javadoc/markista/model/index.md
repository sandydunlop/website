
# Package io.github.sandydunlop.markista.model


The types used to store structure and documentation information of the API.

=== "All Classes and Interfaces"

    | Class                                             | Description                                                                                                                                                                                       |
    |---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [AbstractMember](AbstractMember.md)               |                                                                                                                                                                                                   |
    | [AnnotationElement](AnnotationElement.md)         | An element of an annotation                                                                                                                                                                       |
    | [AnnotationTypeNode](AnnotationTypeNode.md)       | A [Node](Node.md) that represents an [Annotation](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/text/Annotation.html) class                                                   |
    | [Api](Api.md)                                     | Represents the API being documented, encapsulating its modules and packages.                                                                                                                      |
    | [AppliedAnnotationNode](AppliedAnnotationNode.md) | An annotation applied to a type                                                                                                                                                                   |
    | [ClassTypeNode](ClassTypeNode.md)                 | Represents a Java class.                                                                                                                                                                          |
    | [Deprecation](Deprecation.md)                     | Enum representing the deprecation status of an element                                                                                                                                            |
    | [DirectiveNode](DirectiveNode.md)                 | Represents a directive within a module declaration, such as requires, exports, or provides.                                                                                                       |
    | [EnumTypeNode](EnumTypeNode.md)                   | Represents an enum type node with its constants.                                                                                                                                                  |
    | [FieldNode](FieldNode.md)                         | A class to hold information about fields within a class, interface, or enum.                                                                                                                      |
    | [InterfaceTypeNode](InterfaceTypeNode.md)         | A node representing a Java interface type                                                                                                                                                         |
    | [Link](Link.md)                                   | `Reference` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.                                                                                               |
    | [MethodNode](MethodNode.md)                       | Contains information about a method being documented                                                                                                                                              |
    | [MethodReference](MethodReference.md)             |                                                                                                                                                                                                   |
    | [Modifier](Modifier.md)                           | Enum representing Java language modifiers with their string  representations.                                                                                                                     |
    | [ModuleNode](ModuleNode.md)                       | Represents a module node that contains directives, packages, and constant values.                                                                                                                 |
    | [Node](Node.md)                                   | The base class for all types of nodes in the API model.                                                                                                                                           |
    | [NodeKind](NodeKind.md)                           | Enumeration representing kinds of types: None, Class, Interface, Enum, Annotation.                                                                                                                |
    | [PackageNode](PackageNode.md)                     | Represents a Java package                                                                                                                                                                         |
    | [PackageOrTypeNode](PackageOrTypeNode.md)         |                                                                                                                                                                                                   |
    | [Pair](Pair.md)                                   |                                                                                                                                                                                                   |
    | [ParamNode](ParamNode.md)                         | A class to hold information about method parameters.                                                                                                                                              |
    | [RecordTypeNode](RecordTypeNode.md)               | Represents a Java record class.                                                                                                                                                                   |
    | [Text](Text.md)                                   | Represents a block of text.                                                                                                                                                                       |
    | [TypeNode](TypeNode.md)                           | Represents a type in the API model, including its kind (class, interface, enum, annotation), supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata. |
    | [TypeReference](TypeReference.md)                 |                                                                                                                                                                                                   |
    | [TypeView](TypeView.md)                           | Minimal view of a type used by PackageOrTypeNode.                                                                                                                                                 |


=== "Interfaces"

    | Class                   | Description                                       |
    |-------------------------|---------------------------------------------------|
    | [TypeView](TypeView.md) | Minimal view of a type used by PackageOrTypeNode. |


=== "Classes"

    | Class                                             | Description                                                                                                                                                                                       |
    |---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [AbstractMember](AbstractMember.md)               |                                                                                                                                                                                                   |
    | [AnnotationElement](AnnotationElement.md)         | An element of an annotation                                                                                                                                                                       |
    | [AnnotationTypeNode](AnnotationTypeNode.md)       | A [Node](Node.md) that represents an [Annotation](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/text/Annotation.html) class                                                   |
    | [Api](Api.md)                                     | Represents the API being documented, encapsulating its modules and packages.                                                                                                                      |
    | [AppliedAnnotationNode](AppliedAnnotationNode.md) | An annotation applied to a type                                                                                                                                                                   |
    | [ClassTypeNode](ClassTypeNode.md)                 | Represents a Java class.                                                                                                                                                                          |
    | [DirectiveNode](DirectiveNode.md)                 | Represents a directive within a module declaration, such as requires, exports, or provides.                                                                                                       |
    | [EnumTypeNode](EnumTypeNode.md)                   | Represents an enum type node with its constants.                                                                                                                                                  |
    | [FieldNode](FieldNode.md)                         | A class to hold information about fields within a class, interface, or enum.                                                                                                                      |
    | [InterfaceTypeNode](InterfaceTypeNode.md)         | A node representing a Java interface type                                                                                                                                                         |
    | [Link](Link.md)                                   | `Reference` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.                                                                                               |
    | [MethodNode](MethodNode.md)                       | Contains information about a method being documented                                                                                                                                              |
    | [MethodReference](MethodReference.md)             |                                                                                                                                                                                                   |
    | [ModuleNode](ModuleNode.md)                       | Represents a module node that contains directives, packages, and constant values.                                                                                                                 |
    | [Node](Node.md)                                   | The base class for all types of nodes in the API model.                                                                                                                                           |
    | [PackageNode](PackageNode.md)                     | Represents a Java package                                                                                                                                                                         |
    | [PackageOrTypeNode](PackageOrTypeNode.md)         |                                                                                                                                                                                                   |
    | [Pair](Pair.md)                                   |                                                                                                                                                                                                   |
    | [ParamNode](ParamNode.md)                         | A class to hold information about method parameters.                                                                                                                                              |
    | [RecordTypeNode](RecordTypeNode.md)               | Represents a Java record class.                                                                                                                                                                   |
    | [Text](Text.md)                                   | Represents a block of text.                                                                                                                                                                       |
    | [TypeNode](TypeNode.md)                           | Represents a type in the API model, including its kind (class, interface, enum, annotation), supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata. |
    | [TypeReference](TypeReference.md)                 |                                                                                                                                                                                                   |


=== "Enum Classes"

    | Class                         | Description                                                                        |
    |-------------------------------|------------------------------------------------------------------------------------|
    | [Deprecation](Deprecation.md) | Enum representing the deprecation status of an element                             |
    | [Modifier](Modifier.md)       | Enum representing Java language modifiers with their string  representations.      |
    | [NodeKind](NodeKind.md)       | Enumeration representing kinds of types: None, Class, Interface, Enum, Annotation. |


