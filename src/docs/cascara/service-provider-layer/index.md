# Cascara Service Provider Layer





todo

spl diagram inc factory

up to date examples




The `ServiceProviderLayer` (SPL) architecture facilitates service discovery mirroring the natural hierarchy an application. It provides a Scoped Dependency Injection framework that respects module boundaries while allowing for global defaults.

## Discovery 

`ServiceProviderLayer`'s `findProviders` method starts at the caller's layer and works its way outward, a module can provide its own specialized service providers for a specific content type or schema type. 

### Most Relevant Providers

- If the module has a custom renderer for `text/markdown`, it will find that first. 
- It only falls back to the root layer, and defaults like `cascara.ui`, if it doesn't find a local specialty. 

This allows for local specialization without the need for complex configuration files or global "if-else" logic.

### Security & Isolation

Layers support private/public encapsulation, allowing for modules to load their own internal helper services into a private layer, ensuring they don't accidentally leak out and interfere with other modules.

### Usage in *Cascara Studio*

#### Dynamic Lifecycle

In *Cascara Studio*, automatic removal of layers when a module is unloaded prevent discovery of services that no longer exist.

- Initially, there is the root layer. 
- Each *Cascara Studio* extension module gets a layer created for it as it is loaded. 
- Layers created for extension modules are removed if the module is unloaded.
- A layer is also created for `cascara.ui`, which contains a set of default providers for UI rendering.
- These layers are public, allowing any code to use the services provided.
- Layers can be created by any code that wants to add its own service providers, and these will be private to that code unless it chooses to make them public.

Example usage:

When a class in `cascara.module.organizer` needs a `ScalarRenderer`, the following happens:

- The `ScalarRenderer` factory asks the Organizer's `ServiceProviderLayer` for a list of `ScalarRenderer`s.
- The `ServiceProviderLayer` constructs a list of providers of the `ScalarRenderer` services:
  - It starts at its own list of services
  - It works its way up the tree to the root, adding any relevant services to the list as it goes
  - It then goes down any other public branches it sees, doing the same.


## Service Provider Properties

The `ServiceProvider` interface specifies a `getServiceProperties` method:

```
public interface ServiceProvider {
    Properties getServiceProperties();
}
```

The `Properties` returned by this method allow the ServiceProviderLayer to select service providers based on capabilities and properties they declare.

## ServiceProviderFactory

The `ServiceProviderFactory` class provides convenient methods to insantiate providers of services that are defined in `cascara.common`.

Example usage:

```java
public class Importer {
    public void importData(String text) {

        ServiceProviderFactory spf = new ServiceProviderFactory();

        Parser<?,?> parser = spf.createParser("text/yaml");

        if (parser.parse(text) instanceof SequenceAstNode seq) {
            for (AstNode node : seq.getChildren()) {
                System.out.println(node.toString());
            }
        }
    }
}
```
