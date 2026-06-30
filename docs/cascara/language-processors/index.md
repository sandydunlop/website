# Cascara Language Processors Collection

The Cascara language processors collection is a set of modules that provide:

- [Tokenizers](#tokenizers)
- [Parsers](#parsers)
- [Emitters](#emitters)
- [Serializers](#serializers)
- [Converters](#converters)

Currently supported languages are:

- [JSON](json.md)
- [XML](json.md)
- [YAML](yaml)

## Gradle

*Cascara Language Processors* and *Cascara Common* are available in the [Maven Central](https://mvnrepository.com/artifact/io.github.qishr) repository.

To use them in a Gradle project, add the following dependencies:

```groovy
dependencies {
    implementation "io.github.qishr:cascara-common:1.1.3"
    implementation "io.github.qishr:cascara-lang-json:0.3.0"
    implementation "io.github.qishr:cascara-lang-xml:0.3.0"
    implementation "io.github.qishr:cascara-lang-yaml:0.3.0"
}
```

## Examples

The examples shown here are available in the [cascara-docs-examples](https://github.com/qishr/cascara-docs-examples) Github repository.

### Tokenizers

[javadoc](https://qishr.github.io/javadoc/cascara.common/lang/processor/Tokenizer)

=== "JSON"
    ```java
    public static void main(String args[]) {
        String text = "person: {\n" +
                      "  name: Dave\n" +
                      "  age: 31\n" +
                      "}";

        JsonTokenizer tokenizer = new JsonTokenizer();
        List<JsonToken> tokens = tokenizer.tokenize(text);
        for (JsonToken token : tokens) {
            System.out.println(token.getType() + " " + token.getLexeme());
        }
    }
    ```
=== "XML"
    ```java
    public static void main(String args[]) {
        String text = "<person>\n" +
                      "  <name>Dave</name>\n" +
                      "  <age>31</age>\n" +
                      "</person>";

        XmlTokenizer tokenizer = new XmlTokenizer();
        List<XmlToken> tokens = tokenizer.tokenize(text);
        for (XmlToken token : tokens) {
            System.out.println(token.getType() + " " + token.getLexeme());
        }
    }
    ```
=== "YAML"
    ```java
    public static void main(String args[]) {
        String text = "person:\n" +
                      "  name: Dave\n" +
                      "  age: 31";

        YamlTokenizer tokenizer = new YamlTokenizer();
        List<YamlToken> tokens = tokenizer.tokenize(text);
        for (YamlToken token : tokens) {
            System.out.println(token.getType() + " " + token.getLexeme());
        }
    }
    ```

### Parsers

[javadoc](https://qishr.github.io/javadoc/cascara.common/lang/processor/Parserer)

=== "JSON"
    ```java
        public static void main(String args[]) {
            InputStream is = ParseSimple.class.getResourceAsStream("subject.json");
            JsonParser parser = new JsonParser();
            JsonNode yaml = parser.parse(is);
            if (yaml instanceof JsonMapNode map) {
                System.out.println(map.getString("name"));
                System.out.println(map.getString("age"));
            }
        }
    ```
=== "YAML"
    ```java
        public static void main(String args[]) {
            InputStream is = ParseSimple.class.getResourceAsStream("subject.yaml");
            YamlParser parser = new YamlParser();
            YamlNode yaml = parser.parse(is);
            if (yaml instanceof YamlMapNode map) {
                System.out.println(map.getString("name"));
                System.out.println(map.getString("age"));
            }
        }
    ```
    
### Serializers

[javadoc](https://qishr.github.io/javadoc/cascara.common/lang/processor/Serializer)

=== "JSON"
    ```java
        public static void main(String args[]) {
            Person person = new Person("Dave", 31);
            JsonSerializer serializer = new JsonSerializer();
            String text = serializer.toText(person);
            System.out.println("Serialized JSON:\n" + text);
        }    
    ```
=== "YAML"
    ```java
        public static void main(String args[]) {
            Person person = new Person("Dave", 31);
            YamlSerializer serializer = new YamlSerializer();
            String text = serializer.toText(person);
            System.out.println("Serialized YAML:\n" + text);
        }
    ```
