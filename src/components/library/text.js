import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText, View } from 'react-native';

import tw from '~/styles/tailwind';

import {
    PRIMARY_FONT_BLACK,
    PRIMARY_FONT_BOLD,
    PRIMARY_FONT_SEMIBOLD,
    SECONDARY_FONT_BLACK,
    SECONDARY_FONT_LIGHT,
    SECONDARY_FONT_REGULAR,
} from '~/scripts/theme-var';

const primary_weight = {
    w300: {
        fontFamily: PRIMARY_FONT_SEMIBOLD,
    },
    w500: {
        fontFamily: PRIMARY_FONT_BOLD,
    },
    w700: {
        fontFamily: PRIMARY_FONT_BLACK,
    },
};
const secondary_weight = {
    w300: {
        fontFamily: SECONDARY_FONT_LIGHT,
    },
    w500: {
        fontFamily: SECONDARY_FONT_REGULAR,
    },
    w700: {
        fontFamily: SECONDARY_FONT_BLACK,
    },
};

const getStyle = {
    h1: {
        fontFamily: PRIMARY_FONT_BLACK,
        fontSize: 23,
    },
    h2: {
        fontFamily: PRIMARY_FONT_BOLD,
        fontSize: 20,
    },
    h3: {
        fontFamily: PRIMARY_FONT_SEMIBOLD,
        fontSize: 18,
    },
    p: {
        fontFamily: PRIMARY_FONT_SEMIBOLD,
        fontSize: 16,
    },
    p2: {
        fontFamily: SECONDARY_FONT_BLACK,
        fontSize: 16,
    },
};
const getTextStyle = (type, weight) => {
    if (type === 'primary' && !weight) {
        return {
            fontFamily: PRIMARY_FONT_SEMIBOLD,
        };
    } else if (type === 'primary' && weight) {
        return primary_weight[weight];
    } else if (type === 'secondary' && !weight) {
        return {
            fontFamily: SECONDARY_FONT_LIGHT,
        };
    } else if (type === 'secondary' && weight) {
        return secondary_weight[weight];
    }
};

const Text = ({
    style,
    children,
    as = 'p',
    font_type = 'primary',
    font_weight,
    color,
    ...restProps
}) => {
    let extra_class;
    extra_class = getStyle[as];

    const classes = getTextStyle(font_type, font_weight);

    let color_class;
    if (color === 'primary') {
        color_class += ` text-primary`;
    } else if (color === 'secondary') {
        color_class += ` text-secondary`;
    } else if (color === 'white') {
        color_class += ` text-white`;
    } else if (color === 'black') {
        color_class += ` text-black`;
    } else if (color === 'danger') {
        color_class += ` text-danger`;
    } else if (color === 'success') {
        color_class += ` text-success`;
    } else if (color === 'warning') {
        color_class += ` text-warning`;
    }

    return (
        <View>
            <RNText
                style={[extra_class, classes, style, tw`${color_class}`]}
                {...restProps}
            >
                {children}
            </RNText>
        </View>
    );
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    as: PropTypes.oneOf(['h1', 'h2', 'p']),
    font_type: PropTypes.oneOf(['primary', 'secondary']),
    font_weight: PropTypes.oneOf(['w100', 'w300', 'w700', 'w900']),
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'danger',
        'success',
        'black',
        'warning',
        'white',
    ]),
};

export default Text;
