import { gamepadDialogClasses, quickAccessControlsClasses } from "decky-frontend-lib";
import { VFC } from "react";

/**
 * All css styling for the Quick Access Menu part of the Plugin.
 */
export const QamStyles: VFC<{}> = ({}) => {
  return (
    <style>{`
      .quick-start-scope {
        width: inherit;
        height: inherit;

        flex: 1 1 1px;
        scroll-padding: 48px 0px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: stretch;
      }

      .quick-start-scope .${quickAccessControlsClasses.PanelSection} {
        padding: 0px;
        margin: 0px;
        width: 100%;
      }

      .quick-start-scope .${quickAccessControlsClasses.PanelSectionTitle} {
        margin-top: 3px;
        margin-left: 16px;
      }

      .quick-start-scope .${gamepadDialogClasses.FieldDescription} {
        margin: 0px 16px;
        margin-top: 5px;
      }
      .quick-start-scope .${gamepadDialogClasses.FieldLabel} {
        margin-left: 16px;
      }

      .quick-start-scope .seperator {
        width: 100%;
        height: 1px;
        background: #23262e;
      }
    `}</style>
  );
}
