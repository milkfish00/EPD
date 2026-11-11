import type { ArrayOfObjectsInputProps } from "sanity";

/**
 * Array input that hides the "Add item" / upload controls once `max` items exist.
 * Pair with `rule.max(max)` validation as a backstop (e.g. for drag-and-drop uploads).
 */
export function createMaxItemsArrayInput(max: number) {
  function NoArrayFunctions() {
    return null;
  }

  function MaxItemsArrayInput(props: ArrayOfObjectsInputProps) {
    const count = props.value?.length ?? 0;
    if (count >= max) {
      return props.renderDefault({
        ...props,
        arrayFunctions: NoArrayFunctions,
      });
    }
    return props.renderDefault(props);
  }

  return MaxItemsArrayInput;
}
