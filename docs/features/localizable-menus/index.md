# Localizable Menus

Built on top of *Cascara.UI*'s `ObservableTreeNode`, `ObservableMenuItem` provides...



The translation file:

```yaml
meta:
  lang: "en-US"
  title: "English"

menubar:
  app:
    $title: "Cascara Studio"
    about: "About"
    settings: "Settings"
    hide-app: "Hide Cascara Studio"
    hide-others: "Hide Others"
    show-all: "Show All"
    quit: "Quit"

  file:
    $title: "File"
    new-file: "New File"
    new-project:
      $title: "New Project"
    new-window: "New Window"
    open-folder: "Open Folder..."
    open-file: "Open File..."
    open-project: "Open Project..."
    open-recent:
      $title: "Open Recent"
    save-file: "Save File"
    save-file-as: "Save File As..."
    save-project: "Save Project"
    save-all: "Save All"
    close-file: "Close File"
    close-project: "Close Project"
    close-window: "Close Window"

  view:
    $title: "View"
    editor:
      $title: "Editor"
    view-schema: "View Schema"

  tools:
    $title: "Tools"
    convert:
      $title: "Convert"

  window:
    $title: "Window"
    zoom: "Zoom"
    minimize: "Minimize"
    bring-all-to-front: "Bring All To Front"

  help:
    online-doc: "Online Documentation"
```

When a menu item's node name is prefixed with `#` it will not be translated. 
This is for dynamically created menu items.

In Studio's help menu builder, to show that non-translatable items work, I added 
a menu item with a leading `#`:

```java
    public ObservableMenuItem build(ObservableMenuItem menuRoot) {
        ObservableMenuItem helpMenu = menuRoot.addMenu("help", "Help");

        helpMenu.addMenuItem("online-doc", "Online Documentation")
            .setOnChoose(() -> {
                try {
                    appCtx.getDocumentService().openDocument(URI.create("http://qishr.github.io"), false);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });

        helpMenu.addMenuItem("#dynamic-key-example", "This is not localizable");

        if (!Launcher.isMacosRuntime()) {
            helpMenu.addMenuItem("menubar.app.about", "About")
                    .setOnChoose(() -> winCtx.showAboutPage());
        }
        return helpMenu;
    }
```


As well as `addMenu`'s `nodeName` (first parameter) taking an isolated node name that's
also a leaf key in the translation file, we allow a full translation path to be specified
using either dots or slashes to separate key segments.

Here is how a *Help -> About* menu could be added and use the already defined 
`app.about` translation ket instead of adding a new one:

```java
helpMenu.addMenuItem("menubar.app.about", "About")
```

or

```java
helpMenu.addMenuItem("#/menubar/app/about", "About")
```



If something in Studio (or whatever app is using this) wants to access a menu item
it can call, for example (with or without the leading `#`):

```java
getByPath("/view/editor")
```

## Under the Hood


In `cascara.macos.menus`:

```java
    /// Builds the application menu for the macOS menu bar.
    @Override
    public ObservableMenuItem buildAppMenu(String appName) {
        appMenu = menuRoot.addMenu("app", appName);

        appMenu.addMenuItem("about", "About...")
            .setOnChoose(() -> onAbout());

        appMenu.addSeparator();

        appMenu.addMenuItem("settings", "Settings...")
            .setAccelerator(new KeyCodeCombination(KeyCode.COMMA, KeyCombination.META_DOWN))
            .setOnChoose(() -> onSettings());

        appMenu.addSeparator();

        appMenu.addMenuItem(
            "hide-app", "Hide App",
            tk.createHideMenuItem(appName)
        );

        appMenu.addMenuItem(
            "hide-others", "Hide Others",
            tk.createHideOthersMenuItem()
        );

        appMenu.addMenuItem(
            "show-all", "Show All",
            tk.createUnhideAllMenuItem()
        );

        appMenu.addSeparator();

        appMenu.addMenuItem(
            "quit", "Quit",
            tk.createQuitMenuItem(appName)
        ).setOnChoose(() -> onQuit());

        return appMenu;
    }
```

Since the translation file YAML matches the `ObservableMenuItem` tree structure,
the code for translating menu items inside `ObservableMenuItem` becomes straightforawrd:

```java
    private void translate() {
        String nodeName = nodeNameProperty().get();

        if (nodeName != null) {
            REPORTER.debug("Menu item: " + nodeName);
            if (isTranslatable) {
                REPORTER.debug("  Translating");

                String translationKey;

                if (nodeName.contains("/")) {
                    // Menu item has full translation key path
                    translationKey = nodeName;
                } else if (nodeName.contains(".")) {
                    // Menu item has full translation key name
                    translationKey = nodeName.replace(".", "/");
                } else {
                    // Menu item has only the leaf name
                    REPORTER.debug("  Tree Path = " + getTreePath());

                    translationKey = getTreePathInsertParent("menubar");

                    if (fxMenuItem instanceof Menu) {
                        translationKey = translationKey + "/$title";
                    }
                }

                REPORTER.debug("  Translation Key = " + translationKey);

                Localization.bind(fxMenuItem, translationKey);
            } else {
                REPORTER.debug("  Not translating");
            }
        }
    }
```







The debug log:

```
[DEBUG] [2026-06-18 16:00:39.054] [ObservableMenuItem] Menu item: about
[DEBUG] [2026-06-18 16:00:39.061] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.062] [ObservableMenuItem]   Tree Path = #/about
[DEBUG] [2026-06-18 16:00:39.063] [ObservableMenuItem]   Translation Key = #/menubar/about
[DEBUG] [2026-06-18 16:00:39.064] [ObservableMenuItem] Menu item: --
[DEBUG] [2026-06-18 16:00:39.065] [ObservableMenuItem]   Not translating
[DEBUG] [2026-06-18 16:00:39.065] [ObservableMenuItem] Menu item: settings
[DEBUG] [2026-06-18 16:00:39.066] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.066] [ObservableMenuItem]   Tree Path = #/settings
[DEBUG] [2026-06-18 16:00:39.067] [ObservableMenuItem]   Translation Key = #/menubar/settings
[DEBUG] [2026-06-18 16:00:39.067] [ObservableMenuItem] Menu item: --
[DEBUG] [2026-06-18 16:00:39.068] [ObservableMenuItem]   Not translating
[DEBUG] [2026-06-18 16:00:39.068] [ObservableMenuItem] Menu item: hide-app
[DEBUG] [2026-06-18 16:00:39.068] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.069] [ObservableMenuItem]   Tree Path = #/hide-app
[DEBUG] [2026-06-18 16:00:39.069] [ObservableMenuItem]   Translation Key = #/menubar/hide-app
[DEBUG] [2026-06-18 16:00:39.070] [ObservableMenuItem] Menu item: hide-others
[DEBUG] [2026-06-18 16:00:39.070] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.070] [ObservableMenuItem]   Tree Path = #/hide-others
[DEBUG] [2026-06-18 16:00:39.071] [ObservableMenuItem]   Translation Key = #/menubar/hide-others
[DEBUG] [2026-06-18 16:00:39.071] [ObservableMenuItem] Menu item: show-all
[DEBUG] [2026-06-18 16:00:39.072] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.072] [ObservableMenuItem]   Tree Path = #/show-all
[DEBUG] [2026-06-18 16:00:39.072] [ObservableMenuItem]   Translation Key = #/menubar/show-all
[DEBUG] [2026-06-18 16:00:39.073] [ObservableMenuItem] Menu item: --
[DEBUG] [2026-06-18 16:00:39.073] [ObservableMenuItem]   Not translating
[DEBUG] [2026-06-18 16:00:39.073] [ObservableMenuItem] Menu item: quit
[DEBUG] [2026-06-18 16:00:39.074] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.074] [ObservableMenuItem]   Tree Path = #/quit
[DEBUG] [2026-06-18 16:00:39.074] [ObservableMenuItem]   Translation Key = #/menubar/quit
[DEBUG] [2026-06-18 16:00:39.076] [ObservableMenuItem] Menu item: file
[DEBUG] [2026-06-18 16:00:39.077] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.077] [ObservableMenuItem]   Tree Path = #/file
[DEBUG] [2026-06-18 16:00:39.078] [ObservableMenuItem]   Translation Key = #/menubar/file/$title
[DEBUG] [2026-06-18 16:00:39.079] [ObservableMenuItem] Menu item: new-file
[DEBUG] [2026-06-18 16:00:39.079] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.080] [ObservableMenuItem]   Tree Path = #/file/new-file
[DEBUG] [2026-06-18 16:00:39.080] [ObservableMenuItem]   Translation Key = #/menubar/file/new-file
[DEBUG] [2026-06-18 16:00:39.081] [ObservableMenuItem] Menu item: new-project
[DEBUG] [2026-06-18 16:00:39.081] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.082] [ObservableMenuItem]   Tree Path = #/file/new-project
[DEBUG] [2026-06-18 16:00:39.082] [ObservableMenuItem]   Translation Key = #/menubar/file/new-project/$title
[DEBUG] [2026-06-18 16:00:39.083] [ObservableMenuItem] Menu item: new-window
[DEBUG] [2026-06-18 16:00:39.083] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.083] [ObservableMenuItem]   Tree Path = #/file/new-window
[DEBUG] [2026-06-18 16:00:39.084] [ObservableMenuItem]   Translation Key = #/menubar/file/new-window
[DEBUG] [2026-06-18 16:00:39.085] [ObservableMenuItem] Menu item: --
[DEBUG] [2026-06-18 16:00:39.085] [ObservableMenuItem]   Not translating
[DEBUG] [2026-06-18 16:00:39.085] [ObservableMenuItem] Menu item: open-folder
[DEBUG] [2026-06-18 16:00:39.086] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.086] [ObservableMenuItem]   Tree Path = #/file/open-folder
[DEBUG] [2026-06-18 16:00:39.086] [ObservableMenuItem]   Translation Key = #/menubar/file/open-folder
[DEBUG] [2026-06-18 16:00:39.087] [ObservableMenuItem] Menu item: open-file
[DEBUG] [2026-06-18 16:00:39.088] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.088] [ObservableMenuItem]   Tree Path = #/file/open-file
[DEBUG] [2026-06-18 16:00:39.089] [ObservableMenuItem]   Translation Key = #/menubar/file/open-file
[DEBUG] [2026-06-18 16:00:39.090] [ObservableMenuItem] Menu item: open-project
[DEBUG] [2026-06-18 16:00:39.090] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.091] [ObservableMenuItem]   Tree Path = #/file/open-project
[DEBUG] [2026-06-18 16:00:39.091] [ObservableMenuItem]   Translation Key = #/menubar/file/open-project
[DEBUG] [2026-06-18 16:00:39.092] [ObservableMenuItem] Menu item: open-recent
[DEBUG] [2026-06-18 16:00:39.093] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.093] [ObservableMenuItem]   Tree Path = #/file/open-recent
[DEBUG] [2026-06-18 16:00:39.094] [ObservableMenuItem]   Translation Key = #/menubar/file/open-recent/$title
[DEBUG] [2026-06-18 16:00:39.094] [ObservableMenuItem] Menu item: --
[DEBUG] [2026-06-18 16:00:39.095] [ObservableMenuItem]   Not translating
[DEBUG] [2026-06-18 16:00:39.095] [ObservableMenuItem] Menu item: save-file
[DEBUG] [2026-06-18 16:00:39.095] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.096] [ObservableMenuItem]   Tree Path = #/file/save-file
[DEBUG] [2026-06-18 16:00:39.096] [ObservableMenuItem]   Translation Key = #/menubar/file/save-file
[DEBUG] [2026-06-18 16:00:39.097] [ObservableMenuItem] Menu item: save-file-as
[DEBUG] [2026-06-18 16:00:39.097] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.097] [ObservableMenuItem]   Tree Path = #/file/save-file-as
[DEBUG] [2026-06-18 16:00:39.098] [ObservableMenuItem]   Translation Key = #/menubar/file/save-file-as
[DEBUG] [2026-06-18 16:00:39.099] [ObservableMenuItem] Menu item: save-project
[DEBUG] [2026-06-18 16:00:39.099] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.099] [ObservableMenuItem]   Tree Path = #/file/save-project
[DEBUG] [2026-06-18 16:00:39.100] [ObservableMenuItem]   Translation Key = #/menubar/file/save-project
[DEBUG] [2026-06-18 16:00:39.101] [ObservableMenuItem] Menu item: save-all
[DEBUG] [2026-06-18 16:00:39.101] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.101] [ObservableMenuItem]   Tree Path = #/file/save-all
[DEBUG] [2026-06-18 16:00:39.102] [ObservableMenuItem]   Translation Key = #/menubar/file/save-all
[DEBUG] [2026-06-18 16:00:39.102] [ObservableMenuItem] Menu item: --
[DEBUG] [2026-06-18 16:00:39.103] [ObservableMenuItem]   Not translating
[DEBUG] [2026-06-18 16:00:39.103] [ObservableMenuItem] Menu item: close-file
[DEBUG] [2026-06-18 16:00:39.104] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.104] [ObservableMenuItem]   Tree Path = #/file/close-file
[DEBUG] [2026-06-18 16:00:39.104] [ObservableMenuItem]   Translation Key = #/menubar/file/close-file
[DEBUG] [2026-06-18 16:00:39.105] [ObservableMenuItem] Menu item: close-project
[DEBUG] [2026-06-18 16:00:39.105] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.105] [ObservableMenuItem]   Tree Path = #/file/close-project
[DEBUG] [2026-06-18 16:00:39.105] [ObservableMenuItem]   Translation Key = #/menubar/file/close-project
[DEBUG] [2026-06-18 16:00:39.106] [ObservableMenuItem] Menu item: close-window
[DEBUG] [2026-06-18 16:00:39.106] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.107] [ObservableMenuItem]   Tree Path = #/file/close-window
[DEBUG] [2026-06-18 16:00:39.107] [ObservableMenuItem]   Translation Key = #/menubar/file/close-window
[DEBUG] [2026-06-18 16:00:39.108] [ObservableMenuItem] Menu item: view
[DEBUG] [2026-06-18 16:00:39.108] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.108] [ObservableMenuItem]   Tree Path = #/view
[DEBUG] [2026-06-18 16:00:39.108] [ObservableMenuItem]   Translation Key = #/menubar/view/$title
[DEBUG] [2026-06-18 16:00:39.109] [ObservableMenuItem] Menu item: editor
[DEBUG] [2026-06-18 16:00:39.109] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.109] [ObservableMenuItem]   Tree Path = #/view/editor
[DEBUG] [2026-06-18 16:00:39.109] [ObservableMenuItem]   Translation Key = #/menubar/view/editor/$title
[DEBUG] [2026-06-18 16:00:39.110] [ObservableMenuItem] Menu item: tools
[DEBUG] [2026-06-18 16:00:39.110] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.110] [ObservableMenuItem]   Tree Path = #/tools
[DEBUG] [2026-06-18 16:00:39.110] [ObservableMenuItem]   Translation Key = #/menubar/tools/$title
[DEBUG] [2026-06-18 16:00:39.111] [ObservableMenuItem] Menu item: convert
[DEBUG] [2026-06-18 16:00:39.111] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.111] [ObservableMenuItem]   Tree Path = #/tools/convert
[DEBUG] [2026-06-18 16:00:39.112] [ObservableMenuItem]   Translation Key = #/menubar/tools/convert/$title
[DEBUG] [2026-06-18 16:00:39.113] [ObservableMenuItem] Menu item: help
[DEBUG] [2026-06-18 16:00:39.113] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.114] [ObservableMenuItem]   Tree Path = #/help
[DEBUG] [2026-06-18 16:00:39.114] [ObservableMenuItem]   Translation Key = #/menubar/help/$title
[DEBUG] [2026-06-18 16:00:39.115] [ObservableMenuItem] Menu item: online-doc
[DEBUG] [2026-06-18 16:00:39.115] [ObservableMenuItem]   Translating
[DEBUG] [2026-06-18 16:00:39.116] [ObservableMenuItem]   Tree Path = #/help/online-doc
[DEBUG] [2026-06-18 16:00:39.116] [ObservableMenuItem]   Translation Key = #/menubar/help/online-doc
[DEBUG] [2026-06-18 16:00:39.117] [ObservableMenuItem] Menu item: dynamic-key-example
[DEBUG] [2026-06-18 16:00:39.118] [ObservableMenuItem]   Not translating
```
