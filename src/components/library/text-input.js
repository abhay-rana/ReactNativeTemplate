import React, { memo, useState } from 'react';
import { TextInput as RNTextInput, TouchableOpacity, View } from 'react-native';
import EyeCloseSvg from '~/assets/svg/eye-close.svg';
import EyeOpenSvg from '~/assets/svg/eye-open.svg';
import Text from '~/components/library/text';
import tw from '~/styles/tailwind';
import themeVar from '~/styles/theme-var';

const TextInput = React.forwardRef(
    (
        {
            style,
            type = 'text',
            stacked,
            success,
            note,
            error,
            small,
            large,
            label,
            onFocus,
            disabled,
            onBlur,
            bordered,
            value,
            multiline,
            ...props
        },
        ref
    ) => {
        const [focusStyle, setFocusStyle] = useState({
            labelColor: themeVar.gray.light,
            inputBorderColor: themeVar.gray.light,
        });

        const [show_password, toggleShowPassword] = useState(false);
        if (type === 'password') {
            // then show the eye icon and eye icon is clickable then change the state
        }

        const show_error = error != null;
        const show_success = success != null;
        const show_note = note != null;

        let input_style = 'py-0';
        if (!!bordered) {
            input_style += ' border px-2';
        } else if (stacked) {
            input_style += ' border-b px-0';
        }

        if (!!success) {
            input_style += ' border-primary';
        } else if (!!error) {
            input_style += ' border-danger text-danger';
        } else {
            input_style += ' border-gray-medium text-gray-dark';
        }
        if (!multiline) {
            if (!!small) {
                input_style += ' h-7 text-base leading-4';
            } else if (!!large) {
                input_style += ' h-10 text-lg leading-5';
            } else {
                input_style += ' h-8 text-md leading-5';
            }
        } else {
            input_style += ' py-1';
        }

        const onInputFocus = () => {
            if (!!onFocus) onFocus();
            setFocusStyle({
                labelColor: themeVar.primary.default,
                borderColor: themeVar.primary.default,
            });
        };
        const onInputBlur = () => {
            if (!!onBlur) onBlur();
            setFocusStyle({
                labelColor: themeVar.gray.light,
                borderColor: themeVar.gray.light,
            });
        };

        const togglePasswordVisibility = () => {
            toggleShowPassword(!show_password);
        };
        return (
            <View style={tw`relative`}>
                {!!label ? (
                    <Text
                        style={[tw`text-sm`, { color: focusStyle.labelColor }]}
                    >
                        {label}
                    </Text>
                ) : null}
                <View style={tw`relative`}>
                    <RNTextInput
                        ref={ref}
                        multiline={multiline}
                        value={value?.toString()}
                        onFocus={onInputFocus}
                        onBlur={onInputBlur}
                        textAlignVertical={!!multiline ? 'top' : undefined}
                        secureTextEntry={type === 'password' && !show_password}
                        style={[
                            tw`${input_style}`,
                            style,
                            {
                                fontFamily: props.w200
                                    ? 'ProximaNovaLight'
                                    : props.w400
                                    ? 'ProximaNovaMedium'
                                    : props.w300
                                    ? 'ProximaNovaRegular'
                                    : props.w600
                                    ? 'ProximaNovaBold'
                                    : props.w700
                                    ? 'ProximaNovaExtraBold'
                                    : 'ProximaNovaSemiBold',
                            },
                            !!bordered
                                ? { borderColor: focusStyle.borderColor }
                                : !!stacked
                                ? { borderBottomColor: focusStyle.borderColor }
                                : null,
                        ]}
                        placeholderTextColor="#b7b7b7"
                        {...props}
                    />
                    {type === 'password' ? (
                        show_password ? (
                            <TouchableOpacity
                                style={tw`absolute top-3 right-4 transform -translate-y-1/2 ${
                                    disabled ? 'text-gray-400' : 'text-gray-600'
                                }`}
                                onPress={togglePasswordVisibility}
                            >
                                <EyeOpenSvg width={20} height={20} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={tw`absolute top-3 right-4 transform -translate-y-1/2 ${
                                    disabled ? 'text-gray-400' : 'text-gray-600'
                                }`}
                                onPress={togglePasswordVisibility}
                            >
                                <EyeCloseSvg width={20} height={20} />
                            </TouchableOpacity>
                        )
                    ) : null}
                </View>
                {show_error || show_note || show_success ? (
                    <View style={tw`h-6`}>
                        {show_error ? (
                            <Text style={tw`text-xs text-danger`}>{error}</Text>
                        ) : show_note ? (
                            <Text style={tw`text-xs text-gray-medium`}>
                                {note}
                            </Text>
                        ) : show_success ? (
                            <Text style={tw`text-xs text-success`}>
                                {success}
                            </Text>
                        ) : null}
                    </View>
                ) : null}
            </View>
        );
    }
);

TextInput.displayName = 'TextInput';
export default memo(TextInput);
