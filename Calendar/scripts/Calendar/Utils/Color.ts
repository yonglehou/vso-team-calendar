﻿import Utils_Core = require("VSS/Utils/Core");


var allColors = [
    "D6252E", /*red*/
    "4AB63F", /*green*/
    "40BD95", /*teal*/
    "859A52", /*olive*/
    "3267B8", /*blue*/
    "613DB4", /*purple*/
    "A34E78", /*maroon*/
    "C4CCDD", /*steal*/
    "8C9CBD", /*dark steal*/
    "AF1E25", /*dark red*/
    "B14F0D", /*dark orange*/
    "AB7B05", /*dark peach*/
    "999400", /*dark yellow*/
    "35792B", /*dark green*/
    "2E7D64", /*dark teal*/
    "5F6C3A", /*dark olive*/
    "2A5191", /*dark blue*/
    "50328F", /*dark purple*/
    "82375F" /*dark maroon*/

];

var daysOffColor = "#F06C15"; /*orange*/
var nonWorkingDayColor = "#F5F5F5";
var currentIterationColor = "#C1E6FF"; /*dark gray*/

/**
 * Generates a color from the specified name
 * @param name String value used to generate a color
 * @return RGB color in the form of #RRGGBB
 */
export function generateColor(name: string): string {
    name = name.toLowerCase();
    if (name === "daysoff") {
        return daysOffColor;
    }
    var value = 0;
    for (var i = 0; i < (name || "").length; i++) {
        value += name.charCodeAt(i) * (i + 1);
    }

    return Utils_Core.StringUtils.format("#{0}", allColors[value % allColors.length]);
}

/**
 * Generates a background color from the specified name
 * @param name String value used to generate a color
 * @return RGB color in the form of #RRGGBB
 */
export function generateBackgroundColor(name: string): string {

    return currentIterationColor;
}


