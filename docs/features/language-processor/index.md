# Cascara Language Processors

The Cascara language processors collection is a set of modules that provide:

- [Tokenizers](#tokenizers)
- [Parsers](#parsers)
- [Emitters](#emitters)
- [Serializers](#serializers)
- [Converters](#converters)

Currently supported languages are:

- [JSON](json.md)
- [XML](json.md)
- [YAML](yaml.md)

## Tokenizers

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


## Serializers

[javadoc](https://qishr.github.io/javadoc/cascara.common/lang/processor/Serializer)

=== "YAML"
    ```java
        public static void main(String args[]) {
            Person person = new Person("Dave", 31);
            YamlSerializer serializer = new YamlSerializer();
            String text = serializer.toText(person);
            System.out.println("Serialized YAML:\n" + text);
        }
    ```
