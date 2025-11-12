/*
==========================================================================
    Dashboards

==========================================================================
*/
// == Elements
// -------------------------------------------------------------------------------------------------------------------//
import { card } from "../buildingblocks/card";
export const boardCard = {
    container: {
        ...card.container,
        flex: 1,
        height: 150
    }
};
export const boardCardTablet = {
    container: {
        ...card.container,
        flex: 1,
        aspectRatio: 1
    }
};
