import { Fragment } from 'react';

const AVAILABLE_LANGUAGES = ['de'] as const;

export type ExtractPlaceholderKeys<S extends string> = never;

export type TranslatableArgs<German extends string> = {
    prefix?: string;
} & Record<ExtractPlaceholderKeys<German>, string | JSX.Element>; // and ensure the rest of the properties conform to the structure where keys are

export type TranslatableReturnType<
    German extends string,
    Args extends TranslatableArgs<German>,
> = Args[keyof Args] extends string ? string : (string | JSX.Element)[];

export type Translatable<German extends string, Args extends TranslatableArgs<German>> = (
    lang: AvailableLanguage,
    args: Args,
) => TranslatableReturnType<German, Args>;

export type TrFn = <German extends string, Args extends TranslatableArgs<German>>(
    translatable: Translatable<German, Args>,
    args?: Args
) => TranslatableReturnType<German, Args>;

export type Translations<German extends string> = {
    de: German;
};

export type AvailableLanguage = (typeof AVAILABLE_LANGUAGES)[number];

const defaultLanguage: AvailableLanguage = 'de';
export const getDefaultLanguage = () => defaultLanguage;

export const isAvailableLanguage = (maybeLanguage: string): maybeLanguage is AvailableLanguage =>
    AVAILABLE_LANGUAGES.includes(maybeLanguage as AvailableLanguage);

function splitStringWithKeys(
    inputString: string,
    keysObject: { [key: string]: any },
): string[] {
    const regex = new RegExp(`(\\{(?:${Object.keys(keysObject).join('|')})\\})`, 'g');
    return inputString.split(regex);
}

export const createTranslation = <German extends string>(langs: Translations<German>) =>
    function translatable<Args extends TranslatableArgs<German>>(
        lang: keyof Translations<German>,
        args: Args,
    ) {
        const translation = langs[lang];

        const result = splitStringWithKeys(translation, args).map((part) => {
            if (part.startsWith('{') && part.endsWith('}')) {
                const value =
                    args[part.replace(/(^{)|(}$)/g, '') as keyof TranslatableArgs<German>];

                if (value) {
                    if (typeof value === 'string') {
                        return value;
                    }
                    return <Fragment key={part}>{value}</Fragment>;
                }
            }

            return part;
        });

        if (result.every((part) => typeof part === 'string')) {
            return result.join('') as TranslatableReturnType<German, Args>;
        } else {
            return result as TranslatableReturnType<German, Args>;
        }
    };
