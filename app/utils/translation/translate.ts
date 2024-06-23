import 'server-only';
import { TrFn } from '@/app/utils/translation/i18n';


export const tr: TrFn = (...params) => {
    const translatable = params[0];
    const args = params.length === 2 ? params[1] : {};

    return translatable('de', args as any);
};
