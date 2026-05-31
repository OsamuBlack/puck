import { ElementType, ReactNode } from "react";
import { DropZoneProps } from "../../../components/DropZone/types";
import { Content } from "../../../types";
import { FieldTransforms } from "../../../types/API/FieldTransforms";

export const getSlotTransform = (
  renderSlotEdit: (dzProps: DropZoneProps & { content: Content }) => ReactNode,
  renderSlotRender: (
    dzProps: DropZoneProps & { content: Content }
  ) => ReactNode = renderSlotEdit
): FieldTransforms => ({
  slot: ({ value: content, propName, field, isReadOnly }) => {
    const render = isReadOnly ? renderSlotRender : renderSlotEdit;

    const Slot = <T extends ElementType = "div">(dzProps?: Omit<DropZoneProps<T>, "zone">) =>
      render({
        allow: field?.type === "slot" ? field.allow : [],
        disallow: field?.type === "slot" ? field.disallow : [],
        ...dzProps,
        zone: propName,
        content,
      } as DropZoneProps & { content: Content });

    return Slot;
  },
});
