import { PythonInterop } from "./PythonInterop";

/**
 * Logging controller that logs to both the frontend and backend.
 */
export class LogController {
  /**
   * Logs a message to the plugin's log file and the frontend console.
   * @param message The message to log.
   */
	static log(...args: any[]) {
    console.log(
      `%c Plugin Template %c INFO %c`,
      'background: #3480eb; color: black;',
      'background: #1abc9c; color: black;',
      'background: transparent;',
      ...args
    );
    PythonInterop.log(args.join(" "));
  }

  /**
   * Logs a warning to the plugin's log file and the frontend console.
   */
	static warn(...args: any[]) {
    console.warn(
      `%c Plugin Template %c WARNING %c`,
      'background: #3480eb; color: black;',
      'background: #e3c907; color: black;',
      'background: transparent;',
      ...args
    );
    PythonInterop.warn(args.join(" "));
  }

  /**
   * Logs an error to the plugin's log file and the frontend console.
   */
	static error(...args: any[]) {
    console.error(
      `%c Plugin Template %c ERROR %c`,
      'background: #3480eb; color: black;',
      'background: #c70808; color: black;',
      'background: transparent;',
      ...args
    );
    PythonInterop.error(args.join(" "));
  }

  /**
   * Throws a new error and logs it to the plugin's log file.
   */
	static throw(...args: any[]) {
    PythonInterop.error(args.join(" "));
    throw new Error([`%c Plugin Template %c ERROR %c`, 'background: #3480eb; color: black;', 'background: #c70808; color: black;', 'background: transparent;', ...args].join(' '));
  }
}
