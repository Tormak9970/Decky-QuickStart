import { LuPartyPopper } from "react-icons/lu";
import { definePlugin, routerHook } from "@decky/api";
import { staticClasses } from "@decky/ui";

import { PluginController } from "./lib/controllers/PluginController";
import { PluginContextProvider } from "./state/PluginContext";
import { PluginState } from "./state/PluginState";
import { QuickAccessContent } from "./components/QuickAccessContent";
import { PluginRouterDemo } from "./components/PluginRouter";

declare global {
  var SteamClient: SteamClient;
  let collectionStore: CollectionStore;
  let loginStore: LoginStore;
  //* This casing is correct, idk why it doesn't match the others.
  let securitystore: SecurityStore;
}

export default definePlugin(() => {
  // TODO: define any route patches here
  // ex: let libraryPatch: RoutePatch;

  const pluginState = new PluginState()
  PluginController.setup(pluginState);

  // TODO: define any custom routes here
  routerHook.addRoute("/quick-start-router", () => (
    <PluginContextProvider PluginStateClass={pluginState}>
      <PluginRouterDemo />
    </PluginContextProvider>
  ));

  const loginUnregisterer = PluginController.initOnLogin(async () => {
    // TODO: initialize any state reloaded values here
    // const demo = await PythonInterop.getDemo();

    // TODO: perform the actual route patching here
    // ex: libraryPatch = patchLibrary(serverAPI);
  });

  return {
    title: <div className={staticClasses.Title}>QuickStart</div>,
    content:
      <PluginContextProvider PluginStateClass={pluginState}>
        <QuickAccessContent />
      </PluginContextProvider>,
    icon: <LuPartyPopper />,
    alwaysRender: false,
    onDismount: () => {
      // TODO: unregister any route patches here.

      // TODO: remove any custom routes here
      routerHook.removeRoute("/quick-start-router");

      loginUnregisterer.unregister();
      PluginController.dismount();
    },
  };
});

