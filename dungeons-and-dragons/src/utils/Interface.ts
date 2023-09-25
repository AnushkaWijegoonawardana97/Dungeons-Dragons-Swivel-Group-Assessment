import { ReactElement } from "react";

export interface ElevationScrollProps {
    children: ReactElement;
    window?: () => Window;
}