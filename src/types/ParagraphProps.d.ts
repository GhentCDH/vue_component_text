import type { Line } from "./Line";
import type { ParagraphHeaderComponentType } from "./ParagraphHeaderComponentType";
import type { ParagraphStyle } from "./ParagraphStyle";

export interface ParagraphProps {
  id: string;
  headerComponentType?: ParagraphHeaderComponentType;
  header?: string;
  number?: number;
  paragraphStyle?: ParagraphStyle;
  lines: Line[];
}
