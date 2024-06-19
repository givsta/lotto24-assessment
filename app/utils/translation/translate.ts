import 'server-only';
import { TrFn } from '@/app/utils/translation/i18n';


export const tr: TrFn = (...params) => {
    const translatable = params[0];
    const args = params.length === 2 ? params[1] : {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return translatable('de', args as any);
};
