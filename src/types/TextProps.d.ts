import type { ParagraphHeaderComponentType } from "./ParagraphHeaderComponentType";
import type { ParagraphProps } from "./ParagraphProps";
import type { ParagraphStyle } from "./ParagraphStyle";

export interface TextProps {
  displayHeaders?: boolean;
  headerComponentType?: ParagraphHeaderComponentType;
  paragraphStyle?: ParagraphStyle;
  paragraphs: ParagraphProps[];
}
