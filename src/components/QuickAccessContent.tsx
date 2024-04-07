import { VFC, useEffect } from "react";
import { LogController } from "../lib/controllers/LogController";

import { FaCircleExclamation } from "react-icons/fa6";
import { QamStyles } from "./styles/QamStyles";
import { usePluginState } from "../state/PluginContext";
import { ButtonItem, Focusable, Menu, MenuItem, Navigation, PanelSection, PanelSectionRow, showContextMenu } from "decky-frontend-lib";
import { PythonInterop } from "../lib/controllers/PythonInterop";

/**
 * The Quick Access Menu content for the Plugin.
 */
export const QuickAccessContent: VFC<{}> = ({ }) => {
  // * Load your state
  const { buttonLabel } = usePluginState();

  useEffect(() => {
    // TODO: handle any onMount tasks
  }, []);

  // TODO: define any function this component will use

  return (
    <div className="quick-start-scope">
      {LogController.errorFlag && <div style={{ padding: '0 15px', marginBottom: '40px' }}>
        <h3>
          <FaCircleExclamation style={{ height: '.8em', marginRight: '5px' }} fill="red" />
          QuickStart encountered an error
        </h3>
        <div style={{ wordWrap: 'break-word' }}>
          Please reach out to
          <br />
          <a href='https://github.com/Tormak9970/QuickStart/issues'>https://github.com/Tormak9970/QuickStart/issues</a>
          <br />
          {/* TODO: once you make a forum post for support for your plugin, add it here */}
          {/* or
          <br />
          <a href='https://discord.com/channels/960281551428522045/1049449185214206053'>https://discord.com/channels/960281551428522045/1049449185214206053</a>
          <br />
          for support. */}
        </div>
      </div>}
      <QamStyles />
      <Focusable>
        <div style={{ margin: "5px", marginTop: "0px" }}>
          Here is where you will put the core of your plugin.
        </div>
        <PanelSection title="Plugin Body">
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
      </Focusable>
    </div>
  );
};
