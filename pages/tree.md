# Mermaid Examples

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

``` mermaid
graph TD;
    A[Root]
    A --> B[Folder 1]
    A --> C[Folder 2]
    B --> D[File 1]
    B --> E[File 2]
    C --> F[File 3]
```
