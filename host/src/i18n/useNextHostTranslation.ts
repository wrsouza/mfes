import useInstanceTranslation from 'i18next-shared-lib/lib/useInstanceTranslation';
import TranslationsEN from './en';
import TranslationsES from './es';
import TranslationsPT from './pt';

const NEXT_HOST_I18N_INSTANCE_NAME = "host";
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useNextHostTranslation = useInstanceTranslation(NEXT_HOST_I18N_INSTANCE_NAME, {
    en: TranslationsEN,
    es: TranslationsES,
    pt: TranslationsPT
});

export default useNextHostTranslation;