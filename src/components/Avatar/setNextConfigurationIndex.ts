import type { setNextConfigurationIndexProps } from "./types";

/**
 * Increment the configuration index by one.
 *
 * @function
 * @param configurations List of avatar configurations.
 * @param setConfigurationIndex Function to set the configuration index.
 */
export default function ({
  configurations,
  setConfigurationIndex,
}: setNextConfigurationIndexProps) {
  setConfigurationIndex((currentIndex: number) =>
    currentIndex < configurations.length - 1 ? currentIndex + 1 : 0,
  );
}
