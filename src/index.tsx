import {
  ButtonItem,
  definePlugin,
  DialogButton,
  Menu,
  MenuItem,
  Navigation,
  PanelSection,
  PanelSectionRow,
  ServerAPI,
  showContextMenu,
  staticClasses,
} from "decky-frontend-lib";
import { VFC } from "react";

import { LuPartyPopper } from "react-icons/lu";

import { PluginController } from "./lib/controllers/PluginController";
import { PythonInterop } from "./lib/controllers/PythonInterop";
import { PluginContextProvider, usePluginState } from "./state/PluginContext";
import { PluginState } from "./state/PluginState";

import logo from "../assets/logo.png";

declare global {
  var SteamClient: SteamClient;
  let collectionStore: CollectionStore;
  let loginStore: LoginStore;
  //* This casing is correct, idk why it doesn't match the others.
  let securitystore: SecurityStore;
}


/**
 * The Quick Access Menu content for your plugin.
 */
const Content: VFC<{}> = ({ }) => {
  const { buttonLabel } = usePluginState();
  
  return (
    //* scoping styles like this means you can modify how Steam UI elements look without interfering with other plugins and the rest of the UI.
    <div className="plugin-template-scope">
      <div style={{ margin: "5px", marginTop: "0px" }}>
        Here is where you will put the core of your plugin.
      </div>
      <PanelSection title="Plugin Body">
        <PanelSectionRow>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} />
          </div>
        </PanelSectionRow>

        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={() => {
              PythonInterop.toast("Toast Example", `Your button label: ${buttonLabel}`);
            }}
          >
            {buttonLabel}
          </ButtonItem>
        </PanelSectionRow>

        <PanelSectionRow>
          <ButtonItem
            layout="below"
            // @ts-ignore
            onClick={(e) =>
              showContextMenu(
                <Menu label="Menu" cancelText="Close" onCancel={() => {}}>
                  <MenuItem onSelected={() => {}}>Item #1</MenuItem>
                  <MenuItem onSelected={() => {}}>Item #2</MenuItem>
                  <MenuItem onSelected={() => {}}>Item #3</MenuItem>
                </Menu>,
                e.currentTarget ?? window
              )
            }
          >
            Context Menu
          </ButtonItem>
        </PanelSectionRow>

        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={() => {
              Navigation.CloseSideMenus();
              Navigation.Navigate("/decky-plugin-test");
            }}
          >
            Router Demo
          </ButtonItem>
        </PanelSectionRow>
      </PanelSection>
    </div>
  );
};

const PluginRouterDemo: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      Hello World!
      <DialogButton onClick={() => Navigation.NavigateToLibraryTab()}>
        Go to Library
      </DialogButton>
    </div>
  );
};

export default definePlugin((serverAPI: ServerAPI) => {
  // TODO: define any route patches here
  // ex: let libraryPatch: RoutePatch;

  PythonInterop.setServer(serverAPI);
  const pluginState = new PluginState()
  PluginController.setup(serverAPI, pluginState);

  // TODO: define any custom routes here
  serverAPI.routerHook.addRoute("/tormak-decky-template-router", () => (
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
    title: <div className={staticClasses.Title}>Tormak's Plugin Template</div>,
    content:
      <PluginContextProvider PluginStateClass={pluginState}>
        <Content />
      </PluginContextProvider>,
    icon: <LuPartyPopper />,
    onDismount: () => {
      // TODO: unregister any route patches here.

      // TODO: remove any custom routes here
      serverAPI.routerHook.removeRoute("/tormak-decky-template-router");

      loginUnregisterer.unregister();
      PluginController.dismount();
    },
  };
});

