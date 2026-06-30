
# Package io.github.sandydunlop.markista.model


The types used to store structure and documentation information of the API.

=== "All Classes and Interfaces"

    | Class                                             | Description                                                                                                                                                                                       |
    |---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [AbstractMember](AbstractMember.md)               |                                                                                                                                                                                                   |
    | [AnnotationElement](AnnotationElement.md)         | An element of an annotation                                                                                                                                                                       |
    | [AnnotationNode](AnnotationNode.md)               | A [Node](Node.md) that represents an [Annotation](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/text/Annotation.html) class                                                   |
    | [Api](Api.md)                                     | Represents the API being documented, encapsulating its modules and packages.                                                                                                                      |
    | [AppliedAnnotationNode](AppliedAnnotationNode.md) | An annotation applied to a type                                                                                                                                                                   |
    | [ClassNode](ClassNode.md)                         | Represents a Java class.                                                                                                                                                                          |
    | [Deprecation](Deprecation.md)                     | Enum representing the deprecation status of an element                                                                                                                                            |
    | [DirectiveNode](DirectiveNode.md)                 | Represents a directive within a module declaration, such as requires, exports, or provides.                                                                                                       |
    | [EnumNode](EnumNode.md)                           | Represents an enum type node with its constants.                                                                                                                                                  |
    | [ExternalLink](ExternalLink.md)                   |                                                                                                                                                                                                   |
    | [FieldNode](FieldNode.md)                         | A class to hold information about fields within a class, interface, or enum.                                                                                                                      |
    | [FileLink](FileLink.md)                           |                                                                                                                                                                                                   |
    | [InterfaceNode](InterfaceNode.md)                 | A node representing a Java interface type                                                                                                                                                         |
    | [Link](Link.md)                                   | `target` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.                                                                                                  |
    | [MethodNode](MethodNode.md)                       | Contains information about a method being documented                                                                                                                                              |
    | [MethodReference](MethodReference.md)             |                                                                                                                                                                                                   |
    | [Modifier](Modifier.md)                           | Enum representing Java language modifiers with their string  representations.                                                                                                                     |
    | [ModuleNode](ModuleNode.md)                       | Represents a module node that contains directives, packages, and constant values.                                                                                                                 |
    | [Name](Name.md)                                   | See Java Language Specification (JLS) [Chapter 6. Names](https://docs.oracle.com/javase/specs/jls/se24/html/jls-6.html).                                                                          |
    | [Node](Node.md)                                   | The base class for all types of nodes in the API model.                                                                                                                                           |
    | [PackageNode](PackageNode.md)                     | Represents a Java package                                                                                                                                                                         |
    | [PackageReference](PackageReference.md)           |                                                                                                                                                                                                   |
    | [Pair](Pair.md)                                   |                                                                                                                                                                                                   |
    | [ParamNode](ParamNode.md)                         | A class to hold information about method parameters.                                                                                                                                              |
    | [RecordNode](RecordNode.md)                       | Represents a Java record class.                                                                                                                                                                   |
    | [Reference](Reference.md)                         |                                                                                                                                                                                                   |
    | [SourceCodeLocation](SourceCodeLocation.md)       |                                                                                                                                                                                                   |
    | [Text](Text.md)                                   | Represents a block of text.                                                                                                                                                                       |
    | [TypeNode](TypeNode.md)                           | Represents a type in the API model, including its kind (class, interface, enum, annotation), supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata. |
    | [VariableType](VariableType.md)                   |  See Java Language Specification (JLS) [Chapter 4. Types, Values, and Variables](https://docs.oracle.com/javase/specs/jls/se24/html/jls-4.html).                                                  |


=== "Classes"

    | Class                                             | Description                                                                                                                                                                                       |
    |---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | [AbstractMember](AbstractMember.md)               |                                                                                                                                                                                                   |
    | [AnnotationElement](AnnotationElement.md)         | An element of an annotation                                                                                                                                                                       |
    | [AnnotationNode](AnnotationNode.md)               | A [Node](Node.md) that represents an [Annotation](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/text/Annotation.html) class                                                   |
    | [Api](Api.md)                                     | Represents the API being documented, encapsulating its modules and packages.                                                                                                                      |
    | [AppliedAnnotationNode](AppliedAnnotationNode.md) | An annotation applied to a type                                                                                                                                                                   |
    | [ClassNode](ClassNode.md)                         | Represents a Java class.                                                                                                                                                                          |
    | [DirectiveNode](DirectiveNode.md)                 | Represents a directive within a module declaration, such as requires, exports, or provides.                                                                                                       |
    | [EnumNode](EnumNode.md)                           | Represents an enum type node with its constants.                                                                                                                                                  |
    | [ExternalLink](ExternalLink.md)                   |                                                                                                                                                                                                   |
    | [FieldNode](FieldNode.md)                         | A class to hold information about fields within a class, interface, or enum.                                                                                                                      |
    | [FileLink](FileLink.md)                           |                                                                                                                                                                                                   |
    | [InterfaceNode](InterfaceNode.md)                 | A node representing a Java interface type                                                                                                                                                         |
    | [Link](Link.md)                                   | `target` encapsulates links to web pages, markdown pages, modules, packages, types, and methods.                                                                                                  |
    | [MethodNode](MethodNode.md)                       | Contains information about a method being documented                                                                                                                                              |
    | [MethodReference](MethodReference.md)             |                                                                                                                                                                                                   |
    | [ModuleNode](ModuleNode.md)                       | Represents a module node that contains directives, packages, and constant values.                                                                                                                 |
    | [Name](Name.md)                                   | See Java Language Specification (JLS) [Chapter 6. Names](https://docs.oracle.com/javase/specs/jls/se24/html/jls-6.html).                                                                          |
    | [Node](Node.md)                                   | The base class for all types of nodes in the API model.                                                                                                                                           |
    | [PackageNode](PackageNode.md)                     | Represents a Java package                                                                                                                                                                         |
    | [PackageReference](PackageReference.md)           |                                                                                                                                                                                                   |
    | [Pair](Pair.md)                                   |                                                                                                                                                                                                   |
    | [ParamNode](ParamNode.md)                         | A class to hold information about method parameters.                                                                                                                                              |
    | [RecordNode](RecordNode.md)                       | Represents a Java record class.                                                                                                                                                                   |
    | [Reference](Reference.md)                         |                                                                                                                                                                                                   |
    | [SourceCodeLocation](SourceCodeLocation.md)       |                                                                                                                                                                                                   |
    | [Text](Text.md)                                   | Represents a block of text.                                                                                                                                                                       |
    | [TypeNode](TypeNode.md)                           | Represents a type in the API model, including its kind (class, interface, enum, annotation), supertypes, implemented interfaces, constructors, methods, fields, ownership, and relevant metadata. |
    | [VariableType](VariableType.md)                   |  See Java Language Specification (JLS) [Chapter 4. Types, Values, and Variables](https://docs.oracle.com/javase/specs/jls/se24/html/jls-4.html).                                                  |


=== "Enum Classes"

    | Class                         | Description                                                                   |
    |-------------------------------|-------------------------------------------------------------------------------|
    | [Deprecation](Deprecation.md) | Enum representing the deprecation status of an element                        |
    | [Modifier](Modifier.md)       | Enum representing Java language modifiers with their string  representations. |


