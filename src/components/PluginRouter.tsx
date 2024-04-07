import { DialogButton, Navigation } from "decky-frontend-lib";
import { VFC } from "react";

/**
 * An example of having a custom route for a Plugin.
 */
export const PluginRouterDemo: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      Hello World!
      <DialogButton onClick={() => Navigation.NavigateToLibraryTab()}>
        Go to Library
      </DialogButton>
    </div>
  );
};
