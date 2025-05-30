---
title: VS Code Settings
description: How to use the vscodeSettings property in demo steps to change VS Code settings during a demo.
---

# VS Code Settings

You can use the `vscodeSettings` property in your demo steps to automatically change VS Code settings as part of your demo. This is useful for showing how different settings affect the editor or for preparing the environment for a specific scenario.

## Usage

Add the `vscodeSettings` property to a step in your demo file. The value should be an object where the keys are the setting IDs and the values are the desired setting values.

### Example

```json
{
  "title": "Enable line numbers",
  "vscodeSettings": {
    "editor.lineNumbers": "on"
  }
}
```

You can set multiple settings at once:

```json
{
  "title": "Configure editor",
  "vscodeSettings": {
    "editor.lineNumbers": "relative",
    "editor.wordWrap": "on",
    "workbench.colorTheme": "Default Dark+"
  }
}
```

## Notes

- The settings will be applied when the step is activated.
- Only settings that can be changed via the VS Code API will be updated.
- Settings are applied at the user level and may persist after the demo unless reverted in a later step.

For more information, see the [Demo Time documentation](https://github.com/estruyf/vscode-demo-time#vscode-settings-in-steps).
