Package [io.github.sandydunlop.markista.structure](index.md)

# Class Structures
[java.lang.Object](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/Object.html)<br/>
        io.github.sandydunlop.markista.structure.Structures<br/>
<br/>

----

<span style="font-family: monospace;">public Class __Structures__</span>


## Field Summary

| Modifier and Type                     | Field             | Description                                                                                                                                                                           |
|---------------------------------------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ModuleNode](../model/ModuleNode.md)  | [module](#module) |                                                                                                                                                                                       |
| private [Context](../util/Context.md) | [ctx](#ctx)       | The Context singleton instance providing access to the current documentation generation context, including configuration, current module/package/type names, and reporting utilities. |

## Constructor Summary

| Constructor  | Description |
|--------------|-------------|
| Structures() |             |

## Method Summary

| Modifier and Type | Method                                                               | Description |
|-------------------|----------------------------------------------------------------------|-------------|
| public void       | [setContext](#setcontext)([Context](../util/Context.md) context)     |             |
| public void       | [setModule](#setmodule)([ModuleNode](../model/ModuleNode.md) module) |             |
| public void       | [run](#run)()                                                        |             |

## Field Details

### module




---

### ctx

The Context singleton instance providing access to the current documentation generation context,
including configuration, current module/package/type names, and reporting utilities.
> **Warning**<br/>
Do not make this `final`. It will break tests with mocked [Context](../util/Context.md).


---


## Method Details

### setContext

public void setContext([Context](../util/Context.md) context)




---

### setModule

public void setModule([ModuleNode](../model/ModuleNode.md) module)




---

### run

public void run()



**Throws:**

[IOException](https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/io/IOException.html)


---

