/**
 * Color palette constants matching claat parser requirements.
 * These hex values are extracted from claat/parser/gdoc/css.go
 * 
 * DO NOT MODIFY these values unless the parser changes.
 */

// Text colors
const META_COLOR = '#b7b7b7';           // Duration, Environment annotations (dark grey 1)

// Background colors
const BUTTON_COLOR = '#6aa84f';         // Download buttons (dark green 1)
const INFOBOX_POSITIVE = '#d9ead3';     // Positive infobox (light green 3)
const INFOBOX_NEGATIVE = '#fce5cd';     // Negative infobox (light orange 3)
const SURVEY_COLOR = '#cfe2f3';         // Survey blocks (light blue 3)

// Font families
const FONT_CODE = 'Courier New';        // Code snippets
const FONT_CONSOLE = 'Consolas';        // Terminal/Console output

/**
 * Google Docs color palette mappings
 * These are the actual palette colors in Google Docs that match our hex values
 */
const GDOCS_COLORS = {
    // For text foreground color
    darkGrey1: META_COLOR,

    // For background/highlight colors
    darkGreen1: BUTTON_COLOR,
    lightGreen3: INFOBOX_POSITIVE,
    lightOrange3: INFOBOX_NEGATIVE,
    lightBlue3: SURVEY_COLOR
};

/**
 * Helper to convert hex to RGB object for Google Docs API
 */
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red: parseInt(result[1], 16) / 255,
        green: parseInt(result[2], 16) / 255,
        blue: parseInt(result[3], 16) / 255
    } : null;
}

/**
 * Color definitions for Google Docs API (0-1 range)
 */
const RGB_COLORS = {
    metaColor: hexToRgb(META_COLOR),
    buttonColor: hexToRgb(BUTTON_COLOR),
    infoboxPositive: hexToRgb(INFOBOX_POSITIVE),
    infoboxNegative: hexToRgb(INFOBOX_NEGATIVE),
    surveyColor: hexToRgb(SURVEY_COLOR)
};
