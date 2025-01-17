/**
 * WordPress dependencies
 */
import {
	headingLevel1,
	headingLevel2,
	headingLevel3,
	headingLevel4,
	headingLevel5,
	headingLevel6,
	paragraph,
} from '@wordpress/icons';

/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelIcon props.
 *
 * @typedef WPHeadingLevelIconProps
 *
 * @property {number} level The heading level to show an icon for.
 */

const LEVEL_TO_PATH = {
	0: paragraph,
	1: headingLevel1,
	2: headingLevel2,
	3: headingLevel3,
	4: headingLevel4,
	5: headingLevel5,
	6: headingLevel6,
};

/**
 * Heading level icon.
 *
 * @param {WPHeadingLevelIconProps} props Component props.
 *
 * @return {?WPComponent} The icon.
 */
export default function HeadingLevelIcon( { level } ) {
	return LEVEL_TO_PATH[ level ] ?? null;
}
